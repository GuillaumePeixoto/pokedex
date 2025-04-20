const pokemons = {
    1: {
      numeroPokedex: 1,
      nom: "Bulbizarre",
      type: ["Plante", "Poison"],
      faiblesse: ["Feu", "Psy", "Glace", "Vol"],
      description:
        "Un Pokémon graine qui aime le soleil et peut effectuer la photosynthèse.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    2: {
      numeroPokedex: 2,
      nom: "Herbizarre",
      type: ["Plante", "Poison"],
      faiblesse: ["Feu", "Psy", "Glace", "Vol"],
      description:
        "L’évolution de Bulbizarre. La plante sur son dos commence à fleurir.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    },
    3: {
      numeroPokedex: 3,
      nom: "Florizarre",
      type: ["Plante", "Poison"],
      faiblesse: ["Feu", "Psy", "Glace", "Vol"],
      description:
        "Un Pokémon florissant avec une grande fleur qui libère un doux parfum.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    },
    4: {
      numeroPokedex: 4,
      nom: "Salamèche",
      type: ["Feu"],
      faiblesse: ["Eau", "Sol", "Roche"],
      description:
        "Un petit Pokémon lézard qui garde toujours une flamme vive au bout de sa queue.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    5: {
      numeroPokedex: 5,
      nom: "Reptincel",
      type: ["Feu"],
      faiblesse: ["Eau", "Sol", "Roche"],
      description:
        "Il est plus agressif que Salamèche et sa flamme devient plus intense.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    },
    6: {
      numeroPokedex: 6,
      nom: "Dracaufeu",
      type: ["Feu", "Vol"],
      faiblesse: ["Eau", "Électrik", "Roche"],
      description:
        "Un puissant Pokémon dragon crachant des flammes capables de tout faire fondre.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    },
    7: {
      numeroPokedex: 7,
      nom: "Carapuce",
      type: ["Eau"],
      faiblesse: ["Électrik", "Plante"],
      description:
        "Un petit Pokémon tortue qui utilise sa carapace pour se défendre.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    8: {
      numeroPokedex: 8,
      nom: "Carabaffe",
      type: ["Eau"],
      faiblesse: ["Électrik", "Plante"],
      description: "Son corps robuste et sa carapace le rendent très résistant.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    },
    9: {
      numeroPokedex: 9,
      nom: "Tortank",
      type: ["Eau"],
      faiblesse: ["Électrik", "Plante"],
      description:
        "Un Pokémon très puissant avec des canons à eau sur sa carapace.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    },
    10: {
      numeroPokedex: 10,
      nom: "Chenipan",
      type: ["Insecte"],
      faiblesse: ["Feu", "Vol", "Roche"],
      description: "Une petite chenille verte qui évolue rapidement.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    },
    11: {
      numeroPokedex: 11,
      nom: "Chrysacier",
      type: ["Insecte"],
      faiblesse: ["Feu", "Vol", "Roche"],
      description: "Son corps est dur comme de l'acier. Il reste immobile pour se protéger.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
    },
    12: {
      numeroPokedex: 12,
      nom: "Papilusion",
      type: ["Insecte", "Vol"],
      faiblesse: ["Feu", "Électrik", "Roche", "Glace"],
      description: "Il disperse des spores poudreuses pour se défendre.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
    },
    13: {
      numeroPokedex: 13,
      nom: "Aspicot",
      type: ["Insecte", "Poison"],
      faiblesse: ["Feu", "Psy", "Vol", "Roche"],
      description: "Sa queue est munie d’un dard empoisonné très pointu.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"
    },
    14: {
      numeroPokedex: 14,
      nom: "Coconfort",
      type: ["Insecte", "Poison"],
      faiblesse: ["Feu", "Psy", "Vol", "Roche"],
      description: "Il ne bouge presque pas. Il se prépare à évoluer.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"
    },
    15: {
      numeroPokedex: 15,
      nom: "Dardargnan",
      type: ["Insecte", "Poison"],
      faiblesse: ["Feu", "Psy", "Vol", "Roche"],
      description: "Il attaque ses ennemis avec ses dards empoisonnés.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
    },
    16: {
      numeroPokedex: 16,
      nom: "Roucool",
      type: ["Normal", "Vol"],
      faiblesse: ["Électrik", "Glace", "Roche"],
      description: "Un Pokémon paisible qui préfère fuir plutôt que se battre.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
    },
    17: {
      numeroPokedex: 17,
      nom: "Roucoups",
      type: ["Normal", "Vol"],
      faiblesse: ["Électrik", "Glace", "Roche"],
      description: "Il est très protecteur envers son territoire.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"
    },
    18: {
      numeroPokedex: 18,
      nom: "Roucarnage",
      type: ["Normal", "Vol"],
      faiblesse: ["Électrik", "Glace", "Roche"],
      description: "Son plumage élégant cache sa grande puissance.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
    },
    19: {
      numeroPokedex: 19,
      nom: "Rattata",
      type: ["Normal"],
      faiblesse: ["Combat"],
      description: "Très rapide et agressif malgré sa petite taille.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"
    },
    20: {
      numeroPokedex: 20,
      nom: "Rattatac",
      type: ["Normal"],
      faiblesse: ["Combat"],
      description: "Ses dents repoussent sans arrêt. Il doit ronger pour les user.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
    },
    21: {
      numeroPokedex: 21,
      nom: "Piafabec",
      type: ["Normal", "Vol"],
      faiblesse: ["Électrik", "Glace", "Roche"],
      description: "Un petit Pokémon agressif à la voix stridente.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png"
    },
    22: {
      numeroPokedex: 22,
      nom: "Rapasdepic",
      type: ["Normal", "Vol"],
      faiblesse: ["Électrik", "Glace", "Roche"],
      description: "Son bec est si solide qu’il peut percer les roches.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png"
    },
    23: {
      numeroPokedex: 23,
      nom: "Abo",
      type: ["Poison"],
      faiblesse: ["Psy", "Sol"],
      description: "Il enroule sa proie avant de la mordre avec ses crocs venimeux.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"
    },
    24: {
      numeroPokedex: 24,
      nom: "Arbok",
      type: ["Poison"],
      faiblesse: ["Psy", "Sol"],
      description: "Ses motifs effrayants varient selon sa région d’origine.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"
    },
    25: {
      numeroPokedex: 25,
      nom: "Pikachu",
      type: ["Électrik"],
      faiblesse: ["Sol"],
      description: "La mascotte de Pokémon. Il stocke de l’électricité dans ses joues.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    26: {
      numeroPokedex: 26,
      nom: "Raichu",
      type: ["Électrik"],
      faiblesse: ["Sol"],
      description: "Son corps accumule une grande charge électrique.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
    },
    27: {
      numeroPokedex: 27,
      nom: "Sabelette",
      type: ["Sol"],
      faiblesse: ["Eau", "Plante", "Glace"],
      description: "Il creuse des galeries pour échapper aux prédateurs.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png"
    },
    28: {
      numeroPokedex: 28,
      nom: "Sablaireau",
      type: ["Sol"],
      faiblesse: ["Eau", "Plante", "Glace"],
      description: "Ses griffes sont puissantes et redoutées.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png"
    },
    29: {
      numeroPokedex: 29,
      nom: "Nidoran♀",
      type: ["Poison"],
      faiblesse: ["Psy", "Sol"],
      description: "Malgré sa petite taille, elle est très méfiante.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png"
    },
    30: {
      numeroPokedex: 30,
      nom: "Nidorina",
      type: ["Poison"],
      faiblesse: ["Psy", "Sol"],
      description: "Elle prend soin de ses petits avec beaucoup d’attention.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png"
    }
};
  
const typeLogos = {
    Normal: "normal.png",
    Feu: "feu.png",
    Eau: "eau.png",
    Plante: "plante.png",
    Électrik: "electric.png",
    Glace: "glace.png",
    Combat: "combat.png",
    Poison: "poison.png",
    Sol: "sol.png",
    Vol: "vol.png",
    Psy: "psy.png",
    Insecte: "insecte.png",
    Roche: "roche.png",
    Spectre: "spectre.png",
    Dragon: "dragon.png",
    Ténèbres: "tenebres.png",
    Acier: "acier.png",
    Fée: "fee.png",
};
  
let div_pokemon_list = document.getElementById("pokemon-list");
  
Object.values(pokemons).forEach((pokemon) => {
    let baliseImg = document.createElement("img");
    baliseImg.src = pokemon.image;
    baliseImg.alt = pokemon.nom;
    baliseImg.style.width = "70px";
    baliseImg.style.height = "70px";
  
    baliseImg.addEventListener("click", () => {
        selectPokemon(pokemon.numeroPokedex); // appelle une fonction avec le Pokémon cliqué
    });
  
    div_pokemon_list.appendChild(baliseImg);
});
  
function selectPokemon(key) {
    let pokemonSelected = pokemons[key];
    let content = "<table style='height: 100%' ><tr><td class='image-cell'><img style='width: 110px; height: 110px;' src='" + pokemonSelected["image"] +"'></td><td class='text-cell'><table class='sub-table'><tr><td><h3>"+pokemonSelected["nom"]+"</h3></td></tr><tr><td><div class='infosTypeLogo '><span class='bolder'>Type : </span> <div class='typeImages'>" +
      getElementLogo(pokemonSelected.type) +
      "</div></div></td></tr><tr><td><div class='infosTypeLogo'><span class='bolder'>Faible : </span> <div class='typeImages'>" +
      getElementLogo(pokemonSelected.faiblesse) +
      "</div></div> </div></td></tr></table></td></tr><tr><td colspan='2' style='height: 100%'><p id='text-writter'></p></td></tr></table>"
    document.getElementById("pokemon-infos").innerHTML = content;
    afficherCaractere(pokemonSelected['description'], "text-writter");
}
  
function getElementLogo(arrayType) {
    let contentType = "";
    arrayType.forEach((element) => {
        contentType +=
            "<img src='./imgType/" +
            typeLogos[element] +
            "'> ";
    });
    return contentType;
}

function afficherCaractere(texte, elementId) {
    const element = document.getElementById(elementId);
    let index = 0;

    element.textContent = ''; // Réinitialiser le contenu

    function boucle() {
        if (index < texte.length) {
            element.textContent += texte[index];
            index++;
            setTimeout(boucle, 50);
        }
    }

    boucle(); // Lancer la boucle
}
