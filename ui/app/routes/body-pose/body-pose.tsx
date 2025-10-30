// import type { Route } from "./+types/objects-detection";
// // import './hello.css';
// import { useEffect } from "react";
// import { useHeader } from "../../context/header-context";
//
// const title = "Body pose";
// const description = 'body pose desc';
//
// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: `Vision | ${title} | ${description}` },
//     { name: "description", content: description },
//   ];
// }
//
// export default function BodyPose() {
//   const { setTitle, setDescription } = useHeader();
//   useEffect(() => {
//     setTitle(title);
//     setDescription(description);
//   }, [setTitle, setDescription]);
//
//   let video;
//   let detector;
//   let poses = [];
//   let tshirtImg;
//
//   // function preload() {
//   //   // Load a transparent PNG of a T-shirt (you can replace this with your own image)
//   //   tshirtImg = loadImage('./tshirt.jpg'); // Example T-shirt PNG
//   // }
//   //
//   // async function setup() {
//   //   createCanvas(640, 480);
//   //   video = createCapture(VIDEO);
//   //   video.size(width, height);
//   //   video.hide();
//   //
//   //   // Load the MoveNet pose detection model
//   //   await tf.setBackend('webgl');
//   //   detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
//   // }
//   //
//   // async function draw() {
//   //   image(video, 0, 0, width, height);
//   //
//   //   if (detector) {
//   //     const posesArray = await detector.estimatePoses(video.elt);
//   //     if (posesArray.length > 0) {
//   //       poses = posesArray;
//   //       drawTShirt(poses[0]);
//   //     }
//   //   }
//   // }
//   //
//   // function drawTShirt(pose) {
//   //   const keypoints = pose.keypoints;
//   //
//   //   const leftShoulder = keypoints.find(p => p.name === "left_shoulder");
//   //   const rightShoulder = keypoints.find(p => p.name === "right_shoulder");
//   //   const leftHip = keypoints.find(p => p.name === "left_hip");
//   //   const rightHip = keypoints.find(p => p.name === "right_hip");
//   //
//   //   if (leftShoulder && rightShoulder && leftHip && rightHip &&
//   //     leftShoulder.score > 0.5 && rightShoulder.score > 0.5 &&
//   //     leftHip.score > 0.5 && rightHip.score > 0.5) {
//   //
//   //     // Find the bounding box for the torso
//   //     const x = min(leftShoulder.x, rightShoulder.x, leftHip.x, rightHip.x);
//   //     const y = min(leftShoulder.y, rightShoulder.y);
//   //     const w = abs(rightShoulder.x - leftShoulder.x) * 1.5;
//   //     const h = abs(leftHip.y - leftShoulder.y) * 1.3;
//   //
//   //     // Center the image on the torso
//   //     image(tshirtImg, x - w * 0.25, y, w, h);
//   //   }
//   // }
//
//   return (
//     <div>
//       <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
//       <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>
//       <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/pose-detection"></script>
//       <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"></script>
//     </div>
//   );
// }
