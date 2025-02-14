var t = require("../../../common/vendor.js"),
  e = {
    name: "pagerLoaading",
    options: {
      styleIsolation: "shared"
    },
    props: {
      text: {
        type: String,
        default: function _default() {
          return "加载中，请稍后...";
        }
      }
    }
  };var o = t._export_sfc(e, [["render", function (e, o, n, r, a, s) {
  return {
    a: t.t(n.text)
  };
}], ["__scopeId", "data-v-2f5dfa42"]]);wx.createComponent(o);