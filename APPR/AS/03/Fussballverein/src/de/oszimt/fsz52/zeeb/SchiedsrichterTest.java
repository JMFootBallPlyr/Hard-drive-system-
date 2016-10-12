package de.oszimt.fsz52.zeeb;

public class SchiedsrichterTest {
	public static void main(String[] args) {
		
		// Erzeuge Objekt
		Schiedsrichter meinSchiedsrichter = new Schiedsrichter();
		Schiedsrichter andererSchiedsrichter = new Schiedsrichter();
		
		/* Setze einige Testwerte */
		// Spieler meinSpieler
		meinSchiedsrichter.setName("Klar");
		meinSchiedsrichter.setAnzahlSpiele(34);
		meinSchiedsrichter.setTelefonNummer("+49 30 314 24864");
		
		// Spieler andererSpieler
		andererSchiedsrichter.setName("Fatemi");
		andererSchiedsrichter.setAnzahlSpiele(14);
		andererSchiedsrichter.setTelefonNummer("+49 30 314 26478");
		
		// Test-Ausgabe
		System.out.println("meinSchiedsrichter: " + meinSchiedsrichter.getName());
		System.out.format("  - Anzahl Spiele: %d%n", meinSchiedsrichter.getAnzahlSpiele());
		System.out.format("  - Telefon: %s%n", meinSchiedsrichter.getTelefonNummer());
		System.out.println();
		System.out.println("andererSchiedsrichter: " + andererSchiedsrichter.getName());
		System.out.format("  - Anzahl Spiele: %d%n", andererSchiedsrichter.getAnzahlSpiele());
		System.out.format("  - Telefon: %s%n", andererSchiedsrichter.getTelefonNummer());
		System.out.println();

	}
}
