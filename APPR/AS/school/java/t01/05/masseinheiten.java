/**
    * Fix the sourcecode according to the guidelines of the Java sourcecode.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class "maßeinheiten".
public class masseinheiten {

// Main function being called up.
    public static void main(String[] args) {

// Function "Scanner" being created.
        Scanner x = new Scanner(System.in);

// Define variable values.
    final float meile = 1.609344F;
    float Kilometer;

// Output/input.
    System.out.print("Enter the amount of kilometres: ");
    Kilometer = x.nextFloat();
    System.out.println("Amount of kilometres in miles = " + Kilometer / meile);


// Main function being closed.
    }

// Declaration being closed.
}

/**
    * Renamed maßeinheiten to masseinheiten.
    * Commented most important parts.
    * Switched language from German to English.
*/
