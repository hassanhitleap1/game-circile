(function(){function a(a,b,c){this.el=a,a.remember("_paintHandler",this);var d=this,e=this.getPlugin();this.parent=a.parent(SVG.Nested)||a.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=null,this.startPoint=null,this.lastUpdateCall=null,this.options={};for(var f in this.el.draw.defaults)this.options[f]=this.el.draw.defaults[f],"undefined"!=typeof c[f]&&(this.options[f]=c[f]);e.point&&(e.pointPlugin=e.point,delete e.point);for(var f in e)this[f]=e[f];b||this.parent.on("click.draw",function(a){d.start(a)})}a.prototype.transformPoint=function(a,b){return this.p.x=a-(this.offset.x-window.pageXOffset),this.p.y=b-(this.offset.y-window.pageYOffset),this.p.matrixTransform(this.m)},a.prototype.start=function(a){var b=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset},this.options.snapToGrid*=Math.sqrt(this.m.a*this.m.a+this.m.b*this.m.b),this.startPoint=this.snapToGrid(this.transformPoint(a.clientX,a.clientY)),this.init&&this.init(a),this.el.fire("drawstart",{event:a,p:this.p,m:this.m}),SVG.on(window,"mousemove.draw",function(a){b.update(a)}),this.start=this.point},a.prototype.point=function(a){return this.point!=this.start?this.start(a):this.pointPlugin?this.pointPlugin(a):void this.stop(a)},a.prototype.stop=function(a){a&&this.update(a),this.clean&&this.clean(),SVG.off(window,"mousemove.draw"),this.parent.off("click.draw"),this.el.forget("_paintHandler"),this.el.draw=function(){},this.el.fire("drawstop")},a.prototype.update=function(a){!a&&this.lastUpdateCall&&(a=this.lastUpdateCall),this.lastUpdateCall=a,this.calc(a),this.el.fire("drawupdate",{event:a,p:this.p,m:this.m})},a.prototype.done=function(){this.calc(),this.stop(),this.el.fire("drawdone")},a.prototype.cancel=function(){this.stop(),this.el.remove(),this.el.fire("drawcancel")},a.prototype.snapToGrid=function(a){var b=null;if(a.length)return b=[a[0]%this.options.snapToGrid,a[1]%this.options.snapToGrid],a[0]-=b[0]<this.options.snapToGrid/2?b[0]:b[0]-this.options.snapToGrid,a[1]-=b[1]<this.options.snapToGrid/2?b[1]:b[1]-this.options.snapToGrid,a;for(var c in a)b=a[c]%this.options.snapToGrid,a[c]-=(b<this.options.snapToGrid/2?b:b-this.options.snapToGrid)+(0>b?this.options.snapToGrid:0);return a},a.prototype.param=function(a,b){this.options[a]=null===b?this.el.draw.defaults[a]:b,this.update()},a.prototype.getPlugin=function(){return this.el.draw.plugins[this.el.type]},SVG.extend(SVG.Element,{draw:function(b,c,d){b instanceof Event||"string"==typeof b||(c=b,b=null);var e=this.remember("_paintHandler")||new a(this,b,c||{});return b instanceof Event&&e.start(b),e[b]&&e[b](c,d),this}}),SVG.Element.prototype.draw.defaults={snapToGrid:1},SVG.Element.prototype.draw.extend=function(a,b){var c={};"string"==typeof a?c[a]=b:c=a;for(var d in c){var e=d.trim().split(/\s+/);for(var f in e)SVG.Element.prototype.draw.plugins[e[f]]=c[d]}},SVG.Element.prototype.draw.plugins={},SVG.Element.prototype.draw.extend("rect image",{init:function(a){var b=this.startPoint;this.el.attr({x:b.x,y:b.y,height:0,width:0})},calc:function(a){var b={x:this.startPoint.x,y:this.startPoint.y},c=this.transformPoint(a.clientX,a.clientY);b.width=c.x-b.x,b.height=c.y-b.y,this.snapToGrid(b),b.width<0&&(b.x=b.x+b.width,b.width=-b.width),b.height<0&&(b.y=b.y+b.height,b.height=-b.height),this.el.attr(b)}}),SVG.Element.prototype.draw.extend("line polyline polygon",{init:function(a){this.set=new SVG.Set;var b=this.startPoint,c=[[b.x,b.y],[b.x,b.y]];this.el.plot(c),this.drawCircles()},calc:function(a){var b=this.el.array().valueOf();if(b.pop(),a){var c=this.transformPoint(a.clientX,a.clientY);b.push(this.snapToGrid([c.x,c.y]))}this.el.plot(b)},point:function(a){if(this.el.type.indexOf("poly")>-1){var b=this.transformPoint(a.clientX,a.clientY),c=this.el.array().valueOf();return c.push(this.snapToGrid([b.x,b.y])),this.el.plot(c),this.drawCircles(),void this.el.fire("drawpoint",{event:a,p:{x:b.x,y:b.y},m:this.m})}this.stop(a)},clean:function(){this.set.each(function(){this.remove()}),this.set.clear(),delete this.set},drawCircles:function(){var a=this.el.array().valueOf();this.set.each(function(){this.remove()}),this.set.clear();for(var b=0;b<a.length;++b){this.p.x=a[b][0],this.p.y=a[b][1];var c=this.p.matrixTransform(this.parent.node.getScreenCTM().inverse().multiply(this.el.node.getScreenCTM()));this.set.add(this.parent.circle(5).stroke({width:1}).fill("#ccc").center(c.x,c.y))}}}),SVG.Element.prototype.draw.extend("circle",{init:function(a){var b=this.startPoint;this.el.attr({cx:b.x,cy:b.y,r:1})},calc:function(a){var b=this.transformPoint(a.clientX,a.clientY),c={cx:this.startPoint.x,cy:this.startPoint.y,r:Math.sqrt((b.x-this.startPoint.x)*(b.x-this.startPoint.x)+(b.y-this.startPoint.y)*(b.y-this.startPoint.y))};this.snapToGrid(c),this.el.attr(c)}}),SVG.Element.prototype.draw.extend("ellipse",{init:function(a){var b=this.startPoint;this.el.attr({cx:b.x,cy:b.y,rx:1,ry:1})},calc:function(a){var b=this.transformPoint(a.clientX,a.clientY),c={cx:this.startPoint.x,cy:this.startPoint.y,rx:Math.abs(b.x-this.startPoint.x),ry:Math.abs(b.y-this.startPoint.y)};this.snapToGrid(c),this.el.attr(c)}})}).call(this);

