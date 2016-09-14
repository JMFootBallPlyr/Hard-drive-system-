// Importation of the java utility "Scanner".
import java.util.Scanner;

// Declaration of the public class Area.
public class casino {

// Main function being called up.
    public static void main(String[] args) {
        int chfiv = 0;
        int chten = 0;
        int chfif = 0;
        int chtwe = 0;
        int chfit = 0;
        int chhun = 0;
        int chgiven = 0;
        int goldout = 0;


// Function "Scanner" being created.
        Scanner scanthispls = new Scanner(System.in);

// Ask for values.
        System.out.println("Please enter the amount of 5 gold chips, Sir: ");
        chfiv = scanthispls.nextInt();

        System.out.println("Please enter the amount of 10 gold chips, Sir: ");
        chten = scanthispls.nextInt();
        
        System.out.println("Please enter the amount of 15 gold chips, Sir: ");
        chfif = scanthispls.nextInt();

        System.out.println("Please enter the amount of 20 gold chips, Sir: ");
        chtwe = scanthispls.nextInt();

        System.out.println("Please enter the amount of 50 gold chips, Sir: ");
        chfit = scanthispls.nextInt();

        System.out.println("Please enter the amount of 100 gold chips, Sir: ");
        chhun = scanthispls.nextInt();

// Declare the math. Do it. Print it.
        chgiven = ((chfiv * 5 ) + (chten * 10) + (chfif * 15) + (chtwe * 20) + (chfit * 50) + (chhun * 100));
        goldout = chgiven;
        System.out.println("The gold returned is " + goldout + ", Sir.");

// Main function being closed.
    }

// Declaration being closed.
}
