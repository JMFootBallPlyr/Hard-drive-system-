/**
* $DESCR
* @version      -9.000
* @author       Eunjae
*/

// Utils import
import java.io.*;

// Class declaration start
public class Library {

// Constructor start
    public Library() {
    }
// Constructor end

// Methods start
    // Simulate the whole thing.
    public void sim() {
        // Enable input
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        // Cancel the program
        boolean cancelit = false;

        while (!cancelit) {
            System.out.println("What do you want to do?");
            System.out.println("0 - Cancel");
            System.out.println("1 - List all books and their status");
            System.out.println("2 - Add new book (list)");
            System.out.println("3 - Remove book (list)");
            System.out.println("4 - Loan book (library)");
            System.out.println("5 - Return book (library)");
            System.out.println("6 - Show person information (loancard)");

            int sel = 0;

            // Execute command from selection
            switch (sel) {
                // Cancel
                case 0:
                    cancelit = true;
                    break;
            }
        }
    }

    // Add a book to the library.
    public void bookAdd() {
    }

    // Remove a book from the library.
    public void bookRem() {
    }

    // List the current books (and their status?)
    public void bookList() {
    }

    // Search through list of books (title &&/|| author)
    public void bookSearch() {
    }
// Methods end

// Functions start
// Functions end

// main() start
    public static void main(String[] args) {
    }
// main() end

}
// Class declaration end
