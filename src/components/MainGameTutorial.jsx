import React from "react";

export default function MainGameTutorial() {
    return (
        <div className="w-[600px] h-full flex flex-col p-5 overflow-y-scroll py-12">
            <div className="w-full text-left border-b border-b-white">
                <h2 className="text-3xl text-white font-semibold font-parkinsans mb-2">
                    Comment jouer ?
                </h2>
            </div>
            <div className="w-full">
                <p className="text-justify text-base text-white font-light font-inter mt-3">
                    Dans ce jeu, votre objectif est de{" "}
                    <span className="font-semibold">
                        deviner une personne cible{" "}
                    </span>
                    parmi une liste. À chaque essai vous obtiendrez des{" "}
                    <span className="font-semibold">indices</span> pour savoir
                    si vous vous rapprochez ou non de la{" "}
                    <span className="font-semibold">bonne réponse</span>.
                </p>
                <p className="text-justify text-base text-white font-light font-inter my-5">
                    Le jeu garde la trace de{" "}
                    <span className="font-semibold">vos tentatives</span> et
                    vous met au défi de trouver la personne avec le{" "}
                    <span className="font-semibold">
                        moins d&apos;essais possibles
                    </span>
                    .
                </p>
            </div>
            <div className="w-full text-left border-b border-b-white">
                <h2 className="text-3xl text-white font-semibold font-parkinsans mb-2">
                    Par quoi commencer ?
                </h2>
            </div>
            <div className="w-full text-justify">
                <p className="text-justify text-base text-white font-light font-inter mt-3">
                    1. Commencez à taper le{" "}
                    <span className="font-semibold">
                        prénom ou le nom d&apos;une personne{" "}
                    </span>
                    dans le champ de recherche.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-2 mb-5">
                    Une <span className="font-semibold">liste</span> de
                    suggestions apparaîtra si{" "}
                    <span className="font-semibold">la personne existe</span> et
                    qu&apos;elle n&apos;a{" "}
                    <span className="font-semibold">
                        pas encore été essayée
                    </span>
                    .
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-3">
                    2. Cliquez sur{" "}
                    <span className="font-semibold">une suggestion</span> pour
                    soumettre votre essai.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-2 mb-1">
                    Si votre essai correspond à la personne cible,{" "}
                    <span className="font-semibold">
                        vous remportez la partie !
                    </span>
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-5">
                    Si ce n&apos;est pas la bonne personne, votre tentative sera{" "}
                    <span className="font-semibold">ajoutée à une liste</span>{" "}
                    et comparée à la cible à travers différentes propriétés.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-3">
                    3. Affinez vos essais grâce aux{" "}
                    <span className="font-semibold">
                        propriétés des personnes
                    </span>{" "}
                    :
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-2 mb-1">
                    À chaque essai, les propriétés de la personne{" "}
                    <span className="font-semibold">
                        (genre, emploi, statut, matière(s), prénom et nom){" "}
                    </span>
                    sont comparées à celles de la cible.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-2 mb-1">
                    Indicateurs de couleurs :
                </p>
                <p className="text-justify text-base text-white font-light font-inter">
                    - <span className="text-[#008000] font-semibold">Vert</span>{" "}
                    : La propriété correspond exactement à celle de la cible.
                </p>
                <p className="text-justify text-base text-white font-light font-inter">
                    -{" "}
                    <span className="text-[#ffff00] font-semibold">Jaune</span>{" "}
                    : La propriété correspond partiellement à celle de la cible.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    -{" "}
                    <span className="text-[#ff0000] font-semibold">Rouge</span>{" "}
                    : Aucune correspondance pour cette propriété.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-5">
                    Continuez vos essais jusqu&apos;à ce que vous trouviez{" "}
                    <span className="font-semibold">la personne cible</span>.
                </p>
            </div>
            <div className="w-full text-left border-b border-b-white">
                <h2 className="text-3xl text-white font-semibold font-parkinsans mb-2">
                    Propriétés
                </h2>
            </div>
            <div className="w-full text-justify">
                <p className="text-justify text-base text-white font-light font-inter mt-3 mb-2">
                    Voici les détails des propriétés utilisées pour vous guider
                    vers la bonne personne :
                </p>
                <p className="text-lg text-white font-normal font-parkinsans">
                    Genre
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    Valeurs possibles : Homme ou Femme.
                </p>
                <p className="text-lg text-white font-normal font-parkinsans">
                    Emploi
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    La profession ou le rôle de la personne (exemple :
                    Enseignant, Secrétaire, Technicien, etc.).
                </p>
                <p className="text-lg text-white font-normal font-parkinsans">
                    Statut
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    Indique le statut actuel de la personne (par exemple :
                    Permanent, Vacataire et Autre).
                </p>
                <p className="text-lg text-white font-normal font-parkinsans">
                    Matière(s)
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    Les matières associées à la personne (par exemple : BD,
                    Python, Gestion, Communication, etc.).
                </p>
                <p className="text-lg text-white font-normal font-parkinsans">
                    Prénom et Nom
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-5">
                    Chaque essai compare également le prénom et le nom à ceux de
                    la personne cible.
                </p>
            </div>
            <div className="w-full text-left border-b border-b-white">
                <h2 className="text-3xl text-white font-semibold font-parkinsans mb-2">
                    Indices
                </h2>
            </div>
            <div className="w-full text-justify">
                <p className="text-justify text-base text-white font-light font-inter mt-3 mb-2">
                    Si vous êtes bloqué après plusieurs essais, voici{" "}
                    <span className="font-semibold">quelques astuces</span> :
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    1. Concentrez-vous sur les propriétés avec des{" "}
                    <span className="font-semibold">
                        correspondances partielles{" "}
                    </span>
                    pour affiner vos hypothèses.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-5">
                    2. Déduisez les propriétés non correspondantes : par
                    exemple, si une propriété est rouge, la bonne réponse est
                    sûrement différente pour cet attribut.
                </p>
            </div>
            <div className="w-full text-left border-b border-b-white">
                <h2 className="text-3xl text-white font-semibold font-parkinsans mb-2">
                    Recommencer une partie
                </h2>
            </div>
            <div className="w-full text-justify">
                <p className="text-justify text-base text-white font-light font-inter mt-3 mb-2">
                    Dans le mode journalier, si vous avez validé la personne
                    cible, vous devez attendre{" "}
                    <span className="font-semibold">24 heures</span> afin de
                    rejouer.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    Dans le mode illimité, cliquez sur le bouton
                    &#34;Rejouer&#34; après avoir validé la personne cible pour{" "}
                    <span className="font-semibold">
                        commencer une nouvelle partie
                    </span>
                    .
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-5">
                    Une nouvelle personne cible sera choisie aléatoirement, et
                    toutes vos tentatives précédentes seront réinitialisées.
                </p>
            </div>
            <div className="w-full text-left border-b border-b-white">
                <h2 className="text-3xl text-white font-semibold font-parkinsans mb-2">
                    Exemple
                </h2>
            </div>
            <div className="w-full text-justify">
                <p className="text-justify text-base text-white font-light font-inter mt-3 mb-2">
                    Supposons que la personne cible soit{" "}
                    <span className="font-semibold">Marie Dupont</span> (Femme,
                    Enseignant, Vacataire et les matières BD, Gestion et
                    Automatisation).
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-3">
                    1. Vous commencez par essayer Jean Dupont. Voici ce qui
                    pourrait s&apos;afficher :
                </p>
                <div className="w-full grid grid-cols-6 h-8 bg-gray-800 rounded-md mb-6">
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500 rounded-l-lg">
                        Genre
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Emploi
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Statut
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Matière(s)
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Prénom
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500 rounded-r-lg">
                        Nom
                    </div>
                </div>
                <div className="w-full grid grid-cols-6 h-12 mb-3">
                    <div
                        style={{ color: "red" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500 rounded-l-lg"
                    >
                        Homme
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        Enseignant
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        Vacataire
                    </div>
                    <div
                        style={{ color: "yellow" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        BD, Python, C++
                    </div>
                    <div
                        style={{ color: "red" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        Jean
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500 rounded-r-lg"
                    >
                        Dupont
                    </div>
                </div>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    Dans cet exemple, l&apos;emploi, le statut et le nom sont en{" "}
                    <span style={{ color: "green" }} className="font-semibold">
                        Vert
                    </span>
                    , les champs correspondent donc à ceux de la personne cible.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-1 mb-2">
                    Le nom et les matières sont en{" "}
                    <span style={{ color: "yellow" }} className="font-semibold">
                        Jaune
                    </span>
                    , les champs correspondent partiellement à ceux de la
                    personne cible.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-1 mb-3">
                    Le genre et le prénom sont en{" "}
                    <span style={{ color: "red" }} className="font-semibold">
                        Rouge
                    </span>
                    , les champs ne correspondent pas du tout à ceux de la
                    personne cible.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-3">
                    2. Vous essayez Marie Martin. Voici les nouvelles
                    indications :
                </p>
                <div className="w-full grid grid-cols-6 h-8 bg-gray-800 rounded-md mb-6">
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500 rounded-l-lg">
                        Genre
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Emploi
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Statut
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Matière(s)
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Prénom
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500 rounded-r-lg">
                        Nom
                    </div>
                </div>
                <div className="w-full grid grid-cols-6 h-12 mb-3">
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500 rounded-l-lg"
                    >
                        Femme
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        Enseignant
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        Vacataire
                    </div>
                    <div
                        style={{ color: "yellow" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        PPP, Python
                    </div>
                    <div
                        style={{ color: "red" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        Marie
                    </div>
                    <div
                        style={{ color: "red" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500 rounded-r-lg"
                    >
                        Martin
                    </div>
                </div>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    Dans cet exemple, le genre, l&apos;emploi et le statut sont
                    en{" "}
                    <span style={{ color: "green" }} className="font-semibold">
                        Vert
                    </span>
                    , les champs correspondent donc à ceux de la personne cible.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-1 mb-2">
                    Les matières sont en{" "}
                    <span style={{ color: "yellow" }} className="font-semibold">
                        Jaune
                    </span>
                    , ce champ correspond partiellement à celui de la personne
                    cible.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mt-1 mb-3">
                    Le prénom et le nom sont en{" "}
                    <span style={{ color: "red" }} className="font-semibold">
                        Rouge
                    </span>
                    , les champs ne correspondent pas du tout à ceux de la
                    personne cible.
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-3">
                    3. Vous essayez enfin Claire Dupont, et toutes les
                    propriétés s&apos;affichent en{" "}
                    <span style={{ color: "green" }} className="font-semibold">
                        Vert{" "}
                    </span>
                    :
                </p>
                <div className="w-full grid grid-cols-6 h-8 bg-gray-800 rounded-md mb-6">
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500 rounded-l-lg">
                        Genre
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Emploi
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Statut
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Matière(s)
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500">
                        Prénom
                    </div>
                    <div className="flex justify-center items-center px-10 py-3 text-center text-sm font-parkinsans font-semibold bg-gray-800 text-gray-500 rounded-r-lg">
                        Nom
                    </div>
                </div>
                <div className="w-full grid grid-cols-6 h-12 mb-3">
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500 rounded-l-lg"
                    >
                        Femme
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        Enseignant
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        Vacataire
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        PPP, BD, Python
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500"
                    >
                        Claire
                    </div>
                    <div
                        style={{ color: "green" }}
                        className="flex justify-center items-center text-center text-sm font-inter font-normal bg-gray-800 text-gray-500 rounded-r-lg"
                    >
                        Dupont
                    </div>
                </div>
                <p className="text-justify text-base text-white font-light font-inter mb-5">
                    Vous avez trouvé{" "}
                    <span className="font-semibold">la bonne personne</span> !{" "}
                    🎉
                </p>
            </div>
            <div className="w-full text-left border-b border-b-white">
                <h2 className="text-3xl text-white font-semibold font-parkinsans mb-2">
                    Bon jeu !
                </h2>
            </div>
            <div className="w-full">
                <p className="text-justify text-base text-white font-light font-inter mt-3 mb-2">
                    Prouvez que vous êtes le plus rapide à identifier la
                    personne cible avec le moins d&apos;essais possibles.
                    <span className="font-semibold">Bonne chance !</span>
                </p>
            </div>
        </div>
    );
}
