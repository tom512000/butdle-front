import React, { useState, useEffect } from "react";
import data from "./data.json";
import PersonCard from "./components/PersonCard";

export default function App() {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [validatedPersons, setValidatedPersons] = useState([]);
    const [targetPerson, setTargetPerson] = useState(null);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        const randomPerson = data[Math.floor(Math.random() * data.length)];
        setTargetPerson(randomPerson);
    }, []);

    function handleInputChange(e) {
        const { value } = e.target;
        setInput(value);

        // Filtrer les suggestions en fonction de l'entrée
        const filteredSuggestions = data.filter(
            (person) =>
                !validatedPersons.some(
                    (validated) =>
                        validated.nom === person.nom &&
                        validated.prenom === person.prenom,
                ) && // Exclure les personnes déjà validées
                (person.nom.toLowerCase().includes(value.toLowerCase()) ||
                    person.prenom.toLowerCase().includes(value.toLowerCase())),
        );
        setSuggestions(filteredSuggestions);
    }

    function handleSuggestionClick(person) {
        // Ajouter une personne validée
        setValidatedPersons([...validatedPersons, person]);
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

    function handleRestart() {
        // Réinitialiser le jeu
        const randomPerson = data[Math.floor(Math.random() * data.length)];
        setTargetPerson(randomPerson);
        setValidatedPersons([]);
        setGameWon(false);
        setInput("");
    }

    return (
        <div className="min-h-screen h-full flex flex-col items-center">
            <h1>Jeu de Devinette</h1>

            {gameWon ? (
                <div>
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
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Entrez un nom ou un prénom"
                        style={{ padding: "10px", width: "300px" }}
                    />
                    <div>
                        {suggestions.map((person) => (
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                            <div
                                onClick={() => handleSuggestionClick(person)}
                                style={{
                                    cursor: "pointer",
                                    background: "#f0f0f0",
                                    padding: "5px",
                                    marginTop: "5px",
                                }}
                            >
                                {person.prenom} {person.nom}
                            </div>
                        ))}
                    </div>
                    <h3>Personnes validées :</h3>
                    <div className="grid grid-cols-6 max-w-screen-lg">
                        <div className="px-10 py-3 text-center text-base font-parkinsans font-semibold bg-gray-800 text-gray-500 rounded-l-lg">
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
                        {validatedPersons.map((person) => (
                            <PersonCard person={person} target={targetPerson} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
