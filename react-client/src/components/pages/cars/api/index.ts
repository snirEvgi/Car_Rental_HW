import axios from "axios"

export interface ICar {
    id: number,
    car: string,
    lp: number,
    color: string,
    engine: string,
    image: string ,

}
async function getCarsService(): Promise<Array<ICar>> {
    const { data, headers } = await axios.get(`http://localhost:4100/cars`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    const car: Array<ICar> = data.map(p => {
        return {
            id: +p.id,
            car: p.car,
            lp: +p.lp,
            color: p.color,
            engine: p.engine,
            image: p.image
          
        }
    })
    return car;
}






export { getCarsService }

