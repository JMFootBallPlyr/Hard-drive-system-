import java.io.*;
public class Bibliothek {
	Buchliste bliste;
	Ausleihkartei kartei;
	
	public Bibliothek(){
		bliste = new Buchliste(100);
		kartei = new Ausleihkartei(100);
	}
	public Bibliothek(int groesse){
		bliste = new Buchliste(groesse);
		kartei = new Ausleihkartei(groesse);
	}
	public void simulation(){
		//Eingabe ermöglichen
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		
		//Abbruchkriterium des Programms
		boolean beenden = false;
		
		while(!beenden){
			//Komando abfragen und einlesen
			System.out.println("Welche Funktion soll aufgerufen werden?");
			System.out.println("0, Beenden");
			System.out.println("1, Neues Buch in der Bibliothek aufnehmen");
			System.out.println("2, Buch aus der Bibliothek entfernen");
			System.out.println("3, Ausgabe vorhandener Bücher");
			System.out.println("4, Buch ausleihen");
			System.out.println("5, Buch zurückgeben");
			System.out.println("6, Kartei Anzeigen");
			
			int auswahl = 0;
			try{
				auswahl = Integer.parseInt(in.readLine());
				
			}catch(Exception e){
				System.out.println("Ein Fehler ist während der Simulation aufgereten. \n Bitte neu starten");
			}
				//Komando ausführen
				switch(auswahl){
				case 0: beenden = true;
						break;
				case 1: buchEintragen();
						break;
				case 2: buchEntfernen();
						break;
				case 3: System.out.println("Inventarnummer | Titel | Autor"); System.out.println(bliste.ausgabe());
						break;
				case 4: buchAusleihen();
						break;
				case 5: buchZurueck();
						break;
				case 6: kartei.ausgabe();
						break;
				}
			}
		}
	public void buchEintragen(){
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		String titel = "";
		String autor = "";
		System.out.println("Titel eingeben:");
		try{ titel = in.readLine();}
		catch(Exception e){ System.out.println("Ein Fehler ist während der Simulation aufgereten. \n Bitte neu starten");}

		System.out.println("Autor eingeben:");
		try{ autor = in.readLine();}
		catch(Exception e){ System.out.println("Ein Fehler ist während der Simulation aufgereten. \n Bitte neu starten");}

		Buch b1 = new Buch(titel, autor);
		bliste.einfuegen(b1);
		System.out.println("Buch eingetragen!\n");
	}
	public void buchEntfernen(){
		int invnummerBuch = 0;
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Welches Buch möchten Sie entfernen. Geben Sie dazu die Invnummer ein.");
		System.out.println("Inventarnummer | Titel | Autor");
		System.out.println(bliste.ausgabe());
		try{ invnummerBuch = Integer.parseInt(in.readLine());}
		catch(Exception e){ System.out.println("Ein Fehler ist während der Simulation aufgereten. \n Bitte neu starten");}
		bliste.entfernen(invnummerBuch);
		System.out.println("Das Buch " + invnummerBuch + " wurde entfernt!");
	}
	public void buchAusleihen(){
		int i = 0;
		String name = "";
		String vorname = "";
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Welches Buch soll ausgeliehen werden. Inventarnummer eingeben:");
		try{ i = Integer.parseInt(in.readLine());}
		catch(Exception e){ System.out.println("Ein Fehler ist während der Simulation aufgereten. \n Bitte neu starten");}
		
		if (kartei.suche(i) != -1) {
			System.out.println("Das Buch ist bereits ausgeliehen!\n");
		}
		else{
			if (bliste.suche(i) == -1) {
				System.out.println("Das Buch ist nicht in der Buchliste!\n");
			}
			else{
				System.out.println("Bitte geben Sie Vor- und Nachname der Person an, die das Buch ausleiht!");
				System.out.println("Vorname");
				try{ vorname = in.readLine();}
				catch(Exception e){ System.out.println("Ein Fehler ist während der Simulation aufgereten. \n Bitte neu starten");}
				System.out.println("Nachname");
				try{ name = in.readLine();}
				catch(Exception e){ System.out.println("Ein Fehler ist während der Simulation aufgereten. \n Bitte neu starten");}
				Person p1 = new Person(name, vorname);
				Buch b1 = bliste.dieListe[bliste.suche(i)];
				Ausleihkarte a1 = new Ausleihkarte(b1, p1);
				kartei.einfuegen(a1);
				System.out.println(vorname + " " + name + " hat das Buch mit der folfenden Inv.Nr. ausgeliehen: " + i + "\n");
			}
		}
	}
	public void buchZurueck(){
		int i = 0;
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Welches Buch wird zurückgegeben. Inventarnummer eingeben:");
		try{ i = Integer.parseInt(in.readLine());}
		catch(Exception e){ System.out.println("Ein Fehler ist während der Simulation aufgereten. \n Bitte neu starten");}
		if (kartei.suche(i) == -1) {
			System.out.println("Das Buch ist nicht ausgeliehen!\n");
		}
		else{
			kartei.entfernen(i);
			System.out.println("Das Buch mit der folgenden Inv.Nr wurde zurückgegeben: " + i + "/n");
		}
	}
	public static void main(String[] args){
		Bibliothek bib = new Bibliothek(10);
		bib.simulation();
	}
}
