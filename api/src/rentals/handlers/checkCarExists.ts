import { pool } from "../../database";

async function checkCarExists(carId: number) {
  const query = `SELECT * FROM carrentals.cars WHERE id = ?;`

  const results = await pool.execute(query, [carId]);
  const [data] = results;

  if ((data as any).length !== 0) {
    return true;
  } else {
    return false;
  }
}

export { checkCarExists };