CREATE SCHEMA IF NOT EXISTS `security-departments` ;
CREATE TABLE IF NOT EXISTS `Department` (
  `department_id` INT(11)     NOT NULL AUTO_INCREMENT,
  `title`         VARCHAR(45) NOT NULL,
  PRIMARY KEY (`department_id`)

)
  ENGINE = InnoDB
  AUTO_INCREMENT = 120
  DEFAULT CHARSET = latin1;

INSERT INTO Department (department_id, title)
VALUES ('99', 'Main');
INSERT INTO Department (department_id, title)
VALUES ('100', 'Second');
INSERT INTO Department (department_id, title)
VALUES ('101', 'Development');
INSERT INTO Department (department_id, title)
VALUES ('109', 'Testers');
INSERT INTO Department (department_id, title)
VALUES ('119', 'Dep');





