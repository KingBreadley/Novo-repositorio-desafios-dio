import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";

@Injectable()

export class BookService {
    private url = 'https://sheet.best/api/sheets/f4ef5b2c-08eb-4de9-81de-cbd9ad4bac2c';

    httpOptions={
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient) {}

    getBook(){
        return this.http.get(this.url)
    }
}