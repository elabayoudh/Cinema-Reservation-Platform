import { Reservation } from './reservation.js';

const idRES = 123; // Replace with the actual value
const seance = 'Some séance'; // Replace with the actual value
const nom = 'John Doe'; // Replace with the actual value
const prenom = 'Jane'; // Replace with the actual value
const numTel = '1234567890'; // Replace with the actual value
const place = 'A1'; // Replace with the actual value

const reservation = new Reservation(idRES, seance, nom, prenom, numTel, place);

console.log(reservation.getSeance());
console.log(reservation.getNom());
console.log(reservation.getIdRES());
console.log(reservation.getPrenom());
console.log(reservation.getNumTel());
console.log(reservation.getPlace());





