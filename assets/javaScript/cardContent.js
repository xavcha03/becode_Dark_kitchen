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
        photo: 'assets/images__cards/camembert.jpg',
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
        photo: 'assets/images__cards/mousse.png',
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
        photo: 'assets/images__cards/tiramisu.jpeg',
        description: " " ,
        prix: " 11,00 ",
          },
   //Object 14
       {   
        name: " Coca ", 
        category: " boisson ", //entrées/plats/desserts
        diet: "", //végan, végétarien, viande
        photo: 'assets/images__cards/coca.png',
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
        photo: 'assets/images__cards/jupiler.png',
        description: " Classique, zéro " ,
        prix: " 3,00 ",
          },
   //Object 14
       {   
        name: " Chimay ", 
        category: " boisson ", //entrées/plats/desserts
        diet: "", //végan, végétarien, viande
        photo: 'assets/images__cards/chimay.png',
        description: " Rouge, Bleue, Blanche" ,
        prix: " 5,00 ",
          },
]


      function cardRecipe(list){

        let numberOfRecipe = list.length;
        let containerCard = document.querySelector('.cardsList');
        
        // Loop that creates a section and a paragraph for each element of the list
            for (let i = 0; i < numberOfRecipe; i++) {
        
        //adding new elements from COLLECTION
              //CREATE THE INDIVIDUAL DIV OF MY CARDS
              let cardsListDiv = document.createElement('div');
              containerCard.appendChild(cardsListDiv);
              cardsListDiv.classList.add("cardsList__card");

              //Create image
              let cardsImg = document.createElement('img');
              cardsImg.src=(list[i].photo);
              cardsListDiv.appendChild(cardsImg);
              cardsImg.classList.add("cardsList__cardimg");

              //Create div TEXT
              let cardsListDivText = document.createElement('div');
              cardsListDiv.appendChild(cardsListDivText);
              cardsListDivText.classList.add("texts");

                //Create H3
                let cardTitle = document.createElement('h3');
                let titleText= document.createTextNode(list[i].name);
                cardTitle.appendChild(titleText);
                cardsListDivText.appendChild(cardTitle);
                cardTitle.classList.add("card__title");
                //Create P
                let cardText = document.createElement('p');
                let text = document.createTextNode(list[i].description);
                cardText.appendChild(text);
                cardsListDivText.appendChild(text);
                cardText.classList.add("card__description");

            // Create div Button
              let cardsListDivButton = document.createElement('div');
              cardsListDivText.appendChild(cardsListDivButton);
              cardsListDivButton.classList.add("pricebutton");

              //Create Span
                let cardPrice = document.createElement('span');
                let price= document.createTextNode(list[i].prix);
                cardPrice.appendChild(price);
                cardsListDivButton.appendChild(cardPrice);
                cardPrice.classList.add("price");
              //Create Button
                let cardsButton = document.createElement('button');
                cardsListDivButton.appendChild(cardsButton);
                //create image heart
                let heart = document.createElement('img');
                heart.src=("assets/img/Vector.svg");
                cardsListDivButton.appendChild(heart);
            }
          }

cardRecipe(collectionDishes);
