import { expect } from 'chai';

describe('Site Header', function() {

    it('Displays correct page title', function () {
        browser.url('http://localhost:3000');
        const title = browser.getTitle();
        expect(title).to.contain('FT News Watch');
    });

    it('Displays correct page header', function () {
        browser.url('http://localhost:3000');
        const header = $('.nw-header');
        expect(header.getText()).to.equal('News Watch');
    });

    it('Displays correct FT header link', function () {
        browser.url('http://localhost:3000');
        const headerLink = $('.o-header__top-logo');
        expect(headerLink.getAttribute('href')).to.equal('https://www.ft.com/?edition=uk');
    });

});
