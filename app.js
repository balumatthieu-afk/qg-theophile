// Opération Février 2027 — Le QG de Théophile & son Parrain (V2 : Calendrier Jour par Jour + Plan Code Livre & Appli)
const STORAGE_KEY = 'theophile_qg_2026_v2';

// Chaque jour de l'échéancier possède une liste de sous-missions concrètes (Réorientation + Code Livre/Appli) avec des XP dédiés
const DEFAULT_PHASES = [
  {
    id: 'phase-1',
    badge: 'Semaine 1 • Jeudi 19 → Mercredi 25 Novembre',
    title: 'Lancement, Choix de l’Appli Code & Ouverture des Radars',
    desc: '7 jours = 7 missions Réorientation + les 6 premiers thèmes de ton Livre du Code couplés à ton Appli.',
    openByDefault: true,
    days: [
      {
        id: 'd1',
        isoDate: '2026-11-19',
        date: 'JOUR 1 • Jeudi 19 Nov (Aujourd’hui)',
        title: 'Choisir mon Appli Code + Faire mon Inventaire de Curiosité',
        hasCode: true,
        subtasks: [
          {
            id: 'd1-code',
            type: 'code',
            label: '🚗 CODE (Appli + Livre)',
            xp: 50,
            text: 'Télécharger mon appli Code (En Voiture Simone 100% gratuite ou Ornikar), faire 1 série test de 40 questions pour voir mon score de départ + repérer le sommaire des 10 thèmes dans mon Livre.',
            link: 'https://www.envoituresimone.com/code-de-la-route',
            linkText: 'Télécharger En Voiture Simone ↗'
          },
          {
            id: 'd1-reorient',
            type: 'reorient',
            label: '🧭 RÉORIENTATION (20 min)',
            xp: 50,
            text: 'Aller dans l’onglet "4. Inventaire de Curiosité" et cocher au moins 4 activités qui me plaisent quand personne ne me donne de note.'
          }
        ]
      },
      {
        id: 'd2',
        isoDate: '2026-11-20',
        date: 'JOUR 2 • Vendredi 20 Nov',
        title: 'Ouverture Compte Service Civique + Thème 1 du Code',
        hasCode: true,
        subtasks: [
          {
            id: 'd2-code',
            type: 'code',
            label: '🚗 CODE (Livre 15 min + Appli 25 min)',
            xp: 50,
            text: 'LIVRE Thème L (Circulation routière : panneaux, feux, marquages au sol) + APPLI : 1 série thématique Signalisation + 1 série de 40 questions.'
          },
          {
            id: 'd2-reorient',
            type: 'reorient',
            label: '🤝 SERVICE CIVIQUE (30 min)',
            xp: 50,
            text: 'Créer mon profil sur service-civique.gouv.fr, filtrer les missions dès Février 2027 (Essonne / Paris) dans Sport, Culture, Environnement ou Médias et mettre 3 missions en favoris.',
            link: 'https://www.service-civique.gouv.fr/',
            linkText: 'Ouvrir Service Civique ↗'
          }
        ]
      },
      {
        id: 'd3',
        isoDate: '2026-11-21',
        date: 'JOUR 3 • Samedi 21 Nov',
        title: 'Exploration Europe (CES) + Priorités & Intersections',
        hasCode: true,
        subtasks: [
          {
            id: 'd3-code',
            type: 'code',
            label: '🚗 CODE (Livre 15 min + Appli 25 min)',
            xp: 50,
            text: 'LIVRE Thème L suite (Règles de priorité, cédez-le-passage, ronds-points, croisements) + APPLI : 2 séries de 40 questions en notant chaque faute.'
          },
          {
            id: 'd3-reorient',
            type: 'reorient',
            label: '🌍 CORPS EUROPÉEN DE SOLIDARITÉ (30 min)',
            xp: 50,
            text: 'Créer mon compte sur le portail du Corps Européen de Solidarité (volontariat 3 à 12 mois en Europe 100% pris en charge : logement, repas, voyage, argent de poche) et repérer 2 pays.',
            link: 'https://youth.europa.eu/solidarity_fr',
            linkText: 'Portail Corps Européen ↗'
          }
        ]
      },
      {
        id: 'd4',
        isoDate: '2026-11-22',
        date: 'JOUR 4 • Dimanche 22 Nov',
        title: '1er Point avec mon Parrain + Thème Conducteur (Alcool/Fatigue)',
        hasCode: true,
        subtasks: [
          {
            id: 'd4-code',
            type: 'code',
            label: '🚗 CODE (Livre 15 min + Appli 25 min)',
            xp: 50,
            text: 'LIVRE Thème C (Le Conducteur : distances d’arrêt/sécurité, temps de réaction 1 sec, taux d’alcool 0,2g/l jeune permis, fatigue) + APPLI : 2 séries de 40 questions.'
          },
          {
            id: 'd4-reorient',
            type: 'reorient',
            label: '💬 POINT PARRAIN #1 (20 min)',
            xp: 60,
            text: 'Cliquer sur "Envoyer mon avancement au Parrain" en haut à droite et débriefer ensemble mes premières pistes et mon score au Code.'
          }
        ]
      },
      {
        id: 'd5',
        isoDate: '2026-11-23',
        date: 'JOUR 5 • Lundi 23 Nov',
        title: 'Appel Mission Locale (Stages PMSMP) + Thème La Route',
        hasCode: true,
        subtasks: [
          {
            id: 'd5-code',
            type: 'code',
            label: '🚗 CODE (Livre 15 min + Appli 25 min)',
            xp: 50,
            text: 'LIVRE Thème R (La Route : conduite de nuit, pluie/brouillard/neige, usage des feux de brouillard, insertion autoroute) + APPLI : 1 série Thème Route + 1 série 40 questions.'
          },
          {
            id: 'd5-reorient',
            type: 'reorient',
            label: '🏢 MISSION LOCALE (25 min)',
            xp: 60,
            text: 'Appeler la Mission Locale de mon secteur pour fixer un RDV et demander comment obtenir des conventions de stage d’immersion (PMSMP de 1 à 4 semaines en entreprise).',
            link: 'https://www.unml.info/les-missions-locales/annuaire/',
            linkText: 'Annuaire Missions Locales ↗'
          }
        ]
      },
      {
        id: 'd6',
        isoDate: '2026-11-24',
        date: 'JOUR 6 • Mardi 24 Nov',
        title: 'Bénévolat Terrain + Thème Autres Usagers',
        hasCode: true,
        subtasks: [
          {
            id: 'd6-code',
            type: 'code',
            label: '🚗 CODE (Livre 15 min + Appli 25 min)',
            xp: 50,
            text: 'LIVRE Thème U (Autres usagers : distances latérales cyclistes 1m en ville / 1m50 hors agglo, piétons, angles morts poids lourds, bus) + APPLI : 2 séries de 40 questions.'
          },
          {
            id: 'd6-reorient',
            type: 'reorient',
            label: '⚡ BÉNÉVOLAT ACTIF (25 min)',
            xp: 50,
            text: 'Sur JeVeuxAider.gouv.fr, repérer 2 missions locales (sport, événementiel, solidarité) pour sortir de ma chambre dès décembre et garder un rythme actif.',
            link: 'https://www.jeveuxaider.gouv.fr/',
            linkText: 'Explorer JeVeuxAider ↗'
          }
        ]
      },
      {
        id: 'd7',
        isoDate: '2026-11-25',
        date: 'JOUR 7 • Mercredi 25 Nov',
        title: 'Écoles 100% Projets (Zéro Amphi) + Réglementation & Points',
        hasCode: true,
        subtasks: [
          {
            id: 'd7-code',
            type: 'code',
            label: '🚗 CODE (Livre 15 min + Appli 25 min)',
            xp: 50,
            text: 'LIVRE Thème D (Notions diverses : permis probatoire 6 points, documents obligatoires, contrôle technique, sanctions) + APPLI : 2 séries de 40 questions (objectif : 30+/40).'
          },
          {
            id: 'd7-reorient',
            type: 'reorient',
            label: '💻 ÉCOLES PAR PROJET (30 min)',
            xp: 50,
            text: 'Explorer 3 écoles sans cours magistral (École 42, Ada Tech School, Gobelins sections pro) et voter sur mes cartes dans l’onglet "3. Labo des Pistes".',
            link: 'https://42.fr/',
            linkText: 'Découvrir 42 ↗'
          }
        ]
      }
    ]
  },
  {
    id: 'phase-2',
    badge: 'Semaine 2 • Jeudi 26 Nov → Mercredi 2 Décembre',
    title: 'Passage à l’Action, Premières Candidatures & Fin des 10 Thèmes Code',
    desc: 'On boucle les 10 thèmes du Livre du Code et on passe aux premiers vrais contacts terrain.',
    openByDefault: true,
    days: [
      {
        id: 'd8',
        isoDate: '2026-11-26',
        date: 'JOUR 8 • Jeudi 26 Nov',
        title: 'Compagnons & Artisanat Technique + Thème Mécanique',
        hasCode: true,
        subtasks: [
          {
            id: 'd8-code',
            type: 'code',
            label: '🚗 CODE (Livre 15 min + Appli 25 min)',
            xp: 50,
            text: 'LIVRE Thème M (Mécanique & Équipements : voyants rouges vs oranges, témoin d’usure pneus 1,6mm, niveaux) + APPLI : 1 série Mécanique + 1 série 40 questions.'
          },
          {
            id: 'd8-reorient',
            type: 'reorient',
            label: '🪵 ARTISANAT & TECHNIQUE (30 min)',
            xp: 50,
            text: 'Regarder les métiers concrets chez les Compagnons du Devoir et les CFA techniques (régie son/lumière spectacle, ébénisterie, mécanique de précision).',
            link: 'https://www.compagnons-du-devoir.com/',
            linkText: 'Compagnons du Devoir ↗'
          }
        ]
      },
      {
        id: 'd9',
        isoDate: '2026-11-27',
        date: 'JOUR 9 • Vendredi 27 Nov',
        title: 'Mon CV Agile "Énergie & Terrain" + Sécurité Passagers',
        hasCode: true,
        subtasks: [
          {
            id: 'd9-code',
            type: 'code',
            label: '🚗 CODE (Livre 15 min + Appli 25 min)',
            xp: 50,
            text: 'LIVRE Thèmes P & S (Installation poste de conduite, angle mort portière, sécurité enfants, airbags, ABS/ESP) + APPLI : 2 séries de 40 questions.'
          },
          {
            id: 'd9-reorient',
            type: 'reorient',
            label: '📄 CV AGILE 1 PAGE (35 min)',
            xp: 70,
            text: 'Préparer mon CV d’une page mettant en avant mon énergie, mon contrat à la Mairie de Crosne en janvier, et mon envie d’apprendre sur le terrain.'
          }
        ]
      },
      {
        id: 'd10',
        isoDate: '2026-11-28',
        date: 'JOUR 10 • Samedi 28 Nov',
        title: 'Mes 2 Premières Candidatures + Premiers Secours & Éco-conduite',
        hasCode: true,
        subtasks: [
          {
            id: 'd10-code',
            type: 'code',
            label: '🚗 CODE (Livre 15 min + Appli 25 min)',
            xp: 60,
            text: 'LIVRE Thèmes A & E (Premiers secours P.A.S. : Protéger, Alerter 15/18/112, Secourir + Éco-conduite) -> LES 10 THÈMES DU LIVRE SONT BOUCLÉS ! + 2 séries Appli.'
          },
          {
            id: 'd10-reorient',
            type: 'reorient',
            label: '🚀 2 CANDIDATURES ENVOYÉES (30 min)',
            xp: 80,
            text: 'Envoyer mes 2 premières candidatures sur Service Civique ou JeVeuxAider avec un message court et direct (6 lignes sincères).',
            link: 'https://www.service-civique.gouv.fr/',
            linkText: 'Postuler sur Service Civique ↗'
          }
        ]
      },
      {
        id: 'd11',
        isoDate: '2026-11-29',
        date: 'JOUR 11 • Dimanche 29 Nov',
        title: 'Point Parrain #2 + Grand Bilan des 10 Thèmes Code',
        hasCode: true,
        subtasks: [
          {
            id: 'd11-code',
            type: 'code',
            label: '🚗 CODE (Appli 30 min)',
            xp: 60,
            text: 'Faire 2 examens blancs sur l’Appli et regarder dans mes statistiques quels sont mes 2 thèmes les plus faibles à retravailler dans le Livre.'
          },
          {
            id: 'd11-reorient',
            type: 'reorient',
            label: '💬 POINT PARRAIN #2 (25 min)',
            xp: 60,
            text: 'Remplir le Carnet de bord, envoyer mon lien de suivi à mon parrain et relire ensemble mon CV et mes 2 pistes favorites pour février.'
          }
        ]
      },
      {
        id: 'd12',
        isoDate: '2026-11-30',
        date: 'JOUR 12 • Lundi 30 Nov',
        title: 'Rentrées Décalées Février (BTS/Écoles) + Spécial Pièges Vitesse',
        hasCode: true,
        subtasks: [
          {
            id: 'd12-code',
            type: 'code',
            label: '🚗 CODE (Livre 10 min + Appli 35 min)',
            xp: 60,
            text: 'Réviser dans le LIVRE le tableau de toutes les vitesses (pluie vs sec, jeune conducteur : 110 sur autoroute, 100 sur voie rapide, 80 sur route) + 3 séries Appli.'
          },
          {
            id: 'd12-reorient',
            type: 'reorient',
            label: '🎓 RENTRÉES DÉCALÉES (30 min)',
            xp: 50,
            text: 'Lister les BTS, BUT ou écoles pratiques qui proposent une rentrée décalée en janvier/février 2027 (audiovisuel, communication, logistique, tech).'
          }
        ]
      },
      {
        id: 'd13',
        isoDate: '2026-12-01',
        date: 'JOUR 13 • Mardi 1er Décembre (J-7 avant le Code !)',
        title: 'Ciblage Stages d’Immersion PMSMP + Spécial Panneaux Rares',
        hasCode: true,
        subtasks: [
          {
            id: 'd13-code',
            type: 'code',
            label: '🚗 CODE J-7 (Livre 10 min + Appli 35 min)',
            xp: 60,
            text: 'Ouvrir les pages de garde du LIVRE avec tous les panneaux (interdiction, obligation, panonceaux, stationnement) + 3 séries de 40 questions sur l’Appli.'
          },
          {
            id: 'd13-reorient',
            type: 'reorient',
            label: '🛠️ CIBLAGE IMMERSION (25 min)',
            xp: 50,
            text: 'Noter 3 entreprises, studios, salles de spectacle ou artisans autour de chez moi où j’aimerais tester le métier pendant 1 semaine grâce à la Mission Locale.'
          }
        ]
      },
      {
        id: 'd14',
        isoDate: '2026-12-02',
        date: 'JOUR 14 • Mercredi 2 Décembre (J-6 Code)',
        title: 'Prise de Contact Association CES Europe + Spécial Feux & Nuit',
        hasCode: true,
        subtasks: [
          {
            id: 'd14-code',
            type: 'code',
            label: '🚗 CODE J-6 (Livre 10 min + Appli 35 min)',
            xp: 60,
            text: 'Réviser dans le LIVRE la règle exacte des feux (croisement, route, brouillard avant vs arrière jamais sous la pluie !) + 3 séries de 40 questions sur l’Appli.'
          },
          {
            id: 'd14-reorient',
            type: 'reorient',
            label: '🌍 CONTACT EUROPE CES (25 min)',
            xp: 60,
            text: 'Contacter une association française accompagnatrice pour le volontariat européen (ex: Concordia ou Jeunesse et Reconstruction) pour connaître les départs de février.',
            link: 'https://www.concordia.fr/',
            linkText: 'Voir Concordia ↗'
          }
        ]
      }
    ]
  },
  {
    id: 'phase-3',
    badge: 'Semaine 3 • Jeudi 3 → Mardi 8 Décembre',
    title: '🚨 SPRINT FINAL CODE DE LA ROUTE (Jour J : Mardi 8 Décembre)',
    desc: 'Les 6 derniers jours avant l’examen du 8 décembre : priorité absolue au Code (objectif 35+/40 régulier) + micro-actions réorientation.',
    openByDefault: true,
    days: [
      {
        id: 'd15',
        isoDate: '2026-12-03',
        date: 'JOUR 15 • Jeudi 3 Décembre (J-5 Code)',
        title: 'Cap des 34/40 au Code + 3e Candidature Service Civique',
        hasCode: true,
        subtasks: [
          {
            id: 'd15-code',
            type: 'code',
            label: '🚗 SPRINT CODE J-5 (45 min)',
            xp: 75,
            text: 'Faire 3 séries en mode "Examen Blanc" (chronométrées sans pause) sur l’Appli + relire dans le Livre chaque règle où j’ai hésité.'
          },
          {
            id: 'd15-reorient',
            type: 'reorient',
            label: '🚀 CANDIDATURE #3 (20 min)',
            xp: 50,
            text: 'Envoyer une 3e candidature Service Civique pour début février 2027.'
          }
        ]
      },
      {
        id: 'd16',
        isoDate: '2026-12-04',
        date: 'JOUR 16 • Vendredi 4 Décembre (J-4 Code)',
        title: 'Chasse aux Pièges Classiques + Coup de Fil de Relance',
        hasCode: true,
        subtasks: [
          {
            id: 'd16-code',
            type: 'code',
            label: '🚗 SPRINT CODE J-4 (45 min)',
            xp: 75,
            text: 'Refaire sur l’Appli uniquement les questions ratées cette semaine + relire dans le Livre les chiffres par cœur (0,2g/l, 1,6mm pneus, distances = dizaine de la vitesse × 3) + 2 examens blancs.'
          },
          {
            id: 'd16-reorient',
            type: 'reorient',
            label: '📞 RELANCE TERRAIN (15 min)',
            xp: 50,
            text: 'Passer 1 coup de fil de suivi à la Mission Locale ou à une structure où j’ai postulé.'
          }
        ]
      },
      {
        id: 'd17',
        isoDate: '2026-12-05',
        date: 'JOUR 17 • Samedi 5 Décembre (J-3 Code)',
        title: 'Simulation Examen Officiel (Objectif 35+/40)',
        hasCode: true,
        subtasks: [
          {
            id: 'd17-code',
            type: 'code',
            label: '🚗 SPRINT CODE J-3 (50 min)',
            xp: 80,
            text: 'Enchaîner 4 séries d’examen blanc sur l’Appli dans le calme complet (sans musique, téléphone en mode avion sauf l’appli). Objectif : au moins 3 séries à 35/40 ou plus !'
          },
          {
            id: 'd17-reorient',
            type: 'reorient',
            label: '🏃AÉRATION & SPORT (30 min)',
            xp: 40,
            text: 'Sortir prendre l’air, faire du sport ou voir des amis pour oxygéner le cerveau après les 4 séries.'
          }
        ]
      },
      {
        id: 'd18',
        isoDate: '2026-12-06',
        date: 'JOUR 18 • Dimanche 6 Décembre (J-2 Code)',
        title: 'Point Parrain #3 (Spécial Confiance Code) + 3 Séries',
        hasCode: true,
        subtasks: [
          {
            id: 'd18-code',
            type: 'code',
            label: '🚗 SPRINT CODE J-2 (40 min)',
            xp: 75,
            text: 'Faire 3 séries d’examen blanc sur l’Appli + relire mon carnet de fautes fréquentes avec mon Livre.'
          },
          {
            id: 'd18-reorient',
            type: 'reorient',
            label: '💬 POINT PARRAIN #3 (20 min)',
            xp: 60,
            text: 'Partager mes scores d’examens blancs avec mon parrain pour faire le plein de confiance avant mardi.'
          }
        ]
      },
      {
        id: 'd19',
        isoDate: '2026-12-07',
        date: 'JOUR 19 • Lundi 7 Décembre (VEILLE DU CODE)',
        title: 'Préparation Convocation & Pièce d’Identité + Révision Douce',
        hasCode: true,
        subtasks: [
          {
            id: 'd19-code',
            type: 'code',
            label: '🚗 VEILLE D’EXAMEN (25 min max)',
            xp: 75,
            text: 'Feuilleter calmement les résumés de fin de chapitre de mon LIVRE + faire 1 ou 2 séries tranquilles sur l’Appli pour garder le rythme sans saturer.'
          },
          {
            id: 'd19-reorient',
            type: 'reorient',
            label: '🪪 CHECK-LIST JOUR J (15 min)',
            xp: 60,
            text: 'Mettre dans mon sac ma pièce d’identité en cours de validité + ma convocation imprimée/sur téléphone, vérifier l’itinéraire vers le centre d’examen et me coucher tôt.'
          }
        ]
      },
      {
        id: 'd20',
        isoDate: '2026-12-08',
        date: 'JOUR 20 • Mardi 8 Décembre 🏆 JOUR J',
        title: '🚗 PASSAGE OFFICIEL DU CODE DE LA ROUTE !',
        hasCode: true,
        isMilestone: true,
        subtasks: [
          {
            id: 'd20-code',
            type: 'code',
            label: '🏆 EXAMEN OFFICIEL DU CODE',
            xp: 200,
            text: 'Arriver 15 min en avance, bien regarder toute la photo (rétroviseurs, panneaux, marquage au sol) et écouter chaque question jusqu’au bout avant de valider. Tu es prêt !'
          },
          {
            id: 'd20-reorient',
            type: 'reorient',
            label: '🎉 ANNONCE AU PARRAIN',
            xp: 100,
            text: 'Envoyer un message à mon parrain dès la sortie du centre d’examen pour débriefer et fêter cette étape clé !'
          }
        ]
      }
    ]
  },
  {
    id: 'phase-4',
    badge: 'Semaine 4 • Mercredi 9 → Dimanche 20 Décembre',
    title: 'Opération Février : Verrouiller mon Projet avant Noël',
    desc: 'Le Code est passé ! Toute ton énergie bascule sur le choix et la validation de ton projet de février + préparation Mairie de Crosne.',
    openByDefault: false,
    days: [
      {
        id: 'd21',
        isoDate: '2026-12-09',
        date: 'JOUR 21 • Mercredi 9 Décembre',
        title: 'Sélection Finale de mon Top 2 Pistes pour Février',
        hasCode: false,
        subtasks: [
          {
            id: 'd21-reorient',
            type: 'reorient',
            label: '🧭 CHOIX STRATÉGIQUE (30 min)',
            xp: 60,
            text: 'Avec l’esprit libéré du Code, trancher mes 2 priorités pour février (ex: Plan A Service Civique / CES Europe, Plan B Stage PMSMP / École par projet).'
          }
        ]
      },
      {
        id: 'd22',
        isoDate: '2026-12-10',
        date: 'JOUR 22 • Jeudi 10 Décembre',
        title: 'Salve de 3 Nouvelles Candidatures Ciblées',
        hasCode: false,
        subtasks: [
          {
            id: 'd22-reorient',
            type: 'reorient',
            label: '🚀 OFFENSIVE FÉVRIER (45 min)',
            xp: 80,
            text: 'Envoyer 3 candidatures ultra-ciblées pour un démarrage début février 2027 (Service Civique, CES ou stage d’immersion).'
          }
        ]
      },
      {
        id: 'd23',
        isoDate: '2026-12-11',
        date: 'JOUR 23 • Vendredi 11 Décembre',
        title: 'Dépôt / Relance Dossier Stage d’Immersion PMSMP',
        hasCode: false,
        subtasks: [
          {
            id: 'd23-reorient',
            type: 'reorient',
            label: '🛠️ MISSION LOCALE / ENTREPRISE (40 min)',
            xp: 70,
            text: 'Contacter l’entreprise ou l’atelier visé pour leur proposer une immersion gratuite de 1 à 2 semaines conventionnée par la Mission Locale.'
          }
        ]
      },
      {
        id: 'd24',
        isoDate: '2026-12-12',
        date: 'JOUR 24 • Samedi 12 Décembre',
        title: 'Journée Portes Ouvertes ou Test en Ligne (42 / Tech / Créa)',
        hasCode: false,
        subtasks: [
          {
            id: 'd24-reorient',
            type: 'reorient',
            label: '💻 TEST CONCRET (45 min)',
            xp: 70,
            text: 'Passer les jeux logiques en ligne de 42 ou visiter un atelier / une journée portes ouvertes d’une formation pratique.'
          }
        ]
      },
      {
        id: 'd25',
        isoDate: '2026-12-13',
        date: 'JOUR 25 • Dimanche 13 Décembre',
        title: 'Point Parrain #4 : Préparation des Entretiens',
        hasCode: false,
        subtasks: [
          {
            id: 'd25-reorient',
            type: 'reorient',
            label: '💬 SIMULATION PARRAIN (30 min)',
            xp: 70,
            text: 'S’entraîner avec mon parrain à me présenter en 2 minutes de façon franche et dynamique pour mes entretiens de la semaine.'
          }
        ]
      },
      {
        id: 'd26',
        isoDate: '2026-12-14',
        date: 'JOUR 26 • Lundi 14 Décembre',
        title: 'Tournée de Relances Téléphoniques',
        hasCode: false,
        subtasks: [
          {
            id: 'd26-reorient',
            type: 'reorient',
            label: '📞 3 COUPS DE FIL (30 min)',
            xp: 75,
            text: 'Appeler directement les responsables des missions Service Civique / structures où j’ai postulé pour décrocher un entretien avant Noël.'
          }
        ]
      },
      {
        id: 'd27',
        isoDate: '2026-12-15',
        date: 'JOUR 27 • Mardi 15 Décembre',
        title: 'Rencontre / Entretien Terrain #1',
        hasCode: false,
        subtasks: [
          {
            id: 'd27-reorient',
            type: 'reorient',
            label: '🤝 ENTRETIEN / VISITE (1h)',
            xp: 90,
            text: 'Passer mon premier entretien (ou rencontre sur place), poser des questions sur le quotidien réel de la mission et noter mon ressenti.'
          }
        ]
      },
      {
        id: 'd28',
        isoDate: '2026-12-16',
        date: 'JOUR 28 • Mercredi 16 Décembre',
        title: 'Rencontre / Entretien Terrain #2 (ou Plan B)',
        hasCode: false,
        subtasks: [
          {
            id: 'd28-reorient',
            type: 'reorient',
            label: '🤝 ENTRETIEN #2 (1h)',
            xp: 90,
            text: 'Avoir toujours au moins 2 pistes concrètes en parallèle pour pouvoir choisir celle où l’équipe et les missions me plaisent le plus.'
          }
        ]
      },
      {
        id: 'd29',
        isoDate: '2026-12-17',
        date: 'JOUR 29 • Jeudi 17 Décembre',
        title: 'Dossier Complet pour la Mairie de Crosne (4 Janvier)',
        hasCode: false,
        subtasks: [
          {
            id: 'd29-reorient',
            type: 'reorient',
            label: '🏛️ PRÉPA MAIRIE DE CROSNE (30 min)',
            xp: 70,
            text: 'Vérifier que la Mairie de Crosne a bien tous mes documents (contrat, RIB, carte vitale, pièce d’identité) et confirmer l’heure et le lieu du 4 janvier.'
          }
        ]
      },
      {
        id: 'd30',
        isoDate: '2026-12-18',
        date: 'JOUR 30 • Vendredi 18 Décembre',
        title: 'Confirmation Écrite de ma Piste de Février',
        hasCode: false,
        subtasks: [
          {
            id: 'd30-reorient',
            type: 'reorient',
            label: '✅ VALIDATION FÉVRIER (30 min)',
            xp: 100,
            text: 'Envoyer un mail de confirmation à la structure choisie pour février 2027 afin de bloquer ma place avant la fermeture des fêtes.'
          }
        ]
      },
      {
        id: 'd31',
        isoDate: '2026-12-20',
        date: 'JOUR 31 • Dimanche 20 Décembre 🎄',
        title: 'Grand Bilan Mi-Décembre avec mon Parrain avant Noël',
        hasCode: false,
        isMilestone: true,
        subtasks: [
          {
            id: 'd31-reorient',
            type: 'reorient',
            label: '🎄 BILAN DE FIN D’ANNÉE',
            xp: 150,
            text: 'Faire le point complet avec mon parrain : Code passé, job de janvier à Crosne prêt, et piste de février verrouillée. Vacances de Noël 100% méritées !'
          }
        ]
      }
    ]
  },
  {
    id: 'phase-5',
    badge: 'Janvier & Février 2027',
    title: 'Mairie de Crosne (4 → 31 Janvier) & Décollage Février',
    desc: 'Un mois de janvier actif et rémunéré à la Mairie de Crosne, puis lancement de ta nouvelle aventure le 1er février !',
    openByDefault: false,
    days: [
      {
        id: 'd32',
        isoDate: '2027-01-04',
        date: '4 → 31 Janvier 2027',
        title: '🏛️ Mission Mairie de Crosne (Tout le mois de Janvier)',
        hasCode: false,
        isMilestone: true,
        subtasks: [
          {
            id: 'd32-reorient',
            type: 'reorient',
            label: '🏛️ JOB TERRAIN MAIRIE DE CROSNE',
            xp: 200,
            text: 'Assurer tout le mois de janvier à la Mairie de Crosne : ponctualité, esprit d’équipe, première vraie paie et super ligne sur le CV.'
          }
        ]
      },
      {
        id: 'd33',
        isoDate: '2027-01-18',
        date: 'Mi-Janvier 2027',
        title: 'Signature Définitive du Contrat / Convention de Février',
        hasCode: false,
        subtasks: [
          {
            id: 'd33-reorient',
            type: 'reorient',
            label: '✍️ SIGNATURE FÉVRIER',
            xp: 100,
            text: 'Signer officiellement ma convention (Service Civique, CES Europe, stage PMSMP ou rentrée décalée) pour enchaîner après la Mairie de Crosne.'
          }
        ]
      },
      {
        id: 'd34',
        isoDate: '2027-02-01',
        date: '1er Février 2027 🚀',
        title: '🌍 DÉCOLLAGE DE MA NOUVELLE AVENTURE DE FÉVRIER !',
        hasCode: false,
        isMilestone: true,
        subtasks: [
          {
            id: 'd34-reorient',
            type: 'reorient',
            label: '🚀 OBJECTIF ATTEINT',
            xp: 300,
            text: 'Démarrer mon nouveau projet de février : tu as cassé l’inertie, décroché ton Code, bossé tout janvier et choisi ta propre voie !'
          }
        ]
      }
    ]
  }
];

