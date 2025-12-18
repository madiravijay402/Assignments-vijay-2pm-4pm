let a=[2,5,9];
a.map(num=>{
    console.log(num*num);
})
a.map(function(num){
    console.log(num*num*num);
})
const nm=[23,190,21,51,70,9,12]
const cm= nm.filter(function(num){return num>50})
console.log(cm);
