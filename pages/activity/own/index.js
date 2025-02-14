var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _toConsumableArray2 = require("../../../@babel/runtime/helpers/toConsumableArray");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  t = require("../../../apis/sport/user-activity.js"),
  i = require("../mixture.js"),
  o = {
    mixins: [e.AppUtils],
    data: function data() {
      return this.categoryMap = i.mixture.getCategoryMap(), this.statusMap = i.mixture.getStatusMap(), {
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
      assertCoverUrl: function assertCoverUrl(e) {
        return e.coverUrl ? this.$utils.thumbnailUrl(e.coverUrl, 200, 200) : "/static/logo_gray.png";
      },
      doSearch: function doSearch(i) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var _this$activities;
          var o, s;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                i = i || 1;
                _context.next = 3;
                return t.userActivityApi.search({
                  params: {
                    title: _this.title || "",
                    status: null == _this.status ? "" : _this.status,
                    pageIndex: i,
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
                o = _context.sent;
                if (!(_this.isPullDown = !1, e.index.stopPullDownRefresh(), !o.success)) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return");
              case 6:
                s = o.result;
                _this.pageIndex = s.pageIndex, _this.isLasted = s.pageIndex == s.pageCount, 1 == s.pageIndex ? _this.activities = s.data : (_this$activities = _this.activities).push.apply(_this$activities, _toConsumableArray2(s.data));
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
      },
      onNavEdit: function onNavEdit(t) {
        e.index.navigateTo({
          url: "./build?id=".concat(t)
        });
      },
      onCopyPassword: function onCopyPassword(t) {
        e.index.setClipboardData({
          data: t
        });
      },
      onDeleteShow: function onDeleteShow(e) {
        this.deleteId = e, this.deleteConfirm = !0;
      },
      onDeleteConfirm: function onDeleteConfirm() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this2.deleteConfirm = !1;
                _context2.next = 3;
                return t.userActivityApi.delete({
                  params: {
                    id: _this2.deleteId
                  },
                  options: {
                    loading: !0,
                    loadingText: "删除中..."
                  }
                });
              case 3:
                _context2.t0 = _context2.sent.success;
                if (!_context2.t0) {
                  _context2.next = 6;
                  break;
                }
                _this2.$utils.showToast("删除成功"), _this2.doSearch();
              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onToggleOnline: function onToggleOnline(e) {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          var i;
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return t.userActivityApi.toggleOnline({
                  params: {
                    id: e
                  }
                });
              case 2:
                i = _context3.sent;
                i.success && (_this3.$utils.showToast(i.message), _this3.doSearch());
              case 4:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    },
    onLoad: function onLoad(e) {
      this.doSearch();
    }
  };if (!Array) {
  (e.resolveComponent("login-modal") + e.resolveComponent("tui-searchbar") + e.resolveComponent("tui-tab") + e.resolveComponent("tag") + e.resolveComponent("iconfont") + e.resolveComponent("list-viewer") + e.resolveComponent("tui-actionsheet"))();
}Math || (function () {
  return "../../../components/login-modal.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-searchbar/tui-searchbar.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-tab/tui-tab.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/list-viewer.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-actionsheet/tui-actionsheet.js";
})();var s = e._export_sfc(o, [["render", function (t, i, o, s, a, n) {
  return {
    a: e.p({
      required: !0
    }),
    b: e.o(n.onTitleSearch),
    c: e.o(n.onTitleSearch),
    d: e.p({
      "background-color": "#FFFFFF",
      "input-bg-color": "#ededed",
      placeholder: "输入活动标题搜索"
    }),
    e: e.o(n.onFilterChange),
    f: e.p({
      tabs: a.statusFilter,
      "slider-type": "block",
      "slider-height": "56rpx",
      bottom: "12rpx",
      size: 32,
      sliderBgColor: "#FF6C4436",
      selectedColor: a.theme.colorPrimary,
      "slider-radius": "32rpx"
    }),
    g: e.f(a.activities, function (i, o, s) {
      return e.e({
        a: n.assertCoverUrl(i),
        b: e.t(t.statusMap.getText(i.status)),
        c: "4d3c8e70-4-" + s + ",4d3c8e70-3",
        d: e.p({
          color: t.statusMap.getColor(i.status),
          shape: "right-circle"
        }),
        e: e.t(i.title),
        f: i.isPublic
      }, i.isPublic ? {
        g: "4d3c8e70-5-" + s + ",4d3c8e70-3",
        h: e.p({
          color: "#0090d8",
          shape: "circle",
          plain: !0
        })
      } : {
        i: "4d3c8e70-6-" + s + ",4d3c8e70-3",
        j: e.p({
          color: "#adad82",
          shape: "circle",
          plain: !0
        })
      }, {
        k: e.t(t.categoryMap.getText(i.category)),
        l: "4d3c8e70-7-" + s + ",4d3c8e70-3",
        m: e.p({
          color: t.categoryMap.getColor(i.category),
          shape: "circle",
          plain: !0
        }),
        n: i.isTeam
      }, i.isTeam ? {
        o: "4d3c8e70-8-" + s + ",4d3c8e70-3",
        p: e.p({
          color: "#be7e5e",
          shape: "circle",
          plain: !0
        })
      } : {}, {
        q: i.password
      }, i.password ? {
        r: e.t(i.password),
        s: "4d3c8e70-9-" + s + ",4d3c8e70-3",
        t: e.p({
          name: "copy",
          hover: !0
        }),
        v: e.o(function (e) {
          return n.onCopyPassword(i.password);
        }, i.id)
      } : {}, {
        w: e.t(t.$filters.formatDate(i.createdTime, "yyyy-MM-dd HH:mm:ss")),
        x: e.o(function (e) {
          return n.onNavEdit(i.id);
        }, i.id),
        y: "../public/detail?preview=true&id=" + i.id,
        z: "./build?id=" + i.id,
        A: e.o(function (e) {
          return n.onDeleteShow(i.id);
        }, i.id),
        B: "./ranking?id=" + i.id,
        C: "./record?id=" + i.id,
        D: e.t(i.isOnline ? "下线" : "上线"),
        E: e.o(function (e) {
          return n.onToggleOnline(i.id);
        }, i.id),
        F: i.id,
        G: "./build?id=" + i.id
      });
    }),
    h: e.p({
      loading: a.loading && !a.isPullDown,
      listData: a.activities,
      isLasted: a.isLasted,
      "no-data-text": "无符合条件的赛事",
      "no-data-goto-text": "去创建",
      "no-data-goto-page": "./build"
    }),
    i: e.o(n.onDeleteConfirm),
    j: e.o(function () {
      return a.deleteConfirm = !1;
    }),
    k: e.p({
      show: a.deleteConfirm,
      "item-list": a.deleteSheets,
      tips: "删除后无法恢复，您确认要删除吗？"
    })
  };
}]]);wx.createPage(s);