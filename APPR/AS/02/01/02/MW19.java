/**
    * Calculate the taxes and the price including taxes (19%).
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class $CLASS.
public class MW19 {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner scanmw = new Scanner(System.in);

// Define variable values.
        double brut = 0.0;
        double net = 0.0;
        double tax = 0.0;

// Gather information.
        System.out.println("Base price: ");
        net = scanmw.nextDouble();
        tax = net * 0.19;

// Declare the math.
        brut = net + tax;
        System.out.println("Tax amount: " + tax);
        System.out.println("Price including taxes: " + brut);

// Main function being closed.
    }

// Declaration being closed.
}
