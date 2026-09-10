# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Trois publics, **déclarés d'importance égale** par Gabriel : aucun ne prime sur les
autres, et chaque arbitrage futur entre eux doit lui être soumis plutôt que tranché
seul.

1. **La personne en situation d'itinérance ou de précarité alimentaire.** Elle
   cherche un repas, des vêtements, du dépannage, ou une porte d'entrée vers une
   thérapie. Elle arrive souvent par téléphone plutôt que par le site. Une part des
   demandes vient d'un tiers agissant pour elle : un proche, un ami, un intervenant.
2. **Les donateurs et les commanditaires.** Particuliers qui font un virement
   Interac, commerces qui donnent des denrées, entreprises qui deviennent
   partenaires. Ils cherchent à savoir où va l'argent avant de s'engager.
3. **Les bénévoles potentiels.** Ils veulent savoir ce qu'on attend d'eux, ce qu'il
   faut apporter, et à quoi ressemble une sortie.

## Product Purpose

Le site est la vitrine publique de **Phé-Nix Action Communautaire Citoyenne**, un
OBNL québécois fondé en 2022. Il rend les quatre services trouvables, explique les
conditions d'accès sans détour, et offre les trois façons d'aider (don, bénévolat,
contributions matérielles).

Le site ne traite aucune demande : il oriente vers un téléphone, un courriel ou
Facebook. Aucune transaction, aucune inscription, aucun compte.

**Ce que « réussi » veut dire ici**, selon Gabriel : le projet est du bénévolat *et*
une vitrine. Le succès se mesure donc doublement — utilité réelle pour Phé-Nix, et
qualité visible du travail, le site servant de référence pour attirer de vrais
clients à illumma.

## Positioning

Le mécanisme que peu d'organismes peuvent revendiquer avec les mêmes mots :

- **100 % bénévole** — aucun salaire, aucun loyer, aucun frais administratif.
- **Phé-Nix n'achète rien.** Les denrées, les vêtements et le matériel sont donnés
  par des commanditaires, des commerces et des organismes. Les dons en argent
  servent uniquement à aller chercher ces dons et à les acheminer : essence,
  déplacements, entreposage, logistique, transport vers la thérapie.
- **Aucune condition d'admissibilité à la distribution de rue** — pas de formulaire,
  pas d'inscription, pas d'enquête de crédit.

Cette transparence sur la destination de chaque dollar est l'argument central du
site, et elle doit rester vérifiable plutôt que rhétorique.

## Operating Context

- **Quatre services** : distribution alimentaire dans les rues, dépannage
  alimentaire, référencement pour thérapie, transport vers la thérapie.
- **Territoire** : Montréal, la Montérégie, Gatineau, Trois-Rivières. La Montérégie
  englobe Longueuil et Saint-Jean-sur-Richelieu, qui ne doivent donc pas être
  nommées à côté d'elle.
- **Rythme** : plusieurs sorties par semaine, environ trois, totalisant plus de 150
  distributions par année.
- **Le dépannage alimentaire se demande uniquement par téléphone**, auprès de Guy au
  (438) 464-1703. Le courriel et Facebook ne sont pas traités pour ces demandes.
- **Le transport vers la thérapie** exige deux bénévoles, sans exception. Ce n'est
  pas une navette et ce n'est pas un transport vers des rendez-vous : c'est un long
  trajet ponctuel pour rapprocher quelqu'un de sa réhabilitation.
- **Le référencement** exige d'être prestataire d'une aide sociale, ce qui finance
  la thérapie.
- **Trois points de collecte** dans des commerces partenaires.
- **Les personnes responsables** : Michel Couture « Mike », président-fondateur,
  volet thérapie. Guy Couture, vice-président-fondateur, volet dépannage
  alimentaire.

## Capabilities and Constraints

**Technique.** HTML, CSS et JavaScript statiques. Aucun outil de compilation, aucun
gestionnaire de paquets, aucun CMS. Déploiement automatique sur Vercel à chaque
poussée vers GitHub (`Gablandry/Ph--Nix`, dépôt privé).

**Le site reste modifiable à la main, et c'est une décision, pas un défaut.** Gabriel
a confirmé qu'il fait lui-même les changements, avec Claude. Personne chez Phé-Nix
n'a besoin de modifier le contenu seul. Tant que cela ne change pas, n'introduire ni
CMS, ni interface d'administration, ni système d'édition.

**Bilinguisme.** Le français est la source ; l'anglais est appliqué à l'exécution par
`traduction.js`. Les clés du dictionnaire sont **les chaînes françaises exactes** :
toute modification d'un texte casse sa traduction si l'entrée correspondante n'est
pas modifiée en même temps. C'est le piège le plus fréquent de ce projet.

**Aucun formulaire nulle part.** Tout contact passe par `mailto:`, `tel:` ou
Facebook. Aucune donnée de visiteur n'est reçue par le site.

