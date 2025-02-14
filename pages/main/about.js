var e = require("../../config.js"),
  t = require("../../common/vendor.js"),
  r = require("../../common/assets.js"),
  o = {
    data: function data() {
      return {
        title: e.config.title,
        version: "".concat(e.config.version.short, " ").concat(e.config.version.rc)
      };
    },
    methods: {
      onShareAppMessage: function onShareAppMessage() {
        return this.$utils.getShareInfo();
      }
    }
  };if (!Array) {
  t.resolveComponent("copyright")();
}Math;var s = t._export_sfc(o, [["render", function (e, o, s, i, n, c) {
  return {
    a: r._imports_0,
    b: t.t(n.title),
    c: t.t(n.version),
    d: t.t(n.title),
    e: t.p({
      fixed: !1
    })
  };
}], ["__scopeId", "data-v-c4829b60"]]);o.__runtimeHooks = 2, wx.createPage(s);