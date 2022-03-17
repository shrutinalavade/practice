"use strict";

const { sendResponse } = require("../functions/index");
const dynamoDb = require("../config/dynamoDb");

module.exports.updatePost = async event => {
  try {
    const body = JSON.parse(event.body);

    const { fullname, standard, division, marks, id } = body
    const params = {
      TableName: process.env.DYNAMO_TABLE_NAME,
      Key: {
        id
      },
      ExpressionAttributeValues: {
        ":fullname": fullname,
        ":standard": standard,
        ":division": division,
        ":marks": marks
      },
      UpdateExpression:
      "SET fullname= :fullname, standard = :standard, division = :division, marks =:marks",
      ReturnValues: "ALL_NEW"
    };

    const data = await dynamoDb.update(params).promise();
    if (data.Attributes) {
      return sendResponse(200, data.Attributes);
    } else {
      return sendResponse(404, { message: "Updated post data not found" });
    }
  } catch (e) {
    return sendResponse(500, { message: "Could not update this post" });
  }
};
