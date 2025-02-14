var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  a = {
    mixins: [e.AppUtils],
    data: function data() {
      return {
        isSimple: !0,
        channel: "basic",
        captchaUrl: null,
        model: {
          userName: null,
          password: null,
          captcha: null,
          captchaKey: null
        },
        rules: {
          userName: {
            required: !0,
            requiredMessage: "请输入您的手机号码",
            pattern: /^1[0-9]{10}$/,
            patternMessage: "手机号码格式不准确",
            error: null
          },
          password: {
            required: !0,
            requiredMessage: "请输入密码",
            minLength: 6,
            minLengthMessage: "密码不能少于6位",
            error: null
          },
          captcha: {
            required: !0,
            requiredMessage: "请输入验证码",
            minLength: 4,
            minLengthMessage: "验证码为4位",
            error: null
          }
        }
      };
    },
    created: function created() {
      this.channel = "weixin";
    },
    onLoad: function onLoad() {
      this.refreshCaptcha();
    },
    methods: {
      getRandomPassword: function getRandomPassword() {
        var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var a = "";
        for (var _n = 0; _n < 8; _n++) a += e[Math.floor(Math.random() * e.length)];
        return a;
      },
      refreshCaptcha: function refreshCaptcha() {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var a;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return e.captchaApi.generate();
              case 2:
                a = _context.sent;
                a.success && (_this.captchaUrl = e.captchaApi.getImageUrl(a.result), _this.model.captchaKey = a.result, console.log(_this.captchaUrl));
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onToggleChannel: function onToggleChannel(e) {
        this.channel = e;
      },
      onCaptcha: function onCaptcha() {
        this.refreshCaptcha();
      },
      silentRegistrOfWeixin: function silentRegistrOfWeixin() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var a, n;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return e.wx$1.login();
              case 2:
                a = _context2.sent;
                _context2.next = 5;
                return e.authenticationApi.registrOfWxmini({
                  data: {
                    loginCode: a.code,
                    password: _this2.getRandomPassword()
                  },
                  options: {
                    loading: !0,
                    loadingText: "注册中..."
                  }
                });
              case 5:
                n = _context2.sent;
                return _context2.abrupt("return", (_this2.$utils.showMessage(n), n));
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onWeixinLogin: function onWeixinLogin() {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          var a, n;
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return e.wx$1.login();
              case 2:
                a = _context3.sent;
                _context3.next = 5;
                return e.authenticationApi.loginOfWxmini({
                  data: {
                    code: a.code
                  },
                  options: {
                    loading: !0,
                    loadingText: "登录中...",
                    showError: !1
                  }
                });
              case 5:
                n = _context3.sent;
                if (!(_this3.isSimple && 40 === n.code)) {
                  _context3.next = 11;
                  break;
                }
                _context3.next = 9;
                return _this3.silentRegistrOfWeixin();
              case 9:
                n = _context3.sent;
                return _context3.abrupt("return", void (n.success && _this3.onWeixinLogin()));
              case 11:
                n.success ? setTimeout(function () {
                  e.index.switchTab({
                    url: "/pages/main/home"
                  });
                }, 1500) : _this3.$utils.showMessage(n);
              case 12:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      onLogin: function onLogin() {
        var _this4 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee4() {
          var a;
          return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (new e.Validator(_this4.rules, _this4.model).validate()) {
                  _context4.next = 2;
                  break;
                }
                return _context4.abrupt("return");
              case 2:
                _context4.next = 4;
                return e.authenticationApi.loginOfBasic({
                  data: _this4.model,
                  options: {
                    loading: !0,
                    loadingText: "登录中...",
                    showError: !0
                  }
                });
              case 4:
                a = _context4.sent;
                a.success ? setTimeout(function () {
                  e.index.switchTab({
                    url: "/pages/main/home"
                  });
                }, 1500) : _this4.$utils.showMessage(a);
              case 6:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }
    }
  };if (!Array) {
  (e.resolveComponent("iconfont") + e.resolveComponent("copyright"))();
}Math || (function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/copyright.js";
})();var n = e._export_sfc(a, [["render", function (a, n, i, s, o, t) {
  return e.e({
    a: "weixin" == o.channel
  }, "weixin" == o.channel ? {
    b: e.t(o.isSimple ? "一键注册登录" : "一键登录"),
    c: e.o(function () {
      return t.onWeixinLogin && t.onWeixinLogin.apply(t, arguments);
    })
  } : {}, {
    d: "basic" == o.channel
  }, "basic" == o.channel ? e.e({
    e: e.p({
      name: "mobile"
    }),
    f: o.model.userName,
    g: e.o(function (e) {
      return o.model.userName = e.detail.value;
    }),
    h: o.rules.userName.error
  }, o.rules.userName.error ? {
    i: e.t(o.rules.userName.error)
  } : {}, {
    j: e.p({
      name: "password"
    }),
    k: o.model.password,
    l: e.o(function (e) {
      return o.model.password = e.detail.value;
    }),
    m: o.rules.password.error
  }, o.rules.password.error ? {
    n: e.t(o.rules.password.error)
  } : {}, {
    o: e.p({
      name: "safe-ok"
    }),
    p: o.model.captcha,
    q: e.o(function (e) {
      return o.model.captcha = e.detail.value;
    }),
    r: o.captchaUrl,
    s: e.o(function () {
      return t.onCaptcha && t.onCaptcha.apply(t, arguments);
    }),
    t: o.rules.captcha.error
  }, o.rules.captcha.error ? {
    v: e.t(o.rules.captcha.error)
  } : {}, {
    w: e.o(function () {
      return t.onLogin && t.onLogin.apply(t, arguments);
    })
  }) : {}, {
    x: "weixin" != o.channel
  }, "weixin" != o.channel ? {
    y: e.o(function (e) {
      return t.onToggleChannel("weixin");
    })
  } : {}, {
    z: "basic" != o.channel
  }, "basic" != o.channel ? {
    A: e.o(function (e) {
      return t.onToggleChannel("basic");
    })
  } : {}, {
    B: !o.isSimple
  }, (o.isSimple, {}));
}]]);wx.createPage(n);