const readline = require("prompt-sync");
const prompt=readline();

let pin = prompt("enter PIN :");

let pinRegex = RegExp('^[A-Z a-z]{1 ,}([+'-']*)[A-Z a-z o-9_+-,]$)

if (pinRegex.test(email))
   console.log("valid email !");
   else
    console.log("invalid email !");