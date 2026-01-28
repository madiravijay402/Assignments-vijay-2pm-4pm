// let a=12;
// a=23;

// console.log(a);
// var b=12;
// b=23;
// var b=25;
// console.log(b);
// const d=11;


// console.log(d);

// let a=1;
// switch(a){
//     case 1:console.log("monday");
//     break;
//     case 2:console.log("tuesday");
//     break;
//     default: console.log("holiday");
// }

let c=4;
while(c>0){
    console.log(c);
    c--;
}

const std={
    name:"vijay",
    age:22,
    class:"bca"
}
console.log(typeof std.age);
//
const{name,age,class:className}=std;
console.log(name,age,className);
//
const{age:personAge}=std;
console.log(personAge);
//
const{...newStd}=std;
console.log(newStd);
//
const{country="india"}=std;
console.log(country);
//
std.country="india";
console.log(std);
// funtion destructing

function display({name,age}){
    console.log(name,age);
}
display(std);
//
function sum(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
console.log(sum(1,2,3,4,5));
//
class person{
    constructor({name,age}){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello i am ${this.name} and my age is ${this.age}`);
    }
}
const p1=new person(std);
p1.greet(); 

//
class Animal{
    constructor(name){
        this.name=name;
    }
    bark(){
        console.log(`${this.name} started barking yesterday`);
    }
}

class dog extends Animal{
    breed(){
        console.log(`${this.name} is german shepeard` );
    }
}
const d1=new dog("tommy");
d1.breed();
d1.bark();
//
function pnimal(name){
    this.name=name;
}
pnimal.prototype.bark=function(){
    console.log(`${this.name} is barking`);
}
const a1=new pnimal("rocky");
a1.bark();

//
let ac=[1,2,3,4,5];
ac.forEach(function(value){
    console.log(value*2);
})
//
let ab=[44,23,12,11,5]
ab.map(num=>{
    console.log(num);
})
//
// ab.filter(num=>num>10)
// {
//     console.log(num);
// }

