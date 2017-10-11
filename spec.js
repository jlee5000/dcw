var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var assert = require('chai').assert;

describe('Document Create Wrapper', function() {

    var dcm;
    var div;
    jsdom();
    before(function () {
        dcm = require('./index');
    });

    it('should should throw exception - no arguments present', function() {
        assert.throws(function () { dcm() }, 'no arguments present', "Error thrown");
    });

    it('should should throw exception - given dom type is not a string', function() {
        assert.throws(function () { dcm({}) }, 'given dom type is not a string', "Error thrown");
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
        div = dcm('div',[{"class":"foo", "id":"bar"}], 'text');
        expect(div.outerHTML).to.be.equal('<div class="foo" id="bar">text</div>');
    });

    it('should should return an <div class="bar" id="foo">text</div>', function() {
        div = dcm('div',[{"class":"bar"},{"id":"foo"}], 'text');
        expect(div.outerHTML).to.be.equal('<div class="bar" id="foo">text</div>');
    });

});