const PISTES_DATA = [
  {
    id: 'piste-sc',
    category: 'action',
    icon: '🤝',
    badge: '6 à 10 mois • ~620 €/mois',
    title: 'Le Service Civique (Sas de décompression idéal)',
    why: 'Missions indemnisées dans l’environnement, la culture, le sport, l’action sociale ou l’éducation aux médias.',
    benefit: 'Zéro pression académique, utilité sociale immédiate, travail en équipe et rythme structuré sans l’étiquette d’un "job alimentaire".',
    links: [
      { label: 'Explorer les missions ↗', url: 'https://www.service-civique.gouv.fr/' }
    ]
  },
  {
    id: 'piste-ces',
    category: 'action',
    icon: '🌍',
    badge: '3 à 12 mois • 100% pris en charge',
    title: 'Corps Européen de Solidarité (CES / Volontariat Europe)',
    why: 'Volontariat à l’étranger entièrement financé (logement, nourriture, transports, assurance + argent de poche).',
    benefit: 'Partir sur un projet concret en Europe (chantiers nature, ONG, tiers-lieux). Le moyen le plus rapide de mûrir, pratiquer une langue et sortir du moule français.',
    links: [
      { label: 'Portail Européen CES ↗', url: 'https://youth.europa.eu/solidarity_fr' }
    ]
  },
  {
    id: 'piste-ml',
    category: 'action',
    icon: '🛠️',
    badge: 'Stages 1 à 4 semaines (PMSMP)',
    title: 'Missions Locales & Stages d’Immersion (PMSMP)',
    why: 'Contrairement aux idées reçues, c’est le levier officiel pour tous les 16-25 ans sans statut étudiant pour obtenir des conventions de stage.',
    benefit: 'Tester gratuitement n’importe quel métier pendant 1 à 4 semaines (artisanat, son, vidéo, logistique, numérique, spectacle) sans s’engager sur 3 ans.',
    links: [
      { label: 'Annuaire Missions Locales ↗', url: 'https://www.unml.info/les-missions-locales/annuaire/' }
    ]
  },
  {
    id: 'piste-projet',
    category: 'learning',
    icon: '💻',
    badge: 'Zéro cours magistral • 100% pratique',
    title: 'Écoles à Pédagogie par Projet (Tech, Image, Son, Web)',
    why: 'Modèles type École 42 (gratuite), Ada Tech School, Gobelins (sections pro), formations métiers du web, du son ou de la vidéo.',
    benefit: 'Aucun prof qui récite un cours en amphi : on apprend en résolvant des défis concrets en équipe, devant l’écran ou en studio.',
    links: [
      { label: 'École 42 ↗', url: 'https://42.fr/' },
      { label: 'Ada Tech School ↗', url: 'https://adatechschool.fr/' }
    ]
  },
  {
    id: 'piste-artisanat',
    category: 'learning',
    icon: '🪵',
    badge: 'Excellence manuelle & technique',
    title: 'Artisanat d’Art, Spectacle & Métiers Techniques',
    why: 'Les Compagnons du Devoir, CFA spécialisés (ébénisterie, mécanique de précision, régie son/lumière spectacle, lutherie, cuisine).',
    benefit: 'L’intelligence de la main, la rigueur concrète, la fierté de fabriquer un objet réel ou de faire tourner un spectacle.',
    links: [
      { label: 'Compagnons du Devoir ↗', url: 'https://www.compagnons-du-devoir.com/' }
    ]
  },
  {
    id: 'piste-alternance',
    category: 'learning',
    icon: '⚡',
    badge: 'Salarié + Rentrées décalées Février',
    title: 'Alternance & Rentrées Décalées (BTS / BUT / Écoles)',
    why: 'BTS communication, audiovisuel, négociation/relation client, logistique ou maintenance avec 2 à 3 jours en entreprise par semaine.',
    benefit: 'Statut de salarié rémunéré qui responsabilise immédiatement et change complètement le rapport aux cours.',
    links: [
      { label: 'Portail Alternance ↗', url: 'https://www.alternance.emploi.gouv.fr/' }
    ]
  }
];

