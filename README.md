## Lancer le projet
- docker compose up --build
- http://localhost:3000

## Pourquoi ce sujet ?
J'ai fait le choix du sujet B car il me paraissait plus complet que les autres pour un entretien de Dev. Full-Stack. De plus, et d'un point de vue plus personnel, créer une page avec un élement réutilisable m'a plus attiré que de modifier du code ou de créer une feature.

## À propos du widget
Le composant "RegisterActivity" représente un widget de type "Carte" regroupant toutes les informations sur un atelier proposé par un client.

Il prend en parametre deux éléments: 
    - un type ActivityInfos, regroupant toutes les informations nécessaires sur l'atelier (image, titre, lieu, prix, date, places restantes);
    - un type ColorsPanel, regroupant 4 couleurs pour que l'utilisateur puisse styliser chaque "Carte" en fonction de l'atelier.

Ce composant a été developpé pour que son utilisation soit la plus pratique possible, pour potentiellement l'implémenter autre part.

## Pourquoi ce choix d'UI ?
Le choix du design a été plutot simple pour moi car je voulais rester dans les tons et les couleurs du site officiel Daisy, à savoir Violet, Creme et Corail. Ça m'a simplifié la tâche, je l'admets, car le choix des couleurs est important pour une bonne expérience utilisateur.
Pour ce qui est de la mise en page, je ne me suis pas trop prise la tete. Je suis restée sur du basique: un Carousel shadcn avec des cartes à l'intérieur.
Ce qui m'a le plus troublé, c'était le responsive et les marges, car avec la configuration de Next.js, on ne part pas de 0... et c'est bien le problème !
Donc j'ai eus un peu de mal avec les dimensions réduites et le style, oui.

Sur la fin, j'ai voulu ajouter des touches de couleurs en fond, car le background crème faisait un peu vide, mais j'ai changé d'avis car mes essais étaient pour le moins... perturbants :/

## Détails supplémentaires
J'ai pris pas mal de retard avec l'installation de NextJs sur mon pc personnel... Mais si on enlève ces contre-temps, j'ai dû mettre à peu près 3 heures pour développer les fonctionnalités sur le site (les features demandées).

## Deploy on Vercel

Lien vers la demo Vercel:
- https://daisy-app-rho.vercel.app/

