var frames;
var framesNum;
var currFrame;
var counter;
var counter2;

function setup()
{    
    createCanvas(212,147);
    
    frames = [];
    framesNum = 26;
    currFrame = 0;
    counter = 0;
    counter2 = 0;
    
    loadFrames(framesNum);
}

function draw()
{   
    
    image(frames[currFrame], 0, 0);
    
    counter++;
    counter2++;
    
    if (((counter%5) == 0) && (currFrame != 0) && (currFrame != 1)){
        if (currFrame == (framesNum-1)){
            currFrame = 0;
        } else {
            currFrame++;
        }   
    } else if ((((counter%8) == 0) && ((counter2%30 == 0))) && ((currFrame == 0) || (currFrame == 1))){
        currFrame++;
    }
}

function loadFrames(n){
    
    for (i=0; i<n; i++){
        
        if (i==0){
            frames[i] = loadImage("images/title.gif");
        } else if (i==1){
            frames[i] = loadImage("images/title2.gif");
        } else if (i==(n-1)){
            let str = "images/K"+ i + ".gif";
            frames[i] = loadImage(str);
        } else{
            let str = "images/K"+ (i-1) + ".gif";
            frames[i] = loadImage(str);
        }
    }
}
