import { HumidityType } from './enums';

export class Humidity {
    name: string;
    value: HumidityValue[];
    type: HumidityType;
    units: string;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;

    constructor() {
        this.units = 'percent';
    }
}

export class HumidityValue {
    upperrange: string;
    lowerrange: string;
    Value: string;
}
