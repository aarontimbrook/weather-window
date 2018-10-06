import {
    Component,
    OnInit
} from '@angular/core';

import {
    ForecastService
} from './forecast.service';

import * as _ from 'lodash';

import {
    Head,
    Location,
    Product,
    Source,
    MoreWeatherInformation
} from '../../entities/meta-data';

import {
    Data
} from '../../entities/data';

import {
    Parameters
} from '../../entities/parameters';

import {
    TimeLayoutElement
} from '../../entities/time-layout-element';

import {
    DataType
} from '../../entities/enums';

import {
    Observable,
    of
} from 'rxjs';

@Component({
    selector: 'component-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

    location: Location;

    constructor(private _serviceForecast: ForecastService) {}

    ngOnInit(): void {
        this._serviceForecast
            .getWeatherData()
            .subscribe(response => {
                // console.log('response=', response);
                const xmlString = response.toString();
                // console.log(xmlString);
                // use the DOMParser browser API to convert text to a Document
                const xml = new DOMParser()
                    .parseFromString(xmlString, 'text/xml');
                // and then use #_xmlParse to convert it to a JS object
                const forecastObj = this._xmlParse(xml.children[0]);
                const head: Head = forecastObj.head;
                const data: Data = forecastObj.data;
                const product: Product = head.product;
                const source: Source = head.source;
                this.location = data.location;
                // tslint:disable-next-line:no-debugger
                debugger;
                const moreWeatherInfos: MoreWeatherInformation[] = data.moreWeatherInformation;
                const params: Parameters[] = data.parameters;
                const timeLayoutElements: TimeLayoutElement[] = data.timelayout;
                const dataType: DataType = data.type;
                const isTypeSpecified: boolean = data.typeSpecified;
                // tslint:disable-next-line:no-debugger
                debugger;
            }, err => {
                console.error('ERROR::getWeatherData() ', err);
            });
    }
    //
    // https://andrew.stwrt.ca/posts/js-xml-parsing/
    //
    // flattens an object (recursively!), similarly to Array#flatten
    // e.g. flatten({ a: { b: { c: "hello!" } } }); // => "hello!"
    private _flatten(object) {
        const check = _.isPlainObject(object) && _.size(object) === 1;
        return check ? this._flatten(_.values(object)[0]) : object;
    }
    //
    // https://andrew.stwrt.ca/posts/js-xml-parsing/
    //
    private _xmlParse(xml) {
        const that = this;

        const data = {
            text: null,
            attributes: null
        };

        const isText = xml.nodeType === 3;
        const isElement = xml.nodeType === 1;
        const body = xml.textContent && xml.textContent.trim();
        const hasChildren = xml.children && xml.children.length;
        const hasAttributes = xml.attributes && xml.attributes.length;
        // if it's text just return it
        if (isText) {
            return xml.nodeValue.trim();
        }
        // if it doesn't have any children or attributes, just return the contents
        if (!hasChildren && !hasAttributes) {
            return body;
        }
        // if it doesn't have children but _does_ have body content, we'll use that
        if (!hasChildren && body.length) {
            data.text = body;
        }
        // if it's an element with attributes, add them to data.attributes
        if (isElement && hasAttributes) {
            data.attributes = _.reduce(
                xml.attributes,
                function(obj, name, id) {
                    const attr = xml.attributes.item(id);
                    obj[attr.name] = attr.value;
                    return obj;
                }, {}
            );
        }
        // recursively call #_xmlParse over children, adding results to data
        _.each(xml.children, function(child) {
            const name = child.nodeName;
            // if we've not come across a child with this nodeType, add it as an object & return here
            if (!_.has(data, name)) {
                data[name] = that._xmlParse(child);
                return;
            }
            // if we've encountered a second instance of the same nodeType, make our
            // representation of it an array
            if (!_.isArray(data[name])) {
                data[name] = [data[name]];
            }
            // and finally, append the new child
            data[name].push(that._xmlParse(child));
        });
        // if we can, let's fold some attributes into the body
        _.each(data.attributes, function(value, key) {
            if (data[key] != null) {
                return;
            }

            data[key] = value;
            delete data.attributes[key];
        });
        // if data.attributes is now empty, get rid of it
        if (_.isEmpty(data.attributes)) {
            delete data.attributes;
        }
        // simplify to reduce number of final leaf nodes and return
        return this._flatten(data);
    }

    private _handleError <T> (operation = 'operation', result ?: T) {
        return (error: any): Observable <T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this._log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private _log(message: string) {
        console.log(message);
    }
}
