import { SummarizationType, RadiusUnits } from './enums';
import { BaseEntity } from './base-entity';

export class Circle {
    point: Point;
    radius: Radius;
    summarization: SummarizationType;
    summarizationSpecified: boolean;
}

export class Point extends BaseEntity {
    latitude: number;
    longitude: number;

    constructor() {
        super();

        this.latitude = -1;
        this.longitude = -1;
    }
}

export class Rectangle {
    point: Point[];
    summarization: SummarizationType;
    summarizationSpecified: boolean;
}

export class Radius {
    radiusunits: RadiusUnits;
}
