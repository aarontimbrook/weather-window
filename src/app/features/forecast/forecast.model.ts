import { ForecastDataModel } from './forecast-data.model';

export class ForecastModel {
    sourceProductionCenter: string; // weather center data created at like Pittsburgh PA
    sourceProductionCenterUrl: string; // weather center url
    sourceInformation: string; // NOAA's National Weather Service XML Services
    latitude: number;
    longitude: number;
    description: string; // placename (use city element)
    meanSeaLevel: number;
    createDate: string;
    data: Array<ForecastDataModel>;
}
