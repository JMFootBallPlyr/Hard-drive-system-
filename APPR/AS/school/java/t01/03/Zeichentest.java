/**
    * variable = (char) (variable + 5);
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Import of the java utility "Scanner".
import java.util.Scanner;
// Include the math library.

// Declaration of the public class $CLASS.
public class Zeichentest {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner scanvar = new Scanner(System.in);

// Gather information.
        System.out.println("Please enter your variable character: ");
        char var01 = scanvar.next(".").charAt(0);

// Declare the math.
        char var02 = (char) (var01 + 5);

// Prdouble the results.
        System.out.println("");
        System.out.println("var01 = "+var01);
        System.out.println("var02 = "+var02);

// Main function being closed.
    }

// Declaration being closed.
}
