Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});var o = require("./common/vendor.js"),
  t = require("./config.js");require("./components/thorui-config.js"), Math;var e = {
  onLaunch: function onLaunch() {},
  onShow: function onShow() {},
  onHide: function onHide() {}
};function n() {
  var n = o.createSSRApp(e),
    i = n.config.globalProperties;
  return i.$appTitle = t.config.title, i.$filters = {
    formatDate: o.utils.formatDate,
    formatThousands: o.utils.formatThousands,
    maskPrivacy: o.utils.maskPrivacy
  }, {
    app: n
  };
}o.apisConfig.configure(), n().app.mount("#app"), exports.createApp = n;