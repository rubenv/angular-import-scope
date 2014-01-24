var common = require('./common');

describe('Import Scope', function () {
    var page;
    beforeEach(function () {
        page = new common.TestPage();
    });

    it('Should have page title', function () {
        expect(page.pageTitle.getText()).toBe('Page A');
    });

    it('Should have paragraph', function () {
        expect(page.paragraph.getText()).toBe('Test');
    });

    it('Should have header title from page scope', function () {
        expect(page.headerTitle.getText()).toBe('Test');
    });
});
