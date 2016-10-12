package de.oszimt.fos42.schleyer;

public class SpielerTest {

	public static void main(String[] args) {
		
		// Erzeuge Objekt
		Spieler meinSpieler = new Spieler();
		Spieler andererSpieler = new Spieler();
		
		/* Setze einige Testwerte */
		// Spieler meinSpieler
		meinSpieler.setName("Özdemir");
		meinSpieler.setTrikotNummer(11);
		meinSpieler.setBeitragBezahlt(true);
		
		// Spieler andererSpieler
		andererSpieler.setName("Markwart");
		andererSpieler.setTrikotNummer(7);
		andererSpieler.setBeitragBezahlt(false);		
		
		// Test-Ausgabe
		System.out.println("meinSpieler: " + meinSpieler.getName());
		System.out.format("  - Trikotnr: %d%n", meinSpieler.getTrikotNummer());
		System.out.format("  - Bezahlt:  %b%n", meinSpieler.getBeitragBezahlt());
		System.out.println();
		System.out.println("andererSpieler: " + andererSpieler.getName());
		System.out.format("  - Trikotnr: %d%n", andererSpieler.getTrikotNummer());
		System.out.format("  - Bezahlt:  %b%n", andererSpieler.getBeitragBezahlt());
		System.out.println();

	}

}
