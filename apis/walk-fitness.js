var _regeneratorRuntime2 = require("../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../@babel/runtime/helpers/asyncToGenerator");var t = require("../common/vendor.js"),
  e = require("./sport/fitness.js"),
  s = require("./sport/sport-record.js");function n(_x) {
  return _n.apply(this, arguments);
}function _n() {
  _n = _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3(e) {
    var s, n;
    return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return t.index.authorize({
            scope: "scope.werun"
          }).catch(function (t) {
            return !1;
          });
        case 2:
          s = _context3.sent;
          _context3.t0 = !s && e;
          if (!_context3.t0) {
            _context3.next = 8;
            break;
          }
          _context3.next = 7;
          return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
            var e;
            return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return t.index.showModal({
                    content: "您未授权访问微信运动步数。",
                    confirmText: "立即授权",
                    confirmColor: t.index.$theme.colorPrimary
                  });
                case 2:
                  e = _context2.sent;
                  _context2.t0 = !e.cancel;
                  if (!_context2.t0) {
                    _context2.next = 9;
                    break;
                  }
                  _context2.next = 7;
                  return t.wx$1.openSetting({
                    withSubscriptions: !1
                  });
                case 7:
                  e = _context2.sent;
                  _context2.t0 = !!e.authSetting["scope.werun"] || (t.index.showToast({
                    icon: "none",
                    title: "授权失败，请重新同步。"
                  }), !1);
                case 9:
                  return _context2.abrupt("return", _context2.t0);
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }))();
        case 7:
          s = _context3.sent;
        case 8:
          if (s) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", null);
        case 10:
          _context3.next = 12;
          return t.index.login().catch(function (t) {
            return !1;
          });
        case 12:
          s = _context3.sent;
          if (s) {
            _context3.next = 15;
            break;
          }
          return _context3.abrupt("return", null);
        case 15:
          n = s.code;
          _context3.next = 18;
          return t.index.getWeRunData({}).catch(function (t) {
            return null;
          });
        case 18:
          s = _context3.sent;
          if (!s) {
            _context3.next = 25;
            break;
          }
          _context3.next = 22;
          return t.wuserApi.getEncryptData({
            data: {
              loginCode: n,
              encryptData: s.encryptedData,
              iv: s.iv
            },
            options: {
              loading: !0,
              loadingText: "获取中..."
            }
          });
        case 22:
          _context3.t1 = _context3.sent.result;
          _context3.next = 26;
          break;
        case 25:
          _context3.t1 = null;
        case 26:
          return _context3.abrupt("return", _context3.t1);
        case 27:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _n.apply(this, arguments);
}var i = {
  getWerunSteps: n,
  syncingWeruns: function () {
    var _syncingWeruns = _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee(i, a) {
      var r, o, u, l, c, p, d;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            a = a || {}, a = t.utils.clone(a, {
              options: {
                loading: !0,
                loadingText: "同步中..."
              }
            });
            _context.next = 3;
            return n(i);
          case 3:
            r = _context.sent;
            if (r) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", null);
          case 6:
            o = r.stepInfoList;
            if (!(o.splice(0, o.length - 7), o = o.filter(function (t) {
              return t.step > 0;
            }), t.utils.isEmptyArray(o))) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", {
              success: !0,
              message: "同步成功。"
            });
          case 9:
            u = "Walk";
            _context.next = 12;
            return s.sportRecrodApi.getByUser({
              params: {
                pageIndex: 1,
                pageSize: 1,
                sportKey: u
              },
              options: a.options
            });
          case 12:
            l = _context.sent;
            c = null;
            p = 0;
            l.success && !t.utils.isEmptyArray(l.result.data) && (c = l.result.data[0], p = t.utils.formatDate(c.atTime, "yyyyMMdd"), p = parseInt(p));
            d = [];
            o.forEach(function (e) {
              var s = new Date(1e3 * e.timestamp),
                n = t.utils.formatDate(s, "yyyyMMdd");
              if (n = parseInt(n), n < p) return;
              var i = {
                atTime: t.utils.formatDate(s, "yyyy-MM-dd"),
                sportKey: u,
                counts: e.step,
                times: 0,
                userExtends: {
                  endTimestamp: r.watermark.timestamp,
                  endSteps: e.step
                }
              };
              if (p == n) {
                var _t = c.userExtends.endSteps;
                if (i.counts -= _t, i.counts < 10) return;
              }
              d.push(i);
            });
            if (!t.utils.isEmptyArray(d)) {
              _context.next = 22;
              break;
            }
            _context.t0 = {
              success: !0,
              message: "同步成功。"
            };
            _context.next = 26;
            break;
          case 22:
            _context.next = 24;
            return e.fitnessApi.syncing({
              data: d,
              options: a.options
            });
          case 24:
            l = _context.sent;
            _context.t0 = l;
          case 26:
            return _context.abrupt("return", _context.t0);
          case 27:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function syncingWeruns(_x2, _x3) {
      return _syncingWeruns.apply(this, arguments);
    }
    return syncingWeruns;
  }()
};exports.walkFitness = i;