const DEFAULT_CURIOSITIES = [
  { id: 'c1', icon: '🎧', title: 'Bricoler du son / Musique / Régie spectacle', level: 'none' },
  { id: 'c2', icon: '🎬', title: 'Monter des vidéos / Photo / Création visuelle', level: 'none' },
  { id: 'c3', icon: '🔧', title: 'Réparer ou fabriquer des objets (mécanique, bois, vélo)', level: 'none' },
  { id: 'c4', icon: '🎪', title: 'Organiser des événements / Festivals / Animation', level: 'none' },
  { id: 'c5', icon: '🌲', title: 'Bouger dehors / Chantiers nature / Sport & Plein air', level: 'none' },
  { id: 'c6', icon: '🍳', title: 'Cuisiner / Pâtisserie / Restauration vivante', level: 'none' },
  { id: 'c7', icon: '💻', title: 'Coder / Créer des sites, des jeux ou de la tech', level: 'none' },
  { id: 'c8', icon: '✈️', title: 'Voyager / Vivre dans un autre pays d’Europe', level: 'none' },
  { id: 'c9', icon: '🤝', title: 'Aider sur le terrain (asso, solidarité, coaching sportif)', level: 'none' }
];

// State Management
let state = {
  completedSubtasks: {}, // { subtaskId: true }
  dayNotes: {},          // { dayId: "note" }
  customDays: [],        // [{ id, phaseId, date, title, desc }]
  pisteInterest: {},     // { pisteId: 'hot' | 'curious' | 'pass' }
  curiosities: [],       // [{ id, icon, title, level: 'none'|'test'|'love' }]
  journalEntries: [],    // [{ date, win, hype, block }]
  currentFilter: 'all'
};

