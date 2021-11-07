const jwt = require("jsonwebtoken"); // Import
//const fs = require("fs"); // fs package comes with node.js by defaut, no need npm install. //for the file system to read another file

//pwd: node hash.js abc123
//node verify-hash.js '$2b$10$AXwhcNNxcuai7Pe3bYV7deEj54w/lFDak34WzUftUkx6SAd.Pruhe' abc123
const credentials = [{ 
    "email":"abc@123.com", 
    "id": 1,
    "pwd":"$2b$10$AXwhcNNxcuai7Pe3bYV7deEj54w/lFDak34WzUftUkx6SAd.Pruhe" 
}];

// Generate token with the above data. 
//HMAC SHA256 (default algrithm used when without privatekey- needs a password (in this case, abc123)) 
//do not use jwt pwd in token
const token = jwt.sign({"email":credentials.email,"id":credentials.id},'pass123', {expiresIn:"1d"});
// const token = jwt.sign(mockLoginData, privateKey, {algorithm:"RS256", expiresIn:"1d"});
console.log(token);