var t = require("../../../../common/vendor.js"),
  e = {
    name: "tuiCalendar",
    emits: ["hide", "change"],
    props: {
      arrowType: {
        type: [Number, String],
        default: 1
      },
      type: {
        type: Number,
        default: 1
      },
      maxYear: {
        type: Number,
        default: 2030
      },
      minYear: {
        type: Number,
        default: 1920
      },
      minDate: {
        type: String,
        default: "1920-01-01"
      },
      maxDate: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: "日期选择"
      },
      radius: {
        type: Boolean,
        default: !0
      },
      status: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      monthArrowColor: {
        type: String,
        default: "#999"
      },
      yearArrowColor: {
        type: String,
        default: "#bcbcbc"
      },
      color: {
        type: String,
        default: "#333"
      },
      activeBgColor: {
        type: String,
        default: ""
      },
      activeColor: {
        type: String,
        default: "#fff"
      },
      rangeBgColor: {
        type: String,
        default: "rgba(86,119,252,0.1)"
      },
      rangeColor: {
        type: String,
        default: ""
      },
      startText: {
        type: String,
        default: "开始"
      },
      endText: {
        type: String,
        default: "结束"
      },
      btnBgColor: {
        type: String,
        default: ""
      },
      isFixed: {
        type: Boolean,
        default: !1
      },
      fixedHeight: {
        type: Boolean,
        default: !0
      },
      isActiveCurrent: {
        type: Boolean,
        default: !0
      },
      isChange: {
        type: Boolean,
        default: !1
      },
      lunar: {
        type: Boolean,
        default: !1
      },
      initStartDate: {
        type: [String, Array],
        default: ""
      },
      initEndDate: {
        type: String,
        default: ""
      }
    },
    data: function data() {
      return {
        isShow: !1,
        weekday: 1,
        weekdayArr: [],
        days: 0,
        daysArr: [],
        showTitle: "",
        year: 2020,
        month: 0,
        day: 0,
        startYear: 0,
        startMonth: 0,
        startDay: 0,
        endYear: 0,
        endMonth: 0,
        endDay: 0,
        today: "",
        activeDate: "",
        startDate: "",
        endDate: "",
        isStart: !0,
        min: null,
        max: null,
        dateHeight: 20
      };
    },
    computed: {
      dataChange: function dataChange() {
        return "".concat(this.type, "-").concat(this.minDate, "-").concat(this.maxDate, "-").concat(this.initStartDate, "-").concat(this.initEndDate);
      },
      disabled: function disabled() {
        return !(2 != this.type || this.startDate && this.endDate);
      },
      getActiveBgColor: function getActiveBgColor() {
        return this.activeBgColor || t.index && t.index.$tui && t.index.$tui.color.primary || "#5677fc";
      },
      getBtnBgColor: function getBtnBgColor() {
        return this.btnBgColor || t.index && t.index.$tui && t.index.$tui.color.primary || "#5677fc";
      },
      getRangeColor: function getRangeColor() {
        return this.rangeColor || t.index && t.index.$tui && t.index.$tui.color.primary || "#5677fc";
      }
    },
    watch: {
      dataChange: function dataChange(t) {
        this.init();
      },
      fixedHeight: function fixedHeight(t) {
        t && this.initDateHeight();
      }
    },
    created: function created() {
      this.init();
    },
    methods: {
      getColor: function getColor(t, e) {
        var a = 1 == e ? "" : this.color,
          i = t + 1,
          s = "".concat(this.year, "-").concat(this.month, "-").concat(i),
          r = new Date(s.replace(/\-/g, "/")).getTime(),
          h = this.startDate.replace(/\-/g, "/"),
          n = this.endDate.replace(/\-/g, "/");
        return this.isActiveCurrent && this.activeDate == s || this.startDate == s || this.endDate == s ? a = 1 == e ? this.getActiveBgColor : this.activeColor : this.endDate && r > new Date(h).getTime() && r < new Date(n).getTime() && (a = 1 == e ? this.rangeBgColor : this.getRangeColor), a;
      },
      getStatusData: function getStatusData(t, e) {
        var a = ["", "transparent", "#333", ""][t - 1];
        if (!this.isFixed && this.status && this.status.length > 0) {
          var i = this.status[e];
          if (i) switch (t) {
            case 1:
              a = i.text;
              break;
            case 2:
              a = i.bgColor;
              break;
            case 3:
              a = i.color;
              break;
            case 4:
              a = i.check;
          }
        }
        return a;
      },
      getDescText: function getDescText(t, e, a) {
        var i = this.lunar ? this.getLunar(this.year, this.month, t + 1) : "";
        if (this.isFixed && 2 == this.type) {
          if (this.lunar) {
            var s = "".concat(this.year, "-").concat(this.month, "-").concat(t + 1);
            e == s && e != a ? i = this.startText : a == s && (i = this.endText);
          }
        } else {
          var _e = this.getStatusData(1, t);
          _e && (i = _e);
        }
        return i;
      },
      getLunar: function getLunar(e, a, i) {
        return t.calendar.solar2lunar(e, a, i).IDayCn;
      },
      initDateHeight: function initDateHeight() {
        this.fixedHeight && this.isFixed && (this.dateHeight = t.index.getSystemInfoSync().windowWidth / 7);
      },
      init: function init() {
        this.initDateHeight();
        var t = new Date();
        if (this.year = t.getFullYear(), this.month = t.getMonth() + 1, this.day = t.getDate(), this.today = "".concat(t.getFullYear(), "-").concat(t.getMonth() + 1, "-").concat(t.getDate()), this.activeDate = this.today, this.min = this.initDate(this.minDate), this.max = this.initDate(this.maxDate || this.today), this.openDisAbled(this.year, this.month, this.day) && (this.year = this.max.year, this.month = this.max.month, this.day = this.max.day, this.activeDate = "".concat(this.max.year, "-").concat(this.max.month, "-").concat(this.max.day), this.max = this.initDate(this.maxDate || this.minDate)), this.startDate = "", this.startYear = 0, this.startMonth = 0, this.startDay = 0, this.initStartDate) {
          var _t = new Date(this.initStartDate.replace(/\-/g, "/"));
          1 == this.type ? (this.year = _t.getFullYear(), this.month = _t.getMonth() + 1, this.day = _t.getDate(), this.activeDate = "".concat(_t.getFullYear(), "-").concat(_t.getMonth() + 1, "-").concat(_t.getDate())) : (this.startDate = "".concat(_t.getFullYear(), "-").concat(_t.getMonth() + 1, "-").concat(_t.getDate()), this.startYear = _t.getFullYear(), this.startMonth = _t.getMonth() + 1, this.startDay = _t.getDate(), this.activeDate = "");
        }
        if (this.endYear = 0, this.endMonth = 0, this.endDay = 0, this.endDate = "", this.initEndDate && 2 == this.type) {
          var _t2 = new Date(this.initEndDate.replace(/\-/g, "/"));
          this.endDate = "".concat(_t2.getFullYear(), "-").concat(_t2.getMonth() + 1, "-").concat(_t2.getDate()), this.endYear = _t2.getFullYear(), this.endMonth = _t2.getMonth() + 1, this.endDay = _t2.getDate(), this.activeDate = "", this.year = _t2.getFullYear(), this.month = _t2.getMonth() + 1, this.day = _t2.getDate();
        }
        this.isStart = !0, this.changeData();
      },
      initDate: function initDate(t) {
        var e = t.split("-");
        return {
          year: Number(e[0] || 1920),
          month: Number(e[1] || 1),
          day: Number(e[2] || 1)
        };
      },
      openDisAbled: function openDisAbled(t, e, a) {
        var i = !0,
          s = "".concat(t, "/").concat(e, "/").concat(a),
          r = "".concat(this.min.year, "/").concat(this.min.month, "/").concat(this.min.day),
          h = "".concat(this.max.year, "/").concat(this.max.month, "/").concat(this.max.day),
          n = new Date(s).getTime();
        return n >= new Date(r).getTime() && n <= new Date(h).getTime() && (i = !1), i;
      },
      generateArray: function generateArray(t, e) {
        return Array.from(new Array(e + 1).keys()).slice(t);
      },
      formatNum: function formatNum(t) {
        return t < 10 ? "0" + t : t + "";
      },
      stop: function stop() {
        return !1;
      },
      getMonthDay: function getMonthDay(t, e) {
        return new Date(t, e, 0).getDate();
      },
      getWeekday: function getWeekday(t, e) {
        return new Date("".concat(t, "/").concat(e, "/01 00:00:00")).getDay();
      },
      checkRange: function checkRange(e) {
        var a = !1;
        return (e < this.minYear || e > this.maxYear) && (t.index.showToast({
          title: "日期超出范围啦~",
          icon: "none"
        }), a = !0), a;
      },
      changeMonth: function changeMonth(t) {
        if (t) {
          var _t3 = this.month + 1,
            _e2 = _t3 > 12 ? this.year + 1 : this.year;
          this.checkRange(_e2) || (this.month = _t3 > 12 ? 1 : _t3, this.year = _e2, this.changeData());
        } else {
          var _t4 = this.month - 1,
            _e3 = _t4 < 1 ? this.year - 1 : this.year;
          this.checkRange(_e3) || (this.month = _t4 < 1 ? 12 : _t4, this.year = _e3, this.changeData());
        }
      },
      changeYear: function changeYear(t) {
        var e = t ? this.year + 1 : this.year - 1;
        this.checkRange(e) || (this.year = e, this.changeData());
      },
      changeData: function changeData() {
        this.days = this.getMonthDay(this.year, this.month), this.daysArr = this.generateArray(1, this.days), this.weekday = this.getWeekday(this.year, this.month), this.weekdayArr = this.generateArray(1, this.weekday), this.showTitle = "".concat(this.year, "\u5E74").concat(this.month, "\u6708"), this.isChange && 1 == this.type && this.btnFix(!0);
      },
      dateClick: function dateClick(t) {
        if (t += 1, !this.openDisAbled(this.year, this.month, t)) {
          this.day = t;
          var _e4 = "".concat(this.year, "-").concat(this.month, "-").concat(t);
          if (1 == this.type) this.activeDate = _e4;else {
            var _t5 = new Date(_e4.replace(/\-/g, "/")).getTime() < new Date(this.startDate.replace(/\-/g, "/")).getTime();
            this.isStart || _t5 ? (this.startDate = _e4, this.startYear = this.year, this.startMonth = this.month, this.startDay = this.day, this.endYear = 0, this.endMonth = 0, this.endDay = 0, this.endDate = "", this.activeDate = "", this.isStart = !1) : (this.endDate = _e4, this.endYear = this.year, this.endMonth = this.month, this.endDay = this.day, this.isStart = !0);
          }
          this.isFixed || this.btnFix();
        }
      },
      show: function show() {
        this.isShow = !0;
      },
      hide: function hide() {
        this.isShow = !1, this.$emit("hide", {});
      },
      getWeekText: function getWeekText(t) {
        return "星期" + ["日", "一", "二", "三", "四", "五", "六"][(t = new Date("".concat(t.replace(/\-/g, "/"), " 00:00:00"))).getDay()];
      },
      btnFix: function btnFix(e) {
        if (!e) {
          if (this.disabled) return;
          this.hide();
        }
        if (1 == this.type) {
          var _a = this.activeDate.split("-"),
            i = this.isChange ? this.year : Number(_a[0]),
            s = this.isChange ? this.month : Number(_a[1]),
            r = this.isChange ? this.day : Number(_a[2]),
            h = this.getMonthDay(i, s),
            n = "".concat(i, "-").concat(this.formatNum(s), "-").concat(this.formatNum(r)),
            o = this.getWeekText(n),
            d = !1;
          "".concat(i, "-").concat(s, "-").concat(r) == this.today && (d = !0);
          var y = t.calendar.solar2lunar(i, s, r);
          this.$emit("change", {
            year: i,
            month: s,
            day: r,
            days: h,
            result: n,
            week: o,
            isToday: d,
            switch: e,
            lunar: y
          });
        } else {
          if (!this.startDate || !this.endDate) return;
          var _e5 = this.formatNum(this.startMonth),
            _a2 = this.formatNum(this.startDay),
            _i = "".concat(this.startYear, "-").concat(_e5, "-").concat(_a2),
            _s = this.getWeekText(_i),
            _r = t.calendar.solar2lunar(this.startYear, _e5, _a2),
            _h = this.formatNum(this.endMonth),
            _n = this.formatNum(this.endDay),
            _o = "".concat(this.endYear, "-").concat(_h, "-").concat(_n),
            _d = this.getWeekText(_o),
            _y = t.calendar.solar2lunar(this.endYear, _h, _n);
          this.$emit("change", {
            startYear: this.startYear,
            startMonth: this.startMonth,
            startDay: this.startDay,
            startDate: _i,
            startWeek: _s,
            startLunar: _r,
            endYear: this.endYear,
            endMonth: this.endMonth,
            endDay: this.endDay,
            endDate: _o,
            endWeek: _d,
            endLunar: _y
          });
        }
      }
    }
  };var a = t._export_sfc(e, [["render", function (e, a, i, s, r, h) {
  return t.e({
    a: i.isFixed
  }, i.isFixed ? t.e({
    b: t.t(i.title),
    c: t.o(function () {
      return h.hide && h.hide.apply(h, arguments);
    }),
    d: i.radius ? 1 : "",
    e: 1 == i.arrowType
  }, 1 == i.arrowType ? {
    f: i.yearArrowColor,
    g: t.o(function (t) {
      return h.changeYear(0);
    })
  } : {}, {
    h: i.monthArrowColor,
    i: t.o(function (t) {
      return h.changeMonth(0);
    }),
    j: t.t(r.showTitle),
    k: i.monthArrowColor,
    l: t.o(function (t) {
      return h.changeMonth(1);
    }),
    m: 1 == i.arrowType
  }, 1 == i.arrowType ? {
    n: i.yearArrowColor,
    o: t.o(function (t) {
      return h.changeYear(1);
    })
  } : {}, {
    p: t.f(r.weekdayArr, function (t, e, a) {
      return {
        a: e
      };
    }),
    q: t.f(r.daysArr, function (e, a, s) {
      return t.e({
        a: i.isFixed || !h.getStatusData(4, a)
      }, i.isFixed || !h.getStatusData(4, a) ? {
        b: t.t(a + 1)
      } : {}, {
        c: !h.getStatusData(4, a)
      }, h.getStatusData(4, a) ? {} : {
        d: t.t(h.getDescText(a, r.startDate, r.endDate)),
        e: !i.lunar && i.isFixed ? 1 : ""
      }, {
        f: h.getStatusData(4, a)
      }, (h.getStatusData(4, a), {}), {
        g: i.isFixed ? h.getColor(a, 2) : h.getStatusData(3, a),
        h: h.getStatusData(2, a),
        i: !i.lunar && 2 == i.type && r.startDate == "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) && r.startDate != r.endDate
      }, i.lunar || 2 != i.type || r.startDate != "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) || r.startDate == r.endDate ? {} : {
        j: t.t(i.startText),
        k: i.activeColor
      }, {
        l: !i.lunar && 2 == i.type && r.endDate == "".concat(r.year, "-").concat(r.month, "-").concat(a + 1)
      }, i.lunar || 2 != i.type || r.endDate != "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) ? {} : {
        m: t.t(i.endText),
        n: i.activeColor
      }, {
        o: h.openDisAbled(r.year, r.month, a + 1) ? 1 : "",
        p: 2 == i.type && r.startDate == "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) || 1 == i.type ? 1 : "",
        q: 2 == i.type && r.endDate == "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) || 1 == i.type ? 1 : "",
        r: i.isFixed ? h.getColor(a, 1) : "transparent",
        s: a,
        t: t.o(function (t) {
          return h.dateClick(a);
        }, a)
      });
    }),
    r: i.isFixed && i.fixedHeight ? 1 : "",
    s: i.isFixed && i.fixedHeight ? r.dateHeight + "px" : "auto",
    t: t.t(r.month),
    v: i.isFixed && i.fixedHeight ? 1 : "",
    w: i.isFixed && i.fixedHeight ? 6 * r.dateHeight + "px" : "auto",
    x: t.t(1 == i.type ? r.activeDate : r.startDate),
    y: r.endDate
  }, r.endDate ? {
    z: t.t(r.endDate)
  } : {}, {
    A: h.getBtnBgColor,
    B: t.o(function (t) {
      return h.btnFix(!1);
    }),
    C: h.disabled ? 1 : "",
    D: h.disabled ? "" : 1,
    E: r.isShow ? 1 : "",
    F: t.n(r.isShow ? "tui-mask-show" : ""),
    G: t.o(function () {
      return h.hide && h.hide.apply(h, arguments);
    }),
    H: t.o(function () {
      return h.stop && h.stop.apply(h, arguments);
    })
  }) : t.e({
    I: 1 == i.arrowType
  }, 1 == i.arrowType ? {
    J: i.yearArrowColor,
    K: t.o(function (t) {
      return h.changeYear(0);
    })
  } : {}, {
    L: i.monthArrowColor,
    M: t.o(function (t) {
      return h.changeMonth(0);
    }),
    N: t.t(r.showTitle),
    O: i.monthArrowColor,
    P: t.o(function (t) {
      return h.changeMonth(1);
    }),
    Q: 1 == i.arrowType
  }, 1 == i.arrowType ? {
    R: i.yearArrowColor,
    S: t.o(function (t) {
      return h.changeYear(1);
    })
  } : {}, {
    T: t.f(r.weekdayArr, function (t, e, a) {
      return {
        a: e
      };
    }),
    U: t.f(r.daysArr, function (e, a, s) {
      return t.e({
        a: i.isFixed || !h.getStatusData(4, a)
      }, i.isFixed || !h.getStatusData(4, a) ? {
        b: t.t(a + 1)
      } : {}, {
        c: !h.getStatusData(4, a)
      }, h.getStatusData(4, a) ? {} : {
        d: t.t(h.getDescText(a, r.startDate, r.endDate)),
        e: !i.lunar && i.isFixed ? 1 : ""
      }, {
        f: h.getStatusData(4, a)
      }, (h.getStatusData(4, a), {}), {
        g: i.isFixed ? h.getColor(a, 2) : h.getStatusData(3, a),
        h: h.getStatusData(2, a),
        i: !i.lunar && 2 == i.type && r.startDate == "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) && r.startDate != r.endDate
      }, i.lunar || 2 != i.type || r.startDate != "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) || r.startDate == r.endDate ? {} : {
        j: t.t(i.startText),
        k: i.activeColor
      }, {
        l: !i.lunar && 2 == i.type && r.endDate == "".concat(r.year, "-").concat(r.month, "-").concat(a + 1)
      }, i.lunar || 2 != i.type || r.endDate != "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) ? {} : {
        m: t.t(i.endText),
        n: i.activeColor
      }, {
        o: h.openDisAbled(r.year, r.month, a + 1) ? 1 : "",
        p: 2 == i.type && r.startDate == "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) || 1 == i.type ? 1 : "",
        q: 2 == i.type && r.endDate == "".concat(r.year, "-").concat(r.month, "-").concat(a + 1) || 1 == i.type ? 1 : "",
        r: i.isFixed ? h.getColor(a, 1) : "transparent",
        s: a,
        t: t.o(function (t) {
          return h.dateClick(a);
        }, a)
      });
    }),
    V: i.isFixed && i.fixedHeight ? 1 : "",
    W: i.isFixed && i.fixedHeight ? r.dateHeight + "px" : "auto",
    X: t.t(r.month),
    Y: i.isFixed && i.fixedHeight ? 6 * r.dateHeight + "px" : "auto"
  }));
}], ["__scopeId", "data-v-a590ce55"]]);wx.createComponent(a);