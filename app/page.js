import { DataForGainAndLos, fetchData } from "./Components/serverAction";
import Main from "./main";

export default async function Home(){
    const data = await fetchData()
    const GainAndLos = await DataForGainAndLos()
    return(
        <Main data={data} gainAndLos={GainAndLos}/>
    )
}