function loadState() {
  const params = new URLSearchParams(window.location.search);
  const syncParam = params.get('sync');
  if (syncParam) {
    try {
      const decoded = JSON.parse(decodeURIComponent(atob(syncParam)));
      state = { ...state, ...decoded };
      saveState(false);
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (e) {
      console.warn('Impossible de décoder le lien de partage :', e);
    }
  } else {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        state = { ...state, ...parsed };
      } catch (e) {
        console.warn('Erreur lecture localStorage', e);
      }
    }
  }

  if (!state.curiosities || state.curiosities.length === 0) {
    state.curiosities = JSON.parse(JSON.stringify(DEFAULT_CURIOSITIES));
  }
}

function saveState(announce = false, msg = 'Sauvegardé') {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateStatsAndProgress();
  if (announce) {
    const live = document.getElementById('live-status');
    if (live) live.textContent = msg;
  }
}

function getAllPhasesWithCustomDays() {
  const phases = JSON.parse(JSON.stringify(DEFAULT_PHASES));
  state.customDays.forEach((cd) => {
    const target = phases.find((p) => p.id === cd.phaseId) || phases[0];
    target.days.push({
      id: cd.id,
      date: cd.date,
      title: cd.title,
      hasCode: false,
      subtasks: [
        {
          id: `${cd.id}-sub`,
          type: 'reorient',
          label: '⭐ DÉFI PERSO',
          xp: 60,
          text: cd.desc || cd.title
        }
      ]
    });
  });
  return phases;
}

