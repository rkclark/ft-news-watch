import hbs from 'hbs';

hbs.registerHelper( 'times', function( n, block ) {
    let accum = '';
    let i = -1;

    while( ++i < n ) {
        accum += block.fn( i + 1 );
    }

    return accum;
});

hbs.registerHelper('ifeq', (a, b, options) => {
  if (a === b) {
    return options.fn(this);
  }
  return options.inverse(this);
});

hbs.registerHelper("math", function(lvalue, operator, rvalue) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});

hbs.registerHelper('search', (searchTerm) => {
  if (searchTerm) {
    return `search?q=${searchTerm}&`;
  }
  return '?';
});


module.exports = hbs;
