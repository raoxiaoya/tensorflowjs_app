require("../../../@babel/runtime/helpers/Arrayincludes");var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  i = require("../../../apis/sport/user-activity.js");require("../../../apis/sport/setting.js");var t = require("../../fitness/mixture.js"),
  o = {
    mixins: [e.AppUtils],
    data: function data() {
      return {
        theme: e.index.$theme,
        teamsText: null,
        teamsTextError: null,
        model: {
          title: null,
          cover: null,
          coverUrl: null,
          introduce: null,
          category: 10,
          beginTime: null,
          endTime: null,
          isOnline: !1,
          isPublic: !1,
          isTeam: !1,
          teams: [],
          password: null,
          signInFields: [],
          sportItems: []
        },
        signinFields: [{
          key: "Mobile",
          label: "手机号",
          checked: !0
        }, {
          key: "Name",
          label: "姓名",
          checked: !0
        }, {
          key: "CardId",
          label: "证件号",
          checked: !1
        }, {
          key: "Remark",
          label: "备注",
          checked: !1
        }],
        rules: {
          title: {
            required: !0,
            requiredMessage: "活动标题不能为空",
            error: null
          },
          organizer: {
            required: !0,
            requiredMessage: "举办单位不能为空",
            error: null
          },
          beginTime: {
            required: !0,
            requiredMessage: "活动开始时间不能为空",
            error: null
          },
          endTime: {
            required: !0,
            requiredMessage: "活动结束时间不能为空",
            error: null
          },
          password: {
            required: !0,
            requiredMessage: "参赛口令不能为空",
            error: null
          }
        },
        sportModalVisibled: !1,
        sportEditMode: !1,
        currentSport: null,
        submitting: !1
      };
    },
    onLoad: function onLoad(e) {
      var i = e.id;
      i && this.loadActivity(i);
    },
    methods: {
      formatSeconds: t.fitnessMixture.formatSeconds,
      loadActivity: function loadActivity(t) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var o, s;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return i.userActivityApi.get({
                  params: {
                    id: t
                  },
                  loading: !0,
                  loadingText: "加载活动..."
                });
              case 2:
                o = _context.sent;
                if (o.success) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return");
              case 5:
                s = o.result;
                s.beginTime = e.utils.formatDate(s.beginTime, "yyyy-MM-dd HH:mm:ss"), s.endTime = e.utils.formatDate(s.endTime, "yyyy-MM-dd HH:mm:ss"), s.teams && (_this.teamsText = o.result.teams.join("\n")), e.utils.isEmptyArray(s.signInFields) || _this.signinFields.forEach(function (e) {
                  e.checked = s.signInFields.includes(e.key);
                }), _this.model = s, e.index.setNavigationBarTitle({
                  title: "编辑赛事活动"
                });
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onSelectImage: function onSelectImage() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var i, t, o;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return e.index.chooseMedia({
                  count: 1,
                  mediaType: ["image"],
                  sourceType: ["album", "camera"],
                  sizeType: ["compressed"]
                }).catch(function (e) {
                  return !1;
                });
              case 2:
                i = _context2.sent;
                if (i) {
                  _context2.next = 5;
                  break;
                }
                return _context2.abrupt("return");
              case 5:
                t = i.tempFiles[0].tempFilePath;
                _context2.next = 8;
                return e.ossApi.directUploadAliyun({
                  filePath: t,
                  maxSize: 2048,
                  options: {
                    loading: !0,
                    loadingText: "上传中..."
                  }
                });
              case 8:
                o = _context2.sent;
                _this2.model.cover = o.result, _this2.model.coverUrl = t;
              case 10:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onCategoryChange: function onCategoryChange(e) {
        this.model.category = e.detail.value;
      },
      onIsTeamChange: function onIsTeamChange(e) {
        this.model.isTeam = "true" === e.detail.value;
      },
      onTeamsTextChange: function onTeamsTextChange() {
        if (!this.teamsText) return this.teamsTextError = null, void (this.model.teams = []);
        var e = this.teamsText.split("\n");
        e.some(function (e) {
          return !e;
        }) ? this.teamsTextError = "团组清单错误，请检查是否有空行" : (this.teamsTextError = null, this.model.teams = e);
      },
      onSigninChange: function onSigninChange(e) {
        var i = e.detail.value;
        this.signinFields.forEach(function (e) {
          e.checked = i.includes(e.key);
        });
      },
      showBeginTime: function showBeginTime() {
        this.$refs.beginTime.show();
      },
      showEndTime: function showEndTime() {
        this.$refs.endTime.show();
      },
      onChangeBeginTime: function onChangeBeginTime(e) {
        var i = e.result;
        i += ":00", this.model.beginTime = i;
      },
      onChangeEndTime: function onChangeEndTime(e) {
        var i = e.result;
        i += ":59", this.model.endTime = i;
      },
      onAddSport: function onAddSport() {
        this.sportModalVisibled = !0, this.sportEditMode = !1;
      },
      onEditSport: function onEditSport(i) {
        this.sportModalVisibled = !0;
        var t = e.utils.clone(this.model.sportItems[i]);
        t.index = i, this.currentSport = t, this.sportEditMode = !0;
      },
      onRemoveSport: function onRemoveSport(e) {
        this.model.sportItems.splice(e, 1);
      },
      onSportChange: function onSportChange() {
        var i = this.currentSport;
        if (i.times && (i.times = +i.times), e.utils.isNone(i.index)) this.model.sportItems.push(i);else {
          var _e = i.index;
          delete i.index, this.model.sportItems.splice(_e, 1, i);
        }
        this.currentSport = null;
      },
      onSubmit: function onSubmit() {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          var t, o, s, r;
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _this3.model.isTeam && e.utils.isEmptyArray(_this3.model.teams) && (_this3.teamsTextError = "团组赛请配置团组列表");
                t = new e.Validator(_this3.rules, _this3.model);
                if (!(_this3.teamsTextError || !t.validate())) {
                  _context3.next = 4;
                  break;
                }
                return _context3.abrupt("return", void _this3.$refs.tips.error({
                  msg: "输入错误，请查看输入项错误提示",
                  duration: 3e3
                }));
              case 4:
                _this3.model.signInFields = _this3.signinFields.filter(function (e) {
                  return e.checked;
                }).map(function (e) {
                  return e.key;
                });
                o = !!_this3.model.id, s = o ? i.userActivityApi.edit : i.userActivityApi.create;
                _this3.submitting = !0;
                _context3.next = 9;
                return s({
                  data: _this3.model,
                  options: {
                    loading: !0,
                    loadingText: o ? "编辑中..." : "创建中...",
                    showError: !0
                  }
                });
              case 9:
                r = _context3.sent;
                r.success ? _this3.$utils.showToast(r.message, "./index") : _this3.submitting = !1;
              case 11:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    }
  };if (!Array) {
  (e.resolveComponent("login-modal") + e.resolveComponent("tips-messager") + e.resolveComponent("iconfont") + e.resolveComponent("form-item") + e.resolveComponent("activity-sport-item") + e.resolveComponent("tui-button") + e.resolveComponent("activity-sport-modal") + e.resolveComponent("tui-datetime"))();
}Math || (function () {
  return "../../../components/login-modal.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/tips-messager.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../../components/form-item.js";
} + function () {
  return "../../../components/activity-sport-item.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
} + function () {
  return "../../../components/activity-sport-modal.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-datetime/tui-datetime.js";
})();var s = e._export_sfc(o, [["render", function (i, t, o, s, r, l) {
  return e.e({
    a: e.p({
      required: !0,
      "require-mobile": !0,
      "require-mobile-message": "根据合规要求，请先绑定手机号再创建活动。"
    }),
    b: e.sr("tips", "93fbaf38-1"),
    c: r.model.coverUrl
  }, r.model.coverUrl ? {
    d: r.model.coverUrl,
    e: e.o(function () {
      return l.onSelectImage && l.onSelectImage.apply(l, arguments);
    })
  } : {
    f: e.p({
      size: "60rpx",
      name: "camera"
    })
  }, {
    g: e.o(function () {
      return l.onSelectImage && l.onSelectImage.apply(l, arguments);
    }),
    h: r.model.title,
    i: e.o(function (e) {
      return r.model.title = e.detail.value;
    }),
    j: e.p({
      label: "标题",
      errorMessage: r.rules.title.error,
      required: !0
    }),
    k: r.model.organizer,
    l: e.o(function (e) {
      return r.model.organizer = e.detail.value;
    }),
    m: e.p({
      label: "举办单位/人",
      errorMessage: r.rules.organizer.error,
      required: !0
    }),
    n: r.model.introduce,
    o: e.o(function (e) {
      return r.model.introduce = e.detail.value;
    }),
    p: e.p({
      label: "活动介绍",
      unlined: !0
    }),
    q: 10 === r.model.category,
    r: r.theme.colorPrimary,
    s: 20 === r.model.category,
    t: r.theme.colorPrimary,
    v: e.o(function () {
      return l.onCategoryChange && l.onCategoryChange.apply(l, arguments);
    }),
    w: e.p({
      label: "赛事类别",
      "help-message": "打卡活动：用户可以每天对活动运动项目进行打卡累积；\r\n竞赛活动：赛事中的每个运动项目用户只可参与一次；",
      required: !0
    }),
    x: r.model.beginTime
  }, r.model.beginTime ? {
    y: e.t(i.$filters.formatDate(r.model.beginTime, "yyyy-MM-dd HH:mm:ss")),
    z: e.o(function () {
      return l.showBeginTime && l.showBeginTime.apply(l, arguments);
    })
  } : {
    A: e.o(function () {
      return l.showBeginTime && l.showBeginTime.apply(l, arguments);
    })
  }, {
    B: e.p({
      label: "开始时间",
      errorMessage: r.rules.beginTime.error,
      required: !0,
      "tap-enabled": !0
    }),
    C: r.model.endTime
  }, r.model.endTime ? {
    D: e.t(i.$filters.formatDate(r.model.endTime, "yyyy-MM-dd HH:mm:ss")),
    E: e.o(function () {
      return l.showEndTime && l.showEndTime.apply(l, arguments);
    })
  } : {
    F: e.o(function () {
      return l.showEndTime && l.showEndTime.apply(l, arguments);
    })
  }, {
    G: e.p({
      label: "结束时间",
      errorMessage: r.rules.endTime.error,
      required: !0,
      "tap-enabled": !0
    }),
    H: !1 === r.model.isTeam,
    I: r.theme.colorPrimary,
    J: !0 === r.model.isTeam,
    K: r.theme.colorPrimary,
    L: e.o(function () {
      return l.onIsTeamChange && l.onIsTeamChange.apply(l, arguments);
    }),
    M: e.p({
      label: "参赛形式",
      "help-message": "个人赛：以单个用户参加，不生成团组榜单；\r\n团组赛：签到时要选择参数组（队），将生成团组和个人榜；",
      required: !0
    }),
    N: r.model.isTeam
  }, r.model.isTeam ? {
    O: e.o([function (e) {
      return r.teamsText = e.detail.value;
    }, function () {
      return l.onTeamsTextChange && l.onTeamsTextChange.apply(l, arguments);
    }]),
    P: r.teamsText,
    Q: e.p({
      label: "参赛团组",
      errorMessage: r.teamsTextError,
      unlined: !0
    })
  } : {}, {
    R: e.f(r.signinFields, function (i, t, o) {
      return {
        a: i.checked,
        b: i.key,
        c: e.t(i.label),
        d: i.key
      };
    }),
    S: r.theme.colorPrimary,
    T: e.o(function () {
      return l.onSigninChange && l.onSigninChange.apply(l, arguments);
    }),
    U: e.p({
      label: "签到字段",
      "help-message": "选择参赛前签到时要录入的信息",
      required: !0
    }),
    V: r.model.password,
    W: e.o(function (e) {
      return r.model.password = e.detail.value;
    }),
    X: e.p({
      label: "参赛口令",
      "error-message": r.rules.password.error,
      required: !0
    }),
    Y: e.f(r.model.sportItems, function (i, t, o) {
      return {
        a: "93fbaf38-14-" + o + ",93fbaf38-13-" + o,
        b: e.o(function (e) {
          return l.onEditSport(t);
        }, t),
        c: "93fbaf38-15-" + o + ",93fbaf38-13-" + o,
        d: e.o(function (e) {
          return l.onRemoveSport(t);
        }, t),
        e: t,
        f: "93fbaf38-13-" + o,
        g: e.p({
          activity: r.model,
          "sport-item": i
        })
      };
    }),
    Z: e.p({
      name: "edit-line"
    }),
    aa: e.p({
      name: "remove"
    }),
    ab: e.p({
      name: "add-circle"
    }),
    ac: e.o(l.onAddSport),
    ad: e.p({
      type: "primary",
      height: "76rpx",
      plain: !0,
      shadow: !0
    }),
    ae: e.t(r.model.id ? "编辑" : "创建"),
    af: e.o(l.onSubmit),
    ag: e.p({
      loading: r.submitting,
      type: "primary",
      shape: "circle",
      height: "78rpx",
      shadow: !0
    }),
    ah: e.o(l.onSportChange),
    ai: e.o(function (e) {
      return r.currentSport = e;
    }),
    aj: e.o(function (e) {
      return r.sportModalVisibled = e;
    }),
    ak: e.p({
      "activity-category": r.model.category,
      "edit-mode": r.sportEditMode,
      modelValue: r.currentSport,
      visibled: r.sportModalVisibled
    }),
    al: e.sr("beginTime", "93fbaf38-20"),
    am: e.o(l.onChangeBeginTime),
    an: e.p({
      type: 1,
      title: "选择活动开始时间",
      "set-date-time": r.model.beginTime
    }),
    ao: e.sr("endTime", "93fbaf38-21"),
    ap: e.o(l.onChangeEndTime),
    aq: e.p({
      type: 1,
      title: "选择活动结束时间",
      "set-date-time": r.model.endTime
    })
  });
}]]);wx.createPage(s);