function isDayFullyDone(day) {
  return day.subtasks.every((st) => !!state.completedSubtasks[st.id]);
}

function getDayTotalXp(day) {
  return day.subtasks.reduce((sum, st) => sum + (st.xp || 50), 0);
}

function getDayEarnedXp(day) {
  return day.subtasks.reduce((sum, st) => sum + (state.completedSubtasks[st.id] ? (st.xp || 50) : 0), 0);
}

// Compute stats, XP, countdowns and today's recommended mission
function updateStatsAndProgress() {
  const phases = getAllPhasesWithCustomDays();
  let totalSubtasks = 0;
  let doneSubtasks = 0;
  let fullDaysDone = 0;
  let totalCodeSessions = 0;
  let doneCodeSessions = 0;
  let earnedXp = 0;
  let nextTodoDay = null;

  phases.forEach((p) => {
    p.days.forEach((day) => {
      if (isDayFullyDone(day)) {
        fullDaysDone++;
      } else if (!nextTodoDay) {
        nextTodoDay = day;
      }

      day.subtasks.forEach((st) => {
        totalSubtasks++;
        if (st.type === 'code') totalCodeSessions++;
        if (state.completedSubtasks[st.id]) {
          doneSubtasks++;
          earnedXp += st.xp || 50;
          if (st.type === 'code') doneCodeSessions++;
        }
      });
    });
  });

  // Bonus XP from Pistes & Curiosities
  earnedXp += Object.values(state.pisteInterest).filter((v) => v === 'hot' || v === 'curious').length * 30;

  const percent = totalSubtasks > 0 ? Math.round((doneSubtasks / totalSubtasks) * 100) : 0;

  let rank = 'Explorateur';
  if (percent >= 20) rank = 'En Mouvement ⚡';
  if (percent >= 45) rank = 'Pilote Code & Terrain 🚗';
  if (percent >= 75) rank = 'Prêt pour Février 🚀';

  document.getElementById('progress-text').textContent = `${doneSubtasks} sur ${totalSubtasks} missions accomplies`;
  document.getElementById('progress-percent').textContent = `${percent}%`;
  document.getElementById('main-progress').value = percent;
  document.getElementById('xp-badge').textContent = `${earnedXp} XP • ${rank}`;
  document.getElementById('stat-streak').textContent = fullDaysDone;
  document.getElementById('stat-code-count').textContent = `${doneCodeSessions}/${totalCodeSessions}`;

  // Countdown to Code (8 Dec 2026)
  const now = new Date();
  const codeDate = new Date('2026-12-08T09:00:00');
  const diffDays = Math.ceil((codeDate - now) / (1000 * 60 * 60 * 24));
  const codeStatEl = document.getElementById('stat-days-code');
  const codeChipEl = document.getElementById('countdown-code');

  if (state.completedSubtasks['d20-code']) {
    codeStatEl.textContent = 'Validé ✓';
    codeChipEl.textContent = '8 Déc • Validé ✓';
  } else if (diffDays > 0) {
    codeStatEl.textContent = `J-${diffDays}`;
    codeChipEl.textContent = `8 Déc (J-${diffDays})`;
  } else if (diffDays === 0) {
    codeStatEl.textContent = 'Jour J !';
  } else {
    codeStatEl.textContent = 'Passé';
  }

  // Update Today Banner
  const todayBadge = document.getElementById('today-date-badge');
  const todayHeading = document.getElementById('today-heading');
  const todayPreview = document.getElementById('today-checklist-preview');
  const btnCompleteToday = document.getElementById('btn-complete-today');

  if (nextTodoDay) {
    const dayXp = getDayTotalXp(nextTodoDay);
    todayBadge.textContent = `🚨 PROCHAINE JOURNÉE À VALIDER • ${nextTodoDay.date} (+${dayXp} XP)`;
    todayHeading.textContent = nextTodoDay.title;
    todayPreview.innerHTML = nextTodoDay.subtasks
      .map((st) => {
        const done = !!state.completedSubtasks[st.id];
        return `<div>${done ? '✅' : '⭕'} <strong>${escapeHtml(st.label)} :</strong> ${escapeHtml(st.text)}</div>`;
      })
      .join('');
    btnCompleteToday.disabled = false;
    btnCompleteToday.textContent = `✓ Valider les missions de ce jour (+${dayXp} XP)`;
    btnCompleteToday.dataset.dayId = nextTodoDay.id;
  } else {
    todayBadge.textContent = 'Opération Complète 🏆';
    todayHeading.textContent = 'Toutes les journées sont accomplies à 100% !';
    todayPreview.innerHTML = '<div>Bravo Théophile ! Tu peux ajouter de nouveaux défis ou envoyer ton bilan à ton parrain.</div>';
    btnCompleteToday.disabled = true;
    btnCompleteToday.textContent = '100% Terminé 🎉';
    delete btnCompleteToday.dataset.dayId;
  }
}

