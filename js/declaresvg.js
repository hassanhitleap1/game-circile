(function(){function a(a,b,c){this.el=a,a.remember("_paintHandler",this);var d=this,e=this.getPlugin();this.parent=a.parent(SVG.Nested)||a.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=null,this.startPoint=null,this.lastUpdateCall=null,this.options={};for(var f in this.el.draw.defaults)this.options[f]=this.el.draw.defaults[f],"undefined"!=typeof c[f]&&(this.options[f]=c[f]);e.point&&(e.pointPlugin=e.point,delete e.point);for(var f in e)this[f]=e[f];b||this.parent.on("click.draw",function(a){d.start(a)})}a.prototype.transformPoint=function(a,b){return this.p.x=a-(this.offset.x-window.pageXOffset),this.p.y=b-(this.offset.y-window.pageYOffset),this.p.matrixTransform(this.m)},a.prototype.start=function(a){var b=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset},this.options.snapToGrid*=Math.sqrt(this.m.a*this.m.a+this.m.b*this.m.b),this.startPoint=this.snapToGrid(this.transformPoint(a.clientX,a.clientY)),this.init&&this.init(a),this.el.fire("drawstart",{event:a,p:this.p,m:this.m}),SVG.on(window,"mousemove.draw",function(a){b.update(a)}),this.start=this.point},a.prototype.point=function(a){return this.point!=this.start?this.start(a):this.pointPlugin?this.pointPlugin(a):void this.stop(a)},a.prototype.stop=function(a){a&&this.update(a),this.clean&&this.clean(),SVG.off(window,"mousemove.draw"),this.parent.off("click.draw"),this.el.forget("_paintHandler"),this.el.draw=function(){},this.el.fire("drawstop")},a.prototype.update=function(a){!a&&this.lastUpdateCall&&(a=this.lastUpdateCall),this.lastUpdateCall=a,this.calc(a),this.el.fire("drawupdate",{event:a,p:this.p,m:this.m})},a.prototype.done=function(){this.calc(),this.stop(),this.el.fire("drawdone")},a.prototype.cancel=function(){this.stop(),this.el.remove(),this.el.fire("drawcancel")},a.prototype.snapToGrid=function(a){var b=null;if(a.length)return b=[a[0]%this.options.snapToGrid,a[1]%this.options.snapToGrid],a[0]-=b[0]<this.options.snapToGrid/2?b[0]:b[0]-this.options.snapToGrid,a[1]-=b[1]<this.options.snapToGrid/2?b[1]:b[1]-this.options.snapToGrid,a;for(var c in a)b=a[c]%this.options.snapToGrid,a[c]-=(b<this.options.snapToGrid/2?b:b-this.options.snapToGrid)+(0>b?this.options.snapToGrid:0);return a},a.prototype.param=function(a,b){this.options[a]=null===b?this.el.draw.defaults[a]:b,this.update()},a.prototype.getPlugin=function(){return this.el.draw.plugins[this.el.type]},SVG.extend(SVG.Element,{draw:function(b,c,d){b instanceof Event||"string"==typeof b||(c=b,b=null);var e=this.remember("_paintHandler")||new a(this,b,c||{});return b instanceof Event&&e.start(b),e[b]&&e[b](c,d),this}}),SVG.Element.prototype.draw.defaults={snapToGrid:1},SVG.Element.prototype.draw.extend=function(a,b){var c={};"string"==typeof a?c[a]=b:c=a;for(var d in c){var e=d.trim().split(/\s+/);for(var f in e)SVG.Element.prototype.draw.plugins[e[f]]=c[d]}},SVG.Element.prototype.draw.plugins={},SVG.Element.prototype.draw.extend("rect image",{init:function(a){var b=this.startPoint;this.el.attr({x:b.x,y:b.y,height:0,width:0})},calc:function(a){var b={x:this.startPoint.x,y:this.startPoint.y},c=this.transformPoint(a.clientX,a.clientY);b.width=c.x-b.x,b.height=c.y-b.y,this.snapToGrid(b),b.width<0&&(b.x=b.x+b.width,b.width=-b.width),b.height<0&&(b.y=b.y+b.height,b.height=-b.height),this.el.attr(b)}}),SVG.Element.prototype.draw.extend("line polyline polygon",{init:function(a){this.set=new SVG.Set;var b=this.startPoint,c=[[b.x,b.y],[b.x,b.y]];this.el.plot(c),this.drawCircles()},calc:function(a){var b=this.el.array().valueOf();if(b.pop(),a){var c=this.transformPoint(a.clientX,a.clientY);b.push(this.snapToGrid([c.x,c.y]))}this.el.plot(b)},point:function(a){if(this.el.type.indexOf("poly")>-1){var b=this.transformPoint(a.clientX,a.clientY),c=this.el.array().valueOf();return c.push(this.snapToGrid([b.x,b.y])),this.el.plot(c),this.drawCircles(),void this.el.fire("drawpoint",{event:a,p:{x:b.x,y:b.y},m:this.m})}this.stop(a)},clean:function(){this.set.each(function(){this.remove()}),this.set.clear(),delete this.set},drawCircles:function(){var a=this.el.array().valueOf();this.set.each(function(){this.remove()}),this.set.clear();for(var b=0;b<a.length;++b){this.p.x=a[b][0],this.p.y=a[b][1];var c=this.p.matrixTransform(this.parent.node.getScreenCTM().inverse().multiply(this.el.node.getScreenCTM()));this.set.add(this.parent.circle(5).stroke({width:1}).fill("#ccc").center(c.x,c.y))}}}),SVG.Element.prototype.draw.extend("circle",{init:function(a){var b=this.startPoint;this.el.attr({cx:b.x,cy:b.y,r:1})},calc:function(a){var b=this.transformPoint(a.clientX,a.clientY),c={cx:this.startPoint.x,cy:this.startPoint.y,r:Math.sqrt((b.x-this.startPoint.x)*(b.x-this.startPoint.x)+(b.y-this.startPoint.y)*(b.y-this.startPoint.y))};this.snapToGrid(c),this.el.attr(c)}}),SVG.Element.prototype.draw.extend("ellipse",{init:function(a){var b=this.startPoint;this.el.attr({cx:b.x,cy:b.y,rx:1,ry:1})},calc:function(a){var b=this.transformPoint(a.clientX,a.clientY),c={cx:this.startPoint.x,cy:this.startPoint.y,rx:Math.abs(b.x-this.startPoint.x),ry:Math.abs(b.y-this.startPoint.y)};this.snapToGrid(c),this.el.attr(c)}})}).call(this);


