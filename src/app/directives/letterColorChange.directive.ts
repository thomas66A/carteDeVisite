import { Directive, ElementRef, Input, HostListener, OnChanges } from '@angular/core';
import * as $ from 'jquery';


@Directive( {
    selector: '[couleurLettre]'
})
export class LetterColorChange implements OnChanges {

    private $element: JQuery;
    

    @Input('couleurLettre') highlightcolor: string;

    constructor( el: ElementRef ) {
        this.$element = $(el.nativeElement);
    }
    ngOnChanges() {
    
            this.$element.css('color', this.highlightcolor);
            
      }
    getLc(){
        return this.highlightcolor;
    }
}