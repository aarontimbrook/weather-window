import { CoverageType, WeatherConditionsType, IntensityType, AdditiveType } from './enums';
import { Visibility } from './visibility';

export class Weather {
    name: string[];
    weatherconditions: WeatherConditions[];
    timelayout: string;
}

export class WeatherConditions {
    value: WeatherConditionsValue[];
    categoricaltable: string;
    conversiontable: string;
    weathersummary: string;
}

export class WeatherConditionsValue {
    visibility: Visibility;
    coverage: CoverageType;
    coverageSpecified: boolean;
    weathertype: WeatherConditionsType;
    weathertypeSpecified: boolean;
    intensity: IntensityType;
    intensitySpecified: boolean;
    additive: AdditiveType;
    additiveSpecified: boolean;
    qualifier: string;
}
