---
name: Phé-Nix
description: Site public d'un OBNL québécois — blanc et sable, une seule braise orange, photographie documentaire.
colors:
  blanc-papier: "#FFFFFF"
  gris-respiration: "#F5F5F7"
  peche-clair: "#FBF4EF"
  sable-chaud: "#F3E3D3"
  terre-douce: "#E8D5C4"
  orange-phenix: "#E8500E"
  orange-profond: "#C7440B"
  orange-voile: "rgba(232,80,14,0.08)"
  encre: "#1D1D1F"
  encre-douce: "#6E6E73"
  encre-douce-chaude: "#59595E"
  filet: "#D2D2D7"
  filet-chaud: "#EDE0D7"
  prune-nuit: "#150D20"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(44px, 6.5vw, 80px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(32px, 4vw, 50px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  card: "22px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "22px"
  lg: "30px"
  xl: "56px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.orange-phenix}"
    textColor: "{colors.blanc-papier}"
    rounded: "{rounded.md}"
    padding: "14px 30px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.orange-profond}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.encre}"
    rounded: "{rounded.md}"
    padding: "14px 30px"
  button-ghost-hover:
    textColor: "{colors.encre}"
  card:
    backgroundColor: "{colors.blanc-papier}"
    textColor: "{colors.encre}"
    rounded: "{rounded.lg}"
    padding: "18px 22px"
  eyebrow:
    textColor: "{colors.orange-phenix}"
    typography: "{typography.label}"
---

# Design System: Phé-Nix

## Overview

**Creative North Star: « La braise sur le papier »**

Une page presque vide, blanche ou sable, et une seule braise orange qui ressort.
Tout le système découle de ce rapport de force : le fond ne réclame rien, l'accent
est rare, donc il compte. Quand l'orange apparaît — un bouton, une étiquette, un
chiffre — c'est parce qu'il y a quelque chose à faire ou à retenir, jamais pour
décorer.

Le second principe est la chaleur. Le blanc pur seul rendrait le site froid et
clinique, ce qui trahirait un organisme dont le travail est de nourrir des gens.
Trois teintes chaudes — pêche, sable, terre — alternent avec le blanc pour donner
un rythme respirable et empêcher la page de devenir un long couloir. Elles ne sont
pas décoratives : elles séparent les idées.

Le troisième est la preuve. Toute image est une photographie documentaire réelle du
terrain de Phé-Nix : le camion identifié, une table de distribution sur un
trottoir, des caisses de légumes, un panier d'épicerie contenant la vie de
quelqu'un. Aucune illustration, aucune photo de banque, aucune image générée. La
crédibilité de l'organisme passe par là.

Rejets confirmés par le propriétaire du projet : le site ne doit jamais **avoir
l'air fait par une IA** — murs de texte, tirets cadratins, formules creuses, mise en
page trop lisse et sans intention — ni être **trop chargé**. Quand une page épuise
avant d'informer, elle a échoué, même si tout ce qu'elle dit est vrai.

**Key Characteristics:**
- Blanc et sable dominants, une seule couleur d'accent
- Inter en une seule famille ; la taille et le poids font toute la hiérarchie
- Interlettrage négatif serré sur les grands titres, positif large sur les étiquettes
- Photographie documentaire réelle, jamais d'illustration
- Surfaces plates au repos ; l'ombre est une réponse au geste
- Blocs sombres prune-nuit pour les moments de gravité
- Zéro requête externe : polices, images et styles viennent du site lui-même

## Colors

Une palette de papier et de terre, traversée par une seule braise.

### Primary
- **Orange Phé-Nix** (`#E8500E`) : la seule couleur vive du système. Réservée aux
  boutons d'action, aux étiquettes de section, aux chiffres d'impact et aux liens
  qui mènent ailleurs. Sa rareté est le mécanisme, pas un accident.
- **Orange profond** (`#C7440B`) : uniquement l'état survolé du bouton principal.
  Jamais utilisé comme couleur de fond au repos.
- **Orange voilé** (`rgba(232,80,14,0.08)`) : fond des pastilles d'icône et des
  cases qui doivent se distinguer sans crier.

### Neutral
- **Blanc papier** (`#FFFFFF`) : fond par défaut, fond des cartes.
- **Gris respiration** (`#F5F5F7`) : sections neutres qui séparent deux blocs blancs.
- **Encre** (`#1D1D1F`) : tout le texte principal et les titres. Jamais du noir pur.
- **Encre douce** (`#6E6E73`) : paragraphes, texte secondaire, légendes.
- **Encre douce chaude** (`#59595E`) : la même fonction, mais sur sable ou terre.
  Elle existe parce que l'encre douce n'y atteint qu'un contraste de 4,04, sous le
  seuil exigé. Ne jamais l'inverser.
- **Filet** (`#D2D2D7`) : bordures des cartes, séparateurs, contours des boutons
  fantômes.

### Tertiary
Les teintes chaudes, dont la seule fonction est le rythme vertical de la page.
- **Pêche clair** (`#FBF4EF`) : la plus discrète, pour une respiration légère.
- **Sable chaud** (`#F3E3D3`) : sépare franchement deux sections blanches.
- **Terre douce** (`#E8D5C4`) : le ton clair le plus affirmé, à réserver aux
  moments qui doivent peser.
- **Filet chaud** (`#EDE0D7`) : bordures posées sur ces fonds chauds.
- **Prune nuit** (`#150D20`) : fond des blocs sombres — la fondation, les chiffres,
  le don. Le phénix y apparaît en filigrane à 13 % d'opacité. Sur ce fond, le texte
  passe en blanc et l'orange s'éclaircit vers `#FF8A3D` pour rester lisible.

### Named Rules

**La règle de la braise unique.** L'orange occupe moins de 10 % de n'importe quel
écran. Deux boutons orange côte à côte annulent l'effet : le second devient un
bouton fantôme.

**La règle du fond qui alterne.** Deux sections consécutives ne partagent jamais le
même fond. Blanc, puis chaud, puis blanc. Sans cette alternance, la page redevient
le long couloir blanc qui avait été rejeté.

**La règle du texte chaud.** Sur sable ou terre, le texte secondaire est
`#59595E`, jamais `#6E6E73`. C'est une règle d'accessibilité, pas de goût.

## Typography

**Display Font:** Inter (avec `-apple-system`, `BlinkMacSystemFont`, `sans-serif`)
**Body Font:** Inter — la même famille
**Label Font:** Inter — la même famille

**Character:** Une seule famille pour tout le site, auto-hébergée en quatre graisses
(400, 500, 600, 700). Toute la hiérarchie repose sur la taille, le poids et
l'interlettrage. C'est un parti pris de sobriété : rien dans la typographie ne doit
attirer l'attention avant le contenu.

### Hierarchy
- **Display** (700, `clamp(44px, 6.5vw, 80px)`, interligne 1,05, interlettrage
  `-0.025em`) : le titre unique de chaque page. Un seul par page, sans exception.
- **Headline** (700, `clamp(32px, 4vw, 50px)`, interligne 1,1, interlettrage
  `-0.02em`) : les titres de section. Souvent coupés sur deux lignes par un `<br>`
  pour maîtriser le point de rupture.
- **Title** (600, 22px, interligne 1,3) : titres de cartes et d'encadrés.
- **Body** (400, 17px, interligne 1,65, couleur encre douce) : tout le texte
  courant. Largeur de lecture plafonnée autour de 560 à 720px selon le contexte.
- **Label** (600, 12px, interlettrage `0.08em`, majuscules, couleur orange) :
  l'étiquette qui coiffe chaque section. C'est la signature typographique du site.

### Named Rules

**La règle du serrage inverse.** Plus le texte est gros, plus les lettres se
resserrent (`-0.025em` sur les titres) ; plus il est petit, plus elles s'écartent
(`0.08em` sur les étiquettes). C'est ce qui donne l'assise des grands titres.

**La règle de l'étiquette.** Chaque section commence par une étiquette orange en
majuscules avant son titre. C'est le repère de lecture du site ; une section qui en
manque paraît orpheline.

## Layout

Contenu centré dans un conteneur de **1080px** (`--maxw`), avec 40px de marge
latérale sur ordinateur et 20 à 24px sur téléphone. Les sections respirent à **96px**
en haut et en bas sur ordinateur, 72px sur téléphone.

**Deux grammaires de page coexistent.**

La page d'accueil est une succession de sections pleine largeur aux fonds alternés,
chacune avec son propre rythme interne.

Les pages de service et d'action utilisent une disposition en deux colonnes,
`0.78fr / 1.22fr`, avec 64px de gouttière. La colonne de gauche — étiquette, titre,
chapeau, bouton — reste **accrochée à 108px du haut** pendant que la colonne de
droite défile. Sous 900px, tout s'empile et l'accroche est désactivée.

L'entête est fixe, haute de 56px, en verre dépoli (`rgba(255,255,255,0.82)` avec un
flou de 20px). **Tout contenu commençant en haut d'une page doit dégager au moins
88px**, sinon il passe dessous.

Les points de rupture réellement utilisés sont **900px** (deux colonnes vers une),
**860px** (la charnière principale du site) et **720px**, **640px**, **420px** pour
des ajustements ponctuels.

**La règle du défilement horizontal interdit.** Aucune page ne doit jamais déborder
latéralement, à aucune largeur. C'est un contrôle systématique avant toute
publication.

## Elevation & Depth

**Le système est plat au repos.** Les cartes se définissent par un filet de 1px et
un fond, jamais par une ombre. La profondeur vient de la superposition des tons — un
fond chaud derrière une carte blanche — plutôt que de la lumière.

L'ombre est réservée à deux usages : signaler qu'un élément **répond au geste**, et
détacher une **carte flottante** posée sur un fond sombre.

### Shadow Vocabulary
- **Repos de l'accent** (`0 2px 10px rgba(232,80,14,0.16)`) : halo permanent et
  très discret sous le bouton principal, qui l'ancre sans l'alourdir.
- **Réponse au survol** (`0 12px 26px rgba(232,80,14,0.30)`, avec
  `translateY(-2px)`) : le bouton principal se soulève au survol.
- **Carte soulevée** (`0 14px 32px rgba(0,0,0,0.08)`) : cartes cliquables au survol.
- **Flottement sur fond sombre** (`0 28px 70px rgba(0,0,0,0.45)`) : uniquement la
  carte blanche du virement Interac posée sur le bloc prune-nuit.

### Named Rules

**La règle du plat par défaut.** Une surface au repos n'a pas d'ombre. Si une ombre
apparaît, c'est qu'il s'est passé quelque chose : un survol, un focus, ou une carte
volontairement détachée de son fond.

## Shapes

Des angles constamment arrondis, jamais vifs. L'échelle suit la taille de
l'élément : **10px** pour un petit bouton, **12px** pour un bouton standard,
**16 à 18px** pour une carte de contenu, **20 à 22px** pour une image ou un grand
panneau, **999px** pour les pastilles et les commutateurs de langue.

Les bordures sont toujours des filets de 1px, jamais plus épais. Sur fond clair,
`#D2D2D7` ; sur fond chaud, `#EDE0D7`.

Les images sont systématiquement contraintes par un `aspect-ratio` explicite quand
elles vivent dans une grille, pour que l'orientation d'une photo ne dicte jamais la
hauteur de sa carte. Les photos hors grille — bannières, ruban — gardent au
contraire leurs proportions natives, parce qu'un recadrage y couperait le sujet.

**La règle de l'arrondi proportionnel.** Le rayon grandit avec l'élément. Un rayon
de 22px sur un petit bouton le fait paraître mou ; un rayon de 10px sur une grande
image le fait paraître raide.

## Components

### Buttons
- **Shape:** angles doux (12px ; 10px en petite taille)
- **Primary:** fond Orange Phé-Nix, texte blanc, `14px 30px`, poids 600, 15px, avec
  le halo de repos. Une seule action principale par écran.
- **Hover / Focus:** fond vers Orange profond, remontée de 2px, ombre élargie,
  transition `0.22s ease`. Le focus clavier affiche un contour orange de 2px à 3px
  de distance — jamais supprimé.
- **Ghost:** fond transparent, filet `#D2D2D7`, texte encre. Au survol, le filet
  passe à l'encre et le fond prend `rgba(0,0,0,0.02)`. C'est le second bouton d'une
  paire, jamais le premier.
- **Large:** `16px 38px` à 16px, pour les fins de section.

### Cards / Containers
- **Corner Style:** 16 à 18px selon la densité
- **Background:** blanc papier sur fond chaud ; gris respiration sur fond blanc
- **Shadow Strategy:** aucune au repos (voir Elevation)
- **Border:** filet de 1px
- **Internal Padding:** 18 à 30px selon la taille
- Une carte cliquable est un `<a>` en entier, jamais un `<div>` avec un lien
  dedans : un lien imbriqué dans un lien produit un comportement imprévisible.

### Navigation
Entête fixe de 56px en verre dépoli, filet inférieur `rgba(0,0,0,0.07)`. Liens en
600 à petite taille, encre au repos, orange à l'état actif. Le bouton « Faire un
don » y est toujours présent en orange plein, accompagné du commutateur FR/EN en
pastille.

Sur téléphone, la navigation principale devient une barre fixe en bas d'écran, avec
icône et libellé, l'onglet actif en orange. C'est le geste naturel du pouce.

### Eyebrow (composant signature)
L'étiquette qui coiffe chaque section : 12px, poids 600, majuscules, interlettrage
`0.08em`, couleur orange, 20px de marge basse. Centrée sur les sections centrées,
alignée à gauche dans les colonnes. C'est l'élément le plus répété du site et son
repère de lecture principal.

### Champs de saisie
**Il n'y en a aucun, et c'est intentionnel.** Le site ne contient aucun formulaire :
tout contact passe par `mailto:`, `tel:` ou Facebook. Ne pas en introduire sans une
décision produit explicite.

## Do's and Don'ts

### Do:
- **Do** commencer chaque section par une étiquette orange en majuscules avant son titre.
- **Do** alterner les fonds — blanc, chaud, blanc — pour donner un rythme vertical.
- **Do** utiliser `#59595E` pour le texte secondaire posé sur sable ou terre.
- **Do** dégager au moins 88px sous l'entête fixe en haut d'une page.
- **Do** contraindre par `aspect-ratio` toute image vivant dans une grille, et
  laisser leurs proportions natives aux bannières.
- **Do** garder le contour orange du focus clavier sur tout élément interactif.
- **Do** vérifier l'absence de débordement horizontal à 1280px et à 375px avant de publier.

### Don't:
- **Don't** poser deux boutons orange côte à côte ; le second est un bouton fantôme.
- **Don't** mettre d'ombre sur une surface au repos.
- **Don't** utiliser de tiret cadratin dans un texte visible.
- **Don't** écrire un mur de texte : si une page épuise avant d'informer, elle a échoué.
- **Don't** employer d'illustration, de photo de banque ou d'image générée. Toute
  image est une photographie réelle du terrain.
- **Don't** charger une ressource externe. Polices, images et styles viennent du site.
- **Don't** imbriquer un lien dans un lien : la carte entière devient le lien.
- **Don't** poser un dégradé de flou sur les bords d'une galerie — retiré une fois,
  à ne pas réintroduire.
- **Don't** mélanger les vrais logos de marques tierces dans une même série
  d'icônes : trois identités graphiques étrangères se battent entre elles. Essayé
  puis retiré au profit de pictogrammes dessinés dans un trait unique.
