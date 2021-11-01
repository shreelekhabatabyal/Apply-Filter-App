function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
    tint_color = "";
}

function gotPoses(results) {
    console.log(results);
}

function draw() {
    image(video, 0, 0, 300, 300);
    tint_color = "";
}

function take_snaptop() {
    save("my_Cool_Img.png")
}

function modelLoaded() {
    console.log("model_loaded");
}

function filter_apply() {
    tint_color = document.getElementById("color_name").value;
}