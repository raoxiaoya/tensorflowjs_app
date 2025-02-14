var e = require("../../common/vendor.js"),
  t = new e.ApiRequest("sport/api/user-activity");var n = {
  get: function get(n) {
    return n = n || {}, n = e.utils.clone(n, {
      options: {
        caching: !0
      }
    }), t.get(n);
  },
  create: function create(e) {
    return t.post(e);
  },
  edit: function edit(e) {
    return t.put(e);
  },
  delete: function _delete(e) {
    return t.delete(e);
  },
  search: function search(n) {
    return n = n || {}, n = e.utils.clone(n, {
      method: "GET",
      path: "/search",
      options: {
        caching: !0
      }
    }), t.send(n);
  },
  toggleOnline: function toggleOnline(n) {
    n = n || {};
    var i = t.getParam(n, "id", !0);
    return n = e.utils.clone(n, {
      method: "PUT",
      path: "/toggle-online/".concat(i)
    }), t.send(n);
  }
};exports.userActivityApi = n;