var t = require("../../../../common/vendor.js"),
  o = {
    name: "tuiNomore",
    props: {
      backgroundColor: {
        type: String,
        default: "#fafafa"
      },
      isDot: {
        type: Boolean,
        default: !1
      },
      text: {
        type: String,
        default: "没有更多了"
      }
    },
    data: function data() {
      return {
        dotText: "●"
      };
    }
  };var e = t._export_sfc(o, [["render", function (o, e, n, r, a, d) {
  return {
    a: t.t(n.isDot ? a.dotText : n.text),
    b: n.backgroundColor,
    c: t.n(n.isDot ? "tui-dot-text" : "tui-nomore-text"),
    d: t.n(n.isDot ? "tui-nomore-dot" : "tui-nomore")
  };
}], ["__scopeId", "data-v-e8e4cabc"]]);wx.createComponent(e);