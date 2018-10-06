import { DataSourceType, ProbabilityType, LikelihoodUnits, TemperatureUnits, TemperatureType } from './enums';

export class Temperature {
    name: string;
    Items: Object[];
    type: TemperatureType;
    units: TemperatureUnits;
    likelihoodUnits: LikelihoodUnits;
    likelihoodUnitsSpecified: boolean;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;
    applicablecategories: string;
    probabilitytype: ProbabilityType;
    probabilitytypeSpecified: boolean;

    constructor() {
        this.units = TemperatureUnits.Fahrenheit;
    }
}

export class TempVal {
    upperrange: string;
    lowerrange: string;
    type: DataSourceType;
    typeSpecified: boolean;
    Value: string;
}

export class TemperatureUncertainty {
    value: TempVal;
    Item: Object;
    type: DataSourceType;
    typeSpecified: boolean;
}
