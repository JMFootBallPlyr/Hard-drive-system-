/**
* $DESCR
* @version      -9.000
* @author       Eunjae
*/

// Utils import
import java.io.*;

// Class declaration start
public class EmployeeTest {

// main() start
    public static void main(String[] args) {
        // Creating two objects using constructor.
        Employee empOne = new Employee("Mary Anne");
        Employee empTwo = new Employee("James Smith");
        
        // Invoking methods (attributes) for each object created.
        empOne.empAge(26);
        empOne.empDesig("Senior Software Engineer");
        empOne.empSalary(1000);
        empOne.printEmployee();
        
        empTwo.empAge(21);
        empTwo.empDesig("Software Engineer");
        empTwo.empSalary(500);
        empTwo.printEmployee();
    }
// main() end

}
// Class declaration end
