import { TimeLayoutElement } from './time-layout-element';
import { Parameters } from './parameters';
import { DataType } from './enums';
import { Location, MoreWeatherInformation } from './meta-data';

export class Data {
    location: Location; // Location[];
    moreWeatherInformation: MoreWeatherInformation[];
    timelayout: TimeLayoutElement[];
    parameters: Parameters[];
    type: DataType;
    typeSpecified: boolean;
}
