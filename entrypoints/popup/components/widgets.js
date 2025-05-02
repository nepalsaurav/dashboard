import {tickerForOptions} from "./utils/tickers.js"

export const widgetOptions = [
    {
        type: "single_ticker_widget",
        label: "Single Ticker Widget",
        isSelect: true,
        selectPlaceHolder: "select ticker",
        alertPlaceholder: "plsease select ticker",
        selectOptions: tickerForOptions,
        x: 0, 
        y: 0, 
        w: 2, 
        h: 4, 
        static: false,
        widgetTitle: "Price"
    },
    {
        type: "youtube_video_embed",
        label: "Youtube Video Embed",
        isSelect: true,
        selectPlaceHolder: "input youtube url",
        alertPlaceholder: "please input youtube url",
        selectOptions: [],
        x: 0, 
        y: 0, 
        w: 6, 
        h: 6,
        static: false,
        widgetTitle: "Youtube"
    },
    {
        type: "candle_stick_chart",
        label: "Candle Stick Chart",
        isSelect: true,
        selectPlaceHolder: "select ticker",
        alertPlaceholder: "plsease select ticker",
        selectOptions: tickerForOptions,
        x: 0, 
        y: 0, 
        w: 6, 
        h: 6,
        static: false,
        widgetTitle: "Candlestick Chart"
    },

    {
        type: "ticker_tape",
        label: "Ticker Tape",
        isSelect: false,
        x: 0, 
        y: 0, 
        w: 6, 
        h: 6,
        static: false,
        widgetTitle: "Ticker Tape"
    },

    {
        type: "top_stories",
        label: "Top Stories",
        isSelect: false,
        x: 0, 
        y: 0, 
        w: 6, 
        h: 6,
        static: false,
        widgetTitle: "Top Stories"
    },
    {
        type: "financial_details",
        label: "Financial Details",
        isSelect: true,
        selectPlaceHolder: "select ticker",
        alertPlaceholder: "plsease select ticker",
        selectOptions: tickerForOptions,
        x: 0, 
        y: 0, 
        w: 6, 
        h: 6,
        static: false,
        widgetTitle: "Financial Details"
    },
    {
        type: "ipo_corner",
        label: "IPO Corner",
        isSelect: false,
        x: 0, 
        y: 0, 
        w: 6, 
        h: 6,
        static: false,
        widgetTitle: "IPO Corner"
    },
]