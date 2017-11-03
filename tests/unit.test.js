const expect = require('expect');

const { ConvertHandler } = require('../controllers/convertHandler.js');

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
  
  describe('Function convertHandler.getUnit(input)', () => {
    
    it('For Each Valid Unit Inputs', (done) => {
      const inputArr = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      const possibleInputs = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
      inputArr.forEach((input) => {
        const result = convertHandler.getUnit('100' + input);
        expect(result).toBeTruthy();
        expect(result.search(/\d/)).toBe(-1);
        expect(possibleInputs.indexOf(result)).toBeGreaterThan(-1);
      });
      done();
    });
    
    it('Unknown Unit Input', (done) => {
      const inputs = ['asdf', 'ASDF', 'iiifj', '', '123', null];
      inputs.forEach((input) => {
        const result = convertHandler.getUnit('100' + input);
        expect(result).toBeFalsy();
      });
      done();
    });  
  });
  
  describe('Function convertHandler.getReturnUnit(initUnit)', () => {
    
    it('For Each Valid Unit Inputs', (done) => {
      var inputs = ['gal','L','mi','km','lbs','kg'];
      var expectedResult = ['L','gal','km','mi','kg','lbs'];
      inputs.forEach((input, index) => {
        expect(convertHandler.getReturnUnit(input)).toBe(expectedResult[index]);
      });
      done();
    });
  });  
  
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