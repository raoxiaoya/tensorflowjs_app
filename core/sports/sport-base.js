var i = require("../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../@babel/runtime/helpers/createClass"),
  s = require("../../config"),
  e = require("../../utils/utils"),
  h = function () {
    return t((function t(h) {
      i(this, t), this.key = null, this.name = null, this.view = null, this.tickMode = !1, this.pointThreshold = s.moveNet.pointThreshold, this.counts = 0, this.times = 0, this.startTime = 0, this.finishedTime = 0, this.onTick = null, this.isCounting = !1, e.isNone(h) || (this.pointThreshold = h)
    }), [{
      key: "reset",
      value: function () {
        this.counts = 0, this.times = 0, this.startTime = null, this.finishedTime = null, this.isCounting && this.tickMode && (this.startTime = e.timestamp(), this.finishedTime = e.timestamp())
      }
    }, {
      key: "start",
      value: function () {
        this.isCounting || (this.isCounting = !0, this.tickMode ? this.startTime || (this.startTime = e.timestamp(), this.finishedTime = e.timestamp()) : (this.startTime = null, this.finishedTime = null))
      }
    }, {
      key: "stop",
      value: function () {
        this.isCounting && (this.isCounting = !1, this.tickMode ? (this.finishedTime = e.timestamp(), this.times = this.finishedTime - this.startTime) : this.pauseTime())
      }
    }, {
      key: "emitTick",
      value: function (i) {
        if (this.isCounting) {
          this.counts += i || 1;
          try {
            e.invoke(this.onTick)(this.counts, this.times)
          } catch (i) {
            console.error(i)
          }
        }
      }
    }, {
      key: "timestamp",
      value: function () {
        return (new Date).getTime()
      }
    }, {
      key: "countTimes",
      value: function () {
        if (this.startTime) return this.finishedTime = e.timestamp(), this.times = this.finishedTime - this.startTime, this.times
      }
    }, {
      key: "tickTime",
      value: function () {
        if (this.isCounting)
          if (this.startTime) {
            this.finishedTime = this.timestamp();
            var i = this.finishedTime - this.startTime;
            if (!(i < 1e3)) {
              var t = Math.floor(i / 1e3);
              this.times += t, this.startTime = this.finishedTime, this.startTime -= i % 1e3;
              try {
                e.invoke(this.onTick)(this.counts, this.times)
              } catch (i) {
                console.error(i)
              }
            }
          } else this.startTime = this.timestamp()
      }
    }, {
      key: "pauseTime",
      value: function () {
        this.tickTime(), this.startTime = null, this.finishedTime = null
      }
    }, {
      key: "toTimesString",
      value: function () {
        var i = this.times;
        if (!i) return "00:00";
        var t = [],
          s = 0;
        return i >= 3600 && ((s = Math.floor(i / 3600)) < 10 && (s = "0".concat(s)), t.push(s), i %= 3600), i >= 60 ? (s = (100 + (s = Math.floor(i / 60)) + "").substr(1), t.push(s), i %= 60) : t.push("00"), i = (100 + i + "").substr(1), t.push(i), t.join(":")
      }
    }], [{
      key: "register",
      value: function (i, t, s) {}
    }, {
      key: "create",
      value: function (i) {}
    }])
  }();
module.exports = h;