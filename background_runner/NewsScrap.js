import { XMLParser } from "fast-xml-parser";
import localForage from "localforage";
import * as cheerio from 'cheerio';



const NEWSURLS = [
    {
        newsTitle: "onlineKhabar",
        url:  "https://www.onlinekhabar.com/feed",
    }, 
    {
        newsTitle: "setopati",
        url:  "https://www.setopati.com/feed",
    },
    {
        newsTitle: "ratopati",
        url:  "https://www.ratopati.com/feed",
        newsImage: "https://npcdn.ratopati.com/media/setting/fav_WteZzVu6I7.png"
    },
    {
        newsTitle: "bizmandu",
        url: "https://bizmandu.com/feed"
    },
    {
        newsTitle: "bizkhabar",
        url: "https://www.bizkhabar.com/feed"
    },
    {
        newsTitle: "clickmandu",
        url: "https://clickmandu.com/feed",
        newsImage: "https://clickmandu.com/wp-content/themes/clickmanduah/img/click_logo.png"
    },
    {
        newsTitle: "arthasansar",
        url: "https://arthasansar.com/feeds"
    },
    {
        newsTitle: "ekantipur",
        url: "https://rsshub.app/ekantipur/news"
    },
    {
        newsTitle: "merolagani",
        url: "https://merolagani.com/NewsList.aspx",
        isRss: false
    },
    {
        newsTitle: "nagariknews",
        url: "https://nagariknews.nagariknetwork.com/feed"
    },
    {
        newsTitle: "annapurnapost",
        url: "https://www.annapurnapost.com/rss/"
    },
    {
        newsTitle: "gorkhapatraonline",
        url: "https://gorkhapatraonline.com/rss"
    },
    {
        newsTitle: "ujyaaloonline",
        url: "https://ujyaaloonline.com/rss/"
    }
    
  
];

async function parseRSSFeed(url) {
    try {
        const resp = await fetch(url);
        const text = await resp.text();
        const parser = new XMLParser();
        const feed = parser.parse(text);
        const title = feed?.rss?.channel?.title;
        const image = feed?.rss?.channel?.image?.url;
        const items = feed?.rss?.channel?.item;
        return {
            title,
            image,
            items
        };
    } catch (err) {
        return null;
    }
}




async function parseMerolagani() {
    const resp = await fetch("https://merolagani.com/NewsList.aspx")
    const data = await resp.text()
    const $ = cheerio.load(data);
    const newsRows = $(".news-list .row")
    let items = []
    newsRows.each((_, elm) => {
        const titleElm = $(elm).find(".media-title").find("a")
        const url = titleElm.attr()["href"]
        const pubDate = $(elm).find(".media-label").text().trim()
        const gmtDate = new Date(pubDate.split("\n")[0]).toUTCString().replace("GMT", "+0000")
        const image = $(elm).find("img").attr()?.src
        const item = {
            title: titleElm.text().trim(),
            link: `https://merolagani.com${url}`,
            pubDate: gmtDate,
            image
        }
        items.push(item)
    })
    return {
        title: "merolagani",
        image: "https://merolagani.com/Content/images/merolagani.png",
        items
    }
    
}




async function getNewsList(urls) {
    const newsList = await Promise.all(
        urls.map(async (url) => {
            
            let feed = null
            if (url.isRss != undefined && !url.isRss) {
                feed = await parseMerolagani()
            } else {
                feed = await parseRSSFeed(url.url);
            }
            if (feed) {
                feed.newsTitle = url.newsTitle
                url.newsImage != undefined && (feed.newsImage =  url.newsImage)
                url.newsTitle === "setopati" && (feed.image = "https://www.setopati.com/themes/setopati/images/logo.svg?v=1.9")
                url.newsTitle === "clickmandu" && (feed.image = "https://yt3.ggpht.com/QoE5aYQPVU-rFcW5Z7SORsjgqI-InK5iGzeC5EkrEX2dWePVJ27Jh9DtQVA_9FnHOgmVlnY-qe0=s68-c-k-c0x00ffffff-no-rj")
            }
            return feed; // This will be null if parsing fails
        })
    );
    // Filter out null values and return the valid feeds
    return newsList.filter(feed => feed !== null);
}

export async function scrapNewsFromFeed() {
    
    parseMerolagani()
    const newsList = await getNewsList(NEWSURLS);
    if (newsList.length > 1) {
        localForage.setItem("news_list", newsList);
        return newsList
    }
    return []
}