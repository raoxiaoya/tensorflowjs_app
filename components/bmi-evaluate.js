require("../@babel/runtime/helpers/Arrayincludes");var e = require("../common/vendor.js"),
  i = {
    name: "bmiEvaluate",
    options: {
      styleIsolation: "shared"
    },
    props: {
      grade: {
        type: String,
        required: !0,
        default: "一年级",
        validator: function validator(e) {
          return ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"].includes(e);
        }
      },
      gender: {
        type: String,
        required: !0,
        default: "男生",
        validator: function validator(e) {
          return ["男生", "女生"].includes(e);
        }
      }
    },
    emits: ["update:modelValue"],
    watch: {
      grade: function grade(e) {
        e && this.onReset();
      },
      gender: function gender(e) {
        e && this.onReset();
      }
    },
    data: function data() {
      return {
        bmiReferences: [{
          grade: "一年级",
          gender: "男生",
          minNormal: 13.5,
          maxNormal: 18.1,
          lowWeight: 13.4,
          minOverweight: 18.2,
          maxOverweight: 20.3,
          Obesity: 20.4
        }, {
          grade: "一年级",
          gender: "女生",
          minNormal: 13.3,
          maxNormal: 17.3,
          lowWeight: 13.2,
          minOverweight: 17.4,
          maxOverweight: 19.2,
          Obesity: 19.3
        }, {
          grade: "二年级",
          gender: "男生",
          minNormal: 13.7,
          maxNormal: 18.4,
          lowWeight: 13.6,
          minOverweight: 18.5,
          maxOverweight: 20.4,
          Obesity: 20.5
        }, {
          grade: "二年级",
          gender: "女生",
          minNormal: 13.5,
          maxNormal: 17.8,
          lowWeight: 13.4,
          minOverweight: 17.9,
          maxOverweight: 20.2,
          Obesity: 20.3
        }, {
          grade: "三年级",
          gender: "男生",
          minNormal: 13.9,
          maxNormal: 19.4,
          lowWeight: 13.8,
          minOverweight: 19.5,
          maxOverweight: 22.1,
          Obesity: 22.2
        }, {
          grade: "三年级",
          gender: "女生",
          minNormal: 13.6,
          maxNormal: 18.6,
          lowWeight: 13.5,
          minOverweight: 18.7,
          maxOverweight: 21.1,
          Obesity: 21.2
        }, {
          grade: "四年级",
          gender: "男生",
          minNormal: 14.2,
          maxNormal: 20.1,
          lowWeight: 14.1,
          minOverweight: 20.2,
          maxOverweight: 22.6,
          Obesity: 22.7
        }, {
          grade: "四年级",
          gender: "女生",
          minNormal: 13.7,
          maxNormal: 19.4,
          lowWeight: 13.6,
          minOverweight: 19.5,
          maxOverweight: 22,
          Obesity: 22.1
        }, {
          grade: "五年级",
          gender: "男生",
          minNormal: 14.4,
          maxNormal: 21.4,
          lowWeight: 14.3,
          minOverweight: 21.5,
          maxOverweight: 24.1,
          Obesity: 24.2
        }, {
          grade: "五年级",
          gender: "女生",
          minNormal: 13.8,
          maxNormal: 20.5,
          lowWeight: 13.7,
          minOverweight: 20.6,
          maxOverweight: 22.9,
          Obesity: 23
        }, {
          grade: "六年级",
          gender: "男生",
          minNormal: 14.7,
          maxNormal: 21.8,
          lowWeight: 14.6,
          minOverweight: 21.9,
          maxOverweight: 24.5,
          Obesity: 24.6
        }, {
          grade: "六年级",
          gender: "女生",
          minNormal: 14.2,
          maxNormal: 20.8,
          lowWeight: 14.1,
          minOverweight: 20.9,
          maxOverweight: 23.6,
          Obesity: 23.7
        }],
        height: null,
        weight: null,
        bmi: null,
        gradeModel: this.grade,
        genderModel: this.gender,
        score: null,
        ballPosition: 0,
        suggestion: null
      };
    },
    methods: {
      getBmiStatus: function getBmiStatus(e, i, t) {
        var r = this.bmiReferences.find(function (t) {
          return t.grade === e && t.gender === i;
        });
        if (r) return t <= r.lowWeight ? (this.score = 80, "低体重") : t >= r.minNormal && t <= r.maxNormal ? (this.score = 100, "正常") : t >= r.minOverweight && t <= r.maxOverweight ? (this.score = 80, "超重") : t >= r.Obesity ? (this.score = 60, "肥胖") : void 0;
      },
      filteredReference: function filteredReference(e) {
        var _this = this;
        var i = this.bmiReferences.find(function (e) {
          return e.grade === _this.grade && e.gender === _this.gender;
        });
        return i ? i[e] : null;
      },
      onCalcByHeight: function onCalcByHeight(e) {
        var i = this.height = e.detail.value;
        this.weight && this.onCalcBmi(i);
      },
      onCalcByWeight: function onCalcByWeight(e) {
        var i = this.weight = e.detail.value;
        this.height && this.onCalcBmi(i);
      },
      onCalcBmi: function onCalcBmi(e) {
        if ("" == e) {
          this.bmi = null, this.score = null, this.suggestion = null;
          var _e = {
            name: "BMI",
            score: 0,
            weightingScore: 0
          };
          return void this.$emit("on-result", _e);
        }
        this.bmi = (this.weight / Math.pow(this.height / 100, 2)).toFixed(1);
        var i = this.getBmiStatus(this.grade, this.gender, this.bmi);
        this.setBallPosition(i), this.setSuggestion(i);
        var t = {
          name: "BMI",
          score: this.score,
          weightingScore: parseFloat((.15 * this.score).toFixed(1))
        };
        this.$emit("on-result", t);
      },
      setBallPosition: function setBallPosition(e) {
        this.ballPosition = "低体重" == e ? 10.5 : "正常" == e ? 35.5 : "超重" == e ? 60.5 : 85.5;
      },
      setSuggestion: function setSuggestion(e) {
        e && (this.suggestion = "低体重" == e ? "建议增强运动量，保证周3次以上中高强度运动，提升休息质量，促进营养吸收效果，从而达到增重效果。" : "正常" == e ? "非常好，注意保持运动习惯，促进身体健康发育。" : "超重" == e ? "每周保证3次以上，单次90min以上，中强度运动量，心率控制在120-140之间。同时注意饮食结构优化，增加蛋白质摄入，增加粗纤维碳水摄入，减少精制主食及脂肪摄入。" : "从调整饮食开始，每日少食，多餐。同时注意饮食结构优化，增加蛋白质摄入，增加粗纤维碳水摄入，减少精制主食及脂肪摄入。循序渐进增强运动强度，注意运动心率控制在140以下，每周3次以上，单次90min以上运动。");
      },
      onReset: function onReset() {
        this.height = null, this.weight = null, this.bmi = null, this.score = null, this.suggestion = null;
        this.$emit("on-result", {
          name: "BMI",
          score: 0,
          weightingScore: 0
        });
      }
    }
  };if (!Array) {
  e.resolveComponent("tui-input")();
}Math;var t = e._export_sfc(i, [["render", function (i, t, r, n, l, o) {
  return e.e({
    a: e.o(o.onCalcByHeight),
    b: e.o(function (e) {
      return l.height = e;
    }),
    c: e.p({
      placeholder: "输入身高",
      type: "digit",
      inputBorder: !0,
      isFillet: !0,
      padding: "6rpx 18rpx",
      size: "26",
      modelValue: l.height
    }),
    d: e.o(o.onCalcByWeight),
    e: e.o(function (e) {
      return l.weight = e;
    }),
    f: e.p({
      placeholder: "输入体重",
      type: "digit",
      inputBorder: !0,
      isFillet: !0,
      padding: "6rpx 16rpx",
      size: "26",
      modelValue: l.weight
    }),
    g: e.t(o.filteredReference("minNormal")),
    h: e.t(o.filteredReference("minOverweight")),
    i: e.t(o.filteredReference("Obesity")),
    j: null !== l.score
  }, null !== l.score ? {
    k: e.t(l.score),
    l: e.s("left: " + l.ballPosition + "%")
  } : {}, {
    m: null !== l.bmi
  }, null !== l.bmi ? {
    n: e.t(l.score),
    o: e.t(l.score),
    p: e.t((.15 * l.score).toFixed(1))
  } : {}, {
    q: l.suggestion
  }, l.suggestion ? {
    r: e.t(l.suggestion)
  } : {});
}]]);wx.createComponent(t);