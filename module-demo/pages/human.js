var e = require("../../common/vendor.js"),
  t = e.index.$aiSportPlugin,
  n = t && t.humanDetection,
  i = {
    components: {
      HumanDetection: function HumanDetection() {
        return "../components/human-detection.js";
      }
    },
    data: function data() {
      return {
        isDetecting: !1,
        ve: n.getVe(),
        enhanced: n.isEnhanced(),
        frameWidth: 480,
        frameHeight: 640,
        score: 0,
        isDetected: !1
      };
    },
    methods: {
      onStartStop: function onStartStop() {
        this.isDetecting ? (this.$refs.humanDetection.stopCapture(), this.isDetecting = !1) : (this.$refs.humanDetection.startCapture(), this.isDetecting = !0);
      },
      onHumanDetecting: function onHumanDetecting(e) {
        if (!e) return this.score = 0, void (this.isDetected = !1);
        this.isDetected = !0, this.frameWidth = e.width, this.frameHeight = e.height, this.score = e.score;
      }
    }
  };if (!Array) {
  e.resolveComponent("HumanDetection")();
}var s = e._export_sfc(i, [["render", function (t, n, i, s, o, c) {
  return e.e({
    a: e.sr("humanDetection", "159f3bd3-0"),
    b: e.o(c.onHumanDetecting),
    c: e.p({
      ve: o.ve,
      enhanced: o.enhanced,
      poseDrawEnabled: !0
    }),
    d: e.t(o.isDetecting ? "停止" : "开始"),
    e: e.o(function () {
      return c.onStartStop && c.onStartStop.apply(c, arguments);
    }),
    f: o.isDetected
  }, (o.isDetected, {}), {
    g: e.t(o.score),
    h: e.t(o.ve),
    i: 1 == o.ve && o.enhanced
  }, (1 == o.ve && o.enhanced, {}), {
    j: e.t(o.frameWidth),
    k: e.t(o.frameHeight)
  });
}]]);wx.createPage(s);