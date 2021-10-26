
<h1 align="center">
  Simple Bank CRUD API
</h1>

<p> This is a simple Bank and Bank Accounts API . You send bank details as JSON to the API Endpoint then your details will be saved in the database.  </p>

## Environments & Frameworks used for the API
Node.js  </br>
Express.js </br>
MongoDB </br>


## 🛠 Installation & Set Up

1. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Start the development server

   ```sh
   nodemon .
   ```

## Endpoints 

## Bank

 ```sh
  GET   http://localhost/:id?:5000/bank
   ```

 ```sh
  POST   http://localhost:5000/bank
   ```
 ```sh
  PUT   http://localhost:5000/bank
   ```
 ```sh
  DELETE   http://localhost:5000/bank
   ```

## API Calls

GET
http://localhost:5000/banks

POST
http://localhost:5000/bank
{
  "name":"",
	"location":"",
	"branch":"",
	"phone":"",
	"address":"", 
}

PUT 
http://localhost:5000/bank
{
    "name":"",
	"location":"",
	"branch":"",
	"phone":"",
	"address":"", 
}

DELETE
http://localhost:5000/bank
{
   "id":""
}
## Account

 ```sh
  GET   http://localhost/:id?:5000/account
   ```
 ```sh
  POST   http://localhost:5000/account
   ```   

## API Calls

GET 
http://localhost:5000/account

POST 
http://localhost:5000/account
   {
    "name":"",
	"lnumber":"",
	"type":"",
	"bankId":"Object ID of the saved bank", 
}





## Code Examples :

 http://localhost:5000/bank
 POST
 {
  "name":"GT BANK",
	"location":"Kumasi",
	"branch":"KNUST",
	"phone":"0544413229",
	"address":"Box 5,KNUST", 
}




## Query Parameters 

GET - BANK ROUTE

ID -  Optional  - This is the Object ID of the already created bank if Any

GET - ACCOUNT ROUTE

ID -  Optional  - This is the Object ID of the already created bank if Any


## Responses

  ![alt text](https://github.com/rafiquecudjoe/bank-crud-api-node-express-mongoDB/blob/master/Response1.png?raw=true)

   ![alt text](https://github.com/rafiquecudjoe/bank-crud-api-node-express-mongoDB/blob/master/Response2.png?raw=true)


## Status and Errors

Status 200 = Success

Status 500 =  Internal Server Error



