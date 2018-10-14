import { City } from './city';
import { Height } from './height';
import { JsonProperty } from '../shared/utility';
import { Point } from './geometry';
import { BaseEntity } from './base-entity';

export class Location extends BaseEntity {
    city: City;

    description: string;

    height: Height;

    @JsonProperty('location-key')
    locationKey: string;

    point: Point;

    constructor() {
        super();

        this.city = new City();
        this.description = '';
        this.height = new Height();
        this.point = new Point();
    }
}
