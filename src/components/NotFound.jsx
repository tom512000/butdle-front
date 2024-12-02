import React from "react";

export default function NotFound() {
    return (
        <div className="grid place-content-center bg-gray-800 px-10 py-10 mt-16 rounded-lg border border-gray-500">
            <div className="text-center">
                <h1 className="text-9xl font-black font-parkinsans text-light-blue-but">
                    404
                </h1>
                <p className="text-2xl font-bold font-parkinsans tracking-tight text-white sm:text-4xl">
                    Page inexistante 😓
                </p>
                <p className="mt-4 text-gray-500 font-inter">
                    La page que vous recherchez n&apos;existe pas.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block rounded bg-light-blue-but px-5 py-3 text-sm font-medium font-inter text-white hover:bg-light-purple focus:outline-none focus:ring"
                >
                    Retourner à l&apos;accueil
                </a>
            </div>
        </div>
    );
}
