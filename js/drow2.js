drowNods(distx, disty, sizeCiracle);

function sizeDistX(x, height) {
    return Math.floor((x / height) * 1000);
}

function sizeDistY(y, width) {
    return Math.floor((y / width) * 1000);
}

function caculateSizeCiracle(height, width, size) {
    return Math.floor(((size / width) * 1000) * 1.2);
}


// whight #FFFFFF
nodeaaround = nodes.group().translate(distxFunAround(distx, 9), distyFunAround(disty, 0));
nodeaaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodeaaround).addClass("g-node");
$("#" + nodeaaround).attr("x", 9);
$("#" + nodeaaround).attr("y", 0);

nodea = nodes.group().translate(distxFun(distx, 9), distyFun(disty, 0));
nodea.circle(sizeCiracle).fill("#e8b900");
$("#" + nodea).addClass("g-node");
$("#" + nodea).attr("x", 9);
$("#" + nodea).attr("y", 0);
text = svg.text("A").translate(distxFun(distx, 9.5), distyFun(disty, 0));
$("#" + text.node.id).addClass("later");




nodebaround = nodes.group().translate(distxFunAround(distx, 11), distyFunAround(disty, 2));
nodebaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodebaround).addClass("g-node");
$("#" + nodebaround).attr("x", 11);
$("#" + nodebaround).attr("y", 2);

nodeb = nodes.group().translate(distxFun(distx, 11), distyFun(disty, 2));
nodeb.circle(sizeCiracle).fill("#e8b900");
$("#" + nodeb).addClass("g-node");
$("#" + nodeb).attr("x", 11);
$("#" + nodeb).attr("y", 2);
test = svg.text("B").translate(distxFun(distx, 11.5), distyFun(disty, 2))
$("#" + text.node.id).addClass("later");


nodecaround = nodes.group().translate(distxFunAround(distx, 11), distyFunAround(disty, 4));
nodecaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodecaround).addClass("g-node");
$("#" + nodecaround).attr("x", 11);
$("#" + nodecaround).attr("y", 4);

nodec = nodes.group().translate(distxFun(distx, 11), distyFun(disty, 4));
nodec.circle(sizeCiracle).fill("#e8b900");
$("#" + nodec).addClass("g-node");
$("#" + nodec).attr("x", 11);
$("#" + nodec).attr("y", 4);
test = svg.text("C").translate(distxFun(distx, 11.5), distyFun(disty, 4));
$("#" + text.node.id).addClass("later");


nodedaround = nodes.group().translate(distxFunAround(distx, 9), distyFunAround(disty, 6));
nodedaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodedaround).addClass("g-node");
$("#" + nodedaround).attr("x", 9);
$("#" + nodedaround).attr("y", 6);



noded = nodes.group().translate(distxFun(distx, 9), distyFun(disty, 6));
noded.circle(sizeCiracle).fill("#e8b900");
$("#" + noded).addClass("g-node");
$("#" + noded).attr("x", 9);
$("#" + noded).attr("y", 6);
test = svg.text("D").translate(distxFun(distx, 9.5), distyFun(disty, 6));
$("#" + text.node.id).addClass("later");

nodearound = nodes.group().translate(distxFunAround(distx, 6), distyFunAround(disty, 6));
nodearound.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodearound).addClass("g-node");
$("#" + nodearound).attr("x", 6);
$("#" + nodearound).attr("y", 6);


nodee = nodes.group().translate(distxFun(distx, 6), distyFun(disty, 6));
nodee.circle(sizeCiracle).fill("#e8b900");
$("#" + nodee).addClass("g-node");
$("#" + nodee).attr("x", 6);
$("#" + nodee).attr("y", 6);
test = svg.text("E").translate(distxFun(distx, 6.5), distyFun(disty, 6));
$("#" + text.node.id).addClass("later");


nodefaround = nodes.group().translate(distxFunAround(distx, 4), distyFunAround(disty, 4));
nodefaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodefaround).addClass("g-node");
$("#" + nodefaround).attr("x", 4);
$("#" + nodefaround).attr("y", 4);

