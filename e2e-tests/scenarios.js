'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('Nombre de ligne dans lignes', function() {
    browser.get('commande.html');
    var elts = element.all(by.repeater('ligne in lignes'));
    expect(elts.count()).toEqual(2);
  });
});

