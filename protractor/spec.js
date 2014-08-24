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
        browser.driver.manage().window().setSize(1000, 900);
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
        expect(button.isDisplayed()).toEqual(true);
    });

    it('should fill input with audi', function() {
        var input = $('.search .input__control');
        input.clear();
        input.sendKeys('audi');
        expect(input.getAttribute('value')).toEqual('audi');
    });

    it('should do search for audi', function() {
        var button = $('.search .button');
        button.click();
        browser.sleep(1000);
        expect(browser.getTitle()).toMatch(/audi: \d+ тыс изображений найдено в Яндекс.Картинках/);
        expect($('.pane').isDisplayed()).toEqual(false);
        browser.driver.manage().window().setSize(1500, 900);
        expect($('.pane').isDisplayed()).toEqual(true);
    });

    it('should go to index', function() {
        $('.search .service__url').click();
        browser.sleep(1000);
        expect(browser.getTitle()).toEqual('Яндекс.Картинки: поиск изображений в интернете');
        expect(browser.isElementPresent($('.b-page_type_index'))).toEqual(true);
    });


    it('should back to search', function() {
        browser.driver.navigate().back();
        browser.sleep(1000);
        expect(browser.getTitle()).toMatch(/audi: \d+ тыс изображений найдено в Яндекс.Картинках/);
    });

    it('have some unselected items', function() {
        var input = $('.search .input__control');
        input.clear();
        input.sendKeys('пластиковые окна');
        var button = $('.search .button');
        button.click();
        browser.sleep(1000);
        var serpItem = $('.serp-item_pos_3');
        browser.driver.actions().mouseMove(serpItem).mouseMove(serpItem).perform();
        browser.sleep(1000);
        expect(browser.isElementPresent($('.serp-item_pos_3.serp-item_hovered_yes'))).toEqual(true);
    });

});

describe('yandex.images index direct driver', function() {
    browser.driver.get('http://yandex.ru/images');
    expect(browser.driver.getTitle()).toEqual('Яндекс.Картинки: поиск изображений в интернете');
});
