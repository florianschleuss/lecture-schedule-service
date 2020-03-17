import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ApiClientService {

    authentificated: boolean = true;

    private baseUrl = 'http://data.home-webserver.de:3010/api/v1'; // URL to web api

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(private http: HttpClient) {};

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    };

    auth(email,psw): Observable<JSON>{
        let authStr: string = (email + ':' + psw)
        return this.http.get<JSON>(this.baseUrl.concat('/authentification'), {headers: new HttpHeaders({'Authorization': 'Basic' + authStr})});
    }

    ifAuthenticated(): boolean {
        return this.authentificated;
    }

    getUser(userId: string): Observable<JSON> {
        return this.http.get<JSON>(this.baseUrl.concat("/users/").concat(userId))
    }

    authUser(email: string, password: string): Observable<string>{
        this.authentificated=true
        return this.http.post<string>(this.baseUrl.concat("/users"),{  "first-name": "firstName", "last-name": "lastName", "e-mail": email, "password": password })
    }

    addUser(firstName: string, lastName: string, email: string, password: string): Observable<string> {
        this.authentificated=true
        return this.http.post<string>(this.baseUrl.concat("/users"),{  "first-name": firstName, "last-name": lastName, "e-mail": email, "password": password })
    }

    // getList(id: string): Observable<List> {
    //     if (id == undefined) { return; }
    //     return this.http.get<List>(this.listUrl.concat(id))
    //         .pipe(catchError(this.handleError<List>(new List()))
    //         );
    // };

    // remItem(id: string, itemId: string): Observable<List> {
    //     if (id == undefined) { return; }
    //     if (itemId == undefined) { return; }
    //     return this.http.delete<List>(this.listUrl.concat(id).concat('/items/').concat(itemId))
    //         .pipe(catchError(this.handleError<List>(new List())));
    // };

    // updateItem(id: string, itemId: string, bought: boolean): Observable<List> {
    //     if (id == undefined) { return; }
    //     if (itemId == undefined) { return; }
    //     return this.http.put<List>(this.listUrl.concat(id).concat('/items/').concat(itemId), { bought: bought })
    // };
}