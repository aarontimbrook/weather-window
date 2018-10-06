import { ItemsChoiceType } from './enums';

export class DWML {
    Items: Object[];
    ItemsElementName: ItemsChoiceType[];
    version: string;

    constructor() {
        this.version = '1.0';
    }
}
