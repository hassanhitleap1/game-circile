var svg = new SVG(document.querySelector(".graph")).size("100%", 400);


var nodes = svg.group();

var links = svg.group();


var markers = svg.group();


const shapes = [];


let index = 0;

let shape;


let pointsArray=Array();


let idG;


drowNods();

function drowNods() {
 x=0;
 y=0;

 for (let i = 0; i < 13; i++) {
    
     for (let i2 = 0; i2 < 13; i2++) {
         var g = nodes.group().translate(x, y);
         g.circle(35).fill("#437b11");
         $("#"+g).attr( "x", i);
         $("#"+g).attr( "y", i2);
         y+=140;
     }
     y=0;
     x+=150;
 }
}



const getDrawObject = () => {
  shape="mouse paint";
  var color="#dfe6e655";
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
// console.log('mousedown circle');
const shape = getDrawObject();
  shapes[index] = shape;
  shape.draw(event);
  xDireaction=$(this).attr('x');
  yDireaction=$(this).attr('y');
  if(!pointsArray.length){
    pointsArray=[[xDireaction,yDireaction]];
  }else{
    pointsArray.push([xDireaction,yDireaction]);
  }     
});


$("body,g,div" ).mouseup(function() {
    shape={};
    console.log()
     
    
});


$( "#drawing >> g[x]" ).mouseup(function() {
    
    if (shape === 'mouse paint') {
            try {
            shapes[index].draw('stop', event); 
          
            shapes=null;
          
     
            } catch (error) {
                
            }
            
        } 

        index++;  
});







$( "#drawing" ).mouseup(function() {
    //console.log('mouseup drawing');
        if (shape === 'mouse paint') {
            try {
                shapes[index].draw('stop', event); 
                // shapeObject=new  Shape(pointsArray);   
            } catch (error) {   
            }
        } else {
            if(!shape=='undefined'){
                shapes[index].draw(event);
            }
        }
        index++; 
});







$(document).ready(function () {
    $('#drawing4 >> g[x]').on('mouseup', function(event) {
   
        console.log('mouseup mouseup');
        

    }); 
});



