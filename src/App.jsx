import React from "react";
import { Route, Switch } from "wouter";
import MainGame from "./components/MainGame";

export default function App() {
    return (
        <div className="min-h-screen h-full flex flex-col items-center">
            <img
                src="/images/butdle-logo.png"
                alt="Logo BUTDLE"
                className="mt-10"
            />
            <Switch>
                <Route path="/main-game">
                    <MainGame />
                </Route>
            </Switch>
        </div>
    );
}
