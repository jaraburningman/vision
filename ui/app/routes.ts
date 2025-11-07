import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { CONSTANTS } from "./context/constants-context.jsx";

const isProd = process.env.NODE_ENV === 'production';

export default [
  route(isProd ? '/vision/' : "", "layout/layout.tsx", [
    index("routes/objects-detection/objects-detection.tsx"),
    // route(CONSTANTS.ROUTES.FACIAL_EXPRESSIONS, "routes/facial-expressions/facial-expressions.tsx"),
    // route(CONSTANTS.ROUTES.OBJECTS_DETECTION, "routes/objects-detection/objects-detection.tsx"),
    // route('body-pose', "routes/body-pose/body-pose.tsx")
  ])
] satisfies RouteConfig;
