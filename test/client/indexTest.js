import { expect } from 'chai';
describe('FT News App homepage', function() {
    it('Displays correct page title', function () {
        browser.url('http://localhost:3000');
        const title = browser.getTitle();
        expect(title).to.contain('FT News App');
    });
});
