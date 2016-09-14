/**
    * Summe, Differenz, Produkt, Quotient und Divisionsrest von zwei natürlichen Zahlen berechnen.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Import of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class $CLASS.
public class Funktion {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner scanfkt = new Scanner(System.in);

// Define variable values.
        double sum = 0;
        double dif = 0;
        double pro = 0;
        double quo = 0;
        double div = 0;
        double z01 = 0;
        double z02 = 0;


// Gather information.
        System.out.println("Please enter the first (whole) number: ");
        z01 = scanfkt.nextInt();

        System.out.println("Please enter the second (whole) number: ");
        z02 = scanfkt.nextInt();

// Declare the math.
        sum = z01 + z02;
        dif = z01 - z02;
        pro = z01 * z02;
        quo = z01 / z02;
        div = z01 % z02;

// Print out the results.
        System.out.println("Your results are as follows:");
        System.out.println("Sum: "+ sum);
        System.out.println("Difference: "+ dif);
        System.out.println("Product: "+ pro);
        System.out.println("Quotient: "+ quo);
        System.out.println("Dividend: "+ div);

// Main function being closed.
    }

// Declaration being closed.
}
