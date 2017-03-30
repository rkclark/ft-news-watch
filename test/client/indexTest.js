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

    describe('Headline card content with class o-card__content', function() {

      it('Contains a first child: a heading with link to the article on the FT', function () {
          browser.url('http://localhost:3000');
          const card = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content h2:first-child').getHTML();
          expect(card).to.contain('o-card__heading');
          expect(card).to.contain('href="http://www.ft.com');
      });

      it('Contains a second child: a paragraph with class o-card__standfirst', function () {
          browser.url('http://localhost:3000');
          const para = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content p:nth-child(2)');
          expect(para.getAttribute('class')).to.contain('o-card__standfirst');
      });

      it('Contains a third child: a paragraph with class o-card__tag', function () {
          browser.url('http://localhost:3000');
          const para = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content p:nth-child(3)');
          expect(para.getAttribute('class')).to.contain('o-card__tag');
      });

      it('Contains a fourth child: a time with class o-card__timestamp', function () {
          browser.url('http://localhost:3000');
          const para = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content time:nth-child(4)');
          expect(para.getAttribute('class')).to.contain('o-card__timestamp');
      });
    });

    describe('Headline pagination', function() {

      it('Displays 20 headlines in o-card components per page', function () {
          browser.url('http://localhost:3000');
          let headlines = browser.elements('.o-card');
          expect(headlines.value.length === 20).to.be.true;
          browser.url('http://localhost:3000/?page=2');
          headlines = browser.elements('.o-card');
          expect(headlines.value.length === 20).to.be.true;
      });

      describe('Pagination arrows', function() {

        it('Disables left arrow and enables right arrow when on page 1', function(){
            browser.url('http://localhost:3000');
            expect(browser.getAttribute('.o-buttons-icon--arrow-left', 'disabled')).to.equal('true');
            expect(browser.getAttribute('.o-buttons-icon--arrow-right', 'disabled')).to.be.null;
        });

        it('Enables both arrows when on page 2', function(){
            browser.url('http://localhost:3000/?page=2');
            expect(browser.getAttribute('.o-buttons-icon--arrow-left', 'disabled')).to.be.null;
            expect(browser.getAttribute('.o-buttons-icon--arrow-right', 'disabled')).to.be.null;
        });

        it('Disables right arrow and enables left arrow when on last page', function(){
            browser.url('http://localhost:3000/?page=5');
            expect(browser.getAttribute('.o-buttons-icon--arrow-left', 'disabled')).to.be.null;
            expect(browser.getAttribute('.o-buttons-icon--arrow-right', 'disabled')).to.equal('true');
        });

        it('Navigates to next page of results on clicking right arrow', function() {
          browser.url('http://localhost:3000');
          browser.click('.o-buttons-icon--arrow-right');
          expect(browser.getUrl()).to.contain('/?page=2');
        });

        it('Navigates to previous page of results on clicking left arrow', function() {
          browser.url('http://localhost:3000/?page=3');
          browser.click('.o-buttons-icon--arrow-left');
          expect(browser.getUrl()).to.contain('/?page=2');
        });

      });

      describe('Pagination buttons', function() {

        it('Highlights only the button denoting the current page of results', function() {
          browser.url('http://localhost:3000');
          expect(browser.getAttribute('.o-buttons__pagination a:nth-child(2)', 'aria-selected')).to.equal('true');
          expect(browser.getAttribute('.o-buttons__pagination a:nth-child(3)', 'aria-selected')).to.be.null;
        });

        it('Navigates to correct page of results on click', function() {
          browser.url('http://localhost:3000');
          browser.click('.o-buttons__pagination a:nth-child(3)');
          expect(browser.getUrl()).to.contain('/?page=2');
          browser.click('.o-buttons__pagination a:nth-child(4)');
          expect(browser.getUrl()).to.contain('/?page=3');
        });

      });

      describe('Responsive grid', function() {

        it('Wraps headlines list in grid container', function() {
          browser.url('http://localhost:3000');
          expect(browser.getAttribute('.headlines-list', 'class')).to.contain('o-grid-container');
        });

        it('Applies responsive column widths to each headline o-card', function() {
          browser.url('http://localhost:3000');
          expect(browser.getAttribute('.headlines-list .o-card:nth-child(1)', 'data-o-grid-colspan')).to.equal('12 S10 Soffset1 M8 Moffset2 L6 Loffset0');
        });

      });

    });

});
