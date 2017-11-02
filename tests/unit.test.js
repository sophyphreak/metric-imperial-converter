const expect = require('expect');

const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

describe('Unit Tests', () => {
  
  describe('Function convertHandler.getNum(input)', () => {
    
    it('Whole number input', (done) => {
      const input = '32L';
      const result = convertHandler.getNum(input);
      expect(result).toBe(32);
      done();
    });
    
    it('Decimal Input', (done) => {
      const input = '32.2kg';
      const result = convertHandler.getNum(input);
      expect(result).toBe(32.2);
      done();
    });
    
    it('Fractional Input', (done) => {
      const input = '20/10mi';
      const result = convertHandler.getNum(input);
      expect(result).toBe(2);      
      done();
    });
    
    it('Fractional Input w/ Decimal', (done) => {
      const input = '22.2/2km';
      const result = convertHandler.getNum(input);
      expect(result).toBe(11.1);
      done();
    });
    
    it('Invalid Input (double fraction)', (done) => {
      const input = '32/34/65L';
      const result = convertHandler.getNum(input);
      expect(result).toBeFalsy();
      done();
    });
    
    it('No Numerical Input', (done) => {
      const input = '';
      const result = convertHandler.getNum(input);
      expect(result).toBeFalsy();
      done();
    });
  });
  
  // describe('Function convertHandler.getUnit(input)', () => {
    
  //   it('For Each Valid Unit Inputs', (done) => {
  //     // convert from chai to mocha
  //     var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
  //     input.forEach(function(ele) {
  //       //assert
  //     });
  //     done();
  //   });
    
  //   it('Unknown Unit Input', (done) => {
      
  //     //done();
  //   });  
  // });
  
  // describe('Function convertHandler.getReturnUnit(initUnit)', () => {
    
  //   it('For Each Valid Unit Inputs', (done) => {
  //     var input = ['gal','l','mi','km','lbs','kg'];
  //     var expect = ['l','gal','km','mi','kg','lbs'];
  //     input.forEach(function(ele, i) {
  //       assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
  //     });
  //     done();
  //   });
    
  // });  
  
  // describe('Function convertHandler.spellOutUnit(unit)', () => {
    
  //   it('For Each Valid Unit Inputs', (done) => {
  //     //see above example for hint
  //     done();
  //   });
  // });
  
  // describe('Function convertHandler.convert(num, unit)', () => {
    
  //   it('Gal to L', function(done) {
  //     // convert from chai to mocha
  //     var input = [5, 'gal'];
  //     var expected = 18.9271;
  //     assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
  //     done();
  //   });
    
  //   it('L to Gal', (done) => {
      
  //     //done();
  //   });
    
  //   it('Mi to Km', (done) => {
      
  //     //done();
  //   });
    
  //   it('Km to Mi', (done) => {
      
  //     //done();
  //   });
    
  //   it('Lbs to Kg', (done) => {
      
  //     //done();
  //   });
    
  //   it('Kg to Lbs', (done) => {
      
  //     //done();
  //   });
  // });
});