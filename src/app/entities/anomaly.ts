import { AnomalyType } from './enums';

export class Anomaly {
    name: string;
    value: AnomalyValue[];
    type: AnomalyType;
    units: string;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;

    constructor() {
        this.units = 'percent';
    }
}

export class AnomalyValue {
    upperrange: string;
    lowerrange: string;
    Value: string;
}

export class ClimateAnomaly {
    weekly: Anomaly[];
    monthly: Anomaly[];
    seasonal: Anomaly[];
}
