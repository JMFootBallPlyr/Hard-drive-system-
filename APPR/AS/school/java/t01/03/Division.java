/**
    * Divide number 1 by number 2 taken from user input.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Import of the java utility "Scanner".
import java.util.Scanner;
// Include the math library.

// Declaration of the public class $CLASS.
public class Division {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner scandiv = new Scanner(System.in);

// Gather information.
        System.out.println("Please enter your first number: ");
        double z01 = scandiv.nextDouble();
        System.out.println("Please enter your second number: ");
        double z02 = scandiv.nextDouble();

// Declare the math.
        double res = (double) (z01/z02);

// Prdouble the results.
        System.out.println("");
        System.out.print(+z01);
        System.out.print(" / "+z02);
        System.out.println(" = "+res);

// Main function being closed.
    }

// Declaration being closed.
}
