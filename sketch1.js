var continuity;
var canvasWidth;
var canvasHeight;
var clicked;
var listOfShapes;
var clearBackground;

function setup()
{    
    canvasWidth = 1000;
    canvasHeight = 600;
    createCanvas(canvasWidth,canvasHeight);
    
    continuity = true; 
    clicked = false;
    clearBackground = true;
        
    noStroke();
    
    listOfShapes = [];
    
    for(i=0;i<10000;i++){
        
        let tempShape = [];
        
        switch(int(random(3))){
                    case 0:
                        tempShape.push("square");
                        break;
                    case 1:
                        tempShape.push("circle");
                        break;
                    case 2:      
                        tempShape.push("cross");
                        break;
        }
        
        tempShape.push(random(3,10));
        tempShape.push(randomColor());
        
        listOfShapes.push(tempShape);
    }
}

function draw()
{   
    
    if (continuity){
    
        background(220);
        clearBackground = true;
        
        fill(50, 190, 80);
        textSize(25);
        text("Law of Continuity",10,35);
        
        let xa = canvasWidth/2;
        let ya = canvasHeight/2;
        let xb = mouseX;
        let yb = mouseY;
        let index = 0;
        
        for(i = 0; i < Math.abs(xb-xa); i+=15){
            
            var x;
            
            if (xb<(canvasWidth/2)){
                x = (canvasWidth/2) - i;
            } else {
                x = (canvasWidth/2) + i;
            }
            
            let y = (((ya-yb)/(xa-xb))*(x-xa))+ya;
            
            print(x);
            print(y);
            
            switch(listOfShapes[index][0]){
                    case "square":
                        drawSquare(x, y, listOfShapes[i][1], listOfShapes[i][2]);
                        break;
                    case "circle":
                        drawCircle(x, y, listOfShapes[i][1], listOfShapes[i][2]);
                        break;
                    case "cross":      
                        drawCross(x, y, listOfShapes[i][1], listOfShapes[i][2]);
                        break;
            }
            index++;
        }
        
    } else {
        
        if (clearBackground){
            background(220);
            clearBackground = false;
        }
        
        fill(50, 190, 80);
        textSize(25);
        text("Law of Proximity", 10, 35);
        
        if (clicked){
            
            clicked = false;
            
            let randomSeparation = random(-100,100)
            
            for (i=0; i<random(4,200); i++){
                
                switch(int(random(3))){
                    case 0:
                        drawSquare((mouseX + random(-randomSeparation,randomSeparation)), (mouseY + random(-randomSeparation,randomSeparation)), random(3,10), randomColor());
                        break;
                    case 1:
                        drawCircle((mouseX + random(-randomSeparation,randomSeparation)), (mouseY + random(-randomSeparation,randomSeparation)), random(3,10), randomColor());
                        break;
                    case 2:      
                        drawCross((mouseX + random(-randomSeparation,randomSeparation)), (mouseY + random(-randomSeparation,randomSeparation)), random(3,10), randomColor());
                        break;
                }
            }
        }
    }
}

function drawSquare(x, y , sideLength, squareColor){
        
    fill(squareColor);
    square(x, y, sideLength);   
}

function drawCircle(x , y, diameter, circleColor){
        
    fill(circleColor);
    circle(x, y, diameter);
}

function drawCross(x , y, sideLength, crossColor){
    
    fill(crossColor);
    rect(x, y, sideLength, sideLength/4);
    rect(x+(sideLength/3), y-(sideLength/3), sideLength/3, sideLength);
}


function randomColor(){
    
    return (color(random(256), random(256), random(256)));
}

function keyPressed()
{
    if(continuity){
        continuity = false;
        redraw();
    } else {
        continuity = true;
        redraw();
    }
}

function mouseClicked(){
    
    clicked = true;
}
