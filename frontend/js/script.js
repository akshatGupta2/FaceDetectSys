const cameraStream = document.querySelector("#camera_stream");
const shutterBtn = document.querySelector("#shutter")
const outputImg = document.querySelector("#photo")
const canvas = document.getElementById("canvas")

if (navigator.mediaDevices.getUserMedia({video:true})) { 
    navigator.mediaDevices.getUserMedia({ video: true }).then(async function (stream) {
        cameraStream.srcObject = stream;
        cameraStream.play()
    }).catch(function (error) {
        console.log(error);
    })
}
else {
    console.log("Not permitted")
}
let width = window.innerWidth;
let height = 0;
let streaming = false;

cameraStream.addEventListener("canplay", (ev) => {
    if (!streaming) {
        height = cameraStream.videoHeight / (cameraStream.videoWidth / width);

        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        // cameraVideoStream.setAttribute("width", width);
        // cameraVideoStream.setAttribute("height", height);
        streaming = true;

    }
}, false);

let captureImg = () => {
    const canvasContext = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    canvasContext.drawImage(cameraStream, 0, 0, width, height);

    const data = canvas.toDataURL("img/png");
    outputImg.src = data
    // const link = document.createElement("a");
}

shutterBtn.addEventListener('click', () => captureImg())