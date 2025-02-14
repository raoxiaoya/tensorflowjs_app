var t = require("../../../../common/vendor.js"),
  o = {
    name: "tuiTips",
    props: {
      position: {
        type: String,
        default: "top"
      },
      backgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.7)"
      },
      color: {
        type: String,
        default: "#fff"
      },
      size: {
        type: Number,
        default: 30
      }
    },
    data: function data() {
      return {
        timer: null,
        show: !1,
        msg: "无法连接到服务器~"
      };
    },
    methods: {
      showTips: function showTips(t) {
        var _this = this;
        var _t$duration = t.duration,
          o = _t$duration === void 0 ? 2e3 : _t$duration;
        clearTimeout(this.timer), this.show = !0, this.msg = t.msg, this.timer = setTimeout(function () {
          _this.show = !1, clearTimeout(_this.timer), _this.timer = null;
        }, o);
      }
    }
  };var e = t._export_sfc(o, [["render", function (o, e, i, s, r, n) {
  return t.e({
    a: "top" == i.position
  }, "top" == i.position ? {
    b: t.t(r.msg),
    c: i.backgroundColor,
    d: i.color,
    e: i.size + "rpx",
    f: t.n(r.show ? "tui-top-show" : "")
  } : {
    g: t.t(r.msg),
    h: i.backgroundColor,
    i: i.color,
    j: i.size + "rpx",
    k: t.n("center" == i.position ? "tui-centertips" : "tui-bottomtips"),
    l: t.n(r.show ? "tui-toast-show" : "")
  });
}], ["__scopeId", "data-v-ea86b32e"]]);wx.createComponent(e);