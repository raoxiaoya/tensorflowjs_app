var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var t = require("../../../common/vendor.js"),
  e = require("../../../apis/sport/fitness.js"),
  s = {
    data: function data() {
      return {
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
      onSportCreated: function onSportCreated(e) {
        this.sportDesc.key = e.key, this.sportDesc.name = e.name, this.sportDesc.tickMode = e.tickMode, t.index.setNavigationBarTitle({
          title: e.name
        });
      },
      onFitnessStart: function onFitnessStart() {},
      onFitnessEnd: function onFitnessEnd(s) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var o, r, n;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                console.log(s);
                o = {
                  sportKey: _this.sportDesc.key,
                  counts: s.tickMode ? s.counts : s.times,
                  times: s.times
                };
                _context.next = 4;
                return e.fitnessApi.clockin({
                  data: o,
                  options: {
                    loading: !0,
                    showError: !0
                  }
                });
              case 4:
                r = _context.sent;
                if (r.success) {
                  _context.next = 7;
                  break;
                }
                return _context.abrupt("return");
              case 7:
                n = r.result;
                t.index.redirectTo({
                  url: "./report?id=".concat(n.id, "&sportKey=").concat(_this.sportDesc.key, "&sportName=").concat(_this.sportDesc.name, "&tickMode=").concat(n.tickMode, "&counts=").concat(n.counts, "&times=").concat(n.times, "&calories=").concat(n.calories)
                });
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    },
    onLoad: function onLoad(t) {
      var e = -1;
      t.targets && (e = parseInt(t.targets)), t.norm && parseInt(t.norm), this.sportKey = t.sportKey, this.norm = parseInt(t.norm || 0), this.mode = parseInt(t.mode || 0), this.targets = e;
    }
  };if (!Array) {
  t.resolveComponent("sport-detection-full")();
}Math;var o = t._export_sfc(s, [["render", function (e, s, o, r, n, i) {
  return {
    a: t.o(i.onSportCreated),
    b: t.o(i.onFitnessStart),
    c: t.o(i.onFitnessEnd),
    d: t.p({
      fields: [{
        label: "运动方式",
        descript: "自由健身锻炼"
      }],
      sportKey: n.sportKey,
      mode: n.mode,
      targets: n.targets,
      norm: n.norm
    })
  };
}]]);wx.createPage(o);