nodef = nodes.group().translate(distxFun(distx, 4), distyFun(disty, 4));
nodef.circle(sizeCiracle).fill("#e8b900");
$("#" + nodef).addClass("g-node");
$("#" + nodef).attr("x", 4);
$("#" + nodef).attr("y", 4);
test = svg.text("F").translate(distxFun(distx, 4.5), distyFun(disty, 4));
$("#" + text.node.id).addClass("later");

nodegaround = nodes.group().translate(distxFunAround(distx, 4), distyFunAround(disty, 2));
nodegaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodegaround).addClass("g-node");
$("#" + nodegaround).attr("x", 4);
$("#" + nodegaround).attr("y", 2);


nodeg = nodes.group().translate(distxFun(distx, 4), distyFun(disty, 2));
nodeg.circle(sizeCiracle).fill("#e8b900");

$("#" + nodeg).addClass("g-node");
$("#" + nodeg).attr("x", 4);
$("#" + nodeg).attr("y", 2);
test = svg.text("G").translate(distxFun(distx, 4.5), distyFun(disty, 2));
$("#" + text.node.id).addClass("later");

nodeharound = nodes.group().translate(distxFunAround(distx, 6), distyFunAround(disty, 0));
nodeharound.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodeharound).addClass("g-node");
$("#" + nodeharound).attr("x", 6);
$("#" + nodeharound).attr("y", 0);

nodeh = nodes.group().translate(distxFun(distx, 6), distyFun(disty, 0));
nodeh.circle(sizeCiracle).fill("#e8b900");

$("#" + nodeh).addClass("g-node");
$("#" + nodeh).attr("x", 6);
$("#" + nodeh).attr("y", 0);
test = svg.text("H").translate(distxFun(distx, 6.5), distyFun(disty, 0));
$("#" + text.node.id).addClass("later");

nodeparound = nodes.group().translate(distxFunAround(distx, 8), distyFunAround(disty, 3));
nodeparound.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodeparound).addClass("g-node");
$("#" + nodeparound).attr("x", 8);
$("#" + nodeparound).attr("y", 3);

nodep = nodes.group().translate(distxFun(distx, 8), distyFun(disty, 3));
nodep.circle(sizeCiracle).fill("#e8b900");

$("#" + nodep).addClass("g-node");
$("#" + nodep).attr("x", 8);
$("#" + nodep).attr("y", 3);
test = svg.text("P").translate(distxFun(distx, 7.5), distyFun(disty, 3));
$("#" + text.node.id).addClass("later");

nodekaround = nodes.group().translate(distxFunAround(distx, 5), distyFunAround(disty, 9));
nodekaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodekaround).addClass("g-node");
$("#" + nodekaround).attr("x", 5);
$("#" + nodekaround).attr("y", 9);


nodek = nodes.group().translate(distxFun(distx, 5), distyFun(disty, 9));
nodek.circle(sizeCiracle).fill("#e8b900");

$("#" + nodek).addClass("g-node");
$("#" + nodek).attr("x", 5);
$("#" + nodek).attr("y", 9);
test = svg.text("K").translate(distxFun(distx, 5.5), distyFun(disty, 9));
$("#" + text.node.id).addClass("later");


nodelaround = nodes.group().translate(distxFunAround(distx, 5), distyFunAround(disty, 11));
nodelaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodelaround).addClass("g-node");
$("#" + nodelaround).attr("x", 5);
$("#" + nodelaround).attr("y", 11);

nodel = nodes.group().translate(distxFun(distx, 5), distyFun(disty, 11));
nodel.circle(sizeCiracle).fill("#e8b900");
$("#" + nodel).addClass("g-node");
$("#" + nodel).attr("x", 5);
$("#" + nodel).attr("y", 11);
test = svg.text("L").translate(distxFun(distx, 5.5), distyFun(disty, 11));
$("#" + text.node.id).addClass("later");


nodemaround = nodes.group().translate(distxFunAround(distx, 1), distyFunAround(disty, 11));
nodemaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodemaround).addClass("g-node");
$("#" + nodemaround).attr("x", 1);
$("#" + nodemaround).attr("y", 11);


nodem = nodes.group().translate(distxFun(distx, 1), distyFun(disty, 11));
nodem.circle(sizeCiracle).fill("#e8b900");

$("#" + nodem).addClass("g-node");
$("#" + nodem).attr("x", 1);
$("#" + nodem).attr("y", 11);
test = svg.text("M").translate(distxFun(distx, 1.5), distyFun(disty, 11));
$("#" + text.node.id).addClass("later");

