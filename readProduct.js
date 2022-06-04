'use strict';
const AWS = require('aws-sdk');
 
module.exports.readProduct = async (event) => {
//   const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  const { primary_key } = event.pathParameters;
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_PRODUCT_TABLE,
    KeyConditionExpression: "primary_key = :primary_key",
    ExpressionAttributeValues: {
      ":primary_key": primary_key
    },
    Select: "ALL_ATTRIBUTES"
  };
const response = await dynamoDb.query(putParams).promise();

return response;

};