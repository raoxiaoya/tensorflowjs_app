var t = require("../../../../common/vendor.js"),
  e = {
    name: "tuiDatetime",
    emits: ["cancel", "confirm"],
    props: {
      type: {
        type: [Number, String],
        default: 1
      },
      startYear: {
        type: Number,
        default: 1980
      },
      endYear: {
        type: Number,
        default: 2050
      },
      hoursData: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      minutesData: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      secondsData: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      titleSize: {
        type: [Number, String],
        default: 34
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      cancelColor: {
        type: String,
        default: "#888"
      },
      color: {
        type: String,
        default: ""
      },
      setDateTime: {
        type: String,
        default: ""
      },
      unitTop: {
        type: Boolean,
        default: !1
      },
      radius: {
        type: Boolean,
        default: !1
      },
      headerBackground: {
        type: String,
        default: "#fff"
      },
      bodyBackground: {
        type: String,
        default: "#fff"
      },
      unitBackground: {
        type: String,
        default: "#fff"
      },
      height: {
        type: [Number, String],
        default: 520
      },
      maskClosable: {
        type: Boolean,
        default: !0
      },
      zIndex: {
        type: [Number, String],
        default: 998
      }
    },
    data: function data() {
      return {
        immediate: !0,
        isShow: !1,
        years: [],
        months: [],
        days: [],
        hours: [],
        minutes: [],
        seconds: [],
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        startDate: "",
        endDate: "",
        value: [],
        isEnd: !0,
        isChange: !1,
        isSelect: !1
      };
    },
    mounted: function mounted() {
      var _this = this;
      this.$nextTick(function () {
        setTimeout(function () {
          _this.initData();
        }, 20);
      });
    },
    computed: {
      yearOrMonth: function yearOrMonth() {
        return "".concat(this.year, "-").concat(this.month);
      },
      propsChange: function propsChange() {
        return "".concat(this.type, "-").concat(this.startYear, "-").concat(this.endYear, "-").concat(this.hoursData, "-").concat(this.minutesData, "-").concat(this.secondsData);
      },
      getColor: function getColor() {
        return this.color || t.index && t.index.$tui && t.index.$tui.color.primary || "#5677fc";
      },
      getMaskZIndex: function getMaskZIndex() {
        return Number(this.zIndex) + 1;
      },
      getPickerZIndex: function getPickerZIndex() {
        return Number(this.zIndex) + 2;
      }
    },
    watch: {
      yearOrMonth: function yearOrMonth() {
        this.setDays();
      },
      propsChange: function propsChange() {
        var _this2 = this;
        this.isChange || (this.isChange = !0, this.$nextTick(function () {
          setTimeout(function () {
            _this2.isChange = !1, _this2.initData();
          }, 50);
        }));
      },
      setDateTime: function setDateTime(t) {
        var _this3 = this;
        t && !0 !== t && setTimeout(function () {
          _this3.initData();
        }, 20);
      }
    },
    methods: {
      stop: function stop() {},
      formatNum: function formatNum(t) {
        return t < 10 ? "0" + t : t + "";
      },
      generateArray: function generateArray(t, e) {
        return Array.from(new Array(e + 1).keys()).slice(t);
      },
      getIndex: function getIndex(t, e) {
        if (!t || 0 === t.length || void 0 === e) return 0;
        var s = t.indexOf(e);
        return -1 == s ? 0 : s;
      },
      getCharCount: function getCharCount(t) {
        var e = new RegExp("/", "g"),
          s = t.match(e);
        return s ? s.length : 0;
      },
      initSelectValue: function initSelectValue() {
        var t = "";
        this.setDateTime && !0 !== this.setDateTime && (t = this.setDateTime.replace(/\-/g, "/"), 3 == this.type && 1 === this.getCharCount(t) ? t += "/01" : 0 == this.type && (t += "/01/01"), t = t && -1 == t.indexOf("/") ? "2023/01/01 ".concat(t) : t);
        var e = null;
        e = t ? new Date(t) : new Date();
        var s = e.getFullYear();
        s > this.endYear ? s = this.endYear : s < this.startYear && (s = this.startYear);
        var i = e.getMonth() + 1,
          a = e.getDate(),
          h = e.getHours(),
          r = e.getMinutes(),
          n = e.getSeconds();
        return this.year = s, this.month = i, this.day = a, this.hour = h, this.minute = r, this.second = n, [s, i, a, h, r, n];
      },
      initData: function initData() {
        var _this4 = this;
        var t = this.initSelectValue();
        switch (Number(this.type)) {
          case 0:
            this.setYears();
            break;
          case 1:
            this.setYears(), this.setMonths(), this.setDays(), this.setHours(), this.setMinutes();
            break;
          case 2:
            this.setYears(), this.setMonths(), this.setDays();
            break;
          case 3:
            this.setYears(), this.setMonths();
            break;
          case 4:
            this.setHours(), this.setMinutes();
            break;
          case 5:
            this.setHours(), this.setMinutes(), this.setSeconds();
            break;
          case 6:
            this.setMinutes(), this.setSeconds();
            break;
          case 7:
            this.setYears(), this.setMonths(), this.setDays(), this.setHours(), this.setMinutes(), this.setSeconds();
            break;
          case 8:
            this.setYears(), this.setMonths(), this.setDays(), this.setHours();
        }
        this.$nextTick(function () {
          setTimeout(function () {
            _this4.setDefaultValues(t);
          }, 50);
        });
      },
      setDefaultValues: function setDefaultValues(t) {
        var _this5 = this;
        var e = [];
        var s = this.getIndex(this.years, t[0]),
          i = this.getIndex(this.months, t[1]),
          a = this.getIndex(this.days, t[2]),
          h = this.getIndex(this.hours, t[3]),
          r = this.getIndex(this.minutes, t[4]),
          n = this.getIndex(this.seconds, t[5]);
        switch (Number(this.type)) {
          case 0:
            e = [s];
          case 1:
            e = [s, i, a, h, r];
            break;
          case 2:
            e = [s, i, a];
            break;
          case 3:
            e = [s, i];
            break;
          case 4:
            e = [h, r];
            break;
          case 5:
            e = [h, r, n];
            break;
          case 6:
            e = [r, n];
            break;
          case 7:
            e = [s, i, a, h, r, n];
            break;
          case 8:
            e = [s, i, a, h];
        }
        this.value.join(",") !== e.join(",") && setTimeout(function () {
          _this5.value = e;
        }, 150);
      },
      setYears: function setYears() {
        this.years = this.generateArray(this.startYear, this.endYear);
      },
      setMonths: function setMonths() {
        this.months = this.generateArray(1, 12);
      },
      setDays: function setDays() {
        if (3 == this.type || 4 == this.type) return;
        var t = new Date(this.year, this.month, 0).getDate();
        t = !t || t < 1 ? 1 : t, this.days = this.generateArray(1, t);
      },
      setHours: function setHours() {
        this.hoursData && this.hoursData.length > 0 ? this.hours = this.hoursData : this.hours = this.generateArray(0, 23);
      },
      setMinutes: function setMinutes() {
        this.minutesData && this.minutesData.length > 0 ? this.minutes = this.minutesData : this.minutes = this.generateArray(0, 59);
      },
      setSeconds: function setSeconds() {
        this.secondsData && this.secondsData.length > 0 ? this.seconds = this.secondsData : this.seconds = this.generateArray(0, 59);
      },
      show: function show() {
        var _this6 = this;
        setTimeout(function () {
          _this6.isShow = !0;
        }, 250);
      },
      hide: function hide() {
        this.isShow = !1, this.$emit("cancel", {});
      },
      maskClick: function maskClick() {
        this.maskClosable && this.hide();
      },
      change: function change(t) {
        this.value = t.detail.value;
        switch (Number(this.type)) {
          case 0:
            this.year = this.years[this.value[0]];
            break;
          case 1:
            this.year = this.years[this.value[0]], this.month = this.months[this.value[1]], this.day = this.days[this.value[2]], this.hour = this.hours[this.value[3]], this.minute = this.minutes[this.value[4]];
            break;
          case 2:
            this.year = this.years[this.value[0]], this.month = this.months[this.value[1]], this.day = this.days[this.value[2]];
            break;
          case 3:
            this.year = this.years[this.value[0]], this.month = this.months[this.value[1]];
            break;
          case 4:
            this.hour = this.hours[this.value[0]], this.minute = this.minutes[this.value[1]];
            break;
          case 5:
            this.hour = this.hours[this.value[0]], this.minute = this.minutes[this.value[1]], this.second = this.seconds[this.value[2]];
            break;
          case 6:
            this.minute = this.minutes[this.value[0]], this.second = this.seconds[this.value[1]];
            break;
          case 7:
            this.year = this.years[this.value[0]], this.month = this.months[this.value[1]], this.day = this.days[this.value[2]], this.hour = this.hours[this.value[3]], this.minute = this.minutes[this.value[4]], this.second = this.seconds[this.value[5]];
            break;
          case 8:
            this.year = this.years[this.value[0]], this.month = this.months[this.value[1]], this.day = this.days[this.value[2]], this.hour = this.hours[this.value[3]];
        }
        this.isEnd = !0;
      },
      selectResult: function selectResult() {
        var t = {},
          e = this.year,
          s = this.formatNum(this.month || 0),
          i = this.formatNum(this.day || 0),
          a = this.formatNum(this.hour || 0),
          h = this.formatNum(this.minute || 0),
          r = this.formatNum(this.second || 0);
        switch (Number(this.type)) {
          case 0:
            t = {
              year: e,
              result: e
            };
            break;
          case 1:
            t = {
              year: e,
              month: s,
              day: i,
              hour: a,
              minute: h,
              result: "".concat(e, "-").concat(s, "-").concat(i, " ").concat(a, ":").concat(h)
            };
            break;
          case 2:
            t = {
              year: e,
              month: s,
              day: i,
              result: "".concat(e, "-").concat(s, "-").concat(i)
            };
            break;
          case 3:
            t = {
              year: e,
              month: s,
              result: "".concat(e, "-").concat(s)
            };
            break;
          case 4:
            t = {
              hour: a,
              minute: h,
              result: "".concat(a, ":").concat(h)
            };
            break;
          case 5:
            t = {
              hour: a,
              minute: h,
              second: r,
              result: "".concat(a, ":").concat(h, ":").concat(r)
            };
            break;
          case 6:
            t = {
              minute: h,
              second: r,
              result: "".concat(h, ":").concat(r)
            };
            break;
          case 7:
            t = {
              year: e,
              month: s,
              day: i,
              hour: a,
              minute: h,
              second: r,
              result: "".concat(e, "-").concat(s, "-").concat(i, " ").concat(a, ":").concat(h, ":").concat(r)
            };
            break;
          case 8:
            t = {
              year: e,
              month: s,
              day: i,
              hour: a,
              result: "".concat(e, "-").concat(s, "-").concat(i, " ").concat(a, ":00")
            };
        }
        this.$emit("confirm", t);
      },
      waitFix: function waitFix() {
        var _this7 = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.isEnd ? this.selectResult() : (++t >= 20 && (this.isEnd = !0), setTimeout(function () {
          _this7.waitFix(t);
        }, 50));
      },
      btnFix: function btnFix() {
        var _this8 = this;
        setTimeout(function () {
          _this8.waitFix(), _this8.hide();
        }, 80);
      },
      pickerstart: function pickerstart() {
        this.isEnd = !1;
      }
    }
  };var s = t._export_sfc(e, [["render", function (e, s, i, a, h, r) {
  return t.e({
    a: h.isShow ? 1 : "",
    b: r.getMaskZIndex,
    c: t.o(function () {
      return r.stop && r.stop.apply(r, arguments);
    }),
    d: t.o(function () {
      return r.maskClick && r.maskClick.apply(r, arguments);
    }),
    e: i.cancelColor,
    f: t.o(function () {
      return r.hide && r.hide.apply(r, arguments);
    }),
    g: t.t(i.title),
    h: i.titleSize + "rpx",
    i: i.titleColor,
    j: r.getColor,
    k: t.o(function () {
      return r.btnFix && r.btnFix.apply(r, arguments);
    }),
    l: i.radius ? 1 : "",
    m: i.headerBackground,
    n: t.o(function () {
      return r.stop && r.stop.apply(r, arguments);
    }),
    o: i.unitTop
  }, i.unitTop ? t.e({
    p: i.type < 4 || 7 == i.type || 8 == i.type
  }, (i.type < 4 || 7 == i.type || i.type, {}), {
    q: i.type < 4 && i.type > 0 || 7 == i.type || 8 == i.type
  }, (i.type < 4 && i.type > 0 || 7 == i.type || i.type, {}), {
    r: 1 == i.type || 2 == i.type || 7 == i.type || 8 == i.type
  }, (1 == i.type || 2 == i.type || 7 == i.type || i.type, {}), {
    s: 1 == i.type || 4 == i.type || 5 == i.type || 7 == i.type || 8 == i.type
  }, (1 == i.type || 4 == i.type || 5 == i.type || 7 == i.type || i.type, {}), {
    t: (1 == i.type || i.type > 3) && 8 != i.type
  }, ((1 == i.type || i.type > 3) && i.type, {}), {
    v: i.type > 4 && 8 != i.type
  }, (i.type > 4 && i.type, {}), {
    w: i.unitBackground
  }) : {}, {
    x: i.type < 4 || 7 == i.type || 8 == i.type
  }, i.type < 4 || 7 == i.type || 8 == i.type ? {
    y: t.f(h.years, function (e, s, a) {
      return t.e({
        a: t.t(e)
      }, (i.unitTop, {}), {
        b: s
      });
    }),
    z: !i.unitTop,
    A: i.unitTop || 7 != i.type ? "" : 1
  } : {}, {
    B: i.type < 4 && i.type > 0 || 7 == i.type || 8 == i.type
  }, i.type < 4 && i.type > 0 || 7 == i.type || 8 == i.type ? {
    C: t.f(h.months, function (e, s, a) {
      return t.e({
        a: t.t(r.formatNum(e))
      }, (i.unitTop, {}), {
        b: s
      });
    }),
    D: !i.unitTop,
    E: i.unitTop || 7 != i.type ? "" : 1
  } : {}, {
    F: 1 == i.type || 2 == i.type || 7 == i.type || 8 == i.type
  }, 1 == i.type || 2 == i.type || 7 == i.type || 8 == i.type ? {
    G: t.f(h.days, function (e, s, a) {
      return t.e({
        a: t.t(r.formatNum(e))
      }, (i.unitTop, {}), {
        b: s
      });
    }),
    H: !i.unitTop,
    I: i.unitTop || 7 != i.type ? "" : 1
  } : {}, {
    J: 1 == i.type || 4 == i.type || 5 == i.type || 7 == i.type || 8 == i.type
  }, 1 == i.type || 4 == i.type || 5 == i.type || 7 == i.type || 8 == i.type ? {
    K: t.f(h.hours, function (e, s, a) {
      return t.e({
        a: t.t(r.formatNum(e))
      }, (i.unitTop, {}), {
        b: s
      });
    }),
    L: !i.unitTop,
    M: i.unitTop || 7 != i.type ? "" : 1
  } : {}, {
    N: (1 == i.type || i.type > 3) && 8 != i.type
  }, (1 == i.type || i.type > 3) && 8 != i.type ? {
    O: t.f(h.minutes, function (e, s, a) {
      return t.e({
        a: t.t(r.formatNum(e))
      }, (i.unitTop, {}), {
        b: s
      });
    }),
    P: !i.unitTop,
    Q: i.unitTop || 7 != i.type ? "" : 1
  } : {}, {
    R: i.type > 4 && 8 != i.type
  }, i.type > 4 && 8 != i.type ? {
    S: t.f(h.seconds, function (e, s, a) {
      return t.e({
        a: t.t(r.formatNum(e))
      }, (i.unitTop, {}), {
        b: s
      });
    }),
    T: !i.unitTop,
    U: i.unitTop || 7 != i.type ? "" : 1
  } : {}, {
    V: i.type,
    W: h.immediate,
    X: h.value,
    Y: t.o(function () {
      return r.change && r.change.apply(r, arguments);
    }),
    Z: t.o(function () {
      return r.pickerstart && r.pickerstart.apply(r, arguments);
    }),
    aa: i.bodyBackground,
    ab: i.height + "rpx",
    ac: h.isShow ? 1 : "",
    ad: r.getPickerZIndex,
    ae: i.zIndex
  });
}], ["__scopeId", "data-v-2eb743e7"]]);wx.createComponent(s);