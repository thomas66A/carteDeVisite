import {NgModule} from '@angular/core';
import { Card } from '../class/Card';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpParams} from '@angular/common/http';


@Injectable()
export class SendToBddService {

    private url: string = 'http://localhost:8888/Angular/ApiCarte/sendCardToBdd';
    constructor(private http: Http) {}

    sendNewCard(nom: string, prenom: string, telephone: string, adresse: string, lienImage: string, mail: string, bgColor: string, lcColor: string){
        this.http.post(this.url, {
            'nom': nom,
            'prenom': prenom,
            'telephone': telephone,
            'adresse': adresse,
            'lienImage': lienImage,
            'mail': mail,
            'bgColor': bgColor,
            'fontColor': lcColor
        }).toPromise();
        
    }
}