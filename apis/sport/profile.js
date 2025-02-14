var e = require("../../common/vendor.js"),
  n = new e.ApiRequest("sport/api/profile");var t = {
  get: function get(t) {
    return t = t || {}, t = e.utils.clone(t, {
      method: "GET",
      path: null,
      options: {
        loading: !1,
        caching: !0,
        cachingMaxAge: 1800
      }
    }), n.send(t);
  },
  edit: function edit(e) {
    return n.post(e);
  }
};exports.fitnessProfileApi = t;