var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiFooter",
    props: {
      navigate: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      urlField: {
        type: String,
        default: "url"
      },
      textField: {
        type: String,
        default: "text"
      },
      copyright: {
        type: String,
        default: "All Rights Reserved."
      },
      color: {
        type: String,
        default: "#A7A7A7"
      },
      size: {
        type: Number,
        default: 24
      },
      backgroundColor: {
        type: String,
        default: "transparent"
      },
      linkColor: {
        type: String,
        default: ""
      },
      fixed: {
        type: Boolean,
        default: !0
      }
    },
    computed: {
      getLinkColor: function getLinkColor() {
        return this.linkColor || e.index && e.index.$tui && e.index.$tui.color.link || "#586c94";
      }
    }
  };var r = e._export_sfc(t, [["render", function (t, r, i, n, o, l) {
  return e.e({
    a: i.navigate.length > 0
  }, i.navigate.length > 0 ? {
    b: e.f(i.navigate, function (t, r, n) {
      return {
        a: e.t(t[i.textField]),
        b: t.color || l.getLinkColor,
        c: (t.size || 28) + "rpx",
        d: t.type,
        e: t[i.urlField],
        f: t.target,
        g: t.delta,
        h: t.appid,
        i: t.path,
        j: t.extradata,
        k: t.bindsuccess,
        l: t.bindfail,
        m: r
      };
    }),
    c: l.getLinkColor
  } : {}, {
    d: e.t(i.copyright),
    e: i.color,
    f: i.size + "rpx",
    g: e.n(i.fixed ? "tui-fixed" : ""),
    h: i.backgroundColor
  });
}], ["__scopeId", "data-v-9873c464"]]);wx.createComponent(r);