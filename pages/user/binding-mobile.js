var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js");var i = null;var t = {
  mixins: [e.AppUtils],
  data: function data() {
    return {
      profile: null,
      nextSeconds: 0,
      wxMobile: null,
      weixinPhoneData: null,
      model: {
        mobile: null,
        mobileCode: null
      },
      rules: {
        mobile: {
          required: !0,
          requiredMessage: "请输入(获取)您的手机号码",
          pattern: /^1[0-9]{10}$/,
          patternMessage: "手机号码格式不准确",
          error: null
        },
        mobileCode: {
          required: !0,
          requiredMessage: "请输入手机验证码",
          minLength: 4,
          minLengthMessage: "手机验证码不能少于4位",
          error: null
        }
      },
      submitting: !1
    };
  },
  mounted: function mounted() {
    this.getLoginCode(), this.getProfile();
  },
  methods: {
    getLoginCode: function getLoginCode() {
      e.index.login({
        success: function success(e) {
          i = e.code;
        }
      });
    },
    getProfile: function getProfile() {
      var _this = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
        var i;
        return _regeneratorRuntime2().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return e.profileApi.get();
            case 2:
              i = _context.sent;
              i.success && (_this.profile = i.result);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    onSendCode: function onSendCode(i) {
      var _this2 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
        var t;
        return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this2.nextSeconds > 1)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              if (new e.Validator(_this2.rules, _this2.model).validateField("mobile")) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return");
            case 4:
              t = _this2;
              _context2.next = 7;
              return e.smsApi.sendCode({
                mobile: t.model.mobile,
                fn: function fn(e) {
                  t.nextSeconds = e;
                }
              });
            case 7:
              _context2.t0 = _context2.sent.success;
              if (!_context2.t0) {
                _context2.next = 10;
                break;
              }
              _this2.nextSeconds = 60;
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getWxMobile: function getWxMobile(t) {
      var _this3 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
        var o, s;
        return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              o = t.detail;
              if (!(!o || !o.encryptedData)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return", void _this3.$utils.showToast("请授权关联微信手机号"));
            case 3:
              _context3.next = 5;
              return e.wuserApi.getMiniPhone({
                data: {
                  loginCode: i,
                  encryptData: o.encryptedData,
                  iv: o.iv
                },
                options: {
                  loading: !0,
                  showError: !0
                }
              });
            case 5:
              s = _context3.sent;
              _this3.getLoginCode(), s.success && (_this3.wxMobile = s.result.phone, _this3.weixinPhoneData = s.result.phoneData);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    onBinding: function onBinding() {
      var _this4 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee4() {
        var i, t;
        return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              i = e.utils.clone(_this4.model);
              _this4.weixinPhoneData && (i.mobile = "13800006666", i.mobileCode = "1234");
              if (new e.Validator(_this4.rules, i).validate()) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return");
            case 4:
              i.mobile = _this4.weixinPhoneData, _this4.submitting = !0;
              _context4.next = 7;
              return e.profileApi.bindingMobile({
                data: i
              });
            case 7:
              t = _context4.sent;
              _this4.$utils.showMessage(t), t.success ? setTimeout(function () {
                _this4.redirectUrl ? e.index.redirectTo({
                  url: _this4.redirectUrl,
                  fail: function fail(i) {
                    e.index.switchTab({
                      url: this.redirectUrl
                    });
                  }
                }) : e.index.navigateBack({});
              }, 1800) : _this4.submitting = !1;
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  },
  onLoad: function onLoad(e) {
    this.redirectUrl = this.$utils.getExchangeData("binded-redirect-page");
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
})();var o = e._export_sfc(t, [["render", function (i, t, o, s, n, l) {
  return e.e({
    a: e.p({
      required: !0
    }),
    b: e.sr("tips", "40a2e37f-1"),
    c: n.profile && n.profile.mobile
  }, n.profile && n.profile.mobile ? {
    d: n.profile.mobile,
    e: e.o(function (e) {
      return n.profile.mobile = e.detail.value;
    }),
    f: e.p({
      label: "已绑定号码"
    })
  } : {}, {
    g: n.wxMobile,
    h: e.o(function (e) {
      return n.wxMobile = e.detail.value;
    }),
    i: e.o(function () {
      return l.getWxMobile && l.getWxMobile.apply(l, arguments);
    }),
    j: e.p({
      label: "手机号码",
      errorMessage: n.rules.mobile.error,
      required: !0
    }),
    k: n.profile
  }, n.profile ? {
    l: e.t(n.profile.mobile ? "更换绑定" : "绑定"),
    m: e.o(l.onBinding),
    n: e.p({
      loading: n.submitting,
      shape: "circle",
      shadow: !0
    })
  } : {});
}]]);wx.createPage(o);