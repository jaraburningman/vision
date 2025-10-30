// Start webcam
const video = document.getElementById("video");

const startWebcam = () => {
  navigator.mediaDevices.getUserMedia({
    video: true, audio: false
  }).then((stream) => {
    video.srcObject = stream;
  }).catch ((error) => {
    console.error(error)
  });
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

video.addEventListener('play', async() => {
  // const labeledFaceDescriptors = await getLabeledFaceDescriptions();
  // const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);
  const canvas = faceapi.createCanvasFromMedia(video);
  const box = document.getElementById('demo-box');
  canvas.getContext('2d', { willReadFrequently: true }).clearRect(0, 0, canvas.width, canvas.height);
  box.append(canvas);

  setInterval(async () => {
    const displaySize = {width: box.offsetWidth, height: box.offsetHeight};
    faceapi.matchDimensions(canvas, displaySize);

    const detections = await faceapi
      .detectAllFaces(video)
      .withFaceLandmarks()
      .withFaceDescriptors()
      .withFaceExpressions()

    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    const headerTitleNode = document.getElementById('demo-header-title');
    // Empty node
    while (headerTitleNode.firstChild) {
      headerTitleNode.removeChild(headerTitleNode.firstChild);
    }

    const headerDataNode = document.getElementById('demo-header-data');
    // Empty node
    while (headerDataNode.firstChild) {
      headerDataNode.removeChild(headerDataNode.firstChild);
    }

    if (detections.length === 0) {
      const nobodyNode = document.createElement('p');
      nobodyNode.innerHTML = 'Waiting :)';
      headerTitleNode.append(nobodyNode);
    }

    resizedDetections.forEach((result, i) => {
      const box = resizedDetections[i].detection.box;
      let data = '';
      let title = '';
      let titleValue = 0;
      for (const [key, value] of Object.entries(resizedDetections[i].expressions)) {
        const k = capitalizeFirstLetter(key);
        const val = Math.round(value*100);
        data += ` ${k}: ${val} %,`;
        if (val > titleValue) {
          titleValue = val;
          title = k;
        }
      }

      const titleNode = document.createElement('p');
      titleNode.innerHTML = title;
      headerTitleNode.append(titleNode)
      const dataNode = document.createElement('p')
      dataNode.innerHTML = data;
      headerDataNode.append(dataNode);

      const faceLandmarksConfig = new faceapi.draw.DrawFaceLandmarksOptions({
        drawPoints: true,
        pointSize: 2,
        pointColor: 'white',
        drawLines: true,
        lineColor: 'white',
        lineWidth: 1
      });

      new faceapi.draw.DrawFaceLandmarks(resizedDetections[i].landmarks, faceLandmarksConfig).draw(canvas)
    });
  }, 300)
});


// Async load of models
try {
  Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri("./models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
    faceapi.nets.faceExpressionNet.loadFromUri("./models"),
  ]).then(startWebcam)
} catch (error) {
  console.error("Error loading models:", error);
}