var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../../common/vendor.js"),
  t = require("../../../apis/sport/study-homework.js"),
  o = {
    data: function data() {
      return {
        fields: [{
          label: "作业",
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
      onSportCreated: function onSportCreated(e) {
        this.sportDesc.key = e.key, this.sportDesc.name = e.name, this.sportDesc.tickMode = e.tickMode;
      },
      onHomeworkStart: function onHomeworkStart() {},
      onHomeworkEnd: function onHomeworkEnd(o) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var s, r, i;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                s = {
                  homeworkId: _this.homework.id,
                  studentName: _this.favorite.studentName,
                  sportKey: _this.sportDesc.key,
                  counts: o.tickMode ? o.counts : o.times,
                  times: o.times
                };
                console.log(s);
                _context.next = 4;
                return t.studyHomeworkApi.submit({
                  data: s,
                  options: {
                    loading: !0,
                    loadingText: "提交中..."
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
                i = r.result;
                e.index.redirectTo({
                  url: "/pages/study-homework/task/report?id=".concat(i.id, "&favoriteId=").concat(_this.favorite.id)
                });
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    },
    onLoad: function onLoad(o) {
      var _this2 = this;
      return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
        var s, r, i, n, d;
        return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              s = o.favoriteId;
              _context2.next = 3;
              return t.studyHomeworkApi.getFavorite({
                params: {
                  favoriteId: s
                },
                options: {
                  loading: !0,
                  loadingText: "加载作业中..."
                }
              });
            case 3:
              r = _context2.sent;
              if (r.success) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return");
            case 6:
              i = r.result, n = i.homework, d = n.sports.find(function (e) {
                return e.key == o.sportKey;
              });
              null != d ? (_this2.favoriteId = i.id, _this2.fields[0].descript = n.title, _this2.sportKey = o.sportKey, _this2.norm = parseInt(o.norm || 0), _this2.mode = 10 == d.sport.tickMode ? 2 : 1, _this2.targets = d.workloads, _this2.favorite = i, _this2.homework = n) : e.index.showModal({
                content: "作业无此运动项目",
                showCancel: !1
              });
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  };if (!Array) {
  e.resolveComponent("sport-detection-full")();
}Math;var s = e._export_sfc(o, [["render", function (t, o, s, r, i, n) {
  return {
    a: e.o(n.onSportCreated),
    b: e.o(n.onHomeworkStart),
    c: e.o(n.onHomeworkEnd),
    d: e.p({
      fields: i.fields,
      sportKey: i.sportKey,
      mode: i.mode,
      targets: i.targets,
      norm: i.norm
    })
  };
}]]);wx.createPage(s);