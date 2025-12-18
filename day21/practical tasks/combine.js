let a=[23,3,4,5,6]
let b=[9,8,91,"vijay"]
let c=[];
// ordinary
for(let i=0;i<a.length;i++){
    c.push(a[i])
}
for(let j=0;j<b.length;j++){
    c.push(b[j])
}
console.log(c);
// concat
let d=a.concat(b)
console.log(d);
//spred syntax
let e=[...a,...b]
console.log(e);
//
// a.forEach(num=>
//     c.push(num))


