public class Ausleihkarte {
	Buch kBuch;
	Person kPerson;
	
	public Ausleihkarte(Buch kBuch, Person kPerson){
		this.kBuch = kBuch;
		this.kPerson = kPerson;
	}
	public String toString(){
		return "_Buch_\n" + kBuch.toString() + "\n_Person_\n" + kPerson.toString() + "\n";
	}
}
