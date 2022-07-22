img="";
status="";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
};

function modelLoaded(){
    console.log("Model is Loaded");
    Status = "True";
    objectDetector.detect(img,gotresults);
}

function gotresults(error , results){
    if (error){
    console.error(error);
    }
    console.log(results);
};


function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000")
    rect(30,60,447,366)

    text("Cat",350,120)
    rect(270,100,341,353)
}