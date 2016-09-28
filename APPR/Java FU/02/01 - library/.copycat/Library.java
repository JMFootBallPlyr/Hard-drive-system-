/**
* $DESCR
* @version      -9.000
* @author       Eunjae
*/

// Utils import

// Class declaration start
public class Library {
   Bookl bookl;
   Loanci loanci;

// Constructor start
    public Library() {
        bookl = new Bookl(100);
        loanci = new Loanci(100);
    }

    public Library(int i) {
        bookl = new Bookl(i);
        loanci = new Loanci(i);
    }
// Constructor end

// Methods start
    public void sim() {
        // Enable input.
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        // Cancel the program.
        boolean cancellation = false;

        while (!cancellation) {
            System.out.println("What do you want to do?");
            System.out.println("0 - Cancel\n1 - Add new book\n2 - Remove book\n3 - List books\n4 - Loan book\n5 - Return book\n6 - Show loancard");
            int sel = 0;
            try {
                sel = Integer.parseInt(in.readLine());
            }
            catch (Exception e) {
                System.out.println("An error occured.\nPlease start over.");
            }

            // Execute given command.
            switch (sel) {
                // Cancel
                case 0:
                    cancellation = true;
                    break;

                // Add book
                case 1:
                    bookAdd();
                    break;

                // Remove book
                case 2:
                    bookRem();
                    break;

                // List books
                case 3:
                    bookl.outp();
				    // System.out.println("Inventory # | Author | Title"); System.out.println(blist.outp());
                    break;
                case 4:
                    bookLoan();
                    break;
                case 5:
                    bookRet();
                    break;
                case 6:
                    loanci.outp();
                    break;
            }
        }
    }

    public void bookAdd() {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        String title;
        String author;
        System.out.println("Enter title: ");
        try {
            title = in.readLine();
        }
        catch (Exception e) {
            System.out.println("An error occured.\nPlease start over.");
        }

		System.out.println("Enter author: ");
		try {
            author = in.readLine();
        }
		catch (Exception e) {
            System.out.println("An error occured.\nPlease start over.");
        }

		Book b1 = new Buch(title, author);
		blist.ins(b1);
		System.out.println("Book added.");
    }

    public void bookRem() {
        System.out.println("Which book should be removed?");
    }
// Methods end

// Functions start
// Functions end

// main() start
    public static void main(String[] args) {
        Library lib = new Library(10);
        lib.sim();
    }
// main() end

}
// Class declaration end
