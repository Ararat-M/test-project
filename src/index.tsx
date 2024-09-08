import "./index.scss";
import { App } from "./App";
import { createRoot } from "react-dom/client"

const rootNode = document.querySelector("#root");

if (rootNode != null) {
    const root = createRoot(rootNode)

    root.render (
        <App/>
    )
}