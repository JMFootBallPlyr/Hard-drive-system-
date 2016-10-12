package de.oszimt.fos42.schleyer;

public class TrainerTest {

	public static void main(String[] args) {

		// Erzeuge Objekt
		Trainer meinTrainer = new Trainer();
		Trainer andererTrainer = new Trainer();

		/* Setze einige Testwerte */
		// Spieler meinSpieler
		meinTrainer.setName("Leuschner");
		meinTrainer.setLizenzklasse('A');
		meinTrainer.setAufwandsentschaedigung(125.50);

		// Spieler andererSpieler
		andererTrainer.setName("Wolff");
		andererTrainer.setLizenzklasse('C');
		andererTrainer.setAufwandsentschaedigung(335.90);

		// Test-Ausgabe
		System.out.println("meinTrainer: " +              meinTrainer.getName());
		System.out.format("  - Lizenzklasse: %c%n",       meinTrainer.getLizenzklasse());
		System.out.format("  - Entschädigung: %04.2f€%n", meinTrainer.getAufwandsentschaedigung());
		System.out.println();
		System.out.println("andererTrainer: " +           andererTrainer.getName());
		System.out.format("  - Lizenzklasse: %c%n",       andererTrainer.getLizenzklasse());
		System.out.format("  - Entschädigung: %04.2f€%n", andererTrainer.getAufwandsentschaedigung());
		System.out.println();

	}
}
