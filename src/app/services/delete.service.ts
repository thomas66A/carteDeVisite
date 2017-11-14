import {NgModule} from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpParams} from '@angular/common/http';


@Injectable()
export class DeleteAcard {
    private url: string = 'http://localhost:8888/Angular/ApiCarte/deleteAcard';
    constructor(private http: Http) {}

    deleteCard(id: number){
        this.http.post(this.url, {
            'id': id
        }).toPromise();
}
}