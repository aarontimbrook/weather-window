
import { CloudAmountType, DataSourceType } from './enums';
import { PercentageVal } from './number-values';

export class CloudAmount {
    name: string;
    // Items: Object[];
    type: CloudAmountType;
    units: string;
    timeLayout: string;
    categoricalTable: string;
    conversionTable: string;

    constructor() {
        this.name = '';
       // this.Items = new ;
        this.type = CloudAmountType.total;
        this.units = 'percent';
        this.timeLayout = '';
        this.categoricalTable = '';
        this.conversionTable = '';
    }
}

export class CloudAmountUncertainty {
    value: PercentageVal;
    Item: Object;
    type: DataSourceType;
    typeSpecified: boolean;
}
