var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  t = require("../../../apis/sport/organize-activity.js"),
  a = require("../mixture.js"),
  s = {
    mixins: [e.AppUtils],
    data: function data() {
      return this.categoryMap = a.mixture.getCategoryMap(), {
        theme: e.index.$theme,
        title: null,
        status: null,
        statusFilter: [{
          name: "所有",
          value: null
        }, {
          name: "进行中",
          value: 0
        }, {
          name: "待开始",
          value: 10
        }, {
          name: "已结束",
          value: 20
        }],
        loading: !1,
        isPullDown: !1,
        activities: [],
        pageSize: 10,
        pageIndex: 1,
        isLasted: !1
      };
    },
    methods: {
      statusClass: function statusClass(e) {
        switch (e) {
          case 10:
            return "not-started";
          case 11:
            return "checking-in";
          case 0:
            return "in-progress";
          case 20:
            return "completed";
          default:
            return "";
        }
      },
      statusText: function statusText(e) {
        switch (e) {
          case 10:
            return "待开始";
          case -10:
            return "未上线";
          case 0:
            return "进行中";
          case 20:
            return "已结束";
          default:
            return "未知";
        }
      },
      assertCoverUrl: function assertCoverUrl(e) {
        return e.coverUrl ? e.coverUrl : "/static/images/activity_default_banner.jpg";
      },
      doSearch: function doSearch(a) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var s, i;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                a = a || 1;
                _context.next = 3;
                return t.organizegApi.search({
                  params: {
                    title: _this.title || "",
                    status: null == _this.status ? "" : _this.status,
                    pageIndex: a,
                    pageSize: _this.pageSize
                  },
                  options: {
                    loading: !1,
                    onLoading: function onLoading(e) {
                      return _this.loading = e;
                    }
                  }
                });
              case 3:
                s = _context.sent;
                if (!(_this.isPullDown = !1, e.index.stopPullDownRefresh(), !s.success)) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return");
              case 6:
                i = s.result;
                _this.pageIndex = i.pageIndex, _this.isLasted = i.pageIndex == i.pageCount, 1 == i.pageIndex ? _this.activities = i.data : i.data.forEach(function (e) {
                  return _this.activities.push(e);
                });
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onTitleSearch: function onTitleSearch(e) {
        this.title = e ? e.value : null, this.doSearch();
      },
      onFilterChange: function onFilterChange(e) {
        this.status = e.item.value, this.doSearch();
      }
    },
    onLoad: function onLoad() {
      var _this2 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
        return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.doSearch();
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onPullDownRefresh: function onPullDownRefresh() {
      this.isPullDown = !0, this.doSearch(1);
    },
    onReachBottom: function onReachBottom(e) {
      this.isLasted || this.doSearch(this.pageIndex + 1);
    },
    onShareAppMessage: function onShareAppMessage() {
      return this.$utils.getShareInfo();
    },
    onShareTimeline: function onShareTimeline() {
      return this.$utils.getShareInfo();
    }
  };if (!Array) {
  (e.resolveComponent("tui-searchbar") + e.resolveComponent("tui-tab") + e.resolveComponent("tag") + e.resolveComponent("list-viewer"))();
}Math || (function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-searchbar/tui-searchbar.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-tab/tui-tab.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/list-viewer.js";
})();var i = e._export_sfc(s, [["render", function (t, a, s, i, r, o) {
  return {
    a: e.o(o.onTitleSearch),
    b: e.o(o.onTitleSearch),
    c: e.p({
      "background-color": "#FFFFFF",
      "input-bg-color": "#ededed",
      placeholder: "输入活动标题搜索"
    }),
    d: e.o(o.onFilterChange),
    e: e.p({
      tabs: r.statusFilter,
      "slider-type": "block",
      "slider-height": "56rpx",
      bottom: "12rpx",
      size: 32,
      sliderBgColor: "#FF6C4436",
      selectedColor: r.theme.colorPrimary,
      "slider-radius": "32rpx"
    }),
    f: e.f(r.activities, function (a, s, i) {
      return e.e({
        a: e.t(o.statusText(a.status)),
        b: e.n(o.statusClass(a.status)),
        c: o.assertCoverUrl(a),
        d: e.t(a.title),
        e: a.isPublic
      }, a.isPublic ? {
        f: "96e93986-3-" + i + ",96e93986-2",
        g: e.p({
          color: "#0090d8",
          shape: "circle",
          plain: !0
        })
      } : {
        h: "96e93986-4-" + i + ",96e93986-2",
        i: e.p({
          color: "#adad82",
          shape: "circle",
          plain: !0
        })
      }, {
        j: e.t(t.categoryMap.getText(a.category)),
        k: "96e93986-5-" + i + ",96e93986-2",
        l: e.p({
          color: t.categoryMap.getColor(a.category),
          shape: "circle",
          plain: !0
        }),
        m: a.isTeam
      }, a.isTeam ? {
        n: "96e93986-6-" + i + ",96e93986-2",
        o: e.p({
          color: "#be7e5e",
          shape: "circle",
          plain: !0
        })
      } : {}, {
        p: e.t(a.organizer),
        q: e.t(t.$filters.formatDate(a.beginTime, "yyyy-MM-dd HH:mm:ss")),
        r: e.t(t.$filters.formatDate(a.endTime, "yyyy-MM-dd HH:mm:ss")),
        s: a.id,
        t: "/pages/activity/public/detail?id=" + a.id
      });
    }),
    g: e.p({
      loading: r.loading && !r.isPullDown,
      listData: r.activities,
      isLasted: r.isLasted,
      noDataText: "无符合条件的赛事"
    })
  };
}]]);s.__runtimeHooks = 6, wx.createPage(i);