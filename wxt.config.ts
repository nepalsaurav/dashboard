import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  manifest: {

    name: "Dashboard App",
    description: "Dashboard app, which provides widget to add in your database (helpful for nepse based trader and inverster)",
    permissions: ["declarativeNetRequest", "storage", "tabs"],
    host_permissions: ["<all_urls>"],


    action: {},
  

    declarative_net_request: {
      "rule_resources": [{
        "id": "remove_xframe_header",
        "enabled": true,
        "path": "rules/remove_xframe.json"
      }]
    },

  }
});
