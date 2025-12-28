// let is block scoped variable,let can act as both global and local vairable 
// local vairable 
// let a=10;
// var b=30;
// const c=40;
// if(true){
//     let a=20;
// }

function vi(){
    console.log("taj");
}
vi();

function dj(k){
    console.log(2*k);
}
dj(5);

let a=()=>{
    console.log("vijay");
}
a();
let c=(a,b)=>{
    return a+b;
}
console.log(c(2,3333));

//callback
function greet(name="guest"){
    console.log(`hello ${name}`);
}
function person(callback){
    let a=8;
    if(a==1){
        callback("vijay")
    }
    else if(a==2){
        callback("ajay")
    }
    else{
        callback("anamakudu")
    }
}
person(greet);


function outer(callback){
    console.log("nenu evarini");
    
    callback();
}
outer(()=>{
    console.log("nuvvu ma amrendhra bahubali rakthanivi");
})

function sum(a,b,callback){
    console.log(a+b);
    callback();
}
sum(2,3,()=>{
    console.log("aipoyindhi");
    
})

// timedaly

function curse(callback){
    setTimeout(()=>{
        console.log("boothula puranam");
        callback();
    },2000);
}
curse(()=>{
    console.log("mf,zako");
});

function curse2(name){
    let a=["mf","fk","skdik"]
    for(let i=0;i<a.length;i++){
        console.log(`hi ra ${name} ${a[i]}`);
    }
}
 function name3(callback){
        let a=1;
        if(a===1){
            callback("pandhikukka")
        }
        else{
             callback("kothiouka")
        }
    }
name3(curse2);


