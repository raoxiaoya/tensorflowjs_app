var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../common/vendor.js"),
  e = require("../../apis/sport/setting.js"),
  s = require("../../apis/sport/fitness.js"),
  n = require("../fitness/mixture.js"),
  i = {
    mixins: [t.AppUtils],
    data: function data() {
      return {
        loading: !0,
        sport: null,
        modeIndex: 0,
        modes: [{
          value: 1,
          name: "定时"
        }, {
          value: 2,
          name: "定数"
        }, {
          value: 0,
          name: "自由"
        }],
        targets: 60,
        contentWidth: .95 * (t.index.getWindowInfo().windowWidth - 64),
        contentIndex: 0,
        contentTabs: [{
          name: "运动介绍"
        }, {
          name: "锻炼榜单"
        }, {
          name: "我的锻炼"
        }],
        rankingLoading: !1,
        rankings: null,
        myFitness: {
          loaded: !1,
          today: {
            counts: 0,
            times: 0
          },
          highest: 0,
          calories: 0,
          times: 0
        }
      };
    },
    methods: {
      formatSeconds: n.fitnessMixture.formatSeconds,
      maskPrivacyField: function maskPrivacyField(e, s) {
        return e ? t.utils.maskPrivacy(e, s) : null;
      },
      loadRankings: function loadRankings() {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var t;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!_this.rankingLoading) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _this.rankingLoading = !0;
                _context.next = 5;
                return s.fitnessApi.getRankings({
                  params: {
                    sportKey: _this.sport.key,
                    pageSize: 10
                  },
                  options: {
                    loading: !1
                  }
                });
              case 5:
                t = _context.sent;
                _this.rankingLoading = !1, t.success && (_this.rankings = t.result.data);
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      loadMyFitness: function loadMyFitness() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var e, n, i, o;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.myFitness.loaded) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                _this2.myFitness.loaded = !0;
                _context2.next = 5;
                return s.fitnessApi.statGroupBySport({
                  params: {
                    sportKey: _this2.sport.key
                  },
                  options: {
                    loading: !1
                  }
                });
              case 5:
                e = _context2.sent;
                if (e.success) {
                  _context2.next = 8;
                  break;
                }
                return _context2.abrupt("return");
              case 8:
                n = e.result;
                if (!t.utils.isEmptyArray(n)) {
                  _context2.next = 11;
                  break;
                }
                return _context2.abrupt("return");
              case 11:
                i = n[0];
                _this2.myFitness.today.counts = i.counts;
                _this2.myFitness.today.times = i.times;
                _context2.next = 16;
                return s.fitnessApi.statGroupBySport({
                  params: {
                    sportKey: _this2.sport.key,
                    begin: "2000-01-01 00:00:00"
                  },
                  options: {
                    loading: !1
                  }
                });
              case 16:
                e = _context2.sent;
                o = n[0];
                _this2.myFitness.highest = o.highest, _this2.myFitness.calories = o.calories, _this2.myFitness.times = o.times;
              case 19:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onModeSelect: function onModeSelect(t) {
        switch (this.modeIndex = t.index, this.modeIndex) {
          case 0:
            this.targets = 60;
            break;
          case 1:
            this.targets = 30;
        }
      },
      changeTargets: function changeTargets(t) {
        var e = 5,
          s = 99999;
        if (0 === this.modeIndex) e = 20, s = 600;
        t += this.targets, t = Math.max(t, e), t = Math.min(t, s), this.targets = t;
      },
      onDecreaseTarget: function onDecreaseTarget() {
        switch (this.modeIndex) {
          case 0:
            this.changeTargets(-10);
            break;
          case 1:
            this.changeTargets(-5);
        }
      },
      onIncreaseTarget: function onIncreaseTarget(t) {
        switch (this.modeIndex) {
          case 0:
            this.changeTargets(10);
            break;
          case 1:
            this.changeTargets(5);
        }
      },
      onGotoFitness: function onGotoFitness() {
        var e = this.modes[this.modeIndex].value;
        t.index.navigateTo({
          url: "/module-sport/pages/device-place-guide?sportKey=".concat(this.sport.key, "&mode=").concat(e, "&targets=").concat(this.targets)
        });
      },
      onContentTabChange: function onContentTabChange(t) {
        this.contentIndex = t.index, 1 == t.index && null == this.rankings && this.loadRankings(), 2 == t.index && this.loadMyFitness();
      }
    },
    onLoad: function onLoad(s) {
      var _this3 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
        var n;
        return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return e.settingApi.findSport(s.sportKey);
            case 2:
              n = _context3.sent;
              _this3.sport = n, _this3.loading = !1, n && (t.index.setNavigationBarTitle({
                title: n.name
              }), 20 == n.tickMode && _this3.modes.splice(1, 1));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    onShareAppMessage: function onShareAppMessage() {
      return this.$utils.getShareInfo();
    },
    onShareTimeline: function onShareTimeline() {
      return this.$utils.getShareInfo();
    }
  };if (!Array) {
  (t.resolveComponent("tui-tabs") + t.resolveComponent("iconfont") + t.resolveComponent("tui-button") + t.resolveComponent("avatar") + t.resolveComponent("list-viewer") + t.resolveComponent("pager-container"))();
}Math || (function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-tabs/tui-tabs.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
} + function () {
  return "../../components/avatar.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/list-viewer.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/pager-container.js";
})();var o = t._export_sfc(i, [["render", function (e, s, n, i, o, a) {
  return t.e({
    a: o.sport
  }, o.sport ? {
    b: o.sport.videoUrl
  } : {}, {
    c: o.sport
  }, o.sport ? t.e({
    d: t.o(a.onModeSelect),
    e: t.p({
      tabs: o.modes,
      currentTab: o.modeIndex,
      width: 216,
      size: 32,
      sliderWidth: 36,
      unlined: !0
    }),
    f: 0 === o.modes[o.modeIndex].value
  }, 0 === o.modes[o.modeIndex].value ? {} : t.e({
    g: t.p({
      name: "triangle-left"
    }),
    h: t.o(function () {
      return a.onDecreaseTarget && a.onDecreaseTarget.apply(a, arguments);
    }),
    i: 0 == o.modeIndex
  }, 0 == o.modeIndex ? {
    j: t.t(a.formatSeconds(o.targets))
  } : {
    k: t.t(o.targets)
  }, {
    l: t.p({
      name: "triangle-right"
    }),
    m: t.o(function () {
      return a.onIncreaseTarget && a.onIncreaseTarget.apply(a, arguments);
    })
  }), {
    n: t.o(a.onGotoFitness),
    o: t.p({
      type: "primary",
      width: "55vw",
      margin: "0 auto",
      shape: "circle",
      shadow: !0
    }),
    p: t.o(a.onContentTabChange),
    q: t.p({
      currentTab: o.contentIndex,
      tabs: o.contentTabs,
      width: o.contentWidth,
      padding: 0,
      size: 32,
      selectedColor: "#000",
      bold: !0,
      sliderBgColor: "#000",
      sliderWidth: 48,
      unlined: !0
    }),
    r: o.contentWidth + "px",
    s: 0 === o.contentIndex
  }, 0 === o.contentIndex ? {
    t: t.t(o.sport.introduction)
  } : {}, {
    v: 1 === o.contentIndex
  }, 1 === o.contentIndex ? t.e({
    w: o.rankings
  }, o.rankings ? {
    x: t.f(o.rankings, function (e, s, n) {
      return t.e({
        a: t.t(s + 1),
        b: "64881dcb-7-" + n + ",64881dcb-6",
        c: t.p({
          avatarUrl: e.user && e.user.avatarUrl
        }),
        d: t.t(a.maskPrivacyField(e.user.nick, 2)),
        e: 10 == e.tickMode
      }, 10 == e.tickMode ? {
        f: t.t(e.counts)
      } : {}, {
        g: t.t(a.formatSeconds(e.times)),
        h: e.id
      });
    })
  } : {}, {
    y: t.p({
      loading: o.rankingLoading,
      listData: o.rankings,
      noDataText: "暂无记录，待您创造^_^",
      inline: !0
    })
  }) : {}, {
    z: 2 == o.contentIndex
  }, 2 == o.contentIndex ? t.e({
    A: t.p({
      name: "today"
    }),
    B: 10 == o.sport.tickMode
  }, 10 == o.sport.tickMode ? {
    C: t.t(o.myFitness.today.counts)
  } : {}, {
    D: 20 == o.sport.tickMode
  }, 20 == o.sport.tickMode ? {
    E: t.t(a.formatSeconds(o.myFitness.today.times))
  } : {}, {
    F: t.p({
      name: "max-value"
    }),
    G: 10 == o.sport.tickMode
  }, 10 == o.sport.tickMode ? {
    H: t.t(o.myFitness.highest)
  } : {}, {
    I: 20 == o.sport.tickMode
  }, 20 == o.sport.tickMode ? {
    J: t.t(a.formatSeconds(o.myFitness.highest))
  } : {}, {
    K: t.p({
      name: "hot"
    }),
    L: t.t(e.$filters.formatThousands((o.myFitness.calories / 1e3).toFixed(2))),
    M: t.p({
      name: "chart-lines"
    }),
    N: t.t(a.formatSeconds(o.myFitness.times))
  }) : {}) : {}, {
    O: t.p({
      loading: o.loading,
      contentData: o.sport,
      noDataText: "运动不存在^_^",
      noDataGotoPage: "./index",
      noDataGotoText: "返回运动列表"
    })
  });
}]]);i.__runtimeHooks = 6, wx.createPage(o);