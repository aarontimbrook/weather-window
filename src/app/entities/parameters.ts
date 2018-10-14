import { Categories } from './categories';
import { Temperature } from './temperature';
import { Precipitation, ProbabilityOfPrecipitation } from './precipitation';
import { FireWeather } from './fire-weather';
import { ConvectiveHazard } from './convective-hazard';
import { WindSpeed } from './wind';
import { Direction } from './direction';
import { CloudAmount } from './cloud';
import { Humidity } from './humidity';
import { Weather } from './weather';
import { ConditionsIcon } from './conditions-icon';
import { Hazards } from './hazards';
import { WordedForecast } from './worded-forecast';
import { Pressure } from './presssure';
import { ProbabilisticCondition } from './probabilistic-condition';
import { ClimateAnomaly } from './anomaly';
import { WaterState } from './water-state';
import { JsonProperty } from '../shared/utility';
import { BaseEntity } from './base-entity';
import { HourlyQpf } from './hourly-qpf';

export class Parameters extends BaseEntity {
    @JsonProperty('applicable-location')
    applicableLocation: string;

    @JsonProperty('cloud-amount')
    cloudAmount: CloudAmount;

    direction: Direction;

    @JsonProperty('hourly-qpf')
    hourlyQpf: HourlyQpf;

    humidity: Humidity;

    @JsonProperty('probability-of-precipitation')
    probabilityOfPrecipitation: ProbabilityOfPrecipitation;

    temperature: Temperature;

    weather: Weather;

    windspeed: WindSpeed[];

    // categories: Categories[];
    // precipitation: Precipitation[];
    // fireweather: FireWeather[];
    // convectivehazard: ConvectiveHazard[];
    // climateanomaly: ClimateAnomaly[];
    // conditionsicon: ConditionsIcon[];
    // hazards: Hazards[];
    // wordedForecast: WordedForecast;
    // pressure: Pressure[];
    // probabilisticCondition: ProbabilisticCondition[];
    // waterstate: WaterState[];
    // applicablelocation: string;

    constructor() {
        super();
        this.applicableLocation = '';
        this.cloudAmount = null;
        this.direction = null;
        this.hourlyQpf = null;
        this.humidity = null;
        this.probabilityOfPrecipitation = null;
        this.temperature = null;
        this.weather = null;
        this.windspeed = null;
    }
}
