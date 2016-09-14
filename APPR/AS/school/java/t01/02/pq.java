/**
    * Calculate the result of a given number that is inserted doubleo the PQ formula.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Import of the java utility "Scanner".
import java.util.Scanner;
// Include the math library.

// Declaration of the public class $CLASS.
public class pq {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner scanfct = new Scanner(System.in);

// Gather information.
        System.out.println("Please enter p: ");
        double p = scanfct.nextDouble();
        System.out.println("Please enter q: ");
        double q = scanfct.nextDouble();

// Declare the math.
        double par = (double) ((p*p)/4)-q;
        double xsqrt = (double) Math.sqrt(par);
        double x01 = (-1 *(p/2)) + xsqrt;
        double x02 = (-1 *(p/2)) - xsqrt;

// Prdouble the results.
        System.out.println("");
        System.out.println("Number in parenthesis: "+par);
        System.out.println("Square root of number in parenthesis: "+xsqrt);
        System.out.println("");
        System.out.println("x01 = : "+x01);
        System.out.println("x02 = : "+x02);

// Main function being closed.
    }

// Declaration being closed.
}
