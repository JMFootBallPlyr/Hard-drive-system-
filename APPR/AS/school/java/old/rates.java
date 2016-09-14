// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class Area.
public class rates {

// Main function being called up.
    public static void main(String[] args) {
        double havegot   = 0.0;
        double yrates    = 0.0;
        double extragold = 0.0;
        double rateget   = 0.0;


// Function "Scanner" being created.
        Scanner myScanner = new Scanner(System.in);

// Ask for values.
        System.out.println("Enter current gold: ");
        havegot = myScanner.nextDouble();

        System.out.println("Enter yearly rates: ");
        yrates = myScanner.nextDouble();
        
// Declare the math. Do it. Print it.
        extragold = havegot / yrates;
        rateget = havegot + extragold;
        System.out.println("Your extra gold will be " + extragold + ".");
        System.out.println("Your end result gold will be " + rateget + ".");

// Main function being closed.
    }

// Declaration being closed.
}
