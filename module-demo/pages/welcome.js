var o = require("../../common/vendor.js"),
  e = require("../../common/assets.js"),
  r = {
    data: function data() {
      return {};
    },
    methods: {
      onNavSport: function onNavSport() {
        o.index.navigateTo({
          url: "./index",
          fail: function fail(o) {
            console.log(o);
          }
        });
      }
    },
    onLoad: function onLoad(o) {},
    onShareAppMessage: function onShareAppMessage() {
      return {
        path: "module-sport/pages/boot-plugin?redirectUrl=/module-demo/pages/welcome",
        title: "云智AI运动识别插件，功能展示，欢迎体验"
      };
    }
  };var t = o._export_sfc(r, [["render", function (r, t, n, s, a, i) {
  return {
    a: e._imports_0$2,
    b: o.o(function () {
      return i.onNavSport && i.onNavSport.apply(i, arguments);
    })
  };
}]]);r.__runtimeHooks = 2, wx.createPage(t);