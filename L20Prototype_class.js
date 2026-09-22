// protype and class

//hasOwnProperty(key)=> return true if key is present else false
//property :=> creating link between two objects i.e inherit
//every object defaulty inherit the Object.prottype 
//Prototype is an object that another object can use to inherit properties and methods.
// const obj ={
//      name: "abc",
//      age:20

// }


// const obj2 =
// {

// }


// obj2.__proto__=obj; // cretae prortype for obj2 

// console.log(obj2.name);

// Array.protype is alrady exits ur new array inherit it 
//arr.__proto__=> find  the protype 
//object.proptype.__prot__=null // i.e inherit null for stopping 
//function -> protype -> Function.protype -> object.protype
//so, function is also a object.


//class  is blue print  of the object 


class person
{
    constructor(name,age)
    {
        this.name=name; // create name property
        this.age=age;
    }

    sayHi()
    {
        console.log('hi ${ths.name}')

    }
}


// creating object

const person1 = new person('sh',20);

 console.log(person1.name);

 console.log(person1);// print key -value but not function 

 console.log(person1.__proto__)


//  class customer extends person
//  {

//  }
// super()// used initialize parent class

// obj2 = object.create(obje1) // create protype of obje1 for obj2
//
//