	
'use strict';
const AWS = require('aws-sdk');
 
module.exports.createProduct = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: process.env.DYNAMODB_PRODUCT_TABLE,
    Item: {
      primary_key: body.productNumber,
      productName: body.productName,
      productDescription: body.productDescription,
    },
  };
  await dynamoDb.put(params).promise();
 
  return {
    statusCode: 201,
  };
};