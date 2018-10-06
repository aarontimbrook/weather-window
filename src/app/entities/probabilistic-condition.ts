import { ProbabilisticConditionType, LikelihoodUnits, ProbabilityType } from './enums';

export class ProbabilisticCondition {
    name: string;
    Items: Object[];
    type: ProbabilisticConditionType;
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
