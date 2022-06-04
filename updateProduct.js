'use strict';
const AWS = require('aws-sdk');
 
module.exports.updateProduct = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  const primary_key = body.primary_key;
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: process.env.DYNAMODB_PRODUCT_TABLE,
    Key: {primary_key},
    ExpressionAttributeValues: {
      ":productName": body.productName,
      ":productDescription": body.productDescription,
    },
    UpdateExpression:
      "SET productName = :productName, productDescription = :productDescription",
  };
  await dynamoDb.update(params).promise();
 
  return {
    statusCode: 201,
  };
};