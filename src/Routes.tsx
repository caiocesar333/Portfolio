import React from "react";
import { BrowserRouter as Router, Route, Routes as Routesx } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

export function Routes() {
    return (
        <Router>
            <>
                <Routesx>
                    <Route path="/" element={<App />}></Route>
                </Routesx>
            </>
        </Router>
    )
}