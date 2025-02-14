var e = require("../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../@babel/runtime/helpers/createClass"),
  t = require("../../@babel/runtime/helpers/possibleConstructorReturn"),
  s = require("../../@babel/runtime/helpers/getPrototypeOf"),
  o = require("../../@babel/runtime/helpers/inherits");
var n = require("../../utils/utils"),
  i = require("./sport-base"),
  a = require("../body-calc/pose-comparer").PoseComparer,
  c = function (c) {
    function l(r) {
      var o, n, i, c;
      return e(this, l), n = this, c = [r], i = s(i = l), (o = t(n, function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {})))
        } catch (e) {
          return !1
        }
      }() ? Reflect.construct(i, c || [], s(n).constructor) : i.apply(n, c))).samples = null, o.similarThreshold = .8, o.stateTran = -1, o.view = "front_back", o.tickMode = !0, o._poseComparer = new a, o.samples = {
        close: [{
          y: 66.0156295428602,
          x: 196.24999974976453,
          score: .3974609375,
          name: "nose"
        }, {
          y: 56.99219681226278,
          x: 204.68749974880043,
          score: .395263671875,
          name: "left_eye"
        }, {
          y: 56.48437477557764,
          x: 188.12499975069284,
          score: .353759765625,
          name: "right_eye"
        }, {
          y: 63.867192043105675,
          x: 217.18751882085854,
          score: .6533203125,
          name: "left_ear"
        }, {
          y: 60.78125454345827,
          x: 174.99999975219248,
          score: .49560546875,
          name: "right_ear"
        }, {
          y: 117.10937476865072,
          x: 243.12499974440865,
          score: .51220703125,
          name: "left_shoulder"
        }, {
          y: 124.92188430450126,
          x: 140.62501882960643,
          score: .5078125,
          name: "right_shoulder"
        }, {
          y: 196.40624975959042,
          x: 251.2499997434803,
          score: .45068359375,
          name: "left_elbow"
        }, {
          y: 207.65624975830502,
          x: 136.8749997565486,
          score: .4960937798023224,
          name: "right_elbow"
        }, {
          y: 276.5624997504319,
          x: 260.31249974244486,
          score: .60498046875,
          name: "left_wrist"
        }, {
          y: 279.99999975003914,
          x: 132.34374975706632,
          score: .4870605766773224,
          name: "right_wrist"
        }, {
          y: 265.3125188252036,
          x: 224.68751882000163,
          score: .5830078125,
          name: "left_hip"
        }, {
          y: 266.2499997516102,
          x: 167.81249975301373,
          score: .634765625,
          name: "right_hip"
        }, {
          y: 416.24999973447143,
          x: 221.24999974690806,
          score: .67919921875,
          name: "left_knee"
        }, {
          y: 418.43749973422155,
          x: 170.93749975265666,
          score: .55908203125,
          name: "right_knee"
        }, {
          y: 549.6874997192251,
          x: 223.43751882014448,
          score: .51123046875,
          name: "left_ankle"
        }, {
          y: 553.1249997188324,
          x: 178.59374975178187,
          score: .5869140625,
          name: "right_ankle"
        }],
        open: [{
          y: 177.65625000000003,
          x: 231.71876907348633,
          score: .71484375,
          name: "nose"
        }, {
          y: 167.18750000000003,
          x: 236.87501907348633,
          score: .72509765625,
          name: "left_eye"
        }, {
          y: 169.53125000000003,
          x: 219.84375,
          score: .880859375,
          name: "right_eye"
        }, {
          y: 172.18750000000003,
          x: 249.68749999999997,
          score: .60009765625,
          name: "left_ear"
        }, {
          y: 175.15625000000003,
          x: 209.0625190734863,
          score: .67138671875,
          name: "right_ear"
        }, {
          y: 212.65625000000003,
          x: 266.5625,
          score: .6328125,
          name: "left_shoulder"
        }, {
          y: 212.03125000000003,
          x: 190.46875000000003,
          score: .7578125,
          name: "right_shoulder"
        }, {
          y: 140.8593845367432,
          x: 271.25,
          score: .59912109375,
          name: "left_elbow"
        }, {
          y: 138.9843845367432,
          x: 185.625,
          score: .7666015625,
          name: "right_elbow"
        }, {
          y: 72.30469226837161,
          x: 244.06249999999997,
          score: .630859375,
          name: "left_wrist"
        }, {
          y: 70.78125476837161,
          x: 220.46875000000003,
          score: .5390625,
          name: "right_wrist"
        }, {
          y: 347.1875,
          x: 252.49999999999997,
          score: .85546875,
          name: "left_hip"
        }, {
          y: 348.75,
          x: 206.25,
          score: .87646484375,
          name: "right_hip"
        }, {
          y: 475.625,
          x: 285,
          score: .89306640625,
          name: "left_knee"
        }, {
          y: 476.875,
          x: 181.875,
          score: .888671875,
          name: "right_knee"
        }, {
          y: 568.125,
          x: 329.375,
          score: .88525390625,
          name: "left_ankle"
        }, {
          y: 568.125,
          x: 148.5937690734863,
          score: .68408203125,
          name: "right_ankle"
        }]
      }, o
    }
    return o(l, i), r(l, [{
      key: "isSimilar",
      value: function (e) {
        if (e.score < this.similarThreshold) return console.debug("整体动作不符", e), !1;
        var r = e.items.find((function (e) {
          return "left_foot" == e.key
        }));
        return !r || r.score < this.similarThreshold ? (console.debug("左脚未达标", r), !1) : !(!(r = e.items.find((function (e) {
          return "right_foot" == e.key
        }))) || r.score < this.similarThreshold) || (console.debug("右脚未达标", r), !1)
      }
    }, {
      key: "pushing",
      value: function (e) {
        if (this.isCounting && !n.isNone(e)) {
          var r = this._poseComparer,
            t = r.compare(this.samples.close, e.keypoints);
          1 !== this.stateTran && this.isSimilar(t) ? this.stateTran = 1 : 1 === this.stateTran && (t = r.compare(this.samples.open, e.keypoints), this.isSimilar(t) && (this.stateTran = -1, this.countTimes(), this.emitTick()))
        }
      }
    }])
  }();
c.KEY = "Jumping-Jack", c.NAME = "开合跳", module.exports = c;