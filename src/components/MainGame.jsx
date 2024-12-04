import React, { useState, useEffect } from "react";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import data from "../data/persons.json";
import PersonCard from "./PersonCard";

export default function MainGame() {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [validatedPersons, setValidatedPersons] = useState([]);
    const [targetPerson, setTargetPerson] = useState(null);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("randomPerson") == null) {
            const randomPerson = data[Math.floor(Math.random() * data.length)];
            setTargetPerson(randomPerson);
            localStorage.setItem("randomPerson", JSON.stringify(randomPerson));
        } else {
            const randomPerson = JSON.parse(
                localStorage.getItem("randomPerson"),
            );
            setTargetPerson(randomPerson);
        }
    }, []);

    function handleInputChange(e) {
        const { value } = e.target;
        setInput(value);

        // Filtrer les suggestions en fonction de l'entrée
        if (value.trim() !== "") {
            const filteredSuggestions = data
                .filter(
                    (person) =>
                        !validatedPersons.some(
                            (validated) =>
                                validated.nom === person.nom &&
                                validated.prenom === person.prenom,
                        ) && // Exclure les personnes déjà validées
                        (person.nom
                            .toLowerCase()
                            .includes(value.toLowerCase()) ||
                            person.prenom
                                .toLowerCase()
                                .includes(value.toLowerCase())),
                )
                .slice(0, 5); // Limiter à 5 suggestions
            setSuggestions(filteredSuggestions);
        } else {
            // Si l'input est vide, vider les suggestions
            setSuggestions([]);
        }
    }

    function handleSuggestionClick(person) {
        // Ajouter une personne validée
        setValidatedPersons([person, ...validatedPersons]);
        setInput("");
        setSuggestions([]);

        // Vérifier si c'est la bonne personne
        if (
            person.nom === targetPerson.nom &&
            person.prenom === targetPerson.prenom
        ) {
            setGameWon(true);
        }
    }

    function handleClearInput() {
        // Réinitialiser le champ d'entrée
        setInput("");
        setSuggestions([]);
    }

    function handleRestart() {
        // Réinitialiser le jeu
        const randomPerson = data[Math.floor(Math.random() * data.length)];
        setTargetPerson(randomPerson);
        setValidatedPersons([]);
        setGameWon(false);
        setInput("");
    }

    return (
        <div className="flex flex-col items-center">
            {gameWon ? (
                <div className="bg-gradient-to-b from-emerald-300 to-gray-800">
                    <h2>
                        Bravo ! Vous avez trouvé {targetPerson.prenom}{" "}
                        {targetPerson.nom} !
                    </h2>
                    <button type="button" onClick={handleRestart}>
                        Rejouer
                    </button>
                </div>
            ) : (
                <>
                    <div className="relative w-[320px] mt-10">
                        <div className="relative mb-0.5">
                            <input
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Entrez un nom ou un prénom"
                                aria-label="search"
                                className="appearance-none border-2 pl-10 bg-gray-800 border-gray-800 hover:border-gray-600 transition-colors rounded-md w-full py-2 px-3 font-inter text-sm text-gray-300 leading-tight focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={handleClearInput}
                                aria-label="cross"
                                className="absolute right-0 inset-y-0 flex items-center cursor-pointer"
                            >
                                <CloseOutlined className="bx bx-x text-xl ml-3 mr-3 text-gray-500 hover:text-gray-600" />
                            </button>
                            <div
                                aria-label="search"
                                className="absolute left-0 inset-y-0 flex items-center"
                            >
                                <SearchOutlined className="bx bx-search text-xl mx-3 text-gray-500" />
                            </div>
                        </div>
                        <div
                            className="absolute top-full left-0 w-full bg-gray-900 z-10 rounded-[4px]"
                            style={{
                                border:
                                    suggestions.length > 0
                                        ? "1px solid #444852"
                                        : "none",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            {suggestions.map((person) => (
                                <button
                                    key={`${person.prenom}-${person.nom}`}
                                    type="button"
                                    onClick={() =>
                                        handleSuggestionClick(person)
                                    }
                                    className="w-full flex justify-start items-center border-b-2 border-gray-800 p-3 text-gray-500 font-inter cursor-pointer"
                                >
                                    <img
                                        className="rounded-full h-8 w-8 object-cover ml-2 mr-4"
                                        src={`/images/${person.image}`}
                                        alt={`${person.prenom} ${person.nom}`}
                                    />
                                    <span className="font-semibold">
                                        {person.prenom}
                                    </span>
                                    &thinsp;&thinsp;{person.nom}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-[70px_150px_150px_150px_150px_150px_320px] mt-10">
                        <div className="text-center bg-gray-800 rounded-l-lg" />
                        <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                            PRÉNOM
                        </div>
                        <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                            NOM
                        </div>
                        <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                            GENRE
                        </div>
                        <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                            EMPLOI
                        </div>
                        <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                            STATUT
                        </div>
                        <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500 rounded-r-lg">
                            MATIÈRE(S)
                        </div>
                        <div className="h-2" />
                        <div className="h-2" />
                        <div className="h-2" />
                        <div className="h-2" />
                        <div className="h-2" />
                        <div className="h-2" />
                        <div className="h-2" />
                        {validatedPersons.map((person) => (
                            <PersonCard
                                key={`${person.prenom}-${person.nom}`}
                                person={person}
                                target={targetPerson}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
