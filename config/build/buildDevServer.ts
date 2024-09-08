import path from "path";
import type { Configuration as DevServerConfiguration  } from "webpack-dev-server";

export default function buildDevServer(): DevServerConfiguration {
    return {
        static: path.join(__dirname, 'public'),
        port: 3000,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}