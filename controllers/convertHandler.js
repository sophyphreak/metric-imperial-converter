const math = require('mathjs');

class ConvertHandler {
  
  getNum(input) {
    const re = /[\d./]+/;
    let amount = re.exec(input);
    if (!amount) return 1;
    amount = amount[0];
    const slashMatches = amount.match(/\//g);
    if (slashMatches) {
      if (slashMatches.length > 1) {
        return null;
      };
    };
    const periodMatches = amount.match(/\./g);
    if (periodMatches) {
      if (periodMatches.length > 1) {
        return null;
      };
    };
    return math.eval(amount);
  };
  
  getUnit(input) {
    const re = /[A-Za-z]+/;
    let unit = re.exec(input);
    if (!unit) return null;
    unit = unit[0].toLowerCase();
    if (unit === 'l') unit = 'L';
    const possibleInputs = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
    if (possibleInputs.indexOf(unit) === -1) return null;
    return unit; 
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
        return null;
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
        return null;
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
        return null;
    };
  };
  
  getString(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = { ConvertHandler };
