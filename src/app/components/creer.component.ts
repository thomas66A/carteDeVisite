import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '../class/Color';
import {BackgroundColorChange} from '../directives/backgroundColorChange.directive';
import {LetterColorChange} from '../directives/letterColorChange.directive';
import {SendToBddService} from '../services/create.service';
import { Card } from '../class/Card';

@Component({
    selector: 'app-creer',
    templateUrl: '../views/creer.component.html',
    styleUrls: ['../views/styles/creer.component.css'],
    providers: [SendToBddService]
})
export class CreerComponent{
    public color: Color = new Color(); 
    public lettre: Color = new Color();
    public bgColor: string;
    public lcColor: string; 

    @Input()
    public card: Card = new Card(0, '', '', '', '', '', '', '', '');
     
    
    constructor(public send: SendToBddService){
        this.color.black();
    }

    showStyle: false;

    getStyle(bgColor) {
        
      }
    getLetterColor(lcColor) {
        
      }  
    
    getValues(inputNom, inputPrenom, inputTelephone, inputAdresse, inputLien, inputMail, bgColor, lcColor){
        
        this.send.sendNewCard(inputNom, inputPrenom, inputTelephone, inputAdresse, inputLien, inputMail, bgColor, lcColor );
        
    }
    }
