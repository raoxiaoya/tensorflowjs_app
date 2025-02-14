var e = require("../utils/voice-player.js"),
  n = requirePlugin("aiSport").calc.Calculator;var a = null,
  t = null;function i(e) {
  if (!e) return;
  if (!a) return;
  var n = a;
  if (!n.enabledVoice) return;
  var t = n.voicePlayer;
  t.isPlaying() || t.playView(e);
}function r() {
  if (!a) return;
  var e = a;
  e._countdownThread && (clearInterval(e._countdownThread), e._countdownThread = null), e.countdown = -1;
}var o = {
  playViewVoice: i,
  playStartEnd: function playStartEnd() {
    if (!a) return;
    var e = a;
    if (!e.enabledVoice) return;
    e.voicePlayer.playStartEnd();
  },
  playTick: function playTick() {
    if (!a) return;
    var e = a;
    if (!e.enabledVoice) return;
    e.voicePlayer.playTick();
  },
  humanChecking: function humanChecking(e) {
    if (!a) return !1;
    var r = a;
    if (!e) return r.bodyBoxVisbile = !0, i("no_human"), !1;
    t || (t = new n());
    var o = r.frameWidth,
      c = r.frameHeight;
    r.previewOffsetX > 0 && (o -= 2 * Math.abs(r.previewOffsetX / r.previewRate)), r.previewOffsetY > 0 && (c -= 2 * Math.abs(r.previewOffsetY / r.previewRate));
    var l = null;
    if (r.humanMaxRange) {
      var _n = o * r.humanMaxRange,
        _a = c * r.humanMaxRange;
      if (l = {
        name: "最大人体范围检测",
        calc: "whole",
        range: {
          top: (r.frameHeight - _a) / 2,
          left: (r.frameWidth - _n) / 2,
          width: _n,
          height: _a
        },
        relaxed: !0
      }, !t.calculating(e, l)) return i("away"), r.bodyBoxVisbile = !0, !1;
    }
    if (r.humanMinRange) {
      var _n2 = o * r.humanMinRange,
        _a2 = c * r.humanMinRange;
      if (l = {
        name: "最小人体范围检测",
        calc: "whole",
        range: {
          top: (r.frameHeight - _a2) / 2,
          left: (r.frameWidth - _n2) / 2,
          width: _n2,
          height: _a2
        },
        relaxed: !0
      }, t.calculating(e, l)) return r.bodyBoxVisbile = !0, i("near"), !1;
    }
    return r.bodyBoxVisbile = !1, !r.cameraView || (l = {
      name: "视角检查",
      calc: "camera-view",
      position: r.cameraView
    }, "front_back" == r.cameraView ? l = {
      name: "视角检查",
      calc: "$or",
      rules: [{
        name: "后视角",
        calc: "camera-view",
        position: "back"
      }, {
        name: "前视角",
        calc: "camera-view",
        position: "front"
      }]
    } : "side" == r.cameraView && (l = {
      name: "视角检查",
      calc: "$or",
      rules: [{
        name: "左视角",
        calc: "camera-view",
        position: "left"
      }, {
        name: "右视角",
        calc: "camera-view",
        position: "right"
      }]
    }), !!t.calculating(e, l) || (i(r.cameraView), !1));
  },
  startCountdown: function startCountdown() {
    if (!a) return !1;
    var e = a;
    return !!e.enabledStartCountdown && (e.countdown > 0 || 0 !== e.countdown && (e.countdown = 4, e._countdownThread = setInterval(function () {
      var n = e.countdown;
      n--, n <= 0 && r(), e.countdown = n;
    }, 1e3), e.enabledVoice && e.voicePlayer.playCountFinish(), !0));
  },
  stopCountdown: r,
  attach: function attach(n) {
    a = n, a.voicePlayer = new e.VoicePlayer();
  },
  detach: function detach() {
    if (!a) return;
    var e = a;
    r(), e.voicePlayer && (e.voicePlayer.destroy(), e.voicePlayer = null), a = null;
  }
};exports.part = o;