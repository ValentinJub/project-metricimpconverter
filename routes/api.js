'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      console.log(req.query)
      let num = convertHandler.getNum(req.query.input)
      let unit = convertHandler.getUnit(req.query.input)
      let returnNum = convertHandler.convert(num, unit)
      let returnUnit = convertHandler.getReturnUnit(unit)
      let string = convertHandler.getString(num, unit, returnNum, returnUnit)
      res.json({
        initNum: num,
        initUnit: unit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string
      })
    })

};
