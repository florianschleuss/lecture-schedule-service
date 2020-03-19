import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class ApiClientService {
    authentificated: boolean = true;

    private baseUrl = "http://data.home-webserver.de:3010/api/v1"; // URL to web api

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    };

    constructor(private http: HttpClient) { }

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

    auth(email, psw): Observable<JSON> {
        let authStr: string = email + ":" + psw;
        return this.http.get<JSON>(this.baseUrl.concat("/authentification"), {
            headers: new HttpHeaders({ Authorization: "Basic" + authStr })
        });
    }

    ifAuthenticated(): boolean {
        return this.authentificated;
    }

    getUser(userId: string): Observable<JSON> {
        return this.http.get<JSON>(this.baseUrl.concat("/users/").concat(userId));
    }

    authUser(email: string, password: string): Observable<string> {
        this.authentificated = true;
        return this.http.post<string>(this.baseUrl.concat("/users"), {
            "first-name": "firstName",
            "last-name": "lastName",
            "e-mail": email,
            password: password
        });
    }

    addUser(
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ): Observable<string> {
        this.authentificated = true;
        return this.http.post<string>(this.baseUrl.concat("/users"), {
            "first-name": firstName,
            "last-name": lastName,
            "e-mail": email,
            password: password
        });
    }

    getLectures(userId: string): Observable<JSON> {
        return this.http.get<JSON>(
            this.baseUrl
                .concat("/users/")
                .concat(userId)
                .concat("/lectures")
        );
    }

    addLecture(
        userId: string,
        name: string,
        course: string,
        exam: string | null
    ): Observable<string> {
        this.authentificated = true;
        return this.http.post<string>(
            this.baseUrl
                .concat("/users/")
                .concat(userId)
                .concat("/lectures"),
            {
                name: name,
                course: course,
                exam: exam
            }
        );
    }

    getLecture(userId: string, lectureId: string): Observable<JSON> {
        return this.http.get<JSON>(
            this.baseUrl
                .concat("/users/")
                .concat(userId)
                .concat("/lectures/")
                .concat(lectureId)
        );
    }

    getDates(userId: string, lectureId: string): Observable<JSON> {
        return this.http.get<JSON>(
            this.baseUrl
                .concat("/users/")
                .concat(userId)
                .concat("/lectures/")
                .concat(lectureId)
                .concat("/dates"),
        );
    }

    addDate(
        userId: string,
        lectureId: string,
        date: string,
        morning: boolean,
        room: string
    ): Observable<JSON> {
        return this.http.post<JSON>(
            this.baseUrl
                .concat("/users/")
                .concat(userId)
                .concat("/lectures/")
                .concat(lectureId)
                .concat("/dates"),
            {
                date: date,
                morning: morning,
                room: room
            }
        );
    }

    updateDate(
        userId: string,
        lectureId: string,
        dateId: string,
        date?: string,
        morning?: boolean,
        room?: string,
    ): Observable<JSON> {
        return this.http.patch<JSON>(
            this.baseUrl
                .concat("/users/")
                .concat(userId)
                .concat("/lectures/")
                .concat(lectureId)
                .concat("/dates/")
                .concat(dateId),
            {
                date: date ? date : null,
                moring: morning ? morning : null,
                room: room ? room : null
            }
        );
    }

    remDate(userId: string, lectureId: string, dateId: string): Observable<JSON> {
        return this.http.delete<JSON>(
            this.baseUrl
                .concat("/users/")
                .concat(userId)
                .concat("/lectures/")
                .concat(lectureId)
                .concat("/dates/")
                .concat(dateId)
        );
    }
}