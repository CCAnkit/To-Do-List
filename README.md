## To-Do-List

# To-Do List is created with Mobile number only that is based authentication and authorization API using Nodejs and Mongodb.

# Mobile OTP API
-- Create Login Page.
-- 1. Create Login Screen
-- 2. Accept Mobile Number and send and validate the OTP on Mobile number. 

# To-Do List API
-- 1. Create To Do List
-- 2. Delete To DO List

# Packages - 
Express.Js
Body-Parser
Mongoose
Jsonwebtoken
fs
Cors
Dotenv
OTPgenerator
Fast-two-sms
EJS
Nodemon
Morgan

# EndPoint and Feature for Mobile Login
1) /api/auth/register

method POST
body {
     phone : String
     name : String
}


2) /api/auth/login

method POST
body {
     phone : String
}


3) /api/auth/verify

method POST
body {
     otp : String
     userId : String
}


4) /api/auth/me

method GET
headers {
     Authorization : Bearer jwt_token
}


# EndPoint and Feature for To-Do List

1) /api/auth/createList

method POST
headers {
     content : String
     date : Date
}

2) /api/auth/deleteList

method DELETE
headers {
     Authorization : Bearer jwt_token
}
