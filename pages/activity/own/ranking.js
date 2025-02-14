var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../../common/vendor.js"),
  i = require("../../../apis/sport/organize-activity.js"),
  e = require("../../../apis/sport/user-activity.js"),
  n = require("../../fitness/mixture.js"),
  a = {
    mixins: [t.AppUtils],
    data: function data() {
      return {
        activity: null,
        ranking: {
          loading: !1,
          category: 10,
          sportKey: null,
          sportName: null,
          sportVisible: !1,
          userItems: [],
          teamItems: []
        }
      };
    },
    computed: {
      sportItems: function sportItems() {
        if (!this.activity) return [];
        var t = this.activity.sportItems.map(function (t) {
          return t.sport;
        });
        return t.splice(0, 0, {
          key: null,
          name: "所有"
        }), t;
      }
    },
    methods: {
      formatSeconds: n.fitnessMixture.formatSeconds,
      loadActivity: function loadActivity(t) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var i;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (t) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _this.loading = !0;
                _context.next = 5;
                return e.userActivityApi.get({
                  params: {
                    id: t
                  },
                  options: {
                    loading: !1
                  }
                });
              case 5:
                i = _context.sent;
                _this.loading = !1, i.success && (_this.activity = i.result, _this.loadRanking());
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      loadRanking: function loadRanking() {
        var _this2 = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
          var t, _e, _e2;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                t = {
                  params: {
                    activityId: _this2.activity.id,
                    sportKey: _this2.ranking.sportKey,
                    pageSize: 100,
                    pageIndex: 1
                  },
                  options: {
                    loading: !1
                  }
                };
                if (!(_this2.ranking.loading = !0, 10 != _this2.ranking.category && _this2.activity.isTeam)) {
                  _context2.next = 9;
                  break;
                }
                if (!(20 == _this2.ranking.category)) {
                  _context2.next = 7;
                  break;
                }
                _context2.next = 5;
                return i.organizegApi.getTeamRankings(t);
              case 5:
                _e = _context2.sent;
                _e.success && (_this2.ranking.teamItems = _e.result.data);
              case 7:
                _context2.next = 14;
                break;
              case 9:
                _this2.ranking.category = 10;
                _context2.next = 12;
                return i.organizegApi.getUserRankings(t);
              case 12:
                _e2 = _context2.sent;
                _e2.success && (_this2.ranking.userItems = _e2.result.data);
              case 14:
                _this2.ranking.loading = !1;
              case 15:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onSelectCategory: function onSelectCategory(t) {
        this.ranking.category = t, this.loadRanking();
      },
      onSportDropdown: function onSportDropdown() {
        this.ranking.sportVisible = !this.ranking.sportVisible;
      },
      onSelectSport: function onSelectSport(t) {
        t.key ? (this.ranking.sportKey = t.key, this.ranking.sportName = t.name) : (this.ranking.sportKey = null, this.ranking.sportName = null), this.loadRanking();
      }
    },
    onLoad: function onLoad(t) {
      this.loadActivity(t.id);
    }
  };if (!Array) {
  (t.resolveComponent("iconfont") + t.resolveComponent("tui-picker") + t.resolveComponent("avatar") + t.resolveComponent("list-viewer"))();
}Math || (function () {
  return "../../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-picker/tui-picker.js";
} + function () {
  return "../../../components/avatar.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/list-viewer.js";
})();var r = t._export_sfc(a, [["render", function (i, e, n, a, r, o) {
  return t.e({
    a: t.t(r.activity && r.activity.title),
    b: r.activity && r.activity.isTeam
  }, r.activity && r.activity.isTeam ? t.e({
    c: 10 == r.ranking.category
  }, 10 == r.ranking.category ? {
    d: t.p({
      name: "ok"
    })
  } : {}, {
    e: 10 == r.ranking.category ? 1 : "",
    f: t.o(function (t) {
      return o.onSelectCategory(10);
    }),
    g: 20 == r.ranking.category
  }, 20 == r.ranking.category ? {
    h: t.p({
      name: "ok"
    })
  } : {}, {
    i: 20 == r.ranking.category ? 1 : "",
    j: t.o(function (t) {
      return o.onSelectCategory(20);
    })
  }) : {}, {
    k: r.activity && r.activity.sportItems.length > 1
  }, r.activity && r.activity.sportItems.length > 1 ? {
    l: t.t(r.ranking.sportName || "单项榜单"),
    m: t.p({
      name: "arrow-down-s"
    }),
    n: t.o(function () {
      return o.onSportDropdown && o.onSportDropdown.apply(o, arguments);
    }),
    o: t.o(o.onSelectSport),
    p: t.o(o.onSportDropdown),
    q: t.p({
      show: r.ranking.sportVisible,
      "picker-data": o.sportItems,
      "value-field": "key",
      "text-field": "name"
    })
  } : {}, {
    r: 10 == r.ranking.category
  }, 10 == r.ranking.category ? {
    s: t.f(r.ranking.userItems, function (i, e, n) {
      return t.e({
        a: i.number <= 3
      }, i.number <= 3 ? {
        b: "/static/images/rk_no" + i.number + "_2x.png"
      } : {
        c: t.t(i.number)
      }, {
        d: "68deeaac-5-" + n + ",68deeaac-4",
        e: t.p({
          avatarUrl: i.user && i.user.avatarUrl
        }),
        f: t.t(i.name || i.user.nick),
        g: t.t(i.mobile),
        h: t.t(i.cardId),
        i: i.sport
      }, i.sport ? t.e({
        j: 10 == i.sport.tickMode
      }, 10 == i.sport.tickMode ? {
        k: t.t(i.counts)
      } : {
        l: t.t(o.formatSeconds(i.times))
      }) : {
        m: t.t(i.counts)
      }, {
        n: e
      });
    }),
    t: t.p({
      loading: r.ranking.loading,
      "list-data": r.ranking.userItems,
      "no-data-text": "无参赛记录，榜单未生成",
      inline: !0
    })
  } : {}, {
    v: 20 == r.ranking.category
  }, 20 == r.ranking.category ? {
    w: t.f(r.ranking.teamItems, function (i, e, n) {
      return t.e({
        a: i.number <= 3
      }, i.number <= 3 ? {
        b: "/static/images/rk_no" + i.number + "_2x.png"
      } : {
        c: t.t(i.number)
      }, {
        d: t.t(i.team),
        e: t.t(i.totals),
        f: t.t(o.formatSeconds(i.times)),
        g: i.sport
      }, i.sport ? t.e({
        h: 10 == i.sport.tickMode
      }, 10 == i.sport.tickMode ? {
        i: t.t(i.counts)
      } : {
        j: t.t(o.formatSeconds(i.times))
      }) : {
        k: t.t(i.counts)
      }, {
        l: e
      });
    }),
    x: t.p({
      loading: r.ranking.loading,
      "list-data": r.ranking.teamItems,
      "no-data-text": "无参赛记录，榜单未生成",
      inline: !0
    })
  } : {});
}]]);wx.createPage(r);