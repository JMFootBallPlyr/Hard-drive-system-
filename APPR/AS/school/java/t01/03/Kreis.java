/**
    * Divide number 1 by number 2 taken from user input.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Import of the java utility "Scanner".
import java.util.Scanner;
// Include the math library.

// Declaration of the public class $CLASS.
public class Kreis {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner scancir = new Scanner(System.in);

// What we need:
//      * Sphere area = r^2 * pi
//      * Sphere surface = 4 * r^2 * pi
//      * Sphere volume = 4/3 * r^3 * pi

// Gather information.
        System.out.println("Please enter the radius: ");
        double rad = scancir.nextDouble();

// Declare the math.
        double sar = (double) (rad * rad) * Math.PI;
        double ssu = (double) 4 * (rad * rad) * Math.PI;
        double svo = (double) (4/3) * (rad * rad * rad) * Math.PI;

// Prdouble the results.
        System.out.println("");
        System.out.println("Sphere area: "+sar);
        System.out.println("Sphere surface: "+ssu);
        System.out.println("Sphere volume: "+svo);

// Main function being closed.
    }

// Declaration being closed.
}
