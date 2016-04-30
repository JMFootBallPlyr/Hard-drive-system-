/**
    * Calculate the electric strength.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class $CLASS.
public class res {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner resscan= new Scanner(System.in);

// Define variable values.
        double volt      = 0.0;
        double resi   = 0.0;
        double elstr   = 0.0;

// Do math and print it.
        System.out.println("Voltage [V]: ");
        volt = resscan.nextDouble();

        System.out.println("Resistance [Ohm] (only positives >0): ");
        resi = resscan.nextDouble();

        elstr = volt / resi;
        System.out.println("The electric strength is: " + elstr);

// Main function being closed.
    }

// Declaration being closed.
}
