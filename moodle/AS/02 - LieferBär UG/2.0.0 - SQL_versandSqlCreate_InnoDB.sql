CREATE TABLE t_kunden (
     Kunden_Nr INT NOT NULL,
     Status VARCHAR(10),
     Vorname VARCHAR(20),
     Nachname VARCHAR(20),
     Strasse VARCHAR(30),
     PLZ INT,
     Ort VARCHAR(20),
     letzteBestellung DATETIME,
     letzteWerbeaktion DATETIME,
     Zahlungsart VARCHAR(15),
     CONSTRAINT PK_T_Kunden PRIMARY KEY (Kunden_Nr)
)
ENGINE=INNODB;


CREATE TABLE t_mwstSaetze (
     Mwst_Nr INT NOT NULL,
     Prozent TINYINT,
     Beschreibung VARCHAR(20),

     CONSTRAINT PK_T_MwstSaetze PRIMARY KEY (Mwst_Nr)
)
ENGINE=INNODB;


CREATE TABLE t_artikel (
     Artikel_Nr VARCHAR(10) NOT NULL,
     Lagerplatz VARCHAR(20),
     Listenpreis NUMERIC(6,2),
     Bezeichnung VARCHAR(30),
     Bestand SMALLINT,
     Mindestbestand SMALLINT,
     Verpackung VARCHAR(20),
     F_Mwst_Nr INT,

     CONSTRAINT PK_T_Artikel PRIMARY KEY (Artikel_Nr),
     CONSTRAINT FK_T_Artikel FOREIGN KEY (F_Mwst_Nr) REFERENCES t_mwstSaetze (Mwst_Nr)
)
ENGINE=INNODB;


CREATE TABLE t_bestellungen (
     Bestell_Nr INT NOT NULL,
     Lieferdatum DATETIME,
     Bestelldatum DATETIME,
     F_Kunden_Nr INT,

     CONSTRAINT PK_T_Bestellung PRIMARY KEY (Bestell_Nr),
     CONSTRAINT FK_T_Bestellung FOREIGN KEY (F_Kunden_Nr) REFERENCES t_kunden(Kunden_Nr)
)
ENGINE=INNODB;


CREATE TABLE t_girokonten (
    F_Kunden_Nr INT NOT NULL,
    Konto_Nr INT,
    BLZ INT,
    Kontoinhaber VARCHAR(40),

    CONSTRAINT PK_T_Girokonten PRIMARY KEY (F_Kunden_Nr),
    CONSTRAINT FK_T_Girokonten FOREIGN KEY (F_Kunden_Nr) REFERENCES t_kunden(Kunden_Nr)
)
ENGINE=INNODB;


CREATE TABLE t_positionen (
    F_Bestell_Nr INT NOT NULL,
    F_Artikel_Nr VARCHAR(10) NOT NULL,
    F_Mwst_Nr INT,
    Kaufpreis NUMERIC(6,2),
    Liefermenge SMALLINT,
    Bestellmenge SMALLINT,

    CONSTRAINT PK_T_Positionen PRIMARY KEY (F_Bestell_Nr, F_Artikel_Nr),
    CONSTRAINT FK_T_Positionen_1 FOREIGN KEY (F_Bestell_Nr) REFERENCES t_bestellungen(Bestell_Nr),
    CONSTRAINT FK_T_Positionen_2 FOREIGN KEY (F_Artikel_Nr) REFERENCES t_artikel(Artikel_Nr),
    CONSTRAINT FK_T_Positionen_3 FOREIGN KEY (F_Mwst_Nr) REFERENCES t_mwstSaetze(Mwst_Nr)
)
ENGINE=INNODB;


