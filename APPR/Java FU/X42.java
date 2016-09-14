/**
* $DESCR
* @version      -9.000
* @author       Eunjae
*/

// Utils import
import java.util.Scanner;

// Class declaration start
public class X42 {

// fac() start
    public static int fac(int fact, int c, int x) {
        int n = 1;

        for (c = 1; c <= n; c++) {
            fact = x*c;
        }
        return fact;
    }
// fac() end

// main() start
    public static void main(String[] args) {
        int c = 1;
        int x, res;
        int n = 1;
 
        System.out.println("Enter an integer to calculate it's factorial: ");
        Scanner in = new Scanner(System.in);
        
        x = in.nextInt();
        in.close();
        
        if (x < 0)
            System.out.println("Number should be non-negative.");
            else {
                res = fac(x);
                System.out.println("Factorial of "+x+" is = "+res);
        }

    }
// main() end

}
// Class declaration end
