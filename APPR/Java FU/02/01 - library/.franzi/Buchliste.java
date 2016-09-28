public class Buchliste {
	public Buch[] dieListe;
	int neuesBuch = 0;
	
	public void einfuegen(Buch b){
		dieListe[neuesBuch] = b;
		neuesBuch++;
	}
	//Suche: input invnummer; output: Arrayposi vom Objekt
	public int suche(int n){
		int ausgabe = -1;
		for (int i = 0; i < dieListe.length; i++){
			if (dieListe[i] != null){
				if (n == dieListe[i].invnummer){
					ausgabe = i;
				}
			}
		}
		return ausgabe;
	}
	//Entferne Buch
	public void entfernen(int n){
		int posArray;
		posArray = suche(n);
		if (posArray != -1){
			dieListe[posArray] = null;
		}
	}
	//alle Buecher ausgeben
	public String ausgabe(){
		String ausgabe = "";
		for(int i=0; i < dieListe.length; i++){
			if (dieListe[i] != null) {
				ausgabe += dieListe[i].toString() + "\n";
			}
		}
		return ausgabe;
	}
	//Konstruktor
	public Buchliste(int i){
		dieListe = new Buch[i];
	}
	/*
	public static void main(String[] args){
		//neue Liste erstellen
		Buchliste listeEins = new Buchliste(11);
		//Buecher erstellen und in Liste einfuegen
		Buch BuchNoOne = new Buch("Winter kalt", "Hannelore Power");
		listeEins.einfuegen(BuchNoOne);
		Buch BuchNoTwo = new Buch("Bilderbuch", "Peter Peterson");
		listeEins.einfuegen(BuchNoTwo);
		Buch BuchNoThree = new Buch("Kranker Shity", "Mueller Guenther");
		listeEins.einfuegen(BuchNoThree);
		Buch BuchNoFour = new Buch("Sommer warm", "Mueller Guenther");
		listeEins.einfuegen(BuchNoFour);
				
		//Entfernen
		listeEins.entfernen(2);
		
		//Suche
		int ivnPosArray = listeEins.suche(6);
		if (ivnPosArray == -1) {
			System.out.println("kein Buch gefunden");
		}
		else{
			System.out.println("Position im Array: " + ivnPosArray);
		}
		
		
		//Ausgabe
		System.out.println("");
		listeEins.ausgabe();
		
	}*/
}
