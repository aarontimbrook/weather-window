import { ConvectiveHazardSevereComponentType, ConvectiveHazardOutlookValueType } from './enums';

export class ConvectiveHazard {
    outlook: ConvectiveHazardOutlook;
    severecomponent: ConvectiveHazardSevereComponentType[];
}

export class ConvectiveHazardSevereComponent {
    name: string;
    value: ConvectiveHazardSevereComponentValue[];
    type: ConvectiveHazardSevereComponentType;
    units: string;
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;

    constructor() {
        this.units = 'percent';
    }
}

export class ConvectiveHazardSevereComponentValue {
    upperrange: string;
    lowerrange: string;
    Value: string;
}

export class ConvectiveHazardOutlook {
    name: string;
    value: ConvectiveHazardOutlookValueType[];
    timelayout: string;
    categoricaltable: string;
    conversiontable: string;
}
