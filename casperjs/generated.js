var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1311, height: 755};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('http://yandex.ru/images/?uinfo=sw-1440-sh-900-ww-1311-wh-715-pd-2-wp-16x10_2560x1600');
   casper.waitForSelector(".button.button_theme_pseudo.button_size_s.dropdown-menu__switcher",
       function success() {
           test.assertExists(".button.button_theme_pseudo.button_size_s.dropdown-menu__switcher");
           this.click(".button.button_theme_pseudo.button_size_s.dropdown-menu__switcher");
       },
       function fail() {
           test.assertExists(".button.button_theme_pseudo.button_size_s.dropdown-menu__switcher");
   });
   casper.waitForSelector(".button.button_theme_pseudo.button_size_s.dropdown-menu__switcher",
       function success() {
           test.assertExists(".button.button_theme_pseudo.button_size_s.dropdown-menu__switcher");
           this.click(".button.button_theme_pseudo.button_size_s.dropdown-menu__switcher");
       },
       function fail() {
           test.assertExists(".button.button_theme_pseudo.button_size_s.dropdown-menu__switcher");
   });
   casper.waitForSelector(".button.button_size_m.button_theme_pseudo.b-500px__info",
       function success() {
           test.assertExists(".button.button_size_m.button_theme_pseudo.b-500px__info");
           this.click(".button.button_size_m.button_theme_pseudo.b-500px__info");
       },
       function fail() {
           test.assertExists(".button.button_size_m.button_theme_pseudo.b-500px__info");
   });

   casper.run(function() {test.done();});
});
