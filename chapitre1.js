let chaptersObj = {

    recommencer: {
        subtitle: "Recommencer",
        text: " Vous avez pris la mauvaise décision, vous devez recommencer.",
        image: "assets/photo.jpg",
        options: [
            { text: "Recommencer!", action: "goToChapter('introduction')" }
        ]
    },


    introduction: {
        subtitle: "introduction",
        text: "Paco (chat roux)a entendu parler de la légende du trésor caché dans la forêt Valark et souhaite vraiment le trouver",
        image: "assets/OIP.jfif",
        options: [
            { text: 'continuer', action: "goToChapter('introduction1')" }

        ]

    },

    introduction1: {
        text: "est ce qu'il devrait sortir de son lit et se mettre à sa recherche?",
        image: "assets/introduction1.jpg",
        options: [
            { text: "il sort de son lit", action: "goToChapter('sortir_dehors')" },
            { text: "Il reste dans son lit", action: "goTopChapter('lit_recommencer')" }
        ]

    },




    lit_recommencer: {
        subtitle: "Dormir_recommencer",
        text: "Paco prefere dormir que de partir à l'aventure",
        image: "assets/cat_sleep.jpg",
        options: [
            { text: "dormir", action: "goToChapter('recommencer')" }

        ]
    },

    sortir_dehors: {
        subtitle: "Chemin",
        text: "Quel chemin Paco devrait-il prendre?",
        image: "assets/forest_2.jpg",
        options: [{ text: "chemin gauche", action: "goToChapter('chemin_gauche_riviere')" },
            { text: "chemin droit", action: "goTopChapter('chemin_droit_montagne')" }
        ]



    },

    chemin_gauche_riviere: {
        subtitle: "Rivière",
        text: "Paco se retrouve devant une rivière mais, malheureusement, Paco ne sait pas comment nager.",
        image: "assets/chemin_riviere.webp",
        options: [
            { text: " Essayer de nager", action: "goToChapter('nager')" },
            { text: "Trouver des matériaux", action: "goTopChapter('riviere_materiaux')" }
        ]



    },
    nager: {
        subtitle: "Rivière",
        text: "Avec beaucoup de difficulté il arrive à traverser la rivière.",
        image: "assets/chemin_riviere2.png",
        options: [
            { text: "continuer", action: "goToChapter('riviere_marche')" }
        ]
    },

    riviere_marche: {
        subtitle: " Forêt Valark ",
        text: "Paco , marche, marche et marche ",
        image: "assets/mountain_escalader.webp",
        options: [
            { text: "continuer", action: "goToChapter('foret_valark')" }
        ]
    },


    chemin_droit_montagne: {
        subtitle: "Montagne",
        text: "Paco se retrouve face à une énorme montagne. Il doit trouvé une manière de la monter. Lors de sa recherche, il fait la connaissance de Layla, une jeune sorcière de la montagne.",
        image: "assets/montagne2.jfif",
        options: [
            { text: " Accepter son aide ", action: "goToChapter('prendre_potion')" },
            { text: " Refuser son aide ", action: "goTopChapter('escalader_montagne')" }
        ]


    },

    prendre_potion: {
        subtitle: "Potion",
        text: " Elle lui suggère de prendre une potion qui augmenterais son endurance et sa vitesse.",
        image: "assets/sorciere.jpg",
        options: [
            { text: " Accepter son aide ", action: "goToChapter('prendre_potion_recommencer')" },
            { text: " Refuser son aide ", action: "goTopChapter('escalader_montagne')" }
        ]


    },


    prendre_potion_recommencer: {
        subtitle: " Potion recommencer",
        text: " Vous avez pris la décision d'accepter de l'aide, Vous devez recommencer. En prennant cette potion il commence à se sentir bizzare et tombe dans les pommes. Il a oublié qu'il faut jamais faire confiance aux sorcières des montagnes",
        image: "assets/potion.jpg",
        options: [{ text: " recommencer ", action: "goToChapter('recommencer')" }]



    },


    escalader_montage: {
        subtitle: "sommet de la montagne",
        text: "Il escade la montagne avec difficulter",
        image: "assets/mountain_escalader.webp",
        options: [
            { text: "continuer", action: "goToChapter('foret_valark')" }
        ]


    },


    foret_valark: {
        subtitle: "Forêt Valark",
        text: "Paco doit répondre à une question avant de terminer sa quête. Est ce que Paco a demandé de l'aide au courant de sa mission?",
        image: "assets/forest_marche.jpg",
        options: [
            { text: " Oui, il a demandé de l'aide ", action: "goToChapter('recommencer')" },
            { text: " Non, il a été capanble de réussir cette quête par lui-même ", action: "goTopChapter('finale')" }

        ]


    },

    finale: {
        subtitle: " La fin de la mission",
        text: "Après des heures et des heures de recherches, il trouve le fameux diamant dans la grotte. Cependant celui-ci est protégé par Layla. étant donné que Paco n'a demander aucune aide elle le lui donne!",
        image: "assets/forest_valark.jpg",
        options: [
            { text: "Recommencer", action: "goToChapter('recommencer')" }
        ]
    }
};

function goToChapter(chapterName) {
    console.log(chaptersObj[chapterName]['subtitle']);
    console.log(chaptersObj[chapterName]["text"]);
    console.log(chaptersObj[chapterName]["options"]);

    document.querySelector(".titre").innerHTML = chaptersObj[chapterName]["subtitle"];
    document.querySelector(".quete").innerHTML = chaptersObj[chapterName]["subtitle"];
    document.querySelector(".texte").innerHTML = chaptersObj[chapterName]["text"];
    document.querySelector(".chat").src = chaptersObj[chapterName]["img"];
    let choix = document.querySelector("options")
}
for (let i = 0; i < chaptersObj[chapterName].options.length; i++) {
    let opt = document.createElement("button");
    opt.appendChild(document.createTextNode(chaptersObj[chapterName].options[i].text))
    choix.appendChild(opt);
    opt.setAttribute("type", "button");
    opt.setAttribute("onclick", "action");
}