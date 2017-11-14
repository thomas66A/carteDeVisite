import { Card } from '../class/Card';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@Injectable() 
export class CardsService {

    private url: string = 'http://localhost:8888/Angular/ApiCarte/returnCardBdd';
    
    constructor(private http: Http) {}

    getAllCards(): Promise<any> {

        return this.http.get(this.url, {})
            .toPromise();

    }
    

}