import { Router } from "express";
import VehiclesController from "../controllers/vehicles.controller";

export default class MainRouter {
    static generateRouter(): Router {
        const router = Router();

        router.get('/vehicles', VehiclesController.getVehicles);
        router.post('/vehicles', VehiclesController.getAreaVehicles);

        return router;
    }
}
