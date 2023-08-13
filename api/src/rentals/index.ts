
import express, { Request, Response, NextFunction } from "express"
import { getAllRentedCars } from "./handlers/getAllRentedCars";
import { checkCarExists } from "./handlers/checkCarExists";
import { createNewRent } from "./handlers/createNewRent";
const rentRouter = express.Router();

rentRouter.get("/", getRentedCars)
rentRouter.post("/rent", RentCar)
 

 
async function getRentedCars(req: Request, res: Response, next: NextFunction) {
    try {
        const results = await getAllRentedCars()
        // console.log(results);
        res.json(results)
    } catch (error) {
        console.log(error);
        
        return next(error)
    }
}

 async function RentCar(req: Request, res: Response, next: NextFunction) {
  try {
    const {  carId, from, to, price, pricePerDay } = req.body;
    const carExists = await checkCarExists(carId);

    if (!carExists) {
      return res.status(400).json({ error: "Car do not exist." });
    }
    const result = await createNewRent(carId, from, to, price, pricePerDay);
    return res.json(result);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};




export { rentRouter };