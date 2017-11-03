const expect = require('expect');
const math = require('mathjs');
const request = require('supertest');

const { app } = require('../server');
const { makeQuery } = require('./testHelpers/testHelpers');

describe('Functional Tests', () => {
  
  describe('Routing Tests', () => {
    
    describe('GET /api/convert => conversion object', () => {
      
      it('should convert 10L (valid input)', (done) => {
        const inputString = '10L';
        const query = makeQuery(inputString);

        request(app)
          .get(`/api/convert?${query}`)
          .expect(200)
          .expect((res) => {
            const {
                initNum,
                initUnit,
                returnNum,
                returnUnit
            } = res.body;
            const returnNumRounded = math.round(returnNum, 5);
            expect(initNum).toBe(10);
            expect(initUnit).toBe('L');
            expect(returnNumRounded).toBe(2.64172);
            expect(returnUnit).toBe('gal');
          })
          .end(done);
      });
      
      it('should convert 32g (invalid input unit)', (done) => {
        const inputString = '32g';
        const query = makeQuery(inputString);

        request(app)
          .get(`/api/convert?${query}`)
          .expect(400)
          .expect((res) => {
            expect(res.text).toBe('invalid unit');
          })
          .end(done);
      });
      
      it('should convert 3/7.2/4kg (invalid number)', (done) => {
        const inputString = '3/7.2/4kg';
        const query = makeQuery(inputString);

        request(app)
          .get(`/api/convert?${query}`)
          .expect(400)
          .expect((res) => {
            expect(res.text).toBe('invalid number');
          })
          .end(done);
      });  
      
      it('should convert 3/7.2/4kilomegagram (invalid number and unit)', (done) => {
        const inputString = '3/7.2/4kilomegagram';
        const query = makeQuery(inputString);

        request(app)
          .get(`/api/convert?${query}`)
          .expect(400)
          .expect((res) => {
            expect(res.text).toBe('invalid number and unit');
          })
          .end(done);
      });
      
      it('should convert kg (no number)', (done) => {
        const inputString = 'kg';
        const query = makeQuery(inputString);

        request(app)
          .get(`/api/convert?${query}`)
          .expect(200)
          .expect((res) => {
            const {
                initNum,
              initUnit,
              returnNum,
              returnUnit
            } = res.body;
            const returnNumRounded = math.round(returnNum, 5);
            expect(initNum).toBe(1);
            expect(initUnit).toBe('kg');
            expect(returnNumRounded).toBe(2.20462);
            expect(returnUnit).toBe('lbs');            
          })
          .end(done);
      });
    });
  });
});
