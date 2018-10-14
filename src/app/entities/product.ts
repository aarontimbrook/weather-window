import { FieldType, CategoryType, ConciseNameType, OperationalModeType, SrsNameType } from './enums';
import { CreationDate } from './creation-date';
import { JsonProperty } from '../shared/utility';
import { BaseEntity } from './base-entity';

export class Product extends BaseEntity {
    // title: string;
    // field: FieldType;
    // fieldSpecified: boolean;
    // category: CategoryType;
    // categorySpecified: boolean;
    @JsonProperty('concise-name')
    conciseName: ConciseNameType;

    @JsonProperty('creation-date')
    creationDate: CreationDate;

    @JsonProperty('operational-mode')
    operationalMode: OperationalModeType;

    @JsonProperty('srsName')
    srsName: SrsNameType;

    constructor() {
        super();

        this.conciseName = ConciseNameType.glance;
        this.creationDate = new CreationDate();
        this.operationalMode = OperationalModeType.test;
        this.srsName = SrsNameType.WGS1984;
    }
}
