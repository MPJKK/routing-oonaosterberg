import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {

    apiUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
    pysakki = "Pasila";

    constructor(private http: HttpClient) {
    }

    getRoutes() {
        const body = `{
                    stops(name: "${this.pysakki}") {
                      name
                      lat
                      lon
                      code
                      patterns {
                        name
                        route {
                          shortName
                          longName
                        }
                        directionId
                      }
                    }
                  }`;
        const headers = {
            headers: new HttpHeaders().set('Content-type', 'application/graphql'),
        };

        interface ReittiData {
            data: Object;
        }

        return this.http.post<ReittiData>(this.apiUrl, body, headers);
    }

}
