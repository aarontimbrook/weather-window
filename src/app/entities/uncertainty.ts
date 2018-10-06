import { QualifierType, UncertaintyType } from './enums';

export class Uncertainty {
    error: UncertaintyError;
    type: UncertaintyType;
}

export class UncertaintyError {
    qualifier: QualifierType;
    Value: number;

    constructor() {
        this.qualifier = QualifierType.Item;
    }
}
