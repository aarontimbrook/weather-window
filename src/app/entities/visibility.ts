import { VisibilityUnits } from './enums';

export class Visibility {
    units: VisibilityUnits;
    Value: string;

    constructor() {
        this.units = VisibilityUnits.statutemiles;
    }
}
