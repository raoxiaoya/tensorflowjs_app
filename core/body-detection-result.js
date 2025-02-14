var t = require("../@babel/runtime/helpers/classCallCheck"),
  e = require("../@babel/runtime/helpers/createClass"),
  i = require("../utils/utils"),
  h = require("./saber"),
  s = function () {
    return e((function e(i, h, s, r, n) {
      t(this, e), this._keypoints = null, this.score = 0, this.width = 0, this.height = 0, this.timestamp = 0, this.keypoints = i, this.width = h || 0, this.height = s || 0, this.score = r || 0, this.timestamp = n || 0
    }), [{
      key: "keypoints",
      get: function () {
        return this._keypoints
      },
      set: function (t) {
        if (!i.isNone(t) && !Array.isArray(t)) throw new Error("关键点集是一个数组");
        this._keypoints = t
      }
    }, {
      key: "bodyRange",
      get: function () {
        return this.getBodyRange()
      }
    }, {
      key: "getBodyRange",
      value: function () {
        if (i.isEmptyArray(this._keypoints)) return null;
        var t = Number.NaN,
          e = Number.NaN,
          h = Number.NaN,
          s = Number.NaN;
        return this._keypoints.forEach((function (i) {
          (!t || i.x > t) && (t = i.x), (!e || i.x < e) && (e = i.x), (!h || i.y > h) && (h = i.y), (!s || i.y < s) && (s = i.y)
        })), {
          x: e,
          y: s,
          width: Math.abs(t - e),
          height: Math.abs(h - s)
        }
      }
    }, {
      key: "rotatePoint",
      value: function (t, e, h, s) {
        if (i.isNone(s) || Math.abs(s) < 1 || Math.abs(s) > 180) throw new Error("angle必须在之间");
        var r = Math.PI * s / 180,
          n = h.x - t,
          a = h.y - e,
          o = n * Math.cos(r) + a * Math.sin(r) + t,
          u = a * Math.cos(r) - n * Math.sin(r) + e;
        h.x = o, h.y = u
      }
    }, {
      key: "rotate",
      value: function (t) {
        var e = this.getBodyRange();
        if (!e) return !1;
        var i = e.width / 2 + e.x,
          h = e.height / 2 + e.y,
          s = 0,
          r = 0;
        if (Math.abs(t) >= 45 && Math.abs(t) <= 135) {
          s = this.height - this.width, r = this.width - this.height, s /= 2, r /= 2;
          var n = this.width;
          this.width = this.height, this.height = n
        }
        var a = this;
        return this.keypoints.forEach((function (e) {
          a.rotatePoint(i, h, e, t), e.x += s, e.y += r
        })), !0
      }
    }, {
      key: "rotateToUpright",
      value: function () {
        var t = this.getBodyRange();
        if (!t) return !1;
        var e = {
            x: t.width / 2 + t.x,
            y: t.height / 2 + t.y
          },
          i = {
            x: e.x,
            y: 0
          },
          s = this._keypoints.find((function (t) {
            return "nose" == t.name
          })),
          r = h.angle(e, s, i);
        !r || Math.abs(r) < 10 || (s.x < e.x && (r = 0 - r), this.rotate(r))
      }
    }, {
      key: "toSimpleObject",
      value: function () {
        var t = i.clone(this, {});
        return t.keypoints = this.keypoints, t.bodyRange = this.bodyRange, delete t._keypoints, t
      }
    }])
  }();
module.exports = s;