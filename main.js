nose_x=0
nose_y=0
function preload(){

}

function setup(){
canvas=createCanvas(500,500)
canvas.center()
video=createCapture(VIDEO)
video.size(500,500)
video.hide()

//Code for initializing posenet
posenet=ml5.poseNet(video,modelLoaded)
//CODE FOR EXECUTEIMG POSE NET AND GETTING RESULTS
posenet.on("pose", gotposes)
 }

 function gotposes(results){
    if (results.length>0) {
        console.log(results)
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
        console.log(nose_x,nose_y)
    }
 }

function draw(){
//image(pic,x,y,width,height)
image(video,0,0,500,500)
}

function take_snapshot(){
    save("filter.png")
}

function modelLoaded(){
    console.log("YOUR MODEL HAS BEEN LOADED...")
}