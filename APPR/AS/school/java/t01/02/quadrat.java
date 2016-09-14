/**
    * Calculates the area of a quadrat.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class $CLASS.
public class quadrat {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner areascanner = new Scanner(System.in);

// Define variable values.

        int awidth   = 0;
        int aheight  = 0;
        int aArea    = 0;

// Ask for values.
        System.out.println("Breite: ");
        awidth = areascanner.nextInt();

        System.out.println("Höhe: ");
        aheight = areascanner.nextInt();
        
// Declare the math. Do it. Print it.
        aArea = awidth * aheight;
        System.out.println("Die Fläche beträgt: " + aArea);

// Main function being closed.
    }

// Declaration being closed.
}
