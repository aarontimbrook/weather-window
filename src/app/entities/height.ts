import { DatumType, HeightUnits } from './enums';

export class Height {
    datum: DatumType;
    heightUnits: HeightUnits;
    heightUnitsSpecified: boolean;
    Value: string;

    constructor() {
        // super();

        this.datum = DatumType.surface;
        this.heightUnits = HeightUnits.feet;
    }
}
