import 'dotenv/config';
const DOMAIN = process.env.DOMAIN; // eslint-disable-line
import { expect } from 'chai';

describe('Headline cards', function() {

  describe('Headline card content with class o-card__content', function() {

    beforeEach(function(){
      browser.url(`http://${DOMAIN}`);
    });

    it('Contains a first child: a heading with link to the article on the FT', function () {
      const card = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content h2:first-child').getHTML();
      expect(card).to.contain('o-card__heading');
      expect(card).to.contain('href="http://www.ft.com');
    });

    it('Contains a second child: a paragraph with class o-card__standfirst', function () {
      const para = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content p:nth-child(2)');
      expect(para.getAttribute('class')).to.contain('o-card__standfirst');
    });

    it('Contains a third child: a paragraph with class o-card__tag', function () {
      const para = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content p:nth-child(3)');
      expect(para.getAttribute('class')).to.contain('o-card__tag');
    });

    it('Contains a fourth child: a time with class o-card__timestamp', function () {
      const para = browser.element('.headlines-list .o-card:nth-child(1) .o-card__content time:nth-child(4)');
      expect(para.getAttribute('class')).to.contain('o-card__timestamp');
    });
  });

});
