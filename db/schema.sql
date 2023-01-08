DROP DATABASE IF EXISTS services_db;
CREATE DATABASE services_db;

USE services_db;

CREATE TABLE services (
    order_id INT NOT NULL,
    service_type VARCHAR(70)
);

CREATE TABLE products (
    order_id INT NOT NULL,
    product_type VARCHAR(70),
    quantity INT
);

CREATE TABLE orders (
    id INT NOT NULL,
    users_id INT NOT NULL,
    created_at VARCHAR(70) NOT NULL
);

CREATE TABLE user (
    id INT NOT NULL auto_increment,
    name VARCHAR(70) NOT NULL,
    email VARCHAR(70),
    password VARCHAR(70)
    PRIMARY KEY(id)
);

CREATE TABLE order_summary (
id INT NOT NULL,
name VARCHAR(70) NOT NULL,
price INT NOT NULL
);
