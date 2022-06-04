	
'use strict';
const AWS = require('aws-sdk');
 
module.exports.products = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_PRODUCT_TABLE,
  };
 
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb.scan(scanParams).promise();
 
  if (result.Count === 0) {
    return {
      statusCode: 404,
    };
  }
 
  return {
    statusCode: 200,
    body: JSON.stringify({
      total: result.Count,
      items: await result.Items.map((product) => {
        return {
          productNumber: product.primary_key,
          productName: product.productName,
          productDescription: product.productDescription,
        };
      }),
    }),
  };
};