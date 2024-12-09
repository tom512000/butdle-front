import React from "react";

export default function MainGameTutorial() {
    return (
        <div className="w-[600px] h-full flex flex-col p-5 overflow-y-scroll mt-16">
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
                <p className="text-lg text-white font-normal font-inter">
                    Genre
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    Valeurs possibles : Homme ou Femme.
                </p>
                <p className="text-lg text-white font-normal font-inter">
                    Emploi
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    La profession ou le rôle de la personne (exemple :
                    Enseignant, Secrétaire, Technicien, etc.).
                </p>
                <p className="text-lg text-white font-normal font-inter">
                    Statut
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    Indique le statut actuel de la personne (par exemple :
                    Permanent, Vacataire, Autre, etc.).
                </p>
                <p className="text-lg text-white font-normal font-inter">
                    Matière(s)
                </p>
                <p className="text-justify text-base text-white font-light font-inter mb-2">
                    Les matières associées à la personne (par exemple : BD,
                    Python, Gestion, Communication, etc.).
                </p>
                <p className="text-lg text-white font-normal font-inter">
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
                <p>
                    Si vous êtes bloqué après plusieurs essais, voici quelques
                    astuces :
                </p>
                <p>
                    1. Concentrez-vous sur les propriétés avec des
                    correspondances partielles pour affiner vos hypothèses.
                </p>
                <p>
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
                <p>Si vous souhaitez rejouer :</p>
                <p>
                    Cliquez sur le bouton Rejouer pour commencer une nouvelle
                    partie.
                </p>
                <p>
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
                <p>Supposons que la personne cible soit Marie Dupont.</p>
                <p>
                    1.Vous commencez par essayer Jean Dupont. Voici ce qui
                    pourrait s&apos;afficher :
                </p>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th scope="col">Genre</th>
                            <th scope="col">Emploi</th>
                            <th scope="col">Statut</th>
                            <th scope="col">Matière(s)</th>
                            <th scope="col">Prénom Nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chris</td>
                            <td>Chris</td>
                            <td>Chris</td>
                            <td>Chris</td>
                            <td>Chris</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    Le nom &#34;Dupont&#34; correspond partiellement (🟧), mais
                    le reste est incorrect (🟥).
                </p>
                <p>
                    2. Vous essayez Marie Martin. Voici les nouvelles
                    indications :
                </p>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th scope="col">Genre</th>
                            <th scope="col">Emploi</th>
                            <th scope="col">Statut</th>
                            <th scope="col">Matière(s)</th>
                            <th scope="col">Prénom Nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chris</td>
                            <td>Chris</td>
                            <td>Chris</td>
                            <td>Chris</td>
                            <td>Chris</td>
                        </tr>
                    </tbody>
                </table>
                <p>Le genre et le prénom correspondent exactement (🟩).</p>
                <p>Le nom est incorrect (🟥).</p>
                <p>
                    Vous essayez enfin Marie Dupont, et toutes les propriétés
                    s&apos;affichent en vert :
                </p>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th scope="col">Genre</th>
                            <th scope="col">Emploi</th>
                            <th scope="col">Statut</th>
                            <th scope="col">Matière(s)</th>
                            <th scope="col">Prénom Nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chris</td>
                            <td>Chris</td>
                            <td>Chris</td>
                            <td>Chris</td>
                            <td>Chris</td>
                        </tr>
                    </tbody>
                </table>
                <p>Vous avez trouvé la bonne personne ! 🎉</p>
            </div>
            <div className="w-full text-left border-b border-b-white">
                <h2 className="text-3xl text-white font-semibold font-parkinsans mb-2">
                    Bon jeu !
                </h2>
            </div>
            <div className="w-full text-justify">
                <p>
                    Prouvez que vous êtes le plus rapide à identifier la
                    personne cible avec le moins d&apos;essais possibles. Bonne
                    chance !
                </p>
            </div>
        </div>
    );
}