**Contenu externe.** La politique de sécurité (`vercel.json`) bloque les ressources
externes. Les polices sont auto-hébergées. Les cartes Google et la vidéo YouTube ne
se chargent qu'au clic. Résultat mesuré : zéro requête vers un tiers au chargement.

**Fichiers internes non publiés.** Tout fichier à la racine du dépôt est servi
publiquement par Vercel. `.vercelignore` exclut les fichiers Markdown du
déploiement ; y ajouter tout nouveau document de travail.

**Décisions ouvertes.**

- Le domaine `phe-nix.org` n'est pas branché : le site vit sur `ph-nix.vercel.app`.
  Bloqué sur l'accès Wix de Mike.
- Aucun reçu fiscal. L'organisme travaille à obtenir un numéro d'organisme de
  bienfaisance ; le site l'annonce comme à venir.
- Le contraste de l'orange de marque est de 3,76 pour 1 alors que la norme
  d'accessibilité en exige 4,5. Correction proposée et non appliquée : elle
  changerait la couleur de marque partout.

## Brand Commitments

- **Nom** : Phé-Nix Action Communautaire Citoyenne. Couramment « Phé-Nix ». Souvent
  écrit « Phénix » sans trait d'union par le public.
- **Logo** : le phénix multicolore, présent sur le camion, les chandails et la
  bannière de l'organisme. C'est un actif réel, pas une création du site.
- **Registre de langue, décidé explicitement par Gabriel** : professionnel et
  humain. « Nous » plutôt que « on », vouvoiement, aucun terme familier. Assez
  chaleureux pour qu'une personne en détresse ose appeler, assez sérieux pour un
  bailleur de fonds. Les 65 formulations familières du site ont été réécrites dans ce
  sens.
- **Aucun tiret cadratin dans les textes** — consigne explicite de Gabriel : « ça
  fait trop IA ».

## Evidence on Hand

**Réel et utilisable.**

- Photographies authentiques de terrain : distributions dans la rue, le camion
  identifié, les collectes chez les commerçants, la préparation, les partenaires.
  Fichiers `terrain-*.jpg`, `mini/` pour les vignettes allégées.
- Portraits des deux fondateurs : `mike.jpg`, `guy.jpg`.
- Entrevue vidéo de Michel Couture sur YouTube.
- Mur des commanditaires : 73 partenaires répartis en quatre catégories, plus une
  case « Et bien d'autres partenaires encore ».
- Coordonnées vérifiées, adresses réelles des trois points de collecte.

**Chiffres affichés, tous en attente de confirmation par Mike.** Plus de 150
distributions par année, plus de 312 000 repas, plus de 100 personnes aidées chaque
semaine, 59 personnes sorties de la rue grâce à une réhabilitation, plus de 100
commanditaires. Le 59 est l'affirmation la plus forte du site.

**Absences à ne jamais combler par invention.**

- Les noms et les visages des 9 personnes présentes au tout début ne sont pas
  connus. Ne pas les représenter.
- La répartition des commanditaires au-delà des 73 nommés n'est pas connue.
- Aucun chiffre, témoignage, partenaire ou récompense ne doit être créé pour
  remplir un espace.
- Une photo montrant un enfant a été floutée avant publication, faute de
  consentement parental documenté.

## Product Principles

1. **Ne jamais inventer.** Ni un chiffre, ni un nom, ni un visage, ni une catégorie.
   Quand une information manque, l'écrire comme manquante et demander.
2. **Aucune donnée de bénéficiaire sur le web.** Le site oriente, il ne collecte
   rien. Cette règle prime sur toute commodité.
3. **Rester modifiable à la main.** Pas de dépendance, pas de compilation, pas de
   CMS, tant que Gabriel est le seul à modifier le site.
4. **Le français commande, l'anglais suit.** Toute retouche de texte s'accompagne de
   sa mise à jour dans le dictionnaire, dans le même geste.
5. **Trois publics à égalité.** Aucun arbitrage silencieux entre la personne dans le
   besoin, le donateur et le bénévole.

## Accessibility & Inclusion

Une partie du public vit dans la précarité : appareils anciens, forfaits de données
limités, connexions faibles. Le poids des pages est donc un enjeu d'accès, pas de
confort. L'accueil a été ramené de 4 341 Ko à 793 Ko pour cette raison.

Le contenu doit rester lisible si le JavaScript échoue : les sections animées ne se
cachent que lorsque le script a démarré, et un filet de sécurité les révèle après
trois secondes.

Défaut connu et non corrigé : l'orange de marque `#E8500E` donne un contraste de
3,76 pour 1 sur blanc, sous le seuil de 4,5 exigé par la norme WCAG AA. Il touche
tous les boutons principaux et tous les petits titres en majuscules.