var height =window.screen.height;
var width= window.screen.width;

let sizeCiracle=caculateSizeCiracle(height,width,35);

let distx=sizeDistX(80,height);
let disty=sizeDistY(70,width);

let stroke_width=2;

var answerOnePartOne=false;
var answerOnePartTwo=false;
var answerSecound=false;
var answerThared=false;
var mark=0;
var numberQustion=1;


function sizeDistX(x,height){
return Math.floor((x/height)*1000);
}

function sizeDistY(y,width){
    return Math.floor((y/width)*1000);
}
function caculateSizeCiracle(height,width,size){
   return Math.floor(((size/width)*1000)*1.2);
}


let  nodeSelector = document.getElementsByClassName("g-node");
let a=[9,0];
let b=[11,2];
let c=[11,4];
let d=[9,6];
let e=[6,6]
let f=[4,4];
let g=[4,2];
let h=[6,0];
let p=[8,3];
let k=[5,9];
let l=[5,11];
let m=[1,11];
let n=[1,9];
let x=[12,11];
let y=[12,9];
let w=[10,11];
let z=[10,9];


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

drowNods(distx,disty,sizeCiracle);

drowNodeCollering(nodes,distx,disty,sizeCiracle);

function drowNods(distx,disty,sizeCiracle) {
    x = 0;
    y = 0;

    for (let i = 0; i < 13; i++) {

        for (let j = 0; j < 13; j++) {

            var g = nodes.group().translate(x, y);
                    g.circle(sizeCiracle).fill("#437b11");
                    $("#" + g).addClass("g-node");
                    $("#" + g).attr("x", i);
                    $("#" + g).attr("y", j);
                    y += disty;
        }

        y = 0;
        x += distx;
    }
}

