package de.oszimt.fsz52.zeeb;

public class Trainer {
	// attr
	private String name;
	private char lizenzklasse;
	private int entgelt;

	public Trainer() {
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void setLizenzklasse(char lizenzklasse) {
		this.lizenzklasse = lizenzklasse;
	}

	public char getLizenzklasse() {
		return this.lizenzklasse;
	}

	public void setEntgelt(int entgelt) {
		this.entgelt = entgelt;
	}

	public int getEntgelt() {
		return this.entgelt;
	}
}
