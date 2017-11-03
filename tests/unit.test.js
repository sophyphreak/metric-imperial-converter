const expect = require('expect');
const math = require('mathjs');

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
      const inputs = ['gal','L','mi','km','lbs','kg'];
      const expectedResult = ['L','gal','km','mi','kg','lbs'];
      inputs.forEach((input, index) => {
        expect(convertHandler.getReturnUnit(input)).toBe(expectedResult[index]);
      });
      done();
    });
  });  
  
  describe('Function convertHandler.spellOutUnit(unit)', () => {
    
    it('For Each Valid Unit Inputs', (done) => {
      const inputs = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
      const expectedResult = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
      inputs.forEach((input, index) => {
        expect(convertHandler.spellOutUnit(input)).toBe(expectedResult[index]);
      });
      done();
    });
  });
  
  describe('Function convertHandler.convert(num, unit)', () => {
    
    it('Gal to L', function(done) {
      const input = {
        num: 5,
        unit: 'gal'
      };
      const expectedResult = 18.9271;
      const result = convertHandler.convert(input.num, input.unit);
      expect(math.round(result, 4)).toBe(expectedResult);
      done();
    });
    
    it('L to Gal', (done) => {
      const input = {
        num: 10,
        unit: 'L'
      };
      const expectedResult = 2.6417;
      const result = convertHandler.convert(input.num, input.unit);
      expect(math.round(result, 4)).toBe(expectedResult);
      done();
    });
    
    it('Mi to Km', (done) => {
      const input = {
        num: 172,
        unit: 'mi'
      };
      const expectedResult = 276.806;
      const result = convertHandler.convert(input.num, input.unit);
      expect(math.round(result, 3)).toBe(expectedResult);
      done();   
    });
    
    it('Km to Mi', (done) => {
      const input = {
        num: 865,
        unit: 'km'
      };
      const expectedResult = 537.487;
      const result = convertHandler.convert(input.num, input.unit);
      expect(math.round(result, 3)).toBe(expectedResult);
      done();   
    });
    
    it('Lbs to Kg', (done) => {
      const input = {
        num: 2000,
        unit: 'lbs'
      };
      const expectedResult = 907.184;
      const result = convertHandler.convert(input.num, input.unit);
      expect(math.round(result, 3)).toBe(expectedResult);
      done();    
    });
    
    it('Kg to Lbs', (done) => {
      const input = {
        num: 5432,
        unit: 'kg'
      };
      const expectedResult = 11975.52;
      const result = convertHandler.convert(input.num, input.unit);
      expect(math.round(result, 2)).toBe(expectedResult);
      done();    
    });
  });
});