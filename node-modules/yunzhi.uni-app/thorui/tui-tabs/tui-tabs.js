var t = require("../../../../common/vendor.js"),
  e = {
    name: "tuiTabs",
    emits: ["change"],
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
      badgeField: {
        type: String,
        default: "num"
      },
      width: {
        type: [Number, String],
        default: 0
      },
      height: {
        type: Number,
        default: 80
      },
      padding: {
        type: Number,
        default: 30
      },
      backgroundColor: {
        type: String,
        default: "#FFFFFF"
      },
      isFixed: {
        type: Boolean,
        default: !1
      },
      top: {
        type: Number,
        default: 0
      },
      unlined: {
        type: Boolean,
        default: !1
      },
      currentTab: {
        type: Number,
        default: 0
      },
      isSlider: {
        type: Boolean,
        default: !0
      },
      sliderWidth: {
        type: Number,
        default: 68
      },
      sliderHeight: {
        type: Number,
        default: 6
      },
      sliderBgColor: {
        type: String,
        default: ""
      },
      sliderRadius: {
        type: String,
        default: "50rpx"
      },
      bottom: {
        type: String,
        default: "0"
      },
      itemWidth: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#666"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      size: {
        type: Number,
        default: 28
      },
      bold: {
        type: Boolean,
        default: !1
      },
      scale: {
        type: [Number, String],
        default: 1
      },
      badgeColor: {
        type: String,
        default: "#fff"
      },
      badgeBgColor: {
        type: String,
        default: ""
      },
      zIndex: {
        type: [Number, String],
        default: 996
      }
    },
    watch: {
      currentTab: function currentTab() {
        this.checkCor();
      },
      tabs: function tabs() {
        this.checkCor();
      },
      width: function width(t) {
        this.tabsWidth = t, this.checkCor();
      }
    },
    computed: {
      getItemWidth: function getItemWidth() {
        var t = 100 / (this.tabs.length || 4) + "%";
        return this.itemWidth ? this.itemWidth : t;
      },
      getSliderBgColor: function getSliderBgColor() {
        return this.sliderBgColor || t.index && t.index.$tui && t.index.$tui.color.primary || "#5677fc";
      },
      getSelectedColor: function getSelectedColor() {
        return this.selectedColor || t.index && t.index.$tui && t.index.$tui.color.primary || "#5677fc";
      },
      getBadgeBgColor: function getBadgeBgColor() {
        return this.badgeBgColor || t.index && t.index.$tui && t.index.$tui.color.pink || "#f74d54";
      }
    },
    created: function created() {
      var _this = this;
      setTimeout(function () {
        t.index.getSystemInfo({
          success: function success(t) {
            _this.winWidth = t.windowWidth, _this.tabsWidth = 0 == _this.width ? _this.winWidth : Number(_this.width), _this.checkCor();
          }
        });
      }, 0);
    },
    data: function data() {
      return {
        winWidth: 0,
        tabsWidth: 0,
        scrollLeft: 0
      };
    },
    methods: {
      checkCor: function checkCor() {
        var e = this.tabs.length,
          i = t.index.upx2px(Number(this.padding)),
          d = this.tabsWidth - 2 * i,
          r = (d / e - t.index.upx2px(Number(this.sliderWidth))) / 2 + i;
        this.currentTab > 0 && (r += d / e * this.currentTab), this.scrollLeft = r;
      },
      swichTabs: function swichTabs(t) {
        var e = this.tabs[t];
        if (!e || !e.disabled) return this.currentTab != t && void this.$emit("change", {
          index: Number(t),
          item: e
        });
      }
    }
  };var i = t._export_sfc(e, [["render", function (e, i, d, r, a, l) {
  return t.e({
    a: a.tabsWidth > 0
  }, a.tabsWidth > 0 ? t.e({
    b: t.f(d.tabs, function (e, i, r) {
      return t.e({
        a: t.t(e[d.field]),
        b: e[d.badgeField] || e.isDot
      }, e[d.badgeField] || e.isDot ? {
        c: t.t(e.isDot ? "" : e[d.badgeField]),
        d: t.n(e.isDot ? "tui-badge__dot" : "tui-tabs__badge"),
        e: d.badgeColor,
        f: l.getBadgeBgColor
      } : {}, {
        g: e.disabled ? 1 : "",
        h: d.currentTab == i ? l.getSelectedColor : d.color,
        i: d.bold && d.currentTab == i ? "bold" : "normal",
        j: "scale(".concat(d.currentTab == i ? d.scale : 1, ")"),
        k: i,
        l: t.o(function (t) {
          return l.swichTabs(i);
        }, i)
      });
    }),
    c: d.size + "rpx",
    d: l.getItemWidth,
    e: d.height + "rpx",
    f: d.isSlider
  }, d.isSlider ? {
    g: "translateX(" + a.scrollLeft + "px)",
    h: d.sliderWidth + "rpx",
    i: d.sliderHeight + "rpx",
    j: d.sliderRadius,
    k: d.bottom,
    l: l.getSliderBgColor,
    m: "50%" == d.bottom ? "-" + d.sliderHeight / 2 + "rpx" : 0
  } : {}, {
    n: t.n(d.isFixed ? "tui-tabs-fixed" : "tui-tabs-relative"),
    o: t.n(d.unlined ? "tui-unlined" : ""),
    p: a.tabsWidth + "px",
    q: d.height + "rpx",
    r: "0 ".concat(d.padding, "rpx"),
    s: d.backgroundColor,
    t: d.isFixed ? d.top + "px" : "auto",
    v: d.isFixed ? d.zIndex : "auto"
  }) : {});
}], ["__scopeId", "data-v-f2e3e2ae"]]);wx.createComponent(i);