var height =window.screen.height;
var width= window.screen.width;
let sizeCiracle=17;
let distx=31;
let disty=30;
let stroke_width=2;
var answerOnePartOne=false;
var answerOnePartTwo=false;
var answerSecound=false;
var answerThared=false;
var mark=0;
var numberQustion=1;
var tryError=0;
let  nodeSelector = document.getElementsByClassName("g-node");

let a=[9,0,"a"];
var nodea;
let b=[11,2,"b"];
let nodeb;
let c=[11,4,"c"];
let nodec;
let d=[9,6,"d"];
let noded;
let e=[6,6,"e"];
let nodee;
let f=[4,4,"f"];
let nodef;
let g=[4,2,"g"];
let nodeg;
let h=[6,0,"h"];
let nodeh;
let p=[8,3,"p"];
let nodep;
let k=[5,9,"k"];
let nodek;
let l=[5,11,"l"];
let nodel;
let m=[1,11 ,"m"];
let nodem;
let n=[1,9,"n"];
let noden;
let x=[12,11,"x"];
let nodex;
let y=[12,9,"y"];
let nodey;
let w=[10,11,"w"];
let nodew;
let z=[10,9,"z"];
let nodez;

let hafone=[0,0,"hafone"];
let nodehafone;
let haftwo=[0,2,"haftwo"];
let nodehaftwo;
let hafthree=[2,0,"hafthree"];
let nodehafthree;
let haffour=[2,2,"haffour"];
let nodehaffour;
let haffive=[3,9,"haffive"];
let nodehaffive;
let hafsex=[3,11,"hafsex"];
let nodehafsex;



let ponitsFirstAnswer=[
    a,b,c,d,e,f,g,h,a
];

let ponitsSecoundAnswer=[
   k,l,m,n,k
];

let ponitsTheardAnswer=[
   x,w,y,z,x
 ];

let hafPoint=[
    [3,9],[3,11]
];

let allpoint=[
  a,b,c,d,e,f,g,h,p,k,l,m,n,x,w,y,z,hafone,haftwo,hafthree,haffour,haffive,hafsex
]

let tempArrayforSecoundQustion=[];


var svg = new SVG(document.querySelector(".graph")).size("100%","100%");

var nodes = svg.group();
var links = svg.group();
var markers = svg.group();
const shapes = [];
let index = 0;
let shape;
let pointsArray = Array();
let temp=Array();
