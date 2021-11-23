

function preload(){
mustache= loadImage("https://www.istockphoto.com/photo/curly-moustache-isolated-on-white-gm160350753-22789548?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmustache&utm_term=mustache%3A%3A%3A")
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotPoses);
}



function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);
    image(mustache, noseX, noseY, 30, 30);
    }


function onClick(){
    save("myFilteredImage.png")
}
noseX= 0;
noseY= 0;




function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x=") + noseX;
        console.log("nose y=") + noseY;
    }

}



function take_snapshot(){
    save("myFilteredImage.png");
}