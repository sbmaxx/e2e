casper.test.begin('ya.ru', function(test) {
    casper.start('http://ya.ru', function(response) {
        test.assertTitle('Яндекс', 'correct title');
        test.assertSelectorHasText('.copy-wrap .left span', '© 1997—' + (new Date()).getFullYear(), 'correct copyright date');
    }).run(function() {
        test.done();
    });
});
