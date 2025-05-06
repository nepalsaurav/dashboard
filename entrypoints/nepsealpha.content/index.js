import "./style.css"
import injectCssString from "./inject.css?raw"

import { storage } from '#imports';

export default defineContentScript({
    matches: ["https://www.nepsealpha.com/*"],
    allFrames: true,
    async main(ctx) {

        if (!ctx.isTopFrame) {
            const style = document.createElement("style")
            style.textContent = injectCssString
            document.head.appendChild(style)
            // change theme
            const theme = await storage.getItem("local:theme")
            console.log(theme)
            document.body.style.display = "block"
            

            setTimeout(() => {
                if (theme === "dark") {
                    document.body.classList.replace("light-nepse", "dark-nepse")
                    console.log(document.body)
                } else {
                
                    document.body.classList.replace("dark-nepse", "light-nepse")
                }
            }, 1000)

        } else {
            document.body.style.display = "block"
        }

    },
})