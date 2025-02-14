var e = require("../../common/vendor.js"),
  t = require("../../common/assets.js"),
  r = {
    data: function data() {
      return {
        sliderHeight: -1,
        y: 0,
        offset: 0,
        counter: 0,
        countEnd: !1
      };
    },
    computed: {
      indicatorStyles: function indicatorStyles() {
        var e = this.sliderHeight || 1;
        e /= 2, e *= .931;
        var t = "top:".concat(e, "px;");
        return console.log(t), t;
      },
      sliderStyles: function sliderStyles() {
        return {
          top: "".concat(this.offset - 46, "px"),
          transform: this.y <= 0 ? "rotate(180deg)" : "rotate(0deg)"
        };
      }
    },
    methods: {
      navToFitness: function navToFitness() {
        this.unAccelerometer(), this.clearCounter(), e.wx$1.redirectTo({
          url: "./fitness/fitness?".concat(this._querys)
        });
      },
      startCounter: function startCounter() {
        var _this = this;
        if (this._counterThread) return;
        console.log("定时器开启...");
        var e = this;
        this.counter = 3, this._counterThread = setInterval(function () {
          var t = e.counter;
          t--, _this.counter = t, t <= 0 && (console.log("触发定时器", e._counterThread), e.navToFitness());
        }, 1e3);
      },
      clearCounter: function clearCounter() {
        this._counterThread && (clearInterval(this._counterThread), this._counterThread = null, this.counter = 0, this.countEnd = !0);
      },
      listeningAccelerometer: function listeningAccelerometer(e) {
        var t = this.sliderHeight / 2;
        var r = e.y;
        r >= -9.6 && r <= -.925 && this.startCounter(), r < 0 ? (r = Math.abs(r), r *= t) : (r += 1, r *= t), this.y = e.y, this.offset = r;
      },
      unAccelerometer: function unAccelerometer() {
        e.index.stopAccelerometer({}), e.index.offAccelerometerChange(this.listeningAccelerometer);
      }
    },
    onLoad: function onLoad(e) {
      var _this2 = this;
      this._querys = "sportKey=".concat(e.sportKey || "", "&norm=").concat(e.norm || 0, "&mode=").concat(e.mode || 0, "&targets=").concat(e.targets || 0), setTimeout(function () {
        _this2.createSelectorQuery().select(".slider-wrapper").boundingClientRect().exec(function (e) {
          _this2.sliderHeight = e[0].height;
        });
      }, 600);
    },
    onShow: function onShow() {
      e.index.onAccelerometerChange(this.listeningAccelerometer), e.index.startAccelerometer({
        interval: "normal"
      });
    },
    onHide: function onHide() {
      this.unAccelerometer(), this.clearCounter();
    }
  };if (!Array) {
  (e.resolveComponent("iconfont") + e.resolveComponent("tui-button"))();
}Math || (function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/thorui/tui-button/tui-button.js";
})();var o = e._export_sfc(r, [["render", function (r, o, n, s, i, c) {
  return e.e({
    a: t._imports_0$3,
    b: !i.counter && !i.countEnd
  }, i.counter || i.countEnd ? {
    f: e.t(i.counter),
    g: e.s(c.indicatorStyles)
  } : {
    c: e.s(c.indicatorStyles),
    d: e.p({
      name: "arrow-up"
    }),
    e: e.s(c.sliderStyles)
  }, {
    h: e.o(c.navToFitness),
    i: e.p({
      type: "primary",
      shape: "circle",
      shadow: !0
    })
  });
}]]);wx.createPage(o);