// src/components/Header.jsx
import { useHeader } from "../context/header-context";
import { useConstants } from "../context/constants-context";
import {Link} from "react-router";
import "./header.css";
import { CONSTANTS } from "../context/constants-context";

export default function Header() {
  const { title, description } = useHeader();

  const { ROUTES } = useConstants();
  const closePopover = () => {
    (document.getElementById('popover-menu') as HTMLDivElement)?.hidePopover();
  };

  return (
    <header>
      <button id="popover-toggle" popoverTarget="popover-menu">☰</button>
      <div id="popover-menu" popover="auto" anchor="popover-toggle">
        <Link to="" onClick={closePopover}>Hello</Link>
        {/*<Link to={ROUTES.FACIAL_EXPRESSIONS} onClick={closePopover}>{CONSTANTS.TITLES.FACIAL_EXPRESSIONS} (OpenVINO + Face APIs)</Link>*/}
        {/*<Link to={ROUTES.OBJECTS_DETECTION} onClick={closePopover}>Objects Detection (YOLOv12)</Link>*/}
        {/*<Link to="body-pose" onClick={closePopover}>Body Pose detection</Link>*/}
        {/*<Link to="" onClick={closePopover}>tba Training - Image labeling</Link>*/}
        {/*// Control user interfaces in touchless way*/}
        {/*<Link to="" onClick={closePopover}>tba Hand position estimation</Link>*/}
        {/*<Link to="" onClick={closePopover}>tba WebGL shaders</Link>*/}
        {/*<Link to="" onClick={closePopover}>TBA Transformers.js</Link>*/}
        {/*<Link to="" onClick={closePopover}>TBA Gemini nano</Link>*/}
      </div>
      <div className="header-info">
        { title && (<h2 className="header-title">{title}</h2>) }
        { description &&
          <p className="header-desc">
            {description}
            {title === CONSTANTS.TITLES.OBJECTS_DETECTION && <a className="yolodetect" href="https://github.com/sitammeur/YoloDetect"> © YoloDetect</a>}
          </p>
        }

      </div>
    </header>
  );
}
