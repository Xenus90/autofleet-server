import pointInPolygon from 'point-in-polygon';
import { Vehicle } from '../models/vehicle.model';

const vehicles: Vehicle[] = require('../data/vehicles-location.json');

export default class VehiclesService {
    static getVehicles() {
        try {
            console.log(`Found vehicles: ${vehicles.length}`);
            return vehicles;
        } catch (error) {
            console.log(`Error reading vehicles file. Reason: ${error.message}`);
        }
    }

    static async getAreaVehicles(area: number[][]) {
        try {
            const vehiclesWithinArea = vehicles.filter(vehicle => {
                const { lat, lng } = vehicle.location;
                return pointInPolygon([lat, lng], area);
            });
            console.log(`Found vehicles: ${vehiclesWithinArea.length}/${vehicles.length}`);
            return vehiclesWithinArea;
        } catch (error) {
            console.log(`Error finding vehicles within area. Reason: ${error.message}`);
        }
    }
}
