import { SummarizationType, FieldType, CategoryType, ConciseNameType, OperationalModeType, SrsNameType } from './enums';

export class Head {
    product: Product;
    source: Source;
}

export class Location {
    locationkey: string;
    description: string;
    Item: Object;
    city: City;
    areadescription: string;
    Item1: Object;
}

export class CreationDate {
    refreshfrequency: string;
    Value: string;
}

export class City {
    state: string;
    summarization: SummarizationType;
    summarizationSpecified: boolean;
    Value: string;
}

export class MoreWeatherInformation {
    applicablelocation: string;
    Value: string;
}

export class Product {
    title: string;
    field: FieldType;
    fieldSpecified: boolean;
    category: CategoryType;
    categorySpecified: boolean;
    creationdate: CreationDate;
    concisename: ConciseNameType;
    operationalmode: OperationalModeType;
    srsName: SrsNameType;
}

export class ProductionCenter {
    subcenter: string;
    Text: string[];
}

export class Source {
    moreinformation: string;
    productioncenter: ProductionCenter;
    disclaimer: string;
    credit: string;
    creditlogo: string;
    feedback: string;
}
