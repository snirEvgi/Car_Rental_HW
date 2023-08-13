import { pool } from "../../database";

async function rentalValidate(carId: string, from: string, to: string) {
  const query =
    "SELECT * FROM carrentals.rentals WHERE carId = ? AND ? < to AND ? > from";

  const results = await pool.execute(query, [carId, from, to]);
  const [data] = results;

  return (data as any).length !== 0;
}

export { rentalValidate };