var e = require("../../../common/vendor.js"),
  t = {
    name: "copyright",
    options: {
      styleIsolation: "shared"
    },
    props: {
      fixed: {
        type: Boolean,
        default: !0
      }
    },
    data: function data() {
      return {
        title: e.index.$appConfig.copyright
      };
    }
  };if (!Array) {
  e.resolveComponent("tui-footer")();
}Math;var o = e._export_sfc(t, [["render", function (t, o, r, n, i, p) {
  return {
    a: e.p({
      copyright: i.title,
      fixed: r.fixed
    })
  };
}]]);wx.createComponent(o);