import React from "react";
import PropTypes from "prop-types";

export default function PersonCard({ person, target }) {
    // Fonction pour déterminer la couleur en fonction des critères
    function getColor(field, value) {
        if (field === "matieres") {
            // Si la liste est vide
            if (value.length === 0) return "red";

            const commonSubjects = value.filter((subject) =>
                target.matieres.includes(subject),
            );

            // Si au moins une matière commune
            if (
                commonSubjects.length > 0 &&
                commonSubjects.length !== target.matieres.length
            )
                return "yellow";

            // Si matières identiques
            if (JSON.stringify(value) === JSON.stringify(target.matieres)) {
                return "green";
            }

            // Aucun lien
            return "red";
        }

        return value === target[field] ? "green" : "red";
    }

    return (
        <>
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
            <div className="flex justify-center items-center py-5 bg-gray-800 rounded-l-lg">
                <img
                    className="rounded-full h-12 w-12 object-cover ml-10 z-50"
                    src={`/images/${person.image}`}
                    alt={`${person.prenom} ${person.nom}`}
                />
            </div>
            <div
                className="flex justify-center items-center px-10 py-5 text-center text-base font-inter font-normal bg-gray-800 text-gray-500"
                style={{ color: getColor("prenom", person.prenom) }}
            >
                {person.prenom}
            </div>
            <div
                className="flex justify-center items-center px-10 py-5 text-center text-base font-inter font-normal bg-gray-800 text-gray-500"
                style={{ color: getColor("nom", person.nom) }}
            >
                {person.nom}
            </div>
            <div
                className="flex justify-center items-center px-10 py-5 text-center text-base font-inter font-normal bg-gray-800 text-gray-500"
                style={{ color: getColor("genre", person.genre) }}
            >
                {person.genre}
            </div>
            <div
                className="flex justify-center items-center px-10 py-5 text-center text-base font-inter font-normal bg-gray-800 text-gray-500"
                style={{ color: getColor("emploi", person.emploi) }}
            >
                {person.emploi}
            </div>
            <div
                className="flex justify-center items-center px-10 py-5 text-center text-base font-inter font-normal bg-gray-800 text-gray-500"
                style={{ color: getColor("statut", person.statut) }}
            >
                {person.statut}
            </div>
            <div
                className="flex justify-center items-center px-2 py-2 text-wrap text-center text-base font-inter font-normal bg-gray-800 text-gray-500 rounded-r-lg"
                style={{ color: getColor("matieres", person.matieres) }}
            >
                {person.matieres.length > 0
                    ? person.matieres.join(", ")
                    : "Aucune"}
            </div>
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
            <div className="h-2" />
        </>
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
        image: PropTypes.string,
    }),
};

PersonCard.defaultProps = {
    person: {
        matieres: [],
        image: "",
    },
};
