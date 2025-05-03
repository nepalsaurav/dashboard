export async function getMarketStatus() {
    try {
        const resp = await fetch("https://www.onlinekhabar.com/smtm/home/market-status")
        const data = await resp.json()
        const status = data.response.market_live ? "Market open" : "Market close"
        return status
    } catch {
        return "error fetching"
    }
}