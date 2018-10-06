import { DataSourceType, DirectionType } from './enums';
import { WdirVal } from './wind';

export class Direction {
    name: string;
    Items: Object[];
    type: DirectionType;
    units: string;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;

    constructor() {
        this.units = 'degrees true';
    }
}

export class DirectionUncertainty {
    value: WdirVal;
    Item: Object;
    type: DataSourceType;
    typeSpecified: boolean;
}
