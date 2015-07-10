CREATE TABLE user_roles (
  user_role_id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  ROLE VARCHAR(45) NOT NULL,
  PRIMARY KEY (user_role_id),
  UNIQUE KEY uni_username_role (ROLE,username),
  KEY fk_username_idx (username),
  CONSTRAINT fk_username FOREIGN KEY (username) REFERENCES users (username));


INSERT INTO user_roles (username, ROLE)
VALUES ('admin', 'ROLE_ADMIN');

INSERT INTO user_roles (username, ROLE)
VALUES ('user1', 'ROLE_USER');

INSERT INTO user_roles (username, ROLE)
VALUES ('user', 'ROLE_USER');