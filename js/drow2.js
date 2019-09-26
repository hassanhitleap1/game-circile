let sizeCiracle=35;
let distx=80;
let disty=70;
var answerOnePartOne=false;
var answerOnePartTwo=false;
var answerSecound=false;
var answerThared=false;

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
   x,w,y,z,
 ];
 
let hafPoint=[
    [3,9],[3,11]
];

var svg = new SVG(document.querySelector(".graph")).size("100%",1000);

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
        'stroke-width': 5,
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
      
     
});



$(document).mouseup(function(event) {
    elLeft=document.elementFromPoint(event.pageX, event.pageY+2);
    elRghit=document.elementFromPoint(event.pageX, event.pageY-2);
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
        pointsArray.push([xDireaction,yDireaction]);

    }    
 
        
    }else{
        shapes[index].draw('cancel', event);  
    }
    
    //  answerOnePartOne= firstQuestionPartOne(ponitsFirstAnswer,pointsArray);
    //  console.log(answerOnePartOne);
    console.log( firstQuestionPartTwo(ponitsFirstAnswer,pointsArray,p,temp));
  
    // answerSecound= secondQuestion(ponitsSecoundAnswer,pointsArray);

    //answerThared= tharedQuestion(ponitsTheardAnswer,pointsArray);
   
    
    
   
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
        $("#" + m).attr("y", 9);

var n = nodes.group().translate(distxFun(distx,1),distyFun(disty,9));
        n.circle(sizeCiracle).fill("#e8b900");

        $("#" + n).addClass("g-node");
        $("#" + n).attr("x", 1);
        $("#" + n).attr("y", 11);
        
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
            pointsArray.length=0;
            return true;
        }
     


     return false;
    
   
}




function firstQuestionPartTwo(ponitsFirstAnswer,pointsArray,p,temp){
    pointsArray.push(temp);
    for (let index = 0; index < pointsArray.length; index++) {
        if(pointsArray[index][0]==p[0] && pointsArray[index][1]==p[1] ){   
            pointsArray.splice(index, 1); 
        }
    }

    for (let index = 0; index < ponitsFirstAnswer.length; index++) {
        for (let indexJ = 0; indexJ < pointsArray.length; indexJ++) {

            if  (
                pointsArray[indexJ][0]==ponitsFirstAnswer[index][0]
                 &&
                pointsArray[indexJ][1]==ponitsFirstAnswer[index][1]
                )

            {
                pointsArray.splice(indexJ, 1); 
            }
            

        }
    }
    

    if(pointsArray.length==0){
        return true;
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

function secondQuestion(ponitsSecoundAnswer,pointsArray){
    for (let index = 0; index < pointsArray.length; index++) {
        if((pointsArray[index][0]==ponitsSecoundAnswer[index][0])  || (pointsArray[index][1]==ponitsSecoundAnswer[index][1])){
          if(pointsArray.length==9 )
          {
             pointsArray.length = 0;
             return true;
          }
        }
     }

     return false;
    
}


function tharedQuestion(ponitsTheardAnswer,pointsArray){
    
    var nodeTrue=0;
    for (let index = 0; index < pointsArray.length; index++) {
        
        if(
            (pointsArray[index][0]==ponitsTheardAnswer[index][0])  
            && 
            (pointsArray[index][1]==ponitsTheardAnswer[index][1])
        )
        {
            nodeTrue++;
          
        }
     
    }

        if(nodeTrue==4){
            return true;
        }
     


     return false;
    
}