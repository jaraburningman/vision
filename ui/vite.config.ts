import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/vision/' : '',
  plugins: [reactRouter(), tsconfigPaths()],
});
