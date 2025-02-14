var t = require("../../../../common/vendor.js"),
  e = {
    name: "tuiNoData",
    emits: ["click"],
    props: {
      fixed: {
        type: Boolean,
        default: !0
      },
      imgUrl: {
        type: String,
        default: ""
      },
      imgWidth: {
        type: [Number, String],
        default: 200
      },
      imgHeight: {
        type: [Number, String],
        default: 200
      },
      imgBottom: {
        type: [Number, String],
        default: 30
      },
      btnWidth: {
        type: [Number, String],
        default: 200
      },
      btnHeight: {
        type: [Number, String],
        default: 60
      },
      btnText: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: 28
      },
      radius: {
        type: String,
        default: "8rpx"
      },
      marginTop: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      getBgColor: function getBgColor() {
        return this.backgroundColor || t.index && t.index.$tui && t.index.$tui.color.danger || "#EB0909";
      }
    },
    methods: {
      handleClick: function handleClick(t) {
        this.$emit("click", {});
      }
    }
  };var i = t._export_sfc(e, [["render", function (e, i, r, n, d, o) {
  return t.e({
    a: r.imgUrl
  }, r.imgUrl ? {
    b: r.imgUrl,
    c: r.imgWidth + "rpx",
    d: r.imgHeight + "rpx",
    e: r.imgBottom + "rpx"
  } : {}, {
    f: r.btnText
  }, r.btnText ? {
    g: t.t(r.btnText),
    h: r.btnWidth + "rpx",
    i: r.btnHeight + "rpx",
    j: o.getBgColor,
    k: r.radius,
    l: r.size + "rpx",
    m: t.o(function () {
      return o.handleClick && o.handleClick.apply(o, arguments);
    })
  } : {}, {
    n: t.n(r.fixed ? "tui-nodata-fixed" : ""),
    o: r.marginTop + "rpx"
  });
}], ["__scopeId", "data-v-b3f65d17"]]);wx.createComponent(i);