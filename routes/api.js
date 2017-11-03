'use strict';

const express = require('express');

const { ConvertHandler } = require('../controllers/convertHandler.js');

const apiRouter = express.Router();
const convertHandler = new ConvertHandler();

apiRouter.get('/convert', (req, res) => {
  const input = req.query.input;
  const initNum = convertHandler.getNum(input);
  const initUnit = convertHandler.getUnit(input);
  const returnNum = convertHandler.convert(initNum, initUnit);
  const returnUnit = convertHandler.getReturnUnit(initUnit);
  const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
  
  if (!initNum && !initUnit) res.status(400).send('invalid number and unit');
  else if (!initNum) res.status(400).send('invalid number');
  else if (!initUnit) res.status(400).send('invalid unit');
  else {
    res.send({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      toString
    });
  };
});    

module.exports = { apiRouter };