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
    browser.get('http://yandex.ru/images');

    it('should open', function() {
        expect(browser.getTitle()).toEqual('Яндекс.Картинки: поиск изображений в интернете');
    });

    it('should fill input', function() {
        var input = $('.search .input__control');
        input.sendKeys('bmw');
        expect(input.getAttribute('value')).toEqual('bmw');
    });

    it('should do search', function() {
        var button = $('.search .button');
        button.click();
        browser.sleep(1000);
        expect(browser.getTitle()).toMatch(/bmw: \d+ тыс изображений найдено в Яндекс.Картинках/);
    });

    it('loader on scroll', function() {
        browser.executeScript('window.scrollTo(0,document.documentElement.scrollHeight);').then(function() {
            expect(browser.isElementPresent($('.more_direction_next .spinner'))).toEqual(true);
        });
        browser.sleep(500);
        browser.executeScript('window.scrollTo(0,document.documentElement.scrollHeight);').then(function() {
            expect(browser.isElementPresent($('.more_direction_next .spinner'))).toEqual(true);
        });
        browser.sleep(500);
        browser.executeScript('window.scrollTo(0,document.documentElement.scrollHeight);').then(function() {
            expect(browser.isElementPresent($('.more_direction_next .spinner'))).toEqual(true);
        });
        browser.sleep(500);
        browser.executeScript('window.scrollTo(0,document.documentElement.scrollHeight);').then(function() {
            expect(browser.isElementPresent($('.more_direction_next .spinner'))).toEqual(true);
        });
        browser.sleep(500);
    });

    // not correct test but at least..
    it('more button should be visible after scroll', function() {
        var button = $('.more_direction_next');
        expect(button.getAttribute('class')).not.toMatch('more__button_hidden_yes');
    });

});

describe('yandex.images index direct driver', function() {
    browser.driver.get('http://yandex.ru/images');
    expect(browser.driver.getTitle()).toEqual('Яндекс.Картинки: поиск изображений в интернете');
});
