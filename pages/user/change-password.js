var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  r = {
    data: function data() {
      return {
        model: {
          originPassword: null,
          newPassword: null,
          confirmPassword: null
        },
        rules: {
          originPassword: {
            required: !0,
            requiredMessage: "原登录密码不能为空",
            minLength: 6,
            minLengthMessage: "原登录密码不能少于",
            error: null
          },
          newPassword: {
            required: !0,
            requiredMessage: "新登录密码不能为空",
            minLength: 6,
            minLengthMessage: "新登录密码不能少于6位",
            error: null
          },
          confirmPassword: {
            required: !0,
            requiredMessage: "请再次确认新密码",
            fn: function fn(e, r) {
              if (e !== r.entity.newPassword) return "两次输入的密码不一致";
            },
            error: null
          }
        }
      };
    },
    methods: {
      onModif: function onModif() {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var r, o;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (new e.Validator(_this.rules, _this.model).validate()) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                r = _this.$refs.tips;
                _context.next = 5;
                return e.profileApi.changePassword({
                  data: _this.model,
                  options: {
                    showError: !1
                  }
                });
              case 5:
                o = _context.sent;
                r.showMessage(o), o.success && setTimeout(function () {
                  e.index.navigateBack({});
                }, 2e3);
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    }
  };if (!Array) {
  (e.resolveComponent("login-modal") + e.resolveComponent("tips-messager") + e.resolveComponent("form-item") + e.resolveComponent("tui-button"))();
}Math || (function () {
  return "../../components/login-modal.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/tips-messager.js";
} + function () {
  return "../../components/form-item.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
})();var o = e._export_sfc(r, [["render", function (r, o, s, n, i, a) {
  return {
    a: e.p({
      required: !0
    }),
    b: e.sr("tips", "0399055a-1"),
    c: i.model.originPassword,
    d: e.o(function (e) {
      return i.model.originPassword = e.detail.value;
    }),
    e: e.p({
      label: "原密码",
      errorMessage: i.rules.originPassword.error,
      required: !0
    }),
    f: i.model.newPassword,
    g: e.o(function (e) {
      return i.model.newPassword = e.detail.value;
    }),
    h: e.p({
      label: "新密码",
      errorMessage: i.rules.newPassword.error,
      required: !0
    }),
    i: i.model.confirmPassword,
    j: e.o(function (e) {
      return i.model.confirmPassword = e.detail.value;
    }),
    k: e.p({
      label: "确认密码",
      errorMessage: i.rules.confirmPassword.error,
      required: !0
    }),
    l: e.o(a.onModif),
    m: e.p({
      shape: "circle",
      shadow: !0
    })
  };
}]]);wx.createPage(o);