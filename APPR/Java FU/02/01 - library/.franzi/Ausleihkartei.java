public class Ausleihkartei {
	public Ausleihkarte[] kArray;
	int neueKarte;
	public Ausleihkartei(int i){
		kArray = new Ausleihkarte[i];
		neueKarte = 0;
	}
	public void einfuegen(Ausleihkarte b){
		kArray[neueKarte] = b;
		neueKarte++;
	}
	public int suche(int n){
		int ausgabe = -1;
		for (int i = 0; i < kArray.length; i++){
			if (kArray[i] != null){
				if (n == kArray[i].kBuch.invnummer){
					ausgabe = i;
				}
			}
		}
		return ausgabe;
	}
	public void entfernen(int n){
		int posArray;
		posArray = suche(n);
		if (posArray != -1){
			kArray[posArray] = null;
		}
	}
	public void ausgabe(){
		String ausgabe = "";
		for(int i=0; i < kArray.length; i++){
			if (kArray[i] != null) {
				ausgabe += kArray[i].toString() + "\n";
			}
		}
		System.out.println(ausgabe);
	}
	/*
	public static void main(String[] args){
		Buch b1 = new Buch("Winter kalt", "Hannelore Power");
		Person p1 = new Person("Peter", "Maffay");
		Ausleihkarte a1 = new Ausleihkarte(b1, p1);
		Buch b2 = new Buch("Wintersee", "PowHann");
		Ausleihkarte a2 = new Ausleihkarte(b2, p1);
		
		Ausleihkartei aa1 = new Ausleihkartei(10);
		
		aa1.einfuegen(a1);
		aa1.einfuegen(a2);
		
		aa1.entfernen(1);
		
		aa1.ausgabe();
	}*/
}
