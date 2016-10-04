/**
* $DESCR
* @version      -9.000
* @author       Eunjae
*/

// Utils import
import javax.swing.*;

// Class declaration start
public class HelloWorldSwing {

// main() start
    public static void main(String[] args) {
        JFrame fensterlein = new JFrame("HelloWorldSwing");
        fensterlein.setSize(800,500);
        JLabel worte = new JLabel("Hello,world!");
        worte.setFont(new Font("Tahoma",Font.ITALIC, 60));
        fensterlein.getContentPane().add(worte);
        fensterlein.setDefaultCloseOperation(
        JFrame.EXIT_ON_CLOSE);
        fensterlein.setVisible(true);
    }
// main() end

}
// Class declaration end
