import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForecastModule } from './features/forecast/forecast.module';
import { ForecastService } from './features/forecast/forecast.service';
import { MaterialModule } from './shared/material.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        ForecastModule,
        HttpClientModule,
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
