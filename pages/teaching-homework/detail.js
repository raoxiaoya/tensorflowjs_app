var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  o = require("../../apis/sport/teaching-homework.js"),
  t = require("../study-homework/mixture.js"),
  r = {
    mixins: [e.AppUtils],
    data: function data() {
      return this.theme = e.index.$theme, this.categoryMap = t.mixture.getHomeworkCategoryMap(), this.weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], {
        loading: !1,
        homework: null,
        studentRemoveModal: !1,
        currentFavoritesId: null,
        studentList: {
          loading: !1,
          items: [],
          favorites: 0
        }
      };
    },
    methods: {
      formatSeconds: function formatSeconds(e) {
        return "".concat(parseInt(e / 60).toString().padStart(2, "0"), "'").concat((e % 60).toString().padStart(2, "0"), "\"");
      },
      loadHomework: function loadHomework(t) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var r;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return o.teachHomewordApi.get({
                  params: {
                    id: t
                  },
                  options: {
                    loadingText: "加载作业..."
                  }
                });
              case 2:
                r = _context.sent;
                e.index.stopPullDownRefresh(), r.success && (_this.homework = r.result, _this.loadFavorites());
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      loadFavorites: function loadFavorites() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var e, t;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = !0;
                _context2.next = 3;
                return o.teachHomewordApi.getFavorites({
                  params: {
                    homeworkId: _this2.homework.id,
                    pageSize: 200
                  },
                  options: {
                    loading: !1
                  }
                });
              case 3:
                e = _context2.sent;
                _this2.loading = !1;
                t = e.result.data;
                _this2.homework.students.forEach(function (e) {
                  if (-1 != t.findIndex(function (o) {
                    return o.studentName == e;
                  })) return;
                  var o = {
                    id: null,
                    studentName: e,
                    createdTime: null
                  };
                  t.push(o);
                }), _this2.studentList.items = t, _this2.studentList.favorites = e.result.rowCount;
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onCopyCode: function onCopyCode() {
        e.index.setClipboardData({
          data: this.homework.code
        });
      },
      buildShare: function buildShare() {
        var o = "code=".concat(this.homework.code, "&timestamp=").concat(e.utils.timestamp());
        return {
          title: "\u6211\u5728\u300C".concat(e.index.$appConfig.title, "\u300D\u5E03\u7F6E\u4E86\u4F53\u80B2\u4F5C\u4E1A\u300A").concat(this.homework.title, "\u300B\uFF0C\u8D76\u5FEB\u53BB\u5B8C\u6210\u5427\uFF01"),
          path: "/pages/study-homework/homework/accept?".concat(o)
        };
      },
      doStudentRemove: function doStudentRemove(e) {
        e && (this.currentFavoritesId = e, this.studentRemoveModal = !0);
      },
      onStudentRemove: function onStudentRemove() {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return o.teachHomewordApi.cancelFavorite({
                  params: {
                    favoriteId: _this3.currentFavoritesId
                  }
                });
              case 2:
                _this3.studentRemoveModal = !1;
                _this3.currentFavoritesId = null;
              case 4:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    },
    onLoad: function onLoad(e) {
      var o = e.id;
      o && this.loadHomework(o);
    },
    onPullDownRefresh: function onPullDownRefresh() {
      this.loadHomework(this.homework.id);
    },
    onShareAppMessage: function onShareAppMessage() {
      return this.buildShare();
    }
  };if (!Array) {
  (e.resolveComponent("login-modal") + e.resolveComponent("tag") + e.resolveComponent("iconfont") + e.resolveComponent("list-viewer") + e.resolveComponent("tui-modal"))();
}Math || (function () {
  return "../../components/login-modal.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/list-viewer.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-modal/tui-modal.js";
})();var i = e._export_sfc(r, [["render", function (o, t, r, i, s, a) {
  return e.e({
    a: e.p({
      required: !0
    }),
    b: s.homework
  }, s.homework ? e.e({
    c: e.t(s.homework.title),
    d: e.t(o.categoryMap.getText(s.homework.category)),
    e: e.p({
      color: o.categoryMap.getColor(s.homework.category),
      plain: !0
    }),
    f: s.homework.issued
  }, s.homework.issued ? {
    g: e.p({
      color: "blue",
      plain: !0
    })
  } : {
    h: e.p({
      color: "#999999",
      plain: !0
    })
  }, {
    i: s.homework.isClosed
  }, s.homework.isClosed ? {
    j: e.p({
      color: o.theme.colorGreen,
      plain: !0
    })
  } : {
    k: e.p({
      color: o.theme.colorError,
      plain: !0
    })
  }, {
    l: e.t(s.homework.sports.length),
    m: e.p({
      plain: !0
    }),
    n: e.t(s.homework.school),
    o: e.t(s.homework.class),
    p: e.t(s.homework.teacherName),
    q: e.t(s.homework.code),
    r: e.o(a.onCopyCode),
    s: e.p({
      name: "copy"
    }),
    t: e.t(o.$filters.formatDate(s.homework.createdTime, "yyyy-MM-dd HH:mm:ss")),
    v: e.t(o.$filters.formatDate(s.homework.deadline, "yyyy-MM-dd HH:mm:ss")),
    w: 20 == s.homework.category
  }, 20 == s.homework.category ? {
    x: e.f(s.homework.cycleDays, function (t, r, i) {
      return {
        a: e.t(o.weeks[t]),
        b: t,
        c: "0c477e4f-11-" + i
      };
    }),
    y: e.p({
      color: "dark-light-primary",
      plain: !0
    })
  } : {}, {
    z: s.homework.descript
  }, s.homework.descript ? {
    A: e.t(s.homework.descript)
  } : {}) : {}, {
    B: s.homework
  }, s.homework ? {
    C: e.t(s.studentList.favorites),
    D: e.t(s.homework.students.length),
    E: e.f(s.studentList.items, function (t, r, i) {
      return e.e({
        a: e.t(r + 1),
        b: e.t(t.studentName),
        c: t.createdTime
      }, t.createdTime ? {
        d: e.t(o.$filters.formatDate(t.createdTime, "yyyy-MM-dd HH:mm:ss"))
      } : {}, {
        e: t.id ? "" : 1,
        f: e.o(function (e) {
          return a.doStudentRemove(t.id);
        }, r),
        g: r
      });
    }),
    F: e.p({
      loading: s.studentList.loading,
      "list-data": s.studentList.items,
      "no-data-text": "暂无学生名单",
      inline: !0
    })
  } : {}, {
    G: s.homework
  }, s.homework ? {
    H: "./build?id=" + s.homework.id,
    I: "./build?clone=true&id=" + s.homework.id,
    J: "./task?homeworkId=" + s.homework.id
  } : {}, {
    K: e.o(a.onStudentRemove),
    L: e.o(function () {
      return s.studentRemoveModal = !1;
    }),
    M: e.p({
      show: s.studentRemoveModal,
      title: "提示",
      content: "您确认要将学生从作业中移除？"
    })
  });
}]]);r.__runtimeHooks = 2, wx.createPage(i);