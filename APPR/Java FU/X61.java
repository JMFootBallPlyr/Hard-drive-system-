/**
* $DESCR
* @version      -9.000
* @author       Eunjae
*/

// Utils import

// Class declaration start
public class X61 {
    float radius;
    float pi = 3.14f;

//  area(), circ() start
    public float area() {
        float rarea;
        rarea = pi*(radius*radius);
        return rarea;
    }
    public float circ() {
        float rcirc;
        rcirc = 2*pi*radius;
        return rcirc;
    }
// area(), circ() end

// Constructor start
    public X61(float r) {
        radius = r;
    }
// Constructor end


// main() start
    public static void main(String[] args) {
        X61 circ1 = new X61(2);
        X61 circ2 = new X61(4);
        X61 circ3 = new X61(6);

//        System.out.println(circ1,circ2,circ3);
    }
// main() end

}
// Class declaration end
