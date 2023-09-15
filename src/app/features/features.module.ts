import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        LandingPageComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        SharedModule
    ]
})
export class FeaturesModule { }
