var _toConsumableArray2 = require("../../../../@babel/runtime/helpers/toConsumableArray");var _defineProperty2 = require("../../../../@babel/runtime/helpers/defineProperty");var _typeof2 = require("../../../../@babel/runtime/helpers/typeof");var t = require("../../../../common/vendor.js"),
  e = {
    name: "tuiTab",
    emits: ["change"],
    options: {
      virtualHost: !0
    },
    props: {
      tabs: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      field: {
        type: String,
        default: "name"
      },
      current: {
        type: Number,
        default: 0
      },
      scroll: {
        type: Boolean,
        default: !1
      },
      height: {
        type: [Number, String],
        default: 80
      },
      leftGap: {
        type: [Number, String],
        default: 0
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      },
      size: {
        type: Number,
        default: 28
      },
      color: {
        type: String,
        default: "#666"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      bold: {
        type: Boolean,
        default: !1
      },
      scale: {
        type: [Number, String],
        default: 1
      },
      sliderHeight: {
        type: String,
        default: "2px"
      },
      sliderBgColor: {
        type: String,
        default: ""
      },
      sliderRadius: {
        type: String,
        default: "2px"
      },
      sliderType: {
        type: String,
        default: "line"
      },
      bottom: {
        type: String,
        default: "0"
      },
      isFixed: {
        type: Boolean,
        default: !1
      },
      isSticky: {
        type: Boolean,
        default: !1
      },
      top: {
        type: Number,
        default: 0
      },
      zIndex: {
        type: [Number, String],
        default: 996
      }
    },
    computed: {
      getSelectedColor: function getSelectedColor() {
        return this.selectedColor || t.index && t.index.$tui && t.index.$tui.color.primary || "#5677fc";
      },
      getSliderBgColor: function getSliderBgColor() {
        return this.sliderBgColor || t.index && t.index.$tui && t.index.$tui.color.primary || "#5677fc";
      }
    },
    watch: {
      tabs: function tabs(t, e) {
        var _this = this;
        this.tabItems = [], this.scrollLeft = 0, this.scrolling = !1, this.isInit = !0, this.handleData(t || []), this.$nextTick(function () {
          setTimeout(function () {
            return _this.init();
          }, 200);
        });
      },
      current: function current(t, e) {
        this.isInit ? this.currentTab = t : this.scrollByIndex(t);
      },
      leftGap: function leftGap(e) {
        this.gap = t.index.upx2px(Number(e));
      }
    },
    created: function created() {
      this.handleData(this.tabs || []), this.currentTab = this.current;
    },
    mounted: function mounted() {
      var _this2 = this;
      this.gap = t.index.upx2px(Number(this.leftGap)), this.$nextTick(function () {
        setTimeout(function () {
          _this2.init();
        }, 50);
      });
    },
    data: function data() {
      return {
        childClass: "tui_10_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
        classView: "tui_01_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
        windowWidth: 0,
        tabItems: [],
        scrolling: !0,
        needTransition: !1,
        translateX: 0,
        lineWidth: 0,
        scrollLeft: 0,
        currentTab: 0,
        gap: -1,
        isInit: !1,
        tabList: []
      };
    },
    methods: {
      handleData: function handleData(t) {
        var _this3 = this;
        var e = [];
        e = "object" != _typeof2(t[0]) ? t.map(function (t) {
          return _defineProperty2({}, _this3.field, t);
        }) : _toConsumableArray2(t), this.tabList = e;
      },
      handleClick: function handleClick(t, e) {
        t > this.tabList.length - 1 || this.isInit || (this.scrollByIndex(t), this.$emit("change", {
          index: t,
          item: e
        }));
      },
      scrollByIndex: function scrollByIndex(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var i = this.tabItems[t];
        if (!i) return;
        var s = i.width || 0,
          l = i.left || 0;
        this.needTransition = e, this.currentTab = t;
        var r = "block" == this.sliderType;
        if (this.scroll) {
          if (e) {
            var _t = l - (this.windowWidth - s) / 2;
            this.scrollLeft = _t;
          }
          this.translateX = l - this.gap - (r ? 12 : 0), this.lineWidth = s + (r ? 24 : 0);
        } else this.translateX = l - this.gap - (r ? 12 : 0), this.lineWidth = s + (r ? 24 : 0);
      },
      init: function init() {
        var _this4 = this;
        var _t$index$getSystemInf = t.index.getSystemInfoSync(),
          e = _t$index$getSystemInf.windowWidth,
          i = t.index.createSelectorQuery().in(this);
        var s = this.tabList.length - 1;
        s = Math.max(s, 0), this.currentTab = this.currentTab > s ? 0 : this.currentTab, i.select(".tui-scroll__view").boundingClientRect(function (t) {
          t && (_this4.windowWidth = t.width || e);
        }).selectAll(".tui-item__child").boundingClientRect(function (t) {
          _this4.scrolling = !0, _this4.tabItems = t, _this4.isInit = !1, _this4.scrollByIndex(_this4.currentTab, !1);
        }).exec();
      }
    }
  };var i = t._export_sfc(e, [["render", function (e, i, s, l, r, n) {
  return {
    a: t.f(r.tabList, function (e, i, l) {
      return {
        a: t.t(e[s.field]),
        b: r.currentTab == i ? n.getSelectedColor : s.color,
        c: s.bold && r.currentTab == i ? "bold" : "normal",
        d: "scale(".concat(r.currentTab == i ? s.scale : 1, ")"),
        e: i,
        f: t.o(function (t) {
          return n.handleClick(i, e);
        }, i)
      };
    }),
    b: t.n(r.childClass),
    c: s.size + "rpx",
    d: s.height + "rpx",
    e: n.getSliderBgColor,
    f: s.sliderHeight,
    g: s.sliderRadius,
    h: s.bottom,
    i: r.lineWidth + "px",
    j: "translateX(".concat(r.translateX, "px)"),
    k: t.n(s.scroll ? "tui-tabs__scroll" : ""),
    l: s.height + "rpx",
    m: t.n(s.isFixed && !s.isSticky ? "tui-tabs__fixed" : ""),
    n: t.n(s.isSticky ? "tui-tabs__sticky" : ""),
    o: t.n(r.classView),
    p: s.height + "rpx",
    q: s.backgroundColor,
    r: s.isFixed || s.isSticky ? s.top + "px" : "auto",
    s: s.isFixed || s.isSticky ? s.zIndex : "auto",
    t: s.scroll,
    v: r.scrolling,
    w: r.scrollLeft
  };
}], ["__scopeId", "data-v-f2fce426"]]);wx.createComponent(i);