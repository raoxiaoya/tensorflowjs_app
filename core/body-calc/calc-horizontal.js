var e=require("../../@babel/runtime/helpers/possibleConstructorReturn"),t=require("../../@babel/runtime/helpers/getPrototypeOf"),r=require("../../@babel/runtime/helpers/inherits"),n=require("../../@babel/runtime/helpers/createClass"),i=require("../../@babel/runtime/helpers/classCallCheck");var l=require("../../utils/utils"),o=require("./calc-angle").CalcAngle,s=n((function e(){i(this,e),this.name="水平计算",this.calc="horizontal",this.leftKey=null,this.centerKey=null,this.rightKey=null,this.offset=15})),u=function(s){function u(r,n){var o,s,a,c;return i(this,u),l.isNone(r)||(o.threshold=r),s=this,c=[n],a=t(a=u),(o=e(s,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(a,c||[],t(s).constructor):a.apply(s,c))).threshold=15,o}return r(u,o),n(u,[{key:"isHorizontal",value:function(e,t,r,n,i){if(l.isNone(i)&&(i=this.threshold),!r){r="ref_center";var o=this.findPoint(e,t),s=this.findPoint(e,n);if(!o||!s)return!1;(e=l.clone(e)).push({y:Math.abs(s.y-o.y)/2+Math.min(s.y,o.y),x:Math.abs(s.x-o.x)/2+Math.min(s.x,o.x),score:1,name:r})}if(!this.matchAngle(e,r,t,n,180,i))return!1;var u=this.findPoint(e,r),a=this.findPoint(e,t),c=this.findPoint(e,n),h=l.clone(u);h.y=0;var f=this.angle(u,h,a);return!!this.isAngle(f,90,i)&&(f=this.angle(u,h,c),!!this.isAngle(f,90,i))}},{key:"judging",value:function(e,t){if(!t||"horizontal"!=t.calc)throw new Error("规则为空，或者配置的不是水平规则");try{if(!t.leftKey||!t.rightKey)throw new Error("leftKey、rightKey不能为空");return this.isHorizontal(e.keypoints,t.leftKey,t.centerKey,t.rightKey,t.offset)}catch(e){return console.warn("calc-horizontal",e),!1}}}])}();module.exports={CalcRuleHorizontal:s,CalcHorizontal:u};