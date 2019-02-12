import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { map } from 'rxjs/operators';
import { SearchParkingRecordsService } from './service/searchVehicles';
import { RegisterParkingEntranceService } from './service/registerParkingEntrance';
import { RegisterParkingExitService } from './service/registerParkingExit';
// import {MatTableModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, HttpClientModule, FormsModule
        // , MatTableModule
    ],
    providers: [SearchParkingRecordsService, RegisterParkingEntranceService, RegisterParkingExitService],
    bootstrap: [AppComponent]
})
export class AppModule { }
