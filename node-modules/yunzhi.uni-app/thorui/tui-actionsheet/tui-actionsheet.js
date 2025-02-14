var _objectSpread2 = require("../../../../@babel/runtime/helpers/objectSpread2");var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiActionsheet",
    emits: ["click", "cancel"],
    props: {
      show: {
        type: Boolean,
        default: !1
      },
      itemList: {
        type: Array,
        default: function _default() {
          return [{
            text: "确定",
            color: "#2B2B2B",
            size: 34
          }];
        }
      },
      textField: {
        type: String,
        default: "text"
      },
      textColor: {
        type: String,
        default: "#2B2B2B"
      },
      textSize: {
        type: [Number, String],
        default: 34
      },
      maskClosable: {
        type: Boolean,
        default: !0
      },
      maskColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.6)"
      },
      tips: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#808080"
      },
      size: {
        type: [Number, String],
        default: 26
      },
      radius: {
        type: Boolean,
        default: !0
      },
      isCancel: {
        type: Boolean,
        default: !0
      },
      cancelColor: {
        type: String,
        default: "#1a1a1a"
      },
      zIndex: {
        type: [Number, String],
        default: 998
      }
    },
    computed: {
      getZIndex: function getZIndex() {
        return Number(this.zIndex) + 2;
      }
    },
    methods: {
      handleClickMask: function handleClickMask() {
        this.maskClosable && this.handleClickCancel();
      },
      handleClickItem: function handleClickItem(e) {
        if (!this.show) return;
        var t = Number(e.currentTarget.dataset.index);
        this.$emit("click", _objectSpread2({
          index: t
        }, this.itemList[t]));
      },
      handleClickCancel: function handleClickCancel() {
        this.$emit("cancel");
      }
    }
  };var l = e._export_sfc(t, [["render", function (t, l, i, a, n, o) {
  return e.e({
    a: i.tips
  }, i.tips ? {
    b: e.t(i.tips),
    c: i.size + "rpx",
    d: i.color
  } : {}, {
    e: e.f(i.itemList, function (t, l, a) {
      return {
        a: e.t(t[i.textField]),
        b: i.isCancel || l != i.itemList.length - 1 ? "" : 1,
        c: l,
        d: t.color || i.textColor,
        e: (t.size || i.textSize) + "rpx",
        f: e.o(function () {
          return o.handleClickItem && o.handleClickItem.apply(o, arguments);
        }, l),
        g: l
      };
    }),
    f: e.n(i.isCancel ? "tui-operate-box" : ""),
    g: i.isCancel
  }, i.isCancel ? {
    h: i.textSize + "rpx",
    i: i.cancelColor,
    j: e.o(function () {
      return o.handleClickCancel && o.handleClickCancel.apply(o, arguments);
    })
  } : {}, {
    k: i.show ? 1 : "",
    l: i.radius ? 1 : "",
    m: o.getZIndex,
    n: i.show ? 1 : "",
    o: i.maskColor,
    p: i.zIndex,
    q: e.o(function () {
      return o.handleClickMask && o.handleClickMask.apply(o, arguments);
    }),
    r: e.o(function () {})
  });
}], ["__scopeId", "data-v-ca4bcff6"]]);wx.createComponent(l);