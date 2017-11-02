const math = require('mathjs');

function ConvertHandler() {
  
  this.getNum = (input) => {
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
  
  this.getUnit = function(input) {
    const re = /\w+/;
    return re.exec(input); 
  };
  
  this.getReturnUnit = function(initUnit) {
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
        return mi;
      default:
        throw new Error('initUnit invalid');
    };
  };

  this.spellOutUnit = function(unit) {
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
  
  this.convert = function(initNum, initUnit) {
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
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
