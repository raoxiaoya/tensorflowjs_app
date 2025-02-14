var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiDrawer",
    emits: ["close"],
    props: {
      visible: {
        type: Boolean,
        default: !1
      },
      mask: {
        type: Boolean,
        default: !0
      },
      maskClosable: {
        type: Boolean,
        default: !0
      },
      mode: {
        type: String,
        default: "right"
      },
      zIndex: {
        type: [Number, String],
        default: 990
      },
      maskZIndex: {
        type: [Number, String],
        default: 980
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      }
    },
    methods: {
      handleMaskClick: function handleMaskClick() {
        this.maskClosable && this.$emit("close", {});
      }
    }
  };var a = e._export_sfc(t, [["render", function (t, a, o, n, s, r) {
  return e.e({
    a: o.mask
  }, o.mask ? {
    b: o.visible ? 1 : "",
    c: o.maskZIndex,
    d: e.o(function () {
      return r.handleMaskClick && r.handleMaskClick.apply(r, arguments);
    })
  } : {}, {
    e: e.n("tui-drawer-container_".concat(o.mode)),
    f: e.n(o.visible ? "tui-drawer-".concat(o.mode, "__show") : ""),
    g: o.zIndex,
    h: o.backgroundColor
  });
}], ["__scopeId", "data-v-3751615e"]]);wx.createComponent(a);