nodenaround = nodes.group().translate(distxFunAround(distx, 1), distyFunAround(disty, 9));
nodenaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodenaround).addClass("g-node");
$("#" + nodenaround).attr("x", 1);
$("#" + nodenaround).attr("y", 9);

noden = nodes.group().translate(distxFun(distx, 1), distyFun(disty, 9));
noden.circle(sizeCiracle).fill("#e8b900");

$("#" + noden).addClass("g-node");
$("#" + noden).attr("x", 1);
$("#" + noden).attr("y", 9);
test = svg.text("N").translate(distxFun(distx, 1.5), distyFun(disty, 9));
$("#" + text.node.id).addClass("later");

nodexaround = nodes.group().translate(distxFunAround(distx, 12), distyFunAround(disty, 11));
nodexaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodexaround).addClass("g-node");
$("#" + nodexaround).attr("x", 12);
$("#" + nodexaround).attr("y", 11);

nodex = nodes.group().translate(distxFun(distx, 12), distyFun(disty, 11));
nodex.circle(sizeCiracle).fill("#e8b900");

$("#" + nodex).addClass("g-node");
$("#" + nodex).attr("x", 12);
$("#" + nodex).attr("y", 11);
test = svg.text("X").translate(distxFun(distx, 11.5), distyFun(disty, 11));
$("#" + text.node.id).addClass("later");


nodeyaround = nodes.group().translate(distxFunAround(distx, 12), distyFunAround(disty, 9));
nodeyaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodeyaround).addClass("g-node");
$("#" + nodeyaround).attr("x", 12);
$("#" + nodeyaround).attr("y", 9);

nodey = nodes.group().translate(distxFun(distx, 12), distyFun(disty, 9));
nodey.circle(sizeCiracle).fill("#e8b900");
$("#" + nodey).addClass("g-node");
$("#" + nodey).attr("x", 12);
$("#" + nodey).attr("y", 9);
test = svg.text("Y").translate(distxFun(distx, 11.5), distyFun(disty, 9));
$("#" + text.node.id).addClass("later");

nodewaround = nodes.group().translate(distxFunAround(distx, 10), distyFunAround(disty, 11));
nodewaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodewaround).addClass("g-node");
$("#" + nodewaround).attr("x", 10);
$("#" + nodewaround).attr("y", 11);


nodew = nodes.group().translate(distxFun(distx, 10), distyFun(disty, 11));
nodew.circle(sizeCiracle).fill("#e8b900");
$("#" + nodew).addClass("g-node");
$("#" + nodew).attr("x", 10);
$("#" + nodew).attr("y", 11);
test = svg.text("W").translate(distxFun(distx, 9.5), distyFun(disty, 11));
$("#" + text.node.id).addClass("later");



nodezaround = nodes.group().translate(distxFunAround(distx, 10), distyFunAround(disty, 9));
nodezaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodezaround).addClass("g-node");
$("#" + nodezaround).attr("x", 10);
$("#" + nodezaround).attr("y", 9);

nodez = nodes.group().translate(distxFun(distx, 10), distyFun(disty, 9));
nodez.circle(sizeCiracle).fill("#e8b900");

$("#" + nodez).addClass("g-node");
$("#" + nodez).attr("x", 10);
$("#" + nodez).attr("y", 9);
test = svg.text("Z").translate(distxFun(distx, 9.5), distyFun(disty, 9));
$("#" + text.node.id).addClass("later");

nodefromaround = nodes.group().translate(distxFunAround(distx, 0), distyFunAround(disty, 0));
nodefromaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodefromaround).addClass("g-node");
$("#" + nodefromaround).attr("x", 0);
$("#" + nodefromaround).attr("y", 0);


var nodesfrom = nodes.group().translate(distxFun(distx, 0), distyFun(disty, 0));
nodesfrom.circle(sizeCiracle).fill("#036fe2");
$("#" + nodesfrom).addClass("g-node");
$("#" + nodesfrom).attr("x", 0);
$("#" + nodesfrom).attr("y", 0);




nodehafone = nodes.group().translate(distxFun(distx, hafone[0]), distyFun(disty, hafone[1]));
nodehafone.circle(sizeCiracle).fill("#2534f3");

