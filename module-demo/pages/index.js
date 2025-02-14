var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  o = require("../index.js"),
  n = require("../sports/sport-hand-lift.js"),
  t = require("../../common/assets.js"),
  i = e.index.$aiSportPlugin,
  a = i.humanDetection,
  s = i.sports.SportBase;s.register(n.SportHandLift.KEY, n.SportHandLift.NAME, function () {
  return new n.SportHandLift();
});var r = {
  data: function data() {
    var n = e.utils.clone(s.SPORTS);
    return {
      version: i.version.release,
      ve: null,
      enhanced: o.module.judgeEnhanced(),
      threshold: .25,
      sports: n,
      sportKey: n[2].key
    };
  },
  methods: {
    initializeVe: function initializeVe() {
      e.wx$1.showLoading({
        title: "加载模型..."
      });
      a.initialize({
        ve: this.ve,
        enhanced: this.enhanced,
        callback: function callback(o) {
          e.wx$1.hideLoading();
          var n = a.getVe();
          var t = !1;
          if (1 == n && (t = a.isEnhanced()), !o) return e.realLog.log("人体检测能力初始化成功。", n, t), void e.index.showToast({
            icon: "none",
            title: "\u521D\u59CB\u6210\u529F\uFF0C\u5F15\u64CEve".concat(n, " ").concat(t ? "增强" : "")
          });
          e.realLog.error("\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BE6\u7EC6\u4FE1\u606F\uFF1A".concat(o.message)), e.wx$1.setClipboardData({
            data: o.message,
            success: function success() {
              e.wx$1.showToast({
                title: "初始化失败",
                icon: "none"
              });
            }
          });
        }
      });
    },
    onShowTips: function onShowTips(o) {
      e.index.showModal({
        content: o,
        showCancel: !1
      });
    },
    onSelectVe: function onSelectVe(e) {
      this.ve = e, this.initializeVe();
    },
    onToggleEnhanced: function onToggleEnhanced() {
      this.enhanced = !this.enhanced, this.initializeVe();
    },
    onThresholdChanged: function onThresholdChanged(n) {
      var t = n.detail.value,
        i = parseFloat(t);
      /^[0-1](\.\d{1,2})?$/.test(t) && i <= 1 ? o.module.initializePlugin(i) : (e.index.showToast({
        icon: "none",
        title: "阈值必须在0-1之间"
      }), this.threshold = .35);
    },
    onSelectSport: function onSelectSport(e) {
      this.sportKey = e;
    },
    onNavSport: function onNavSport() {
      e.index.navigateTo({
        url: "./sport?sportKey=".concat(this.sportKey)
      });
    },
    onNavHuman: function onNavHuman() {
      e.index.navigateTo({
        url: "./human"
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.realLog.setFilterMsg("human-initialize");
            _context.next = 3;
            return o.module.getWhiteList();
          case 3:
            _this.enhanced = o.module.judgeEnhanced();
            _this.initializeVe();
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      path: "module-sport/pages/boot-plugin?redirectUrl=/module-demo/pages/index",
      title: "云智AI运动识别插件，功能展示，欢迎体验"
    };
  }
};if (!Array) {
  e.resolveComponent("iconfont")();
}Math;var l = e._export_sfc(r, [["render", function (o, n, i, a, s, r) {
  return {
    a: t._imports_0$2,
    b: e.t(s.version),
    c: null === s.ve ? 1 : "",
    d: e.o(function (e) {
      return r.onSelectVe(null);
    }),
    e: 1 === s.ve ? 1 : "",
    f: e.o(function (e) {
      return r.onSelectVe(1);
    }),
    g: 2 === s.ve ? 1 : "",
    h: e.o(function (e) {
      return r.onSelectVe(2);
    }),
    i: e.o(function (e) {
      return r.onShowTips("ve1：识别率及精度高，识别帧率及兼容性稍差；ve2：识别帧率及兼容性更好，精度稍差。推荐使用自动模式。");
    }),
    j: e.p({
      name: "about",
      hover: !0
    }),
    k: s.enhanced ? 1 : "",
    l: e.o(function (e) {
      return r.onToggleEnhanced(null);
    }),
    m: e.o(function (e) {
      return r.onShowTips("是否启用ve1的增强识别模式，针对MTK天玑系列芯片GPU性能精度不足问题优化，需要升级最新版微信。");
    }),
    n: e.p({
      name: "about",
      hover: !0
    }),
    o: e.o(function () {
      return r.onThresholdChanged && r.onThresholdChanged.apply(r, arguments);
    }),
    p: s.threshold,
    q: e.o(function (e) {
      return s.threshold = e.detail.value;
    }),
    r: e.o(function (e) {
      return r.onShowTips("人体置信度要求，值越大精度越高，通过率越差；推荐0.3-0.35之间。");
    }),
    s: e.p({
      name: "about",
      hover: !0
    }),
    t: e.f(s.sports, function (o, n, t) {
      return {
        a: e.t(o.name),
        b: o.key === s.sportKey ? 1 : "",
        c: o.key,
        d: e.o(function (e) {
          return r.onSelectSport(o.key);
        }, o.key)
      };
    }),
    v: e.o(function () {
      return r.onNavSport && r.onNavSport.apply(r, arguments);
    }),
    w: e.o(function () {
      return r.onNavHuman && r.onNavHuman.apply(r, arguments);
    })
  };
}]]);r.__runtimeHooks = 2, wx.createPage(l);