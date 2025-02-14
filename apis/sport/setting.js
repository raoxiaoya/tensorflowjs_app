var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var n = require("../../common/vendor.js"),
  t = new n.ApiRequest("sport/api/setting");function e(e) {
  return e = e || {}, e = n.utils.clone(e, {
    method: "GET",
    path: "/sports",
    options: {
      loading: !1,
      through: !0,
      caching: !0,
      cachingMaxAge: 1800
    }
  }), t.send(e);
}var s = {
  getBanners: function getBanners(e) {
    return e = e || {}, e = n.utils.clone(e, {
      method: "GET",
      path: "/banners",
      options: {
        loading: !1,
        through: !0,
        caching: !0,
        cachingMaxAge: 1800
      }
    }), t.send(e);
  },
  getSports: e,
  findSport: function () {
    var _findSport = _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee(n) {
      var t;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return e();
          case 2:
            t = _context.sent;
            return _context.abrupt("return", t.success ? t.result.find(function (t) {
              return t.key === n && t.enabled;
            }) : null);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function findSport(_x) {
      return _findSport.apply(this, arguments);
    }
    return findSport;
  }()
};exports.settingApi = s;