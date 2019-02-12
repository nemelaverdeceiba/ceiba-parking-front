import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingRecord } from '../model/parkingRecord';
import { Vehicle } from '../model/vehicle';

@Injectable()
export class RegisterParkingExitService {

    private REGISTER_PARKING_EXIT_URL = 'http://localhost:8080/parkingRecordService/registerParkingExit';
    constructor(private http: HttpClient) { }

    public registerParkingExit(licensePlate: string): Observable<any> {
         const data: ParkingRecord = {
            entryDate: null,
            outDate: new Date(),
            billValue: 0.0,
            vehicle: { licensePlate: licensePlate, cubicCentimeters: null, vehicleType: null }
        };
        return this.http.post(this.REGISTER_PARKING_EXIT_URL, data);
    }
}
