// Initialize noseX and noseY
var noseX=0;
var noseY=0;
var difference=0;
var rightWristX=0;
var leftWrist=0;
// var noseY=0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
    document.getElementById("square_size").innerHTML = "Size of the square is: " + difference + "px";
    
}

function modelLoaded() {
    console.log("Model has been loaded");

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWrist  = results[0].pose.leftWrist.x;
        rightWrist  = results[0].pose.rightWrist.x;
         difference = Math.floor(leftWrist - rightWristX);
    }
}

