import { PressureType, PressureUnits } from './enums';
import { DecimalVal } from './number-values';

export class Pressure {
    name: string;
    value: DecimalVal[];
    type: PressureType;
    units: PressureUnits;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;

    constructor() {
        this.units = PressureUnits.millibars;
    }
}
