import { expect } from 'chai';

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
