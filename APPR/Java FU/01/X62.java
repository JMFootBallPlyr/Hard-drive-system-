/**
* $DESCR
* @version      -9.000
* @author       Eunjae
*/

// Utils import

// Class declaration start
public class X62 {
    float radius;
    float pi = 3.14f;

// Constructor start
    public X62(float r) {
        radius = r;
    }
// Constructor end

//  area(), circ() start
    public float area() {
        return (pi*(radius*radius));
    }
    public float circ() {
        return (2*pi*radius);
    }
// area(), circ() end

// main() start
    public static void main(String[] args) {
        X62[] anArray = new X62[5];
        X62[0] = circ1;
        X62[2] = circ2;
        X62[4] = circ3;

        for (int i = 0; i < anArray.length; i++) {
            if (anArray[i] != null) {
                System.out.println(anArray[i]);
            }
        }

        X62 circ1 = new X62(2);
        X62 circ2 = new X62(4);
        X62 circ3 = new X62(6);

        float area1 = circ1.area();
        float area2 = circ2.area();
        float area3 = circ3.area();
        System.out.println(area1+", "+area2+", "+area3);
//        System.out.println(circ1,circ2,circ3);
    }
// main() end

}
// Class declaration end
