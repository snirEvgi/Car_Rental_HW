import axios from "axios"

export interface IRent {
    rentId: number,
    carId: number,
    from: string,
    to: string,
    price: number,
    pricePerDay: number ,
}
async function getRentsService(): Promise<Array<IRent>> {
    const { data, headers } = await axios.get(`http://localhost:4100/rentals`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    const rent: Array<IRent> = data.map(p => {
        return {
            rentId: +p.rentId,
            carId: +p.carId,
            from: p.from,
            to: p.to,
            price: +p.price,
            pricePerDay: +p.pricePerDay
          
        }
    })
    return rent;
}






export { getRentsService }

