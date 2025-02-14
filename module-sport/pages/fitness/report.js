var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../../common/vendor.js"),
  e = require("../../../pages/fitness/mixture.js"),
  o = require("../../../common/assets.js"),
  s = {
    data: function data() {
      return {
        top: t.index.getMenuButtonBoundingClientRect().top + 7,
        profile: {
          avatarUrl: null
        },
        sportName: null,
        tickMode: 10,
        counts: 0,
        times: 0,
        calories: 0
      };
    },
    methods: {
      formatSeconds: e.fitnessMixture.formatSeconds,
      loadProfile: function loadProfile() {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var e;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return t.profileApi.get({
                  options: {
                    loading: !1
                  }
                });
              case 2:
                e = _context.sent;
                e.success && (_this.profile = e.result);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onBack: function onBack() {
        console.log("/pages/sport/detail?sportKey=".concat(this.sportKey)), t.index.redirectTo({
          url: "/pages/sport/detail?sportKey=".concat(this.sportKey)
        });
      }
    },
    onLoad: function onLoad(t) {
      this.sportKey = t.sportKey, this.sportName = t.sportName, this.tickMode = t.tickMode, this.counts = t.counts, this.times = t.times, this.calories = t.calories, this.loadProfile();
    },
    onShareAppMessage: function onShareAppMessage() {
      return {
        title: this.$appTitle,
        path: "/pages/sport/detail?sportKey=".concat(this.sportKey)
      };
    },
    onShareTimeline: function onShareTimeline() {
      return {
        title: this.$appTitle,
        path: "/pages/sport/detail",
        query: "?sportKey=".concat(this.sportKey)
      };
    }
  };if (!Array) {
  (t.resolveComponent("avatar") + t.resolveComponent("tui-button"))();
}Math || (function () {
  return "../../../components/avatar.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
})();var i = t._export_sfc(s, [["render", function (e, s, i, r, a, p) {
  return t.e({
    a: a.top + "px",
    b: t.p({
      avatarUrl: a.profile.avatarUrl
    }),
    c: t.t(a.sportName),
    d: 10 == a.tickMode
  }, 10 == a.tickMode ? {
    e: t.t(a.counts)
  } : {}, {
    f: t.t(p.formatSeconds(a.times)),
    g: t.t(e.$filters.formatThousands(a.calories)),
    h: o._imports_0$4,
    i: t.t(e.$appTitle),
    j: t.o(p.onBack),
    k: t.p({
      type: "green",
      shape: "circle",
      width: "114px",
      height: "42px",
      shadow: !0
    }),
    l: t.p({
      type: "blue",
      shape: "circle",
      width: "114px",
      height: "42px",
      "open-type": "share",
      shadow: !0
    })
  });
}]]);s.__runtimeHooks = 6, wx.createPage(i);