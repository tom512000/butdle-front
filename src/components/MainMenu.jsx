import React from "react";

export default function MainMenu() {
    return (
        <div className="flex flex-col gap-4">
            <a href="/main-game" aria-label="main-game">
                <div className="">
                    <i className="bx bx-list-ul" />
                </div>
                <div className="">
                    <p>Journalier</p>
                    <p>Devine la personne du jour.</p>
                </div>
            </a>
        </div>
    );
}
