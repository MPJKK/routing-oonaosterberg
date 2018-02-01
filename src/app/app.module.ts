import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {RouteDirectionPipe} from './pipes/route-direction.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatButtonModule, MatCheckboxModule, MatTabsModule, MatFormFieldModule, MatExpansionModule, MatListModule,
    MatIconModule
} from '@angular/material';
import {DirectionClassPipe} from './pipes/direction-class.pipe';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SetupComponent,
        RoutesComponent,
        RouteDirectionPipe,
        DirectionClassPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDDb7FkwNJaCGeAQPwCq8OGunqZ5GTyz4s'
        }),
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTabsModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatListModule,
        MatIconModule
    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent],
})

export class AppModule {
}
