"use strict";

const dynamoDb = require("../config/dynamoDb");
const AWS = require("aws-sdk");
AWS.config.update({region:'ap-south-1'});
//const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { sendResponse } = require("../functions/index");
const {v1:uuidv1} = require("uuid");

module.exports.createPost = async event => {
  const body = JSON.parse(event.body);
  try {
    const { fullname, standard, division, marks } = body;
    const id = uuidv1();
    const TableName = process.env.DYNAMO_TABLE_NAME;
    const params = {
      TableName,
      Item: {
        id,
        fullname, 
        standard,
        division, 
        marks
      },
      ConditionExpression: "attribute_not_exists(id)"
    };
    await dynamoDb.put(params).promise();
    return sendResponse(200, { message: 'Post created successfully' })
  } catch (e) {
    return sendResponse(500, { message: 'Could not create the post' });
  }
};