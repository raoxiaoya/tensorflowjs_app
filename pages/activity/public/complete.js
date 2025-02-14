var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  t = require("../../../apis/sport/sport-record.js"),
  r = require("../../fitness/mixture.js"),
  o = {
    mixins: [e.AppUtils],
    data: function data() {
      return {
        menuRect: e.index.getMenuButtonBoundingClientRect(),
        loading: !0,
        profile: null,
        record: null,
        activity: null
      };
    },
    computed: {
      coverUrl: function coverUrl() {
        var e = null;
        return this.activity && (e = this.activity.coverUrl), e = e ? this.$utils.thumbnailUrl(e, 828, 436) : "/static/images/activity_default_banner.jpg", e;
      }
    },
    methods: {
      formatSeconds: r.fitnessMixture.formatSeconds,
      buildShare: function buildShare() {
        var e = {
          title: "\u6211\u53C2\u52A0\u4E86 \u300C".concat(this.activity.title, "\u300D\uFF0C\u60A8\u4E5F\u6765\u8BD5\u8BD5\u5427^_^"),
          path: "/pages/activity/detail?id=".concat(this.activity.id)
        };
        return console.log(e), e;
      }
    },
    onLoad: function onLoad(r) {
      var _this = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
        var o, i;
        return _regeneratorRuntime2().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              o = r.id;
              _context.next = 3;
              return t.sportRecrodApi.get({
                params: {
                  id: o
                },
                options: {
                  loading: !1,
                  onLoading: function onLoading(e) {
                    return _this.loading = e;
                  }
                }
              });
            case 3:
              i = _context.sent;
              _context.t0 = i.success;
              if (!_context.t0) {
                _context.next = 12;
                break;
              }
              _this.record = i.result;
              _this.activity = i.result.activity;
              _context.next = 10;
              return e.profileApi.get({
                options: {
                  loading: !1
                }
              });
            case 10:
              i = _context.sent;
              i.success && (_this.profile = i.result);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    onShareAppMessage: function onShareAppMessage() {
      return this.buildShare();
    },
    onShareTimeline: function onShareTimeline() {
      return this.buildShare();
    }
  };if (!Array) {
  (e.resolveComponent("navigator-bar") + e.resolveComponent("iconfont") + e.resolveComponent("avatar") + e.resolveComponent("pager-container"))();
}Math || (function () {
  return "../../../node-modules/yunzhi.uni-app/components/navigator-bar.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../../components/avatar.js";
} + function () {
  return "../../../node-modules/yunzhi.uni-app/components/pager-container.js";
})();var i = e._export_sfc(o, [["render", function (t, r, o, i, a, n) {
  return e.e({
    a: e.p({
      name: "arrow-left"
    }),
    b: a.menuRect.top + "px",
    c: a.menuRect.height + "px",
    d: a.menuRect.height + "px",
    e: e.o(function () {
      return t.onNavBack && t.onNavBack.apply(t, arguments);
    }),
    f: n.coverUrl,
    g: a.record
  }, a.record ? e.e({
    h: e.t(a.activity.title),
    i: a.profile
  }, a.profile ? {
    j: e.p({
      "avatar-url": a.profile.avatarUrl
    }),
    k: e.t(a.profile.nick || "<未填写>"),
    l: e.t(t.$filters.formatDate(a.record.atTime, "yyyy-MM-dd HH:mm:ss"))
  } : {}, {
    m: a.record
  }, a.record ? e.e({
    n: 10 == a.record.tickMode
  }, 10 == a.record.tickMode ? {
    o: e.t(a.record.counts)
  } : {
    p: e.t(n.formatSeconds(a.record.times))
  }, {
    q: e.t(a.record.sport.name),
    r: e.t(n.formatSeconds(a.record.times))
  }) : {}, {
    s: a.record.team
  }, a.record.team ? {
    t: e.t(a.record.team)
  } : {}, {
    v: a.record.name
  }, a.record.name ? {
    w: e.t(a.record.name)
  } : {}, {
    x: a.record.mobile
  }, a.record.mobile ? {
    y: e.t(a.record.mobile)
  } : {}, {
    z: a.record.cardid
  }, a.record.cardid ? {
    A: e.t(a.record.cardid)
  } : {}, {
    B: a.record.remark
  }, a.record.remark ? {
    C: e.t(a.record.remark)
  } : {}) : {}, {
    D: a.activity
  }, a.activity ? {
    E: e.p({
      name: "share"
    }),
    F: "./detail?id=" + a.activity.id
  } : {}, {
    G: e.p({
      loading: a.loading,
      "content-data": a.record,
      "no-data-text": "参赛记录不存在"
    })
  });
}]]);o.__runtimeHooks = 6, wx.createPage(i);