var t = require("../../../common/vendor.js"),
  a = {
    name: "pagerContainer",
    options: {
      styleIsolation: "shared"
    },
    props: {
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
      contentData: {
        type: [Object, Array],
        default: null
      },
      noDataText: {
        type: String,
        default: ""
      },
      noDataGotoText: {
        type: String,
        default: null
      },
      noDataGotoPage: {
        type: String,
        default: null
      }
    },
    data: function data() {
      return {
        noDataImage: t.noDataImage
      };
    },
    computed: {
      isNoData: function isNoData() {
        return !0 === this.loading || !this.contentData || this.contentData instanceof Array && this.contentData.length < 1;
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
  (t.resolveComponent("tui-no-data") + t.resolveComponent("pager-loading"))();
}Math || (function () {
  return "../thorui/tui-no-data/tui-no-data.js";
} + function () {
  return "./pager-loading.js";
})();var o = t._export_sfc(a, [["render", function (a, o, e, n, i, r) {
  return t.e({
    a: !r.isNoData
  }, (r.isNoData, {}), {
    b: r.isNoData
  }, r.isNoData ? {
    c: t.t(e.noDataText),
    d: t.o(r.onGotoDataPage),
    e: t.p({
      imgUrl: i.noDataImage,
      btnText: e.noDataGotoText
    })
  } : {}, {
    f: !e.loading,
    g: e.loading,
    h: t.p({
      text: e.loadingText
    })
  });
}]]);wx.createComponent(o);