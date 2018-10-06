
import { CloudAmountType, DataSourceType } from './enums';
import { PercentageVal } from './number-values';

export class CloudAmount {
    name: string;
    Items: Object[];
    type: CloudAmountType;
    units: string;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;

    constructor() {
        this.units = 'percent';
    }
}

export class CloudAmountUncertainty {
    value: PercentageVal;
    Item: Object;
    type: DataSourceType;
    typeSpecified: boolean;
}
