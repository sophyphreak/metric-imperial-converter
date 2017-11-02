'use strict';

const express = require('express');

const ConvertHandler = require('../controllers/convertHandler.js');

const apiRouter = express.Router();

module.exports = function (app) {
  
  const convertHandler = new ConvertHandler();

  app.route('/convert')
    .get(function (req, res){
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.send({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        toString
      });
    });    
};

module.exports = { apiRouter };