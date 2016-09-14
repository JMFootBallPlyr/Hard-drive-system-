/**
    * f(x) = 5x^3 + 2x^2 - 15 is the function. Calculate the result with a given number.
    * Calculate the function with the given x.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Import of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class $CLASS.
public class function {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner scanfct = new Scanner(System.in);

//// Define variable values.
        int a = 5;
        int b = 2;
        int c = 15;

// Gather information.
        System.out.println("Please enter x: ");
        int z01 = scanfct.nextInt();

// Declare the math.
        // x^3
        int ax = z01 * z01 * z01;
        // 5 * x^3
        int findx01 = a * ax;
        // x^2
        int bx = z01 * z01;
        // 2 * x^2
        int findx02 = b * bx;
        // 5x^3 + 2x^2 - 15 (full function).
        int findx03 = findx01 + findx02 - c;

// Print the results.
        System.out.println("");
        System.out.print(+findx01);
        System.out.print(" + "+findx02);
        System.out.print(" - "+c);
        System.out.println("");
        System.out.println("The result is: "+findx03);

// Main function being closed.
    }

// Declaration being closed.
}
