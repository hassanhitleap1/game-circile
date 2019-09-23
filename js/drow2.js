var svg = new SVG(document.querySelector(".graph")).size("100%",1000);


var nodes = svg.group();

var links = svg.group();


var markers = svg.group();


const shapes = [];


let index = 0;

let shape;

let pointsArray = Array();

let idG;


drowNods();

drowNodeCollering(nodes);


function drowNods() {
    x = 0;
    y = 0;

    for (let i = 0; i < 13; i++) {

        for (let i2 = 0; i2 < 13; i2++) {
            var g = nodes.group().translate(x, y);

            g.circle(35).fill("#437b11");
            $("#" + g).addClass("g-node");
            $("#" + g).attr("x", i);
            $("#" + g).attr("y", i2);
            y += 140;
        }
        y = 0;
        x += 150;
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



$("#drawing >> g[x]").mousedown(function() {
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



function drowNodeCollering(nodes){

var a = nodes.group().translate(60, 50);
        a.circle(20).fill("#e8b900");

var b = nodes.group().translate(300, 50);
        b.circle(20).fill("#e8b900");

var c = nodes.group().translate(60, 250);
        c.circle(20).fill("#e8b900");  

var d = nodes.group().translate(300, 250);
        d.circle(20).fill("#e8b900");

var e = nodes.group().translate(60, 50);
        e.circle(20).fill("#e8b900");

var f = nodes.group().translate(300, 50);
        f.circle(20).fill("#e8b900");

var g = nodes.group().translate(60, 250);
        g.circle(20).fill("#e8b900");  

var h = nodes.group().translate(300, 250);
        h.circle(20).fill("#e8b900");

var p = nodes.group().translate(60, 50);
        p.circle(20).fill("#e8b900");

var k = nodes.group().translate(300, 50);
        k.circle(20).fill("#e8b900");

var l = nodes.group().translate(300, 50);
        l.circle(20).fill("#e8b900");

var m = nodes.group().translate(300, 250);
        m.circle(20).fill("#e8b900");  

var n = nodes.group().translate(60, 250);
        n.circle(20).fill("#e8b900");
        
var x = nodes.group().translate(60, 50);
        x.circle(20).fill("#e8b900");

var y = nodes.group().translate(300, 50);
        y.circle(20).fill("#e8b900");

var w = nodes.group().translate(300, 50);
        w.circle(20).fill("#e8b900");

var z = nodes.group().translate(300, 250);
        z.circle(20).fill("#e8b900");  
        


      




}