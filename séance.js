class Séance {
    constructor(date , heure , numSéance, titrefilm,Reservation_id){
     this.date=date;
     this.heure=heure;
     this.numSéance=numSéance;
     this.titrefilm=titrefilm;
     this.Reservation_id=Reservation_id;
    } 
 
    getnumSéance(){
     return this.numSéance ; 
    }
 
    gettitrefilm(){
     return this.titrefilm ; 
    }
    getdate(){
     return this.date ; 
    }
    getheure(){
     return this.heure ; 
    }
    getReservation_id(){
        return this.Reservation_id;
    }
 
 }