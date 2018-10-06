import {
    NgModule
} from '@angular/core';
import {
    ForecastComponent
} from '../forecast/forecast.component';
import {
    ForecastService
} from '../forecast/forecast.service';

@NgModule({
    declarations: [
        ForecastComponent
    ],
    imports: [],
    exports: [
        ForecastComponent
    ],
    providers: [
        ForecastService
    ],
    bootstrap: []
})
export class ForecastModule {}
