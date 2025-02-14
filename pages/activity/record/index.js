var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _toConsumableArray2 = require("../../../@babel/runtime/helpers/toConsumableArray");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  t = require("../../../apis/sport/sport-record.js"),
  s = {
    data: function data() {
      return {
        theme: e.index.$theme,
        filterTabs: {
          tabs: [{
            name: "竞赛活动",
            value: 10
          }, {
            name: "打卡活动",
            value: 11
          }],
          current: 0
        },
        records: [],
        loading: !1,
        isPullDown: !1,
        pageIndex: 1,
        pageSize: 10,
        isLasted: !1
      };
    },
    methods: {
      loadRecords: function loadRecords(s) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var _this$records;
          var i, o, r;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(s = s || 1, _this.loading)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                i = _this.filterTabs.tabs[_this.filterTabs.current].value;
                _context.next = 5;
                return t.sportRecrodApi.getByUser({
                  params: {
                    category: i,
                    pageSize: _this.pageSize,
                    pageIndex: s
                  },
                  options: {
                    loading: !1,
                    onLoading: function onLoading(e) {
                      return _this.loading = e;
                    }
                  }
                });
              case 5:
                o = _context.sent;
                if (!(_this.isPullDown = !1, e.index.stopPullDownRefresh(), !o.success)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return");
              case 8:
                r = o.result;
                _this.pageIndex = r.pageIndex, _this.isLasted = r.pageIndex == r.pageCount, 1 == r.pageIndex ? _this.records = r.data : (_this$records = _this.records).push.apply(_this$records, _toConsumableArray2(r.data));
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onFilterChange: function onFilterChange(e) {
        var t = e.index;
        this.filterTabs.current = t, this.loadRecords(1);
      }
    },
    onLoad: function onLoad(e) {
      this.loadRecords(1);
    },
    onPullDownRefresh: function onPullDownRefresh() {
      this.isPullDown = !0, this.loadRecords(1);
    },
    onReachBottom: function onReachBottom() {
      this.isLasted || this.loading || this.loadRecords(this.pageIndex + 1);
    }
  };if (!Array) {
  (e.resolveComponent("tui-tabs") + e.resolveComponent("activity-record-item") + e.resolveComponent("list-viewer"))();
}Math || (function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-tabs/tui-tabs.js";
} + function () {
  return "../../../components/activity-record-item.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/list-viewer.js";
})();var i = e._export_sfc(s, [["render", function (t, s, i, o, r, a) {
  return {
    a: e.o(a.onFilterChange),
    b: e.p({
      tabs: r.filterTabs.tabs,
      currentTab: r.filterTabs.current,
      selectedColor: r.theme.colorPrimary,
      sliderBgColor: r.theme.colorPrimary,
      itemWidth: "50%",
      isFixed: !0
    }),
    c: e.f(r.records, function (t, s, i) {
      return {
        a: "6182db25-2-" + i + ",6182db25-1",
        b: e.p({
          record: t
        }),
        c: t.id,
        d: "./detail?id=" + t.id
      };
    }),
    d: e.p({
      loading: r.loading && !r.isPullDown,
      listData: r.records,
      isLasted: r.isLasted,
      noDataText: "无此参赛记录"
    })
  };
}]]);wx.createPage(i);