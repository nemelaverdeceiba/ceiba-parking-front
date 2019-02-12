import { ParkingRecord } from '../model/parkingRecord';
import { Observable } from 'rxjs';

export interface ParkingSearchInDto {

    responseCode: String;
    responseMessage: String;

    listParkinsRecords: ParkingRecord[];

}
