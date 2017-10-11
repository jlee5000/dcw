var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

describe('Document Create Wrapper', function() {

    var dcm;
    var div;
    jsdom();
    before(function () {
        dcm = require('./index');
    });

    it('should should return an <div></div>', function() {
        div = dcm('div');
        expect(div.outerHTML).to.be.equal('<div></div>');
    });

    it('should should return an <div class="foo" id="bar"></div>', function() {
        div = dcm('div',[{"class":"foo"},{"id":"bar"}]);
        expect(div.outerHTML).to.be.equal('<div class="foo" id="bar"></div>');
    });

    it('should should return an <div class="foo" id="bar">text</div>', function() {
        div = dcm('div',[{"class":"foo"},{"id":"bar"}], 'text');
        expect(div.outerHTML).to.be.equal('<div class="foo" id="bar">text</div>');
    });

});