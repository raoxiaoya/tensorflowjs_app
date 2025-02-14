var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiIcon",
    emits: ["click"],
    props: {
      name: {
        type: String,
        default: ""
      },
      customPrefix: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: 0
      },
      unit: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ""
      },
      bold: {
        type: Boolean,
        default: !1
      },
      margin: {
        type: String,
        default: "0"
      },
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      getColor: function getColor() {
        return this.color || e.index && e.index.$tui && e.index.$tui.tuiIcon.color || "#999";
      },
      getSize: function getSize() {
        return (this.size || e.index && e.index.$tui && e.index.$tui.tuiIcon.size || 32) + (this.unit || e.index && e.index.$tui && e.index.$tui.tuiIcon.unit || "px");
      }
    },
    data: function data() {
      return {
        icons: e.icons
      };
    },
    methods: {
      handleClick: function handleClick() {
        this.$emit("click", {
          index: this.index
        });
      }
    }
  };var i = e._export_sfc(t, [["render", function (t, i, n, o, d, r) {
  return {
    a: e.t(d.icons[n.name] || ""),
    b: e.n(n.customPrefix),
    c: e.n(n.customPrefix ? n.name : ""),
    d: r.getColor,
    e: r.getSize,
    f: n.bold ? "bold" : "normal",
    g: n.margin,
    h: e.o(function () {
      return r.handleClick && r.handleClick.apply(r, arguments);
    })
  };
}], ["__scopeId", "data-v-6c146404"]]);wx.createComponent(i);