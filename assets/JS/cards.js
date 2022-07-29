const collectionDishes= [
    //Object 0
   {   
        name: " La Mitraillette D'Frit ", 
        category: " plat ", //entrées/plats/desserts
        diet: " viande ", //végan, végétarien, viande
        photo: 'assets/images__cards/mitraillette.png',
        description: " Spécialité du Chef ",
        prix: " 19,50 ",
          },
    //Object 1
       {   
        name: " Vol au vent ", 
        category: " plat ", //entrées/plats/desserts/boissons
        diet: " viande ", //végan, végétarien, viande
        photo: 'assets/images__cards/volauvent.jpg',
        description: " Accompagné de frites ",
        prix: " 19,50 ",
          },
   //Object 2
       {   
        name: " Chicon gratin ", 
        category: " plat ", //entrées/plats/desserts
        diet: " viande ", //végan, végétarien, viande
        photo: 'assets/images__cards/chicon.jpg',
        description: " Gratiné de jambon. Accompagné de purée. ",
        prix: " 17,50",
          },
   //Object 3
       {   
        name: " Carbonnades à la flamande ", 
        category: " plat ", //entrées/plats/desserts
        diet: " viande ", //végan, végétarien, viande
        photo: 'assets/images__cards/carbonnade.jpeg',
        description: " Accompagné de frites ",
        prix: " 20,90 ",
          },
   //Object 4
       {   
        name: " Waterzooi à la gantoise ", 
        category: " plat ", //entrées/plats/desserts
        diet: " viande ", //végan, végétarien, viande
        photo: 'assets/images__cards/waterzooi.jpg',
        description: " Accompagné de pommes de terre nature ",
        prix: " 19,50 ",
          },
   //Object 5
       {   
        name: " Mini tartare végétarien ", 
        category: " plat ", //entrées/plats/desserts
        diet: " vegan ", //végan, végétarien, viande
        photo: 'assets/images__cards/tartare.jpg',
        description: " Tartare de courgettes, carottes, poireaux ",
        prix: " 13,90 ",
          },
   //Object 6
       {   
        name: " Burger végé ", 
        category: "plat", //entrées/plats/desserts
        diet: "végétarien", //végan, végétarien, viande
        photo: 'assets/images__cards/burger.jpg',
        description: " Burger de patate douce et sa mayonnaise au curry ",
        prix: " 19,50 ",
          },
   //Object 7
       {   
        name: " Salade de croustillant de chèvre ", 
        category: " plats ", //entrées/plats/desserts
        diet: "végétarien", //végan, végétarien, viande
        photo: 'assets/images__cards/salade.jpg',
        description: " vinaigrette au sirop de Liège, noix et pomme Granny " ,
        prix: " 18,50 ",
          },
   //Object 8
       {   
        name: " Camembert au four ", 
        category: " entrées ", //entrées/plats/desserts
        diet: "végétarien", //végan, végétarien, viande
        photo: 'assets/images__cards/.camembert.jpg',
        description: " Fromage maturé " ,
        prix: " 13,00 ",
          },
   //Object 9
       {   
        name: " Half en half de croquettes ", 
        category: " entrées ", //entrées/plats/desserts
        diet: "viande", //végan, végétarien, viande
        photo: 'assets/images__cards/croquette.jpg',
        description: " Mix fromage et crevettes" ,
        prix: " 15,00 ",
          },
   //Object 10
       {   
        name: " Salade caprese  ", 
        category: " entrées ", //entrées/plats/desserts
        diet: "végétarien", //végan, végétarien, viande
        photo: 'assets/images__cards/Salade_Caprese.jpg',
        description: " Tomate et mozzarella, pesto et roquette " ,
        prix: " 14,50 ",
          },
   //Object 11
       {   
        name: " Toast de saumon fumé ", 
        category: " entrées ", //entrées/plats/desserts
        diet: "viande", //végan, végétarien, viande
        photo: 'assets/images__cards/toast.jpg',
        description: " Saumon d’Atlantique by Vincent" ,
        prix: " 16,50 ",
          },
   //Object 12
       {   
        name: "  Mousse au chocolat ", 
        category: " dessert ", //entrées/plats/desserts
        diet: "végétarien", //végan, végétarien, viande
        photo: 'assets/images__cards/mousse.jpg',
        description: " Chocolat noir de Brugges " ,
        prix: " 11,00 ",
          },
   //Object 13
       {   
        name: " Dame Belge ", 
        category: " dessert ", //entrées/plats/desserts
        diet: "végétarien", //végan, végétarien, viande
        photo: 'assets/images__cards/dameBelge.jpg',
        description: " Spéculoos et chantilly au sirop de Liège" ,
        prix: " 11,00 ",
          },
   //Object 14
       {   
        name: " Tiramisu au spéculoos ", 
        category: " dessert ", //entrées/plats/desserts
        diet: "végétarien", //végan, végétarien, viande
        photo: 'assets/images__cards/tiramisu.jpg',
        description: " " ,
        prix: " 11,00 ",
          },
   //Object 14
       {   
        name: " Coca ", 
        category: " boisson ", //entrées/plats/desserts
        diet: "", //végan, végétarien, viande
        photo: 'assets/images__cards/coca.jpg',
        description: " Coca Cola Light, Coca Cola Zero, Coca Cola Cherry " ,
        prix: " 2,50 ",
          },
   //Object 14
       {   
        name: " Fanta  ", 
        category: " boisson ", //entrées/plats/desserts
        diet: "", //végan, végétarien, viande
        photo: 'assets/images__cards/fanta.jpg',
        description: " Fanta citron, Fanta Framboise, Fanta Cherry " ,
        prix: " 2,50 ",
          },
   //Object 14
       {   
        name: " Eau  ", 
        category: " boisson ", //entrées/plats/desserts
        diet: "", //végan, végétarien, viande
        photo: 'assets/images__cards/eau.jpg',
        description: " Plate, pétillante " ,
        prix: " 2,00 ",
          },
   //Object 14
       {   
        name: " Julier ", 
        category: " boisson ", //entrées/plats/desserts
        diet: "", //végan, végétarien, viande
        photo: 'assets/images__cards/jupiler.jpg',
        description: " Classique, zéro " ,
        prix: " 3,00 ",
          },
   //Object 14
       {   
        name: " Chimay ", 
        category: " boisson ", //entrées/plats/desserts
        diet: "", //végan, végétarien, viande
        photo: 'assets/images__cards/chimay.jpg',
        description: " Rouge, Bleue, Blanche" ,
        prix: " 5,00 ",
          },
]



