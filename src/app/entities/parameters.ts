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

export class Parameters {
    categories: Categories[];
    temperature: Temperature[];
    precipitation: Precipitation[];
    probabilityofprecipitation: ProbabilityOfPrecipitation[];
    fireweather: FireWeather[];
    convectivehazard: ConvectiveHazard[];
    climateanomaly: ClimateAnomaly[];
    windspeed: WindSpeed[];
    direction: Direction[];
    cloudamount: CloudAmount[];
    humidity: Humidity[];
    weather: Weather[];
    conditionsicon: ConditionsIcon[];
    hazards: Hazards[];
    wordedForecast: WordedForecast;
    pressure: Pressure[];
    probabilisticCondition: ProbabilisticCondition[];
    waterstate: WaterState[];
    applicablelocation: string;
}
