import type {Route} from "../../.react-router/types/app/routes/+types/home";
import './objects-detection.css';
import { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
// import "@tensorflow/tfjs-backend-webgl"; // set backend to webgl
import "@tensorflow/tfjs-backend-webgpu";
import ButtonHandler from "./button-handler";
import { detect, detectVideo } from "../../utils/detect";
import "./objects-detection.css";
import { useHeader } from "../../context/header-context";
import { useConstants } from "../../context/constants-context";
import { CONSTANTS } from "../../context/constants-context";

const description = "Ultralytics's ML/AI model for object detection, segmentation and pose estimation.";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Vision | ${CONSTANTS.TITLES.OBJECTS_DETECTION} | ${description}` },
    { name: "description", content: "Live Detections with YOLOv12" },
  ];
}

// tf.setBackend("webgl"); // set backend to webgpu

const Loader = (props) => {
  return (
    <div className="wrapper" {...props}>
      <div className="spinner"></div>
      <p>{props.children}</p>
    </div>
  );
};

/**
 * App component for YOLO Live Detection Application.
 *
 * This component initializes and loads a YOLO model using TensorFlow.js,
 * sets up references for image, camera, video, and canvas elements, and
 * handles the loading state and model configuration.
 */
const ObjectsDetection = () => {
  const { setTitle, setDescription } = useHeader();
  const { TITLES } = useConstants();
  useEffect(() => {
    setTitle('Yolo12 model + React Router playground');
    setDescription(description);
  }, [setTitle, setDescription, TITLES.OBJECTS_DETECTION]);

  const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3],
  }); // init model & input shape

  const isProd = process.env.NODE_ENV === 'production';
  const modelName = isProd ? '/vision/yolo12n' : 'yolo12n';

  // references
  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    tf.ready().then(async () => {
      setLoading({ loading: true, progress: 0 });
      const yolo = await tf.loadGraphModel(
        // `${window.location.href}/${modelName}_web_model/model.json`,
        `../${modelName}_web_model/model.json`,
        {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions }); // set loading fractions
          },
        }
      ); // load model

      // warming up model
      const dummyInput = tf.ones(yolo.inputs[0].shape);
      const warmupResults = yolo.execute(dummyInput);

      setLoading({ loading: false, progress: 1 });
      setModel({
        net: yolo,
        inputShape: yolo.inputs[0].shape,
      }); // set model & input shape

      tf.dispose([warmupResults, dummyInput]); // cleanup memory
    });
  }, [modelName]); // reload model when modelName changes

  return (
    <div className="yolo">
      {loading.loading && (
        <Loader>Loading model... {(loading.progress * 100).toFixed(2)}%</Loader>
      )}
      <div className="content">
        <img
          src="#"
          ref={imageRef}
          onLoad={() => detect(imageRef.current, model, canvasRef.current)}
        />
        <video
          autoPlay
          muted
          ref={cameraRef}
          onPlay={() =>
            detectVideo(cameraRef.current, model, canvasRef.current)
          }
        />
        <video
          autoPlay
          muted
          ref={videoRef}
          onPlay={() => detectVideo(videoRef.current, model, canvasRef.current)}
        />
        <canvas
          width={model.inputShape[1]}
          height={model.inputShape[2]}
          ref={canvasRef}
        />
      </div>

      {!loading.loading && (
        <ButtonHandler
          imageRef={imageRef}
          cameraRef={cameraRef}
          videoRef={videoRef}
        />
      )}

    </div>
  );
};

export default ObjectsDetection;
