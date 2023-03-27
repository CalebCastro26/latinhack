import { Inscription } from './../Models/inscription';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  myAppUrl:string;
  myApiUrluniversidad: string;
  myApiUrlevento:string;
  myApiUrldesafio:string;
  myApiUrlinscription: string;

constructor(private http: HttpClient) {
  this.myAppUrl = environment.endpoint;
  this.myApiUrluniversidad = '/api/universidad/findAll/';
  this.myApiUrlevento = '/api/evento/findAll/';
  this.myApiUrldesafio = '/api/desafio/findAll/';
  this.myApiUrlinscription = '/api/inscripcion/createInscription';
 }

 GetUniversidad(): Observable<any>{
  return this.http.get(`${this.myAppUrl + this.myApiUrluniversidad}`)
 }

 GetEvento(): Observable<any>{
  return this.http.get(`${this.myAppUrl + this.myApiUrlevento}`)
 }

 GetDesafio(): Observable<any>{
  return this.http.get(`${this.myAppUrl + this.myApiUrldesafio}`)
 }

 CreateInscription(inscription: Inscription): Observable<Inscription>{
  return this.http.post<Inscription>(`${this.myAppUrl + this.myApiUrlinscription}`,inscription);
 }

}
