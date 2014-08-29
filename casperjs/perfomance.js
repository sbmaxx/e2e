// performance.js
var casper = require("casper").create()
  , utils  = require("utils")
  , url    = casper.cli.get(0)
  , start  = new Date().getTime()
  , times  = []
  , sortBy = casper.cli.get('sort') === 'size' ? 'size' : 'time';

if (!url) {
    casper.echo("The url arg is missing").exit();
}

function formatNumber(number, chars, unit) {
    if (!number) {
        return new Array(chars + 1 + unit.length).join(' ');
    }
    var len = number.toString().length
      , newLen = chars - len + 1;
    return new Array(newLen).join(' ') + number.toString() + unit;
}

function formatSize(bytes) {
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'N/A';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    return (Math.round(bytes / Math.pow(1024, i) * 100) / 100) + sizes[i];
}

function formatTime(ms) {
    var seconds = ms / 1000;
    if (seconds < 1) return ms + 'ms';
    if (seconds < 60) return (Math.round(seconds * 100) / 100) + 's';
    return ms + 'ms';
}

function formatEntry(req, maxUrlChars) {
    var truncatedUrl = req.url
      , charsDiff = maxUrlChars - req.url.length;
    if (charsDiff < 0) {
        var pad = Math.floor(maxUrlChars / 2);
        truncatedUrl = req.url.slice(0, pad - 1) + '…' + req.url.slice(req.url.length - pad, req.url.length);
    } else {
        truncatedUrl += new Array(charsDiff + 1).join('…');
    }
    return utils.format("HTTP %s %s %s %s",
                        req.status || "???",
                        truncatedUrl,
                        formatNumber(req.size, 7, 'B'),
                        formatNumber(req.time, 7, 'ms'));
}

casper.on('resource.requested', function(resource) {
    times[resource.id] = {
        start: new Date().getTime(),
        url: resource.url,
        size: resource.size,
    };
});

casper.on('resource.received', function(resource) {
    if (resource.stage !== "end") return;
    times[resource.id].time = new Date().getTime() - times[resource.id].start;
    times[resource.id].status = resource.status;
    try {
        times[resource.id].size = parseInt(resource.headers.filter(function(header) {
            return header.name.toLowerCase().trim() === "content-length";
        })[0].value, 10);
    } catch (e) {
        times[resource.id].size = 0;
    }
});

casper.start(url).run(function() {
    times = times.filter(function(entry) {
        return entry !== null && entry.size;
    });
    var totalTime = new Date().getTime() - start
      , totalSize = times.map(function(entry) {
        return entry.size || 0;
    }).reduce(function(a, b) {
        return a + b;
    });
    this.echo(utils.format('Total loaded: %s %s', formatSize(totalSize), formatTime(totalTime)));
    times.sort(function(reqa, reqb) {
        if (sortBy === 'time') {
            return reqb.time - reqa.time;
        }
        return reqb.size - reqa.size;
    }).forEach(function(req) {
        this.echo(formatEntry(req, 50));
    }.bind(this));
    this.exit();
});
