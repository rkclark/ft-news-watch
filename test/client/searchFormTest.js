import 'dotenv/config';
const DOMAIN = process.env.DOMAIN; // eslint-disable-line
import { expect } from 'chai';

describe('Search Form', function() {

  beforeEach(function(){
    browser.url(`http://${DOMAIN}`);
  });

  it('Displays a form element with an action of /search', function () {
      expect(browser.getAttribute('.o-header__search-form', 'action')).to.contain('/search');
  });

  it('Displays a placeholder of "Search for FT headlines"', function () {
      expect(browser.getAttribute('.o-header__search-term', 'placeholder')).to.equal('Search for FT headlines');
  });

  it('Contains a Search button with type submit', function () {
      const button = $('.o-header__search-submit');
      expect(button.getAttribute('type')).to.equal('submit');
      expect(button.getText()).to.equal('Search');
  });

  it('Navigates to /search with correct search parameter on submit', function(){
    const input = $('.o-header__search-term');
    input.setValue('starcraft');
    browser.submitForm('.o-header__search-form');
    expect(browser.getUrl()).to.contain('/search?q=starcraft');
  });

});
