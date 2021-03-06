CREATE TABLE Patients(
  numero_patient INT AUTO_INCREMENT NOT NULL,
  nom VARCHAR(30) NOT NULL,
  prenom VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL,
  age INT NOT NULL,
  PRIMARY KEY(numero_patient)
);

CREATE TABLE Resultats(
  id_sauvegarde INT AUTO_INCREMENT NOT NULL,
  nombre_activite INT NOT NULL, 
  numero_patient INT NOT NULL,
  resultat_image INT NOT NULL,
  nombre_image INT NOT NULL,
  feedback VARCHAR(1500) NOT NULL,
  date_activite VARCHAR(75) NOT NULL,
  id_activites INT NOT NULL,
  PRIMARY KEY(id_sauvegarde),
  FOREIGN KEY(numero_patient)
    REFERENCES Patients(numero_patient),
  FOREIGN KEY(id_activites)
    REFERENCES DescriptionActivites(activite_id)
    ON UPDATE CASCADE ON DELETE RESTRICT
);
