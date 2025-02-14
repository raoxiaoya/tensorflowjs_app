var e = require("../../../../common/vendor.js"),
  t = {
    name: "tuiSearchbar",
    emits: ["clear", "focus", "blur", "click", "cancel", "input", "search"],
    props: {
      backgroundColor: {
        type: String,
        default: "#ededed"
      },
      padding: {
        type: String,
        default: "16rpx 20rpx"
      },
      height: {
        type: String,
        default: "72rpx"
      },
      radius: {
        type: String,
        default: "8rpx"
      },
      inputBgColor: {
        type: String,
        default: "#fff"
      },
      focus: {
        type: Boolean,
        default: !1
      },
      placeholder: {
        type: String,
        default: "请输入搜索关键词"
      },
      value: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      cancelColor: {
        type: String,
        default: "#888"
      },
      cancel: {
        type: Boolean,
        default: !0
      },
      searchText: {
        type: String,
        default: "搜索"
      },
      searchColor: {
        type: String,
        default: ""
      },
      showLabel: {
        type: Boolean,
        default: !0
      },
      showInput: {
        type: Boolean,
        default: !0
      }
    },
    computed: {
      getSearchColor: function getSearchColor() {
        return this.searchColor || e.index && e.index.$tui && e.index.$tui.color.primary || "#5677fc";
      }
    },
    created: function created() {
      this.valueTxt = this.value, this.isFocus = this.focus, (this.focus || this.valueTxt.length > 0) && (this.searchState = !0), this.clearSize = Math.ceil(e.index.upx2px(30)), this.searchSize = Math.ceil(e.index.upx2px(26));
    },
    watch: {
      value: function value(e) {
        this.valueTxt = e;
      }
    },
    data: function data() {
      return {
        searchState: !1,
        isFocus: !1,
        valueTxt: "",
        clearSize: 15,
        searchSize: 13
      };
    },
    methods: {
      clearInput: function clearInput() {
        this.valueTxt = "", this.isFocus = !1, e.index.hideKeyboard(), this.$emit("clear");
      },
      inputFocus: function inputFocus(e) {
        this.showLabel || (this.searchState = !0), this.$emit("focus", e.detail);
      },
      inputBlur: function inputBlur(e) {
        this.isFocus = !1, this.$emit("blur", e.detail);
      },
      tapShowInput: function tapShowInput() {
        var _this = this;
        !this.disabled && this.showInput && (this.searchState = !0, setTimeout(function () {
          _this.isFocus = !0;
        }, 20)), this.$emit("click", {});
      },
      hideInput: function hideInput() {
        this.searchState = !1, this.isFocus = !1, e.index.hideKeyboard(), this.$emit("cancel", {});
      },
      inputChange: function inputChange(e) {
        this.valueTxt = e.detail.value, this.$emit("input", e.detail);
      },
      search: function search() {
        this.$emit("search", {
          value: this.valueTxt
        });
      },
      reset: function reset() {
        this.searchState = !1, this.isFocus = !1, this.valueTxt = "", e.index.hideKeyboard();
      }
    }
  };var a = e._export_sfc(t, [["render", function (t, a, i, s, l, h) {
  return e.e({
    a: i.showInput
  }, i.showInput ? e.e({
    b: l.searchSize,
    c: i.placeholder,
    d: l.valueTxt,
    e: l.isFocus,
    f: i.disabled,
    g: e.o(function () {
      return h.inputBlur && h.inputBlur.apply(h, arguments);
    }),
    h: e.o(function () {
      return h.inputFocus && h.inputFocus.apply(h, arguments);
    }),
    i: e.o(function () {
      return h.inputChange && h.inputChange.apply(h, arguments);
    }),
    j: e.o(function () {
      return h.search && h.search.apply(h, arguments);
    }),
    k: l.valueTxt.length > 0 && !i.disabled
  }, l.valueTxt.length > 0 && !i.disabled ? {
    l: l.clearSize,
    m: e.o(function () {
      return h.clearInput && h.clearInput.apply(h, arguments);
    })
  } : {}, {
    n: l.isFocus || l.searchState || !i.showLabel || i.disabled ? "" : 1,
    o: i.height,
    p: i.radius,
    q: i.inputBgColor
  }) : {}, {
    r: !l.isFocus && !l.searchState && i.showLabel
  }, l.isFocus || l.searchState || !i.showLabel ? {} : {
    s: l.searchSize,
    t: e.t(i.placeholder),
    v: i.height,
    w: i.radius,
    x: i.inputBgColor,
    y: e.o(function () {
      return h.tapShowInput && h.tapShowInput.apply(h, arguments);
    })
  }, {
    z: i.height,
    A: i.cancel && l.searchState && !l.valueTxt
  }, i.cancel && l.searchState && !l.valueTxt ? {
    B: e.t(i.cancelText),
    C: i.cancelColor,
    D: e.o(function () {
      return h.hideInput && h.hideInput.apply(h, arguments);
    })
  } : {}, {
    E: l.valueTxt && !i.disabled && l.searchState
  }, l.valueTxt && !i.disabled && l.searchState ? {
    F: e.t(i.searchText),
    G: h.getSearchColor,
    H: e.o(function () {
      return h.search && h.search.apply(h, arguments);
    })
  } : {}, {
    I: i.backgroundColor,
    J: i.padding
  });
}], ["__scopeId", "data-v-bd9c318f"]]);wx.createComponent(a);