var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  t = require("../../../apis/sport/study-homework.js"),
  o = require("../mixture.js"),
  s = {
    mixins: [e.AppUtils],
    data: function data() {
      return this.categoryMap = o.mixture.getHomeworkCategoryMap(), {
        code: null,
        step: 0,
        homework: null,
        checkedNames: [],
        myNames: [],
        student: null
      };
    },
    methods: {
      isEmptyArray: e.utils.isEmptyArray,
      onTips: function onTips() {
        e.index.showToast({
          title: "请向布置作业老师问询作业代码",
          icon: "none"
        });
      },
      onFind: function onFind() {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var o;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (_this.code) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", void e.index.showToast({
                  title: "请输入作业代码",
                  icon: "none"
                }));
              case 2:
                _context.next = 4;
                return t.studyHomeworkApi.getByCode({
                  params: {
                    code: _this.code
                  },
                  options: {
                    loading: !0,
                    loadingText: "查找中..."
                  }
                });
              case 4:
                o = _context.sent;
                _context.t0 = o.success;
                if (!_context.t0) {
                  _context.next = 14;
                  break;
                }
                _this.checkedNames = [];
                _this.homework = o.result;
                _this.step = 1;
                _context.next = 12;
                return t.studyHomeworkApi.getStudentList({
                  params: {
                    homeworkId: _this.homework.id
                  },
                  options: {
                    loading: !0,
                    loadingText: "加载中..."
                  }
                });
              case 12:
                o = _context.sent;
                o.success && (_this.checkedNames = o.result, _this.loadFavorites());
              case 14:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      loadFavorites: function loadFavorites() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var e;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.homework) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                _context2.next = 4;
                return t.studyHomeworkApi.getFavorites({
                  params: {
                    homeworkId: _this2.homework.id,
                    pageIndex: 1,
                    pageSize: 30
                  }
                });
              case 4:
                e = _context2.sent;
                e.success && (_this2.myNames = e.result.data.map(function (e) {
                  return e.studentName;
                }));
              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onSelectName: function onSelectName(e) {
        this.student = e;
      },
      onBack: function onBack() {
        this.step = 0;
      },
      onAccept: function onAccept() {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          var o;
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.student) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return", void _this3.$utils.showToast("请选择或输入学生姓名。"));
              case 2:
                if (!(!_this3.isEmptyArray(_this3.homework.students) && !_this3.homework.students.includes(_this3.student))) {
                  _context3.next = 4;
                  break;
                }
                return _context3.abrupt("return", void _this3.$utils.showToast("姓名不在作业名单中，请检查输入是否正确。"));
              case 4:
                _context3.next = 6;
                return t.studyHomeworkApi.accept({
                  data: {
                    homeworkId: _this3.homework.id,
                    studentName: _this3.student.trim()
                  },
                  options: {
                    loading: !0,
                    loadingText: "加入中..."
                  }
                });
              case 6:
                o = _context3.sent;
                o.success && (_this3.$utils.showToast("加入成功。"), e.index.navigateTo({
                  url: "./detail?id=".concat(o.result.id)
                }));
              case 8:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    },
    onLoad: function onLoad(e) {
      var t = e.code;
      t && (this.code = t, this.onFind());
    }
  };if (!Array) {
  (e.resolveComponent("login-modal") + e.resolveComponent("tui-steps") + e.resolveComponent("tui-button") + e.resolveComponent("tag"))();
}Math || (function () {
  return "../../../components/login-modal.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-steps/tui-steps.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/tag.js";
})();var i = e._export_sfc(s, [["render", function (t, o, s, i, a, r) {
  return e.e({
    a: e.p({
      required: !0
    }),
    b: e.p({
      type: 2,
      items: [{
        title: "查找作业"
      }, {
        title: "完善信息"
      }],
      spacing: "180rpx",
      "active-steps": a.step
    }),
    c: 0 == a.step
  }, 0 == a.step ? {
    d: a.code,
    e: e.o(function (e) {
      return a.code = e.detail.value;
    }),
    f: e.o(function () {
      return r.onTips && r.onTips.apply(r, arguments);
    }),
    g: e.o(r.onFind),
    h: e.p({
      type: "primary",
      shape: "circle",
      height: "86rpx",
      margin: "24rpx 0",
      shadow: !0
    })
  } : {}, {
    i: 1 == a.step
  }, 1 == a.step ? e.e({
    j: e.t(a.homework.title),
    k: e.t(t.categoryMap.getText(a.homework.category)),
    l: e.p({
      color: t.categoryMap.getColor(a.homework.category),
      plain: !0
    }),
    m: e.t(a.homework.school),
    n: e.t(a.homework.class),
    o: e.t(a.homework.teacherName),
    p: e.t(t.$filters.formatDate(a.homework.createdTime, "yyyy-MM-dd HH:mm:ss")),
    q: e.t(a.homework.descript),
    r: e.f(a.homework.students, function (t, o, s) {
      return {
        a: e.t(t),
        b: a.checkedNames.includes(t) ? 1 : "",
        c: t == a.student ? 1 : "",
        d: a.checkedNames.includes(t) ? "" : "tap-hover",
        e: o,
        f: e.o(function (e) {
          return r.onSelectName(t);
        }, o)
      };
    }),
    s: !r.isEmptyArray(a.myNames)
  }, r.isEmptyArray(a.myNames) ? {} : {
    t: e.t(a.myNames.join("、"))
  }, {
    v: a.student,
    w: e.o(function (e) {
      return a.student = e.detail.value;
    }),
    x: e.o(r.onAccept),
    y: e.p({
      type: "primary",
      shape: "circle",
      height: "86rpx",
      margin: "24rpx 0",
      shadow: !0
    }),
    z: e.o(function () {
      return r.onBack && r.onBack.apply(r, arguments);
    })
  }) : {});
}]]);wx.createPage(i);