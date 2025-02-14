var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  o = {
    mixins: [e.AppUtils],
    data: function data() {
      return {
        theme: e.index.$theme,
        codeWaiting: 0,
        passwordVisibled: !1,
        wxMobile: null,
        model: {
          mobile: null,
          mobileCode: null,
          password: null,
          inviteCode: null
        },
        rules: {
          mobile: {
            required: !0,
            requiredMessage: "请输入（获取）您的手机号码",
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
    onLoad: function onLoad(e) {
      e.inviteCode ? this.model.inviteCode = e.inviteCode : e.scene && (this.model.inviteCode = decodeURIComponent(e.scene)), this.model.inviteCode && (this._isInviting = !0);
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
      getWxMobile: function getWxMobile(o) {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var i, s, t;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return e.wx$1.login();
              case 2:
                i = _context2.sent;
                s = i.code;
                if (!(i = o.detail, !i || !i.encryptedData)) {
                  _context2.next = 6;
                  break;
                }
                return _context2.abrupt("return", void _this2.$utils.showToast("请授权关联微信手机号"));
              case 6:
                _context2.next = 8;
                return e.wuserApi.getMiniPhone({
                  data: {
                    loginCode: s,
                    encryptData: i.encryptedData,
                    iv: i.iv
                  },
                  options: {
                    loading: !0,
                    loadingText: "获取中..."
                  }
                });
              case 8:
                t = _context2.sent;
                t.success && (_this2.model.mobile = t.result.phone, _this2.weixinPhoneData = t.result.phoneData);
              case 10:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      doWxRegistr: function doWxRegistr(o) {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          var i;
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return e.wx$1.login();
              case 2:
                i = _context3.sent;
                o.mobile = _this3.weixinPhoneData;
                o.mobileCode = "none";
                o.loginCode = i.code;
                _context3.next = 8;
                return e.authenticationApi.registrOfWxmini({
                  data: o,
                  options: {
                    loading: !0,
                    loadingText: "注册中...",
                    showError: !0
                  }
                });
              case 8:
                _context3.t0 = _context3.sent.success;
                if (!_context3.t0) {
                  _context3.next = 11;
                  break;
                }
                _this3.$utils.showToast("注册成功，请登录。", "./login");
              case 11:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      onRegistr: function onRegistr() {
        var _this4 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee4() {
          var o;
          return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                o = e.utils.clone(_this4.model);
                _this4.weixinPhoneData && (o.mobile = "13800006666", o.mobileCode = "1234");
                new e.Validator(_this4.rules, o).validate() && _this4.doWxRegistr(o);
              case 3:
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
})();var i = e._export_sfc(o, [["render", function (o, i, s, t, n, r) {
  return e.e({
    a: e.p({
      name: "mobile"
    }),
    b: n.model.mobile,
    c: e.o(function (e) {
      return n.model.mobile = e.detail.value;
    }),
    d: e.o(function () {
      return r.getWxMobile && r.getWxMobile.apply(r, arguments);
    }),
    e: n.rules.mobile.error
  }, n.rules.mobile.error ? {
    f: e.t(n.rules.mobile.error)
  } : {}, {
    g: e.p({
      name: "password"
    }),
    h: n.passwordVisibled
  }, n.passwordVisibled ? {
    i: n.model.password,
    j: e.o(function (e) {
      return n.model.password = e.detail.value;
    })
  } : {
    k: n.model.password,
    l: e.o(function (e) {
      return n.model.password = e.detail.value;
    })
  }, {
    m: !n.passwordVisibled
  }, n.passwordVisibled ? {
    p: e.o(r.onTogglePassword),
    q: e.p({
      name: "eye-hidden",
      color: n.theme.colorPrimary
    })
  } : {
    n: e.o(r.onTogglePassword),
    o: e.p({
      name: "eye",
      color: n.theme.colorPrimary
    })
  }, {
    r: n.rules.password.error
  }, n.rules.password.error ? {
    s: e.t(n.rules.password.error)
  } : {}, {
    t: e.o(function () {
      return r.onRegistr && r.onRegistr.apply(r, arguments);
    })
  });
}]]);wx.createPage(i);