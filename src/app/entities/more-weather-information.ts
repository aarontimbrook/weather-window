import { JsonProperty } from '../shared/utility';
import { BaseEntity } from './base-entity';

export class MoreWeatherInformation extends BaseEntity {
    @JsonProperty('applicable-location')
    applicableLocation: string;

    constructor() {
        super();

        this.applicableLocation = '';
    }
}
