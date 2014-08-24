// require("utils").dump(casper.cli.options);

casper.test.begin('yandex.images index', function(test) {

    // casper.userAgent('Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36');

    casper.start('http://yandex.ru/images', function(response) {
        casper.viewport(1300, 900);
    });

    casper.then(function() {

        test.assertTitle('Яндекс.Картинки: поиск изображений в интернете', 'should be index page');

        this.fill('.search', {
            text: 'bmw'
        }, false);

        test.assertField('text', 'bmw', 'should fill input with "bmw"');

        this.click('.search .button');

    });

    casper.waitWhileVisible('.fade', function() {
        test.assertTitleMatches(/bmw: \d+ тыс изображений найдено в Яндекс.Картинках/, 'should do search for "bmw"');
    });

    casper.then(function() {
        this.scrollToBottom();
    });

    for(var i = 0; i < 4; i++) {
        casper.waitWhileVisible('.more_direction_next .spinner', function() {
            this.scrollToBottom();
        });
    }

    casper.waitUntilVisible('.more_direction_next .button', function() {
        test.pass('more button should be visible after scroll');
    });

    casper.then(function() {
        this.fill('.search', {
            text: 'audi'
        }, false);

        test.assertField('text', 'audi', 'should fill input with "audi" query');

        this.click('.search .button');
    });

    casper.waitWhileVisible('.fade', function() {
        test.assertTitleMatches(/audi: \d+ тыс изображений найдено в Яндекс.Картинках/, 'should do search for "audi"');
    });

    casper.then(function() {
        this.click('.search .service__url');
    });

    casper.waitUntilVisible('.b-page_type_index', function() {
        test.assertTitle('Яндекс.Картинки: поиск изображений в интернете', 'should be index after click to service-label');
    });

    casper.back().waitUntilVisible('.b-page_type_search', function() {
        test.assertTitleMatches(/audi: \d+ тыс изображений найдено в Яндекс.Картинках/, 'should back to "audi" query');
        test.assertNotVisible('.pane', 'pane should not be visible on this viewport');
        test.assertDoesntExist('.serp-item_selected_yes', 'no image should be selected');
        casper.viewport(1500, 900);
    });

    casper.then(function() {
        test.assertVisible('.pane', 'pane should be visible');
        test.assertExists('.serp-item_selected_yes', 'image should be selected');
        test.assertExists('.serp-item_selected_yes.serp-item_pos_0', 'first image should be selected');
    });

    casper.then(function() {
        // this can through warning, because we have prevent default on forms
        this.fill('.search', {
            text: 'пластиковые окна'
        }, true);
    });

    casper.waitWhileVisible('.fade').then(function() {
        test.assertExists('.serp-item_pos_3', 'have some unselected items');
        // we really need two mouse move for now :/
        this.mouse.move('.serp-item_pos_3');
        this.mouse.move('.serp-item_pos_3');
    });

    // casper.then(function() {
    //     var bounds = this.getElementBounds('.serp-item_pos_3')
    //     this.evaluate(function(bounds) {
    //         var event = $.Event('mousemove');
    //         e.pageX = bounds.left + 20;
    //         e.pageY = bounds.top + 20;
    //         $('.serp_item_pos_3').trigger(event);
    //     }, bounds);
    //     this.mouse.move(bounds.left + 30, bounds.top + 40);
    //     this.mouse.move(bounds.left + 40, bounds.top + 50);
    // })

    casper.waitUntilVisible('.serp-item_hovered_yes', function() {
        test.pass('item should be hovered');
        test.assertVisible('.serp-item_pos_3 .serp-item__snippet', 'snippet should be visible');
    });

    casper.run(function() {
        test.done();
    });

});
