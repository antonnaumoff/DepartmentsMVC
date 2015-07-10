CREATE  TABLE `security-departments`.users (
  username VARCHAR(45) NOT NULL ,
  password VARCHAR(45) NOT NULL ,
  enabled TINYINT NOT NULL DEFAULT 1 ,
  PRIMARY KEY (username));

INSERT INTO `security-departments`.users(username,password,enabled)
VALUES ('admin','admin', TRUE);
INSERT INTO `security-departments`.users(username,password,enabled)
VALUES ('user','user', TRUE);
INSERT INTO `security-departments`.users(username,password,enabled)
VALUES ('user1','user1', TRUE);