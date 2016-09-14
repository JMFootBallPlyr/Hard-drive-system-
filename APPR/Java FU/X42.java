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
    public static int fac(int n) {
        for (int c = 1; c <= n; c++) {
            int fact = n*c;
        }
        return fact;
    }
// fac() end

// main() start
    public static void main(String[] args) {
        System.out.println("Enter an integer to calculate it's factorial: ");
        Scanner in = new Scanner(System.in);
        
        int n;
        n = in.nextInt();
        in.close();

        int res;
        if (n < 0)
            System.out.println("Number should be non-negative.");
            else {
                res = fac(n);
                System.out.println("Factorial of "+n+" is = "+res);
        }

    }
// main() end

}
// Class declaration end
