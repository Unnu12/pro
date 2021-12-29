lipx - 0;
lipy = 0; 

function preload(){
    lip = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');

}

function setup(){
    canvas= createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size (300,300);
    video.hide();

         
 poseNet = ml5.poseNet(video , modelLoaded);
 poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log('poseNet is initiated');

}
 
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lipx= results[0].pose.nose.x ;
        lipy = results[0].pose.nose.y ;
    }

function draw(){
    image(video,0,0,300,300);  
    image(lip,lipx, lipy ,30,30);
}




function take_snapshot(){
    save("lipstick.png");

}}