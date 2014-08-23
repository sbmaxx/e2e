// spec.js
describe('angularjs homepage', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
  });
});

describe('yandex.images index', function() {
    it('should open', function() {
        browser.get('http://yandex.ru/images');
        expect(browser.getTitle()).toEqual('Яндекс.Картинки: поиск изображений в интернете');
    })
});
