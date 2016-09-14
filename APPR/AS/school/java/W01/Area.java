// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class Area.
public class Area {

// Main function being called up.
    public static void main(String[] args) {
        int awidth   = 0;
        int aheight  = 0;
        int aArea    = 0;


// Function "Scanner" being created.
        Scanner myScanner = new Scanner(System.in);

// Ask for values.
        System.out.println("Breite: ");
        awidth = myScanner.nextInt();

        System.out.println("Höhe: ");
        aheight = myScanner.nextInt();
        
// Declare the math. Do it. Print it.
        aArea = awidth * aheight;
        System.out.println("Die Fläche beträgt: " + aArea);

// Main function being closed.
    }

// Declaration being closed.
}
