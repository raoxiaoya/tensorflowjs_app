var e = require("./extned-rope-skipping.js"),
  a = require("./extend-jumping-jack.js"),
  n = require("./extend-high-knee.js"),
  r = require("./extend-sit-up.js"),
  i = require("./extend-push-up.js"),
  t = require("./extend-squat.js"),
  u = require("./extend-plank.js"),
  p = require("./extend-squat-horse.js"),
  s = require("./extend-sit-forward-bend.js"),
  k = requirePlugin("aiSport").sports.SportBase;[{
  key: e.RopeSkipping.KEY,
  name: e.RopeSkipping.NAME,
  _analyzer: e.RopeSkipping
}, {
  key: a.JumpingJack.KEY,
  name: a.JumpingJack.NAME,
  _analyzer: a.JumpingJack
}, {
  key: n.HighKnee.KEY,
  name: n.HighKnee.NAME,
  _analyzer: n.HighKnee
}, {
  key: r.SitUp.KEY,
  name: r.SitUp.NAME,
  _analyzer: r.SitUp
}, {
  key: i.PushUp.KEY,
  name: i.PushUp.NAME,
  _analyzer: i.PushUp
}, {
  key: t.Squat.KEY,
  name: t.Squat.NAME,
  _analyzer: t.Squat
}, {
  key: u.Plank.KEY,
  name: u.Plank.NAME,
  _analyzer: u.Plank
}, {
  key: p.SquatHorse.KEY,
  name: p.SquatHorse.NAME,
  _analyzer: p.SquatHorse
}, {
  key: s.SitForwardBend.KEY,
  name: s.SitForwardBend.NAME,
  _analyzer: s.SitForwardBend
}].forEach(function (e) {
  k.SPORTS.find(function (a) {
    return e.key === a.key;
  })._analyzer = e._analyzer;
});