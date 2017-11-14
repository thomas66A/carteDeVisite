import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../class/Card';
import { CardsService } from '../services/cards.service';

@Component({
    selector: 'app-cards',
    templateUrl: '../views/cards.component.html',
    styleUrls: ['../views/styles/cards.component.css'],
    providers: [CardsService]
})
export class CardsComponent {
  public displayForm: boolean = false;
  public cards: Card[] = [];
  public selected_card: Card;
  public search: string = '';

  constructor( private cardsservice: CardsService) {
    this.getCards();
}
getCards() {
  this.cardsservice.getAllCards().then( (data) => {

      for ( const lcard of data.json() ){
          this.addCards(lcard.id, lcard.nom, lcard.prenom, lcard.telephone, lcard.adresse, lcard.lienImage, lcard.mail, lcard.bgColor, lcard.fontColor);
      }

  } );
}

addCards(id: number,  nom: string, prenom: string, telephone: string, adresse: string, lienImage: string, mail: string , bgColor: string, fontColor: string) {
  nom = nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase();
  prenom = prenom.charAt(0).toUpperCase() + prenom.substring(1).toLowerCase();
  
  const card: Card = new Card(id, nom, prenom, telephone, adresse, lienImage, mail, bgColor, fontColor );
  
  this.cards.push( card );
  console.log(this.cards);
}

delete( id: number){

    for( const key in this.cards ){

        let card: Card = this.cards[key];

        if( card.id === id ){
            this.cards.splice( parseInt(key), 1 );
            return;
        }

    }

}

}