import { expect } from 'chai';

describe('FT News Watch homepage', function() {

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

    it('Displays at least 20 headlines in card components', function () {
        browser.url('http://localhost:3000');
        const headlines = browser.elements('.o-card');
        expect(headlines.value.length >= 20).to.be.true;
    });

    describe('Headline card content with class o-card__content', function() {

      it('First child is a heading with link to the article on the FT', function () {
          browser.url('http://localhost:3000');
          const card = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content h2:first-child').getHTML();
          expect(card).to.contain('o-card__heading');
          expect(card).to.contain('href="http://www.ft.com');
      });

      it('Second child is a paragraph with class o-card__standfirst', function () {
          browser.url('http://localhost:3000');
          const para = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content p:nth-child(2)');
          expect(para.getAttribute('class')).to.contain('o-card__standfirst');
      });

      it('Third child is a paragraph with class o-card__tag', function () {
          browser.url('http://localhost:3000');
          const para = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content p:nth-child(3)');
          expect(para.getAttribute('class')).to.contain('o-card__tag');
      });

      it('Fourth child is a time with class o-card__timestamp', function () {
          browser.url('http://localhost:3000');
          const para = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content time:nth-child(4)');
          expect(para.getAttribute('class')).to.contain('o-card__timestamp');
      });
    });

});
