// let a=10;
// const b = 20;

// function greet()
// {
//     console.log(a)
//     //Local scope
//     let c=30;
//     console.log(c);
// }

// if(true)
// {
//     var p = 100;;
//     console.log(p);
// }

// console.log(p); //100   

// greet();
// //console.log(c); //error c is not defined    


// // scopess type
// // 1. Global scope => Available throughout the program
// // 2. Local scope => Available within the function
// // 3. Block scope => Available within the block {}

// //var =>not follow block scope follow others scope

 // Scope and closure , HOF
// Global_> Accessible to everyone
// functional -> accesible only to that function
// Block level scope-> accesible only to that Block

// let a = 10;
// const b = 20;



// if(true){
//     let d = 30;
    
// }

 

// function greet(){

//     let c = 30;
//    var e = 90;
// }

// // console.log(c);
// console.log(e);
// greet();


// let global = 30;


// function greet(){
     
//     let global = 40;
   

//     function meet(){
//         let global = 10;
//         console.log(global);
//     }
    
//     meet();
// }

// greet();


// function createCounter(){
    
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// // console.log(count);

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// let balance = 500;




// // // balance+="Rohit";
// // balance-=500;
// // console.log(balance);

// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
// }

// balance="Rohit"

// user.balance="Rohit";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));

// method ko access(function)
// balance: usko directly access na


// function createBankAccount(){

//     let balance = 500;
    
//     return {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
//     }

 
// }





// const customer = createBankAccount();
// console.log(customer.withdraw(200));


// Higher order function


function double(value){

    return function execute(num){
        return num*value;
    }
    
}
//Or const n = double(20)
  //then const n = n(5)  //n is functionss
  //or 
const n = double(20)(5);
console.log(n);
