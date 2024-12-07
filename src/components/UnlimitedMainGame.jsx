import React, { useState, useEffect } from "react";
import {
    CloseOutlined,
    SearchOutlined,
    ReloadOutlined,
    QuestionOutlined,
} from "@ant-design/icons";
import data from "../data/persons.json";
import PersonCard from "./PersonCard";

export default function UnlimitedMainGame() {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [validatedPersons, setValidatedPersons] = useState([]);
    const [targetPerson, setTargetPerson] = useState(null);
    const [trialsNumber, setTrialsNumber] = useState(0);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        // Stockage de unlimitedRandomPerson
        if (localStorage.getItem("unlimitedRandomPerson") == null) {
            const unlimitedRandomPerson =
                data[Math.floor(Math.random() * data.length)];
            setTargetPerson(unlimitedRandomPerson);
            localStorage.setItem(
                "unlimitedRandomPerson",
                JSON.stringify(unlimitedRandomPerson),
            );
        } else {
            const unlimitedRandomPerson = JSON.parse(
                localStorage.getItem("unlimitedRandomPerson"),
            );
            setTargetPerson(unlimitedRandomPerson);
        }

        // Stockage de unlimitedListPersons
        if (localStorage.getItem("unlimitedListPersons") != null) {
            const unlimitedListPersons =
                JSON.parse(localStorage.getItem("unlimitedListPersons")) || [];
            setValidatedPersons(unlimitedListPersons);

            // Revérification de la victoire
            const unlimitedRandomPerson = JSON.parse(
                localStorage.getItem("unlimitedRandomPerson"),
            );

            const isGameWon = unlimitedListPersons.some(
                (person) =>
                    person.nom === unlimitedRandomPerson.nom &&
                    person.prenom === unlimitedRandomPerson.prenom,
            );

            if (isGameWon) {
                setGameWon(true);
            }
        }

        // Stockage de trialsNumber
        if (localStorage.getItem("trialsNumber") == null) {
            const trialsNb = 0;
            setTrialsNumber(trialsNb);
            localStorage.setItem("trialsNumber", trialsNb.toString());
        } else {
            const trialsNb = parseInt(localStorage.getItem("trialsNumber"), 10);
            setTrialsNumber(trialsNb);
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
        // Liste des personnes validées
        const persons = [person, ...validatedPersons];
        setValidatedPersons(persons);
        localStorage.setItem("unlimitedListPersons", JSON.stringify(persons));

        // Nombre d'essai
        const trialsNb = parseInt(localStorage.getItem("trialsNumber"), 10) + 1;
        setTrialsNumber(trialsNb);
        localStorage.setItem("trialsNumber", trialsNb.toString());

        // Champ d'ajout
        setInput("");

        // Liste des suggestions
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
        // Personne aléatoire
        const unlimitedRandomPerson =
            data[Math.floor(Math.random() * data.length)];
        setTargetPerson(unlimitedRandomPerson);
        localStorage.setItem(
            "unlimitedRandomPerson",
            JSON.stringify(unlimitedRandomPerson),
        );

        // Personnes validées
        setValidatedPersons([]);
        localStorage.setItem("unlimitedListPersons", null);

        // Nombre d'essai
        const trialsNb = 0;
        setTrialsNumber(trialsNb);
        localStorage.setItem("trialsNumber", trialsNb.toString());

        // État du jeu
        setGameWon(false);

        // Champ d'ajout
        setInput("");
    }

    return (
        <div className="flex flex-col items-center">
            {gameWon ? (
                <div className="w-[430px] py-8 px-10 flex flex-col justify-center items-center bg-gradient-to-b from-green-700 to-gray-800 rounded-md border border-emerald-300 mt-10">
                    <h1 className="text-4xl text-white font-parkinsans font-semibold">
                        BRAVO !
                    </h1>
                    <h2 className="text-lg text-white font-parkinsans font-medium mt-5">
                        Vous avez trouvé la bonne personne en{" "}
                        <span className="font-bold">{trialsNumber}</span>{" "}
                        essai(s) !
                    </h2>
                    <div className="w-full flex flex-col items-center mt-8">
                        <img
                            className="rounded-full object-cover"
                            src={`/images/${targetPerson.image}`}
                            alt={`${targetPerson.prenom} ${targetPerson.nom}`}
                        />
                        <h2 className="text-xl text-white font-parkinsans font-semibold mt-5">
                            {targetPerson.prenom} {targetPerson.nom}
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={handleRestart}
                        className="flex justify-center items-center bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm font-inter px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-6 ease-linear transition-all duration-150"
                    >
                        <ReloadOutlined className="text-base text-white mr-2" />
                        Rejouer
                    </button>
                </div>
            ) : (
                <div className="relative mt-10">
                    <div className="relative flex">
                        <button
                            type="button"
                            className="w-[37px] min-w-[37px] h-[38px] flex justify-center items-center mr-3 group bg-gray-800 rounded-md"
                        >
                            <QuestionOutlined className="text-xl text-gray-500 group-hover:text-gray-600 transition-colors duration-200" />
                        </button>
                        <div className="relative h-[37px] mb-0.5">
                            <input
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Entrez un nom ou un prénom"
                                aria-label="search"
                                className="appearance-none border-2 pl-10 bg-gray-800 border-gray-800 hover:border-gray-600 transition-colors rounded-md w-[300px] py-2 px-3 font-inter text-sm text-gray-300 leading-tight focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={handleClearInput}
                                aria-label="cross"
                                className="absolute right-0 inset-y-0 flex items-center cursor-pointer"
                            >
                                <CloseOutlined className="text-xl ml-3 mr-3 text-gray-500 hover:text-gray-600" />
                            </button>
                            <div
                                aria-label="search"
                                className="absolute left-0 inset-y-0 flex items-center"
                            >
                                <SearchOutlined className="text-xl mx-3 text-gray-500" />
                            </div>
                        </div>
                        <div className="w-[100px] min-w-[100px] h-[38px] flex justify-center items-center ml-3 group bg-gray-800 rounded-md">
                            <p className="font-inter text-sm text-gray-500 font-semibold">
                                {trialsNumber}&ensp;
                                <span className="font-medium">essai(s)</span>
                            </p>
                        </div>
                    </div>
                    <div
                        className="absolute top-full left-[3.10rem] w-[300px] bg-gray-900 z-10 rounded-[4px]"
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
                                onClick={() => handleSuggestionClick(person)}
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
            )}
            <div className="grid grid-cols-[150px_150px_150px_320px_150px_150px_80px] mt-10">
                <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500 rounded-l-lg">
                    GENRE
                </div>
                <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                    EMPLOI
                </div>
                <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                    STATUT
                </div>
                <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                    MATIÈRE(S)
                </div>
                <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                    PRÉNOM
                </div>
                <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500">
                    NOM
                </div>
                <div className="text-center bg-gray-800 rounded-r-lg" />
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
        </div>
    );
}
