import {
    HttpClient,
    HttpErrorResponse
} from '@angular/common/http';

import {
    Injectable
} from '@angular/core';

import {
    Observable,
    throwError
} from 'rxjs';

import {
    catchError
} from 'rxjs/operators';
// notes
// http://www.nws.noaa.gov/forecasts/xml/
// https://stackoverflow.com/questions/47159604/retrieve-xml-from-httpclient-on-angular-5
// https://www.nativescript.org/blog/handle-xml-response-from-soap-service-in-nativescript
// https://developer.telerik.com/featured/working-xml-data-nativescript-angular-2/

// service
// https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php
// http://forecast.weather.gov/MapClick.php?lat=40.1502&lon=-79.5423&FcstType=digitalDWML
@Injectable()
export class ForecastService {

    constructor(private _httpClient: HttpClient) {}

    getWeatherData(): Observable < string > {
        const url = `https://forecast.weather.gov/MapClick.php?lat=40.1502&lon=-79.5423&FcstType=digitalDWML`;

        return this._httpClient
            .get(url, {
                responseType: 'text'
            })
            .pipe(catchError(this._handleError));
    }

    private _handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
}
