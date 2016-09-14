/**
    * Calculates the rates and the final amount of gold for 1, 2, 5 and 10 years, including compounded interest.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class $CLASS.
public class rates {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner ratescanner = new Scanner(System.in);

// Ask for values.
        System.out.println("Enter current gold: ");
        float havegot = ratescanner.nextFloat();

        System.out.println("Enter yearly rates: ");
        float yrates = ratescanner.nextFloat();

 // Define variable values.
        float xtra01 = (havegot / 100 / yrates);
        float xtra02 = ((havegot + xtra01) / 100 / yrates * 2);
        float xtra05 = ((havegot + xtra02) / 100 / yrates * 5);
        float xtra10 = ((havegot + xtra05) / 100 / yrates * 10);
       
// Declare the math. Do it. Print it.
        
        System.out.println("Your extra gold will be...");
        System.out.println("1 year: " +  xtra01 + ".");
        System.out.println("2 years: " +  xtra02 + ".");
        System.out.println("5 years: " +  xtra05 + ".");
        System.out.println("10 years: " +  xtra10 + ".\n");

// Main function being closed.
    }

// Declaration being closed.
}
