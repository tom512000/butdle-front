import React from "react";
import { Route, Switch } from "wouter";
import MainMenu from "./components/MainMenu";
import DailyMainGame from "./components/DailyMainGame";
import UnlimitedMainGame from "./components/UnlimitedMainGame";
import NotFound from "./components/NotFound";

export default function App() {
    return (
        <div className="min-h-screen h-full flex flex-col items-center">
            <a href="/">
                <img
                    src="/images/butdle-logo.png"
                    alt="Logo BUTDLE"
                    className="mt-10"
                />
            </a>

            <Switch>
                <Route path="/">
                    <MainMenu />
                </Route>
                <Route path="/daily">
                    <DailyMainGame />
                </Route>
                <Route path="/unlimited">
                    <UnlimitedMainGame />
                </Route>
                <Route path="/the-face">
                    <DailyMainGame />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
