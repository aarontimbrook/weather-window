import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ForecastModule } from './features/forecast/forecast.module';
import { MaterialModule } from './shared/material.module';
import { ForecastService } from './features/forecast/forecast.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ForecastModule,
        MaterialModule
    ],
    providers: [
        ForecastService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
