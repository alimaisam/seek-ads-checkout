# JOB ADS CHECKOUT SYSTEM
In this problem, we are creating a job ads checkout system

## Pre-requisites
```bash
- node
- yarn
```

## Clone
```bash
git clone https://github.com/alimaisam/seek-ads-checkout.git
```

## Server

To start the server, run following commands
```bash
- yarn
- yarn start
```

## Test
To run unit test, run following command
```bash
- yarn test
```
----

## Available APIs
- GET `/cart` : Generates the Cart, calculates the cart value and returns the response
- POST `/checkout` : Takes cart data as input from user, calculates the cart value and returns the response

## Example Data

```bash
..* {
	"order_id": 1, 
	"customer": "UNILEVER",  
	"packages": ["CLASSIC", "CLASSIC", "CLASSIC", "PREMIUM"]
}

..* {
	"order_id": 2, 
	"customer": "JOBSTREET",  
	"packages": ["CLASSIC", "STANDOUT", "PREMIUM"]
}

..* {
	"order_id": 3, 
	"customer": "APPLE",  
	"packages": ["STANDOUT", "STANDOUT", "STANDOUT", "PREMIUM"]
}

..* {
	"order_id": 4, 
	"customer": "NIKE",  
	"packages": ["PREMIUM", "PREMIUM", "PREMIUM", "PREMIUM"]
}

..* {
    "order_id": 5, 
	"customer": "FORD",  
	"packages": ["STANDOUT"]
}
```
