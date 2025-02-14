var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _toConsumableArray2 = require("../../@babel/runtime/helpers/toConsumableArray");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  t = require("../../apis/sport/teaching-homework.js"),
  o = require("../study-homework/mixture.js"),
  s = {
    mixins: [e.AppUtils],
    data: function data() {
      return this.theme = e.index.$theme, this.categoryMap = o.mixture.getHomeworkCategoryMap(), this.statusMap = o.mixture.getHomeworkStatusMap(), {
        filterTabs: {
          tabs: [{
            name: "所有",
            value: ""
          }, {
            name: "打卡作业",
            value: 20
          }, {
            name: "测验作业",
            value: 10
          }],
          current: 0
        },
        homeworks: null,
        loading: !1,
        isPullDown: !1,
        pageIndex: 1,
        pageSize: 10,
        isLasted: !1,
        deleteId: null,
        deleteConfirm: !1,
        deleteSheets: [{
          text: "确认删除",
          color: e.index.$theme.colorError
        }]
      };
    },
    methods: {
      doSearch: function doSearch(o) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var _this$homeworks;
          var s, i, a;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                o = o || 1;
                s = _this.filterTabs.tabs[_this.filterTabs.current].value;
                _context.next = 4;
                return t.teachHomewordApi.search({
                  params: {
                    category: s,
                    pageIndex: o,
                    pageSize: _this.pageSize
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
                if (!(e.index.stopPullDownRefresh(), _this.isPullDown = !1, !i.success)) {
                  _context.next = 7;
                  break;
                }
                return _context.abrupt("return");
              case 7:
                a = i.result;
                _this.pageIndex = a.pageIndex, _this.isLasted = a.pageIndex == a.pageCount, 1 == a.pageIndex ? _this.homeworks = a.data : (_this$homeworks = _this.homeworks).push.apply(_this$homeworks, _toConsumableArray2(a.data));
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onFilterChange: function onFilterChange(e) {
        this.homeworks = [];
        var t = e.index;
        this.filterTabs.current = t, this.doSearch(1);
      },
      onNavDetail: function onNavDetail(t) {
        e.index.navigateTo({
          url: "./detail?id=".concat(t)
        });
      },
      onCopyCode: function onCopyCode(t) {
        e.index.setClipboardData({
          data: t
        });
      },
      onToggleIssued: function onToggleIssued(e) {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var o;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return t.teachHomewordApi.toggleIssued({
                  params: {
                    id: e
                  }
                });
              case 2:
                o = _context2.sent;
                o.success && (_this2.$utils.showToast(o.message), _this2.doSearch());
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onDeleteShow: function onDeleteShow(e) {
        this.deleteId = e, this.deleteConfirm = !0;
      },
      onDeleteConfirm: function onDeleteConfirm() {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _this3.deleteConfirm = !1;
                _context3.next = 3;
                return t.teachHomewordApi.delete({
                  params: {
                    id: _this3.deleteId
                  },
                  options: {
                    loading: !0,
                    loadingText: "删除中..."
                  }
                });
              case 3:
                _context3.t0 = _context3.sent.success;
                if (!_context3.t0) {
                  _context3.next = 6;
                  break;
                }
                _this3.$utils.showToast("删除成功"), _this3.doSearch();
              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    },
    onLoad: function onLoad() {
      this.doSearch();
    },
    onPullDownRefresh: function onPullDownRefresh() {
      this.doSearch();
    },
    onReachBottom: function onReachBottom() {
      this.isLasted || this.loading || this.doSearch(this.pageIndex + 1);
    }
  };if (!Array) {
  (e.resolveComponent("tui-tabs") + e.resolveComponent("tag") + e.resolveComponent("iconfont") + e.resolveComponent("list-viewer") + e.resolveComponent("tui-actionsheet"))();
}Math || (function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-tabs/tui-tabs.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/list-viewer.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-actionsheet/tui-actionsheet.js";
})();var i = e._export_sfc(s, [["render", function (t, o, s, i, a, n) {
  return {
    a: e.o(n.onFilterChange),
    b: e.p({
      tabs: a.filterTabs.tabs,
      currentTab: a.filterTabs.current,
      selectedColor: "#FF4900",
      sliderBgColor: "#FF4900",
      isFixed: !0
    }),
    c: e.f(a.homeworks, function (o, s, i) {
      return e.e({
        a: e.t(o.title),
        b: !o.issued
      }, o.issued ? {
        c: e.t(t.statusMap.getText(!o.isClosed)),
        d: t.statusMap.getColor(!o.isClosed)
      } : {}, {
        e: e.t(t.categoryMap.getText(o.category)),
        f: "beb66c78-2-" + i + ",beb66c78-1",
        g: e.p({
          color: t.categoryMap.getColor(o.category),
          plain: !0
        }),
        h: e.t(o.school),
        i: "beb66c78-3-" + i + ",beb66c78-1",
        j: e.t(o.class),
        k: "beb66c78-4-" + i + ",beb66c78-1",
        l: e.t(o.students.length),
        m: "beb66c78-5-" + i + ",beb66c78-1",
        n: e.t(o.sports.length),
        o: "beb66c78-6-" + i + ",beb66c78-1",
        p: "beb66c78-7-" + i + ",beb66c78-1",
        q: e.t(o.code),
        r: "beb66c78-8-" + i + ",beb66c78-1",
        s: e.o(function (e) {
          return n.onCopyCode(o.code);
        }, o.id),
        t: e.t(o.teacherName),
        v: "beb66c78-9-" + i + ",beb66c78-1",
        w: e.t(t.$filters.formatDate(o.createdTime, "yyyy-MM-dd HH:mm:ss")),
        x: "./detail?id=" + o.id,
        y: "./build?id=" + o.id,
        z: e.o(function (e) {
          return n.onDeleteShow(o.id);
        }, o.id),
        A: "./task?homeworkId=" + o.id,
        B: e.t(o.issued ? "撤回" : "发布"),
        C: e.o(function (e) {
          return n.onToggleIssued(o.id);
        }, o.id),
        D: o.id,
        E: e.o(function (e) {
          return n.onNavDetail(o.id);
        }, o.id)
      });
    }),
    d: e.p({
      name: "copy"
    }),
    e: e.p({
      loading: a.loading && !a.isPullDown,
      listData: a.homeworks,
      isLasted: a.isLasted,
      noDataText: "暂无此类体测作业^_^"
    }),
    f: e.o(n.onDeleteConfirm),
    g: e.o(function () {
      return a.deleteConfirm = !1;
    }),
    h: e.p({
      show: a.deleteConfirm,
      "item-list": a.deleteSheets,
      tips: "删除后无法恢复，您确认要删除吗？"
    })
  };
}]]);wx.createPage(i);