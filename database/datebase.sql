CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE product(
    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    description VARCHAR(255),
    price number,
    imageUrl VARCHAR(200),
    crate_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE product;

