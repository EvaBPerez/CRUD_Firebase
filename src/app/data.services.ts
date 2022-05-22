import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataServices {
    constructor (private httpClient: HttpClient) {}

    saveBooks(books: { id: number; name: string; }[]) {
        this.httpClient.put('https://crud---dawii-default-rtdb.europe-west1.firebasedatabase.app/datos.json', books).subscribe(
            error => console.log("Error: " + error)
        );
    }

    loadBooks() {
        return this.httpClient.get('https://crud---dawii-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }
}