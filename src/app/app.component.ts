import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Master Dettaglio';
  item: any;
  isValid: boolean = false;
  isNotValid: boolean = false;
  corsi: Array<any> = [
    {
      id: 1,
      titolo: 'HTML5/CSS3',
      durata: 30,
      costo: 600,
      docente: 'Mario Rossi',
      attivo: true,
    },
    {
      id: 2,
      titolo: 'JAVASCRIPT',
      durata: 30,
      costo: 600,
      docente: 'Alfredo Bianchi',
      attivo: true,
    },
    {
      id: 3,
      titolo: 'ANGULAR',
      durata: 30,
      costo: 650,
      docente: 'Anna Maria Sprocatti',
      attivo: true,
    },
  ];

  //Metodo che mi permette di vedere il dettaglio del singolo corso
  viewCorso(course: any) {
    this.tornaDietro();
    this.item = course;
  }

  tornaDietro() {
    this.isValid = !this.isValid;
    this.isNotValid = !this.isNotValid;
  }

  deleteCorso(index: number) {
    //cancella item
    this.corsi.splice(index, 1);
    console.log(this.corsi.length);
    alert('Conferma il cancellamento');
    if (this.corsi.length == 0) {
      alert('Hai finito i corsi');
    }
  }
}
