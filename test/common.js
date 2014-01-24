var TestPage = function () {
    this.headerTitle = element(by.tagName('h1'));
    this.pageTitle = element(by.tagName('h2'));
    this.paragraph = element(by.tagName('p'));
    this.link = element(by.tagName('a'));

    this.get = function () {
        browser.get('http://localhost:9000/test/fixtures/');
    };

    this.get();
};

module.exports = {
    TestPage: TestPage
};
