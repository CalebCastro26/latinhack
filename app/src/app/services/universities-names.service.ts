import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesNamesService {

  constructor(public http: HttpClient) { }
  getUniversities(iso: any) {
    //return this.http.get<any>(environment.api + "?iso=" + iso)
  }
  getInscription(data: any, challenge: string, title: string, description: string, teamName: string) {
    console.log(challenge, title, description)
    //return this.http.post<any>(environment.inscription,
      //{
        //"challenge": challenge,
        //"groupname": teamName,
        //"solutionTitle": title,
        //"descripcionSolution": description,
        //"members": data
      //})
  }
}
