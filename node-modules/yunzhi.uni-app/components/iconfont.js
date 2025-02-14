var e = require("../../../common/vendor.js"),
  n = {
    name: "iconfont",
    options: {
      styleIsolation: "shared"
    },
    props: {
      name: {
        type: String,
        default: ""
      },
      size: {
        type: String,
        default: null
      },
      index: {
        type: Number,
        default: 0
      }
    },
    emits: ["on-click"],
    methods: {
      handleClick: function handleClick() {
        this.$emit("on-click", {
          index: this.index
        });
      }
    }
  };var t = e._export_sfc(n, [["render", function (n, t, i, o, c, s) {
  return {
    a: e.n("icon-" + i.name),
    b: i.size || "",
    c: e.o(function () {
      return s.handleClick && s.handleClick.apply(s, arguments);
    })
  };
}]]);wx.createComponent(t);