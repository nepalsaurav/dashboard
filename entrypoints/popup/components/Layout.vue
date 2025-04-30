<script setup>
import Headers from './Headers.vue';
import SideBar from './SideBar.vue';
</script>

<template>
    <div id="App" class="light" data-theme="light">
        <div id="Layout">
            <Headers/>
            <div id="Container">
                <SideBar/>
                <div id="BoardContainer">
                    <div id="Board" data-testid="Board">



                        <!-- <div class="react-grid-layout layout" style="height: 1630px;">
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 125px; position: absolute; transform: translate(10px, 10px);">
                                <div class="widget ChartBoxWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Prices</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 72px;">
                                                    <iframe scrolling="no" allowtransparency="true" frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="ticker tape TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 72px; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 125px; position: absolute; transform: translate(10px, 415px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Ticker - CAPITALCOM:DXY</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 126px;">
                                                    <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22CAPITALCOM%3ADXY%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A126%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="single quote TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 125px; position: absolute; transform: translate(10px, 145px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Ticker - USDTRY</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 126px;">
                                                   <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22USDTRY%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A126%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="single quote TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 758px; height: 755px; position: absolute; transform: translate(558px, 10px);">
                                <div class="widget ChartBoxWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Chart - BTCUSDT</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper" style="height: 100%;">
                                            <div id="tradingview_4ba86" style="height: 100%;">
                                                <div id="tradingview_3000d-wrapper"
                                                    style="position: relative; box-sizing: content-box; font-family: -apple-system, BlinkMacSystemFont, &quot;Trebuchet MS&quot;, Roboto, Ubuntu, sans-serif; margin: 0px auto !important; padding: 0px !important; width: 100%; height: 100%;">
                                                    <iframe title="advanced chart TradingView widget" lang="en"
                                                        id="tradingview_3000d" frameborder="0" allowtransparency="true"
                                                        scrolling="no" allowfullscreen="true"
                                                        src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22BTCUSDT%22%2C%22frameElementId%22%3A%22tradingview_3000d%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22UTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22BTCUSDT%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 350px; position: absolute; transform: translate(284px, 640px);">
                                <div class="widget NewsWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Crypto News</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content"><iframe title="Ctypto News" width="100%" height="100%"
                                            style="border: 0px;"
                                            src="https://cryptopanic.com/widgets/news/?bg_color=ffffff00&amp;amp;font_family=sans&amp;amp;font_size=12&amp;amp;header_bg_color=30343B00&amp;amp;header_text_color=000000&amp;amp;link_color=000000&amp;amp;news_feed=recent&amp;amp;posts_limit=50&amp;amp;text_color=000000&amp;amp;title=Latest%20Crypto%20News"></iframe>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 350px; position: absolute; transform: translate(10px, 685px);">
                                <div class="widget FearAndGreedWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Fear And Greed</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content"><img
                                            src="https://alternative.me/crypto/fear-and-greed-index.png"
                                            alt="Latest Crypto Fear &amp; Greed Index"
                                            style="width: 100%; height: 100%;"></div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 125px; position: absolute; transform: translate(10px, 550px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Ticker - VIX</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 126px;">
                                                   <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22VIX%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A126%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="single quote TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 125px; position: absolute; transform: translate(284px, 100px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Ticker - ethUSDT</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 126px;">
                                                  <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22ethUSDT%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A126%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="single quote TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 125px; position: absolute; transform: translate(284px, 235px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Ticker - BTCUSDT</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 126px;">
                                            
                                                  <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22BTCUSDT%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A126%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="single quote TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 125px; position: absolute; transform: translate(284px, 370px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Ticker - BTC.D</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 126px;">
                                                   <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22BTC.D%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A126%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="single quote TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 125px; position: absolute; transform: translate(284px, 505px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Ticker - TOTAL</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 126px;">
                                                    <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22TOTAL%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A126%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="single quote TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 305px; position: absolute; transform: translate(10px, 1045px);">
                                <div class="widget NoteWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Note - My Notes</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content"><input class="note_title" placeholder="Note Title"
                                            value="My Notes"><textarea spellcheck="false" class="note_content"
                                            placeholder="I bought 1 BTC when it was $1">My awesome notes..</textarea>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 319px; height: 440px; position: absolute; transform: translate(558px, 775px);">
                                <div class="widget PodcastsWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Podcasts</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content"><iframe
                                            src="https://open.spotify.com/embed/show/2Yvo8QxZf7WlSEsIwKjtX4?utm_source=generator&amp;theme=1"
                                            width="100%" height="152"
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy" title="podcast1"
                                            style="border-radius: 12px; border: 0px;"></iframe><br><iframe
                                            src="https://open.spotify.com/embed/show/4M5Gb71lskQ0Rg6e08uQhi?utm_source=generator&amp;theme=1"
                                            width="100%" height="152"
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy" title="podcast2"
                                            style="border-radius: 12px; border: 0px;"></iframe><br><iframe
                                            src="https://open.spotify.com/embed/show/7LYeomavBzwgQhJos7qrms?utm_source=generator&amp;theme=1"
                                            width="100%" height="152"
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy" title="podcast3"
                                            style="border-radius: 12px; border: 0px;"></iframe></div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 125px; position: absolute; transform: translate(10px, 280px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Ticker - EURTRY</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 126px;">
                                                   <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22EURTRY%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A126%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="single quote TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 440px; position: absolute; transform: translate(284px, 1000px);">
                                <div class="widget TechnicalAnalysisWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Technical Analysis - BTCUSDT</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 450px;">
                                                    <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221W%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A450%2C%22isTransparent%22%3Atrue%2C%22symbol%22%3A%22BTCUSDT%22%2C%22showIntervalTabs%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="technical analysis TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 209px; height: 125px; position: absolute; transform: translate(558px, 1225px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Ticker - CFXUSDT</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper">
                                            <div>
                                                <div style="width: 100%; height: 126px;">
                                                   <iframe scrolling="no" allowtransparency="true"
                                                        frameborder="0"
                                                        src="https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22CFXUSDT%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A126%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        title="single quote TradingView widget" lang="en"
                                                        style="user-select: none; box-sizing: border-box; display: block; height: 100%; width: 100%;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 538px; height: 395px; position: absolute; transform: translate(778px, 1225px);">
                                <div class="widget ChartBoxWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Chart - CFXUSDT</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div id="tradingview_widget_wrapper" style="height: 100%;">
                                            <div id="tradingview_157c1" style="height: 100%;">
                                                <div id="tradingview_d68d9-wrapper"
                                                    style="position: relative; box-sizing: content-box; font-family: -apple-system, BlinkMacSystemFont, &quot;Trebuchet MS&quot;, Roboto, Ubuntu, sans-serif; margin: 0px auto !important; padding: 0px !important; width: 100%; height: 100%;">
                                                    <iframe title="advanced chart TradingView widget" lang="en"
                                                        id="tradingview_d68d9" frameborder="0" allowtransparency="true"
                                                        scrolling="no" allowfullscreen="true"
                                                        src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22CFXUSDT%22%2C%22frameElementId%22%3A%22tradingview_d68d9%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22UTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22in.vester.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22CFXUSDT%22%2C%22page-uri%22%3A%22in.vester.app%2F%22%7D"
                                                        style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 429px; height: 440px; position: absolute; transform: translate(887px, 775px);">
                                <div class="widget TickerWidget">
                                    <div class="header">
                                        <div class="widgetTitle">TV Box - Bloomberg (Turkish)</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content"><iframe class="d-grid" width="100%" height="100%"
                                            src="https://www.youtube-nocookie.com/embed/hHSmBJk6w0c?autoplay=1&amp;mute=1&amp;cc_load_policy=1"
                                            title="Bloomberg (Turkish)"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            style="border: 0px;"></iframe></div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                            <div data-testid="Widget"
                                class="react-grid-item react-draggable cssTransforms react-resizable"
                                style="width: 264px; height: 80px; position: absolute; transform: translate(284px, 10px);">
                                <div class="widget BTCHalvingWidget">
                                    <div class="header">
                                        <div class="widgetTitle">Next BTC Halving</div>
                                        <div class="widgetButtons">
                                            <div style="cursor: pointer; padding-left: 5px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <p>0 days, 0 hours,<br>0 minutes, 0 seconds left</p>
                                    </div>
                                </div><span class="react-resizable-handle react-resizable-handle-s"></span><span
                                    class="react-resizable-handle react-resizable-handle-se"></span><span
                                    class="react-resizable-handle react-resizable-handle-e"></span>
                            </div>
                        </div> -->


                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

