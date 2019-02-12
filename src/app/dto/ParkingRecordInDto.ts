import { ParkingRecord } from '../model/parkingRecord';
import { Observable } from 'rxjs';

export interface ParkingRecordInDto {

    responseCode: String;
    responseMessage: String;

    parkingRecord: ParkingRecord;

}
