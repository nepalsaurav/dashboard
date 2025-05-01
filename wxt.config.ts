import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    permissions: ["declarativeNetRequest"],
    host_permissions: ["<all_urls>"],

    declarative_net_request: {
      "rule_resources": [{
        "id": "remove_xframe_header",
        "enabled": true,
        "path": "rules/remove_xframe.json"
      }]
    },
  }
});
