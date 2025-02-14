var _regeneratorRuntime2 = require("../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../@babel/runtime/helpers/asyncToGenerator");var e = require("../common/vendor.js"),
  i = require("../common/assets.js"),
  o = {
    name: "loginModal",
    options: {
      styleIsolation: "shared"
    },
    mixins: [e.AppUtils],
    props: {
      modelValue: {
        type: Boolean,
        default: !1
      },
      required: {
        type: Boolean,
        default: !1
      },
      requireProfile: {
        type: Boolean,
        default: !1
      },
      requireMobile: {
        type: Boolean,
        default: !1
      },
      requireMobileMessage: {
        type: String,
        default: "请先绑定手机号，再继续操作。"
      }
    },
    watch: {
      modelValue: function modelValue(e) {
        this.visibled = e;
      }
    },
    emits: ["update:modelValue", "on-session-valid", "on-profile-loaded"],
    data: function data() {
      return {
        submiting: !1,
        visibled: this.modelValue,
        message: null
      };
    },
    mounted: function mounted() {
      var _this = this;
      var i = this;
      if (e.index.$once("on-authorization", function () {
        i.onClose(), _this.isSessionValid();
      }), 0 != e.authenticationApi.checkingSession()) return i.onClose(), void this.isSessionValid();
      this.visibled = !0, this.$emit("udpate:modelValue", !0);
    },
    methods: {
      assertBindMobile: function assertBindMobile(i) {
        if (!this.requireMobile) return;
        if (!e.utils.isNone(i.mobile)) return;
        var o = this;
        e.index.showModal({
          title: e.index.$appConfig.title,
          content: this.requireMobileMessage,
          cancelText: "放弃",
          cancelColor: e.index.$theme.colorError,
          confirmText: "去绑定",
          success: function success(i) {
            if (i.confirm) {
              var _i = o.$utils.getShareInfo();
              return o.$utils.setExchangeData("binded-redirect-page", _i.path), void e.index.redirectTo({
                url: "/pages/user/binding-mobile"
              });
            }
            e.index.navigateBack({
              fail: function fail(i) {
                e.index.switchTab({
                  url: "/pages/main/home"
                });
              }
            });
          }
        });
      },
      isSessionValid: function isSessionValid() {
        if (this.$emit("on-session-valid"), !this.requireProfile && !this.requireMobile) return;
        var i = this;
        e.profileApi.get({
          options: {
            loading: !1
          }
        }).then(function (e) {
          if (!e.success) return;
          var o = e.result;
          i.$emit("on-profile-loaded", o), i.assertBindMobile(o);
        });
      },
      onClose: function onClose() {
        this.visibled = !1, this.$emit("update:modelValue", !1);
      },
      onLogin: function onLogin() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var i, o;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this2.message = null;
                _context.next = 3;
                return e.wx$1.login();
              case 3:
                i = _context.sent;
                _context.next = 6;
                return e.authenticationApi.loginOfWxmini({
                  data: {
                    code: i.code
                  },
                  options: {
                    loading: !1,
                    onLoading: function onLoading(e) {
                      return _this2.submiting = e;
                    },
                    showError: !1
                  }
                });
              case 6:
                o = _context.sent;
                o.success ? (_this2.onClose(), _this2.isSessionValid()) : _this2.message = o.message;
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    }
  };if (!Array) {
  (e.resolveComponent("tui-button") + e.resolveComponent("tui-modal"))();
}Math || (function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
} + function () {
  return "../node-modules/yunzhi.uni-app/thorui/tui-modal/tui-modal.js";
})();var s = e._export_sfc(o, [["render", function (o, s, t, n, a, l) {
  return e.e({
    a: i._imports_0,
    b: a.message
  }, a.message ? {
    c: e.t(a.message)
  } : {}, {
    d: e.o(l.onLogin),
    e: e.p({
      type: "primary",
      shape: "circle",
      height: "86rpx",
      loading: a.submiting,
      shadow: !0
    }),
    f: e.o(l.onClose),
    g: e.p({
      show: a.visibled,
      maskClosable: !t.required,
      fadeIn: !0,
      custom: !0
    })
  });
}]]);wx.createComponent(s);