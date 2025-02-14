var s = require("../../../common/vendor.js"),
  e = {
    name: "tipsMessager",
    options: {
      styleIsolation: "shared"
    },
    data: function data() {
      return {
        backgroundColor: null
      };
    },
    methods: {
      info: function info(e) {
        this.backgroundColor = s.index.$theme.colorBlue, this.$refs.msger.showTips(e);
      },
      success: function success(e) {
        this.backgroundColor = s.index.$theme.colorGreen, this.$refs.msger.showTips(e);
      },
      warning: function warning(e) {
        this.backgroundColor = s.index.$theme.colorWarning, this.$refs.msger.showTips(e);
      },
      error: function error(e) {
        this.backgroundColor = s.index.$theme.colorError, this.$refs.msger.showTips(e);
      },
      showMessage: function showMessage(s) {
        var e = {
          msg: s.message,
          duration: 3e3
        };
        s.success ? this.success(e) : this.error(e);
      }
    }
  };if (!Array) {
  s.resolveComponent("tui-tips")();
}Math;var o = s._export_sfc(e, [["render", function (e, o, r, t, n, i) {
  return {
    a: s.sr("msger", "01aeafb4-0"),
    b: s.p({
      backgroundColor: n.backgroundColor
    })
  };
}]]);wx.createComponent(o);