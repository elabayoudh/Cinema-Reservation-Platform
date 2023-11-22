export class Reservation {
  
  constructor(idRES, seance, nom, prenom, numTel, place) {
    this.idRES = idRES;
    this.seance = seance;
    this.nom = nom;
    this.prenom = prenom;
    this.numTel = numTel;
    this.place = place;
    
  }

  getSeance() {
    return this.seance;
  }

  getNom() {
    return this.nom;
  }

  getIdRES() {
    return this.idRES;
  }

  getPrenom() {
    return this.prenom;
  }

  getNumTel() {
    return this.numTel;
  }

  getPlace() {
    return this.place;
  }
}
