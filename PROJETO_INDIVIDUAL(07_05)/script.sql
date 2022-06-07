
CREATE DATABASE Site_VanGogh;

USE Site_VanGogh;

create table quadro (
	idQuadro INT PRIMARY KEY AUTO_INCREMENT,
    nomeQuadro VARCHAR (50),
	ano DATE
);

INSERT INTO quadro VALUES 
	(NULL, 'Noite Estrelada', '1889-09-25'),
    (NULL, 'Auto-Retrato', '1888-11-09'),
    (NULL, 'Vinha Encarnada', '188-02-22');

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkQuadro INT,
    FOREIGN KEY (fkQuadro) REFERENCES quadro (idQuadro)
);

SELECT * FROM usuario;

INSERT INTO usuario VALUES
	(NULL, 'vitin', 'vitin@gmail.com', '0', 1);
    
    

CREATE TABLE comentario (
	idComentario INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO comentario VALUES
	(NULL, 'Girassóis', 'Amo o quadro Girassóis, o amarelo me remete a alegria', '2');
    
SELECT * FROM comentario;

