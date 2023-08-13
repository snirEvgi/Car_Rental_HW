
import { pool } from "../../database"


async function getAllRentedCars() {
    const query = `
    SELECT * FROM carrentals.rentals;
  `;
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getAllRentedCars }


