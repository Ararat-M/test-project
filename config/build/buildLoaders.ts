import { type RuleSetRule } from "webpack";
import { styleLoader } from "./loaders/styleLoader";

export default function buildLoaders(isDev: boolean): RuleSetRule[] {
    const sassLoader = styleLoader(isDev);

    const typeScriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
    }

    return [
        typeScriptLoader,
        sassLoader
    ]
}