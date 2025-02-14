var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiModal",
    emits: ["click", "cancel"],
    props: {
      show: {
        type: Boolean,
        default: !1
      },
      width: {
        type: String,
        default: "84%"
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      },
      padding: {
        type: String,
        default: "40rpx 64rpx"
      },
      radius: {
        type: String,
        default: "24rpx"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#999"
      },
      size: {
        type: Number,
        default: 28
      },
      shape: {
        type: String,
        default: "square"
      },
      button: {
        type: Array,
        default: function _default() {
          return [{
            text: "取消",
            type: "red",
            plain: !0
          }, {
            text: "确定",
            type: "red",
            plain: !1
          }];
        }
      },
      maskClosable: {
        type: Boolean,
        default: !0
      },
      isMask: {
        type: Boolean,
        default: !0
      },
      maskColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.6)"
      },
      fadeIn: {
        type: Boolean,
        default: !1
      },
      custom: {
        type: Boolean,
        default: !1
      },
      zIndex: {
        type: Number,
        default: 9997
      },
      maskZIndex: {
        type: Number,
        default: 9990
      }
    },
    data: function data() {
      return {};
    },
    methods: {
      getColor: function getColor(t, n, a) {
        var r = e.index && e.index.$tui && e.index.$tui.color;
        var i = {
          primary: r && r.primary || "#5677fc",
          green: r && r.success || "#07c160",
          warning: r && r.warning || "#ff7900",
          danger: r && r.danger || "#EB0909",
          red: r && r.danger || "#EB0909",
          pink: r && r.pink || "#f74d54",
          white: n ? "#fff" : "#333",
          gray: n ? "#ededed" : "#999"
        }[t || "primary"];
        return n && a && (i = "transparent"), i;
      },
      getTextColor: function getTextColor(t, n) {
        var a = e.index && e.index.$tui && e.index.$tui.color;
        var r = {
          primary: a && a.primary || "#5677fc",
          green: a && a.success || "#07c160",
          warning: a && a.warning || "#ff7900",
          danger: a && a.danger || "#EB0909",
          red: a && a.danger || "#EB0909",
          pink: a && a.pink || "#f74d54",
          white: "#333",
          gray: "#999"
        }[t || "primary"];
        return n || "white" === t || "gray" === t || (r = "#fff"), r;
      },
      handleClick: function handleClick(e) {
        this.show && this.$emit("click", {
          index: Number(e)
        });
      },
      handleClickCancel: function handleClickCancel() {
        this.maskClosable && this.$emit("cancel");
      }
    }
  };var n = e._export_sfc(t, [["render", function (t, n, a, r, i, l) {
  return e.e({
    a: !a.custom
  }, a.custom ? {} : e.e({
    b: a.title
  }, a.title ? {
    c: e.t(a.title)
  } : {}, {
    d: e.t(a.content),
    e: e.n(a.title ? "" : "tui-mtop"),
    f: a.color,
    g: a.size + "rpx",
    h: e.f(a.button, function (t, n, r) {
      return e.e({
        a: e.t(t.text || "确定"),
        b: t.plain
      }, t.plain ? {
        c: e.n("circle" == a.shape ? "tui-circle-border" : ""),
        d: l.getColor(t.type)
      } : {}, {
        e: n,
        f: l.getColor(t.type, !0, t.plain),
        g: l.getTextColor(t.type, t.plain),
        h: e.o(function (e) {
          return l.handleClick(n);
        }, n)
      });
    }),
    i: e.n(2 != a.button.length ? "tui-btn-width" : ""),
    j: e.n(a.button.length > 2 ? "tui-mbtm" : ""),
    k: e.n("circle" == a.shape ? "tui-circle-btn" : ""),
    l: e.n(2 != a.button.length ? "tui-flex-column" : "")
  }), {
    m: a.width,
    n: a.padding,
    o: a.radius,
    p: a.backgroundColor,
    q: a.zIndex + 1,
    r: e.n(a.fadeIn || a.show ? "tui-modal-normal" : "tui-modal-scale"),
    s: e.n(a.show ? "tui-modal-show" : ""),
    t: a.isMask
  }, a.isMask ? {
    v: e.n(a.show ? "tui-mask-show" : ""),
    w: a.maskZIndex,
    x: a.maskColor,
    y: e.o(function () {
      return l.handleClickCancel && l.handleClickCancel.apply(l, arguments);
    })
  } : {}, {
    z: e.n(a.show ? "tui-modal-show" : ""),
    A: a.zIndex,
    B: e.o(function () {})
  });
}], ["__scopeId", "data-v-6c47dbea"]]);wx.createComponent(n);