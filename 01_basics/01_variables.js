const accountID = 144553
let accountEmail = "sagar@google.com"
var accountpassword = "12345"
accountCity = "Chhattisgarh"

// accountID = 2 //Not Allowed

accountEmail = "ss@ss.com"
accountpassword = "123456789"
accountCity = "Indore"
let accountState;
console.log(accountID);

/*
Prefer Not to use var,
because of issue in blockscope and functional scope {} 
*/

console.table([accountID, accountEmail, accountpassword, accountCity, accountState ])