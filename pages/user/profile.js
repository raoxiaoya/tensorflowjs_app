var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  i = require("../../apis/sport/profile.js"),
  o = {
    mixins: [e.AppUtils],
    data: function data() {
      return {
        theme: e.index.$theme,
        regions: null,
        userProfile: {
          nick: null,
          gender: null,
          lastIP: null,
          lastTime: null
        },
        fitnessProfile: {
          height: null,
          weight: null,
          gender: null
        },
        userRules: {
          nick: {
            error: null,
            required: !0,
            requiredMessage: "昵称不能为空"
          }
        }
      };
    },
    methods: {
      loadProfile: function loadProfile() {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var o, _e;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return e.profileApi.get({
                  options: {
                    loading: !0,
                    cached: !1
                  }
                });
              case 2:
                o = _context.sent;
                if (o.success) {
                  _e = o.result;
                  _this.userProfile = _e, _e.city && (_this.regions = [{
                    name: _e.province
                  }, {
                    name: _e.city
                  }, {
                    name: _e.county
                  }]);
                }
                _context.next = 6;
                return i.fitnessProfileApi.get({
                  options: {
                    loading: !0,
                    cached: !1
                  }
                });
              case 6:
                o = _context.sent;
                o.success && (_this.fitnessProfile = o.result);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onUploadAvatar: function onUploadAvatar() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var i, o, r;
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
                o = i.tempFiles[0].tempFilePath;
                _context2.next = 8;
                return e.ossApi.directUploadAliyun({
                  filePath: o,
                  maxSize: 2048,
                  options: {
                    loading: !0,
                    loadingText: "上传中..."
                  }
                });
              case 8:
                r = _context2.sent;
                _this2.userProfile.avatar = r.result, _this2.userProfile.avatarUrl = o;
              case 10:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onGenderChange: function onGenderChange(e) {
        this.userProfile.gender = "true" === e.detail.value;
      },
      onEdit: function onEdit() {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          var o;
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (new e.Validator(_this3.userRules, _this3.userProfile).validate()) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return");
              case 2:
                e.utils.isEmptyArray(_this3.regions) || (_this3.userProfile.province = _this3.regions[0].name, _this3.userProfile.city = _this3.regions[1].name, _this3.userProfile.county = _this3.regions[2].name);
                _context3.next = 5;
                return e.profileApi.edit({
                  data: _this3.userProfile,
                  options: {
                    loading: !0,
                    loadingText: "编辑中..."
                  }
                });
              case 5:
                o = _context3.sent;
                _context3.t0 = o.success;
                if (!_context3.t0) {
                  _context3.next = 12;
                  break;
                }
                _context3.next = 10;
                return i.fitnessProfileApi.edit({
                  data: _this3.fitnessProfile,
                  options: {
                    loading: !0,
                    loadingText: "编辑中..."
                  }
                });
              case 10:
                o = _context3.sent;
                o.success && (_this3.$utils.showToast("资料编辑成功"), _this3.$utils.setExchangeData("profile-updated", !0));
              case 12:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    },
    onLoad: function onLoad(e) {
      this.loadProfile();
    }
  };if (!Array) {
  (e.resolveComponent("avatar") + e.resolveComponent("tag") + e.resolveComponent("iconfont") + e.resolveComponent("form-item") + e.resolveComponent("number-picker") + e.resolveComponent("region-picker") + e.resolveComponent("tui-button"))();
}Math || (function () {
  return "../../components/avatar.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/tag.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../components/form-item.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/number-picker.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/region-picker.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
})();var r = e._export_sfc(o, [["render", function (i, o, r, s, t, l) {
  return e.e({
    a: t.userProfile
  }, t.userProfile ? {
    b: e.o(l.onUploadAvatar),
    c: e.p({
      avatarUrl: t.userProfile.avatarUrl,
      editing: !0
    })
  } : {}, {
    d: t.userProfile
  }, t.userProfile ? e.e({
    e: t.userProfile.mobile
  }, t.userProfile.mobile ? {
    f: e.t(i.$filters.maskPrivacy(t.userProfile.mobile, 4)),
    g: e.p({
      shape: "circle"
    })
  } : {
    h: e.p({
      shape: "circle"
    })
  }, {
    i: e.p({
      name: "edit-line"
    })
  }) : {}, {
    j: t.userProfile.nick,
    k: e.o(function (e) {
      return t.userProfile.nick = e.detail.value;
    }),
    l: e.p({
      label: "昵称",
      errorMessage: t.userRules.nick.error,
      required: !0
    }),
    m: e.o(function (e) {
      return t.fitnessProfile.height = e;
    }),
    n: e.p({
      label: "身高",
      placeholder: "请选择您的身高，便于计算您的健身指数",
      numberMin: 100,
      numberMax: 300,
      unit: "cm",
      modelValue: t.fitnessProfile.height
    }),
    o: e.p({
      label: "身高",
      "tap-enabled": !0
    }),
    p: e.o(function (e) {
      return t.fitnessProfile.weight = e;
    }),
    q: e.p({
      label: "体重",
      placeholder: "请输入您的体重，便于计算您的健身指数",
      numberMin: 10,
      numberMax: 200,
      decimals: 1,
      unit: "KG",
      modelValue: t.fitnessProfile.weight
    }),
    r: e.p({
      label: "体重",
      "tap-enabled": !0
    }),
    s: t.userProfile.gender,
    t: t.theme.colorPrimary,
    v: !1 === t.userProfile.gender,
    w: t.theme.colorPrimary,
    x: e.o(function () {
      return l.onGenderChange && l.onGenderChange.apply(l, arguments);
    }),
    y: e.p({
      label: "性别"
    }),
    z: e.o(function (e) {
      return t.regions = e;
    }),
    A: e.p({
      selectorLevel: 2,
      placeholder: "请选择所在的地区",
      modelValue: t.regions
    }),
    B: e.p({
      label: "地区",
      "tap-enabled": !0
    }),
    C: e.t(t.userProfile.loginIP || ""),
    D: e.p({
      label: "最后登录IP"
    }),
    E: e.t(i.$filters.formatDate(t.userProfile.loginTime, "yyyy-MM-dd HH:mm:ss")),
    F: e.p({
      label: "最后登录时间"
    }),
    G: e.o(l.onEdit),
    H: e.p({
      shape: "circle",
      shadow: !0
    })
  });
}]]);wx.createPage(r);