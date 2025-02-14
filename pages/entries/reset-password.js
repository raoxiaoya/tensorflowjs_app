var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  o = {
    data: function data() {
      return {
        theme: e.index.$theme,
        codeWaiting: 0,
        passwordVisibled: !0,
        model: {
          mobile: null,
          mobileCode: null,
          password: null
        },
        rules: {
          mobile: {
            required: !0,
            requiredMessage: "请输入您的手机号码",
            pattern: /^1[0-9]{10}$/,
            patternMessage: "手机号码格式不准确",
            error: null
          },
          mobileCode: {
            required: !0,
            requiredMessage: "请输入您的手机验证码",
            pattern: /^[0-9]{4,}$/,
            patternMessage: "验证码为4-6位的数字",
            error: null
          },
          password: {
            required: !0,
            requiredMessage: "请输入登录密码",
            minLength: 6,
            minLengthMessage: "登录密码不能少于6位",
            error: null
          }
        }
      };
    },
    methods: {
      onTogglePassword: function onTogglePassword() {
        this.passwordVisibled = !this.passwordVisibled;
      },
      onSendCode: function onSendCode() {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var o;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.codeWaiting > 1)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                if (new e.Validator(_this.rules, _this.model).validateField("mobile")) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return");
              case 4:
                _context.next = 6;
                return e.smsApi.sendCode({
                  params: {
                    mobile: _this.model.mobile
                  },
                  options: {
                    loading: !0,
                    loadingText: "发送中...",
                    onLoad: function onLoad(e) {
                      return _this.codeWaiting = e;
                    }
                  }
                });
              case 6:
                o = _context.sent;
                e.index.showToast({
                  icon: "none",
                  title: o.message
                }), o.success && (_this.codeWaiting = 60);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onResetPassword: function onResetPassword() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var o;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (new e.Validator(_this2.rules, _this2.model).validate()) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                _context2.next = 4;
                return e.authenticationApi.resetPassword({
                  data: _this2.model,
                  options: {
                    loading: !0,
                    loadingText: "重置中...",
                    showError: !0
                  }
                });
              case 4:
                o = _context2.sent;
                o.success && _this2.$utils.showToast(o.message, "./login");
              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    }
  };if (!Array) {
  (e.resolveComponent("iconfont") + e.resolveComponent("copyright"))();
}Math || (function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/copyright.js";
})();var s = e._export_sfc(o, [["render", function (o, s, r, i, d, l) {
  return e.e({
    a: e.p({
      name: "mobile"
    }),
    b: d.model.mobile,
    c: e.o(function (e) {
      return d.model.mobile = e.detail.value;
    }),
    d: d.rules.mobile.error
  }, d.rules.mobile.error ? {
    e: e.t(d.rules.mobile.error)
  } : {}, {
    f: e.p({
      name: "safe-ok"
    }),
    g: d.model.mobileCode,
    h: e.o(function (e) {
      return d.model.mobileCode = e.detail.value;
    }),
    i: e.t(d.codeWaiting < 1 ? "发送验证码" : d.codeWaiting + "S"),
    j: e.o(function () {
      return l.onSendCode && l.onSendCode.apply(l, arguments);
    }),
    k: d.rules.mobileCode.error
  }, d.rules.mobileCode.error ? {
    l: e.t(d.rules.mobileCode.error)
  } : {}, {
    m: e.p({
      name: "password"
    }),
    n: d.passwordVisibled
  }, d.passwordVisibled ? {
    o: d.model.password,
    p: e.o(function (e) {
      return d.model.password = e.detail.value;
    })
  } : {
    q: d.model.password,
    r: e.o(function (e) {
      return d.model.password = e.detail.value;
    })
  }, {
    s: !d.passwordVisibled
  }, d.passwordVisibled ? {
    w: e.o(l.onTogglePassword),
    x: e.p({
      name: "eye-hidden",
      color: d.theme.colorPrimary
    })
  } : {
    t: e.o(l.onTogglePassword),
    v: e.p({
      name: "eye",
      color: d.theme.colorPrimary
    })
  }, {
    y: d.rules.password.error
  }, d.rules.password.error ? {
    z: e.t(d.rules.password.error)
  } : {}, {
    A: e.o(function () {
      return l.onResetPassword && l.onResetPassword.apply(l, arguments);
    })
  });
}]]);wx.createPage(s);