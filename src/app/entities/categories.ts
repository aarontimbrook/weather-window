import { CategoriesType, ProbabilityType } from './enums';
import { ValueList } from './value-list';

export class Categories {
    name: string;
    categorieskey: string;
    valueList: ValueList;
    type: CategoriesType;
    probabilitytype: ProbabilityType;
    probabilitytypeSpecified: boolean;
}
