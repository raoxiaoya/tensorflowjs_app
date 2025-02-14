var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  t = require("../../../apis/sport/study-homework.js"),
  o = require("../mixture.js"),
  r = {
    data: function data() {
      return this.categoryMap = o.mixture.getHomeworkCategoryMap(), this.statusMap = o.mixture.getHomeworkStatusMap(), {
        favorite: null,
        homework: null,
        tasks: [],
        loading: !0,
        currentYear: new Date().getFullYear(),
        currentDate: e.utils.formatDate(new Date(), "yyyy-MM-dd")
      };
    },
    computed: {
      currentDateText: function currentDateText() {
        var t = e.utils.formatDate(new Date(), "yyyy-MM-dd"),
          o = e.utils.formatDate(new Date().addDays(-1), "yyyy-MM-dd");
        return this.currentDate == t ? "今日" : this.currentDate == o ? "昨日" : this.currentDate;
      }
    },
    methods: {
      loadFavorite: function loadFavorite(o) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var r, a, s;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return t.studyHomeworkApi.getFavorite({
                  params: {
                    favoriteId: o
                  },
                  options: {
                    loading: !0,
                    loadingText: "加载中..."
                  }
                });
              case 2:
                r = _context.sent;
                if (!(e.index.stopPullDownRefresh(), !r.success)) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return");
              case 5:
                a = r.result.homework;
                a.sports.forEach(function (e) {
                  return e.disabled = !1;
                });
                s = null;
                20 == a.category && (s = e.dateUtils.getToday(), _this.currentDate = e.utils.formatDate(s.begin, "yyyy-MM-dd")), _this.favorite = r.result, _this.homework = a, _this.loadTasks(s);
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      loadTasks: function loadTasks(o) {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var r, a;
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
                return t.studyHomeworkApi.getTasks({
                  params: {
                    homeworkId: _this2.homework.id,
                    begin: o && e.utils.formatDate(o.begin, "yyyy-MM-dd HH:mm:ss"),
                    end: o && e.utils.formatDate(o.end, "yyyy-MM-dd HH:mm:ss")
                  },
                  options: {
                    loading: !1,
                    onLoading: function onLoading(e) {
                      return _this2.loading = e;
                    }
                  }
                });
              case 4:
                r = _context2.sent;
                if (r.success) {
                  _context2.next = 7;
                  break;
                }
                return _context2.abrupt("return");
              case 7:
                a = r.result.data;
                "今日" != _this2.currentDateText && 10 != _this2.homework.category || a.forEach(function (e) {
                  var t = _this2.homework.sports.find(function (t) {
                    return t.key == e.sportKey;
                  });
                  t && (t.disabled = !0);
                }), _this2.tasks = a;
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onDoing: function onDoing(t) {
        e.index.navigateTo({
          url: "/module-sport/pages/homework/doing?favoriteId=".concat(this.favorite.id, "&sportKey=").concat(t.key)
        });
      },
      onSelectDate: function onSelectDate() {
        this.$refs.dtmPicker.show();
      },
      onDateChanged: function onDateChanged(e) {
        var t = {
          begin: "".concat(e.result, " 00:00:00"),
          end: "".concat(e.result, " 23:59:59")
        };
        this.currentDate = e.result, this.loadTasks(t);
      }
    },
    onLoad: function onLoad(e) {
      var t = e.id;
      this.loadFavorite(t);
    },
    onPullDownRefresh: function onPullDownRefresh() {
      this.loadFavorite(this.favorite.id);
    }
  };if (!Array) {
  (e.resolveComponent("login-modal") + e.resolveComponent("tag") + e.resolveComponent("homework-sport-item") + e.resolveComponent("iconfont") + e.resolveComponent("homework-task-item") + e.resolveComponent("list-viewer") + e.resolveComponent("tui-datetime"))();
}Math || (function () {
  return "../../../components/login-modal.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../../../components/homework-sport-item.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../../components/homework-task-item.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/list-viewer.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-datetime/tui-datetime.js";
})();var a = e._export_sfc(r, [["render", function (t, o, r, a, s, i) {
  return e.e({
    a: e.p({
      required: !0
    }),
    b: s.homework
  }, s.homework ? {
    c: e.t(s.homework.title),
    d: e.t(t.statusMap.getText(!s.homework.isClosed)),
    e: t.statusMap.getColor(!s.homework.isClosed),
    f: e.t(t.categoryMap.getText(s.homework.category)),
    g: e.p({
      color: t.categoryMap.getColor(s.homework.category),
      plain: !0
    }),
    h: e.t(s.homework.school),
    i: e.t(s.homework.class),
    j: e.t(s.favorite.studentName),
    k: e.t(t.$filters.formatDate(s.favorite.createdTime, "yyyy-MM-dd HH:mm:ss")),
    l: e.t(s.homework.descript),
    m: e.t(s.homework.teacherName),
    n: e.t(t.$filters.formatDate(s.homework.createdTime, "yyyy-MM-dd HH:mm:ss")),
    o: e.t(t.$filters.formatDate(s.homework.deadline, "yyyy-MM-dd HH:mm:ss"))
  } : {}, {
    p: s.homework
  }, s.homework ? e.e({
    q: 20 == s.homework.category
  }, 20 == s.homework.category ? {
    r: e.p({
      color: s.homework.cycleDays.includes(1) ? "green" : "default",
      plain: !0
    }),
    s: e.p({
      color: s.homework.cycleDays.includes(2) ? "green" : "default",
      plain: !0
    }),
    t: e.p({
      color: s.homework.cycleDays.includes(3) ? "green" : "default",
      plain: !0
    }),
    v: e.p({
      color: s.homework.cycleDays.includes(4) ? "green" : "default",
      plain: !0
    }),
    w: e.p({
      color: s.homework.cycleDays.includes(5) ? "green" : "default",
      plain: !0
    }),
    x: e.p({
      color: s.homework.cycleDays.includes(6) ? "green" : "default",
      plain: !0
    }),
    y: e.p({
      color: s.homework.cycleDays.includes(0) ? "green" : "default",
      plain: !0
    })
  } : {}, {
    z: e.f(s.homework.sports, function (t, o, r) {
      return {
        a: o,
        b: e.o(i.onDoing, o),
        c: "24e044f4-12-" + r,
        d: e.p({
          "sport-item": t,
          disabled: t.disabled
        })
      };
    })
  }) : {}, {
    A: e.t(i.currentDateText),
    B: e.p({
      name: "arrow-down-s"
    }),
    C: e.o(i.onSelectDate),
    D: e.p({
      shape: "circle",
      hover: !0
    }),
    E: e.f(s.tasks, function (t, o, r) {
      return {
        a: t.id,
        b: "24e044f4-16-" + r + ",24e044f4-15",
        c: e.p({
          task: t
        })
      };
    }),
    F: e.p({
      loading: s.loading,
      "list-data": s.tasks,
      "no-data-text": "暂未提交作业",
      inline: !0
    }),
    G: e.sr("dtmPicker", "24e044f4-17"),
    H: e.o(i.onDateChanged),
    I: e.p({
      type: 2,
      "end-year": s.currentYear,
      "set-date-time": s.currentDate
    })
  });
}]]);wx.createPage(a);