if (typeof chai === 'undefined') {
    console.log('This example requires chai to be installed adjacent to mocha-casperjs');
    casper.exit(-1);
}

describe('yandex.images', function() {
    before(function() {
        casper.start('http://yandex.ru/images');
        casper.viewport(1500, 1000);
    });

    it('should open index', function() {
        casper.getTitle().should.contain('Яндекс.Картинки');
    });

    it('should search bmw', function() {
        casper.then(function() {
            this.fill('.search', {
                text: 'bmw'
            }, true);
        });

        casper.waitUntilVisible('.b-page_type_search', function() {
            casper.getTitle().should.match(/bmw/);
        });
    });
});
