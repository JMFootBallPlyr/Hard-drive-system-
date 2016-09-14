/**
    * $DESCR        Create a FILE or something.
    * @version      1.0
    * @author       Charlotte Zeeb -- FSZ 52
*/

import java.io.File;

// Declaration of the public class $CLASS.
public class items {

// Main function being called up.
    public static void main(String[] args) {

// Define variable values.
        String items = "data.txt";
        for(int i = 0; i < 100; i++) {
            File f = new File(i + items);
            try {
                f.createNewFile();
            }
            catch (Exception e){}
        }

// Main function being closed.
    }

// Declaration being closed.
}
