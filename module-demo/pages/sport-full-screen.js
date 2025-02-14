var t = require("../../common/vendor.js"),
  e = t.index.$aiSportPlugin,
  n = e.sports.SportBase,
  s = e.humanDetection,
  o = {
    components: {
      HumanDetection: function HumanDetection() {
        return "../components/human-detection.js";
      }
    },
    data: function data() {
      return {
        ve: s.getVe(),
        enhanced: s.isEnhanced(),
        sportName: null,
        isDetecting: !1,
        isDetected: !1,
        counts: 0,
        times: 0
      };
    },
    methods: {
      onHumanDetecting: function onHumanDetecting(t) {
        this.sport.pushing(t);
      },
      onStartStop: function onStartStop() {
        if (this.isDetecting) return this.$refs.humanDetection.stopCapture(), void (this.isDetecting = !1);
        this.counts = 0, this.times = 0, this.sport.reset(), this.sport.start(), this.$refs.humanDetection.startCapture(), this.isDetecting = !0;
      }
    },
    onLoad: function onLoad(t) {
      var e = this;
      e.sportName = n.SPORTS.find(function (e) {
        return e.key == t.sportKey;
      }).name, e.sport = n.create(t.sportKey), e.sport.onTick = function (t, n) {
        e.counts = t, e.times = e.sport.toTimesString();
      };
    }
  };if (!Array) {
  t.resolveComponent("HumanDetection")();
}var i = t._export_sfc(o, [["render", function (e, n, s, o, i, r) {
  return {
    a: t.sr("humanDetection", "5186a837-0"),
    b: t.o(r.onHumanDetecting),
    c: t.p({
      ve: i.ve,
      enhanced: i.enhanced,
      "extend-info": !1,
      "pose-draw-enabled": !0,
      "full-screen": !0
    }),
    d: t.t(i.sportName),
    e: t.t(i.counts),
    f: t.t(i.times),
    g: t.t(i.isDetecting ? "停止" : "开始"),
    h: t.o(function () {
      return r.onStartStop && r.onStartStop.apply(r, arguments);
    })
  };
}]]);wx.createPage(i);