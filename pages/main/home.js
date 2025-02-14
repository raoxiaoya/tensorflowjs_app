var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../common/vendor.js"),
  e = require("../../apis/sport/setting.js"),
  s = require("../../apis/sport/fitness.js"),
  i = require("../../apis/walk-fitness.js"),
  a = require("../fitness/mixture.js"),
  n = require("../../apis/sport/organize-activity.js"),
  o = {
    mixins: [t.AppUtils],
    data: function data() {
      return {
        sports: [],
        userProfile: null,
        fitnessProfile: null,
        todayFitness: {
          steps: 0,
          times: 0,
          calories: 0
        },
        activities: [],
        activityLoading: !1,
        sportKey: null
      };
    },
    methods: {
      formatSeconds: a.fitnessMixture.formatSeconds,
      loadSports: function loadSports() {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var t;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return e.settingApi.getSports();
              case 2:
                t = _context.sent;
                t.success && (_this.sports = t.result.filter(function (t) {
                  return t.enabled;
                }).splice(0, 10));
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      getTodayFitnessTotal: function getTodayFitnessTotal(t) {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var e, i;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return s.fitnessApi.statGroupBySport({
                  options: {
                    loading: !1,
                    cached: !!t
                  }
                });
              case 2:
                e = _context2.sent;
                if (e.success) {
                  _context2.next = 5;
                  break;
                }
                return _context2.abrupt("return");
              case 5:
                i = e.result.find(function (t) {
                  return "Walk" == t.key;
                });
                i && (_this2.todayFitness.steps = i.counts), i = e.result.find(function (t) {
                  return "total" == t.key;
                }), i && (_this2.todayFitness.times = i.times, _this2.todayFitness.calories = Math.round(i.calories / 100, 1) / 10);
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onSyncSteps: function onSyncSteps(t) {
        var _this3 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
          var e;
          return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return i.walkFitness.syncingWeruns(!!t, {
                  options: {
                    loading: !0,
                    showError: !0
                  }
                });
              case 2:
                e = _context3.sent;
                _context3.t0 = e && e.success;
                if (!_context3.t0) {
                  _context3.next = 7;
                  break;
                }
                _context3.next = 7;
                return _this3.getTodayFitnessTotal(!1);
              case 7:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      loadActivity: function loadActivity() {
        var _this4 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee4() {
          var t;
          return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return n.organizegApi.search({
                  params: {
                    pageSize: 3,
                    pageIndex: 1
                  },
                  options: {
                    loading: !1,
                    onLoading: function onLoading(t) {
                      return _this4.activityLoading = t;
                    }
                  }
                });
              case 2:
                t = _context4.sent;
                t.success && (_this4.activities = t.result.data);
              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onBuilding: function onBuilding(e) {
        t.index.showToast({
          title: e || "稍后开放，敬请期待…",
          icon: "none"
        });
      }
    },
    onLoad: function onLoad() {
      var _this5 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee5() {
        return _regeneratorRuntime2().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.loadSports();
            case 2:
              _this5.loadActivity();
              0 !== t.authenticationApi.checkingSession() && (_this5.onSyncSteps(), _this5.getTodayFitnessTotal());
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    onPullDownRefresh: function onPullDownRefresh() {
      var _this6 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee6() {
        return _regeneratorRuntime2().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.loadActivity();
            case 2:
              _context6.t0 = 0 !== t.authenticationApi.checkingSession();
              if (!_context6.t0) {
                _context6.next = 7;
                break;
              }
              _context6.next = 6;
              return _this6.getTodayFitnessTotal();
            case 6:
              t.index.stopPullDownRefresh();
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    onShareAppMessage: function onShareAppMessage() {
      return this.$utils.getShareInfo();
    },
    onShareTimeline: function onShareTimeline() {
      return this.$utils.getShareInfo();
    }
  };if (!Array) {
  (t.resolveComponent("iconfont") + t.resolveComponent("activity-item") + t.resolveComponent("list-viewer"))();
}Math || (function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../components/activity-item.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/list-viewer.js";
})();var r = t._export_sfc(o, [["render", function (e, s, i, a, n, o) {
  return {
    a: t.p({
      name: "keypad"
    }),
    b: t.p({
      name: "keypad"
    }),
    c: t.p({
      name: "keypad"
    }),
    d: t.o(function (t) {
      return o.onBuilding("请联系客服咨询^_^");
    }),
    e: t.p({
      name: "keypad"
    }),
    f: t.p({
      name: "activity-create"
    }),
    g: t.p({
      name: "activity-o"
    }),
    h: t.p({
      name: "activity-record"
    }),
    i: t.p({
      name: "estimate"
    }),
    j: t.t(e.$filters.formatThousands(n.todayFitness.steps)),
    k: t.p({
      name: "sync"
    }),
    l: t.o(function () {
      return o.onSyncSteps && o.onSyncSteps.apply(o, arguments);
    }),
    m: t.t(o.formatSeconds(n.todayFitness.times)),
    n: t.t(e.$filters.formatThousands(n.todayFitness.calories)),
    o: t.f(n.sports, function (e, s, i) {
      return {
        a: t.t(e.name),
        b: e.coverUrl,
        c: e.key,
        d: "/pages/sport/detail?sportKey=" + e.key
      };
    }),
    p: t.f(n.activities, function (e, s, i) {
      return {
        a: "7d7fd306-10-" + i + ",7d7fd306-9",
        b: t.p({
          activity: e
        }),
        c: e.id,
        d: "/pages/activity/public/detail?id=" + e.id
      };
    }),
    q: t.p({
      "list-data": n.activities,
      loading: n.activityLoading,
      inline: !0
    })
  };
}]]);o.__runtimeHooks = 6, wx.createPage(r);