var t=require("../@babel/runtime/helpers/classCallCheck"),i=require("../@babel/runtime/helpers/createClass"),e=function(){return i((function i(e,s,h){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(t(this,i),this.width=0,this.heigth=0,this.offsetX=0,this.offsetY=0,this.scaleRate=1,this.context=null,this.boneWidth=4,this.lineColor="#FF8E14",this.pointColor="#FF0000",this.leftColor=null,!e)throw new Error("context不能为空。");this.context=e,this.width=s,this.height=h,this.scaleRate=o}),[{key:"drawLine",value:function(t,i){var e=this.boneWidth/2,s=(t.x-e)*this.scaleRate,h=(t.y-e)*this.scaleRate,o=(i.x-e)*this.scaleRate,n=(i.y-e)*this.scaleRate;s+=this.offsetX,h+=this.offsetY,o+=this.offsetX,n+=this.offsetY,this.context.beginPath(),this.context.moveTo(s,h),this.context.lineTo(o,n),this.context.lineWidth=this.boneWidth,this.context.strokeStyle=this.lineColor,this.context.stroke(),this.context.restore()}},{key:"drawPoint",value:function(t){if(!t)throw new Error("point不能为空。");var i=this.boneWidth/2,e=(t.x-i)*this.scaleRate,s=(t.y-i)*this.scaleRate;e+=this.offsetX,s+=this.offsetY,this.context.beginPath(),this.context.arc(e,s,this.boneWidth,0,i*Math.PI,!1),this.context.lineWidth=2,this.context.strokeStyle="#FFFFEE",t.name.startsWith("left")?this.context.fillStyle=this.leftColor:this.context.fillStyle=this.pointColor,this.context.fill(),this.context.stroke(),this.context.restore()}},{key:"drawSkeleton",value:function(t){this.drawLine(t[0],t[1]),this.drawLine(t[0],t[2]),this.drawLine(t[1],t[3]),this.drawLine(t[2],t[4]),this.drawLine(t[10],t[8]),this.drawLine(t[8],t[6]),this.drawLine(t[6],t[5]),this.drawLine(t[5],t[7]),this.drawLine(t[7],t[9]),this.drawLine(t[6],t[12]),this.drawLine(t[12],t[11]),this.drawLine(t[11],t[5]),this.drawLine(t[12],t[14]),this.drawLine(t[14],t[16]),this.drawLine(t[11],t[13]),this.drawLine(t[13],t[15])}},{key:"drawing",value:function(t){if(this.context){this.leftColor||(this.leftColor=this.pointColor),this.clear(),this.drawSkeleton(t);for(var i=0;i<t.length;i++){var e=t[i];this.drawPoint(e)}}}},{key:"clear",value:function(){this.context&&this.context.clearRect(0,0,this.width,this.height)}}])}();module.exports=e;