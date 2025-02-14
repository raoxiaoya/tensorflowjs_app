var e = require("../../common/vendor.js"),
  t = new e.ApiRequest("sport/api/sport-record");var r = {
  get: function get(e) {
    return t.get(e);
  },
  getByUser: function getByUser(r) {
    return r = e.utils.clone(r, {
      method: "GET",
      path: "/by-user"
    }), t.send(r);
  },
  getByOwner: function getByOwner(r) {
    return r = e.utils.clone(r, {
      method: "GET",
      path: "/by-owner"
    }), t.send(r);
  }
};exports.sportRecrodApi = r;