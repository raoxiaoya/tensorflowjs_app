var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _toConsumableArray2 = require("../../@babel/runtime/helpers/toConsumableArray");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  t = require("../../apis/sport/teaching-homework.js"),
  s = require("../fitness/mixture.js"),
  a = {
    mixins: [e.AppUtils],
    data: function data() {
      return this.theme = e.index.$theme, {
        homeworkId: null,
        studentName: null,
        currentDate: e.utils.formatDate(new Date(), "yyyy-MM-dd"),
        grade: null,
        gradeFilter: [{
          name: "所有",
          value: null
        }, {
          name: "合格",
          value: 10
        }, {
          name: "良好",
          value: 20
        }, {
          name: "优秀",
          value: 30
        }, {
          name: "不合格",
          value: -10
        }],
        tasks: [],
        loading: !1,
        isPullDown: !1,
        pageIndex: 1,
        pageSize: 10,
        isLasted: !1
      };
    },
    methods: {
      formatSeconds: s.fitnessMixture.formatSeconds,
      loadTasks: function loadTasks(s) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var _this$tasks;
          var a, o;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this.loading = !0;
                _context.next = 3;
                return t.teachHomewordApi.getTasks({
                  params: {
                    homeworkId: _this.homeworkId,
                    begin: _this.currentDate + " 00:00:00",
                    end: _this.currentDate + " 23:59:59",
                    studentName: _this.studentName,
                    grade: _this.grade
                  },
                  options: {
                    loading: !1
                  }
                });
              case 3:
                a = _context.sent;
                if (!(e.index.stopPullDownRefresh(), _this.loading = !1, !a.success)) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return");
              case 6:
                o = a.result;
                _this.pageIndex = o.pageIndex, _this.isLasted = o.isLasted, 1 == o.pageIndex ? _this.tasks = o.data : (_this$tasks = _this.tasks).push.apply(_this$tasks, _toConsumableArray2(o.data));
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onSelectWeek: function onSelectWeek(e) {
        this.currentDate = e.date, this.loadTasks();
      },
      onNameSearch: function onNameSearch(e) {
        this.studentName = e ? e.value : null, this.loadTasks();
      },
      onGradeChange: function onGradeChange(e) {
        this.grade = e.item.value, this.loadTasks();
      }
    },
    onLoad: function onLoad(e) {
      var _this2 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
        var t;
        return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              t = e.homeworkId;
              t && (_this2.homeworkId = t, _this2.loadTasks());
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onPullDownRefresh: function onPullDownRefresh() {
      this.isPullDown = !0, this.loadTasks();
    },
    onReachBottom: function onReachBottom() {
      this.isLasted || this.loadTasks(this.pageIndex + 1);
    }
  };if (!Array) {
  (e.resolveComponent("login-modal") + e.resolveComponent("tui-week-date") + e.resolveComponent("tui-searchbar") + e.resolveComponent("tui-tab") + e.resolveComponent("homework-task-item") + e.resolveComponent("list-viewer"))();
}Math || (function () {
  return "../../components/login-modal.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-week-date/tui-week-date.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-searchbar/tui-searchbar.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-tab/tui-tab.js";
} + function () {
  return "../../components/homework-task-item.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/list-viewer.js";
})();var o = e._export_sfc(a, [["render", function (t, s, a, o, i, n) {
  return {
    a: e.p({
      required: !0
    }),
    b: e.o(n.onSelectWeek),
    c: e.o(n.onNameSearch),
    d: e.o(n.onNameSearch),
    e: e.p({
      "background-color": "#FFFFFF",
      "input-bg-color": "#ededed",
      placeholder: "请输入作业提交学生姓名搜索"
    }),
    f: e.o(n.onGradeChange),
    g: e.p({
      tabs: i.gradeFilter,
      "slider-type": "block",
      "slider-height": "56rpx",
      bottom: "12rpx",
      size: 32,
      sliderBgColor: "#FF6C4436",
      selectedColor: t.theme.colorPrimary,
      "slider-radius": "32rpx"
    }),
    h: e.f(i.tasks, function (t, s, a) {
      return {
        a: t.id,
        b: "1fc5a303-5-" + a + ",1fc5a303-4",
        c: e.p({
          task: t
        })
      };
    }),
    i: e.p({
      loading: i.loading && !i.isPullDown,
      listData: i.tasks,
      isLasted: i.isLasted,
      "no-data-text": "无作业提交记录",
      inline: !0
    })
  };
}]]);wx.createPage(o);