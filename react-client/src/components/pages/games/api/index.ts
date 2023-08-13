import axios from "axios"

export interface IGame {
    id: number,
    team_B_id: number,
    team_A_id: number,
    team_A_Score: number,
    team_B_Score: number,
    game_time: Date ,

}
async function getGamesService(): Promise<Array<IGame>> {
    const { data, headers } = await axios.get(`http://localhost:4100/games`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    const games: Array<IGame> = data.map(p => {
const datetime = p.game_time
        return {
            id: +p.id,
            team_B_id: +p.team_B_id,
            team_A_id: +p.team_A_id,
            team_A_Score: +p.team_A_Score,
            team_B_Score: +p.team_B_Score,
            game_time: new Date(datetime).toLocaleString(),
          
        }
    })
    return games;
}






export { getGamesService }

