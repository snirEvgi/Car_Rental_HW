
import { pool } from "../../database/"


async function getAllCars() {
    const query = `
    SELECT * FROM carrentals.cars;
    `;
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getAllCars }


