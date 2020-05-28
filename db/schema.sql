USE c241uhxczjumz6gb;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);