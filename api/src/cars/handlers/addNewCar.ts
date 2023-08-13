
import { pool } from "../../database"


async function addNewCar(car: string, lp: number, color: string, engine: string,company:string,image:string) {

    const query = `
    INSERT INTO carrentals.cars (car, lp, color, engine, company, image)
    VALUES (?, ?, ?, ?, ?, ?);
`;
    const results = await pool.execute(query, [car, lp, color, engine,company,image]);
    const [data] = results;
    return data;
}

export { addNewCar }


