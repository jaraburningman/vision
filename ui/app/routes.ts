import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { CONSTANTS } from "./context/constants-context.jsx";


export default [
  route(process.env.PUBLIC_URL, "layout/layout.tsx", [
    index("routes/hello/hello.tsx"),
    route(CONSTANTS.ROUTES.FACIAL_EXPRESSIONS, "routes/facial-expressions/facial-expressions.tsx"),
    route(CONSTANTS.ROUTES.OBJECTS_DETECTION, "routes/objects-detection/objects-detection.tsx"),
    route('body-pose', "routes/body-pose/body-pose.tsx")
  ])
] satisfies RouteConfig;
