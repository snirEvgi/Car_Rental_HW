import { useEffect, useState } from "react"
import { Header } from "../../ui-components/header";
import { IRent, getRentsService} from "./api";
import RentsTable from "./table";



export default function RentsPage() {
    const [rents, setRent] = useState<Array<IRent>>([])

    async function getRentsAction() {
        try {
            const result = await getRentsService()
            console.log(result, "Rents")
            setRent(result)
        } catch (error) {
            alert("error")
        }
    }

   
    useEffect(() => {
        getRentsAction()
        return () => {
            console.log("Unmount!")
        }
    }, [])
    
    return <div >
        <Header text="Rents"/>
        <RentsTable rents={rents} />
    </div>
}


