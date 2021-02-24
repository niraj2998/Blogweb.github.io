// function add(num1,num2){
//     return num1 + num2;
// }
// function sub(num1,num2){
//     return num1 - num2
// }
// function mul(num1 ,num2){
//     return num1 * num2
// }
// function div(num1,num2){
//     return num1 / num2
// }
// function calc(num1,num2,operator){
// return operator(num1,num2)
// }
// calc(10,5,mul);

// debugger
// calc(10,5,mul);

// let houseKepper = {
//     name:"amanda",
//     age: 21,
//     experience:"12 year",
//     work : ["clothes","utensils","cleaning"]
// }
//houseKepper;
// constructor function for housekeppper
// function HouseKepper(name,age,workExp,work){
//     this.name = name;
//     this.age = age;
//     this.workExp = workExp;
//     this.work = work;
// }
// let housekeper1 = new HouseKepper("sherin",26,"3 years",["clothing","utensils"]);
// housekeper1;
// houseKepper1;

// contructor function:- the name has to be capitalize i.e the first letter must be capital
// we can create multiple objects without defining there roperties again and again.
// function BellBoy(name,age,hasWorkPermit,languages){
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages
//     }
//     let bellBoy1 = new BellBoy("rohan",23,true,["english,spainish"]);
//     bellBoy1

// switch statements in javascript

// creating method 
// function which is created within function or construction function is termed as method. 
// in construction function if you create a method, then every object created with that construction function will get
//  that method applied to it.
// function HouseKepper(name,age,workExp,work){
//     this.name = name;
//     this.age = age;
//     this.workExp = workExp;
//     this.work = work;
//     this.cleanHouse= function(){
//        let per = prompt("may i clean your house?");
//        if(per === "yes"){
//            alert("house has been cleaned")
//        }
//        else if( per === "no"){
//            alert("will wait for your instructions")
//        }
//     }
// }
// let housekeper1 = new HouseKepper("sherin",26,"3 years",["clothing","utensils"]);
// housekeper1.cleanHouse();

// higher order functions:- these are the functions that are able to take functions as input.
// here addEventListener is high order function which is taking respondToKey function as input 
// document.addEventListener("keydown",respondToKey(event));
// function respondToKey (event){
// console.log("KEY PRESSED");
// }
// Now what about the other side? What about the function that gets passed in as an input?

// Well this is actually called a callback function because it allows us to wait for something to finish happening,

// for example waiting for a click event, and then the callback function gets called back and executed.

// So previously when our button detects a click it calls the callback function.

// And in this case when the document or the entire web page detects a key press then the document will

// call this function respondToKey.

// Now when that happens we can get it to send us some information that it'll only know once the event

// happens, namely say which button was clicked, or which keyboard key was pressed.