// Render Agenda Phases & Day Cards
function renderAgenda() {
  const container = document.getElementById('phases-container');
  container.innerHTML = '';
  const phases = getAllPhasesWithCustomDays();

  // Identify first uncompleted day to highlight as current active day
  let firstTodoDayId = null;
  phases.forEach((p) => {
    p.days.forEach((d) => {
      if (!firstTodoDayId && !isDayFullyDone(d)) {
        firstTodoDayId = d.id;
      }
    });
  });

  phases.forEach((phase) => {
    const filteredDays = phase.days.filter((d) => {
      const isDone = isDayFullyDone(d);
      if (state.currentFilter === 'todo') return !isDone;
      if (state.currentFilter === 'done') return isDone;
      if (state.currentFilter === 'code') return d.hasCode;
      return true;
    });

    if (filteredDays.length === 0) return;

    const doneInPhase = phase.days.filter((d) => isDayFullyDone(d)).length;

    const details = document.createElement('details');
    details.className = 'phase-details';
    details.id = phase.id;
    if (phase.openByDefault || state.currentFilter !== 'all') {
      details.open = true;
    }

    const summary = document.createElement('summary');
    summary.className = 'phase-summary';
    summary.innerHTML = `
      <div class="phase-summary-left">
        <span class="phase-badge">${escapeHtml(phase.badge)}</span>
        <div>
          <h3 class="phase-title">${escapeHtml(phase.title)}</h3>
          <p class="phase-desc">${escapeHtml(phase.desc)}</p>
        </div>
      </div>
      <span class="phase-counter">${doneInPhase} / ${phase.days.length} jours validés</span>
    `;

    const list = document.createElement('div');
    list.className = 'tasks-list';

    filteredDays.forEach((day) => {
      const isDone = isDayFullyDone(day);
      const isCurrentFocus = day.id === firstTodoDayId;
      const totalXp = getDayTotalXp(day);
      const earnedXp = getDayEarnedXp(day);
      const noteVal = state.dayNotes[day.id] || '';

      const card = document.createElement('article');
      card.className = `day-card ${isDone ? 'is-done' : ''} ${isCurrentFocus ? 'is-today' : ''} ${day.isMilestone ? 'is-milestone' : ''}`;
      card.id = `card-${day.id}`;

      const subtasksHtml = day.subtasks
        .map((st) => {
          const checked = !!state.completedSubtasks[st.id];
          const typeClass = st.type === 'code' ? 'subtask-code' : 'subtask-reorient';
          const linkHtml = st.link
            ? `<a href="${escapeHtml(st.link)}" target="_blank" rel="noopener noreferrer" class="task-link">${escapeHtml(st.linkText || 'Ouvrir le lien ↗')}</a>`
            : '';

          return `
            <label class="subtask-item ${typeClass} ${checked ? 'is-checked' : ''}" for="chk-${st.id}">
              <input type="checkbox" id="chk-${st.id}" data-subtask-id="${st.id}" ${checked ? 'checked' : ''}>
              <span class="subtask-content">
                <span class="subtask-kicker">
                  <span>${escapeHtml(st.label)}</span>
                  <span class="subtask-xp-tag">+${st.xp || 50} XP</span>
                </span>
                <span class="subtask-text">${escapeHtml(st.text)}</span>
                ${linkHtml}
              </span>
            </label>
          `;
        })
        .join('');

      card.innerHTML = `
        <div>
          <div class="day-header">
            <span class="day-date-badge">${escapeHtml(day.date)}</span>
            <span class="day-xp-pill">${isDone ? `✓ +${totalXp} XP Gagnés` : `${earnedXp}/${totalXp} XP`}</span>
          </div>
          <h4 class="day-title">${escapeHtml(day.title)}</h4>
          <div class="subtasks-checklist">
            ${subtasksHtml}
          </div>
        </div>
        <div class="task-note-box">
          <input
            type="text"
            class="task-note-input"
            data-note-id="${day.id}"
            value="${escapeHtml(noteVal)}"
            aria-label="Note ou score du Code pour ${escapeHtml(day.date)}"
            placeholder="✍️ Note du jour (ex: Score Code 33/40, piège noté, contact trouvé...)"
          >
        </div>
      `;

      list.appendChild(card);
    });

    details.appendChild(summary);
    details.appendChild(list);
    container.appendChild(details);
  });

  // Bind subtask checkbox events
  container.querySelectorAll('input[type="checkbox"][data-subtask-id]').forEach((chk) => {
    chk.addEventListener('change', (e) => {
      const id = e.target.dataset.subtaskId;
      if (e.target.checked) {
        state.completedSubtasks[id] = true;
      } else {
        delete state.completedSubtasks[id];
      }
      saveState(true, 'Mission mise à jour');
      renderAgenda();
    });
  });

  // Bind note inputs
  container.querySelectorAll('input[data-note-id]').forEach((inp) => {
    inp.addEventListener('input', (e) => {
      const id = e.target.dataset.noteId;
      state.dayNotes[id] = e.target.value;
      saveState(false);
    });
  });
}

