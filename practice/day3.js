// let a=[[1,2,3],[23,1,12],[33,[45,9,0]]];
// let c=9;

//     a.flat(Infinity).forEach((element,i) => {
//     if(element===c){
//         console.log(`index : ${i}`);
//     }
// });
// let b=[[12,22,1],[12,99,9],[[12,1,45],89]];
// let w=12;
// function findvalue(arr){
//     for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//         findvalue(arr[i]);
//     }
//     else if(arr[i]===w){
//         console.log(`index value : ${i}`);
//     }
// }
// }
// findvalue(b);
let ba = [1,2];
let ab = [...ba];  // copy

ab.push(3);
console.log(ab);  // [1,2]

let obj1 = { x: 10 };
let obj2 = { ...obj1 };

obj2.y= 20;
console.log(obj2); // 10
