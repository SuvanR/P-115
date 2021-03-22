function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('posenet is Initialized');
}

function draw(){
    image(video,0,0,300,300);
}

function take_snapshot(){
    save('crownfilter.png');
}

function gotPoses(results){
    if(results.lenegth > 0){
        console.log(results);
        console.log("nose X = "+ results[0].pose.nose.x+50);
        console.log("nose Y = "+ results[0].pose.nose.y);
    }
}