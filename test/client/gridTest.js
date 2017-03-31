import 'dotenv/config';
const DOMAIN = process.env.DOMAIN; // eslint-disable-line
import { expect } from 'chai';


describe('Responsive grid', function() {

  beforeEach(function(){
    browser.url(`http://${DOMAIN}`);
  });

  it('Wraps headlines list in grid container', function() {
    expect(browser.getAttribute('.headlines-list', 'class')).to.contain('o-grid-container');
  });

  it('Applies responsive column widths to each headline o-card', function() {
    expect(browser.getAttribute('.headlines-list .o-card:nth-child(1)', 'data-o-grid-colspan')).to.equal('12 S10 Soffset1 M8 Moffset2 L6 Loffset0');
  });

});
