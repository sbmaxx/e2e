require("utils").dump(casper.cli.options);

phantom.addCookie({
  'name': 'name',
  'value': 'value',
  'domain': '.yandex.ru'
});

casper.test.begin('yandex.images index', function(test) {

    // casper.userAgent('Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36');

    casper.start().viewport(1300, 900);

    casper.thenOpen('http://yandex.ru/images', function(response) {
        test.assertTitle('Яндекс.Картинки: поиск изображений в интернете', 'should be index page');

        // fill form without submit
        this.fill('.search', {
            text: 'bmw'
        }, false);

        test.assertField('text', 'bmw', 'should fill input with "bmw"');

        this.click('.search .button');
    });

    // wait while the page is loading
    casper.waitWhileVisible('.fade', function() {
        test.assertTitleMatches(/bmw: \d+ тыс изображений найдено в Яндекс.Картинках/, 'should do search for "bmw"');

        this.scrollToBottom();
        // do a lot of scroll like user does
        for(var i = 0; i < 4; i++) {
            // check while the spinner is visible
            casper.waitWhileVisible('.more_direction_next .spinner', function() {
                test.pass('loader on scroll');
                // do another scroll
                this.scrollToBottom();
            });
        }
    });

    // whait for button became visible
    casper.waitUntilVisible('.more_direction_next .button', function() {
        test.pass('more button should be visible after scroll');

        // fill search form with another text without submit
        this.fill('.search', {
            text: 'audi'
        }, false);

        test.assertField('text', 'audi', 'should fill input with "audi" query');

        // manual submit the form
        this.click('.search .button');
    });

    // wait while the page is loading
    casper.waitWhileVisible('.fade', function() {
        test.assertTitleMatches(/audi: \d+ тыс изображений найдено в Яндекс.Картинках/, 'should do search for "audi"');
        // click to service label
        this.click('.search .service__url');
    });

    // wait until b-page change mod
    casper.waitUntilVisible('.b-page_type_index', function() {
        test.assertTitle('Яндекс.Картинки: поиск изображений в интернете', 'should be index after click to service-label');
    });

    // do browser navigation back and wait until b-page change mod
    casper.back().waitUntilVisible('.b-page_type_search', function() {
        test.assertTitleMatches(/audi: \d+ тыс изображений найдено в Яндекс.Картинках/, 'should back to "audi" query');
    });

    casper.run(function() {
        test.done();
    });

});

casper.test.begin('viewports', 7, function(test) {

    casper.start().viewport(1300, 900);

    casper.thenOpen('http://yandex.ru/images/search?text=bmw', function(response) {
        // for this viewport we should not see the pane or any selected serp-items
        test.assertNotVisible('.pane', 'pane should not be visible on this viewport');
        test.assertDoesntExist('.serp-item_selected_yes', 'no image should be selected');
    });

    casper.viewport(1500, 900).then(function() {
        test.assertVisible('.pane', 'pane should be visible');
        test.assertExists('.serp-item_selected_yes', 'image should be selected');
        test.assertExists('.serp-item_selected_yes.serp-item_pos_0', 'first image should be selected');
    });

    casper.then(function() {
        // this can through warning, because we have prevent default on forms
        // fill && submit
        this.fill('.search', {
            text: 'пластиковые окна'
        }, true);
    });

    // wait for new searchdata
    casper.waitWhileVisible('.fade').then(function() {

        // we really need two mouse move for now :/
        this.mouse.move('.serp-item_pos_3');
        this.mouse.move('.serp-item_pos_3');

        // hovered_yes run via setTimeout, so wait for it
        casper.waitUntilVisible('.serp-item_hovered_yes', function() {
            test.pass('item should be hovered');
            test.assertVisible('.serp-item_pos_3 .serp-item__snippet', 'snippet should be visible');
        });

    });

    casper.run(function() {
        test.done();
    });

});

casper.test.begin('yandex.images mispell', 2, function(test) {

    casper.start();
    casper.viewport(1300, 900);

    casper.thenOpen('http://yandex.ru/images', function(response) {
        this.fill('.search', {
            text: 'жывотное'
        }, true);
    });

    casper.waitUntilVisible('.b-page_type_search', function() {
        test.pass();
        test.assertVisible('.misspell');
    });

    casper.run(function() {
        test.done();
    });

});
