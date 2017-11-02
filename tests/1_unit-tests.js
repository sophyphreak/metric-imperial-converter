const expect = require('expect');
const request = require('supertest');

var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

describe('Unit Tests', () => {
  
  describe('Function convertHandler.getNum(input)', () => {
    
    it('Whole number input', (done) => {
      // change from chai to mocha
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    it('Decimal Input', (done) => {
      
      //done();
    });
    
    it('Fractional Input', (done) => {
      
      //done();
    });
    
    it('Fractional Input w/ Decimal', (done) => {
      
      //done();
    });
    
    it('Invalid Input (double fraction)', (done) => {
      
      //done();
    });
    
    it('No Numerical Input', (done) => {
      
      //done();
    }); 
  });
  
  describe('Function convertHandler.getUnit(input)', () => {
    
    it('For Each Valid Unit Inputs', (done) => {
      // convert from chai to mocha
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        //assert
      });
      done();
    });
    
    it('Unknown Unit Input', (done) => {
      
      //done();
    });  
  });
  
  describe('Function convertHandler.getReturnUnit(initUnit)', () => {
    
    it('For Each Valid Unit Inputs', (done) => {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  describe('Function convertHandler.spellOutUnit(unit)', () => {
    
    it('For Each Valid Unit Inputs', (done) => {
      //see above example for hint
      done();
    });
  });
  
  describe('Function convertHandler.convert(num, unit)', () => {
    
    it('Gal to L', function(done) {
      // convert from chai to mocha
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
      //done();
    });
    
    test('Mi to Km', function(done) {
      
      //done();
    });
    
    test('Km to Mi', function(done) {
      
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      
      //done();
    });
    
  });

});