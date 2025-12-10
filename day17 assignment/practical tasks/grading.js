let marks=74;
if(marks>=90){
    console.log("A grade");
}
else if(marks<90 && marks>=80){
    console.log("b grade");
}
else if(marks<80 && marks>=70){
    console.log("c grade");
}
else if(marks<70 && marks>=60){
    console.log("d grade");
}
else if(marks<60 && marks>=50){
    console.log("e grade");
}
else if(marks>100){
    console.log("invalid");
}
else if(marks<50 && marks>=0){
    console.log("fail");
}
else{
    console.log("suspended");
    
}

// switch 
//  good for fixed option
let day=5;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    default:
    console.log("invalid day");   
}


