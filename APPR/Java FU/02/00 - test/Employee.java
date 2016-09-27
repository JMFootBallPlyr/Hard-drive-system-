/**
* $DESCR
* @version      -9.000
* @author       Eunjae
*/

// Utils import

// Class declaration start
public class Employee {
    String name;
    int age;
    String desig;
    double salary;

// Constructor start
    public Employee(String name) {
        this.name = name;
    }
// Constructor end

// Methods start
    public void empAge(int empAge){
        age = empAge;
    }

    public void empDesig(String empDesig){
        desig = empDesig;
    }

    public void empSalary(double empSalary){
        salary = empSalary;
    }

    public void printEmployee() {
        System.out.println("Name: "+name+", "+age+", "+desig+", "+salary+" EUR.");
    }
// Methods end

// Functions start
// Functions end

// main() start
    public static void main(String[] args) {
    }
// main() end

}
// Class declaration end
