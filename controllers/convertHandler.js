const math = require('mathjs');

class ConvertHandler() {
  
  getNum(input) {
    if (!input) return null;
    const re = /[\d./]+/;
    const result = re.exec(input)[0];
    const slashMatches = result.match(/\//g);
    if (slashMatches) {
      if (slashMatches.length > 1) {
        return null;
      };
    };
    const periodMatches = result.match(/\./g);
    if (periodMatches) {
      if (periodMatches.length > 1) {
        return null;
      };
    };
    return math.eval(result);
  };
  
  getUnit(input) {
    const re = /[A-Za-z]+/;
    return re.exec(input)[0]; 
  };
  
  getReturnUnit(initUnit) {
    switch (initUnit) {
      case 'L':
        return 'gal';
      case 'gal':
        return 'L';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      default:
        throw new Error('initUnit invalid');
    };
  };

  spellOutUnit(unit) {
    switch (unit) {
      case 'L':
        return 'liters';
      case 'gal':
        return 'gallons';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometers';
      default:
        throw new Error('unit invalid');
    };
  };
  
  convert(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit) {
      case 'L':
        return initNum / galToL;
      case 'gal':
        return initNum * galToL;
      case 'lbs':
        return initNum * lbsToKg;
      case 'kg':
        return initNum / lbsToKg;
      case 'mi':
        return initNum * miToKm;
      case 'km':
        return initNum / miToKm;
      default:
        throw new Error('initUnit invalid');
    };
  };
  
  getString(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = { ConvertHandler };
