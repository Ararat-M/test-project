import { HotModuleReplacementPlugin, ProgressPlugin, type WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default function buildPlugins(isDev: boolean): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin()
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new HotModuleReplacementPlugin());
    }
    
    return plugins
}
