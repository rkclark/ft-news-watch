import 'dotenv/config';
const DOMAIN = process.env.DOMAIN; // eslint-disable-line
import { expect } from 'chai';

describe('Site Header', function() {

  beforeEach(function(){
    browser.url(`http://${DOMAIN}`);
  });

  it('Displays correct page title', function () {
    const title = browser.getTitle();
    expect(title).to.contain('FT News Watch');
  });

  it('Displays correct page header', function () {
    const header = $('.nw-header');
    expect(header.getText()).to.equal('NEWS WATCH');
  });

  it('Displays correct FT header link', function () {
    const headerLink = $('.o-header__top-logo');
    expect(headerLink.getAttribute('href')).to.equal('https://www.ft.com/?edition=uk');
  });

});
