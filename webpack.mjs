import path from "path";
import ESLintPlugin from "eslint-webpack-plugin";

export default {
  watch: true,
  mode: "development",
  target: "node",
  entry: path.resolve("./src/index.ts"),
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      }
    ],
  },
  plugins: [
    new ESLintPlugin({
      fix: true,
      extensions: ["ts"],
    }),
  ],
};