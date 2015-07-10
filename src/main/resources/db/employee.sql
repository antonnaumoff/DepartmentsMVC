CREATE TABLE IF NOT EXISTS `Employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_dep` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `second_name` varchar(45) NOT NULL,
  `salary` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Employee_1_idx` (`id_dep`),
  CONSTRAINT `fk_Employee_1` FOREIGN KEY (`id_dep`) REFERENCES `Department` (`department_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=180 DEFAULT CHARSET=latin1;

INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('48', '100', 'Tester', 'Igor', 'Igorev', '1500', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('72', '99', 'Developer', 'Kolyan', 'Nashinskiy', '1000', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('73', '100', 'Developer', 'Kolyan', 'Nashinskiy', '1000', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('77', '101', 'Developer', 'Serega', 'Guriev', '1500', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('81', '100', 'Senior', 'Igor', 'Zotov', '1500', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('82', '101', 'Super Puper', 'Serega', 'Vasin', '2000', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('88', '99', 'Developer', 'Serega', 'Vasiliev', '1500', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('89', '109', 'Worker', 'Vasya', 'Petin', '1500', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('104', '99', 'Developer', 'Serega', 'Guriev', '1500', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('111', '109', 'Developer', 'Sergey', 'Vasiliev', '15000', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('153', '109', 'Lead', 'Arkadiy', 'Shtier', '50000', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('162', '119', 'Lead', 'Vitaliy', 'Nikolaev', '2000', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('163', '119', 'Developer', 'Antoha', 'Slavuta', '5000', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('178', '100', 's', 'S<fd', 's', '150', '2015-01-01');
INSERT INTO Employee (`id`, `id_dep`, `title`, `first_name`, `second_name`, `salary`, `date`) VALUES ('179', '119', 'wedwed', 'ewd', 'Dewd', '150', '2015-01-01');