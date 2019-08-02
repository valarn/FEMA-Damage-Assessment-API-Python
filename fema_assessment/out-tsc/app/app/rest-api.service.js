import * as tslib_1 from "tslib";
var RestApiService_1;
import { Injectable } from '@angular/core';
import { throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "http://localhost:1337/localhost:3000/api/classroom";
let RestApiService = RestApiService_1 = class RestApiService {
    constructor(http) {
        this.http = http;
    }
    static handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
    static extractData(res) {
        return res || {};
    }
    getClassroom() {
        return this.http.get(apiUrl, httpOptions).pipe(map(RestApiService_1.extractData), catchError(RestApiService_1.handleError));
    }
    getClassroomById(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url, httpOptions).pipe(map(RestApiService_1.extractData), catchError(RestApiService_1.handleError));
    }
    postClassroom(data) {
        const url = `${apiUrl}/add_with_students`;
        return this.http.post(url, data, httpOptions)
            .pipe(catchError(RestApiService_1.handleError));
    }
    updateClassroom(id, data) {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, data, httpOptions)
            .pipe(catchError(RestApiService_1.handleError));
    }
    deleteClassroom(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url, httpOptions)
            .pipe(catchError(RestApiService_1.handleError));
    }
};
RestApiService = RestApiService_1 = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], RestApiService);
export { RestApiService };
//# sourceMappingURL=rest-api.service.js.map