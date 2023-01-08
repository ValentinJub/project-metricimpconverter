function ConvertHandler() {
  
  this.getNum = function(input) {
    let regEx = /\d+[\/\.]*\d*[\/\.]*\d*/
    let result = input.match(regEx)
    if(result) return result[0]
    else return "invalid number"
  };
  
  this.getUnit = function(input) {
    let regEx = /gal|l$|lbs|kg|mi|km/i
    let result = input.match(regEx)
    if(result) return result[0]
    else return "invalid unit"
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = 'L'
        break;
      case 'l':
        result = 'gal'
        break;
      case 'mi':
        result = 'km'
        break;
      case 'km':
        result = 'mi'
        break;
      case 'kg':
        result = 'lbs'
        break;
      case 'lbs':
        result = 'kg'
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit) {
      case 'gal':
        result = 'gallons'
        break;
      case 'l':
        result = 'liters'
        break;
      case 'mi':
        result = 'miles'
        break;
      case 'km':
        result = 'kilometers'
        break;
      case 'kg':
        result = 'kilograms'
        break;
      case 'lbs':
        result = 'pounds'
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'lbs':
        result = initNum * lbsToKg
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    return result;
  };
  
}

module.exports = ConvertHandler;
