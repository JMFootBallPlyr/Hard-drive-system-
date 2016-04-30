/**
    * Calculates the travel length of an item shot by a tank.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class $CLASS.
public class warzones {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner scanzone = new Scanner(System.in);

// Request values.
        System.out.print("Enter the speed (in m/s): ");
        double speedw = scanzone.nextDouble();

        System.out.print("Enter the degree (in °): ");
        double gradew = scanzone.nextDouble();
        
// Declare the math. Do it. Print it.
        double grav = (9.81);
        double a = Math.sin(2*gradew);
        double b = (((speedw*speedw)*a)/grav);
        double resu = Math.round(b*100)/100.0;

        System.out.println("The ammunition can be fired for " + resu + " m.");

// Main function being closed.
    }

// Declaration being closed.
}
