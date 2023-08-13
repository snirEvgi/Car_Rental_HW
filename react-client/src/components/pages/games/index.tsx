import { useEffect, useState } from "react"
import { Header } from "../../ui-components/header";
import { IGame, getGamesService} from "./api";
import GamesTable from "./table";



export default function GamePage() {
    const [games, setGames] = useState<Array<IGame>>([])

    async function getGamesAction() {
        try {
            const result = await getGamesService()
            console.log(result, "games")
            setGames(result)
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
        <Header text="Games"/>
        <GamesTable games={games} />
    </div>
}


