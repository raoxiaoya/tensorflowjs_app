var e = require("../../../../common/vendor.js"),
  t = {
    name: "tui-week-date",
    emits: ["click"],
    props: {
      value: {
        type: String,
        default: ""
      },
      background: {
        type: String,
        default: "#fff"
      },
      weekSize: {
        type: [Number, String],
        default: 26
      },
      weekColor: {
        type: String,
        default: "#888"
      },
      dateSize: {
        type: [Number, String],
        default: 34
      },
      dateColor: {
        type: String,
        default: "#333"
      },
      activeColor: {
        type: String,
        default: "#fff"
      },
      activeBackground: {
        type: String,
        default: ""
      },
      arrow: {
        type: Boolean,
        default: !0
      },
      arrowColor: {
        type: String,
        default: ""
      }
    },
    computed: {
      getActiveBackground: function getActiveBackground() {
        return this.activeBackground || e.index && e.index.$tui && e.index.$tui.color.primary || "#5677fc";
      },
      getArrowColor: function getArrowColor() {
        return this.arrowColor || e.index && e.index.$tui && e.index.$tui.color.primary || "#5677fc";
      }
    },
    data: function data() {
      return {
        weeksArr: [],
        activeDate: ""
      };
    },
    watch: {
      value: function value(e) {
        e && this.initDate(e);
      }
    },
    created: function created() {
      this.initDate(this.value);
    },
    methods: {
      initDate: function initDate(e) {
        var t = [];
        if (e) t = e.replace(/\-/g, "/").split("/");else {
          var _e = new Date();
          t = [_e.getFullYear(), _e.getMonth() + 1, _e.getDate()];
        }
        var r = Number(t[0]),
          a = Number(t[1]),
          i = Number(t[2]);
        this.activeDate = "".concat(r, "-").concat(this.formatNum(a), "-").concat(this.formatNum(i)), this.getWeekArr(r, a, i);
      },
      formatNum: function formatNum(e) {
        return e < 10 ? "0" + e : e + "";
      },
      getWeekday: function getWeekday(e, t, r) {
        return new Date("".concat(e, "/").concat(t, "/").concat(r, " 00:00:00")).getDay();
      },
      getDate: function getDate(e, t) {
        var r = new Date(e),
          a = new Date(r).setDate(r.getDate() + t),
          i = new Date(a);
        return [i.getFullYear(), i.getMonth() + 1, i.getDate()];
      },
      getWeeksArr: function getWeeksArr(e, t) {
        var _this = this;
        var r = [],
          a = ["一", "二", "三", "四", "五", "六", "日"];
        return t.forEach(function (t, i) {
          var o = _this.getDate(e, t);
          r.push({
            year: o[0],
            month: o[1],
            day: o[2],
            week: a[i],
            date: "".concat(o[0], "-").concat(_this.formatNum(o[1]), "-").concat(_this.formatNum(o[2]))
          });
        }), r;
      },
      getWeekArr: function getWeekArr(e, t, r) {
        var a = [[-6, -5, -4, -3, -2, -1, 0], [0, 1, 2, 3, 4, 5, 6], [-1, 0, 1, 2, 3, 4, 5], [-2, -1, 0, 1, 2, 3, 4], [-3, -2, -1, 0, 1, 2, 3], [-4, -3, -2, -1, 0, 1, 2], [-5, -4, -3, -2, -1, 0, 1]][this.getWeekday(e, t, r)],
          i = "".concat(e, "/").concat(t, "/").concat(r, " 00:00:00");
        this.weeksArr = this.getWeeksArr(i, a);
      },
      nextWeek: function nextWeek() {
        var e = this.weeksArr[this.weeksArr.length - 1],
          t = "".concat(e.year, "/").concat(e.month, "/").concat(e.day, " 00:00:00"),
          r = this.getDate(t, 1);
        this.weeksArr = this.getWeeksArr("".concat(r[0], "/").concat(r[1], "/").concat(r[2], " 00:00:00"), [0, 1, 2, 3, 4, 5, 6]);
      },
      prevWeek: function prevWeek() {
        var e = this.weeksArr[0],
          t = "".concat(e.year, "/").concat(e.month, "/").concat(e.day, " 00:00:00"),
          r = this.getDate(t, -1);
        this.weeksArr = this.getWeeksArr("".concat(r[0], "/").concat(r[1], "/").concat(r[2], " 00:00:00"), [-6, -5, -4, -3, -2, -1, 0]);
      },
      dateClick: function dateClick(e) {
        var t = this.weeksArr[e];
        this.activeDate = t.date, this.$emit("click", t);
      }
    }
  };var r = e._export_sfc(t, [["render", function (t, r, a, i, o, n) {
  return e.e({
    a: a.arrow
  }, a.arrow ? {
    b: n.getArrowColor
  } : {}, {
    c: e.o(function () {
      return n.prevWeek && n.prevWeek.apply(n, arguments);
    }),
    d: e.f(o.weeksArr, function (t, r, i) {
      return {
        a: e.t(t.week),
        b: e.t(n.formatNum(t.day)),
        c: o.activeDate == t.date ? a.activeColor : a.dateColor,
        d: o.activeDate == t.date ? n.getActiveBackground : "transparent",
        e: e.o(function (e) {
          return n.dateClick(r);
        }, r),
        f: r
      };
    }),
    e: a.weekSize + "rpx",
    f: a.weekColor,
    g: a.dateSize + "rpx",
    h: a.arrow
  }, a.arrow ? {
    i: n.getArrowColor
  } : {}, {
    j: e.o(function () {
      return n.nextWeek && n.nextWeek.apply(n, arguments);
    }),
    k: a.background
  });
}], ["__scopeId", "data-v-fd329d65"]]);wx.createComponent(r);