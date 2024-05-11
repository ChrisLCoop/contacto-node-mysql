CREATE TABLE contacto(
    id INT(5) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR (15) NOT NULL,
    email VARCHAR(30) NOT NULL,
    hogar VARCHAR(15) DEFAULT 'No Tiene',
    direccion VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);