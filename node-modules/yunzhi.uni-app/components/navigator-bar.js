var t = require("../../../common/vendor.js"),
  e = {
    name: "navigatorBar",
    options: {
      styleIsolation: "shared"
    },
    props: {
      title: {
        type: String,
        default: null
      },
      white: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        rect: t.index.getMenuButtonBoundingClientRect()
      };
    },
    computed: {
      styles: function styles() {
        var e = t.index.getWindowInfo();
        return "top:".concat(this.rect.top, "px; height:").concat(this.rect.height, ";padding: 0 ").concat(e.windowWidth - this.rect.right, "px; line-height:").concat(this.rect.height, "px;");
      }
    },
    methods: {
      onNavBack: function onNavBack() {
        t.index.navigateBack({
          fail: function fail() {
            t.index.switchTab({
              url: "/pages/main/home"
            });
          }
        });
      }
    }
  };if (!Array) {
  t.resolveComponent("iconfont")();
}Math;var n = t._export_sfc(e, [["render", function (e, n, o, i, a, r) {
  return {
    a: t.p({
      name: "arrow-left"
    }),
    b: t.o(function () {
      return r.onNavBack && r.onNavBack.apply(r, arguments);
    }),
    c: t.t(o.title),
    d: o.white ? 1 : "",
    e: t.s(r.styles)
  };
}]]);wx.createComponent(n);