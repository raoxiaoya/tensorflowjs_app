var _toConsumableArray2 = require("../../../@babel/runtime/helpers/toConsumableArray");var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../../common/vendor.js"),
  e = require("../../../apis/sport/study-homework.js"),
  s = require("../mixture.js"),
  o = {
    mixins: [t.AppUtils],
    data: function data() {
      return this.theme = t.index.$theme, this.categoryMap = s.mixture.getHomeworkCategoryMap(), this.statusMap = s.mixture.getHomeworkStatusMap(), {
        statusFilter: ["所有", "进行中", "已结束"],
        statusIndex: 0,
        studentName: t.index.getStorageSync("homework_student_name"),
        students: [],
        studentVisibled: !1,
        homeworks: [],
        loading: !1,
        isPullDown: !1,
        pageIndex: 1,
        pageSize: 10,
        isLasted: !1
      };
    },
    methods: {
      loadNames: function loadNames() {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var s, o;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return t.profileApi.get();
              case 2:
                s = _context.sent;
                if (s.success) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return");
              case 5:
                o = s.result;
                _context.next = 8;
                return e.studyHomeworkApi.getStudentList({
                  params: {
                    userId: o.id
                  }
                });
              case 8:
                s = _context.sent;
                s.success && (_this.students = s.result.map(function (t) {
                  return {
                    text: t,
                    color: "#2B2B2B"
                  };
                }));
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      loadFavitors: function loadFavitors(s) {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var _this2$homeworks;
          var o, i, a;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                s = s || 1;
                o = null;
                0 != _this2.statusIndex && (o = 2 === _this2.statusIndex);
                _context2.next = 5;
                return e.studyHomeworkApi.searchFavorites({
                  params: {
                    studentName: _this2.studentName,
                    isClosed: o,
                    pageIndex: s,
                    pageSize: _this2.pageSize
                  },
                  options: {
                    loading: !1,
                    onLoading: function onLoading(t) {
                      return _this2.loading = t;
                    }
                  }
                });
              case 5:
                i = _context2.sent;
                if (i.success) {
                  _context2.next = 8;
                  break;
                }
                return _context2.abrupt("return");
              case 8:
                t.index.stopPullDownRefresh();
                a = i.result;
                _this2.pageIndex = a.index, _this2.isPullDown = !1, _this2.isLasted = a.data.length < _this2.pageSize, 1 == a.pageIndex ? _this2.homeworks = a.data : (_this2$homeworks = _this2.homeworks).push.apply(_this2$homeworks, _toConsumableArray2(a.data));
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onFilterChange: function onFilterChange(t) {
        this.statusIndex = t.index, this.loadFavitors();
      },
      onSwitchStudent: function onSwitchStudent() {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3.studentName) {
                  _context3.next = 8;
                  break;
                }
                _context3.t0 = t.utils.isEmptyArray(_this3.students);
                if (!_context3.t0) {
                  _context3.next = 5;
                  break;
                }
                _context3.next = 5;
                return _this3.loadNames();
              case 5:
                t.utils.isEmptyArray(_this3.students) ? _this3.$utils.showToast("您暂未加入任何作业。") : _this3.studentVisibled = !0;
                _context3.next = 9;
                break;
              case 8:
                _this3.$utils.showToast("您暂未加入任何作业。");
              case 9:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      onSwitchStudentClose: function onSwitchStudentClose(t) {
        this.studentVisibled = !1;
      },
      onSelectStudent: function onSelectStudent(e) {
        this.studentVisibled = !1, this.studentName = e.text, t.index.setStorageSync("homework_student_name", e.text), this.loadFavitors();
      }
    },
    onLoad: function onLoad(e) {
      var _this4 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee4() {
        return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = _this4.studentName;
              if (_context4.t0) {
                _context4.next = 5;
                break;
              }
              _context4.next = 4;
              return _this4.loadNames();
            case 4:
              t.utils.isEmptyArray(_this4.students) || (_this4.studentName = _this4.students[0].text);
            case 5:
              _context4.next = 7;
              return _this4.loadFavitors();
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    onPullDownRefresh: function onPullDownRefresh() {
      this.isPullDown = !0, this.loadFavitors();
    },
    onReachBottom: function onReachBottom() {
      this.loadFavitors(this.pageIndex + 1);
    }
  };if (!Array) {
  (t.resolveComponent("login-modal") + t.resolveComponent("tui-tab") + t.resolveComponent("iconfont") + t.resolveComponent("tag") + t.resolveComponent("list-viewer") + t.resolveComponent("tui-actionsheet"))();
}Math || (function () {
  return "../../../components/login-modal.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-tab/tui-tab.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/list-viewer.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-actionsheet/tui-actionsheet.js";
})();var i = t._export_sfc(o, [["render", function (e, s, o, i, a, n) {
  return {
    a: t.p({
      required: !0
    }),
    b: t.o(n.onFilterChange),
    c: t.p({
      tabs: a.statusFilter,
      current: a.statusIndex,
      "slider-type": "block",
      "slider-height": "56rpx",
      bottom: "12rpx",
      size: 32,
      sliderBgColor: "#FF6C4436",
      selectedColor: e.theme.colorPrimary,
      "slider-radius": "32rpx"
    }),
    d: t.t(a.studentName || "----"),
    e: t.p({
      name: "person-switch"
    }),
    f: t.o(n.onSwitchStudent),
    g: t.p({
      color: "blue",
      shape: "circle",
      plain: !0,
      hover: !0
    }),
    h: t.p({
      name: "add-circle"
    }),
    i: t.f(a.homeworks, function (s, o, i) {
      return {
        a: t.t(s.homework.title),
        b: t.t(e.statusMap.getText(!s.homework.isClosed)),
        c: e.statusMap.getColor(!s.homework.isClosed),
        d: t.t(e.categoryMap.getText(s.homework.category)),
        e: "8b93cb02-6-" + i + ",8b93cb02-5",
        f: t.p({
          color: e.categoryMap.getColor(s.homework.category),
          plain: !0
        }),
        g: t.t(s.homework.school),
        h: "8b93cb02-7-" + i + ",8b93cb02-5",
        i: t.t(s.homework.class),
        j: "8b93cb02-8-" + i + ",8b93cb02-5",
        k: t.t(s.homework.teacherName),
        l: "8b93cb02-9-" + i + ",8b93cb02-5",
        m: t.t(e.$filters.formatDate(s.homework.createdTime, "yyyy-MM-dd HH:mm:ss")),
        n: t.t(s.studentName),
        o: "8b93cb02-10-" + i + ",8b93cb02-5",
        p: t.t(e.$filters.formatDate(s.createdTime, "yyyy-MM-dd HH:mm:ss")),
        q: s.id,
        r: "./detail?id=" + s.id
      };
    }),
    j: t.p({
      "list-data": a.homeworks,
      loading: a.loading && !a.isPullDown,
      "is-lasted": a.isLasted,
      "no-data-text": "暂无作业，可点击右上角+添加"
    }),
    k: t.o(n.onSelectStudent),
    l: t.o(n.onSwitchStudentClose),
    m: t.p({
      show: a.studentVisibled,
      "item-list": a.students,
      tips: "切换学生/学员"
    })
  };
}]]);wx.createPage(i);