// Render Labo des Pistes
function renderPistes() {
  const actionGrid = document.getElementById('pistes-action-grid');
  const learningGrid = document.getElementById('pistes-learning-grid');
  actionGrid.innerHTML = '';
  learningGrid.innerHTML = '';

  PISTES_DATA.forEach((piste) => {
    const currentInterest = state.pisteInterest[piste.id] || 'none';
    const card = document.createElement('article');
    card.className = 'piste-card';
    card.dataset.interest = currentInterest;

    const linksHtml = piste.links
      .map((l) => `<a href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer" class="piste-ext-link">${escapeHtml(l.label)}</a>`)
      .join('');

    card.innerHTML = `
      <div>
        <div class="piste-header">
          <span class="piste-icon" aria-hidden="true">${piste.icon}</span>
          <span class="piste-badge">${escapeHtml(piste.badge)}</span>
        </div>
        <h4>${escapeHtml(piste.title)}</h4>
        <p class="piste-why"><strong>Le principe :</strong> ${escapeHtml(piste.why)}</p>
        <p class="piste-benefit"><strong>Pourquoi c’est top pour toi :</strong> ${escapeHtml(piste.benefit)}</p>
        <div class="piste-links">${linksHtml}</div>
      </div>
      <div>
        <div class="interest-selector" role="group" aria-label="Ton intérêt pour ${escapeHtml(piste.title)}">
          <button type="button" class="interest-btn ${currentInterest === 'hot' ? 'active' : ''}" data-piste="${piste.id}" data-val="hot">
            🔥 Ça me chauffe !
          </button>
          <button type="button" class="interest-btn ${currentInterest === 'curious' ? 'active' : ''}" data-piste="${piste.id}" data-val="curious">
            🤔 À creuser
          </button>
          <button type="button" class="interest-btn ${currentInterest === 'pass' ? 'active' : ''}" data-piste="${piste.id}" data-val="pass">
            ❄️ Pas pour moi
          </button>
        </div>
      </div>
    `;

    if (piste.category === 'action') {
      actionGrid.appendChild(card);
    } else {
      learningGrid.appendChild(card);
    }
  });

  document.querySelectorAll('.interest-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pisteId = btn.dataset.piste;
      const val = btn.dataset.val;
      if (state.pisteInterest[pisteId] === val) {
        delete state.pisteInterest[pisteId];
      } else {
        state.pisteInterest[pisteId] = val;
      }
      saveState(true, 'Préférence de piste enregistrée');
      renderPistes();
    });
  });
}

// Render Inventaire de Curiosité
function renderCuriosities() {
  const grid = document.getElementById('curiosity-grid');
  grid.innerHTML = '';

  state.curiosities.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'curiosity-card';
    card.dataset.level = item.level || 'none';

    card.innerHTML = `
      <div class="curiosity-title">
        <span aria-hidden="true">${escapeHtml(item.icon || '✨')}</span>
        <span>${escapeHtml(item.title)}</span>
      </div>
      <div class="curiosity-actions" role="group" aria-label="Niveau d'intérêt pour ${escapeHtml(item.title)}">
        <button type="button" class="curiosity-btn ${item.level === 'love' ? 'active' : ''}" data-cid="${item.id}" data-level="love">
          💚 J'adore ça
        </button>
        <button type="button" class="curiosity-btn ${item.level === 'test' ? 'active' : ''}" data-cid="${item.id}" data-level="test">
          ⚡ Curieux de tester
        </button>
        <button type="button" class="curiosity-btn ${item.level === 'none' ? 'active' : ''}" data-cid="${item.id}" data-level="none">
          Neutre
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.curiosity-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cid = btn.dataset.cid;
      const level = btn.dataset.level;
      const target = state.curiosities.find((c) => c.id === cid);
      if (target) {
        target.level = level;
        saveState(true, 'Inventaire de curiosité mis à jour');
        renderCuriosities();
      }
    });
  });
}

// Render Journal History
function renderJournal() {
  const list = document.getElementById('journal-history-list');
  list.innerHTML = '';

  if (!state.journalEntries || state.journalEntries.length === 0) {
    list.innerHTML = `<p class="section-subtitle">Aucun point enregistré pour l’instant. Remplis le formulaire à gauche pour préparer votre prochaine discussion !</p>`;
    return;
  }

  state.journalEntries.slice().reverse().forEach((entry) => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <span class="history-date">📅 Point du ${escapeHtml(entry.date)}</span>
      ${entry.win ? `<p><strong>🔥 Avancée :</strong> ${escapeHtml(entry.win)}</p>` : ''}
      ${entry.hype ? `<p><strong>🧭 Piste Février :</strong> ${escapeHtml(entry.hype)}</p>` : ''}
      ${entry.block ? `<p><strong>🧱 Question / Blocage :</strong> ${escapeHtml(entry.block)}</p>` : ''}
    `;
    list.appendChild(item);
  });
}

