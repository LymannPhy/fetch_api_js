// //Learn Variable in JS
// var name = "Lymann"
// let age = 30
// const isSingle = true

// let box = "Box-1"

// console.log(typeof box)
// if(isSingle){
//     let x = 10
//     console.log("You need to find someone to be your girlfriend.")
//     console.log("x = ", x)
// }

// "use strict"
// //Initialize variable means you assign the value to the variable at the same time you declare.
// let number = 23
// console.log("I am " , number , "year old.")


// Variable
let name = "Polydet"
 let age = 30
 let isMarried = true

 let sentence1 = "His name is " + name + "." + " He is " + age +" years old." + " Is he married true or false? " + isMarried;
 let sentence2 = `His name is ${name}. He is ${age} years old. Is he married true or false?: ${isMarried}.` 
 console.log(sentence2)

let bigInt = 12345678901323495456856959604594995695685685685890n
let bigInt2 = 1

let bigInt3 = bigInt + BigInt(bigInt2)
console.log(bigInt3.toString())

//Object Type
let obj = {}
console.log(typeof obj)


//How to access object
let product = {
    id: 1,
    productName: "Sumsung Galaxy Note 10+",
    price: 650,
    qty:2,

    info: function(){
        console.log("Product Name : " + this.productName)
        console.log("Price : " + this.price)
    },

    varian: ["Black", "White", "Red"],
}

let key = "productName"

console.log(product)
console.log(product.productName)
//Sometime we can't use dot to point access the value, we need to use bracket instead of point
console.log(product[key])
//Access obj function
product.info();
//Access obj array
console.log(product.varian[0])

