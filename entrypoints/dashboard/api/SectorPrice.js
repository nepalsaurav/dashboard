export async function getSectorPrice() {
    try {
        const response = await fetch("https://www.onlinekhabar.com/smtm/home/sector-performance")
        const data = await response.json()
        return {
            msgType: "success",
            data: data.response.map((e) => {
                return {
                    indices: e.indices,
                    turnover: e.turnover,
                    pctChange: e.percentage_change,
                    pointChange: e.points_change,
                    advancers: e.advancers,
                    decliners: e.decliners,
                    ltp: e.latest_point
                }

            })
        }
    } catch (err) {
        return {
            msgType: "failed",
            msg: err
        }
    }
}