public class Buch {
	String titel;
	String autor;
	int invnummer;
	static int anzahlBuecher = 0;
	public String toString() {
		String ausgabe;
		ausgabe = invnummer + " | " + titel + " | " + autor;
		return ausgabe;
	}
	public Buch(String titel, String autor){
		this.titel = titel;
		this.autor = autor;
		anzahlBuecher++;
		invnummer = anzahlBuecher;
	}
	public static void main(String[] args){
		Buch blabla = new Buch("Sommer Sonne", "Hannelore");
		System.out.println(blabla.toString());
		
		Buch blabla2 = new Buch("Sommer Sonne Teil 2", "Hannelore Guenther");
		System.out.println(blabla2.toString());
	}
}
