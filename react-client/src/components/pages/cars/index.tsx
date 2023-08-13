import { useEffect, useState } from "react"
import { Header } from "../../ui-components/header";
import { ICar, getCarsService} from "./api";
import CarsTable from "./table";
import RemoveCar from "../removeCar";



export default function CarsPage() {
    const [cars, setCars] = useState<Array<ICar>>([])

    async function getGamesAction() {
        try {
            const result = await getCarsService()
            console.log(result, "cars")
            setCars(result)
        } catch (error) {
            alert("error")
        }
    }

   
    useEffect(() => {
        getGamesAction()
        return () => {
            console.log("Unmount!")
        }
    }, [])
    
    return <div >
        <Header text="Cars"/>
        <RemoveCar/>
        <CarsTable cars={cars} />
    </div>
}


