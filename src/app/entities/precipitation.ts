import {
    DataSourceType,
    PrecipitationType,
    PrecipitationUnits,
    ProbabilityType,
    LikelihoodUnits,
    ProbabilityOfPrecipitationType
} from './enums';

import { DecimalVal } from './number-values';

export class Precipitation {
    name: string;
    Items: Object[];
    type: PrecipitationType;
    units: PrecipitationUnits;
    likelihoodUnits: LikelihoodUnits;
    likelihoodUnitsSpecified: boolean;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;
    probabilitytype: ProbabilityType;
    probabilitytypeSpecified: boolean;

    constructor() {
        this.units = PrecipitationUnits.inches;
    }
}

export class PrecipitationUncertainty {
    value: DecimalVal;
    Item: Object;
    type: DataSourceType;
    typeSpecified: boolean;
}

export class ProbabilityOfPrecipitation {
    name: string;
    Items: Object[];
    type: ProbabilityOfPrecipitationType;
    units: string;
    likelihoodUnits: LikelihoodUnits;
    likelihoodUnitsSpecified: boolean;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;
    applicablecategories: string;
    probabilitytype: ProbabilityType;
    probabilitytypeSpecified: boolean;

    constructor() {
        this.units = 'percent';
    }
}
