require("../../@babel/runtime/helpers/Arrayincludes");var t = require("../../common/vendor.js"),
  e = requirePlugin("aiSport").sports.SportBase,
  i = {
    options: {
      styleIsolation: "shared"
    },
    props: {
      sportKey: {
        type: String
      },
      mode: {
        type: Number,
        default: 0,
        validator: function validator(t) {
          return [0, 1, 2].includes(t);
        }
      },
      targets: {
        type: Number,
        default: -1
      },
      norm: {
        type: Number,
        default: 0
      },
      disableManualStop: {
        type: Boolean,
        default: !1
      },
      fields: [{
        type: Array,
        default: null,
        deep: !0
      }]
    },
    emits: ["on-sport-created", "on-start", "on-end"],
    watch: {
      sportKey: {
        handler: function handler(t) {
          this.buildSport(t || e.SPORTS[1].key);
        },
        immediate: !0
      },
      targets: {
        handler: function handler(t) {
          this.targetText = this.formatSeconds(t || 0);
        },
        immediate: !0
      }
    },
    data: function data() {
      return {
        actionVisible: !0,
        viewRect: {
          top: 0,
          left: 0
        },
        isDetecting: !1,
        voiceEnabled: !0,
        poseEnabled: !1,
        sportName: null,
        tickMode: !0,
        detectView: "front",
        targetText: "",
        counts: 0,
        times: 0,
        timesText: "0'00\""
      };
    },
    mounted: function mounted() {
      this.onResize(), t.index.onWindowResize(this.onResize);
    },
    beforeDestroy: function beforeDestroy() {
      t.index.offWindowResize(this.onResize), this.isDetecting && (this.$refs.humanDetect.stopCapture(), this.sport.stop(), this.stopTimer());
    },
    methods: {
      isEmptyArray: t.utils.isEmptyArray,
      formatSeconds: function formatSeconds(t) {
        return "".concat(parseInt(t / 60), "'").concat(t % 60, "\"");
      },
      buildSport: function buildSport(i) {
        var o = e.create(i);
        if (!o) return void t.wx$1.showToast({
          icon: "error",
          title: "运动不存在"
        });
        this.sport = o, this.sportName = o.name, this.tickMode = o.tickMode, this.detectView = o.view;
        var s = this;
        o.norm = this.norm, o.onTick = function (t, e) {
          if (s.$refs.humanDetect.playTick(), !o.tickMode) return s.times = e, void (s.timesText = s.formatSeconds(e));
          o.countTimes(), s.counts = t, s.times = o.times, s.timesText = s.formatSeconds(o.times), 2 == s.mode && t >= s.targets && (s.onStartOrStop(), s.$refs.humanDetect.playStartEnd());
        }, this.$emit("on-sport-created", o);
      },
      onResize: function onResize(e) {
        var i = t.index.getMenuButtonBoundingClientRect(),
          o = t.index.getWindowInfo();
        this.viewRect.top = i.top, this.viewRect.left = o.windowWidth - i.right;
      },
      startTimer: function startTimer() {
        var _this = this;
        if (1 != this.mode) return;
        if (this._timerThread) return;
        var t = this;
        this._timerTicks = this.targets, this.targetText = t.formatSeconds(t._timerTicks), this._timerThread = setInterval(function () {
          t._timerTicks--, _this.targetText = t.formatSeconds(t._timerTicks), t._timerTicks > 0 || (t.isDetecting && t.onStartOrStop(), t.stopTimer(), t.$refs.humanDetect.playStartEnd());
        }, 1e3);
      },
      stopTimer: function stopTimer() {
        this._timerThread && (clearInterval(this._timerThread), this._timerThread = null);
      },
      onDetectStatusChange: function onDetectStatusChange(t) {
        this.isDetecting = 1 === t.status;
      },
      onHumanDetecting: function onHumanDetecting(t) {
        this.isDetecting && !this.sport.isCounting && (this.sport.start(), this.$emit("on-start")), this.startTimer(), t.human && this.sport && this.sport.pushing(t.human);
      },
      onToggleActionVisable: function onToggleActionVisable(t) {
        console.log(t), "boolean" != typeof t && (t = !this.actionVisible), (t || this.isDetecting) && (this.actionVisible = t);
      },
      onToggleCamera: function onToggleCamera() {
        this.$refs.humanDetect.toggleCamera();
      },
      onToggleVoice: function onToggleVoice() {
        this.voiceEnabled = !this.voiceEnabled;
      },
      onTogglePoseDraw: function onTogglePoseDraw() {
        this.poseEnabled = !this.poseEnabled;
      },
      onStartOrStop: function onStartOrStop() {
        if (this.sport) {
          if (this.isDetecting) {
            if (this.disableManualStop) return;
            return this.$refs.humanDetect.stopCapture(), this.sport.stop(), this.stopTimer(), void this.$emit("on-end", {
              sportKey: this.sport.key,
              tickMode: this.sport.tickMode,
              counts: this.counts,
              times: this.times
            });
          }
          this.counts = 0, this.times = 0, this.timesText = this.formatSeconds(0), this.targetText = this.formatSeconds(this.targets), this.$refs.humanDetect.startCapture(), this.sport.reset(), this.actionVisible = !1;
        }
      },
      onExit: function onExit() {
        t.index.navigateBack({
          fail: function fail() {
            t.index.switchTab({
              url: "/pages/main/home"
            });
          }
        });
      }
    }
  };if (!Array) {
  (t.resolveComponent("human-detection") + t.resolveComponent("iconfont"))();
}Math || (function () {
  return "./human-detection.js";
} + function () {
  return "../../node-modules/yunzhi.uni-app/components/iconfont.js";
})();var o = t._export_sfc(i, [["render", function (e, i, o, s, n, r) {
  return t.e({
    a: t.sr("humanDetect", "30f8f6fe-0"),
    b: t.o(r.onDetectStatusChange),
    c: t.o(r.onHumanDetecting),
    d: t.o(function (t) {
      return r.onToggleActionVisable(!0);
    }),
    e: t.p({
      "pose-draw-enabled": n.poseEnabled,
      "enabled-start-countdown": !0,
      "full-screen": !0,
      "human-min-range": .6,
      "human-max-range": .86,
      "camera-view": n.detectView,
      "enabled-voice": n.voiceEnabled
    }),
    f: n.tickMode
  }, n.tickMode ? {
    g: t.t(n.counts)
  } : {}, {
    h: t.t(n.timesText),
    i: t.s("top:" + n.viewRect.top + "px;left:" + n.viewRect.left + "px;"),
    j: t.t(n.isDetecting ? "检测中" : "已停止"),
    k: 0 != o.mode
  }, 0 != o.mode ? t.e({
    l: 2 === o.mode
  }, 2 === o.mode ? {
    m: t.t(o.targets)
  } : {}, {
    n: 1 === o.mode
  }, 1 === o.mode ? {
    o: t.t(r.formatSeconds(o.targets))
  } : {}) : {}, {
    p: t.t(n.sportName),
    q: !r.isEmptyArray(o.fields)
  }, r.isEmptyArray(o.fields) ? {} : {
    r: t.f(o.fields, function (e, i, o) {
      return {
        a: t.t(e.label),
        b: t.t(e.descript),
        c: i
      };
    })
  }, {
    s: n.actionVisible
  }, n.actionVisible ? t.e({
    t: !n.isDetecting
  }, n.isDetecting ? {
    w: t.p({
      name: "stop"
    })
  } : {
    v: t.p({
      name: "play"
    })
  }, {
    x: t.o(function () {
      return r.onStartOrStop && r.onStartOrStop.apply(r, arguments);
    }),
    y: t.p({
      name: "undo"
    }),
    z: t.o(function () {
      return r.onExit && r.onExit.apply(r, arguments);
    }),
    A: t.p({
      name: "camera-toggle"
    }),
    B: t.o(function () {
      return r.onToggleCamera && r.onToggleCamera.apply(r, arguments);
    }),
    C: n.voiceEnabled
  }, n.voiceEnabled ? {
    D: t.p({
      name: "mute"
    })
  } : {
    E: t.p({
      name: "horn"
    })
  }, {
    F: t.o(function () {
      return r.onToggleVoice && r.onToggleVoice.apply(r, arguments);
    }),
    G: n.poseEnabled
  }, n.poseEnabled ? {
    H: t.p({
      name: "body-detection-disable"
    })
  } : {
    I: t.p({
      name: "body-detection"
    })
  }, {
    J: t.o(function () {
      return r.onTogglePoseDraw && r.onTogglePoseDraw.apply(r, arguments);
    }),
    K: t.o(function (t) {
      return r.onToggleActionVisable(!1);
    })
  }) : {});
}]]);wx.createComponent(o);