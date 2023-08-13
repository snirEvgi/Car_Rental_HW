
import { pool } from "../../database"


async function createNewRent(carId: number, from: string, to: string, price: number,pricePerDay:string) {

    const query = `
    INSERT INTO carrentals.rentals (carId, \`from\`, \`to\`, price, pricePerDay) VALUES (?, ?, ?, ?, ?);
`;  
    const results = await pool.execute(query, [carId, from, to, price, pricePerDay]);
    const [data] = results;
    return data;
}

export { createNewRent }


