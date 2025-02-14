var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../common/vendor.js"),
  e = require("../../apis/sport/fitness.js"),
  s = require("../../apis/sport/profile.js"),
  o = require("../fitness/mixture.js"),
  i = {
    mixins: [t.AppUtils],
    data: function data() {
      var e = t.index.getMenuButtonBoundingClientRect();
      return this.obesityMap = o.fitnessMixture.getObesityMap(), {
        navTop: e.top,
        navWidth: e.width,
        navHeight: e.height,
        userProfile: null,
        fitnessProfile: null,
        sportTotals: {
          totals: 0,
          steps: 0,
          times: 0,
          counts: 0,
          calories: 0
        }
      };
    },
    mounted: function mounted() {
      var _this = this;
      t.index.$once("on-authorization", function () {
        _this.loadProfile(), _this.statFitness();
      });
    },
    methods: {
      formatSeconds: o.fitnessMixture.formatSeconds,
      loadProfile: function loadProfile() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var e;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return t.profileApi.get({
                  options: {
                    loading: !0
                  }
                });
              case 2:
                e = _context.sent;
                e.success && (_this2.userProfile = e.result);
                _context.next = 6;
                return s.fitnessProfileApi.get({
                  options: {
                    loading: !0
                  }
                });
              case 6:
                e = _context.sent;
                e.success && (_this2.fitnessProfile = e.result);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      statFitness: function statFitness() {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var s, o, i, a, n, r, l;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                s = t.dateUtils.getThisMonth();
                _context2.next = 3;
                return e.fitnessApi.statGroupBySport({
                  params: {
                    begin: t.utils.formatDate(s.begin, "yyyy-MM-dd HH:mm:ss"),
                    end: t.utils.formatDate(s.end, "yyyy-MM-dd HH:mm:ss")
                  },
                  options: {
                    loading: !1
                  }
                });
              case 3:
                o = _context2.sent;
                if (o.success) {
                  _context2.next = 6;
                  break;
                }
                return _context2.abrupt("return");
              case 6:
                i = o.result;
                a = i.find(function (t) {
                  return "Walk" == t.key;
                });
                a && (_this3.sportTotals.steps = a.counts);
                n = 0, r = 0, l = 0;
                i.forEach(function (t) {
                  "Walk" != t.key && ("total" != t.key ? (n += t.counts, r += t.times, l += t.calories) : _this3.sportTotals.totals = t.totals);
                }), _this3.sportTotals.counts = n, _this3.sportTotals.times = r, _this3.sportTotals.calories = Math.round(l / 100, 1) / 10;
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onUpgrade: function onUpgrade() {
        this.$utils.checkingUpgrade();
      }
    },
    onLoad: function onLoad() {
      0 != t.authenticationApi.checkingSession() && (this.loadProfile(), this.statFitness());
    },
    onShow: function onShow() {
      this.$utils.getExchangeData("profile-updated") && this.loadProfile();
    },
    onPullDownRefresh: function onPullDownRefresh() {
      var _this4 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
        return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this4.loadProfile();
            case 2:
              _context3.next = 4;
              return _this4.statFitness();
            case 4:
              t.index.stopPullDownRefresh();
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  };if (!Array) {
  (t.resolveComponent("avatar") + t.resolveComponent("iconfont"))();
}Math || (function () {
  return "../../components/avatar.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
})();var a = t._export_sfc(i, [["render", function (e, s, o, i, a, n) {
  return t.e({
    a: a.userProfile
  }, a.userProfile ? {
    b: t.p({
      avatarUrl: a.userProfile.avatarUrl
    }),
    c: t.t(a.userProfile.nick || "<未填写>"),
    d: t.t(e.$filters.formatDate(a.userProfile.loginTime, "yyyy-MM-dd HH:mm:ss") || "----")
  } : {
    e: t.p({
      name: "arrow-right"
    })
  }, {
    f: a.navTop + "px",
    g: t.t(a.sportTotals.steps),
    h: t.t(a.sportTotals.counts),
    i: t.t(n.formatSeconds(a.sportTotals.times)),
    j: t.t(a.sportTotals.totals),
    k: a.fitnessProfile && a.fitnessProfile.bmi
  }, a.fitnessProfile && a.fitnessProfile.bmi ? {
    l: t.t(a.fitnessProfile.bmi),
    m: t.t(e.obesityMap.getText(a.fitnessProfile.obesity)),
    n: e.obesityMap.getColor(a.fitnessProfile.obesity)
  } : {}, {
    o: t.p({
      name: "activity-create-hollow"
    }),
    p: t.p({
      name: "activity-hollow"
    }),
    q: t.p({
      name: "homework-create"
    }),
    r: t.p({
      name: "runner-book"
    }),
    s: t.p({
      name: "activity-record"
    }),
    t: t.p({
      name: "sport-beat"
    }),
    v: t.p({
      name: "human-body"
    }),
    w: t.p({
      name: "mobile"
    }),
    x: t.p({
      name: "contact-us"
    }),
    y: t.p({
      name: "upgrade"
    }),
    z: t.o(function () {
      return n.onUpgrade && n.onUpgrade.apply(n, arguments);
    }),
    A: t.p({
      name: "about"
    })
  });
}]]);wx.createPage(a);