const getDrawObject = () => {
    shape = "mouse paint";
    var color = "#000000";
    const option = {
        stroke: color,
        'stroke-width': stroke_width,
        'fill-opacity': 0,
    };

    switch (shape) {
        case 'mouse paint':
            return svg.polyline().attr(option);
        case 'ellipse':
            return svg.ellipse().attr(option);
        case 'rect':
            return svg.rect().attr(option);
    }
    return null;
}




$("#drawing >> g[x]" ).mousedown(function() {
    const shape = getDrawObject();
      shapes[index] = shape;
      shape.draw(event);
      xDireaction=parseInt($(this).attr('x'));
      yDireaction=parseInt($(this).attr('y'));
      temp=[xDireaction,yDireaction]; 
      tempArrayforSecoundQustion.push(temp);
});



$("svg").mouseup(function(event) {
    elLeft=document.elementFromPoint(event.pageX, event.pageY+2);
    elRghit=document.elementFromPoint(event.pageX, event.pageY-2);
    try {
        if(elLeft.tagName=="circle" || elRghit.tagName=="circle"){
            shapes[index].draw('stop', event);
            if(elLeft.tagName=="circle"){
                xDireaction=parseInt(elLeft.parentElement.getAttribute('x'));
                yDireaction=parseInt(elLeft.parentElement.getAttribute('y')); 
            }else{
                xDireaction=parseInt(elRghit.parentElement.getAttribute('x'));
                yDireaction=parseInt(elRghit.parentElement.getAttribute('y'));
            }
            
        if(pointsArray.length==0){
            pointsArray.push(temp);
            pointsArray.push([xDireaction,yDireaction]);
        }else{
            if(pointsArray[pointsArray.length-1][0]==temp[0] && pointsArray[pointsArray.length-1][1]==temp[1] ){
                pointsArray.push([xDireaction,yDireaction]);
            }else{
                pointsArray.push(temp);
                pointsArray.push([xDireaction,yDireaction]); 
            }
           
    
        }   
            
        }else{
            shapes[index].draw('cancel', event);  
        }   

    } catch (error) {
        shapes[index].draw('cancel', event);   
    }

    tharedQuestion(ponitsTheardAnswer,pointsArray);
  
    if(numberQustion==3){
    
        secondQuestion(ponitsSecoundAnswer,pointsArray,hafPoint);  

    }else if(numberQustion==4){
        tharedQuestion(ponitsTheardAnswer,pointsArray);
    }
   
});




function distxFun(distx,x){
 return x * distx;
}

function distyFun(disty,y){
    return y * disty;
}


