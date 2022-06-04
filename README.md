## API Documentation

`GET /`  

Returns a JSON object of all products including product number, name, and description. If no products, 404 is returned.

`GET /:primary_key`  

The primary key is defined as productNumber. Returns a JSON object of the specified product's product number, name, and description

`POST /`  

Creates a product. Accepts a JSON payload:  

```
    {
        productNumber: string
        productName: string
        productDescription: string
    }
```

`PUT /`  
Updates a product. Accepts a JSON payload:  

```
    {
        productNumber: string
        productName: string
        productDescription: string
    }
```

`DELETE /`  
Deletes a product. Accepts a JSON payload, where `primary_key` is the item's `productNumber`.  

```
    {
        primary_key: string
    }
```

## Installation  
Requires:   
NodeJs 14+  
AWS SDK (tested on WSL 2 Ubuntu 20.04LTS)  
properly configured `~/.aws/credentials` file  


`npm install -g serverless`  

`git clone https://github.com/aaronrohrbacher/plain-text-coffee`  

`cd plain-text-coffee`  

`serverless deploy --stage dev`  

Woop! It worked! I'm sure of it! Your endpoints will be shown once deployed.
