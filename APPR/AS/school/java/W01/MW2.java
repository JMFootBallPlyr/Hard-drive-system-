// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class named Mehrwertsteuer2.
public class MW2 {

// Main function being called.
    public static void main (String[] args) {
        double brutto = 0.0;
        double netto = 0.0;
        double mwstbetrag = 0.0;

// Function "Scanner" being created.
        Scanner myScanner = new Scanner(System.in);

// Print stuff FFS.
        System.out.println("Nettobetrag : ");
        netto = myScanner.nextDouble();
        mwstbetrag = netto * 0.19;
// Declare the math.
        brutto = netto + mwstbetrag;
        
        System.out.println("MwSt-Betrag: " + mwstbetrag);
        System.out.println("Bruttobetrag: " + brutto);

// Main function being closed.
    }

// Declaration being closed.
}
