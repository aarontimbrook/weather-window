import { TimeLayoutElement } from './time-layout-element';
import { Parameters } from './parameters';
import { DataType } from './enums';
import { Location } from './location';
import { MoreWeatherInformation } from './More-weather-information';
import { JsonProperty } from '../shared/utility';
import { BaseEntity } from './base-entity';

export class Data extends BaseEntity {
    location: Location;

    moreWeatherInformation: MoreWeatherInformation;

    parameters: Parameters;

    @JsonProperty('time-layout')
    timeLayout: TimeLayoutElement;

    constructor() {
        super();

        this.location = new Location();
        this.moreWeatherInformation = new MoreWeatherInformation();
        this.parameters = new Parameters();
        this.timeLayout = new TimeLayoutElement();
    }
}
