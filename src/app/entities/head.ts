import { Product } from './product';
import { Source } from './source';
import { BaseEntity } from './base-entity';
import { JsonProperty } from '../shared/utility';

export class Head extends BaseEntity {
    @JsonProperty('product')
    product: Product;

    @JsonProperty('source')
    source: Source;

    @JsonProperty('version')
    version: string;

    constructor() {
        super();

        this.product = new Product();
        this.source = new Source();
        this.version = '';
    }
}
