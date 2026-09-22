// this ,call,apply ,bind

// strict mode vs non strict mode

// var a=10
// b=20

// console.log(a,b)

//acquma 5 script 


// 'use strict' // follow strict  modern js rule

// var a=10
// b=20

// console.log(a,b)

// console.log(window); // give error bcz it is created by browser object

// node js global object  is global
// used for runngin js in backend 
// console.log(global); 

// console.log(globalThis); // global object of  environment //run on both browser
//  //or in node js

//  console.log(this); //point to empty object but in the browser 
//  //point  to global object i.e window


// const user = {
//     name : "TTD",
//     greet: function(){
//         console.log(this);
//       console.log(`hi ${this.name}`)
//     }
// }

// user.greet();


// function greet()
// {
//     console.log (this);
// }

// greet();//in non strict this object point to global objecct or when 
// // strict mode undefined for function;

// console.log(this)


// normal function without stric mode this will point to global object 
// in stric mode this will poin to undefined


// function greet()
// {
//     console.log ("hi"+" " +this.name);
// }


// greet.call(user)
 // call greet where this point out to the user
// benifits : write function once many object can use is.

// const user = {
//     name: "TTD",
//     age: 15
// };

// function incrementAge(value, name) {
//     this.age = this.age + value;
//     console.log(this.age);

//     this.name = name;
//     console.log(this.name);
// }

// // call()
// // incrementAge.call(user, 5, "Abhijit");

// // apply()
// // incrementAge.apply(user, [5, "Abhijit"]);

// // bind()
// const incr = incrementAge.bind(user, 10, "Mahesh");

// incr();

// call ,apply,bind this point to the invoking object 

// class person
// {
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age =age;
//     }
// }

// const p1 = new person("om",18);

// console.log(p1);
 
// new create  empty object and this point to empty object
// in class constructor this will point to newly create empty object and later reinitilaize it 

// this doesnot exit for arrow function 

// const greet = ()=>
// {
//     console.log(this)
// }

// greet(); // return empty object , it take this value from lexical environment scope

 'use strict'
// const user1 =
// {
//     greet : function()
//     {
//         function mee()
//         {
//             console.log(this)
//         }

//         mee();
//     }

// }


// // const user1 =
// // { 
// //     name:"omkar",
// //     greet : function()
// //     {
// //         const mee =()=>console.log(this.name)
// //         mee();
// //     }
       
// }


// solution for this 
// const user1 =
// {
//      name:'pavan',
//     greet : function()
//     { 
//         const that =this;
//         function mee()
//         {
//             console.log(that.name)
//         }

//         mee();
//     }

// }

// user1.greet();

// const user ={
//     greet:()=>console.log(this)
// }

// user.greet();

// object {} is an context not scope so => point out side the object i.e empty  

