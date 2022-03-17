const AWSMock = require("aws-sdk-mock");
const AWS = require("aws-sdk");
const expect =require("chai").expect;
const response=require("../index");
const { describe } = require("mocha");

describe('getS3Object',function(){
  it('uploaded object to S3', async function (){
    AWSMock.mock('S3','putObject',function(params,callback){
        
      callback(null,response.appendText);
    });

    let data= {Bucket:'NewS3Bucket',Key:'file.txt'};

    const s3=new AWS.S3();

    const result=await s3.putObject(data).promise();
    expect(result).to.equal(response.appendText);
    AWSMock.restore('S3');
  });

  
})