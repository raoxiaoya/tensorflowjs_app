var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiBottomPopup",
    emits: ["close"],
    props: {
      mask: {
        type: Boolean,
        default: !0
      },
      show: {
        type: Boolean,
        default: !1
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      },
      height: {
        type: Number,
        default: 0
      },
      radius: {
        type: Boolean,
        default: !0
      },
      zIndex: {
        type: [Number, String],
        default: 997
      },
      maskZIndex: {
        type: [Number, String],
        default: 996
      },
      translateY: {
        type: String,
        default: "0"
      },
      isSafeArea: {
        type: Boolean,
        default: !0
      }
    },
    methods: {
      handleClose: function handleClose() {
        this.show && this.$emit("close", {});
      }
    }
  };var o = e._export_sfc(t, [["render", function (t, o, a, s, n, r) {
  return e.e({
    a: a.show ? 1 : "",
    b: a.radius ? 1 : "",
    c: a.isSafeArea ? 1 : "",
    d: a.backgroundColor,
    e: a.height ? a.height + "rpx" : "auto",
    f: a.zIndex,
    g: "translate3d(0, ".concat(a.show ? a.translateY : "100%", ", 0)"),
    h: a.mask
  }, a.mask ? {
    i: e.n(a.show ? "tui-mask-show" : ""),
    j: a.maskZIndex,
    k: e.o(function () {
      return r.handleClose && r.handleClose.apply(r, arguments);
    })
  } : {}, {
    l: e.o(function () {})
  });
}], ["__scopeId", "data-v-94eeb7cd"]]);wx.createComponent(o);