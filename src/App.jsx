import React from "react";
import { Route, Switch } from "wouter";
import MainMenu from "./components/MainMenu";
import MainGame from "./components/MainGame";
import NotFound from "./components/NotFound";
import UnlimitedMainGame from "./components/UnlimitedMainGame";

export default function App() {
    return (
        <div className="min-h-screen h-full flex flex-col items-center">
            <img
                src="/images/butdle-logo.png"
                alt="Logo BUTDLE"
                className="mt-10"
            />
            <Switch>
                <Route path="/">
                    <MainMenu />
                </Route>
                <Route path="/daily">
                    <MainGame />
                </Route>
                <Route path="/unlimited">
                    <UnlimitedMainGame />
                </Route>
                <Route path="/the-face">
                    <MainGame />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
