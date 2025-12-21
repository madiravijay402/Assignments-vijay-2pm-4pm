let a=34;
if(a>=18 && a<=24){
    console.log("adult");
}
else if(a>24 && a<=60){
    console.log("uncle");
}
else if(a>60){
    console.log("thatha");
}
else if(a<18 && a>=0){
    console.log("child");
}
else{
    console.log("invalid");
}