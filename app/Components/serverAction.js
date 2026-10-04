
export const fetchData = async()=>{
    const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",{
        cache : "no-store"
    })
    const result = await data.json()
    return result

}


export const DataForGainAndLos = async()=>{
    const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",{
        cache : "no-store"
    })
    const result = await data.json()
    return result

}

export const totalMarketData = async()=>{
    const data = await fetch("https://api.coingecko.com/api/v3/global",{
        cache : "no-store"
    })
    const result = await data.json()
    return result.data
}

export const fearAndGreedIndexData= async()=>{
    const data = await fetch("https://api.alternative.me/fng/",{
        cache : "no-store"
    })
    const result = await data.json()
    return result
}