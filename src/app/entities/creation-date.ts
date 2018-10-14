import { JsonProperty } from '../shared/utility';
import { BaseEntity } from './base-entity';

export class CreationDate extends BaseEntity {
    @JsonProperty('refresh-frequency')
    refreshFrequency: string;

    constructor() {
        super();
        this.refreshFrequency = '';
    }
}