// Generate Share Link & Text Summary
function buildShareArtifacts() {
  const payload = btoa(encodeURIComponent(JSON.stringify(state)));
  const shareUrl = `${window.location.origin}${window.location.pathname}?sync=${payload}`;

  const phases = getAllPhasesWithCustomDays();
  let totalSub = 0;
  let doneSub = 0;
  let codeDone = 0;
  const recentDone = [];

  phases.forEach((p) => {
    p.days.forEach((d) => {
      d.subtasks.forEach((st) => {
        totalSub++;
        if (state.completedSubtasks[st.id]) {
          doneSub++;
          if (st.type === 'code') codeDone++;
        }
      });
      if (isDayFullyDone(d)) {
        recentDone.push(`✅ ${d.date} : ${d.title}${state.dayNotes[d.id] ? ` (${state.dayNotes[d.id]})` : ''}`);
      }
    });
  });

  const hotPistes = PISTES_DATA
    .filter((p) => state.pisteInterest[p.id] === 'hot' || state.pisteInterest[p.id] === 'curious')
    .map((p) => `${state.pisteInterest[p.id] === 'hot' ? '🔥' : '🤔'} ${p.title}`);

  const topCuriosities = state.curiosities
    .filter((c) => c.level === 'love' || c.level === 'test')
    .map((c) => `• ${c.title}`);

  const latestJournal = state.journalEntries[state.journalEntries.length - 1];

  const lines = [
    `🚀 POINT D'AVANCEMENT THÉOPHILE — OPÉRATION FÉVRIER 2027`,
    `Missions validées : ${doneSub}/${totalSub} (${Math.round((doneSub / totalSub) * 100)}%)`,
    `🚗 Entraînements Code (Livre + Appli) validés : ${codeDone}/20`,
    ``,
    `📌 Dernières journées 100% accomplies :`,
    ...(recentDone.length > 0 ? recentDone.slice(-6) : ['(En cours sur la journée actuelle)']),
    ``,
    `🧭 Pistes qui me chauffent pour Février :`,
    ...(hotPistes.length > 0 ? hotPistes : ['(À voter dans le Labo des Pistes)']),
    ``,
    `⚡ Mes curiosités hors-école :`,
    ...(topCuriosities.length > 0 ? topCuriosities : ['(À cocher dans l’inventaire)'])
  ];

  if (latestJournal) {
    lines.push(
      ``,
      `💬 Dernier point du carnet (${latestJournal.date}) :`,
      `- Avancées : ${latestJournal.win || '-'}`,
      `- Piste Février : ${latestJournal.hype || '-'}`,
      `- Question pour toi : ${latestJournal.block || '-'}`
    );
  }

  return { shareUrl, summaryText: lines.join('\n') };
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Initialize UI & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStatsAndProgress();
  renderAgenda();
  renderPistes();
  renderCuriosities();
  renderJournal();

  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach((b) => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });
      document.querySelectorAll('.tab-panel').forEach((panel) => {
        const isMatch = panel.id === targetId;
        panel.classList.toggle('active', isMatch);
        panel.hidden = !isMatch;
      });
    });
  });

  // Header shortcut to Code Method Tab
  document.getElementById('btn-open-code-plan').addEventListener('click', () => {
    document.querySelector('[data-tab="tab-code"]').click();
  });

  // Complete Today Mission Button
  document.getElementById('btn-complete-today').addEventListener('click', (e) => {
    const dayId = e.currentTarget.dataset.dayId;
    if (dayId) {
      const phases = getAllPhasesWithCustomDays();
      phases.forEach((p) => {
        const found = p.days.find((d) => d.id === dayId);
        if (found) {
          found.subtasks.forEach((st) => {
            state.completedSubtasks[st.id] = true;
          });
        }
      });
      saveState(true, 'Bravo ! Journée validée à 100% !');
      renderAgenda();
    }
  });

  // Jump to Today Mission in Agenda
  document.getElementById('btn-jump-today').addEventListener('click', () => {
    document.querySelector('[data-tab="tab-agenda"]').click();
    const dayId = document.getElementById('btn-complete-today').dataset.dayId;
    if (dayId) {
      const card = document.getElementById(`card-${dayId}`);
      if (card) {
        const parentDetails = card.closest('details');
        if (parentDetails) parentDetails.open = true;
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  // Filter pills
  document.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentFilter = pill.dataset.filter;
      renderAgenda();
    });
  });

  // Add Curiosity form
  document.getElementById('form-add-curiosity').addEventListener('submit', (e) => {
    e.preventDefault();
    const inp = document.getElementById('input-new-curiosity');
    const title = inp.value.trim();
    if (!title) return;
    state.curiosities.unshift({
      id: 'c-' + Date.now(),
      icon: '🔥',
      title,
      level: 'love'
    });
    inp.value = '';
    saveState(true, 'Nouvelle curiosité ajoutée');
    renderCuriosities();
  });

  // Journal form
  document.getElementById('form-journal').addEventListener('submit', (e) => {
    e.preventDefault();
    const win = document.getElementById('journal-win').value.trim();
    const hype = document.getElementById('journal-hype').value.trim();
    const block = document.getElementById('journal-block').value.trim();
    if (!win && !hype && !block) return;

    const todayStr = new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    state.journalEntries.push({ date: todayStr, win, hype, block });
    document.getElementById('journal-win').value = '';
    document.getElementById('journal-hype').value = '';
    document.getElementById('journal-block').value = '';
    saveState(true, 'Point enregistré dans le carnet');
    renderJournal();

    const fb = document.getElementById('journal-save-feedback');
    fb.textContent = '✓ Enregistré ! Clique sur "Envoyer mon avancement au Parrain" en haut pour lui partager.';
    setTimeout(() => {
      fb.textContent = '';
    }, 4500);
  });

  // Share Modal
  const modalShare = document.getElementById('modal-share');
  document.getElementById('btn-open-share').addEventListener('click', () => {
    const { shareUrl, summaryText } = buildShareArtifacts();
    document.getElementById('share-summary-text').value = summaryText;
    modalShare.dataset.shareUrl = shareUrl;
    modalShare.showModal();
  });

  document.getElementById('btn-copy-link').addEventListener('click', async (e) => {
    const url = modalShare.dataset.shareUrl || window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      e.currentTarget.textContent = '✓ Lien copié dans le presse-papiers !';
      setTimeout(() => {
        e.currentTarget.textContent = '🔗 Copier le lien de suivi';
      }, 3000);
    } catch {
      prompt('Copie ce lien de synchronisation :', url);
    }
  });

  document.getElementById('btn-copy-summary').addEventListener('click', async (e) => {
    const txt = document.getElementById('share-summary-text').value;
    try {
      await navigator.clipboard.writeText(txt);
      e.currentTarget.textContent = '✓ Message copié ! Prêt à coller sur WhatsApp';
      setTimeout(() => {
        e.currentTarget.textContent = '📋 Copier le message';
      }, 3000);
    } catch {
      document.getElementById('share-summary-text').select();
    }
  });

  // Export / Import JSON backup
  document.getElementById('btn-export-json').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `suivi-theophile-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('input-import-json').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        state = { ...state, ...imported };
        saveState(true, 'Sauvegarde importée avec succès');
        renderAgenda();
        renderPistes();
        renderCuriosities();
        renderJournal();
        modalShare.close();
      } catch {
        alert('Fichier de sauvegarde invalide.');
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-reset-all').addEventListener('click', () => {
    if (confirm('Réinitialiser toutes les cases cochées et les notes à zéro ?')) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  });

  // Add Custom Day / Mission Modal
  const modalTask = document.getElementById('modal-add-task');
  document.getElementById('btn-add-task-modal').addEventListener('click', () => {
    modalTask.showModal();
  });

  document.getElementById('btn-cancel-task').addEventListener('click', () => {
    modalTask.close();
  });

  document.getElementById('form-add-task').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('task-title-input').value.trim();
    const phaseId = document.getElementById('task-phase-select').value;
    const date = document.getElementById('task-date-input').value.trim();
    const desc = document.getElementById('task-desc-input').value.trim();
    if (!title || !date) return;

    state.customDays.push({
      id: 'custom-' + Date.now(),
      phaseId,
      date,
      title,
      desc
    });

    document.getElementById('form-add-task').reset();
    saveState(true, 'Nouvelle journée ajoutée');
    renderAgenda();
    modalTask.close();
  });
});
