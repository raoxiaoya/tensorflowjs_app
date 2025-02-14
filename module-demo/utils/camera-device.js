var _classCallCheck2 = require("../../@babel/runtime/helpers/classCallCheck");var _createClass2 = require("../../@babel/runtime/helpers/createClass");var _typeof2 = require("../../@babel/runtime/helpers/typeof");var t = Object.defineProperty,
  s = function s(_s, e, i) {
    return function (s, e, i) {
      e in s ? t(s, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
      }) : s[e] = i;
    }(_s, "symbol" != _typeof2(e) ? e + "" : e, i), i;
  };var e = require("../../common/vendor.js");exports.CameraDevice = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck2(this, _class);
    s(this, "fps", 0), s(this, "targetFPS", 12), s(this, "frames", []), s(this, "frameCount", 0), s(this, "onFrame", null), s(this, "onStatusChange", null);
  }
  return _createClass2(_class, [{
    key: "_onEmitFrame",
    value: function _onEmitFrame() {
      if (-1 === this._signal) return;
      var t = this.frames.shift();
      t && (t.data = new Uint8Array(t.rawData), t.currentTime = t.timestamp, e.utils.invoke(this.onFrame)(t)), t || 0 !== this._signal || (console.debug("相机停止推帧"), this._signal = -1, e.utils.invoke(this.onStatusChange)(-1, this.getStatus()));
    }
  }, {
    key: "_isFlowControl",
    value: function _isFlowControl() {
      var t = new Date().getTime();
      return !this._lastStamp || e.utils.isEmptyArray(this.frames) ? (this._lastStamp = t, !1) : t - this._lastStamp < 1e3 / this.targetFPS || (this._lastStamp = t, !1);
    }
  }, {
    key: "_onFrame",
    value: function _onFrame(t) {
      if (1 != this._signal) return;
      if (this._isFlowControl()) return;
      var s = {
        width: Number(t.width),
        height: Number(t.height),
        rawData: t.data,
        timestamp: new Date().getTime()
      };
      if (this.frames.push(s), this.frameCount++, this._startTime) {
        var _t = e.utils.timestamp();
        this.fps = this.frameCount / (_t - this._startTime), this.fps = Math.floor(this.fps);
      } else this._startTime = e.utils.timestamp();
    }
  }, {
    key: "_createListener",
    value: function _createListener() {
      var _this = this;
      var t = e.wx$1.createCameraContext().onCameraFrame(function (t) {
        return _this._onFrame(t);
      });
      t.start({
        success: function success(t) {
          console.log(t);
        }
      }), this._listener = t;
    }
  }, {
    key: "takePhotoAsync",
    value: function takePhotoAsync(t) {
      var s = this;
      return new Promise(function (i, a) {
        if (!(t = t || s.frames[s.frames.length - 1])) return void i("帧队列中没有帧");
        var r = e.wx$1.getFileSystemManager(),
          n = "".concat(e.wx$1.env.USER_DATA_PATH, "/temp.jpeg"),
          h = upng.encode([t.rawData], t.width, t.height);
        r.writeFileSync(n, h, "binary") ? i("临时文件保存失败") : e.wx$1.saveImageToPhotosAlbum({
          filePath: n,
          success: function success(t) {
            i("帧图像保存成功");
          },
          fail: function fail(t) {
            a(t.errMsg);
          }
        });
      });
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      switch (this._signal) {
        case -1:
          return "stopped";
        case 0:
          return "stopping";
        case 1:
          return "running";
        default:
          return "unknown";
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      this.frameCount = 0, this._signal = 1, this._startTime = null, this._lastStamp = -1, this._listener ? this._listener.start({
        success: function success(t) {
          console.log("start", t);
        }
      }) : this._createListener(), this._emitThread || (this._emitThread = setInterval(function () {
        return _this2._onEmitFrame();
      }, 1e3 / this.targetFPS)), e.utils.invoke(this.onStatusChange)(1, this.getStatus());
    }
  }, {
    key: "stop",
    value: function stop(t) {
      1 === this._signal && (this._listener && this._listener.stop(), this.frames = [], this._signal = 0, t && (this._signal = -1, this._emitThread && clearInterval(this._emitThread), this._emitThread = null), e.utils.invoke(this.onStatusChange)(this._signal, this.getStatus()));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._listener && (this._emitThread && (clearInterval(this._emitThread), this._emitThread = null), this._listener.stop(), this._listener = null, this._signal = -1, this.frames = []);
    }
  }]);
}();