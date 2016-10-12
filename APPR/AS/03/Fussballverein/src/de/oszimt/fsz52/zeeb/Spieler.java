package de.oszimt.fsz52.zeeb;

public class Spieler {
	// attr
	private String name;
	private short trikotnum;
	private boolean hatbezahlt;

	public Spieler() {
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void setTrikotNum(short trikotnum) {
		this.trikotnum = trikotnum;
	}

	public short getTrikotNum() {
		return this.trikotnum;
	}

	public void setHatBezahlt(boolean hatbezahlt) {
		this.hatbezahlt = hatbezahlt;
	}

	public boolean getHatBezahlt() {
		return this.hatbezahlt;
	}
}