$("#" + nodehafone).addClass("g-node");
$("#" + nodehafone).attr("x", hafone[0]);
$("#" + nodehafone).attr("y", hafone[1]);

nodefromaround = nodes.group().translate(distxFunAround(distx, haftwo[0]), distyFunAround(disty, haftwo[1]));
nodefromaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodefromaround).addClass("g-node");
$("#" + nodefromaround).attr("x", haftwo[0]);
$("#" + nodefromaround).attr("y", haftwo[1]);

nodehaftwo = nodes.group().translate(distxFun(distx, haftwo[0]), distyFun(disty, haftwo[1]));
nodehaftwo.circle(sizeCiracle).fill("#437b11");
$("#" + nodehaftwo).addClass("g-node");
$("#" + nodehaftwo).attr("x", haftwo[0]);
$("#" + nodehaftwo).attr("y", haftwo[1]);


nodehafthreearound = nodes.group().translate(distxFunAround(distx, hafthree[0]), distyFunAround(disty, hafthree[1]));
nodehafthreearound.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodehafthreearound).addClass("g-node");
$("#" + nodehafthreearound).attr("x", hafthree[0]);
$("#" + nodehafthreearound).attr("y", hafthree[1]);



nodehafthree = nodes.group().translate(distxFun(distx, hafthree[0]), distyFun(disty, hafthree[1]));
nodehafthree.circle(sizeCiracle).fill("#437b11");

$("#" + nodehafthree).addClass("g-node");
$("#" + nodehafthree).attr("x", hafthree[0]);
$("#" + nodehafthree).attr("y", hafthree[1]);



nodehaffouraround = nodes.group().translate(distxFunAround(distx, haffour[0]), distyFunAround(disty, haffour[1]));
nodehaffouraround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodehaffouraround).addClass("g-node");
$("#" + nodehaffouraround).attr("x", haffour[0]);
$("#" + nodehaffouraround).attr("y", haffour[1]);


nodehaffour = nodes.group().translate(distxFun(distx, haffour[0]), distyFun(disty, haffour[1]));
nodehaffour.circle(sizeCiracle).fill("#437b11");

$("#" + nodehaffour).addClass("g-node");
$("#" + nodehaffour).attr("x", haffour[0]);
$("#" + nodehaffour).attr("y", haffour[1]);


nodehaffivearound = nodes.group().translate(distxFunAround(distx, haffive[0]), distyFunAround(disty, haffive[1]));
nodehaffivearound.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodehaffivearound).addClass("g-node");
$("#" + nodehaffivearound).attr("x", haffive[0]);
$("#" + nodehaffivearound).attr("y", haffive[1]);

nodehaffive = nodes.group().translate(distxFun(distx, haffive[0]), distyFun(disty, haffive[1]));
nodehaffive.circle(sizeCiracle).fill("#437b11");

$("#" + nodehaffive).addClass("g-node");
$("#" + nodehaffive).attr("x", haffive[0]);
$("#" + nodehaffive).attr("y", haffive[1]);

nodehafsexaround = nodes.group().translate(distxFunAround(distx, hafsex[0]), distyFunAround(disty, hafsex[1]));
nodehafsexaround.circle(sizeCiracleAround).fill("#FFFFFF");
$("#" + nodehafsexaround).addClass("g-node");
$("#" + nodehafsexaround).attr("x", hafsex[0]);
$("#" + nodehafsexaround).attr("y", hafsex[1]);


nodehafsex = nodes.group().translate(distxFun(distx, hafsex[0]), distyFun(disty, hafsex[1]));
nodehafsex.circle(sizeCiracle).fill("#437b11");

$("#" + nodehafsex).addClass("g-node");
$("#" + nodehafsex).attr("x", hafsex[0]);
$("#" + nodehafsex).attr("y", hafsex[1]);