function drowNodeCollering(nodes,distx,disty,sizeCiracle){
   

var a = nodes.group().translate(distxFun(distx,9),distyFun(disty,0));
        a.circle(sizeCiracle).fill("#e8b900");
        $("#" + a).addClass("g-node");
        $("#" + a).attr("x", 9);
        $("#" + a).attr("y", 0);
        

var b = nodes.group().translate(distxFun(distx,11),distyFun(disty,2));
        b.circle(sizeCiracle).fill("#e8b900");  
        $("#" + b).addClass("g-node");
        $("#" + b).attr("x", 11);
        $("#" + b).attr("y", 2);

var c = nodes.group().translate(distxFun(distx,11),distyFun(disty,4));
        c.circle(sizeCiracle).fill("#e8b900"); 
        $("#" + c).addClass("g-node");
        $("#" + c).attr("x", 11);
        $("#" + c).attr("y", 4);               

var d = nodes.group().translate(distxFun(distx,9),distyFun(disty,6));
        d.circle(sizeCiracle).fill("#e8b900");
        $("#" + d).addClass("g-node");
        $("#" + d).attr("x", 9);
        $("#" + d).attr("y", 6);

var e = nodes.group().translate(distxFun(distx,6),distyFun(disty,6));
        e.circle(sizeCiracle).fill("#e8b900"); 
        $("#" + e).addClass("g-node");
        $("#" + e).attr("x", 6);
        $("#" + e).attr("y", 6);       


var f = nodes.group().translate(distxFun(distx,4),distyFun(disty,4));
        f.circle(sizeCiracle).fill("#e8b900");

        $("#" + f).addClass("g-node");
        $("#" + f).attr("x", 4);
        $("#" + f).attr("y", 4);

var g = nodes.group().translate(distxFun(distx,4),distyFun(disty,2));
        g.circle(sizeCiracle).fill("#e8b900");  

        $("#" + g).addClass("g-node");
        $("#" + g).attr("x",4);
        $("#" + g).attr("y", 2);

var h = nodes.group().translate(distxFun(distx,6),distyFun(disty,0));
        h.circle(sizeCiracle).fill("#e8b900");  

        $("#" + h).addClass("g-node");
        $("#" + h).attr("x", 6);
        $("#" + h).attr("y", 0);

var p = nodes.group().translate(distxFun(distx,8),distyFun(disty,3));
        p.circle(sizeCiracle).fill("#e8b900");

        $("#" + p).addClass("g-node");
        $("#" + p).attr("x", 8);
        $("#" + p).attr("y", 3);

var k = nodes.group().translate(distxFun(distx,5),distyFun(disty,9));
        k.circle(sizeCiracle).fill("#e8b900");

        $("#" + k).addClass("g-node");
        $("#" + k).attr("x", 5);
        $("#" + k).attr("y", 9);

var l = nodes.group().translate(distxFun(distx,5),distyFun(disty,11));
        l.circle(sizeCiracle).fill("#e8b900");
        $("#" + l).addClass("g-node");
        $("#" + l).attr("x", 5);
        $("#" + l).attr("y", 11);


var m = nodes.group().translate(distxFun(distx,1),distyFun(disty,11));
        m.circle(sizeCiracle).fill("#e8b900");  

        $("#" + m).addClass("g-node");
        $("#" + m).attr("x", 1);
        $("#" + m).attr("y", 11);

var n = nodes.group().translate(distxFun(distx,1),distyFun(disty,9));
        n.circle(sizeCiracle).fill("#e8b900");

        $("#" + n).addClass("g-node");
        $("#" + n).attr("x", 1);
        $("#" + n).attr("y", 9);
        
var x = nodes.group().translate(distxFun(distx,12),distyFun(disty,11));
        x.circle(sizeCiracle).fill("#e8b900");

        $("#" + x).addClass("g-node");
        $("#" + x).attr("x", 12);
        $("#" + x).attr("y", 11);

var y = nodes.group().translate(distxFun(distx,12),distyFun(disty,9));
        y.circle(sizeCiracle).fill("#e8b900");


        $("#" + y).addClass("g-node");
        $("#" + y).attr("x", 12);
        $("#" + y).attr("y", 9);

var w = nodes.group().translate(distxFun(distx,10),distyFun(disty,11));
        w.circle(sizeCiracle).fill("#e8b900");


        $("#" + w).addClass("g-node");
        $("#" + w).attr("x", 10);
        $("#" + w).attr("y", 11);



var z = nodes.group().translate(distxFun(distx,10),distyFun(disty,9));
        z.circle(sizeCiracle).fill("#e8b900");  

        $("#" + z).addClass("g-node");
        $("#" + z).attr("x", 10);
        $("#" + z).attr("y", 9);

        

}





function firstQuestionPartOne(ponitsFirstAnswer,pointsArray){
 
    var nodeTrue=0;
    for (let index = 0; index < pointsArray.length; index++) {
        
        if(
            (pointsArray[index][0]==ponitsFirstAnswer[index][0])  
            && 
            (pointsArray[index][1]==ponitsFirstAnswer[index][1])
        )
        {
            nodeTrue++;
          
        }
     
    }
 
        if(nodeTrue==9){
            
            return true;
        }
     


     return false;
    
   
}



