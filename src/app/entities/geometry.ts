import { SummarizationType, RadiusUnits } from './enums';

export class Circle {
    point: Point;
    radius: Radius;
    summarization: SummarizationType;
    summarizationSpecified: boolean;
}

export class Point {
    latitude: number;
    longitude: number;
    summarization: SummarizationType;
    summarizationSpecified: boolean;
}

export class Rectangle {
    point: Point[];
    summarization: SummarizationType;
    summarizationSpecified: boolean;
}

export class Radius {
    radiusunits: RadiusUnits;
}