function drowNods(distx, disty, sizeCiracle) {
    x = 0;
    y = 0;

    for (let i = 0; i < 13; i++) {

        for (let j = 0; j < 13; j++) {

            var g = nodes.group().translate(x, y);
            g.circle(sizeCiracle).fill("#6b6b6b");
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




$(document).on('touchstart', '#drawing >> g[x]', function(event) {

    try {
        const shape = getDrawObject();
        shapes[index] = shape;
        shape.draw(event.changedTouches[0]);
        xDireaction = parseInt($(this).attr('x'));
        yDireaction = parseInt($(this).attr('y'));
        temp = [xDireaction, yDireaction];
        tempArrayforSecoundQustion.push(temp);

    } catch (error) {
        console.log("error", error);

    }

});

$(document).on('touchmove', 'svg', function(event) {
    if (shape === 'mouse paint' && shapes[index]) {
        shapes[index].draw('point', event.changedTouches[0]);
    }

});




$(document).on('touchend', 'svg', function(event) {
    try {
        event.preventDefault();
        shapes[index].draw('cancel', event);

        elemant = document.elementFromPoint(event.originalEvent.changedTouches[0].pageX, event.originalEvent.changedTouches[0].pageY);

        console.log("elemant", elemant);


        xDireaction = parseInt(elemant.parentElement.getAttribute('x'));
        yDireaction = parseInt(elemant.parentElement.getAttribute('y'));
        if (!(isNaN(xDireaction) || isNaN(yDireaction))) {

            if (numberQustion == 1) {

                pushArrayPoint(temp, [xDireaction, yDireaction], ponitsFirstAnswer, links, markers, pointsArray);
                drowPath(temp, [xDireaction, yDireaction], ponitsFirstAnswer, links, markers, pointsArray);
                console.log("tryError", tryError)

            } else if (numberQustion == 2) {
                points = ponitsFirstAnswer;
                points.push(p);

                pushArrayPoint(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                drowPath(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                console.log("tryError", tryError)

            } else if (numberQustion == 3) {
                points = ponitsSecoundAnswer;
                points.push(haffive);
                points.push(hafsex);
                pushArrayPoint(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                drowPath(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                secondQuestion(ponitsSecoundAnswer, pointsArray, hafPoint);
                console.log("tryError", tryError)

            } else if (numberQustion == 4) {
                points = [hafone, haftwo, hafthree, haffour];
                pushArrayPoint(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                drowPath(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                tharedQuestion(ponitsTheardAnswer, pointsArray, tryError);
                console.log("tryError", tryError)
            }
            temp = [];
        }

    } catch (error) {
        temp = [];
        console.log("error", error);

    }

});




$("#drawing >> g[x]").mousedown(function() {
    try {
        const shape = getDrawObject();
        shapes[index] = shape;
        shape.draw(event);
        xDireaction = parseInt($(this).attr('x'));
        yDireaction = parseInt($(this).attr('y'));
        temp = [xDireaction, yDireaction];
        tempArrayforSecoundQustion.push(temp);
    } catch (error) {
        console.log("error", error);

    }

});



$("svg").mouseup(function(event) {
    elLeft = document.elementFromPoint(event.pageX, event.pageY + 2);
    elRghit = document.elementFromPoint(event.pageX, event.pageY - 2);

    try {
        if (elLeft.tagName == "circle" || elRghit.tagName == "circle") {
            shapes[index].draw('cancel', event);

            if (elLeft.tagName == "circle") {
                xDireaction = parseInt(elLeft.parentElement.getAttribute('x'));
                yDireaction = parseInt(elLeft.parentElement.getAttribute('y'));
            } else {
                xDireaction = parseInt(elRghit.parentElement.getAttribute('x'));
                yDireaction = parseInt(elRghit.parentElement.getAttribute('y'));
            }
            if (shapes[index] != 'undefined') {
                if (numberQustion == 1) {

                    pushArrayPoint(temp, [xDireaction, yDireaction], ponitsFirstAnswer, links, markers, pointsArray);
                    drowPath(temp, [xDireaction, yDireaction], ponitsFirstAnswer, links, markers, pointsArray);
                    console.log("tryError", tryError)

                } else if (numberQustion == 2) {
                    points = ponitsFirstAnswer;
                    points.push(p);

                    pushArrayPoint(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                    drowPath(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                    console.log("tryError", tryError)

                } else if (numberQustion == 3) {
                    points = ponitsSecoundAnswer;
                    points.push(haffive);
                    points.push(hafsex);
                    pushArrayPoint(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                    drowPath(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                    secondQuestion(ponitsSecoundAnswer, pointsArray, hafPoint);
                    console.log("tryError", tryError)

                } else if (numberQustion == 4) {
                    points = [hafone, haftwo, hafthree, haffour];
                    pushArrayPoint(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                    drowPath(temp, [xDireaction, yDireaction], points, links, markers, pointsArray);
                    tharedQuestion(ponitsTheardAnswer, pointsArray, tryError);
                    console.log("tryError", tryError)
                }
            }

            temp = [];

        } else {
            temp = [];
            shapes[index].draw('cancel', event);
        }

    } catch (error) {

        console.log(error);
    }



});




function distxFun(distx, x) {
    return x * distx;
}

function distyFun(disty, y) {
    return y * disty;
}

function distxFunAround(distx, x) {
    return x * distx - 10;
}

function distyFunAround(disty, y) {
    return y * disty - 9;
}

function firstQuestionPartOne(ponitsFirstAnswer, pointsArray, tryError) {



    var nodeTrue = 0;
    try {
        for (let index = 0; index < pointsArray.length; index++) {

            if (
                (pointsArray[index][0] == ponitsFirstAnswer[index][0]) &&
                (pointsArray[index][1] == ponitsFirstAnswer[index][1])
            ) {
                nodeTrue++;

            } else {

            }

        }

        if (nodeTrue == 9) {

            return true;
        }



        return false;

    } catch (error) {
        console.log(error);

    }

}



function firstQuestionPartTwo(ponitsFirstAnswer, pointsArray, p, tempArrayforSecoundQustion) {

    for (let i = 0; i < tempArrayforSecoundQustion.length; i++) {
        pointsArray.push(tempArrayforSecoundQustion[i])
    }

    pointsArray = pointsArray.filter(function(item) {
        if ((item[0] != p[0] || item[1] != p[1])) {
            return item;
        }
    });

    pointsArray = pointsArray.filter(function(item) {
        if ((item[0] != ponitsFirstAnswer[0][0] || item[1] != ponitsFirstAnswer[0][1])) {
            return item;
        }
    });

    pointsArray = pointsArray.filter(function(item) {
        if ((item[0] != ponitsFirstAnswer[1][0] || item[1] != ponitsFirstAnswer[1][1])) {
            return item;
        }
    });
    pointsArray = pointsArray.filter(function(item) {
        if ((item[0] != ponitsFirstAnswer[2][0] || item[1] != ponitsFirstAnswer[2][1])) {
            return item;
        }
    });
    pointsArray = pointsArray.filter(function(item) {
        if ((item[0] != ponitsFirstAnswer[3][0] || item[1] != ponitsFirstAnswer[3][1])) {
            return item;
        }
    });
    pointsArray = pointsArray.filter(function(item) {
        if ((item[0] != ponitsFirstAnswer[4][0] || item[1] != ponitsFirstAnswer[4][1])) {
            return item;
        }
    });
    pointsArray = pointsArray.filter(function(item) {
        if ((item[0] != ponitsFirstAnswer[5][0] || item[1] != ponitsFirstAnswer[5][1])) {
            return item;
        }
    });
    pointsArray = pointsArray.filter(function(item) {
        if ((item[0] != ponitsFirstAnswer[6][0] || item[1] != ponitsFirstAnswer[6][1])) {
            return item;
        }
    });
    pointsArray = pointsArray.filter(function(item) {
        if ((item[0] != ponitsFirstAnswer[7][0] || item[1] != ponitsFirstAnswer[7][1])) {
            return item;
        }
    });


    if (pointsArray.length == 0) {
        return true;
    }
    return false;

}

function secondQuestion(ponitsSecoundAnswer, pointsArray, hafPoint) {
    var nodeTrue = 0;

    for (let index = 0; index < pointsArray.length; index++) {

        if (
            (pointsArray[index][0] == ponitsSecoundAnswer[index][0]) &&
            (pointsArray[index][1] == ponitsSecoundAnswer[index][1])
        ) {
            nodeTrue++;
            if (nodeTrue == 5) {



                if (
                    ((pointsArray[pointsArray.length - 1][0] == hafPoint[0][0]) &&
                        (pointsArray[pointsArray.length - 1][1] == hafPoint[0][1])) ||
                    ((pointsArray[pointsArray.length - 2][0] == hafPoint[0][0]) &&
                        (pointsArray[pointsArray.length - 2][1] == hafPoint[0][1]))

                ) {
                    answerSecound = true;

                    mark += 25;
                    pointsArray.length = 0;
                    activeQustion(numberQustion++);
                    return true;
                }

            }
        }

    }



    return false;


}




function tharedQuestion(ponitsTheardAnswer, pointsArray, tryError) {


    if (!pointsArray[0][0] == 0 && pointsArray[0][1] == 0) {
        return false
    }

    if (
        (pointsArray[1][0] == 2 && pointsArray[1][1] == 0) ||
        (pointsArray[1][0] == 0 && pointsArray[1][1] == 2)

    ) {

        if (pointsArray[2][0] == 2 && pointsArray[2][1] == 2) {
            if (pointsArray.length == 5) {
                mark += 25;
                mark = mark - tryError;
                showMessge(mark)
                return true;
            }
        }

    }

    if (pointsArray.length > 5 || tryError > 10) {
        mark = mark - tryError;
        showMessge(mark)
        return false;
    }


    return false;
}

function inNode(ponitsFirstAnswer, arr) {

    for (let index = 0; index < ponitsFirstAnswer.length; index++) {
        if (ponitsFirstAnswer[index][0] == arr[0] && ponitsFirstAnswer[index][1] == arr[1]) {

            return true;
        }

    }
    return false;
}




$("#first_answer").change(function(e) {
    console.log("e.target.tagName", e.target.tagName);

    answerOnePartOne = firstQuestionPartOne(ponitsFirstAnswer, pointsArray);

    if (answerOnePartOne) {
        mark += 12.5;
        if ($(this).val() == "octagon") {
            mark += 12.5;
        }

    } else if ($(this).val() == "octagon") {
        mark += 12.5;
    }

    // $(this).prop('disabled', true);
    pointsArray.length = 0;
    tempArrayforSecoundQustion.length = 0;
    if (numberQustion == 1) {
        activeQustion(numberQustion++);
    }


});


$("#secound_answer").change(function(e) {

    if (e.target.tagName !== "SELECT") return;

    answerOnePartTwo = firstQuestionPartTwo(ponitsFirstAnswer, pointsArray, p, tempArrayforSecoundQustion);
    if (answerOnePartTwo) {
        mark += 12.5;
        if ($(this).val() == 8) {
            mark += 12.5;
        }
    } else if ($(this).val() == 8) {
        mark += 12.5;

    }
    if (numberQustion == 2) {
        activeQustion(numberQustion++);
    }

    pointsArray.length = 0;
    tempArrayforSecoundQustion.length = 0;
    //   $(this).prop('disabled', true);
});



function activeQustion(numberQustion) {

    $(".list-group-item").removeClass("active");
    $($(".list-group-item")[numberQustion]).addClass("active");
}



function showMessge(per) {

    /// WHEN EMAOT marks

    clearInterval(SetTimerScorm);
    SetTimerScorm = null;
    Result = 'unknown';
    mark = 0;
    if (per <= 100 && per >= 80) {
        window.parent.showBookMsg("Well done", "<span style='display: block;font-size: 2vmin;'>Your result is</span ><span style='font-size: 2vmin;font-weight: bold;'>%" + per + "</span>", window.parent.$('iframe[src="' + window.location.href + '"]').closest(".element").attr("id"));
        Result = 'passed';
    } else if (per <= 79 && per >= 50) {
        window.parent.showBookMsg("Good", "<span style='display: block;font-size: 2vmin;'>Your result is</span ><span style='font-size: 2vmin;font-weight: bold;'>%" + per + "</span>", window.parent.$('iframe[src="' + window.location.href + '"]').closest(".element").attr("id"));
        Result = 'passed';
    } else {
        window.parent.showBookMsg("Try again", "<span style='display: block;font-size: 2vmin;'>Your result is</span ><span style='font-size: 2vmin;font-weight: bold;'>%" + per + "</span>", window.parent.$('iframe[src="' + window.location.href + '"]').closest(".element").attr("id"));
        Result = 'failed';
    }


    if (LMSStatus) {
        API.SetValue("cmi.score.raw", per.toFixed(2)); //return text true or false | to set student mark
        API.SetValue("cmi.completion_status", "completed"); //when complete game
        API.SetValue("cmi.success_status", Result); //when complete game set value to one of ("passed","failed","unknown")
        API.SetValue("cmi.session_time", TimeScorm); //to set Amount of seconds that the learner has spent
        API.Commit(""); //return text true or false | to save student mark to DB
    }
    TimeScorm = 0;




}

function drowPath(temp, pointUp, allpoint, links, markers, pointsArray) {

    let tempTrue = false;
    let pointUpTrue = false;
    let nodeTemp = null;
    let nodePointUp = null;
    if (pointUp[0] == temp[0] && pointUp[1] == temp[1]) {
        return;
    }
    for (var i = 0; i < allpoint.length; i++) {
        if ((allpoint[i][0] == temp[0] && allpoint[i][1] == temp[1]) && tempTrue == false) {
            nodeTemp = allpoint[i][2];
            tempTrue = true;
        }
        if ((allpoint[i][0] == pointUp[0] && allpoint[i][1] == pointUp[1]) && pointUpTrue == false) {
            nodePointUp = allpoint[i][2];
            pointUpTrue = true;
        }
    }


    if (nodeTemp != null && nodePointUp != null) {
        eval(("node" + nodeTemp)).connectable({
            container: links,
            markers: markers
        }, eval("node" + nodePointUp)).setLineColor("#5D4037");
    } else {

    }



}


$(document).ready(function() {
    //scorm
    GetAPI(window);
    if (API != null) {
        if (API.Initialize("")) {
            LMSStatus = true;
            API.SetValue("cmi.score.min", 0); //to set min score in the game
            API.SetValue("cmi.score.max", 100); //to set max score in the game
        }
    }
});


$(".list-group-item").click(function(e) {

    if (!(e.target.tagName == "P" || e.target.tagName == "LI")) {
        if (e.target.tagName == "STRONG") {
            if ($(event.target).parent().parent().attr("id") != 4)
                return;
        } else {
            return;
        }

    } else if ($(event.target).parent().attr("id") != 4) {
        return;
    }

    var id = this.id;
    numberQustion = id;
    activeQustionById(id);
});

function activeQustionById(id) {
    numberQustion = id;
    pointsArray.length = 0;
    $(".list-group-item").removeClass("active");
    $("#" + id).addClass("active");
}


function replyGame() {
    $("#first_answer").val("");
    $("#secound_answer").val("");
    $("polyline").remove();
    $("path").remove();
    answerOnePartOne = false;
    answerOnePartTwo = false;
    answerSecound = false;
    answerThared = false;
    id = 1;
    mark = 0;
    numberQustion = 1;
    pointsArray.length = 0;
    tempArrayforSecoundQustion.length = 0;
    tryError = 0;
    activeQustionById(id);

}


function pushArrayPoint(temp, pointUp, allpoint, links, markers, pointsArray) {

    let tempTrue = false;
    let pointUpTrue = false;
    let nodeTemp = null;
    let nodePointUp = null;
    if (pointUp[0] == temp[0] && pointUp[1] == temp[1]) {
        tryError += 1;
        temp = [];
        return;
    }
    if (temp.length == 0) {
        return false;
    }
    if (pointUp.length == 0) {
        return false;
    }


    for (var i = 0; i < allpoint.length; i++) {
        if ((allpoint[i][0] == temp[0] && allpoint[i][1] == temp[1]) && tempTrue == false) {
            nodeTemp = allpoint[i][2];

        }
        if ((allpoint[i][0] == pointUp[0] && allpoint[i][1] == pointUp[1]) && pointUpTrue == false) {
            nodePointUp = allpoint[i][2];

        }
    }



    if (nodeTemp != null && nodePointUp != null) {

        if (pointsArray.length == 0) {
            pointsArray.push(temp);
            pointsArray.push([pointUp[0], pointUp[1]]);

        } else {
            if (pointsArray[pointsArray.length - 1][0] == temp[0] && pointsArray[pointsArray.length - 1][1] == temp[1]) {
                pointsArray.push([pointUp[0], pointUp[1]]);
            } else {
                pointsArray.push(temp);
                pointsArray.push([pointUp[0], pointUp[1]]);
            }


        }

    } else {
        tryError = tryError + 2;
        console.log("tryError", tryError)
        if (tryError > 18) {
            showMessge(mark)
            return false;
        }
        console.log("tryError", tryError);
    }




}