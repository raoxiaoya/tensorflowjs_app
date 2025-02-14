var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../common/vendor.js"),
  e = require("../../apis/sport/setting.js"),
  s = {
    mixins: [t.AppUtils],
    data: function data() {
      return {
        loading: !0,
        sports: []
      };
    },
    methods: {},
    onLoad: function onLoad(s) {
      var _this = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
        var r, o;
        return _regeneratorRuntime2().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = !0;
              _context.next = 3;
              return e.settingApi.getSports({
                options: {
                  loading: !1
                }
              });
            case 3:
              r = _context.sent;
              if (!(_this.loading = !1, !r.success)) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return");
            case 6:
              o = t.utils.clone(r.result);
              _this.sports = o.filter(function (t) {
                return t.enabled;
              }).sort(function (t, e) {
                return e.sort - t.sort;
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    onShareAppMessage: function onShareAppMessage() {
      return this.$utils.getShareInfo();
    },
    onShareTimeline: function onShareTimeline() {
      return this.$utils.getShareInfo();
    }
  };if (!Array) {
  t.resolveComponent("list-viewer")();
}Math;var r = t._export_sfc(s, [["render", function (e, s, r, o, i, n) {
  return {
    a: t.f(i.sports, function (e, s, r) {
      return {
        a: e.coverUrl,
        b: t.t(e.name),
        c: "./detail?sportKey=" + e.key,
        d: e.key
      };
    }),
    b: t.p({
      loading: i.loading,
      "list-data": i.sports
    })
  };
}]]);s.__runtimeHooks = 6, wx.createPage(r);