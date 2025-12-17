class employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    opd(){
        console.log(`the employee details: name: ${this.name} salary: ${this.salary}`);
    }
}
let c=new employee("vijay","18lpa")
c.opd();