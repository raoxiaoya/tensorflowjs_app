var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiButton",
    emits: ["click", "getuserinfo", "contact", "getphonenumber", "error", "chooseavatar", "launchapp"],
    behaviors: ["wx://form-field-button"],
    props: {
      type: {
        type: String,
        default: "primary"
      },
      shadow: {
        type: Boolean,
        default: !1
      },
      width: {
        type: String,
        default: "100%"
      },
      height: {
        type: String,
        default: ""
      },
      btnSize: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: 0
      },
      bold: {
        type: Boolean,
        default: !1
      },
      margin: {
        type: String,
        default: "0"
      },
      shape: {
        type: String,
        default: "square"
      },
      plain: {
        type: Boolean,
        default: !1
      },
      link: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      disabledGray: {
        type: Boolean,
        default: !1
      },
      loading: {
        type: Boolean,
        default: !1
      },
      formType: {
        type: String,
        default: ""
      },
      openType: {
        type: String,
        default: ""
      },
      appParameter: {
        type: String,
        default: ""
      },
      index: {
        type: [Number, String],
        default: 0
      },
      preventClick: {
        type: Boolean,
        default: !1
      }
    },
    computed: {
      getWidth: function getWidth() {
        var e = this.width;
        return this.btnSize && !0 !== this.btnSize && (e = {
          medium: "368rpx",
          small: "240rpx",
          mini: "116rpx"
        }[this.btnSize] || this.width), e;
      },
      getHeight: function getHeight() {
        var t = this.height || e.index && e.index.$tui && e.index.$tui.tuiButton.height || "96rpx";
        return this.btnSize && !0 !== this.btnSize && (t = {
          medium: "80rpx",
          small: "80rpx",
          mini: "64rpx"
        }[this.btnSize] || "96rpx"), t;
      },
      getSize: function getSize() {
        return this.size || e.index && e.index.$tui && e.index.$tui.tuiButton.size || 32;
      }
    },
    data: function data() {
      return {
        time: 0
      };
    },
    methods: {
      hexToRGB: function hexToRGB(e) {
        if (4 === e.length) {
          var _t = e.substring(1, 4);
          e = "#" + _t + _t;
        }
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
          r: parseInt(t[1], 16),
          g: parseInt(t[2], 16),
          b: parseInt(t[3], 16)
        } : {};
      },
      getColorByType: function getColorByType(t, i, n) {
        var a = e.index && e.index.$tui && e.index.$tui.color;
        var r = "";
        var l = {
          primary: a && a.primary || "#5677fc",
          white: "#fff",
          danger: a && a.danger || "#EB0909",
          warning: a && a.warning || "#ff7900",
          green: a && a.success || "#07c160",
          blue: a && a.blue || "#007aff",
          gray: "#bfbfbf",
          black: "#333333",
          brown: "#ac9157",
          "gray-primary": "#f2f2f2",
          "gray-danger": "#f2f2f2",
          "gray-warning": "#f2f2f2",
          "gray-green": "#f2f2f2"
        };
        if (i) {
          if (t && ~t.indexOf("gray-")) {
            r = l[t.replace("gray-", "")];
          } else r = "white" === t ? "#333" : n ? l[t] : "#fff";
        } else r = l[t] || l.primary;
        return r;
      },
      getShadow: function getShadow(e, t) {
        var i = this.getColorByType(e);
        if (t || !i) return "none";
        var n = this.hexToRGB(i);
        return "0 10rpx 14rpx 0 rgba(".concat(n.r, ", ").concat(n.g, ", ").concat(n.b, ", 0.2)");
      },
      getBgColor: function getBgColor(e, t) {
        return t ? "transparent" : this.getColorByType(e);
      },
      getColor: function getColor(e, t) {
        return this.getColorByType(e, !0, t);
      },
      handleClick: function handleClick() {
        var _this = this;
        if (!this.disabled) {
          if (this.preventClick) {
            if (new Date().getTime() - this.time <= 200) return;
            this.time = new Date().getTime(), setTimeout(function () {
              _this.time = 0;
            }, 200);
          }
          this.$emit("click", {
            index: Number(this.index)
          });
        }
      },
      bindgetuserinfo: function bindgetuserinfo() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$detail = _ref.detail,
          e = _ref$detail === void 0 ? {} : _ref$detail;
        this.$emit("getuserinfo", e);
      },
      bindcontact: function bindcontact() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$detail = _ref2.detail,
          e = _ref2$detail === void 0 ? {} : _ref2$detail;
        this.$emit("contact", e);
      },
      bindgetphonenumber: function bindgetphonenumber() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$detail = _ref3.detail,
          e = _ref3$detail === void 0 ? {} : _ref3$detail;
        this.$emit("getphonenumber", e);
      },
      binderror: function binderror() {
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$detail = _ref4.detail,
          e = _ref4$detail === void 0 ? {} : _ref4$detail;
        this.$emit("error", e);
      },
      bindchooseavatar: function bindchooseavatar() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref5$detail = _ref5.detail,
          e = _ref5$detail === void 0 ? {} : _ref5$detail;
        this.$emit("chooseavatar", e);
      },
      bindlaunchapp: function bindlaunchapp() {
        var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$detail = _ref6.detail,
          e = _ref6$detail === void 0 ? {} : _ref6$detail;
        this.$emit("launchapp", e);
      },
      getDisabledClass: function getDisabledClass(e, t, i) {
        var n = "";
        if (e && "white" != t && -1 == t.indexOf("-")) {
          var _e = this.disabledGray ? "tui-gray-disabled" : "tui-dark-disabled";
          n = i ? "tui-dark-disabled-outline" : _e;
        }
        return n;
      },
      getShapeClass: function getShapeClass(e, t) {
        var i = "";
        return "circle" == e ? i = t ? "tui-outline-fillet" : "tui-fillet" : "rightAngle" == e && (i = t ? "tui-outline-rightAngle" : "tui-rightAngle"), i;
      },
      getHoverClass: function getHoverClass(e, t, i) {
        var n = "";
        return e || (n = i ? "tui-outline-hover" : "tui-" + (t || "primary") + "-hover"), n;
      }
    }
  };var i = e._export_sfc(t, [["render", function (t, i, n, a, r, l) {
  return e.e({
    a: e.n(n.plain ? "tui-" + n.type + "-outline" : "tui-btn-" + (n.type || "primary")),
    b: e.n(l.getDisabledClass(n.disabled, n.type, n.plain)),
    c: e.n(l.getShapeClass(n.shape, n.plain)),
    d: e.n(n.bold ? "tui-text-bold" : ""),
    e: e.n(n.link ? "tui-btn__link" : ""),
    f: l.getWidth,
    g: l.getHeight,
    h: l.getHeight,
    i: l.getSize + "rpx",
    j: l.getBgColor(n.type, n.plain),
    k: l.getColor(n.type, n.plain),
    l: n.shadow ? l.getShadow(n.type, n.plain) : "none",
    m: n.loading,
    n: n.formType,
    o: n.openType,
    p: n.appParameter,
    q: e.o(function () {
      return l.bindgetuserinfo && l.bindgetuserinfo.apply(l, arguments);
    }),
    r: e.o(function () {
      return l.bindgetphonenumber && l.bindgetphonenumber.apply(l, arguments);
    }),
    s: e.o(function () {
      return l.bindcontact && l.bindcontact.apply(l, arguments);
    }),
    t: e.o(function () {
      return l.binderror && l.binderror.apply(l, arguments);
    }),
    v: e.o(function () {
      return l.bindchooseavatar && l.bindchooseavatar.apply(l, arguments);
    }),
    w: e.o(function () {
      return l.bindlaunchapp && l.bindlaunchapp.apply(l, arguments);
    }),
    x: n.disabled,
    y: e.o(function () {
      return l.handleClick && l.handleClick.apply(l, arguments);
    }),
    z: !n.link && n.plain
  }, !n.link && n.plain ? {
    A: e.n(l.getShapeClass(n.shape, n.plain)),
    B: e.n(l.getDisabledClass(n.disabled, n.type, n.plain)),
    C: l.getBgColor(n.type)
  } : {}, {
    D: e.n("100%" !== n.width && n.width && !0 !== n.width || n.btnSize && !0 !== n.btnSize ? "" : "tui-btn__flex-1"),
    E: e.n(l.getShapeClass(n.shape, n.plain)),
    F: e.n(n.disabled ? "" : "tui-button__hover"),
    G: l.getWidth,
    H: l.getHeight,
    I: n.margin
  });
}], ["__scopeId", "data-v-2cc3889c"]]);wx.createComponent(i);