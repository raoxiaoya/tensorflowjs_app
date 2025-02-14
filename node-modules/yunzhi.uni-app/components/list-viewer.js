var t = require("../../../common/vendor.js"),
  a = {
    name: "listViewer",
    options: {
      styleIsolation: "shared"
    },
    props: {
      inline: {
        type: Boolean,
        default: !1
      },
      loading: {
        type: Boolean,
        default: null
      },
      loadingText: {
        type: String,
        default: function _default() {
          return "加载中，请稍后...";
        }
      },
      listData: {
        type: [Array],
        default: null
      },
      noDataText: {
        type: String,
        default: "当前无记录"
      },
      noDataGotoText: {
        type: String,
        default: null
      },
      noDataGotoPage: {
        type: String,
        default: null
      },
      isLasted: {
        type: Boolean,
        default: !1
      },
      lastedText: {
        type: String,
        default: function _default() {
          return "没有更多了";
        }
      }
    },
    data: function data() {
      return {
        noDataImage: t.noDataImage
      };
    },
    computed: {
      isNoData: function isNoData() {
        return !0 !== this.loading && t.utils.isEmptyArray(this.listData);
      }
    },
    methods: {
      onGotoDataPage: function onGotoDataPage() {
        this.$emit("noDataGo"), this.noDataGotoPage && t.index.navigateTo({
          url: this.noDataGotoPage
        });
      }
    }
  };if (!Array) {
  (t.resolveComponent("tui-no-data") + t.resolveComponent("tui-loadmore") + t.resolveComponent("tui-nomore"))();
}Math || (function () {
  return "../thorui/tui-no-data/tui-no-data.js";
} + function () {
  return "../thorui/tui-loadmore/tui-loadmore.js";
} + function () {
  return "../thorui/tui-nomore/tui-nomore.js";
})();var o = t._export_sfc(a, [["render", function (a, o, e, n, i, l) {
  return t.e({
    a: l.isNoData && !e.loading
  }, l.isNoData && !e.loading ? {
    b: t.t(e.noDataText),
    c: t.o(l.onGotoDataPage),
    d: t.p({
      imgUrl: i.noDataImage,
      btnText: e.noDataGotoText,
      fixed: !e.inline
    })
  } : {}, {
    e: e.loading,
    f: t.p({
      index: 3,
      type: "primary",
      text: e.loadingText
    }),
    g: !e.loading && !l.isNoData && e.isLasted,
    h: t.p({
      text: e.lastedText
    })
  });
}]]);wx.createComponent(o);