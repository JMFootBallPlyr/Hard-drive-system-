public class Person {
	static int personIdZaehler = 0;
	int personId;
	String name;
	String vorname;
	
	public Person(String name, String vorname){
		this.personId = personIdZaehler;
		this.name = name;
		this.vorname = vorname;
		personIdZaehler++;
	}
	public String toString(){
		return "ID: " + personId + " Name: " + name + " Vorname: " + vorname;
	}
}
