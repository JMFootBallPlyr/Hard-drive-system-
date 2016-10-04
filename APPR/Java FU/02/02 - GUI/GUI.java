/**
* $DESCR
* @version      -9.000
* @author       Eunjae
*/

// Utils import
import java.awt.*;
import javax.swing.*;
import java.net.URL;

// Class declaration start
public class GUI {

// main() start
    public static void main(String[] args) {
        JFrame windough = new JFrame("TryText");
        windough.setSize(500,500);
//        textField = new JTextField();
//        JTextField words = new JtextField("Texty text!");
        JLabel words = new JLabel("Texty text!");
        words.setFont(new Font("GohuFont",Font.ITALIC, 60));
        windough.getContentPane().add(words);
        windough.setDefaultCloseOperation(
        JFrame.EXIT_ON_CLOSE);
        windough.setVisible(true);
    }
// main() end

}
// Class declaration end
