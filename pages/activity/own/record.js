var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _toConsumableArray2 = require("../../../@babel/runtime/helpers/toConsumableArray");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  a = require("../../../apis/sport/sport-record.js"),
  t = require("../../fitness/mixture.js"),
  i = {
    mixins: [e.AppUtils],
    data: function data() {
      return {
        theme: e.index.$theme,
        activityId: null,
        name: null,
        records: [],
        loading: !1,
        isPullDown: !1,
        pageIndex: 1,
        pageSize: 10,
        isLasted: !1
      };
    },
    methods: {
      formatSeconds: t.fitnessMixture.formatSeconds,
      sportThumbnail: function sportThumbnail(e) {
        return e = e ? this.$utils.thumbnailUrl(e, 128, 128) : "/static/logo_gray.png";
      },
      loadRecords: function loadRecords(t) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var _this$records;
          var i, s;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(t = t || 1, _this.loading)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _context.next = 4;
                return a.sportRecrodApi.getByOwner({
                  params: {
                    activityId: _this.activityId,
                    name: _this.name,
                    pageSize: _this.pageSize,
                    pageIndex: t
                  },
                  options: {
                    loading: !1,
                    onLoading: function onLoading(e) {
                      return _this.loading = e;
                    }
                  }
                });
              case 4:
                i = _context.sent;
                if (!(_this.isPullDown = !1, e.index.stopPullDownRefresh(), !i.success)) {
                  _context.next = 7;
                  break;
                }
                return _context.abrupt("return");
              case 7:
                s = i.result;
                _this.pageIndex = s.pageIndex, _this.isLasted = s.pageIndex == s.pageCount, 1 == s.pageIndex ? _this.records = s.data : (_this$records = _this.records).push.apply(_this$records, _toConsumableArray2(s.data));
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onNameSearch: function onNameSearch(e) {
        this.name = e ? e.value : null, this.loadRecords(1);
      }
    },
    onLoad: function onLoad(e) {
      this.activityId = e.id, this.loadRecords(1);
    },
    onPullDownRefresh: function onPullDownRefresh() {
      this.isPullDown = !0, this.loadRecords(1);
    },
    onReachBottom: function onReachBottom() {
      this.isLasted || this.loading || this.loadRecords(this.pageIndex + 1);
    }
  };if (!Array) {
  (e.resolveComponent("tui-searchbar") + e.resolveComponent("tag") + e.resolveComponent("list-viewer"))();
}Math || (function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-searchbar/tui-searchbar.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/list-viewer.js";
})();var s = e._export_sfc(i, [["render", function (a, t, i, s, o, r) {
  return {
    a: e.o(r.onNameSearch),
    b: e.o(r.onNameSearch),
    c: e.p({
      "background-color": "#FFFFFF",
      "input-bg-color": "#ededed",
      placeholder: "输入参赛签到姓名搜索"
    }),
    d: e.f(o.records, function (t, i, s) {
      return e.e({
        a: r.sportThumbnail(t.sport.coverUrl),
        b: e.t(t.sport.name),
        c: t.team
      }, t.team ? {
        d: e.t(t.team),
        e: "54bac3cb-2-" + s + ",54bac3cb-1",
        f: e.p({
          color: "blue",
          shape: "circle",
          plain: !0
        })
      } : {}, {
        g: t.name
      }, t.name ? {
        h: e.t(t.name),
        i: "54bac3cb-3-" + s + ",54bac3cb-1",
        j: e.p({
          shape: "circle",
          plain: !0
        })
      } : {}, {
        k: t.mobile
      }, t.mobile ? {
        l: e.t(t.mobile),
        m: "54bac3cb-4-" + s + ",54bac3cb-1",
        n: e.p({
          shape: "circle",
          plain: !0
        })
      } : {}, {
        o: t.cardid
      }, t.cardid ? {
        p: e.t(t.cardid),
        q: "54bac3cb-5-" + s + ",54bac3cb-1",
        r: e.p({
          shape: "circle",
          plain: !0
        })
      } : {}, {
        s: t.remark
      }, t.remark ? {
        t: e.t(t.remark),
        v: "54bac3cb-6-" + s + ",54bac3cb-1",
        w: e.p({
          shape: "circle",
          plain: !0
        })
      } : {}, {
        x: 10 == t.tickMode
      }, 10 == t.tickMode ? {
        y: e.t(t.counts)
      } : {}, {
        z: e.t(r.formatSeconds(t.times)),
        A: e.t(a.$filters.formatDate(t.atTime, "yyyy-MM-dd HH:mm:ss")),
        B: t.id
      });
    }),
    e: e.p({
      loading: o.loading && !o.isPullDown,
      listData: o.records,
      isLasted: o.isLasted,
      noDataText: "无此参赛记录"
    })
  };
}]]);wx.createPage(s);