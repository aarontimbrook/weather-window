import { FireWeatherValueType, FireWeatherType } from './enums';

export class FireWeather {
    name: string;
    value: FireWeatherValueType[];
    type: FireWeatherType;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;
}
