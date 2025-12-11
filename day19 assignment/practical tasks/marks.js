function mks(marks){
    if(marks>90){
        return "a-grade";
    }
    else if(marks>80 && marks<=90){
        return "b-grade";
    }
    else if(marks>70 && marks<=80){
        return "c-grade";
    }
    else if(marks>60 && marks<=70){
        return "d-grade";
    }
    else if(marks>50 && marks<=60){
        return "e-grade";
    }
    else if(marks>100 || marks<0){
        return "invalid";
    }
    else{
        return "fail";
    }
}
console.log(mks(75));
