
USE ppktrbbnbwiylogq;

CREATE TABLE `burgers`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(30) NOT NULL,
  `devoured` boolean DEFAULT false,
  `customer_name` varchar(30),
  PRIMARY KEY(`id`)
);

INSERT INTO burgers(burger_name, devoured) VALUES('Hamburger', false);
INSERT INTO burgers(burger_name, devoured) VALUES('Cheeseburger', false);
INSERT INTO burgers(burger_name, devoured) VALUES('Double Hamburger', false);