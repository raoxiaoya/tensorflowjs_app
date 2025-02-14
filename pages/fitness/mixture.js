var t = require("../../common/vendor.js");var e = {
  getObesityMap: function getObesityMap() {
    return new t.EnumerationMap([{
      value: -10,
      text: "偏瘦",
      color: "#cf0000"
    }, {
      value: 0,
      text: "正常",
      color: "#4a9400"
    }, {
      value: 10,
      text: "偏重",
      color: "#ff5500"
    }, {
      value: 20,
      text: "肥胖",
      color: "#ff0000"
    }]);
  },
  formatSeconds: function formatSeconds(t) {
    return "".concat(parseInt(t / 60).toString().padStart(2, "0"), "'").concat((t % 60).toString().padStart(2, "0"), "\"");
  }
};exports.fitnessMixture = e;