var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiSteps",
    emits: ["click"],
    props: {
      type: {
        type: Number,
        default: 1
      },
      spacing: {
        type: String,
        default: "160rpx"
      },
      direction: {
        type: String,
        default: "row"
      },
      activeColor: {
        type: String,
        default: ""
      },
      deactiveColor: {
        type: String,
        default: "#999999"
      },
      titleSize: {
        type: Number,
        default: 28
      },
      bold: {
        type: Boolean,
        default: !1
      },
      descSize: {
        type: Number,
        default: 24
      },
      activeSteps: {
        type: Number,
        default: -1
      },
      lineStyle: {
        type: String,
        default: "solid"
      },
      items: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      titleField: {
        type: String,
        default: "title"
      },
      descrField: {
        type: String,
        default: "desc"
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      }
    },
    computed: {
      getActiveColor: function getActiveColor() {
        return this.activeColor || e.index && e.index.$tui && e.index.$tui.color.primary || "#5677fc";
      }
    },
    data: function data() {
      return {};
    },
    methods: {
      handleClick: function handleClick(e) {
        this.$emit("click", {
          index: e
        });
      }
    }
  };if (!Array) {
  e.resolveComponent("tui-icon")();
}Math;var i = e._export_sfc(t, [["render", function (t, i, o, c, n, r) {
  return {
    a: e.f(o.items, function (t, i, c) {
      return e.e({
        a: !t.name && !t.icon
      }, t.name || t.icon ? {} : e.e({
        b: o.activeSteps !== i
      }, o.activeSteps !== i ? {
        c: e.t(1 == o.type ? "" : i + 1),
        d: i <= o.activeSteps ? "#fff" : ""
      } : {}, {
        e: o.activeSteps === i
      }, o.activeSteps === i ? {
        f: "28ebe18a-0-" + c,
        g: e.p({
          name: "check",
          size: 16,
          color: "#fff"
        })
      } : {}, {
        h: 2 == o.type || o.activeSteps === i ? "36rpx" : "16rpx",
        i: 2 == o.type || o.activeSteps === i ? "36rpx" : "16rpx",
        j: i <= o.activeSteps ? r.getActiveColor : 2 == o.type ? "#fff" : o.deactiveColor,
        k: i <= o.activeSteps ? r.getActiveColor : o.deactiveColor
      }), {
        l: t.name || t.icon
      }, t.name || t.icon ? e.e({
        m: t.name
      }, t.name ? {
        n: "28ebe18a-1-" + c,
        o: e.p({
          name: t.name,
          size: t.size || 20,
          color: i <= o.activeSteps ? r.getActiveColor : o.deactiveColor
        })
      } : {}, {
        p: !t.name
      }, t.name ? {} : {
        q: i <= o.activeSteps ? t.activeIcon : t.icon
      }, {
        r: o.backgroundColor
      }) : {}, {
        s: i != o.items.length - 1
      }, i != o.items.length - 1 ? {
        t: e.n("tui-step-" + o.direction + "_line"),
        v: e.n("column" == o.direction && (t.name || t.icon) ? "tui-custom-left" : ""),
        w: i <= o.activeSteps - 1 ? r.getActiveColor : o.deactiveColor,
        x: "column" == o.direction ? o.lineStyle : "",
        y: "column" == o.direction ? "" : o.lineStyle
      } : {}, {
        z: e.t(t[o.titleField]),
        A: i <= o.activeSteps ? r.getActiveColor : o.deactiveColor,
        B: e.t(t[o.descrField]),
        C: i <= o.activeSteps ? r.getActiveColor : o.deactiveColor,
        D: i,
        E: e.o(function (e) {
          return r.handleClick(i);
        }, i)
      });
    }),
    b: e.n("column" === o.direction ? "tui-step-column_ico" : "tui-step-row_ico"),
    c: "column" === o.direction ? "36rpx" : "100%",
    d: o.titleSize + "rpx",
    e: o.titleSize + "rpx",
    f: o.bold ? "bold" : "normal",
    g: o.descSize + "rpx",
    h: e.n("tui-step-" + o.direction + "_item_main"),
    i: "column" === o.direction ? "100%" : o.spacing,
    j: e.n("row" === o.direction ? "tui-step-horizontal" : "tui-step-vertical"),
    k: "column" === o.direction ? 1 : ""
  };
}], ["__scopeId", "data-v-28ebe18a"]]);wx.createComponent(i);