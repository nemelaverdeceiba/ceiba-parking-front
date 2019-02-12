import { Component } from '@angular/core';
import { ParkingSearchInDto } from './dto/parkingSearchInDto';
import { ParkingRecordInDto } from './dto/ParkingRecordInDto';
import { ParkingRecord } from './model/parkingRecord';
import { Vehicle } from './model/vehicle';
import { Observable } from 'rxjs';
import { SearchParkingRecordsService } from './service/searchVehicles';
import { RegisterParkingEntranceService } from './service/registerParkingEntrance';
import { RegisterParkingExitService } from './service/registerParkingExit';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ceiba-parking-front';

    licensePlate: string;
    vehicleType: string;
    cubicCentimeters: number;

    posts: Observable<ParkingRecord[]>;
    newPost: Observable<any>;

    parkingSearchInDto: ParkingSearchInDto;
    parkingRecordInDto: ParkingRecordInDto;

    displayedColumns: string[] = ['entryDate', 'outDate', 'billDate', 'licensePlate', 'cubicCentimeters', 'vehicleType'];

    constructor(private searchParkingRecordsService: SearchParkingRecordsService,
        private registerParkingEntranceService: RegisterParkingEntranceService,
        private registerParkingExitService: RegisterParkingExitService) { }

    searchParkingRecords() {
        // this.newPost = this.searchParkingRecordsService.searchParkingRecords();
        this.searchParkingRecordsService.searchParkingRecords()
            .subscribe(parkingSearchInDto => this.parkingSearchInDto = parkingSearchInDto);
    }

    registerParkingRecordEntry() {
        // this.newPost = this.registerParkingEntranceService.registerParkingRecordEntry(this.licensePlate,
        //  this.cubicCentimeters, this.vehicleType);

        this.registerParkingEntranceService.registerParkingRecordEntry(this.licensePlate,
            this.cubicCentimeters, this.vehicleType)
            .subscribe(parkingRecordInDto => this.parkingRecordInDto = parkingRecordInDto);
    }

    registerParkingExit() {
        // this.newPost = this.registerParkingExitService.registerParkingExit(this.licensePlate);
        this.registerParkingExitService.registerParkingExit(this.licensePlate)
            .subscribe(parkingRecordInDto => this.parkingRecordInDto = parkingRecordInDto);
    }

}
