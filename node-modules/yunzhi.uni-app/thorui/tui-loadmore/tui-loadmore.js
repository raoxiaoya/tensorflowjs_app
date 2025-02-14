var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiLoadmore",
    props: {
      text: {
        type: String,
        default: "正在加载..."
      },
      index: {
        type: [Number, String],
        default: 1
      },
      type: {
        type: String,
        default: ""
      }
    },
    computed: {
      getBorderColor: function getBorderColor() {
        var t = "transparent";
        if (3 == this.index && this.type) {
          var _r = e.index && e.index.$tui && e.index.$tui.color;
          t = {
            primary: _r && _r.primary || "#5677fc",
            red: _r && _r.danger || "#EB0909",
            orange: _r && _r.warning || "#ff7900",
            green: _r && _r.success || "#07c160"
          }[this.type];
        }
        return t;
      }
    }
  };var r = e._export_sfc(t, [["render", function (t, r, n, i, o, d) {
  return {
    a: e.n("tui-loading-" + n.index),
    b: e.n(3 == n.index && n.type ? "tui-loading-" + n.type : ""),
    c: d.getBorderColor,
    d: e.t(n.text)
  };
}], ["__scopeId", "data-v-dc6bad53"]]);wx.createComponent(r);