/* <div class="cardsList__card">
        <img
          src="https://cdn.pratico-pratiques.com/app/uploads/sites/3/2018/08/14113103/vol-au-vent-au-poulet-express.jpg"
          alt=""
          class="cardsList__cardimg"
        />
        <div class="texts">
          <h3>Vol au vent</h3>
          <p>
            vol, au, vent, in, gre, dients, a, mettre, ici, lorem, ipsum, dolor,
          </p>

          <div class="pricebutton">
            <span class="price">6.99€</span>
            <button><img src="assets/img/Vector.svg" alt="" /></button>
          </div>
        </div>
      </div> */

      //Variable de tri. Si elle est null, aucun tri n'est fait.
let selectedCategory = null;

//Création de la liste unique des catégories
let listCategory = [];
collectionDishes.forEach((dish) => {
  dish.category.forEach((category) => {
    if (!listCategory.includes(category)) listCategory.push(category);
  });
});
//Insertion des categorys uniques dans le document
let categoryNavElt = document.querySelector("#categoryList");
categoryNavElt.innerHTML =
  categoryNavElt.innerHTML +
  listCategory
    .sort()
    .map((category) => {
      return `<li class="badgesList__item"><a class="badgesList--badge" href="index.html?category=${category}">${category}</a></li>`;
    })
    .join("");

//Rendu initial
dishListRender(collectionDishes, selectedCategory);

//
// Fonctions
//

//Affiche la liste des jeux d'une collection en fonction de son category
function dishListRender(collectionDishes, selectedCategory) {
  //Sélection de l'élément contenant les cards de jeux
  let listCardsElt = document.querySelector("#cardsList");

  //Parcours de la liste des jeux
  listCardsElt.innerHTML = collectionDishes
    //Si selectedCategory est utilisé, on filtre la collection
    .filter((dishes) =>
      selectedCategory != null ? dishes.category.includes(selectedCategory) : true
    )
    //Parcours de la liste avec affichage
    .map(
      (dish) =>
        `
          <article class="cardsList__card">
            <img class="cardsList__card__img" src="${dish.picture}" alt="#" />
            <ul class="cardsList__card__categoryList badgesList">
              ${dish.category
                //.slice(0, 5)    //Possibilité de limiter la quantité de category de jeu à afficher
                .map(
                  (category) =>
                    `<li class="badgesList__item"><a class="badgesList--badge" href="#">${category}</a></li>`
                )
                .join("")}
            </ul>
            <section class="cardsList__card__content">
            <h2 class="cardsList__card__title">${dish.title}</h2>
            <div class="cardsList__card__titleDescription">
              <h3 class="cardsList__card__developper">${dish.developer}</h3>
              <time>${dish.releaseDate}</time>
            </div>
            <p class="cardsList__card__description">${dish.description}</p>
            <nav class="cardsList__card__socialLink">
              ${dish.socialLink
                .map(
                  (socialLink) =>
                    `
                  <a href="${socialLink.url}"><img src="./assets/img/${socialLink.network}.svg" alt="youtube link" /></a>
                  `
                )
                .join("")}
              
              
            </nav>
            </section>
          </article>
        `
    )
    .join("");
  //Fin de map

  //Ajout d'un event à chaque category

  let categorysElt = document.querySelectorAll(".badgesList--badge"); //Selection du container
  categorysElt.forEach((category) => {
    //ajout d'un event sur tous les categorys
    category.addEventListener("click", function (e) {
      e.preventDefault(); //Annulation de l'action par defaut
      selectedCategory = category.innerHTML; //Récupération du nom du category
      if (selectedCategory == "reset") {
        selectedCategory = null;
      }
      dishListRender(COLLECTION, selectedCategory); //Mise à jour du rendu de la liste avec le category sélectionné
    });
  });
}