let sizeCiracle=35;
let distx=80;
let disty=70;


var svg = new SVG(document.querySelector(".graph")).size("100%",1000);

var nodes = svg.group();
var links = svg.group();
var markers = svg.group();
const shapes = [];
let index = 0;
let shape;
let pointsArray = Array();
let idG;

drowNods(distx,disty,sizeCiracle);

drowNodeCollering(nodes,distx,disty,sizeCiracle);

function drowNods(distx,disty,sizeCiracle) {
    x = 0;
    y = 0;

    for (let i = 1; i <= 13; i++) {

        for (let j = 1; j <= 13; j++) {

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
    var color = "#dfe6e655";
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



$("#drawing").mousedown(function() {
    // console.log('mousedown circle');
    const shape = getDrawObject();
    shapes[index] = shape;
    shape.draw(event);


});


$("#drawing").mouseup(function(e) {
    if (typeof $(e.target).children().eq(1).closest("g")[0] == "undefined") {
        console.log(e.target.points)
    }
    if (shape === 'mouse paint') {
        shapes[index].draw('stop', event);

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
        

var b = nodes.group().translate(distxFun(distx,11),distyFun(disty,2));
        b.circle(sizeCiracle).fill("#e8b900");  

var c = nodes.group().translate(distxFun(distx,11),distyFun(disty,4));
        c.circle(sizeCiracle).fill("#e8b900");                

var d = nodes.group().translate(distxFun(distx,9),distyFun(disty,6));
        d.circle(sizeCiracle).fill("#e8b900");

var e = nodes.group().translate(distxFun(distx,6),distyFun(disty,6));
        e.circle(sizeCiracle).fill("#e8b900");        


var f = nodes.group().translate(distxFun(distx,4),distyFun(disty,4));
        f.circle(sizeCiracle).fill("#e8b900");

var g = nodes.group().translate(distxFun(distx,4),distyFun(disty,2));
        g.circle(sizeCiracle).fill("#e8b900");  

var h = nodes.group().translate(distxFun(distx,6),distyFun(disty,0));
        h.circle(sizeCiracle).fill("#e8b900");  

var p = nodes.group().translate(distxFun(distx,8),distyFun(disty,3));
        p.circle(sizeCiracle).fill("#e8b900");

var k = nodes.group().translate(distxFun(distx,5),distyFun(disty,9));
        k.circle(sizeCiracle).fill("#e8b900");

var l = nodes.group().translate(distxFun(distx,5),distyFun(disty,11));
        l.circle(sizeCiracle).fill("#e8b900");

var m = nodes.group().translate(distxFun(distx,1),distyFun(disty,9));
        m.circle(sizeCiracle).fill("#e8b900");  

var n = nodes.group().translate(distxFun(distx,1),distyFun(disty,11));
        n.circle(sizeCiracle).fill("#e8b900");
        
var x = nodes.group().translate(distxFun(distx,12),distyFun(disty,11));
        x.circle(sizeCiracle).fill("#e8b900");

var y = nodes.group().translate(distxFun(distx,12),distyFun(disty,9));
        y.circle(sizeCiracle).fill("#e8b900");

var w = nodes.group().translate(distxFun(distx,10),distyFun(disty,11));
        w.circle(sizeCiracle).fill("#e8b900");

var z = nodes.group().translate(distxFun(distx,10),distyFun(disty,9));
        z.circle(sizeCiracle).fill("#e8b900");  
        


      




}