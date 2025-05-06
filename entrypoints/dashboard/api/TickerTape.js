export async function getTickerTape() {
    try {
         const resp = await fetch(`https://www.onlinekhabar.com/smtm/home/trending`)
         const data = await resp.json()
         const returnData = data.response.map((e) => {
            return {
                ticker: e.ticker,
                name: e.ticker_name,
                ltp: e.latest_price,
                change: e.points_change,
                percent: e.percentage_change,
                marketCap: e.traded_of_mkt_cap
            }
         })
         return returnData
    } catch (err) {
        throw err
    }
}
