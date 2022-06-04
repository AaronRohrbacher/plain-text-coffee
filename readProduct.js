'use strict';
const AWS = require('aws-sdk');
 
module.exports.readProduct = async (event) => {
  const { primary_key } = event.pathParameters;
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: process.env.DYNAMODB_PRODUCT_TABLE,
    KeyConditionExpression: "primary_key = :primary_key",
    ExpressionAttributeValues: {
      ":primary_key": primary_key
    },
    Select: "ALL_ATTRIBUTES"
  };
const response = await dynamoDb.query(params).promise();

return response;

};