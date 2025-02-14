var _regeneratorRuntime2 = require("../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../@babel/runtime/helpers/asyncToGenerator");require("../@babel/runtime/helpers/Arrayincludes");var e = require("../common/vendor.js"),
  i = require("../apis/sport/organize-activity.js"),
  o = [{
    name: "team",
    rule: ["required"],
    msg: ["请选择参赛队"]
  }, {
    name: "name",
    rule: ["required"],
    msg: ["姓名不能为空"]
  }, {
    name: "mobile",
    rule: ["required"],
    msg: ["手机号不能为空"],
    validator: [{
      msg: "手机号格式不准确",
      method: e.utils.isMobile
    }]
  }, {
    name: "cardId",
    rule: ["required"],
    msg: ["身份证号不能为空"],
    validator: [{
      msg: "身份证号格式不准确",
      method: e.utils.isCardId
    }]
  }],
  t = {
    name: "activitySigninWidget",
    options: {
      styleIsolation: "shared"
    },
    props: {
      activityId: {
        type: [Number, String],
        required: !0
      },
      isTeam: {
        type: Boolean,
        default: !1
      },
      teams: {
        type: Array,
        validator: function validator(i, o) {
          return !o.isTeam || !e.utils.isEmptyArray(i);
        }
      },
      fields: {
        type: Array,
        default: function _default() {
          return ["Name"];
        },
        validator: function validator(i) {
          if (e.utils.isEmptyArray(i)) return !1;
          var o = ["Name", "CardId", "Mobile", "Remark"];
          return i.every(function (e) {
            return o.includes(e);
          });
        }
      }
    },
    watch: {
      teams: {
        handler: function handler(e) {
          e && (this.teamDs = e.map(function (e) {
            return {
              text: e,
              value: e
            };
          }));
        },
        immediate: !0
      },
      fields: {
        handler: function handler(e) {
          this.buildRules();
        }
      }
    },
    data: function data() {
      return {
        visible: !1,
        teamVisible: !1,
        teamDs: [],
        model: {
          team: null,
          name: null,
          cardId: null,
          mobile: null,
          remark: null
        }
      };
    },
    mounted: function mounted() {
      var _this = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
        var o, t, _e;
        return _regeneratorRuntime2().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.buildRules();
              o = i.organizegApi.getSignin(_this.activityId);
              if (!o) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", void (_this.model = o));
            case 4:
              _context.next = 6;
              return e.profileApi.get({
                options: {
                  loading: !0
                }
              });
            case 6:
              t = _context.sent;
              if (t.success) {
                _e = t.result;
                _this.model.mobile = _e.mobile, _this.model.name = _e.name;
              }
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    methods: {
      buildRules: function buildRules() {
        var _this2 = this;
        var e = [];
        o.forEach(function (i) {
          "team" == i.name && _this2.isTeam && e.push(i), _this2.fields.some(function (e) {
            return e.toLowerCase() == i.name.toLowerCase();
          }) && e.push(i);
        }), this.rules = e, this.$refs.sgForm.immediateValidate(!0, e);
      },
      show: function show() {
        this.visible = !0, this.teamVisible = !1;
      },
      close: function close() {
        this.visible = !1, this.teamVisible = !1;
      },
      onClose: function onClose() {
        this.visible = !1;
      },
      onShowTeamSelector: function onShowTeamSelector(e) {
        this.teamVisible = !0;
      },
      onHideTeamSelector: function onHideTeamSelector(e) {
        this.teamVisible = !1;
      },
      onSelectTeam: function onSelectTeam(e) {
        this.model.team = e.value;
      },
      onSave: function onSave() {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.$refs.sgForm.validate(_this3.model, _this3.rules, !0);
              case 2:
                _context2.t0 = _context2.sent.isPass;
                if (!_context2.t0) {
                  _context2.next = 5;
                  break;
                }
                i.organizegApi.setSignin(_this3.activityId, _this3.model), _this3.close(), _this3.$emit("on-signin", _this3.model), e.index.showToast({
                  title: "签到成功^_^",
                  icon: "none"
                });
              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    }
  };if (!Array) {
  (e.resolveComponent("iconfont") + e.resolveComponent("tui-input") + e.resolveComponent("tui-form-item") + e.resolveComponent("tui-form") + e.resolveComponent("tui-picker") + e.resolveComponent("tui-button") + e.resolveComponent("tui-bottom-popup"))();
}Math || (function () {
  return "../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-input/tui-input.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-form-item/tui-form-item.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-form/tui-form.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-picker/tui-picker.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-bottom-popup/tui-bottom-popup.js";
})();var s = e._export_sfc(t, [["render", function (i, o, t, s, l, a) {
  return e.e({
    a: e.p({
      name: "close-o"
    }),
    b: e.o(function () {
      return a.onClose && a.onClose.apply(a, arguments);
    }),
    c: t.isTeam
  }, t.isTeam ? {
    d: e.o(function (e) {
      return l.model.team = e;
    }),
    e: e.p({
      padding: "0",
      borderBottom: !1,
      placeholder: "请选择您的参赛队伍",
      disabled: !0,
      modelValue: l.model.team
    }),
    f: e.o(a.onShowTeamSelector),
    g: e.p({
      label: "参赛队",
      asterisk: !0,
      arrow: !0,
      prop: "team"
    })
  } : {}, {
    h: t.fields.includes("Name")
  }, t.fields.includes("Name") ? {
    i: e.o(function (e) {
      return l.model.name = e;
    }),
    j: e.p({
      padding: "0",
      borderBottom: !1,
      maxlength: 10,
      placeholder: "请输入您的姓名",
      modelValue: l.model.name
    }),
    k: e.p({
      label: "姓名",
      asterisk: !0,
      prop: "name"
    })
  } : {}, {
    l: t.fields.includes("Mobile")
  }, t.fields.includes("Mobile") ? {
    m: e.o(function (e) {
      return l.model.mobile = e;
    }),
    n: e.p({
      padding: "0",
      borderBottom: !1,
      maxlength: 11,
      type: "number",
      placeholder: "请输入您的手机号",
      modelValue: l.model.mobile
    }),
    o: e.p({
      label: "手机号",
      asterisk: !0,
      prop: "mobile"
    })
  } : {}, {
    p: t.fields.includes("CardId")
  }, t.fields.includes("CardId") ? {
    q: e.o(function (e) {
      return l.model.cardId = e;
    }),
    r: e.p({
      padding: "0",
      borderBottom: !1,
      maxlength: 18,
      type: "idcard",
      placeholder: "请输入您的身份证号",
      modelValue: l.model.cardId
    }),
    s: e.p({
      label: "身份证号",
      asterisk: !0,
      prop: "cardId"
    })
  } : {}, {
    t: t.fields.includes("Remark")
  }, t.fields.includes("Remark") ? {
    v: e.o(function (e) {
      return l.model.remark = e;
    }),
    w: e.p({
      padding: "0",
      borderBottom: !1,
      maxlength: 50,
      placeholder: "请输入备注",
      modelValue: l.model.remark
    }),
    x: e.p({
      label: "备注",
      prop: "remark"
    })
  } : {}, {
    y: e.sr("sgForm", "9ad14274-2,9ad14274-0"),
    z: e.p({
      "show-message": !1,
      model: l.model
    }),
    A: e.o(a.onHideTeamSelector),
    B: e.o(a.onSelectTeam),
    C: e.p({
      show: l.teamVisible,
      pickerData: l.teamDs,
      "z-index": 9999
    }),
    D: e.o(a.onSave),
    E: e.p({
      type: "green",
      shape: "circle",
      shadow: !0
    }),
    F: e.s(l.teamVisible ? "min-height:500rpx;" : ""),
    G: e.o(a.onClose),
    H: e.p({
      show: l.visible,
      mask: !0,
      "mask-closable": !0
    })
  });
}]]);wx.createComponent(s);