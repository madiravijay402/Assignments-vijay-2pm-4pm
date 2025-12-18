class employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    opd(){
        console.log(`the employee details: name: ${this.name} salary: ${this.salary}`);
    }
}
class Manager extends employee{
    constructor(department){
        this.department=department;
    }
    
}
let c=new employee("vijay","18lpa")
c.opd();