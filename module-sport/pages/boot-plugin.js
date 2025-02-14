var e = require("../../common/vendor.js");require("../index.js");var r = require("../../common/assets.js"),
  i = {
    data: function data() {
      return {};
    },
    methods: {},
    onLoad: function onLoad(r) {
      e.index.aiSportPlugin || (e.index.$aiSportPlugin = requirePlugin("aiSport"));
      var i = r.redirectUrl || "/pages/main/home";
      e.index.redirectTo({
        url: i
      });
    }
  };var n = e._export_sfc(i, [["render", function (e, i, n, o, t, s) {
  return {
    a: r._imports_0
  };
}]]);wx.createPage(n);