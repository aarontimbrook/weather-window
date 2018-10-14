import { StartValidTime } from './start-valid-time';
import { TimeCoordinateType, SummarizationType } from './enums';
import { JsonProperty } from '../shared/utility';
import { BaseEntity } from './base-entity';
import { EndValidTime } from './end-valid-time';

export class TimeLayoutElement extends BaseEntity {
           @JsonProperty({ name: 'end-valid-time', clazz: String })
           endValidTime: string[];

           @JsonProperty('layout-key')
           layoutKey: string;

           @JsonProperty({ name: 'start-valid-time', clazz: String })
           startValidTime: string[];

           summarization: SummarizationType;

           @JsonProperty('time-coordinate')
           timeCoordinate: TimeCoordinateType;

           constructor() {
               super();

               this.endValidTime = new Array<string>();
               this.layoutKey = '';
               this.startValidTime = new Array<string>();
               this.summarization = SummarizationType.none;
               this.timeCoordinate = TimeCoordinateType.local;
           }
       }
