import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Card} from '../class/Card';
import {DeleteAcard } from '../services/delete.service';
@Component({
    selector: 'app-oneCard',
    templateUrl: '../views/oneCard.component.html',
    styleUrls: ['../views/styles/oneCard.component.css'],
    providers: [DeleteAcard]
})
export class OneCardComponent{
    constructor( public deletecard: DeleteAcard ) {
        
    }
    @Input() public lcard:Card;

    @Output() public delete: EventEmitter<number> = new EventEmitter();

    remove( id: number) {

        console.log(id);
        this.deletecard.deleteCard(id);
        this.delete.emit( id );
        
    }

}