let accountBalance = 10000;// declaration
//let accountBalance=60000; // in let redeclaration not allowed
accountBalance=60000; // in let reassignment is allowed

console.log(`${accountBalance}`);

let username= "crmsfa"
console.log(`${username}`+` ${accountBalance}`); //`${..}` called as template literal used to get & print dynamic values

accountBalance="60000"// reassignment 


//Using const  you cannot redeclare also you cannot reassign

const accountNumber = 1231231231// const declaration
//const accountNumber=60000// const redeclaration not allowed
//accountNumber=12412412// const reassignment is also not allowed

console.log(accountNumber);