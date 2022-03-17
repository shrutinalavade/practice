const chai = require('chai')
  , assert = chai.assert
  , expect = chai.expect
  , should = chai.should()
  const index= require("../functions/index")

describe('String', () => {
  it('should create data', function () {

    const AWS = require('aws-sdk-mock');    
    AWS.mock('DynamoDB.DocumentClient', 'put', function (params, callback) {
      callback(null, 'successfully created item in database');
    });
    const { createPost } = require('../post/create')
    const event={
      body:{"fullname": "sangita",
      "standard":"12",
      "division":"b",
      "marks":"90"
    }
    }
    createPost(event, {}, (err, res) => {
      expect(res.statusCode).to.be.equal(201);
      
      
    })
  })
  it('should not create data', function () {

    const AWS = require('aws-sdk-mock');    
    AWS.mock('DynamoDB.DocumentClient', 'put', function (params, callback) {
      callback(null, 'successfully created item in database');
    });
    const { createPost } = require('../post/create')
    const event={
      body: {"fullname": "sangita",
      "standard":"12",
      "division":"b",
      
    }
    }
    createPost(event, {}, (err, res) => {
      expect(res.statusCode).to.be.equal(400);
      
      
    })
  })
})

