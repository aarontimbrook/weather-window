import { BaseEntity } from './base-entity';
import { JsonProperty } from '../shared/utility';
import { PrecipitationUnits, ProbabilityOfPrecipitationType } from './enums';

export class HourlyQpf extends BaseEntity {
    @JsonProperty('time-layout')
    timeLayout: string; // 'k-p1h-n1-0';

    type: ProbabilityOfPrecipitationType;

    units: PrecipitationUnits;

    // value: Array<number>;

    constructor() {
        super();

        this.timeLayout = '';
        this.type = ProbabilityOfPrecipitationType.Item12hour;
        this.units = PrecipitationUnits.inches;
        // this.value = new Array();
    }
}
