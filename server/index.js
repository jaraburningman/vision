import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createContext, useState, useContext, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgpu";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const HeaderContext = createContext();
function useHeader() {
  return useContext(HeaderContext);
}
function HeaderProvider({ children }) {
  const [title2, setTitle] = useState("Welcome");
  const [description2, setDescription] = useState("");
  const value = { title: title2, setTitle, description: description2, setDescription };
  return /* @__PURE__ */ jsx(HeaderContext.Provider, { value, children });
}
const CONSTANTS = {
  ROUTES: {
    HOME: "",
    HELLO: "hello",
    FACIAL_EXPRESSIONS: "facial-expressions",
    OBJECTS_DETECTION: "objects-detection",
    TRAINING: "training"
  },
  TITLES: {
    FACIAL_EXPRESSIONS: "Facial Expressions",
    OBJECTS_DETECTION: "Objects Detection",
    TRAINING: "Training model (TensorFlow)"
  },
  MODELS: {
    FACE_EXPRESSION: "face_expression_model",
    SSD_MOBILENET: "ssd_mobilenetv1_model",
    YOLO11N: "yolo11n_web_model",
    YOLO12N: "yolo12n_web_model"
  },
  API_ENDPOINTS: {
    // Add API endpoints here when needed
  }
};
const ConstantsContext = createContext();
function useConstants() {
  return useContext(ConstantsContext);
}
function ConstantsProvider({ children }) {
  return /* @__PURE__ */ jsx(ConstantsContext.Provider, { value: CONSTANTS, children });
}
function Header() {
  const { title: title2, description: description2 } = useHeader();
  const { ROUTES } = useConstants();
  const closePopover = () => {
    document.getElementById("popover-menu")?.hidePopover();
  };
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("button", { id: "popover-toggle", popoverTarget: "popover-menu", children: "☰" }),
    /* @__PURE__ */ jsxs("div", { id: "popover-menu", popover: "auto", anchor: "popover-toggle", children: [
      /* @__PURE__ */ jsx(Link, { to: "", onClick: closePopover, children: "Hello" }),
      /* @__PURE__ */ jsxs(Link, { to: ROUTES.FACIAL_EXPRESSIONS, onClick: closePopover, children: [
        CONSTANTS.TITLES.FACIAL_EXPRESSIONS,
        " (OpenVINO + Face APIs)"
      ] }),
      /* @__PURE__ */ jsx(Link, { to: ROUTES.OBJECTS_DETECTION, onClick: closePopover, children: "Objects Detection (YOLOv12)" }),
      /* @__PURE__ */ jsx(Link, { to: "body-pose", onClick: closePopover, children: "Body Pose detection" }),
      /* @__PURE__ */ jsx(Link, { to: "", onClick: closePopover, children: "tba Training - Image labeling" }),
      /* @__PURE__ */ jsx(Link, { to: "", onClick: closePopover, children: "tba Hand position estimation" }),
      /* @__PURE__ */ jsx(Link, { to: "", onClick: closePopover, children: "tba WebGL shaders" }),
      /* @__PURE__ */ jsx(Link, { to: "", onClick: closePopover, children: "TBA Transformers.js" }),
      /* @__PURE__ */ jsx(Link, { to: "", onClick: closePopover, children: "TBA Gemini nano" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "header-info", children: [
      title2 && /* @__PURE__ */ jsx("h2", { className: "header-title", children: title2 }),
      description2 && /* @__PURE__ */ jsxs("p", { className: "header-desc", children: [
        description2,
        title2 === CONSTANTS.TITLES.OBJECTS_DETECTION && /* @__PURE__ */ jsx("a", { className: "yolodetect", href: "https://github.com/sitammeur/YoloDetect", children: " © YoloDetect" })
      ] })
    ] })
  ] });
}
const layout = UNSAFE_withComponentProps(function Layout2() {
  return /* @__PURE__ */ jsx(ConstantsProvider, {
    children: /* @__PURE__ */ jsxs(HeaderProvider, {
      children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("main", {
        children: /* @__PURE__ */ jsx(Outlet, {})
      })]
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: layout
}, Symbol.toStringTag, { value: "Module" }));
const title = "Hello";
const description$2 = "AI and Machine Learning on Devices";
function meta$2({}) {
  return [{
    title: `Vision | ${title} | ${description$2}`
  }, {
    name: "description",
    content: description$2
  }];
}
const hello = UNSAFE_withComponentProps(function Hello() {
  const {
    setTitle,
    setDescription
  } = useHeader();
  useEffect(() => {
    setTitle(title);
    setDescription(description$2);
  }, [setTitle, setDescription]);
  return /* @__PURE__ */ jsx("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      textAlign: "center"
    },
    children: /* @__PURE__ */ jsx("img", {
      className: "hello-robot",
      src: "../../public/robot.png"
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hello,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const description$1 = "OpenVINO MobileNet-SSD pretrained object detection model + face 68 landmark, recognition and expression models.";
function meta$1({}) {
  return [{
    title: `Vision | ${CONSTANTS.TITLES.FACIAL_EXPRESSIONS} | ${description$1}`
  }, {
    name: "description",
    content: description$1
  }];
}
const facialExpressions = UNSAFE_withComponentProps(function FacialExpressions() {
  const {
    setTitle,
    setDescription
  } = useHeader();
  const {
    TITLES
  } = useConstants();
  useEffect(() => {
    setTitle(TITLES.FACIAL_EXPRESSIONS);
    setDescription(description$1);
  }, [setTitle, setDescription, TITLES.FACIAL_EXPRESSIONS]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const boxRef = useRef(null);
  const streamRef = useRef(null);
  const [faces, setFaces] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const startWebcam = async () => {
    try {
      streamRef.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });
      if (videoRef.current) {
        videoRef.current.srcObject = streamRef.current;
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/face-api.js";
    script.defer = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  useEffect(() => {
    if (!isLoaded || !videoRef.current || !canvasRef.current || !boxRef.current) return;
    const loadModels = async () => {
      try {
        await Promise.all([window.faceapi.nets.ssdMobilenetv1.loadFromUri("/models"), window.faceapi.nets.faceLandmark68Net.loadFromUri("/models"), window.faceapi.nets.faceRecognitionNet.loadFromUri("/models"), window.faceapi.nets.faceExpressionNet.loadFromUri("/models")]);
        await startWebcam();
        setModelsLoaded(true);
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };
    loadModels();
  }, [isLoaded]);
  const detectionIntervalRef = useRef(void 0);
  useEffect(() => {
    if (!isLoaded || !videoRef.current || !canvasRef.current || !boxRef.current) return;
    const video = videoRef.current;
    canvasRef.current;
    const box = boxRef.current;
    const handlePlay = async () => {
      const canvas2 = window.faceapi.createCanvasFromMedia(video);
      canvas2.getContext("2d", {
        willReadFrequently: true
      }).clearRect(0, 0, canvas2.width, canvas2.height);
      box.append(canvas2);
      detectionIntervalRef.current = setInterval(async () => {
        const displaySize = {
          width: box.offsetWidth,
          height: box.offsetHeight
        };
        window.faceapi.matchDimensions(canvas2, displaySize);
        const detections = await window.faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors().withFaceExpressions();
        const resizedDetections = window.faceapi.resizeResults(detections, displaySize);
        if (detections.length === 0) {
          setFaces([]);
        } else {
          const newFaces = resizedDetections.map((result) => {
            let dataArray = [];
            let title2 = "";
            let titleValue = 0;
            for (const [key, value] of Object.entries(result.expressions)) {
              const k = capitalizeFirstLetter(key);
              const val = Math.round(value * 100);
              dataArray.push({
                expressionName: k,
                expressionValue: val
              });
              if (val > titleValue) {
                titleValue = val;
                title2 = k;
              }
            }
            return {
              title: title2,
              data: dataArray
            };
          });
          setFaces(newFaces);
          resizedDetections.forEach((result) => {
            const faceLandmarksConfig = new window.faceapi.draw.DrawFaceLandmarksOptions({
              drawPoints: true,
              pointSize: 2,
              pointColor: "white",
              drawLines: true,
              lineColor: "white",
              lineWidth: 1
            });
            new window.faceapi.draw.DrawFaceLandmarks(result.landmarks, faceLandmarksConfig).draw(canvas2);
          });
        }
      }, 200);
      return () => clearInterval(detectionIntervalRef.current);
    };
    video.addEventListener("play", handlePlay);
    return () => {
      video.removeEventListener("play", handlePlay);
    };
  }, [isLoaded]);
  useEffect(() => {
    tf.setBackend("webgl");
    console.log(tf.getBackend());
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      clearInterval(detectionIntervalRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "ex-app-container",
    children: [/* @__PURE__ */ jsx("div", {
      className: "ex-container",
      children: !modelsLoaded ? /* @__PURE__ */ jsx("div", {
        className: "ex-box",
        children: "Loading models"
      }) : faces.length === 0 ? /* @__PURE__ */ jsx("div", {
        className: "ex-box",
        children: "Detecting faces ..."
      }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [faces.map((face, i) => /* @__PURE__ */ jsx("div", {
          className: "ex-box",
          children: /* @__PURE__ */ jsx("table", {
            className: "ex-box-data",
            children: /* @__PURE__ */ jsx("tbody", {
              children: face.data.map((item, j) => /* @__PURE__ */ jsx("tr", {
                children: /* @__PURE__ */ jsx("td", {
                  children: /* @__PURE__ */ jsx("span", {
                    style: item.expressionName === face.title ? {
                      fontWeight: "bold",
                      color: "#d70026"
                    } : {},
                    children: `${item.expressionName} ${item.expressionValue}%`
                  })
                })
              }, j))
            })
          })
        }, i)), faces.length === 1 && /* @__PURE__ */ jsx("div", {
          className: "ex-box ex-ghost",
          children: /* @__PURE__ */ jsx("span", {
            className: "ex-box-person",
            children: "#2"
          })
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      id: "ex-video",
      ref: boxRef,
      children: [/* @__PURE__ */ jsx("video", {
        ref: videoRef,
        width: "100%",
        autoPlay: true
      }), /* @__PURE__ */ jsx("canvas", {
        ref: canvasRef,
        style: {
          display: "none"
        }
      })]
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: facialExpressions,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
class Webcam {
  /**
   * Open webcam and stream it through video tag.
   * @param {HTMLVideoElement} videoRef video tag reference
   */
  open = (videoRef) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "environment"
        }
      }).then((stream) => {
        videoRef.srcObject = stream;
      });
    } else {
      alert("Can't open Webcam!");
    }
  };
  /**
   * Close opened webcam.
   * @param {HTMLVideoElement} videoRef video tag reference
   */
  close = (videoRef) => {
    if (videoRef.srcObject) {
      videoRef.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
      videoRef.srcObject = null;
    } else {
      alert("Please open Webcam first!");
    }
  };
}
const ButtonHandler = ({ imageRef, cameraRef, videoRef }) => {
  const [streaming, setStreaming] = useState(null);
  const inputImageRef = useRef(null);
  const inputVideoRef = useRef(null);
  const webcam = new Webcam();
  const closeImage = () => {
    const url = imageRef.current.src;
    imageRef.current.src = "#";
    URL.revokeObjectURL(url);
    setStreaming(null);
    inputImageRef.current.value = "";
    imageRef.current.style.display = "none";
  };
  const closeVideo = () => {
    const url = videoRef.current.src;
    videoRef.current.src = "";
    URL.revokeObjectURL(url);
    setStreaming(null);
    inputVideoRef.current.value = "";
    videoRef.current.style.display = "none";
  };
  const cameraHandler = () => {
    if (streaming === null || streaming === "image") {
      if (streaming === "image") closeImage();
      webcam.open(cameraRef.current);
      cameraRef.current.style.display = "block";
      setStreaming("camera");
    } else if (streaming === "camera") {
      webcam.close(cameraRef.current);
      cameraRef.current.style.display = "none";
      setStreaming(null);
    } else
      alert(
        `Can't handle more than 1 stream
Currently streaming : ${streaming}`
      );
  };
  useEffect(() => {
    console.log(tf.getBackend());
    setTimeout(() => {
      cameraHandler();
    }, 500);
    return () => {
      tf.tidy(() => {
      });
      setStreaming(null);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "btn-container", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        style: { display: "none" },
        onChange: (e) => {
          const url = URL.createObjectURL(e.target.files[0]);
          imageRef.current.src = url;
          imageRef.current.style.display = "block";
          setStreaming("image");
        },
        ref: inputImageRef
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          if (streaming === null) inputImageRef.current.click();
          else if (streaming === "image") closeImage();
          else
            alert(
              `Can't handle more than 1 stream
Currently streaming : ${streaming}`
            );
        },
        children: [
          streaming === "image" ? "Close" : "Open",
          " Image"
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        accept: "video/*",
        style: { display: "none" },
        onChange: (e) => {
          if (streaming === "image") closeImage();
          const url = URL.createObjectURL(e.target.files[0]);
          videoRef.current.src = url;
          videoRef.current.addEventListener("ended", () => closeVideo());
          videoRef.current.style.display = "block";
          setStreaming("video");
        },
        ref: inputVideoRef
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          if (streaming === null || streaming === "image")
            inputVideoRef.current.click();
          else if (streaming === "video") closeVideo();
          else
            alert(
              `Can't handle more than 1 stream
Currently streaming : ${streaming}`
            );
        },
        children: [
          streaming === "video" ? "Close" : "Open",
          " Video"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: cameraHandler,
        children: [
          streaming === "camera" ? "Close" : "Open",
          " Webcam"
        ]
      }
    )
  ] });
};
const labels = [
  "person",
  "bicycle",
  "car",
  "motorcycle",
  "airplane",
  "bus",
  "train",
  "truck",
  "boat",
  "traffic light",
  "fire hydrant",
  "stop sign",
  "parking meter",
  "bench",
  "bird",
  "cat",
  "dog",
  "horse",
  "sheep",
  "cow",
  "elephant",
  "bear",
  "zebra",
  "giraffe",
  "backpack",
  "umbrella",
  "handbag",
  "tie",
  "suitcase",
  "frisbee",
  "skis",
  "snowboard",
  "sports ball",
  "kite",
  "baseball bat",
  "baseball glove",
  "skateboard",
  "surfboard",
  "tennis racket",
  "bottle",
  "wine glass",
  "cup",
  "fork",
  "knife",
  "spoon",
  "bowl",
  "banana",
  "apple",
  "sandwich",
  "orange",
  "broccoli",
  "carrot",
  "hot dog",
  "pizza",
  "donut",
  "cake",
  "chair",
  "couch",
  "potted plant",
  "bed",
  "dining table",
  "toilet",
  "tv",
  "laptop",
  "mouse",
  "remote",
  "keyboard",
  "cell phone",
  "microwave",
  "oven",
  "toaster",
  "sink",
  "refrigerator",
  "book",
  "clock",
  "vase",
  "scissors",
  "teddy bear",
  "hair drier",
  "toothbrush"
];
const renderBoxes = (canvasRef, boxes_data, scores_data, classes_data, ratios) => {
  const ctx = canvasRef.getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const colors = new Colors();
  const font = `${Math.max(
    Math.round(Math.max(ctx.canvas.width, ctx.canvas.height) / 40),
    14
  )}px Arial`;
  ctx.font = font;
  ctx.textBaseline = "top";
  for (let i = 0; i < scores_data.length; ++i) {
    const klass = labels[classes_data[i]];
    const color = colors.get(classes_data[i]);
    const score = (scores_data[i] * 100).toFixed(1);
    let [y1, x1, y2, x2] = boxes_data.slice(i * 4, (i + 1) * 4);
    x1 *= ratios[0];
    x2 *= ratios[0];
    y1 *= ratios[1];
    y2 *= ratios[1];
    const width = x2 - x1;
    const height = y2 - y1;
    ctx.fillStyle = Colors.hexToRgba(color, 0.2);
    ctx.fillRect(x1, y1, width, height);
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(
      Math.min(ctx.canvas.width, ctx.canvas.height) / 200,
      2.5
    );
    ctx.strokeRect(x1, y1, width, height);
    ctx.fillStyle = color;
    const textWidth = ctx.measureText(klass + " - " + score + "%").width;
    const textHeight = parseInt(font, 10);
    const yText = y1 - (textHeight + ctx.lineWidth);
    ctx.fillRect(
      x1 - 1,
      yText < 0 ? 0 : yText,
      // handle overflow label box
      textWidth + ctx.lineWidth,
      textHeight + ctx.lineWidth
    );
    ctx.fillStyle = "#ffffff";
    ctx.fillText(klass + " - " + score + "%", x1 - 1, yText < 0 ? 0 : yText);
  }
};
class Colors {
  // ultralytics color palette https://ultralytics.com/
  constructor() {
    this.palette = [
      "#FF3838",
      "#FF9D97",
      "#FF701F",
      "#FFB21D",
      "#CFD231",
      "#48F90A",
      "#92CC17",
      "#3DDB86",
      "#1A9334",
      "#00D4BB",
      "#2C99A8",
      "#00C2FF",
      "#344593",
      "#6473FF",
      "#0018EC",
      "#8438FF",
      "#520085",
      "#CB38FF",
      "#FF95C8",
      "#FF37C7"
    ];
    this.n = this.palette.length;
  }
  get = (i) => this.palette[Math.floor(i) % this.n];
  static hexToRgba = (hex, alpha) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgba(${[
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ].join(", ")}, ${alpha})` : null;
  };
}
const numClass = labels.length;
const preprocess = (source, modelWidth, modelHeight) => {
  let xRatio, yRatio;
  const input = tf.tidy(() => {
    const img = tf.browser.fromPixels(source);
    const [h, w] = img.shape.slice(0, 2);
    const maxSize = Math.max(w, h);
    const imgPadded = img.pad([
      [0, maxSize - h],
      // padding y [bottom only]
      [0, maxSize - w],
      // padding x [right only]
      [0, 0]
    ]);
    xRatio = maxSize / w;
    yRatio = maxSize / h;
    return tf.image.resizeBilinear(imgPadded, [modelWidth, modelHeight]).div(255).expandDims(0);
  });
  return [input, xRatio, yRatio];
};
const detect = async (source, model, canvasRef, callback = () => {
}) => {
  const [modelWidth, modelHeight] = model.inputShape.slice(1, 3);
  tf.engine().startScope();
  const [input, xRatio, yRatio] = preprocess(source, modelWidth, modelHeight);
  const res = model.net.execute(input);
  const transRes = res.transpose([0, 2, 1]);
  const boxes = tf.tidy(() => {
    const w = transRes.slice([0, 0, 2], [-1, -1, 1]);
    const h = transRes.slice([0, 0, 3], [-1, -1, 1]);
    const x1 = tf.sub(transRes.slice([0, 0, 0], [-1, -1, 1]), tf.div(w, 2));
    const y1 = tf.sub(transRes.slice([0, 0, 1], [-1, -1, 1]), tf.div(h, 2));
    return tf.concat(
      [
        y1,
        x1,
        tf.add(y1, h),
        //y2
        tf.add(x1, w)
        //x2
      ],
      2
    ).squeeze();
  });
  const [scores, classes] = tf.tidy(() => {
    const rawScores = transRes.slice([0, 0, 4], [-1, -1, numClass]).squeeze(0);
    return [rawScores.max(1), rawScores.argMax(1)];
  });
  const nms = await tf.image.nonMaxSuppressionAsync(
    boxes,
    scores,
    500,
    0.45,
    0.2
  );
  const boxes_data = boxes.gather(nms, 0).dataSync();
  const scores_data = scores.gather(nms, 0).dataSync();
  const classes_data = classes.gather(nms, 0).dataSync();
  renderBoxes(canvasRef, boxes_data, scores_data, classes_data, [
    xRatio,
    yRatio
  ]);
  tf.dispose([res, transRes, boxes, scores, classes, nms]);
  callback();
  tf.engine().endScope();
};
const detectVideo = (vidSource, model, canvasRef) => {
  const detectFrame = async () => {
    if (vidSource.videoWidth === 0 && vidSource.srcObject === null) {
      const ctx = canvasRef.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      return;
    }
    detect(vidSource, model, canvasRef, () => {
      requestAnimationFrame(detectFrame);
    });
  };
  detectFrame();
};
const description = "Ultralytics YOLOv12 is a versatile model that excels in object detection, segmentation, image classification and pose estimation.";
function meta({}) {
  return [{
    title: `Vision | ${CONSTANTS.TITLES.OBJECTS_DETECTION} | ${description}`
  }, {
    name: "description",
    content: "Live Detections with YOLOv12"
  }];
}
const Loader = (props) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "wrapper",
    ...props,
    children: [/* @__PURE__ */ jsx("div", {
      className: "spinner"
    }), /* @__PURE__ */ jsx("p", {
      children: props.children
    })]
  });
};
const ObjectsDetection = () => {
  const {
    setTitle,
    setDescription
  } = useHeader();
  const {
    TITLES
  } = useConstants();
  useEffect(() => {
    setTitle(TITLES.OBJECTS_DETECTION);
    setDescription(description);
  }, [setTitle, setDescription, TITLES.OBJECTS_DETECTION]);
  const [loading, setLoading] = useState({
    loading: true,
    progress: 0
  });
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3]
  });
  const modelName = "yolo12n";
  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    tf.ready().then(async () => {
      setLoading({
        loading: true,
        progress: 0
      });
      const yolo = await tf.loadGraphModel(
        // `${window.location.href}/${modelName}_web_model/model.json`,
        `../${modelName}_web_model/model.json`,
        {
          onProgress: (fractions) => {
            setLoading({
              loading: true,
              progress: fractions
            });
          }
        }
      );
      const dummyInput = tf.ones(yolo.inputs[0].shape);
      const warmupResults = yolo.execute(dummyInput);
      setLoading({
        loading: false,
        progress: 1
      });
      setModel({
        net: yolo,
        inputShape: yolo.inputs[0].shape
      });
      tf.dispose([warmupResults, dummyInput]);
    });
  }, [modelName]);
  return /* @__PURE__ */ jsxs("div", {
    className: "yolo",
    children: [loading.loading && /* @__PURE__ */ jsxs(Loader, {
      children: ["Loading model... ", (loading.progress * 100).toFixed(2), "%"]
    }), /* @__PURE__ */ jsxs("div", {
      className: "content",
      children: [/* @__PURE__ */ jsx("img", {
        src: "#",
        ref: imageRef,
        onLoad: () => detect(imageRef.current, model, canvasRef.current)
      }), /* @__PURE__ */ jsx("video", {
        autoPlay: true,
        muted: true,
        ref: cameraRef,
        onPlay: () => detectVideo(cameraRef.current, model, canvasRef.current)
      }), /* @__PURE__ */ jsx("video", {
        autoPlay: true,
        muted: true,
        ref: videoRef,
        onPlay: () => detectVideo(videoRef.current, model, canvasRef.current)
      }), /* @__PURE__ */ jsx("canvas", {
        width: model.inputShape[1],
        height: model.inputShape[2],
        ref: canvasRef
      })]
    }), /* @__PURE__ */ jsx(ButtonHandler, {
      imageRef,
      cameraRef,
      videoRef
    })]
  });
};
const objectsDetection = UNSAFE_withComponentProps(ObjectsDetection);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: objectsDetection,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/vision/assets/entry.client-BH3GQY4p.js", "imports": ["/vision/assets/chunk-OIYGIGL5-B6SvBvvm.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/vision/assets/root-DXuX21Lm.js", "imports": ["/vision/assets/chunk-OIYGIGL5-B6SvBvvm.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "layout/layout": { "id": "layout/layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/vision/assets/layout-ey7dYn1z.js", "imports": ["/vision/assets/chunk-OIYGIGL5-B6SvBvvm.js", "/vision/assets/header-context-BPywMii-.js", "/vision/assets/constants-context-H2NxbeDZ.js"], "css": ["/vision/assets/layout-CUeXh86y.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/hello/hello": { "id": "routes/hello/hello", "parentId": "layout/layout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/vision/assets/hello-BSLccVb1.js", "imports": ["/vision/assets/chunk-OIYGIGL5-B6SvBvvm.js", "/vision/assets/header-context-BPywMii-.js"], "css": ["/vision/assets/hello-DtLiKOGc.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/facial-expressions/facial-expressions": { "id": "routes/facial-expressions/facial-expressions", "parentId": "layout/layout", "path": "facial-expressions", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/vision/assets/facial-expressions-B9pwd_Oq.js", "imports": ["/vision/assets/chunk-OIYGIGL5-B6SvBvvm.js", "/vision/assets/header-context-BPywMii-.js", "/vision/assets/constants-context-H2NxbeDZ.js", "/vision/assets/register_all_kernels-Cy_UnWz8.js"], "css": ["/vision/assets/facial-expressions-DZM32Uyd.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/objects-detection/objects-detection": { "id": "routes/objects-detection/objects-detection", "parentId": "layout/layout", "path": "objects-detection", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/vision/assets/objects-detection-CwkWSgW6.js", "imports": ["/vision/assets/chunk-OIYGIGL5-B6SvBvvm.js", "/vision/assets/register_all_kernels-Cy_UnWz8.js", "/vision/assets/header-context-BPywMii-.js", "/vision/assets/constants-context-H2NxbeDZ.js"], "css": ["/vision/assets/objects-detection-C_TdGShp.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/body-pose/body-pose": { "id": "routes/body-pose/body-pose", "parentId": "layout/layout", "path": "body-pose", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/vision/assets/body-pose-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/vision/assets/manifest-67779d32.js", "version": "67779d32", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "vision/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/vision/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "layout/layout": {
    id: "layout/layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/hello/hello": {
    id: "routes/hello/hello",
    parentId: "layout/layout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/facial-expressions/facial-expressions": {
    id: "routes/facial-expressions/facial-expressions",
    parentId: "layout/layout",
    path: "facial-expressions",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/objects-detection/objects-detection": {
    id: "routes/objects-detection/objects-detection",
    parentId: "layout/layout",
    path: "objects-detection",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/body-pose/body-pose": {
    id: "routes/body-pose/body-pose",
    parentId: "layout/layout",
    path: "body-pose",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
