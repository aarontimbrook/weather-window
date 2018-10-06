import { HazardSignificanceType, HazardPhenomenaType, HazardDurationType } from './enums';

export class Hazards {
    name: string[];
    hazardconditions: HazardConditions[][];
    timelayout: string;
}

export class HazardConditions {
    hazardTextURL: string;
    hazardIcon: string;
    hazardCode: string;
    phenomena: HazardPhenomenaType;
    phenomenaSpecified: boolean;
    significance: HazardSignificanceType;
    significanceSpecified: boolean;
    hazardType: HazardDurationType;
    hazardTypeSpecified: boolean;
    eventTrackingNumber: string;
    headline: string;
}