function firstQuestionPartTwo(ponitsFirstAnswer,pointsArray,p,tempArrayforSecoundQustion){

    for (let i = 0; i < tempArrayforSecoundQustion.length; i++) {
        pointsArray.push(tempArrayforSecoundQustion[i])
    }

    pointsArray = pointsArray.filter(function(item) {
        if(!(item[0] == p[0] && item[1] == p[1])){
            return item;
        }
    });

    pointsArray = pointsArray.filter(function(item) {
        for (let index = 0; index < ponitsFirstAnswer.length; index++) {
       
            if( !
                item[0]==ponitsFirstAnswer[index][0]
                  &&
                  item[1]==ponitsFirstAnswer[index][1]
              )
              {
                 return item;
              
              }
        }

    });

    if(pointsArray.length==0){
        return true;
    }
    return false;
   
}

function secondQuestion(ponitsSecoundAnswer,pointsArray,hafPoint){
    var nodeTrue=0;
    console.log("pointsArray",pointsArray);
    for (let index = 0; index < pointsArray.length; index++) {
        
        if(
            (pointsArray[index][0]==ponitsSecoundAnswer[index][0])  
            && 
            (pointsArray[index][1]==ponitsSecoundAnswer[index][1])
        )
        {
            nodeTrue++;
            if(nodeTrue==5){
    
                console.log(nodeTrue);
                
                if(
                    ((pointsArray[pointsArray.length-1][0]==hafPoint[0][0])  && 
                    (pointsArray[pointsArray.length-1][1]==hafPoint[0][1]))
                    || 
                    ((pointsArray[pointsArray.length-2][0]==hafPoint[0][0])  && 
                    (pointsArray[pointsArray.length-2][1]==hafPoint[0][1]))
        
                )
                {
                    answerSecound=true;
                    console.log("answerSecound",answerSecound)
                    mark+=25;
                    pointsArray.length=0;
                    activeQustion(numberQustion++);
                    return true;
                }
        
            }  
        }
     
    }

    
     
     return false;
    
    
}





function tharedQuestion(ponitsTheardAnswer,pointsArray){
    console.log("pointsArray",pointsArray)
    
    if(! pointsArray[0][0]==0 && pointsArray[0][1]==0){
        return false
    }

    if(
        (pointsArray[1][0]==2 && pointsArray[1][1]==0)
        ||
        (pointsArray[1][0]==0 && pointsArray[1][1]==2)
    
    ){
     
        if(pointsArray[2][0]==2 && pointsArray[2][1]==2){
            if(pointsArray.length==5){
                console.log("thared",pointsArray)
                return true;
            }
        }

    }
    
    
    return false;
}

function inNode(ponitsFirstAnswer,arr){

    for (let index = 0; index < ponitsFirstAnswer.length; index++) {
        if(ponitsFirstAnswer[index][0]==arr[0] && ponitsFirstAnswer[index][1]==arr[1] ){
            console.log("arr in node",arr)
            return true;
        }
        
    }
    return false;
}





$("#first_answer").change(function(event) {
    answerOnePartOne= firstQuestionPartOne(ponitsFirstAnswer,pointsArray);
    
    if(answerOnePartOne){
        mark+=12.5;
        if($(this).val()=="octagon"){
            mark+=12.5;
        }
        
    }else if($(this).val()=="octagon"){
        mark+=12.5;
    }
    console.log("firstQuestionPartOne",firstQuestionPartOne);
    console.log("mark",mark);

    pointsArray.length=0;
    tempArrayforSecoundQustion.length=0;
    activeQustion(numberQustion++);

});


$("#secound_answer").change(function(event) {
    answerOnePartTwo= firstQuestionPartTwo(ponitsFirstAnswer,pointsArray,p,tempArrayforSecoundQustion);
    if(answerOnePartTwo ){
        mark+=12.5;
        if($(this).val()==8 ){
            mark+=12.5;
        }
    }else if($(this).val()=="octagon"){
        mark+=12.5;
      
    }
    console.log("answerOnePartTwo",answerOnePartTwo)
    console.log("mark",mark)
    activeQustion(numberQustion++);
    pointsArray.length=0;
    tempArrayforSecoundQustion.length=0;
});



function activeQustion(numberQustion){
    console.log("numberQustion",numberQustion)
    $(".list-group-item").removeClass("active");
    $($(".list-group-item")[numberQustion]).addClass("active");
}



