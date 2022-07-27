# Project Dark Kitchen

## Team

- Xavier C.
- Sophie G.
- Hazem M.
- Stéphanie P.

## Organisation du projet

### Phase 1 - Brainstorming

Réalisation d'un Brainstorming en team afin de trouver des idées de fonctionnalités et de design.

![Notre brainstorming](./assets/documentation/brainstorming.png)

### Phase 2 - WireFrame

Sur base des idées du brainstorming, nous avons réalisé le wireframe en se basant sur le mobile-first

![Notre brainstorming](./assets/documentation/wireframe.png)

### Phase 3 - Maquette

Réalisation du design de la maquette en se basant sur les wireframes

## Phase 4 - Création du workspace

- Création du repo
- Structure des dossiers

### SCSS

#### Commande SASS pour compiler les fichiers SCSS

sass ./assets/scss/main.scss:./assets/css/style.css --watch

BASE : Style de base commun à tous le site
ELEMENTS : Ensemble des éléments de bases du site et des composants
COMPOSANTS : Les composants sont des blocs constitués d'autres composants plus petits ou d'éléménts
UTILS : Contient les fichiers utilitaires
VENDORS : contient du css ()

#### BEM

block\_\_element--modifier

.cardsList{

    &__card{  =>cardsList__card

        &__title{ => cardsList__card__title

        }


        &__card--promo => cardsList__card--promo
    }

}

### GIT

- La branch MAIN ne sert que pour des versions validées par tous et testées
- Décomposer son travail en étapes simples et à chaque fois créér une branche




