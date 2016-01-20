--
-- Daten fuer Tabelle `t_kunden`
--

INSERT INTO `t_kunden` (`Kunden_Nr`, `Status`, `Vorname`, `Nachname`, `Strasse`, `PLZ`, `Ort`, `letzteBestellung`, `letzteWerbeaktion`, `Zahlungsart`) VALUES
(100, 'S', 'Hans', 'Voss', 'Kuhdamm 12', 23863, 'Nienwohld', NULL, '1995-12-01', 'N'),
(101, 'S', 'Peter', 'Stein', 'Moordamm 34', 23863, 'Kayhude', '1996-04-28', '1995-12-01', 'B'),
(102, 'W', 'Uwe', 'Berger', 'Allee 12 b', 25813, 'Husum', NULL, '1995-12-01', 'N'),
(103, 'S', 'Nis', 'Randers', 'Am Seeufer 12', 23845, 'Oering', '1996-05-15', '1997-01-14', 'B'),
(104, 'G', 'Ute', 'Andresen', 'Am Abhang', 24558, 'Ulzburg', NULL, '0000-00-00', 'N'),
(105, 'S', 'Werner', 'Stuff', 'Tarper Weg', 24853, 'Eggebek', '1996-05-12', '0000-00-00', 'R'),
(106, 'W', 'Hannes', 'Staack', 'An der Alster 1', 23863, 'Kayhude', NULL, '1995-12-01', 'N');

--
-- Daten fuer Tabelle `t_mwstsaetze`
--

INSERT INTO `t_mwstSaetze` (`Mwst_Nr`, `Prozent`, `Beschreibung`) VALUES
(0, 0, 'ohne'),
(1, 8, 'halbe'),
(2, 16, 'Volle');

--
-- Daten fuer Tabelle `t_artikel`
--

INSERT INTO `t_artikel` (`Artikel_Nr`, `F_mwst_Nr`, `Bezeichnung`, `Listenpreis`, `Bestand`, `Mindestbestand`, `Verpackung`, `Lagerplatz`) VALUES
('G001', 2, 'Whisky', 38.50, 397, 50, '0,7 l', '7'),
('G002', 2, 'Portwein', 12.45, 473, 100, '0,5 l', '7'),
('G003', 2, 'Bier', 5.20, 1250, 250, '6-er Pack', '7'),
('K001', 2, 'Schuhe', 9.50, 120, 25, 'Karton', '2'),
('K002', 2, 'Hose', 112.80, 62, 25, NULL, '2'),
('K003', 2, 'Damenhut', 65.70, 12, 20, 'Karton', '2'),
('K004', 1, 'Sonnenbrille', 76.00, 50, 20, 'Karton', '2'),
('L001', 1, 'Ceylon Tee', 6.35, 356, 100, '125 g', '5'),
('L002', 1, 'China Tee', 8.35, 42, 50, '125 g', '5'),
('L003', 1, 'Naturreis', 1.78, 345, 0, '1 kg', '4'),
('L004', 2, 'Schokolade', 0.98, 2101, 1000, 'Tafel', '2'),
('L005', 2, 'Butterkekse', 1.72, 234, 250, '250 g', '2');


--
-- Daten fuer Tabelle `t_bestellungen`
--

INSERT INTO `t_bestellungen` (`Bestell_Nr`, `F_Kunden_Nr`, `Bestelldatum`, `Lieferdatum`) VALUES
(960151, 101, '1996-04-28', '1996-05-02'),
(960152, 103, '1996-04-30', '1996-05-02'),
(960153, 105, '1996-05-12', NULL),
(960154, 103, '1996-05-15', NULL);


--
-- Daten fuer Tabelle `girokonto`
--

INSERT INTO `t_girokonten` (`F_Kunden_Nr`, `Kontoinhaber`, `BLZ`, `Konto_Nr`) VALUES
('101', 'Dagmar Stein', '23410022', '12346789'),
('103', 'Tetsche Wind', '23410112', '20001234');



--
-- Daten fuer Tabelle `t_positionen`
--

INSERT INTO `t_positionen` (`F_Bestell_Nr`, `F_Artikel_Nr`, `Bestellmenge`, `Liefermenge`, `F_Mwst_Nr`, `Kaufpreis`) VALUES
(960151, 'G002', 4, 4, 2, 12.45),
(960151, 'G003', 3, 3, 2, 5.20),
(960151, 'K002', 3, 0, 2, 112.80),
(960151, 'K003', 1, 1, 2, 65.70),
(960151, 'L002', 10, 5, 1, 8.35),
(960152, 'K001', 10, 10, 2, 98.50),
(960152, 'K003', 2, 2, 2, 65.70),
(960152, 'K004', 12, 12, 1, 76.00 ),
(960153, 'G001', 2, NULL, NULL, NULL),
(960153, 'L002', 6, NULL, NULL, NULL),
(960153, 'L003', 25, NULL, NULL, NULL),
(960153, 'L004', 5, NULL, NULL, NULL),
(960154, 'G001', 4, NULL, NULL, NULL);


