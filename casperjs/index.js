casper.test.begin('yandex.images index', function(test) {

    casper.start('http://yandex.ru/images', function(response) {
        casper.viewport(1366, 900);
    });

    casper.then(function() {

        test.assertTitle('Яндекс.Картинки: поиск изображений в интернете', 'should open');

        this.fill('.search', {
            text: 'bmw'
        }, false);

        test.assertField('text', 'bmw', 'should fill input');

        this.click('.search .button');

    });

    casper.waitUntilVisible('.serp-list_type_search', function() {
        test.assertTitleMatches(/bmw: \d+ тыс изображений найдено в Яндекс.Картинках/, 'should do search');
    });

    casper.then(function() {
        this.scrollToBottom();
    })

    for(var i = 0; i < 4; i++) {
        casper.waitWhileVisible('.more_direction_next .spinner', function() {
            this.scrollToBottom();
        });
    }

    casper.waitUntilVisible('.more_direction_next .button', function() {
        test.assert(true, 'more button should be visible after scroll');
    });

    casper.run(function() {
        test.done();
    });

});
