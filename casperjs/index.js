casper.test.begin('yandex.images index', function(test) {

    casper.start('http://yandex.ru/images', function(response) {
        casper.viewport(1366, 900);
    });

    casper.then(function() {
        test.assertTitle('Яндекс.Картинки: поиск изображений в интернете');

        this.fill('.search', {
            text: 'bmw'
        }, false);

        test.assertField('text', 'bmw');

        this.click('.search .button');

        this.wait(1000, function() {
            test.assertTitleMatches(/bmw: \d+ тыс изображений найдено в Яндекс.Картинках/);
        });

        this.scrollToBottom();

        this.wait(1000, function() {
            test.assertVisible('.more_direction_next');
        });

    });

    casper.run(function() {
        test.done();
    });

});
