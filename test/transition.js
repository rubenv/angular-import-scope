var common = require('./common');

describe('Transition', function () {
    var page;
    beforeEach(function () {
        page = new common.TestPage();
        page.link.click();
    });

    it('Should have page title', function () {
        expect(page.pageTitle.getText()).toBe('Page B');
    });

    it('Should have paragraph', function () {
        expect(page.paragraph.getText()).toBe('');
    });

    it('Should have header title from page scope', function () {
        expect(page.headerTitle.getText()).toBe('No title');
    });
});
