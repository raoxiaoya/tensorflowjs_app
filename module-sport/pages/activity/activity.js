var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../../common/vendor.js"),
  e = require("../../../apis/sport/organize-activity.js"),
  i = {
    data: function data() {
      return {
        fields: [{
          label: "赛事活动",
          descript: null
        }],
        sportKey: null,
        sportDesc: {
          key: "Rope-Skipping",
          name: "跳绳",
          tickMode: !0
        },
        norm: 0,
        mode: 0,
        targets: -1
      };
    },
    methods: {
      onSportCreated: function onSportCreated(t) {
        this.sportDesc.key = t.key, this.sportDesc.name = t.name, this.sportDesc.tickMode = t.tickMode;
      },
      onActivityStart: function onActivityStart() {},
      onActivityEnd: function onActivityEnd(i) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var o, s, r, n;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                o = {
                  activityId: _this.activityId,
                  sportKey: _this.sportDesc.key,
                  counts: i.tickMode ? i.counts : i.times,
                  times: i.times
                };
                t.utils.clone(_this.signer, o), console.log(o), console.log(_this.activityCategory);
                s = 10 == _this.activityCategory ? e.organizegApi.clockin : e.organizegApi.participating;
                _context.next = 5;
                return s({
                  data: o,
                  options: {
                    loading: !0,
                    showError: !0
                  }
                });
              case 5:
                r = _context.sent;
                if (r.success) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return");
              case 8:
                n = r.result;
                t.index.redirectTo({
                  url: "/pages/activity/public/complete?id=".concat(n.id)
                });
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    },
    onLoad: function onLoad(t) {
      var i = -1;
      t.targets && (i = parseInt(t.targets)), t.norm && parseInt(t.norm), this.activityId = t.activityId, this.activityCategory = t.activityCategory, this.fields[0].descript = decodeURIComponent(t.activityTitle), this.sportKey = t.sportKey, this.norm = parseInt(t.norm || 0), this.mode = parseInt(t.mode || 0), this.targets = i, this.signer = e.organizegApi.getSignin(this.activityId);
    }
  };if (!Array) {
  t.resolveComponent("sport-detection-full")();
}Math;var o = t._export_sfc(i, [["render", function (e, i, o, s, r, n) {
  return {
    a: t.o(n.onSportCreated),
    b: t.o(n.onActivityStart),
    c: t.o(n.onActivityEnd),
    d: t.p({
      fields: r.fields,
      sportKey: r.sportKey,
      mode: r.mode,
      targets: r.targets,
      norm: r.norm
    })
  };
}]]);wx.createPage(o);