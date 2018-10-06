import { WavesUnits, WavesType, SwellType, SwellUnits, SeasType, SeasUnits } from './enums';

export class WaterState {
    Items: Object[];
    icecoverage: string[];
    timelayout: string;
}

export class Waves {
    name: string;
    value: string[];
    type: WavesType;
    units: WavesUnits;
    categoricaltable: string;
    conversiontable: string;
    period: string;
    steepness: string;

    constructor() {
        this.units = WavesUnits.feet;
    }
}

export class Swell {
    name: string;
    value: string;
    direction: SwellDirection;
    type: SwellType;
    units: SwellUnits;
    categoricaltable: string;
    conversiontable: string;
    period: string;
    steepness: string;

    constructor() {
        this.units = SwellUnits.feet;
    }
}

export class SwellDirection {
    upperrange: string;
    lowerrange: string;
    Value: string;
}

export class Seas {
    name: string;
    value: string[];
    type: SeasType;
    units: SeasUnits;
    categoricaltable: string;
    conversiontable: string;

    constructor() {
        this.units = SeasUnits.feet;
    }
}
