import { StartValidTime } from './start-valid-time';
import { TimeCoordinateType, SummarizationType } from './enums';

export class TimeLayoutElement {
    layoutkey: string;
    startvalidtime: StartValidTime[];
    endvalidtime: string[];
    timecoordinate: TimeCoordinateType;
    summarization: SummarizationType;
    summarizationSpecified: boolean;
}
