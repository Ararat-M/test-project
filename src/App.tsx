import * as classes from "./app.module.scss"
import { Credits } from "./widgets/Credits";

export function App() {

    return (
        <>
            <main className={classes["main"]}>
                <Credits/> 
            </main>
        </>
    )
}