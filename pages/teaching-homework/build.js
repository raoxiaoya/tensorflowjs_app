require("../../@babel/runtime/helpers/Arrayincludes");var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  t = require("../../apis/sport/teaching-homework.js"),
  o = require("../fitness/mixture.js"),
  s = {
    mixins: [e.AppUtils],
    data: function data() {
      return {
        theme: e.index.$theme,
        studentsText: null,
        studentsTextError: null,
        model: {
          category: 20,
          title: null,
          school: null,
          class: null,
          teacherName: null,
          students: [],
          deadline: null,
          cycleDays: [],
          sports: [],
          issued: !1
        },
        cycleDays: [{
          week: "1",
          label: "周一",
          checked: !0
        }, {
          week: "2",
          label: "周二",
          checked: !0
        }, {
          week: "3",
          label: "周三",
          checked: !0
        }, {
          week: "4",
          label: "周四",
          checked: !0
        }, {
          week: "5",
          label: "周五",
          checked: !0
        }, {
          week: "6",
          label: "周六",
          checked: !1
        }, {
          week: "0",
          label: "周日",
          checked: !1
        }],
        rules: {
          title: {
            required: !0,
            requiredMessage: "标题不能为空",
            error: null
          },
          school: {
            required: !0,
            requiredMessage: "学校/机构不能为空",
            error: null
          },
          class: {
            required: !0,
            requiredMessage: "班级不能为空",
            error: null
          },
          teacherName: {
            required: !0,
            requiredMessage: "老师不能为空",
            error: null
          },
          deadline: {
            required: !0,
            requiredMessage: "作业截止时间不能为空",
            error: null
          },
          cycleDays: {
            required: !1,
            fn: function fn(t, o) {
              if (20 == o.entity.category) return e.utils.isEmptyArray(t) ? "打卡周期不能为空" : void 0;
            },
            error: null
          }
        },
        sportModalVisibled: !1,
        sportEditMode: !1,
        currentSport: null,
        submitting: !1
      };
    },
    methods: {
      formatSeconds: o.fitnessMixture.formatSeconds,
      loadHomeWork: function loadHomeWork(o) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var s, r;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return t.teachHomewordApi.get({
                  params: {
                    id: o
                  },
                  options: {
                    loading: !0,
                    loadingText: "加载作业..."
                  }
                });
              case 2:
                s = _context.sent;
                if (s.success) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return");
              case 5:
                r = s.result;
                _this.cycleDays.forEach(function (e) {
                  e.checked = r.cycleDays.includes(parseInt(e.week));
                }), e.utils.isEmptyArray(r.students) || (_this.studentsText = r.students.join("\n")), _this.model = s.result, e.index.setNavigationBarTitle({
                  title: "编辑体测作业"
                });
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onCategoryChange: function onCategoryChange(e) {
        this.model.category = e.detail.value;
      },
      onCycleDaysChange: function onCycleDaysChange(e) {
        var t = e.detail.value;
        this.cycleDays.forEach(function (e) {
          e.checked = t.includes(e.week);
        });
      },
      onStudentsTextChange: function onStudentsTextChange() {
        if (!this.studentsText) return this.studentsTextError = null, void (this.model.students = []);
        var e = this.studentsText.split("\n");
        e.some(function (e) {
          return !e;
        }) ? this.studentsTextError = "学生姓名输入错误，请检查是否有空行" : (this.studentsTextError = null, this.model.students = e);
      },
      showDeadline: function showDeadline() {
        this.$refs.deadline.show();
      },
      onChangeDeadline: function onChangeDeadline(e) {
        this.model.deadline = e.result + ":00";
      },
      onAddSport: function onAddSport() {
        this.sportModalVisibled = !0, this.sportEditMode = !1;
      },
      onEditSport: function onEditSport(t) {
        this.sportModalVisibled = !0;
        var o = e.utils.clone(this.model.sports[t]);
        o.index = t, this.currentSport = o, this.sportEditMode = !0;
      },
      onRemoveSport: function onRemoveSport(e) {
        this.model.sports.splice(e, 1);
      },
      onSportChange: function onSportChange() {
        var t = this.currentSport;
        if (e.utils.isNone(t.index)) this.model.sports.push(t);else {
          var _e = t.index;
          delete t.index, this.model.sports.splice(_e, 1, t);
        }
        this.currentSport = null;
      },
      onSubmit: function onSubmit() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var o, s, r, l;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.model.cycleDays = _this2.cycleDays.filter(function (e) {
                  return e.checked;
                }).map(function (e) {
                  return parseInt(e.week);
                }), !new e.Validator(_this2.rules, _this2.model).validate() || _this2.studentsTextError)) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return", void _this2.$utils.showTips({
                  success: !0,
                  message: "输入错误，请查看输入项错误提示"
                }));
              case 2:
                o = !!_this2.model.id, s = _this2.model.id ? t.teachHomewordApi.edit : t.teachHomewordApi.create;
                _this2.submitting = !0;
                _context2.next = 6;
                return s({
                  data: _this2.model,
                  options: {
                    loading: !0,
                    loadingText: o ? "编辑中..." : "创建中..."
                  }
                });
              case 6:
                r = _context2.sent;
                if (r.success) {
                  _context2.next = 9;
                  break;
                }
                return _context2.abrupt("return", void (_this2.submitting = !1));
              case 9:
                l = {
                  school: _this2.model.school,
                  class: _this2.model.class,
                  teacherName: _this2.model.teacherName
                };
                e.index.setStorageSync("homework_teching_last_basic", l), _this2.$utils.showToast(r.message, "./index");
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    },
    onLoad: function onLoad(t) {
      var _this3 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
        var o, s;
        return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              o = e.index.getStorageSync("homework_teching_last_basic");
              o && (_this3.model.school = o.school, _this3.model.class = o.class, _this3.model.teacherName = o.teacherName);
              s = t.id;
              _context3.t0 = s;
              if (!_context3.t0) {
                _context3.next = 8;
                break;
              }
              _context3.next = 7;
              return _this3.loadHomeWork(s);
            case 7:
              t.clone && (delete _this3.model.id, delete _this3.model.updatedTime, delete _this3.model.createdTime, _this3.model.issued = !1, _this3.model.deadline = null);
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  };if (!Array) {
  (e.resolveComponent("login-modal") + e.resolveComponent("tips-messager") + e.resolveComponent("form-item") + e.resolveComponent("iconfont") + e.resolveComponent("homework-sport-item") + e.resolveComponent("tui-button") + e.resolveComponent("homework-sport-modal") + e.resolveComponent("tui-datetime"))();
}Math || (function () {
  return "../../components/login-modal.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/tips-messager.js";
} + function () {
  return "../../components/form-item.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../components/homework-sport-item.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
} + function () {
  return "../../components/homework-sport-modal.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-datetime/tui-datetime.js";
})();var r = e._export_sfc(s, [["render", function (t, o, s, r, l, i) {
  return e.e({
    a: e.p({
      required: !0,
      "require-mobile": !0,
      "require-mobile-message": "根据合规要求，请先绑定手机号再发布作业。"
    }),
    b: e.sr("tips", "7d453960-1"),
    c: 20 === l.model.category,
    d: l.theme.colorPrimary,
    e: 10 === l.model.category,
    f: l.theme.colorPrimary,
    g: e.o(function () {
      return i.onCategoryChange && i.onCategoryChange.apply(i, arguments);
    }),
    h: e.p({
      label: "作业类型",
      "help-message": "测验作业：学生可以在作业截止前可以提交一次作业，主要用测验成绩；\r\n打卡作业：学生可以在作业截止前每天打卡作业，用户日常训练；",
      required: !0
    }),
    i: l.model.title,
    j: e.o(function (e) {
      return l.model.title = e.detail.value;
    }),
    k: e.p({
      label: "标题",
      errorMessage: l.rules.title.error,
      required: !0
    }),
    l: l.model.school,
    m: e.o(function (e) {
      return l.model.school = e.detail.value;
    }),
    n: e.p({
      label: "学校/机构",
      errorMessage: l.rules.school.error,
      required: !0
    }),
    o: l.model.class,
    p: e.o(function (e) {
      return l.model.class = e.detail.value;
    }),
    q: e.p({
      label: "班级",
      errorMessage: l.rules.class.error,
      required: !0
    }),
    r: l.model.teacherName,
    s: e.o(function (e) {
      return l.model.teacherName = e.detail.value;
    }),
    t: e.p({
      label: "老师",
      "error-message": l.rules.teacherName.error,
      required: !0
    }),
    v: l.model.descript,
    w: e.o(function (e) {
      return l.model.descript = e.detail.value;
    }),
    x: e.p({
      label: "要求说明",
      unlined: !0
    }),
    y: l.model.deadline
  }, l.model.deadline ? {
    z: e.t(t.$filters.formatDate(l.model.deadline, "yyyy-MM-dd HH:mm:ss")),
    A: e.o(function () {
      return i.showDeadline && i.showDeadline.apply(i, arguments);
    })
  } : {
    B: e.o(function () {
      return i.showDeadline && i.showDeadline.apply(i, arguments);
    })
  }, {
    C: e.p({
      label: "截止时间",
      "help-message": "截止后将不可提交作业",
      errorMessage: l.rules.deadline.error,
      required: !0,
      "tap-enabled": !0
    }),
    D: 20 == l.model.category
  }, 20 == l.model.category ? {
    E: e.f(l.cycleDays, function (t, o, s) {
      return {
        a: t.checked,
        b: t.week,
        c: e.t(t.label),
        d: t.week
      };
    }),
    F: l.theme.colorPrimary,
    G: e.o(function () {
      return i.onCycleDaysChange && i.onCycleDaysChange.apply(i, arguments);
    }),
    H: e.p({
      label: "打卡周期",
      "help-message": "即每逢周几须打卡提效作业",
      "error-message": l.rules.cycleDays.error,
      required: !0
    })
  } : {}, {
    I: e.o([function (e) {
      return l.studentsText = e.detail.value;
    }, function () {
      return i.onStudentsTextChange && i.onStudentsTextChange.apply(i, arguments);
    }]),
    J: l.studentsText,
    K: e.p({
      label: "学生名单(" + l.model.students.length + "人)",
      unlined: !0
    }),
    L: e.f(l.model.sports, function (t, o, s) {
      return {
        a: "7d453960-12-" + s + ",7d453960-11-" + s,
        b: e.o(function (e) {
          return i.onEditSport(o);
        }, o),
        c: "7d453960-13-" + s + ",7d453960-11-" + s,
        d: e.o(function (e) {
          return i.onRemoveSport(o);
        }, o),
        e: o,
        f: "7d453960-11-" + s,
        g: e.p({
          "sport-item": t
        })
      };
    }),
    M: e.p({
      name: "edit-line"
    }),
    N: e.p({
      name: "remove"
    }),
    O: e.p({
      name: "add-circle"
    }),
    P: e.o(i.onAddSport),
    Q: e.p({
      type: "primary",
      height: "76rpx",
      plain: !0,
      shadow: !0
    }),
    R: e.t(l.model.id ? "编辑" : "创建"),
    S: e.o(i.onSubmit),
    T: e.p({
      loading: l.submitting,
      type: "primary",
      shape: "circle",
      height: "78rpx",
      shadow: !0
    }),
    U: e.o(i.onSportChange),
    V: e.o(function (e) {
      return l.currentSport = e;
    }),
    W: e.o(function (e) {
      return l.sportModalVisibled = e;
    }),
    X: e.p({
      "edit-mode": l.sportEditMode,
      modelValue: l.currentSport,
      visibled: l.sportModalVisibled
    }),
    Y: e.sr("deadline", "7d453960-18"),
    Z: e.o(i.onChangeDeadline),
    aa: e.p({
      type: 1
    })
  });
}]]);wx.createPage(r);