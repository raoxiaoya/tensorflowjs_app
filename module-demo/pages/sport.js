var t = require("../../common/vendor.js"),
  e = t.index.$aiSportPlugin,
  s = e.sports.SportBase,
  n = e.humanDetection,
  o = {
    components: {
      HumanDetection: function HumanDetection() {
        return "../components/human-detection.js";
      }
    },
    data: function data() {
      return {
        ve: n.getVe(),
        enhanced: n.isEnhanced(),
        sportKey: null,
        sportName: null,
        isDetecting: !1,
        isDetected: !1,
        counts: 0,
        times: 0
      };
    },
    methods: {
      onHumanDetecting: function onHumanDetecting(t) {
        t && this.sport.pushing(t);
      },
      onStartStop: function onStartStop() {
        if (this.isDetecting) return this.$refs.humanDetection.stopCapture(), void (this.isDetecting = !1);
        this.counts = 0, this.times = 0, this.sport.reset(), this.sport.start(), this.$refs.humanDetection.startCapture(), this.isDetecting = !0;
      }
    },
    onLoad: function onLoad(t) {
      var e = this;
      e.sportKey = t.sportKey, e.sportName = s.SPORTS.find(function (e) {
        return e.key == t.sportKey;
      }).name, e.sport = s.create(t.sportKey), e.sport.onTick = function (t, s) {
        e.counts = t, e.times = e.sport.toTimesString();
      };
    }
  };if (!Array) {
  t.resolveComponent("HumanDetection")();
}var i = t._export_sfc(o, [["render", function (e, s, n, o, i, r) {
  return {
    a: t.sr("humanDetection", "1764f2cc-0"),
    b: t.o(r.onHumanDetecting),
    c: t.p({
      ve: i.ve,
      enhanced: i.enhanced,
      "pose-draw-enabled": !0
    }),
    d: t.t(i.isDetecting ? "停止" : "开始"),
    e: t.o(function () {
      return r.onStartStop && r.onStartStop.apply(r, arguments);
    }),
    f: t.t(i.sportName),
    g: t.t(i.counts),
    h: t.t(i.times),
    i: "/module-demo/pages/sport-full-screen?sportKey=" + i.sportKey
  };
}]]);wx.createPage(i);