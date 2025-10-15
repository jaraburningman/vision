import { Link, Outlet } from "react-router";
import "./layout.css";

export default function Layout() {
  const closePopover = () => {
    (document.getElementById('popover-menu') as HTMLDivElement)?.hidePopover();
  };

  return (
    <div>
      <button id="popover-toggle" popoverTarget="popover-menu">☰</button>
      <div id="popover-menu" popover="auto">
        <Link to="/" onClick={closePopover}>Hello Convolutional Neural Networks</Link>
        <Link to="/facial-expressions" onClick={closePopover}>Facial Expressions (FaceAPI)</Link>
        <Link to="/" onClick={closePopover}>Objects Detection (YOLOv12)</Link>
        {/*https://github.com/sitammeur/YoloDetect*/}
        <Link to="/" onClick={closePopover}>Training model (TensorFlow)</Link>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
