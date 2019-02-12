import { Vehicle } from './vehicle';

export interface ParkingRecord {


    entryDate: Date;
    outDate: Date;
    billValue: number;
    vehicle: Vehicle;

}
