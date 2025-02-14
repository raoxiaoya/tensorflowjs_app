var _createForOfIteratorHelper2 = require("../@babel/runtime/helpers/createForOfIteratorHelper");var e = require("../common/vendor.js"),
  t = {
    name: "sportEvaluate",
    options: {
      styleIsolation: "shared"
    },
    props: {
      sport: {
        type: Object,
        required: !0,
        validator: function validator(e) {
          var t = ["name", "unit", "weighting", "references", "reverse"];
          for (var _i = 0, _t = t; _i < _t.length; _i++) {
            var _o = _t[_i];
            if (!e.hasOwnProperty(_o) || null == e[_o]) return console.error("\u4F20\u5165\u7684\u8FD0\u52A8\u5BF9\u8C61\u7F3A\u5C11\u5FC5\u8981\u5C5E\u6027\"".concat(_o, "\" ")), !1;
          }
          return !0;
        }
      }
    },
    emits: ["update:modelValue"],
    watch: {
      sport: function sport(e) {
        this.model = e, this.achieve = null, this.score = null;
      }
    },
    data: function data() {
      return {
        model: this.sport,
        achieve: null,
        score: null,
        ballPosition: 0,
        suggestion: null
      };
    },
    methods: {
      filteredReference: function filteredReference(e) {
        var t = this.model.references.find(function (t) {
          return t.score === e;
        });
        return t ? t.achieve : null;
      },
      onCalcScore: function onCalcScore(e) {
        var t = e.detail.value;
        if ("" === t) {
          this.score = null;
          var _e = {
            name: this.model.name,
            score: 0,
            weightingScore: 0
          };
          return void this.$emit("on-result", _e);
        }
        var o = 0;
        var s = this.model.reverse ? function (e, t) {
          return e >= t;
        } : function (e, t) {
          return e <= t;
        };
        var _iterator = _createForOfIteratorHelper2(this.model.references),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var r = _step.value;
            s(r.achieve, t) && r.score > o && (o = r.score);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var i = this.onCalcBonusScore(t);
        this.score = o + i, this.setBallPosition(this.score), this.setSuggestion(this.score);
        var n = {
          name: this.model.name,
          score: this.score,
          weightingScore: this.score * this.model.weighting
        };
        this.$emit("on-result", n);
      },
      setBallPosition: function setBallPosition(e) {
        this.ballPosition = e < 60 ? (25 * e / 60 - 2).toFixed(2) : e < 80 ? (25 * (e - 60) / 20 + 23).toFixed(2) : e < 90 ? (25 * (e - 80) / 10 + 48).toFixed(2) : e < 100 ? (25 * (e - 90) / 10 + 73).toFixed(2) : 98;
      },
      onCalcBonusScore: function onCalcBonusScore(e) {
        if ("一分钟跳绳" !== this.model.name) return 0;
        var t = e - this.filteredReference(100);
        return t < 2 ? 0 : Math.min(Math.floor(t / 2), 20);
      },
      setSuggestion: function setSuggestion(e) {
        e && ("一分钟跳绳" == this.model.name ? this.suggestion = e < 60 ? "时不我待，立即加强双脚前后跳、前后交替跳等协调灵敏类素质训练。" : e < 80 ? "注意双臂加紧、脚尖点地、屈髋屈膝发力，平时加强协调灵敏类训练。" : e < 90 ? "注意跳绳细节动作纠正，建议采用定时计数法和定速计时法提升跳绳频率。" : "成绩不错，建议采用定时计数法和定速计时法提升跳绳频率，冲刺更高分数！" : "一分钟仰卧起坐" == this.model.name ? this.suggestion = e < 60 ? "不是只练仰卧起坐就能解决的。注意加强体育锻炼，每周保持4次以上中高强度运动，提升基础运动能力。" : e < 80 ? "保持每周2次以上中高强度遇到弄同时，多做高抬腿，收腹跳，快速卷腹等核心力量训练。" : e < 90 ? "多加练习高抬腿、收腹跳、快速卷腹、单杠悬垂举腿等核心快速收缩类训练。提升核心快速收缩能力。" : "加强练习核心肌肉快速收缩发力模式，进一步提升动作速度。" : "坐位体前屈" == this.model.name ? this.suggestion = e < 60 ? "多参加体育锻炼，练前练后注意充分的热身和拉伸，提升肌肉弹性及关节灵活度。" : e < 80 ? "加强柔韧性训练，保持每周3次以上中等强度运动，提升肌肉弹性及关节灵活度。" : e < 90 ? "充足的运动可以有效提升肌肉弹性及关节灵活度，练前练后注意要充分热身及拉伸。" : "成绩不错，保持适当运动，提升肌肉弹性及关节灵活度。" : "肺活量" == this.model.name ? this.suggestion = e < 60 ? "时不我待，保持每周3-5次中高强度运动，以增强呼吸深度，从而促进心肺系统发育。" : e < 80 ? "保持每周2-4次中高强度运动，促进心肺系统发育。同时建议练习腹式呼吸法，增强呼吸深度。" : e < 90 ? "保持每周3次以上中高强度运动，提升呼吸深度，促进心肺系统发育。" : "学习、练习腹式呼吸法，保持适当运动量，进一步提升心肺能力。" : "50米跑" == this.model.name ? this.suggestion = e < 60 ? "时不我待，保持每周3-5次中高强度运动，侧重下肢力量及灵敏协调素质训练，提升综合运动表现力。" : e < 80 ? "开展高频短时快速摆臂训练，原地高抬腿训练，提升动作速度。同时，加强下肢力量训练。" : e < 90 ? "建议加强下肢力量训练，结合高频的快速摆臂、原地高抬腿、摆臂提膝训练以提升动作速度。" : "加强下肢肌肉力量训练，结合短跑上下肢分解动作训练，冲刺更高分数！" : "50*8往返跑" == this.model.name && (this.suggestion = e < 60 ? "可以适当开展变速跑练习，保持每周3-5次中高强度运动，提升心肺耐力及综合运动表现力。" : e < 80 ? "保持每周2次以上中高强度运动，开展600米计时训练及变速跑训练，提升心肺耐力及综合运动表现。" : e < 90 ? "针对性开展100*4变速跑训练，既快速跑100米，走100米，再快速跑100米……结合600米计时跑训练，提升肌肉耐力及心肺能力。" : "建议展开进阶100*4变速跑训练，既快速跑100米，走100米，再快速跑100米……提升肌肉耐力及心肺能力。"));
      }
    }
  };if (!Array) {
  e.resolveComponent("tui-input")();
}Math;var o = e._export_sfc(t, [["render", function (t, o, s, i, n, r) {
  return e.e({
    a: n.model
  }, n.model ? e.e({
    b: e.t(n.model.name),
    c: e.o(r.onCalcScore),
    d: e.o(function (e) {
      return n.achieve = e;
    }),
    e: e.p({
      placeholder: "输入成绩",
      type: "digit",
      inputBorder: !0,
      isFillet: !0,
      padding: "6rpx 16rpx",
      size: "26",
      modelValue: n.achieve
    }),
    f: e.t(n.model.unit),
    g: e.t(r.filteredReference(60)),
    h: e.t(r.filteredReference(80)),
    i: e.t(r.filteredReference(90)),
    j: null !== n.score
  }, null !== n.score ? {
    k: e.t(n.score),
    l: e.s("left: " + n.ballPosition + "%")
  } : {}, {
    m: null !== n.score
  }, null !== n.score ? {
    n: e.t(n.score),
    o: e.t(n.score),
    p: e.t(100 * n.model.weighting),
    q: e.t((n.score * n.model.weighting).toFixed(1))
  } : {}, {
    r: n.suggestion
  }, n.suggestion ? {
    s: e.t(n.suggestion)
  } : {}) : {});
}]]);wx.createComponent(o);