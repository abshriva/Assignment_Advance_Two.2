/*

This Class contains constructor & function for displaying message in HTML

*/

class Employee{

    // private properties
    private name:string;
    private age:number;

    // Paramaterised Constructor
    public constructor(empName:string,empAge:number){
            this.name= empName;
            this.age=empAge;
    }

    /*
    function which will return the message with the string 
    and value which is passed to the constructor.
    */
    DisplayInfo():string
    {
        return `Hello my name is ${this.name} &  my Age is ${this.age}`
    }

};

//Instance creation of class & passing parameters
var emp = new Employee('Abhishek',25);
console.log(emp.DisplayInfo());// For Showing Output in Console
document.body.innerHTML = emp.DisplayInfo(); // For showing Output in Browser

