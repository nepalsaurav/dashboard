export async function getTickerPrice(ticker) {
    try {
         const resp = await fetch(`https://www.onlinekhabar.com/smtm/ticker-page/ticker-stats/${ticker}`)
         const data = await resp.json()
         return {
            ltp: data.response.ltp,
            pointChange: data.response.point_change,
            percentChange: data.response.percentage_change,
            volume: data.response.volume,
            tradedQtd: data.response.shares_traded,
            marketCap: data.response.market_cap
         }
    } catch (err) {
        throw err
    }
}