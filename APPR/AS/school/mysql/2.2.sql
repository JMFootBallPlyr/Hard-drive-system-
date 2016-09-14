-- SELECT appropriate DB
USE shipping;

-- a
-- Search for articles with G00<1..3>.
SELECT
    F_Bestell_Nr,
    F_Artikel_Nr

FROM (
    t_positionen
)

WHERE (
    F_Artikel_Nr = 'G001'
    OR
    F_Artikel_Nr = 'G002'
    OR
    F_Artikel_Nr = 'G003'
)
;

-- b
-- Search for articles with G00<1..3> and the order item count is > 3.

SELECT
    F_Bestell_Nr,
    F_Artikel_Nr

FROM (
    t_positionen
)

WHERE (
    F_Artikel_Nr = 'G001'
    OR
    F_Artikel_Nr = 'G002'
    OR
    F_Artikel_Nr = 'G003'
    AND
    Bestellmenge > 3
)
;

-- c
-- Which articles containing article number G00<1..3> haven't been shipped? Print order amount.
SELECT
    Bestellmenge

FROM (
    t_positionen
)

WHERE 
    F_Artikel_Nr IN (
        'G001',
        'G002',
        'G003'
    )
    AND
    Liefermenge IS NULL
;

-- d
-- Which positions had items ship whose article number wasn't G00<1..3>?
SELECT
    *

FROM (
    t_positionen
)

WHERE
    F_Artikel_Nr NOT IN (
        'G001',
        'G002',
        'G003'
    )
    AND
    Liefermenge IS NOT NULL
    AND
    Liefermenge != 0
;

-- e
-- Print orders from d whose items have *all* been shipped.
SELECT
    *

FROM (
    t_positionen
)

WHERE
    F_Artikel_Nr NOT IN (
        'G001',
        'G002',
        'G003'
    )
    AND
    Liefermenge IS NOT NULL
    AND
    Liefermenge != 0
    AND
    Liefermenge = Bestellmenge
;

-- f
-- Print non-patron (non-status 's') that aren't FROM 'Husum'.
SELECT
    *

FROM (
    t_kunden
)

WHERE
    Status != 's'
    AND
    Ort != 'Husum'
;

-- g
-- Print orders FROM 'Mai 1996'.
SELECT
    *

FROM (
    t_bestellungen
)

WHERE
    Bestelldatum LIKE '%1996-05%'
;

-- h
-- Whose articles' names consist of 'keks'?
SELECT
    *

FROM (
    t_artikel
)

WHERE
    Bezeichnung LIKE '%keks%'
;

-- i
-- Print items whose 'Listenpreis' is = 10 <= 100 EUR. Sort by ASC 'Listenpreis'.
SELECT
    *

FROM (
    t_artikel
)

WHERE
    Listenpreis BETWEEN 10 AND 100
;
