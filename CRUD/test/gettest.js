const chai = require('chai')
  , assert = chai.assert
  , expect = chai.expect
  , should = chai.should()

describe('String', () => {
  it('should get item', function () {

    const AWS = require('aws-sdk-mock');
    AWS.mock('DynamoDB.DocumentClient', 'scan', function (params, callback) {
        callback(null, 'successfully listed items from database');
      });
      const { getPost } = require('../post/get')
      const event={
        body: {
          'id':"123746287467866"
        }
      }
      getPost(event, {}, (err, res) => {
        //console.log(res);
        //res.should.be.equal('successfull listed items from database');
        expect(res.statusCode).to.be.equal(200);
        //assert.equal(res, 'successfull listed items from database');
        //AWS.restore();)
  
  
      })
    })
  
  })
  