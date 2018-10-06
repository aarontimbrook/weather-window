import { DataSourceType } from './enums';

export class DecimalVal {
    upperrange: string;
    lowerrange: string;
    type: DataSourceType;
    typeSpecified: boolean;
    Value: number;
}

export class PercentageVal {
    upperrange: string;
    lowerrange: string;
    type: DataSourceType;
    typeSpecified: boolean;
    Value: string;
}
