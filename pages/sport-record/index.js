var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _toConsumableArray2 = require("../../@babel/runtime/helpers/toConsumableArray");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var e = require("../../common/vendor.js"),
  t = require("../../apis/sport/sport-record.js"),
  a = require("./mixture.js"),
  r = require("../fitness/mixture.js"),
  s = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  n = {
    data: function data() {
      return {
        tickModeMap: a.mixture.tickModeMaps,
        checkinCategoryMap: a.mixture.checkinCategoryMaps,
        currentDayEl: null,
        days: [],
        currentDay: {
          date: null,
          week: null
        },
        records: [],
        loading: !1,
        isPullDown: !1,
        pageIndex: 1,
        pageSize: 10,
        isLasted: !1
      };
    },
    methods: {
      formatSeconds: r.fitnessMixture.formatSeconds,
      selectDate: function selectDate() {
        this.$refs.calendar && this.$refs.calendar.show();
      },
      onChangeDate: function onChangeDate(e) {
        var t = new Date(e.year, e.month - 1, e.day);
        this.records = [], this.currentDay = {
          date: e.result,
          weekDay: s[t.getDay()]
        }, this.getDays(t), this.loadRecord(this.currentDay);
      },
      getDays: function getDays(t) {
        var a = [],
          r = e.dateUtils.getThisWeek(t).begin,
          n = null;
        do {
          var _t = {
            date: e.utils.formatDate(r, "yyyy-MM-dd"),
            weekDay: s[r.getDay()]
          };
          a.push(_t), r.addDays(1), this.currentDay.date == _t.date && (n = a.length - 1);
        } while (a.length < 7);
        if (this.currentDayEl = null, this.days = a, null === n) return;
        var o = this;
        this.$nextTick(function () {
          o.currentDayEl = "week".concat(n), console.log(o.currentDayEl);
        });
      },
      loadRecord: function loadRecord(e, a) {
        var _this = this;
        return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
          var _this$records;
          var r, s;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                r = {
                  category: 0,
                  pageIndex: a = a || 1,
                  pageSize: _this.pageSize
                };
                e && _this.currentDay != e && (_this.records = []), e && (_this.currentDay = e, r = {
                  begin: "".concat(e.date, " 00:00:00"),
                  end: "".concat(e.date, " 23:59:59"),
                  category: 0,
                  pageIndex: a,
                  pageSize: _this.pageSize
                });
                _context.next = 4;
                return t.sportRecrodApi.getByUser({
                  data: r
                });
              case 4:
                s = _context.sent.result;
                _this.pageIndex = s.pageIndex, _this.isLasted = s.pageIndex == s.pageCount, 1 == s.pageIndex ? _this.records = s.data : (_this$records = _this.records).push.apply(_this$records, _toConsumableArray2(s.data));
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      onGetAll: function onGetAll() {
        this.records = [], this.currentDay = {
          date: "所有"
        }, this.loadRecord();
      }
    },
    onLoad: function onLoad() {
      var t = new Date();
      this.currentDay = {
        date: e.utils.formatDate(t, "yyyy-MM-dd"),
        weekDay: s[t.getDay()]
      }, this.getDays(t), this.loadRecord(this.currentDay);
    },
    onReachBottom: function onReachBottom() {
      this.isLasted || this.loading || this.loadRecord(this.currentDay, this.pageIndex + 1);
    }
  };if (!Array) {
  (e.resolveComponent("iconfont") + e.resolveComponent("list-viewer") + e.resolveComponent("tui-calendar"))();
}Math || (function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/list-viewer.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-calendar/tui-calendar.js";
})();var o = e._export_sfc(n, [["render", function (t, a, r, s, n, o) {
  return {
    a: e.t(n.currentDay.date),
    b: e.t(n.currentDay.weekDay),
    c: e.o(o.selectDate),
    d: e.p({
      name: "calendar",
      size: "44rpx"
    }),
    e: e.n(null == n.currentDay.weekDay ? "all calendar active " : "all calendar"),
    f: e.o(function () {
      return o.onGetAll && o.onGetAll.apply(o, arguments);
    }),
    g: e.f(n.days, function (t, a, r) {
      return {
        a: e.t(t.date.substr(8, 2)),
        b: e.t(t.weekDay),
        c: "week" + a,
        d: e.n(n.currentDay.date == t.date ? "calendar active" : "calendar"),
        e: e.o(function (e) {
          return o.loadRecord(t);
        }, a),
        f: a
      };
    }),
    h: n.currentDayEl,
    i: e.f(n.records, function (a, r, s) {
      return e.e({
        a: a.sport.coverUrl,
        b: e.t(a.sport.name),
        c: e.t(t.$filters.formatDate(a.createdTime, "yyyy-MM-dd HH:mm:ss")),
        d: 10 == a.tickMode
      }, 10 == a.tickMode ? {
        e: e.t(a.counts)
      } : {}, {
        f: e.t(o.formatSeconds(a.counts)),
        g: e.t(a.calories.toFixed(2)),
        h: r
      });
    }),
    j: e.p({
      loading: n.loading,
      listData: n.records,
      isLasted: n.isLasted,
      noDataText: "暂无运动记录^_^"
    }),
    k: e.sr("calendar", "57cb780c-2"),
    l: e.o(o.onChangeDate),
    m: e.p({
      lunar: !0,
      isFixed: !0,
      type: 1
    })
  };
}]]);wx.createPage(o);