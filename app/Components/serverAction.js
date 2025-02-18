
export const fetchData = async()=>{
    const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",{
        cache : "no-store"
    })
    const result = await data.json()
    return result

}