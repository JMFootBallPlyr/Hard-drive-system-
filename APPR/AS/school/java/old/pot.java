/**
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class Area.
public class pot {

// Main function being called up.
    public static void main(String[] args) {
        double potw = 0.0;
        double poth = 0.0;
        double potr = 0.0;
        double potv = 0.0;
        double pie  = 3.141593;


// Function "Scanner" being created.
        Scanner myScanner = new Scanner(System.in);

// Ask for values.
        System.out.println("Enter the width: ");
        potw = myScanner.nextDouble();

        System.out.println("Enter the height: ");
        poth = myScanner.nextDouble();
        
// Declare the math. Do it. Print it.
        potr = poth / 2;
        potv =  pie * (potr * potr) * poth;
        System.out.println("The maximum volume of the pot is " + potv + "l.");

// Main function being closed.
    }

// Declaration being closed.
}
