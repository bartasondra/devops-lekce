var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "token"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});






let numberOfUsers = 1   //číslo - integer 
let companyName = "facebook"  // text - string
let letter = 'o'  // jedne znak - char ?
let isItBlue = true // nebo false je to boolean překláda se to do 0 nebo 1
let fruits = ["banana","apple","apple"]  // array - pole
let setOfFruits = new Set(["banana","apple"])  // set - pole kde se nikdy nic neopakuje ?
let user = {
    name: "ondra",
    age: 34,
    address: {
        street: "svatojánská",
        number: 111,
        city: "lhenice"
    },
    pets: [
        {
            animal: "dog",
            name: "baki"
        },
        {
            animal: "dog",
            name: "ajli"
        },
        {
            animal: "cat",
            name: "gali"
        },
        {
            animal: "cat",
            name: "nina"
        }
    ],
    hasChilds: true
}

function greet(){
    console.log("hi")
}

function greetWithName(name){
    console.log("hi " + name)
}


function add(numberA, numberB){
    greet()
    return numberA + numberB
}

function minus(numberA, numberB){
    return numberA - numberB
}
function getTokenFromVault(addr){
    return ["token1","token1"]
}
function findToken(tokens) {
    return token 
}

// this is main starting function
function start(team){
    greet()
    greetWithName("ondra")
    greetWithName("tomas")
    let tokens = getTokensFromVault("http://vault.com")
    let token = findToken(tokens)
    loginWithToken(token)
}



start("team-beta")

let result1 = add(1,15)
let result2 = minus(100, add(1, add(2,5)))


let name="ondra"

if(name == "ondra") {


console.log("hi, ondra")
} else {
    "hi, others"
}

