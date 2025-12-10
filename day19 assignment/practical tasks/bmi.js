let weight=64;
let height=1.71;
let bmi=weight/(height*height);
if(bmi<18.5){
    console.log("under weight");
}
else if(bmi>=18.5 && bmi<24.9){
    console.log("normal");
}
else if(bmi>=24.9 && bmi<29.9){
    console.log("overweight");
}
else if(bmi>=29.9){
    console.log("obese");
}
else if(bmi<=0){
    console.log("dead");
}
else{
    console.log("invalid");
    
}