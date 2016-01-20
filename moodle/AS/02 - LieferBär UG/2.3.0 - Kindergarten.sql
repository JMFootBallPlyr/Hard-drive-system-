CREATE TABLE T_Kindergarten(

Nr SMALLINT NOT NULL ,
Name VARCHAR( 30 ) NOT NULL ,
Geschl VARCHAR( 1 ) NOT NULL ,
GebDatum DATE,
Spende DECIMAL( 6, 2 ) NOT NULL ,
Betreuer VARCHAR( 30 ) NOT NULL
);

INSERT INTO T_Kindergarten
(Nr, Name, Geschl, GebDatum, Spende, Betreuer)
VALUES
(100, 'Hannelore', 'w', '2001-02-14', 11.00, 'Sabrina'),
(102, 'Jürgen', 'm', '2002-03-12', 5.50, 'Sabrina'),
(104, 'Hennes', 'm', '2002-04-22', 7.50, 'Marina'),
(120, 'Elke', 'w', '2001-10-11', 12.00, 'Schorsch'),
(144, 'Sonja', 'w', '2001-09-14', 18.00, 'Marina'),
(154, 'Verena', 'w', '2001-04-14', 5.50, 'Sabrina'),
(166, 'Michael', 'm', '2001-04-30', 12.00, 'Schorsch'),
(167, 'Jochen', 'm', '2002-03-04', 6.00, 'Sabrina'),
(169, 'Maja', 'w', '2001-07-31', 15.00, 'Schorsch');