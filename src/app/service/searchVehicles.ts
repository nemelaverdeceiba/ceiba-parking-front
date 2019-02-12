import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingRecord } from '../model/parkingRecord';
import { Vehicle } from '../model/vehicle';

@Injectable()
export class SearchParkingRecordsService {

    private  SEARCH_PARKING_RECORD_URL = 'http://localhost:8080/parkingRecordService/searchParkingRecords';
    constructor(private http: HttpClient) { }

    public searchParkingRecords(): Observable<any> {
        return this.http.get(this.SEARCH_PARKING_RECORD_URL);
    }
}
