import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    permissions: ["declarativeNetRequest", "offscreen", "storage"],
    host_permissions: ["<all_urls>"],


    declarative_net_request: {
      "rule_resources": [{
        "id": "remove_xframe_header",
        "enabled": true,
        "path": "rules/remove_xframe.json"
      }]
    },

    "content_security_policy": {
      "sandbox": "sandbox allow-scripts; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https: http:;"
    },

    "sandbox": {
      "pages": [
        "heatmap/heatmap.html"
      ]
    },

    // "offscreen_documents": [
    //   {
    //     "url": "offscreen.html",
    //     "reasons": ["DOM_SCRAPING"],
    //     "justification": "Load an iframe for background communication or data extraction."
    //   }
    // ]


  }
});
