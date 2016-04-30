CREATE DATABASE IF NOT EXISTS egamedarling;
USE egamedarling;

CREATE TABLE accounts (
    accountid VARCHAR(30),
    password VARCHAR(30),
    email VARCHAR(30),
    avatar BLOB,
    nickname VARCHAR(30),

    UNIQUE (accountid),
    
    PRIMARY KEY (accountid)
);

CREATE TABLE gamers (
    gamerid VARCHAR(30),
    name VARCHAR(30),
    surname VARCHAR(30),
    gender VARCHAR(30),
    residence VARCHAR(30),
    birthday DATE,
    occupation VARCHAR(30),
    PFaccountid VARCHAR(30),

    UNIQUE (gamerid),

    PRIMARY KEY (PFaccountid),
    CONSTRAINT PFaccountidgamer
    FOREIGN KEY (PFaccountid) REFERENCES accounts(accountid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE games (
    gameid VARCHAR(30),
    gamename VARCHAR(30),

    PRIMARY KEY (gameid)
);

CREATE TABLE genres (
    genreid VARCHAR(30),
    genrename VARCHAR(30),

    PRIMARY KEY (genreid)
);

CREATE TABLE hobbies (
    hobbyid VARCHAR(30),
    hobbyname VARCHAR(30),

    PRIMARY KEY (hobbyid)
);

CREATE TABLE statuses (
    statusid VARCHAR(30),
    content VARCHAR(30),
    created TIMESTAMP,

    PRIMARY KEY (statusid)
);

-- -- -- CORRELATING TABLES

CREATE TABLE accountsgamers (
    PFaccountid VARCHAR(30),
    PFgamerid VARCHAR(30),

    PRIMARY KEY (PFaccountid, PFgamerid),

    CONSTRAINT accgamacc
    FOREIGN KEY (PFaccountid) REFERENCES accounts(accountid)
    ON DELETE CASCADE,

    CONSTRAINT accgamgam
    FOREIGN KEY (PFgamerid) REFERENCES gamers(gamerid)
    ON DELETE CASCADE
);

CREATE TABLE gamersgames (
    PFaccountid VARCHAR(30),
    PFgameid VARCHAR(30),

    PRIMARY KEY (PFaccountid, PFgameid),

    CONSTRAINT gamgamacc
    FOREIGN KEY (PFaccountid) REFERENCES accounts(accountid)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,

    CONSTRAINT PFgamgamgam
    FOREIGN KEY (PFgameid) REFERENCES games(gameid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

    PFgamerid VARCHAR(30),
    PFhobbyid VARCHAR(30),

    PRIMARY KEY (PFgamerid, PFhobbyid),

    CONSTRAINT gamhobgam
    FOREIGN KEY (PFgamerid) REFERENCES gamers(gamerid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

    CONSTRAINT gamhobhob
    FOREIGN KEY (PFhobbyid) REFERENCES hobbies(hobbyid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE gamesgenres (
    PFgameid VARCHAR(30),
    PFgenreid VARCHAR(30),

    PRIMARY KEY (PFgameid, PFgenreid),

    CONSTRAINT gamgengam
    FOREIGN KEY (PFgameid) REFERENCES games(gameid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

    CONSTRAINT gamgengen
    FOREIGN KEY (PFgenreid) REFERENCES genres(genreid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

CREATE TABLE accountsstatuses (
    PFaccountid VARCHAR(30),
    PFstatusid VARCHAR(30),

    PRIMARY KEY (PFaccountid, PFstatusid),

    CONSTRAINT accstaacc
    FOREIGN KEY (PFaccountid) REFERENCES accounts(accountid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

    CONSTRAINT accstasta
    FOREIGN KEY (PFstatusid) REFERENCES statuses(statusid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);
