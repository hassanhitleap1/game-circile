
window.addEventListener("load", function () {
    var svgsh1 = new SVG(document.querySelector("#graph1")).size("100%", 100);

    var linkssh1 = svgsh1.group();
  
    
    drownNode(nodesh1);


       

});


function drowShape2(nodesh2,linkssh2,markerssh2){

        x=0;
        y=0;
        var g ;
        for (let i = 0; i < 8; i++) {
            for (let i2 = 0; i2 < 10; i2++) {
                 g = nodesh2.group().translate(x, y);
                g.circle(20).fill("#ff0000");
                y+=50;
            }
            x+=60;
            y=0;
        }

    var g1 = nodesh2.group().translate(240, 50);
            g1.circle(20).fill("#ffa500");

    var g2 = nodesh2.group().translate(120, 200);
            g2.circle(20).fill("#00651b");

    var g3 = nodesh2.group().translate(360, 200);
            g3.circle(20).fill("#00651b");
  
  
            
    g1.connectable({
                container: linkssh2,
                markers: markerssh2
            }, g2).setLineColor("#0000ff");  
    g2.connectable({
                container: linkssh2,
                markers: markerssh2
            }, g3).setLineColor("#0000ff");   
 
    g3.connectable({
                container: linkssh2,
                markers: markerssh2
            }, g1).setLineColor("#0000ff");        

}

function drowShape3(nodesh3,linkssh3,markerssh3){
        x=0;
        y=0;
        var g ;
        for (let i = 0; i < 8; i++) {
            for (let i2 = 0; i2 < 10; i2++) {
                 g = nodesh3.group().translate(x, y);
                g.circle(20).fill("#ff0000");
                y+=50;
            }
            x+=60;
            y=0;
        }
        var g1 = nodesh3.group().translate(60, 100);
            g1.circle(20).fill("#ffa500");

        var g2 = nodesh3.group().translate(360, 100);
            g2.circle(20).fill("#00651b");

        var g4 = nodesh3.group().translate(60, 200);
            g4.circle(20).fill("#00651b");   

         var g3 = nodesh3.group().translate(360, 200);
            g3.circle(20).fill("#00651b");
  
 
            
        g1.connectable({
                        container: linkssh3,
                        markers: markerssh3
                }, g2).setLineColor("#0000ff");  
        g2.connectable({
                        container: linkssh3,
                        markers: markerssh3
                }, g3).setLineColor("#0000ff");   
        g3.connectable({
                        container: linkssh3,
                        markers: markerssh3
                }, g4).setLineColor("#0000ff");   
        g4.connectable({
                        container: linkssh3,
                        markers: markerssh3
                }, g1).setLineColor("#0000ff");        

}


function drowShape4(nodesh4,linkssh4,markerssh4){
        x=0;
        y=0;
        var g ;
        for (let i = 0; i < 8; i++) {
            for (let i2 = 0; i2 < 10; i2++) {
                 g = nodesh4.group().translate(x, y);
                g.circle(20).fill("#ff0000");
                y+=50;
            }
            x+=60;
            y=0;
        }
        var g1 = nodesh4.group().translate(240, 50);
            g1.circle(20).fill("#ffa500");

        var g2 = nodesh4.group().translate(180, 50);
            g2.circle(20).fill("#00651b");

        var g3 = nodesh4.group().translate(60, 150);
            g3.circle(20).fill("#00651b");

        var g4 = nodesh4.group().translate(60, 200);
                g4.circle(20).fill("#00651b");

        var g5 = nodesh4.group().translate(180, 300);
            g5.circle(20).fill("#00651b");

        var g6 = nodesh4.group().translate(240, 300);
            g6.circle(20).fill("#00651b");

        var g7 = nodesh4.group().translate(360, 200);
            g7.circle(20).fill("#00651b");

        var g8 = nodesh4.group().translate(360, 150);
            g8.circle(20).fill("#00651b");

            
        g1.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g2).setLineColor("#0000ff"); 

        g2.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g3).setLineColor("#0000ff");   
 
        g3.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g4).setLineColor("#0000ff");  

        g4.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g5).setLineColor("#0000ff");    

        g5.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g6).setLineColor("#0000ff");  

        g6.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g7).setLineColor("#0000ff");   

        g7.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g8).setLineColor("#0000ff");  

        g8.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g1).setLineColor("#0000ff");    

}