import buildPlugins from "./config/build/buildPlugins";
import buildLoaders from "./config/build/buildLoaders";
import buildResolve from "./config/build/buildResolve";
import buildDevServer from "./config/build/buildDevServer";
import path from "path";
import { type Configuration } from "webpack";
import "webpack-dev-server";

export default (env: Record<string, any>): Configuration => {
    const mode = env.mode || "development";
    const isDev = mode || "development";

    const config: Configuration = {
        mode,
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            filename: "[name].[chunkhash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true
        },
        resolve: buildResolve(),
        module: {
            rules: buildLoaders(isDev)
        },
        plugins: buildPlugins(isDev),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer() : undefined
    }

    return config
}