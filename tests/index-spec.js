'use strict';

var expect = require('expect.js');
var Base64 = require('../index');

/*globals describe,it*/

describe('Base64', function() {

  it('normal usage', function() {
    expect(Base64.encode('dankogai')).to.equal('ZGFua29nYWk=');
    expect(Base64.encode('小飼弾')).to.equal('5bCP6aO85by+');
    expect(Base64.encodeURI('小飼弾')).to.equal('5bCP6aO85by-');
    expect(Base64.decode('ZGFua29nYWk=')).to.equal('dankogai');
    expect(Base64.decode('5bCP6aO85by+')).to.equal('小飼弾');
    expect(Base64.decode('5bCP6aO85by-')).to.equal('小飼弾');
  });

});
