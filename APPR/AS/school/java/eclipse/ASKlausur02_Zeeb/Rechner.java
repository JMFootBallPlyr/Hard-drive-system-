/**
    * f(x) = 2.5x^3 + (49/17)x^2 - 15 is the function.
    * Calculate the function with the given x.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Import of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class $CLASS.
public class Rechner {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner scanfkt = new Scanner(System.in);

// Define variable values.
        double a = 2.5;
        double b = 49.0 / 17.0;
        int c = 15;

// Gather information.
        System.out.println("Please enter x: ");
        int z01 = scanfkt.nextInt();

// Declare the math.
        // x^3
        double ax = z01 * z01 * z01;
        // 2.5 * x^3
        double findx01 = a * ax;
        // x^2
        double bx = z01 * z01;
        // (49/17)x^2
        double findx02 = b * bx;
        // 2.5x^3 + (49/17)x^2 - 15 (full function).
        double findx03 = findx01 + findx02 - c;

// Print the results.
        System.out.println("a = "+a);
        System.out.println("b = "+b);
        System.out.println("c = "+c);
        System.out.println("x = "+z01);
        System.out.print(+findx01);
        System.out.print(" + "+findx02);
        System.out.print(" - "+c);
        System.out.println(" = "+findx03);
//        System.out.print(+z01);
//        System.out.println("^3 = "+ax);
//        System.out.print(+z01);
//        System.out.println("^2 = "+bx);
//        System.out.print("(2.5 * "+z01);
//        System.out.print("^3) + ((49/17) * "+z01);
//        System.out.println("^2) - "+c);
//        System.out.print("^3) + ((49/17) * "+z01"^2) - "+c");
//        System.out.print("^3) + ((49/17) * "+z01"^2) - "+c");
//        System.out.print("^3) + ((49/17) * "+z01"^2) - "+c");

//        System.out.println(+findx01" + "+findx02" - "+c);
        System.out.println("The final result is: "+findx03);

// Main function being closed.
    }

// Declaration being closed.
}
