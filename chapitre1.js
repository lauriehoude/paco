let chaptersObj = {
    recommencer: {
        subtitle: "Recommencer",
        text: " Vous avez pris la mauvaise décision, vous devez recommencer.",
        image: "assets/photo.jpg",
        options: [{ text: "Recommencer!", action: "goToChapter('introduction')" },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    },

    introduction: {
        subtitle: "introduction",
        text: "Paco le petit chat roux a entendu parlé d'un trésor caché celui de la forêt Valark.",
        image: "assets/OIP.jfif",
        video: "assets/videoplayback.mp4",
        options: [{ text: "continuer", action: "goToChapter('introduction1')" },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    },

    introduction1: {
        subtitle: "Aventure",
        text: "est ce qu'il devrait sortir de son lit et se mettre à sa recherche?",
        image: "assets/introduction1.jpg",
        options: [
            { text: "il sort de son lit", action: "goToChapter('sortir_dehors')" },
            {
                text: "Il reste dans son lit",
                action: "goToChapter('lit_recommencer')"
            },
            { text: "Effacer ma partie", action: "reset()" }

        ]
    },

    lit_recommencer: {
        subtitle: "Dormir recommencer",
        text: "Paco prefere dormir que de partir à l'aventure",
        image: "assets/cat_sleep.jpg",
        options: [{ text: "dormir", action: "goToChapter('recommencer')" },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    },

    sortir_dehors: {
        subtitle: "Chemin",
        text: "Quel chemin Paco devrait-il prendre?",
        image: "assets/forest_2.jpg",
        options: [
            { text: "chemin gauche", action: "goToChapter('chemin_gauche_riviere')" },
            { text: "chemin droit", action: "goToChapter('chemin_droit_montagne')" },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    },

    chemin_gauche_riviere: {
        subtitle: "Rivière",
        text: "Paco se retrouve devant une rivière mais, malheureusement, Paco ne sait pas comment nager.",
        image: "assets/chemin_riviere_2.png",
        options: [
            { text: " Essayer de nager", action: "goToChapter('nager')" },
            {
                text: "Trouver des matériaux",
                action: "goToChapter('riviere_materiaux')"
            },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    },
    nager: {
        subtitle: "Rivière",
        text: "Avec beaucoup de difficulté, il arrive à traverser la rivière.",
        image: "assets/chemin_riviere_2.png",
        options: [{ text: "continuer", action: "goToChapter('riviere_materiaux')" },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    },


    riviere_materiaux: {
        subtitle: " Forêt Valark ",
        text: "Paco marche, marche et marche ",
        image: "assets/chemin_riviere_2.png",
        options: [{ text: "continuer", action: "goToChapter('finale')" },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    },

    chemin_droit_montagne: {
        subtitle: "Montagne",
        text: "Paco se retrouve face à une énorme montagne. Il doit trouvé une manière de la monter. Lors de sa recherche, il fait la connaissance de Layla, une jeune sorcière de la montagne. Elle lui propose son aide aide",
        image: "assets/montagne2.jfif",
        options: [
            { text: " Accepter son aide ", action: "aideTrue()" },
            {
                text: " Refuser son aide ",
                action: "goToChapter('escalader_montagne')"
            },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    },

    prendre_potion_recommencer: {
        subtitle: " Potion recommencer",
        text: " Vous avez pris la décision d'accepter de l'aide ce qui vous fait échouer la quête. Vous devez recommencer. <br/> En prennant cette potion il commence à se sentir bizzare et tombe dans les pommes. Il a oublié qu'il faut jamais faire confiance aux sorcières des montagnes",
        image: "assets/potion.jpg",
        options: [{ text: " recommencer ", action: "goToChapter('recommencer')" },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    },

    escalader_montagne: {
        subtitle: "sommet de la montagne",
        text: "Il escade la montagne.",
        image: "assets/mountain_escalader.webp",
        options: [{ text: "continuer", action: "aideStatus()" },
            { text: "Effacer ma partie", action: "reset()" }
        ],
        video: "assets/chat.mp4"
    },

    finale: {
        subtitle: " La fin de la mission",
        text: "Après des heures et des heures de recherches, il trouve le fameux diamant dans la grotte. Cependant celui-ci est protégé par Layla. étant donné que Paco n'a demander aucune aide elle le lui donne!",
        image: "assets/forest_valark.jpg",
        options: [{ text: "Recommencer", action: "goToChapter('introduction')" },
            { text: "Effacer ma partie", action: "reset()" }
        ]
    }
};

function goToChapter(chapterName) {

    let input = document.querySelector('[type="checkbox"]');
    console.log(input)
    let inputOui = input.checked;
    console.log(inputOui)
    if (inputOui == true) {
        const woo = new Audio("assets/woo.mp3")
        woo.currentTime = 0;
        woo.play()
    }

    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
    console.log(chaptersObj[chapterName]["image"]);
    console.log(chaptersObj[chapterName]["videos"]);

    document.querySelector(".bouton").innerHTML = " ";
    document.querySelector(".quete").innerHTML = chaptersObj[chapterName]["subtitle"];
    document.querySelector(".texte").innerHTML = chaptersObj[chapterName]["text"];


    if (chaptersObj[chapterName]["video"]) {
        document.querySelector(".photos").innerHTML = `<video src="${chaptersObj[chapterName]['video']}" autoplay loop muted ></video>`;
    } else {
        document.querySelector(".photos").innerHTML = `<img src="${chaptersObj[chapterName].image}">`;
    }




    for (i in chaptersObj[chapterName].options) {
        const boutons = document.createElement("button");
        boutons.setAttribute("class", "choix");
        boutons.setAttribute("onclick", chaptersObj[chapterName].options[i].action);
        const nde = document.createTextNode(
            chaptersObj[chapterName].options[i].text
        );
        boutons.appendChild(nde);
        const parent = document.querySelector(".bouton");
        parent.appendChild(boutons);




    };
    localStorage.setItem("chapter", [chapterName]);




}
let keyFound = false;
let aideDemande = false;

function keyTrue() {
    localStorage.setItem("key", true)
    keyFound = Boolean("key");
    goToChapter("Chemin_droit_montagne");
}

function keyStatus() {
    if (keyFound == true) {
        goToChapter("finale");
    } else {
        goToChapter("prendre_potion_recommencer");
    }
}

function aideTrue() {
    localStorage.setItem("aide", true)
    aideDemande = Boolean("aide");
    goToChapter("escalader_montagne");
}

function aideStatus() {
    if (aideDemande == true) {
        goToChapter("prendre_potion_recommencer");
    } else {
        goToChapter("finale");
    }
}





let chapitreLog = localStorage.getItem("chapter");

function startGame() {
    goToChapter("introduction");
    if (chapitreLog !== "introduction") {
        goToChapter(chapitreLog);
    } else {
        goToChapter("introduction");
    }
}
startGame()

function reset() {
    localStorage.clear();
    keyFound = false;
    aideDemande = false;
    goToChapter("introduction");

}