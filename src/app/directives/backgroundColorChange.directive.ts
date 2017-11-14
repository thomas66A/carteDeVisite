import { Directive, ElementRef, Input, HostListener, OnChanges } from '@angular/core';
import * as $ from 'jquery';


@Directive( {
    selector: '[changeBackground]'
})
export class BackgroundColorChange implements OnChanges {

    private $element: JQuery;
    

        @Input('changeBackground') highlightcolor: string;

    constructor( el: ElementRef ) {
        this.$element = $(el.nativeElement);
    }
    ngOnChanges() {
    
            this.$element.css('background-color', this.highlightcolor);
            
      }
    getBg(){
        return this.highlightcolor;
    }
    
      
        
     

    

}