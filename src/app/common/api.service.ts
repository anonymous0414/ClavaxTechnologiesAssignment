import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient){}

    public get(url: string):Observable<any>{
        return this.http.get( url);
    }

    // public post(url: string, objPost: object): Observable<any>{
    //     return this.http.post(this.apiUrl + url, objPost);
    // }

    // public put(url: string, objPost: object): Observable<any>{
    //     return this.http.put(this.apiUrl + url, objPost);
    // }

    // public delete(url: string): Observable<any>{
    //     return this.http.delete(this.apiUrl + url);
    // }
    
}