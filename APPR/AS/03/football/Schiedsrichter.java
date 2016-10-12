package de.oszimt.fsz52.zeeb;

public class Schiedsrichter {
	// attr
	private String name;
	private int anzahlSpiele;
	private String telefonNummer;

	public Schiedsrichter() {
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void setAnzahlSpiele(int anzahlSpiele) {
		this.anzahlSpiele = anzahlSpiele;
	}

	public int getAnzahlSpiele() {
		return this.anzahlSpiele;
	}

	public void setTelefonNummer(String telefonNummer) {
		this.telefonNummer = telefonNummer;
	}

	public String getTelefonNummer() {
		return this.telefonNummer;
	}
}
