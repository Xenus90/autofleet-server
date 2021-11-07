import { Request, Response } from 'express';
import Validator from '../validators/index';
import VehiclesService from '../services/vehicles.service';

export default class VehiclesController {
    static getVehicles(req: Request, res: Response) {
        const vehicles = VehiclesService.getVehicles();
        res.status(200).json({ vehicles });
    }

    static async getAreaVehicles(req: Request, res: Response) {
        if (Validator.areaVehiclesData(req.body)) {
            const vehicles = await VehiclesService.getAreaVehicles(req.body);
            res.status(200).json({ vehicles });
        } else {
            res.status(400).json({ message: "Wrong data format. Example: [ [1,2], [3,4], [5,6], [7,8] ]" });
        }
    }
}
