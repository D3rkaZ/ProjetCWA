CREATE TABLE IF NOT EXISTS Utilisateurs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom VARCHAR(200) NOT NULL,
    prenom VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    mdp VARCHAR(200) NOT NULL,
    date_naissacance DATE NOT NULL,
    privilege VARCHAR(200) NOT NULL
);

INSERT OR REPLACE INTO Utilisateurs VALUES
    (1 , 'VanTai' , 'NGUYEN' , 'vantaifr@gmail.com' , 'vantai123' , date(2000/02/07),'admin');