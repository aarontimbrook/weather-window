import { JsonProperty } from '../shared/utility';

export abstract class BaseEntity {
    id: number;
    text: string;

    constructor() {
        this.id = -1;
        this.text = '';
    }
}
