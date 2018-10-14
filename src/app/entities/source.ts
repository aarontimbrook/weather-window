import { JsonProperty } from '../shared/utility';
import { BaseEntity } from './base-entity';

export class Source extends BaseEntity {
    credit: string;

    @JsonProperty('more-information')
    moreInformation: string;

    @JsonProperty('production-center')
    productionCenter: string;

    constructor() {
        super();

        this.credit = '';
        this.moreInformation = '';
        this.productionCenter = '';
    }
}
