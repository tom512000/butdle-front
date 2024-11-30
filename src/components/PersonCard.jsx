import React from "react";
import PropTypes from "prop-types";

export default function PersonCard({ person, target }) {
    // Fonction pour déterminer la couleur en fonction des critères
    function getColor(field, value) {
        if (field === "matieres") {
            if (value.length === 0) return "red"; // Liste vide
            const commonSubjects = value.filter((subject) =>
                target.matieres.includes(subject),
            );
            if (
                commonSubjects.length > 0 &&
                commonSubjects.length !== target.matieres.length
            )
                return "yellow"; // Au moins une matière commune
            if (JSON.stringify(value) === JSON.stringify(target.matieres))
                return "green"; // Matières identiques
            return "red"; // Aucun lien
        }

        return value === target[field] ? "green" : "red";
    }

    return (
        <div
            style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
            }}
        >
            <p style={{ color: getColor("nom", person.nom) }}>
                Nom: {person.nom}
            </p>
            <p style={{ color: getColor("prenom", person.prenom) }}>
                Prénom: {person.prenom}
            </p>
            <p style={{ color: getColor("genre", person.genre) }}>
                Genre: {person.genre}
            </p>
            <p style={{ color: getColor("emploi", person.emploi) }}>
                Emploi: {person.emploi}
            </p>
            <p style={{ color: getColor("statut", person.statut) }}>
                Statut: {person.statut}
            </p>
            <p style={{ color: getColor("matieres", person.matieres) }}>
                Matières:{" "}
                {person.matieres.length > 0
                    ? person.matieres.join(", ")
                    : "Aucune"}
            </p>
        </div>
    );
}

PersonCard.propTypes = {
    target: PropTypes.shape({
        matieres: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    person: PropTypes.shape({
        prenom: PropTypes.string.isRequired,
        nom: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        emploi: PropTypes.string.isRequired,
        statut: PropTypes.string.isRequired,
        matieres: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};
