import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("", "layout/layout.tsx", [
    index("routes/home.tsx"),
    route("facial-expressions", "facialExpressions/facialExpressions.tsx")
  ])
] satisfies RouteConfig;
