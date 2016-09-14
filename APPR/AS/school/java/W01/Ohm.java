// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class Ohm.
public class Ohm {

// Main function being called up.
    public static void main(String[] args) {
        double voltage      = 0.0;
        double resistance   = 0.0;
        double elstrength   = 0.0;

// Function "Scanner" being created.
        Scanner myScanner = new Scanner(System.in);

// Do math and print it.
        System.out.println("Spannung [V]: ");
        voltage = myScanner.nextDouble();

        System.out.println("Widerstand [Ohm] (nur positive >0 Eingaben): ");
        resistance = myScanner.nextDouble();

        elstrength = voltage / resistance;
        System.out.println("Die Stromstärke beträgt: " + elstrength);

// Main function being closed.
    }

// Declaration being closed.
}
