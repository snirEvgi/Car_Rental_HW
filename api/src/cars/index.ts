
import express, { Request, Response, NextFunction } from "express"
import { getAllCars } from "./handlers/getAllCars";
import { addNewCar } from "./handlers/addNewCar";

const carsRouter = express.Router();

carsRouter.get("/", getGames)
carsRouter.post("/newCar", createCar)

 
async function getGames(req: Request, res: Response, next: NextFunction) {
    try {
        const results = await getAllCars()
        // console.log(
        res.json(results)
    } catch (error) {
        console.log(error);
        
        return next(error)
    }
}
async function createCar(req: Request, res: Response, next: NextFunction) {
    const {  car, lp, color, engine, company, image } = req.body 
    
    try {
        const result = await addNewCar(car as string,lp as number,color as string,engine as string,company as string,image as string);
        return res.json(result);
      } catch (error) {
        console.log(error);
        return next(error);
      }
    
}





export { carsRouter };