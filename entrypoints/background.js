
import { scrapNewsFromFeed } from "@/background_runner/NewsScrap";
import localForage from "localforage";
import { onMessage } from "webext-bridge/background";
import { browser } from 'wxt/browser';



export default defineBackground(() => {
  scrapNewsFromFeed();
  setInterval(() => {
    scrapNewsFromFeed()
  }, 50000)
  onMessage("get_news_list", async () => {
    const news = await localForage.getItem("news_list");
    return news
  })
  onMessage("refetch_news_list", async () => {
    return await scrapNewsFromFeed()
  })

  onMessage("get_news_content", async (msg) => {
    const resp = await fetch(msg.data.url)
    const content = await resp.text()
    return content
  })

  browser.action.onClicked.addListener(() => {
    const url = browser.runtime.getURL("dashboard.html#/widget/home");
    browser.tabs.create({ url });
  });


});



