import { DataSourceType, WindSpeedUnits, WindSpeedType } from './enums';

export class WindSpeed {
    name: string;
    Items: Object[];
    type: WindSpeedType;
    units: WindSpeedUnits;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;

    constructor() {
        this.units = WindSpeedUnits.knots;
    }
}

export class WdirVal {
    upperrange: string;
    lowerrange: string;
    type: DataSourceType;
    typeSpecified: boolean;
    Value: string;
}

export class WindSpeedUncertainty {
    value: WspdVal;
    Item: Object;
    type: DataSourceType;
    typeSpecified: boolean;
}

export class WspdVal {
    upperrange: string;
    lowerrange: string;
    type: DataSourceType;
    typeSpecified: boolean;
    Value: string;
}
