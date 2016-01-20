CREATE DATABASE IF NOT EXISTS egamedarling;
USE egamedarling;

CREATE TABLE accounts (
    accountid VARCHAR(MAX),
    password VARCHAR(MAX),
    email VARCHAR(MAX),
    avatar VARCHAR(MAX),
    nickname VARCHAR(MAX),

    UNIQUE (accountid)
    
    PRIMARY KEY (accountid),
);

CREATE TABLE gamers (
    gamerid VARCHAR(MAX),
    name VARCHAR(MAX),
    surname VARCHAR(MAX),
    gender VARCHAR(MAX),
    residence VARCHAR(MAX),
    birthday DATE,
    occupation VARCHAR(MAX),
    PFaccountid VARCHAR(MAX),

    UNIQUE (gamerid)

    PRIMARY KEY (PFaccountid),
    CONSTRAINT PFaccountidgamer
    FOREIGN KEY (PFaccountid) REFERENCES accounts(accountid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE games (
    gameid VARCHAR(MAX),
    gamename VARCHAR(MAX),

    PRIMARY KEY (gameid)
);

CREATE TABLE genres (
    genreid VARCHAR(MAX),
    genrename VARCHAR(MAX),

    PRIMARY KEY (genreid)
);

CREATE TABLE hobbies (
    hobbyid VARCHAR(MAX),
    hobbyname VARCHAR(MAX),

    PRIMARY KEY (hobbyid)
);

CREATE TABLE statuses (
    statusid VARCHAR(MAX),
    content VARCHAR(MAX),
    created TIMESTAMP,

    PRIMARY KEY (statusid)
);

-- -- -- CORRELATING TABLES

CREATE TABLE accountsgamers (
    PFaccountid VARCHAR(MAX),
    PFgamerid VARCHAR(MAX),

    PRIMARY KEY (PFaccountid, PFgamerid),

    CONSTRAINT  accgamacc
    FOREIGN KEY (PFaccountid) accounts(accountid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION

    CONSTRAINT accgamgam
    FOREIGN KEY (PFgamerid) gamers(gamerid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE gamersgames (
    PFaccountid VARCHAR(MAX),
    PFgameid VARCHAR(MAX),

    PRIMARY KEY (PFaccountid, PFgameid),

    CONSTRAINT gamgamacc
    FOREIGN KEY (PFaccountid) REFERENCES accounts(accountid)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION

    CONSTRAINT PFgamgamgam
    FOREIGN KEY (PFgameid) REFERENCES games(gameid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE gamershobbies (
    PFgamerid VARCHAR(MAX),
    PFhobbyid VARCHAR(MAX),

    PRIMARY KEY (PFgamerid, PFhobbyid),

    CONSTRAINT gamhobgam
    FOREIGN KEY (PFgamerid) REFERENCES gamers(gamerid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION

    CONSTRAINT gamhobhob
    FOREIGN KEY (PFhobbyid) REFERENCES hobbies(hobbyid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE gamesgenres (
    PFgameid VARCHAR(MAX),
    PFgenreid VARCHAR(MAX),

    PRIMARY KEY (PFgameid, PFgenreid),

    CONSTRAINT gamgengam
    FOREIGN KEY (PFgameid) REFERENCES games(gameid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION

    CONSTRAINT gamgengen
    FOREIGN KEY (PFgenreid) REFERENCES genres(genreid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE accountsstatuses (
    PFaccountid VARCHAR(MAX),
    PFstatusid VARCHAR(MAX),

    PRIMARY KEY (PFaccountid, PFstatusid),

    CONSTRAINT accstaacc
    FOREIGN KEY (PFaccountid) REFERENCES accounts(accountid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION

    CONSTRAINT accstasta
    FOREIGN KEY (PFstatusid) REFERENCES statuses(statusid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

/*
CREATE TABLE statusestimestamps (
    Paccountid VARCHAR(MAX),
    created TIMESTAMP,

    PRIMARY KEY (Paccountid),
    CONSTRAINT $
    FOREIGN KEY () REFERENCES $()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
*/

/*
PRIMARY KEY (P_schueler_id),
CONSTRAINT F_Klassenlehrer
FOREIGN KEY (F_Klassenlehrer) REFERENCES T_Lehrer (P_Lehrer_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
*/
