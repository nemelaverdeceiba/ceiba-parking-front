import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingRecord } from '../model/parkingRecord';
import { Vehicle } from '../model/vehicle';

@Injectable()
export class RegisterParkingEntranceService {

    private REGISTER_PARKING_ENTRY_URL = 'http://localhost:8080/parkingRecordService/registerParkingEntrance';
    constructor(private http: HttpClient) { }

    public registerParkingRecordEntry(licensePlate: string, cubicCentimeters: number, vehicleType: string): Observable<any> {
    // const data0: Vehicle = { licensePlate: this.licensePlate, cubicCentimeters: this.cubicCentimeters, vehicleType: this.vehicleType };

        const data: ParkingRecord = {
            entryDate: new Date(),
            outDate: null,
            billValue: 0.0,
            // vehicle: data0
            vehicle: { licensePlate: licensePlate, cubicCentimeters: cubicCentimeters, vehicleType: vehicleType }

        };
        return this.http.post(this.REGISTER_PARKING_ENTRY_URL, data);
    }
}
