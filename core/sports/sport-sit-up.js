var e=require("../../@babel/runtime/helpers/classCallCheck"),t=require("../../@babel/runtime/helpers/createClass"),l=require("../../@babel/runtime/helpers/possibleConstructorReturn"),r=require("../../@babel/runtime/helpers/get"),a=require("../../@babel/runtime/helpers/getPrototypeOf"),n=require("../../@babel/runtime/helpers/inherits");var i=require("../../utils/utils"),c=require("./sport-base"),s=require("../body-calc/calculator"),u=function(u){function h(t){var r,n,i,c;return e(this,h),n=this,c=[t],i=a(i=h),(r=l(n,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(i,c||[],a(n).constructor):i.apply(n,c)))._calculator=null,r.rules=null,r.stateTran=-1,r.view="side",r.tickMode=!0,r._calculator=new s,r._calculator.pointThreshold=r.pointThreshold,r.rules={},r.buildRules(),r}return n(h,c),t(h,[{key:"start",value:function(){r(a(h.prototype),"start",this).call(this),this._calculator.pointThreshold=this.pointThreshold}},{key:"buildRules",value:function(){this.rules.base=[{name:"全身需入镜",calc:"whole"},{name:"躺姿检查",calc:"$or",rules:[{name:"右边臀脚是水平连线检查",calc:"horizontal",leftKey:"right_hip",centerKey:null,rightKey:"right_ankle"},{name:"左边臀脚是水平连线检查",calc:"horizontal",leftKey:"left_hip",centerKey:null,rightKey:"left_ankle"}]},{name:"下肢弯曲检查",calc:"$or",rules:[{name:"检查左边躬角要求",calc:"match-angle",angleKey:"left_knee",secondKey:"left_hip",thirdKey:"left_ankle",angle:90,offset:20},{name:"检查右边躬角要求",calc:"match-angle",angleKey:"right_knee",secondKey:"right_hip",thirdKey:"right_ankle",angle:90,offset:20}]}],this.rules.lie={name:"是否进入躺姿",calc:"$or",rules:[{name:"左边脚、臀、肩是否为水平，即躺状态",calc:"horizontal",leftKey:"left_shoulder",centerKey:"left_hip",rightKey:"left_ankle"},{name:"左边脚、臀、肩是否为水平，即躺状态",calc:"horizontal",leftKey:"right_shoulder",centerKey:"right_hip",rightKey:"right_ankle"}]},this.rules.up={name:"上半身起角度检查",calc:"$or",rules:[{name:"左边臀、膝、肩夹角检查",calc:"match-angle",angleKey:"left_hip",secondKey:"left_shoulder",thirdKey:"left_knee",angle:35,offset:15},{name:"右边臀、膝、肩夹角检查",calc:"match-angle",angleKey:"right_hip",secondKey:"right_shoulder",thirdKey:"right_knee",angle:35,offset:15}]}}},{key:"pushing",value:function(e){this.isCounting&&!i.isNone(e)&&this._calculator.calculating(e,this.rules.base)&&(this._calculator.calculating(e,this.rules.lie)?this.stateTran=1:this._calculator.calculating(e,this.rules.up)&&1===this.stateTran&&(this.stateTran=-1,this.countTimes(),this.emitTick()))}}])}();u.KEY="Sit-Up",u.NAME="仰卧起坐",module.exports=u;