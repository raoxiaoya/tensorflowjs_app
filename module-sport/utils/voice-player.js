require("../../@babel/runtime/helpers/Arrayincludes");var _classCallCheck2 = require("../../@babel/runtime/helpers/classCallCheck");var _createClass2 = require("../../@babel/runtime/helpers/createClass");var _typeof2 = require("../../@babel/runtime/helpers/typeof");var t = Object.defineProperty,
  i = function i(_i, n, o) {
    return function (i, n, o) {
      n in i ? t(i, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
      }) : i[n] = o;
    }(_i, "symbol" != _typeof2(n) ? n + "" : n, o), o;
  };var n = require("../../common/vendor.js"),
  o = "/module-sport/static/voices";exports.VoicePlayer = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck2(this, _class);
    i(this, "_isPlaying", !1), i(this, "_context", null), this.initializeAudio();
  }
  return _createClass2(_class, [{
    key: "initializeAudio",
    value: function initializeAudio() {
      if (this._context) return;
      var t = this;
      t._context = n.index.createInnerAudioContext(), t._context.onPlay(function () {
        return t._isPlaying = !0;
      }), t._context.onPause(function () {
        return t._isPlaying = !1;
      }), t._context.onStop(function () {
        return t._isPlaying = !1;
      }), t._context.onEnded(function () {
        return t._isPlaying = !1;
      }), t._context.onError(function (t) {
        return console.error(t);
      });
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return this._isPlaying;
    }
  }, {
    key: "playView",
    value: function playView(t) {
      this.initializeAudio();
      if (!t || !["no_human", "away", "near", "front_back", "front", "back", "side", "left", "right"].includes(t)) throw new Error("".concat(t, "\u4E0D\u5728\u6307\u5B9A\u8303\u56F4\u5185"));
      this._context.src = "".concat(o, "/v_").concat(t, ".wav"), this._context.play();
    }
  }, {
    key: "playTick",
    value: function playTick() {
      try {
        this.initializeAudio(), this._context.src = "".concat(o, "/tick_02.mp3"), this._context.play();
      } catch (t) {
        console.log(t);
      }
    }
  }, {
    key: "playCountFinish",
    value: function playCountFinish() {
      try {
        this.initializeAudio(), this._context.src = "".concat(o, "/count_finished.mp3"), this._context.play();
      } catch (t) {
        console.log(t);
      }
    }
  }, {
    key: "playStartEnd",
    value: function playStartEnd() {
      try {
        this.initializeAudio(), this._context.src = "".concat(o, "/start_end.mp3"), this._context.play();
      } catch (t) {
        console.log(t);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._context && this._context.destroy(), this._context = null;
    }
  }]);
}();