require("../../../@babel/runtime/helpers/Arrayincludes");var r = require("../../../common/vendor.js"),
  o = ["primary", "light-primary", "dark-primary", "dark-light-primary", "yellow", "blue", "green"],
  t = {
    name: "tag",
    options: {
      styleIsolation: "shared"
    },
    emits: ["on-click"],
    props: {
      plain: {
        type: Boolean,
        default: !1
      },
      color: {
        type: String,
        default: null
      },
      shape: {
        type: String,
        default: "square",
        validator: function validator(r) {
          return ["circle", "square", "left-circle", "right-circle"].includes(r);
        }
      },
      hover: {
        type: Boolean,
        default: !1
      }
    },
    computed: {
      classes: function classes() {
        var r = [];
        return this.color && o.includes(this.color) && r.push("tag-".concat(this.color)), this.plain && r.push("tag-plain"), r.push("shape-" + this.shape), r;
      },
      styles: function styles() {
        var r = "";
        return this.plain ? (r = "border-width:1rpx;", this.color && !o.includes(this.color) && (r += "background-color:".concat(this.parseToRgba(this.color, .1), ";color:").concat(this.color, ";border-color:").concat(this.color)), r) : this.color ? (r = "color:#FFFFFF;", o.includes(this.color) || (r += "background-color:".concat(this.color, ";")), r) : "";
      }
    },
    data: function data() {
      return {};
    },
    methods: {
      parseToRgba: function parseToRgba(r, o) {
        if (!r || 7 != r.length) throw new Error("颜色值错误，只接受HEX颜色值。");
        var t = r.substr(1, 2);
        t = parseInt(t, 16);
        var e = r.substr(3, 2);
        e = parseInt(e, 16);
        var s = r.substr(5, 2);
        return s = parseInt(s, 16), "rgba(".concat(t, ",").concat(e, ",").concat(s, ",").concat(o, ")");
      },
      onClick: function onClick(r) {
        this.$emit("on-click");
      }
    }
  };var e = r._export_sfc(t, [["render", function (o, t, e, s, l, i) {
  return {
    a: e.hover ? "tag-hover" : "",
    b: r.n(i.classes),
    c: r.s(i.styles),
    d: r.o(function () {
      return i.onClick && i.onClick.apply(i, arguments);
    })
  };
}]]);wx.createComponent(e);