import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:1337/localhost:3000/api/classroom";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  private static handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
}

  private static extractData(res: Response) {
  return res || { };
}

  getClassroom(): Observable<any> {
  return this.http.get(apiUrl, httpOptions).pipe(
    map(RestApiService.extractData),
    catchError(RestApiService.handleError));
}

  getClassroomById(id: string): Observable<any> {
  const url = `${apiUrl}/${id}`;
  return this.http.get(url, httpOptions).pipe(
    map(RestApiService.extractData),
    catchError(RestApiService.handleError));
}

  postClassroom(data): Observable<any> {
  const url = `${apiUrl}/add_with_students`;
  return this.http.post(url, data, httpOptions)
    .pipe(
      catchError(RestApiService.handleError)
    );
}

  updateClassroom(id: string, data): Observable<any> {
  const url = `${apiUrl}/${id}`;
  return this.http.put(url, data, httpOptions)
    .pipe(
      catchError(RestApiService.handleError)
    );
}

  deleteClassroom(id: string): Observable<{}> {
  const url = `${apiUrl}/${id}`;
  return this.http.delete(url, httpOptions)
    .pipe(
      catchError(RestApiService.handleError)
    );
}

}
