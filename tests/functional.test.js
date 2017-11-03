const expect = require('expect');
const math = require('mathjs');
const request = require('supertest');
const { app } = require('../server');

const makeQuery = (inputString) => {
  return `input=${inputString}`;
};

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
      
    //   it('should convert 32g (invalid input unit)', (done) => {
        
    //     //done();
    //   });
      
    //   it('should convert 3/7.2/4kg (invalid number)', (done) => {
        
    //     //done();
    //   });  
      
    //   it('should convert 3/7.2/4kilomegagram (invalid number and unit)', (done) => {
        
    //     //done();
    //   });
      
    //   it('should convert kg (no number)', (done) => {
        
    //       //done();
    //   });
    });
  });
});
