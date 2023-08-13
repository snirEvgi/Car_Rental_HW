import { pool } from "../../database";

async function removeCar(carId: number) {
    const query = `
        DELETE FROM carrentals.cars
        WHERE id = ?;
    `;

    const results = await pool.execute(query, [carId]);
    return results; }

export { removeCar };
