// spec.js
// describe('angularjs homepage', function() {
//   it('should add one and two', function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(1);
//     element(by.model('second')).sendKeys(2);
//
//     element(by.id('gobutton')).click();
//
//     expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
//   });
// });

describe('yandex.images index', function() {
    // это аффектит первый describe, который начинает фейлится
    browser.ignoreSynchronization = true;
    browser.get('http://yandex.ru/images');

    it('should open', function() {
        expect(browser.getTitle()).toEqual('Яндекс.Картинки: поиск изображений в интернете');
    });
    it('should fill input', function() {
        var input = $('.search .input__control');
        input.sendKeys('bmw');
        expect(input.getAttribute('value')).toEqual('bmw');
    });

});

describe('yandex.images index direct driver', function() {
    browser.driver.get('http://yandex.ru/images');
    expect(browser.driver.getTitle()).toEqual('Яндекс.Картинки: поиск изображений в интернете');
});
