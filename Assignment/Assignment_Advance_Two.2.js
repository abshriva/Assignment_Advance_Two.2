var Employee = (function () {
    // Paramaterised Constructor
    function Employee(empName, empAge) {
        this.name = empName;
        this.age = empAge;
    }
    /*
    function which will return the message with the string
    and value which is passed to the constructor.
    */
    Employee.prototype.DisplayInfo = function () {
        return "Hello my name is " + this.name + " &  my Age is " + this.age;
    };
    return Employee;
}());
;
var emp = new Employee('Abhishek', 25);
console.log(emp.DisplayInfo());
document.body.innerHTML = emp.DisplayInfo();
