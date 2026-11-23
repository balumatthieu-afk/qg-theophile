// Agenda de Théophile — Cap Février 2027 (V3 : Interface épurée, Grosse barre d'XP, Pages d'agenda, Jours validés archivés)
const STORAGE_KEY = 'theophile_qg_2026_v2'; // Conserve la progression V2 déjà cochée !

const DEFAULT_DAYS = [
  {
    id: 'd1',
    dayNum: '19',
    month: 'NOV',
    weekday: 'Jeudi 19 Novembre',
    badge: 'Jour 1',
    title: 'Choisir mon Appli Code + Inventaire de Curiosité',
    hasCode: true,
    subtasks: [
      {
        id: 'd1-code',
        type: 'code',
        label: '🚗 CODE (Appli + Livre)',
        xp: 50,
        text: 'Télécharger mon appli Code (En Voiture Simone gratuite ou Ornikar), faire 1 série test de 40 questions + repérer les 10 thèmes dans mon Livre.',
        link: 'https://www.envoituresimone.com/code-de-la-route',
        linkText: 'En Voiture Simone ↗'
      },
      {
        id: 'd1-reorient',
        type: 'reorient',
        label: '🧭 RÉORIENTATION',
        xp: 50,
        text: 'Aller dans l’onglet "Curiosités" et cocher au moins 4 activités qui me plaisent hors école.'
      }
    ]
  },
  {
    id: 'd2',
    dayNum: '20',
    month: 'NOV',
    weekday: 'Vendredi 20 Novembre',
    badge: 'Jour 2',
    title: 'Compte Service Civique + Thème 1 Code (Signalisation)',
    hasCode: true,
    subtasks: [
      {
        id: 'd2-code',
        type: 'code',
        label: '🚗 CODE (Livre 15m + Appli 25m)',
        xp: 50,
        text: 'LIVRE Thème L (panneaux, feux, marquages) + APPLI : 1 série Signalisation + 1 série de 40 questions.'
      },
      {
        id: 'd2-reorient',
        type: 'reorient',
        label: '🤝 SERVICE CIVIQUE',
        xp: 50,
        text: 'Créer mon compte sur service-civique.gouv.fr, filtrer dès Février 2027 (Essonne / Paris) et mettre 3 missions en favoris.',
        link: 'https://www.service-civique.gouv.fr/',
        linkText: 'Service Civique ↗'
      }
    ]
  },
  {
    id: 'd3',
    dayNum: '21',
    month: 'NOV',
    weekday: 'Samedi 21 Novembre',
    badge: 'Jour 3',
    title: 'Volontariat Europe (CES) + Priorités & Intersections',
    hasCode: true,
    subtasks: [
      {
        id: 'd3-code',
        type: 'code',
        label: '🚗 CODE (Livre 15m + Appli 25m)',
        xp: 50,
        text: 'LIVRE Thème L suite (priorités, ronds-points, croisements) + APPLI : 2 séries de 40 questions.'
      },
      {
        id: 'd3-reorient',
        type: 'reorient',
        label: '🌍 EUROPE (CES)',
        xp: 50,
        text: 'Créer mon compte sur le portail Corps Européen de Solidarité (3-12 mois pris en charge) et repérer 2 pays.',
        link: 'https://youth.europa.eu/solidarity_fr',
        linkText: 'Portail CES ↗'
      }
    ]
  },
  {
    id: 'd4',
    dayNum: '22',
    month: 'NOV',
    weekday: 'Dimanche 22 Novembre',
    badge: 'Jour 4',
    title: 'Point Parrain #1 + Thème Conducteur (Alcool/Distances)',
    hasCode: true,
    subtasks: [
      {
        id: 'd4-code',
        type: 'code',
        label: '🚗 CODE (Livre 15m + Appli 25m)',
        xp: 50,
        text: 'LIVRE Thème C (distances d’arrêt, temps de réaction, alcool 0,2g/l, fatigue) + APPLI : 2 séries de 40 questions.'
      },
      {
        id: 'd4-reorient',
        type: 'reorient',
        label: '💬 POINT PARRAIN #1',
        xp: 60,
        text: 'Cliquer sur "Envoyer au Parrain" en haut à droite et faire le point sur mes pistes et mon score Code.'
      }
    ]
  },
  {
    id: 'd5',
    dayNum: '23',
    month: 'NOV',
    weekday: 'Lundi 23 Novembre',
    badge: 'Jour 5',
    title: 'Appel Mission Locale (Stages PMSMP) + Thème La Route',
    hasCode: true,
    subtasks: [
      {
        id: 'd5-code',
        type: 'code',
        label: '🚗 CODE (Livre 15m + Appli 25m)',
        xp: 50,
        text: 'LIVRE Thème R (nuit, pluie/brouillard, feux, autoroute) + APPLI : 1 série Thème Route + 1 série 40 questions.'
      },
      {
        id: 'd5-reorient',
        type: 'reorient',
        label: '🏢 MISSION LOCALE',
        xp: 60,
        text: 'Appeler la Mission Locale pour fixer un RDV et demander des conventions de stage d’immersion (PMSMP 1 à 4 semaines).',
        link: 'https://www.unml.info/les-missions-locales/annuaire/',
        linkText: 'Annuaire Missions Locales ↗'
      }
    ]
  },
  {
    id: 'd6',
    dayNum: '24',
    month: 'NOV',
    weekday: 'Mardi 24 Novembre',
    badge: 'Jour 6',
    title: 'Bénévolat Terrain + Thème Autres Usagers',
    hasCode: true,
    subtasks: [
      {
        id: 'd6-code',
        type: 'code',
        label: '🚗 CODE (Livre 15m + Appli 25m)',
        xp: 50,
        text: 'LIVRE Thème U (cyclistes 1m/1m50, piétons, angles morts poids lourds, bus) + APPLI : 2 séries de 40 questions.'
      },
      {
        id: 'd6-reorient',
        type: 'reorient',
        label: '⚡ BÉNÉVOLAT',
        xp: 50,
        text: 'Repérer 2 missions locales sur JeVeuxAider.gouv.fr (sport, événementiel, asso) pour bouger dès décembre.',
        link: 'https://www.jeveuxaider.gouv.fr/',
        linkText: 'JeVeuxAider ↗'
      }
    ]
  },
  {
    id: 'd7',
    dayNum: '25',
    month: 'NOV',
    weekday: 'Mercredi 25 Novembre',
    badge: 'Jour 7',
    title: 'Écoles par Projet (42 / Ada / Gobelins) + Réglementation',
    hasCode: true,
    subtasks: [
      {
        id: 'd7-code',
        type: 'code',
        label: '🚗 CODE (Livre 15m + Appli 25m)',
        xp: 50,
        text: 'LIVRE Thème D (permis probatoire 6 points, papiers, contrôle technique, sanctions) + APPLI : 2 séries de 40 questions.'
      },
      {
        id: 'd7-reorient',
        type: 'reorient',
        label: '💻 ÉCOLES PAR PROJET',
        xp: 50,
        text: 'Regarder 42, Ada Tech School et Gobelins (sections pro) + voter dans l’onglet "Pistes Février".',
        link: 'https://42.fr/',
        linkText: 'École 42 ↗'
      }
    ]
  },
  {
    id: 'd8',
    dayNum: '26',
    month: 'NOV',
    weekday: 'Jeudi 26 Novembre',
    badge: 'Jour 8',
    title: 'Compagnons & Artisanat Technique + Thème Mécanique',
    hasCode: true,
    subtasks: [
      {
        id: 'd8-code',
        type: 'code',
        label: '🚗 CODE (Livre 15m + Appli 25m)',
        xp: 50,
        text: 'LIVRE Thème M (voyants rouges/oranges, pneus 1,6mm, niveaux) + APPLI : 1 série Mécanique + 1 série 40 questions.'
      },
      {
        id: 'd8-reorient',
        type: 'reorient',
        label: '🪵 ARTISANAT & TECHNIQUE',
        xp: 50,
        text: 'Explorer les Compagnons du Devoir et CFA techniques (régie son/lumière, ébénisterie, mécanique).',
        link: 'https://www.compagnons-du-devoir.com/',
        linkText: 'Compagnons du Devoir ↗'
      }
    ]
  },
  {
    id: 'd9',
    dayNum: '27',
    month: 'NOV',
    weekday: 'Vendredi 27 Novembre',
    badge: 'Jour 9',
    title: 'CV 1 Page + Thèmes Installation & Sécurité Passagers',
    hasCode: true,
    subtasks: [
      {
        id: 'd9-code',
        type: 'code',
        label: '🚗 CODE (Livre 15m + Appli 25m)',
        xp: 50,
        text: 'LIVRE Thèmes P & S (poste de conduite, portière, enfants, airbags, ABS/ESP) + APPLI : 2 séries de 40 questions.'
      },
      {
        id: 'd9-reorient',
        type: 'reorient',
        label: '📄 CV 1 PAGE',
        xp: 70,
        text: 'Mettre à jour mon CV d’une page (avec la Mairie de Crosne en janvier).'
      }
    ]
  },
  {
    id: 'd10',
    dayNum: '28',
    month: 'NOV',
    weekday: 'Samedi 28 Novembre',
    badge: 'Jour 10',
    title: '2 Premières Candidatures + Secours & Éco-conduite',
    hasCode: true,
    subtasks: [
      {
        id: 'd10-code',
        type: 'code',
        label: '🚗 CODE (Livre 15m + Appli 25m)',
        xp: 60,
        text: 'LIVRE Thèmes A & E (Secours P.A.S. 15/18/112 + Éco-conduite — 10 thèmes bouclés !) + 2 séries Appli.'
      },
      {
        id: 'd10-reorient',
        type: 'reorient',
        label: '🚀 2 CANDIDATURES',
        xp: 80,
        text: 'Envoyer mes 2 premières candidatures (Service Civique ou JeVeuxAider) avec un message direct de 6 lignes.',
        link: 'https://www.service-civique.gouv.fr/',
        linkText: 'Postuler ↗'
      }
    ]
  },
  {
    id: 'd11',
    dayNum: '29',
    month: 'NOV',
    weekday: 'Dimanche 29 Novembre',
    badge: 'Jour 11',
    title: 'Point Parrain #2 + Bilan des 10 Thèmes Code',
    hasCode: true,
    subtasks: [
      {
        id: 'd11-code',
        type: 'code',
        label: '🚗 CODE (Appli 30m)',
        xp: 60,
        text: 'Faire 2 examens blancs sur l’Appli et noter mes 2 thèmes les plus faibles à revoir dans le Livre.'
      },
      {
        id: 'd11-reorient',
        type: 'reorient',
        label: '💬 POINT PARRAIN #2',
        xp: 60,
        text: 'Envoyer mon lien de suivi au parrain et relire ensemble mon CV + mes 2 pistes favorites.'
      }
    ]
  },
  {
    id: 'd12',
    dayNum: '30',
    month: 'NOV',
    weekday: 'Lundi 30 Novembre',
    badge: 'Jour 12',
    title: 'Rentrées Décalées Février + Spécial Pièges Vitesse',
    hasCode: true,
    subtasks: [
      {
        id: 'd12-code',
        type: 'code',
        label: '🚗 CODE (Livre 10m + Appli 35m)',
        xp: 60,
        text: 'LIVRE tableau des vitesses (pluie vs sec, jeune permis : 110 / 100 / 80) + 3 séries Appli.'
      },
      {
        id: 'd12-reorient',
        type: 'reorient',
        label: '🎓 RENTRÉES DÉCALÉES',
        xp: 50,
        text: 'Lister les BTS / BUT / écoles qui ouvrent en janvier-février 2027.'
      }
    ]
  },
  {
    id: 'd13',
    dayNum: '01',
    month: 'DÉC',
    weekday: 'Mardi 1er Décembre',
    badge: 'J-7 Code',
    title: 'Ciblage Stages PMSMP + Spécial Panneaux Rares',
    hasCode: true,
    subtasks: [
      {
        id: 'd13-code',
        type: 'code',
        label: '🚗 CODE J-7 (Livre 10m + Appli 35m)',
        xp: 60,
        text: 'LIVRE pages de panneaux (interdictions, panonceaux, stationnement) + 3 séries de 40 questions Appli.'
      },
      {
        id: 'd13-reorient',
        type: 'reorient',
        label: '🛠️ IMMERSION PMSMP',
        xp: 50,
        text: 'Noter 3 structures (studio, atelier, entreprise) où demander une semaine d’immersion.'
      }
    ]
  },
  {
    id: 'd14',
    dayNum: '02',
    month: 'DÉC',
    weekday: 'Mercredi 2 Décembre',
    badge: 'J-6 Code',
    title: 'Contact Association CES Europe + Spécial Feux & Nuit',
    hasCode: true,
    subtasks: [
      {
        id: 'd14-code',
        type: 'code',
        label: '🚗 CODE J-6 (Livre 10m + Appli 35m)',
        xp: 60,
        text: 'LIVRE règle des feux (croisement, route, brouillard avant/arrière) + 3 séries Appli.'
      },
      {
        id: 'd14-reorient',
        type: 'reorient',
        label: '🌍 CONTACT CES',
        xp: 60,
        text: 'Contacter Concordia ou Jeunesse & Reconstruction pour connaître les départs Europe de février.',
        link: 'https://www.concordia.fr/',
        linkText: 'Concordia ↗'
      }
    ]
  },
  {
    id: 'd15',
    dayNum: '03',
    month: 'DÉC',
    weekday: 'Jeudi 3 Décembre',
    badge: 'J-5 Code',
    title: 'Sprint Examens Blancs + 3e Candidature',
    hasCode: true,
    subtasks: [
      {
        id: 'd15-code',
        type: 'code',
        label: '🚗 SPRINT CODE J-5 (45m)',
        xp: 75,
        text: '3 examens blancs chronométrés sur l’Appli + vérification de chaque hésitation dans le Livre.'
      },
      {
        id: 'd15-reorient',
        type: 'reorient',
        label: '🚀 CANDIDATURE #3',
        xp: 50,
        text: 'Envoyer une 3e candidature Service Civique pour début février.'
      }
    ]
  },
  {
    id: 'd16',
    dayNum: '04',
    month: 'DÉC',
    weekday: 'Vendredi 4 Décembre',
    badge: 'J-4 Code',
    title: 'Chasse aux Pièges Code + Relance Téléphonique',
    hasCode: true,
    subtasks: [
      {
        id: 'd16-code',
        type: 'code',
        label: '🚗 SPRINT CODE J-4 (45m)',
        xp: 75,
        text: 'Refaire uniquement mes questions ratées de la semaine + 2 examens blancs Appli.'
      },
      {
        id: 'd16-reorient',
        type: 'reorient',
        label: '📞 RELANCE',
        xp: 50,
        text: 'Appeler la Mission Locale ou une structure où j’ai postulé.'
      }
    ]
  },
  {
    id: 'd17',
    dayNum: '05',
    month: 'DÉC',
    weekday: 'Samedi 5 Décembre',
    badge: 'J-3 Code',
    title: 'Simulation Examen Officiel (Objectif 35+/40)',
    hasCode: true,
    subtasks: [
      {
        id: 'd17-code',
        type: 'code',
        label: '🚗 SPRINT CODE J-3 (50m)',
        xp: 80,
        text: '4 examens blancs sur l’Appli dans le calme complet. Objectif : 3 séries à 35/40 ou plus.'
      },
      {
        id: 'd17-reorient',
        type: 'reorient',
        label: '🏃 SPORT / AÉRATION',
        xp: 40,
        text: 'Sortir prendre l’air ou faire du sport après les 4 séries.'
      }
    ]
  },
  {
    id: 'd18',
    dayNum: '06',
    month: 'DÉC',
    weekday: 'Dimanche 6 Décembre',
    badge: 'J-2 Code',
    title: 'Point Parrain #3 + 3 Examens Blancs',
    hasCode: true,
    subtasks: [
      {
        id: 'd18-code',
        type: 'code',
        label: '🚗 SPRINT CODE J-2 (40m)',
        xp: 75,
        text: '3 examens blancs sur l’Appli + relecture rapide de mes fautes fréquentes dans le Livre.'
      },
      {
        id: 'd18-reorient',
        type: 'reorient',
        label: '💬 POINT PARRAIN #3',
        xp: 60,
        text: 'Partager mes scores d’examens blancs avec mon parrain.'
      }
    ]
  },
  {
    id: 'd19',
    dayNum: '07',
    month: 'DÉC',
    weekday: 'Lundi 7 Décembre',
    badge: 'Veille Code',
    title: 'Check-list Convocation & Pièce d’Identité + Révision Douce',
    hasCode: true,
    subtasks: [
      {
        id: 'd19-code',
        type: 'code',
        label: '🚗 VEILLE CODE (25m max)',
        xp: 75,
        text: 'Relire les résumés du Livre + 1 ou 2 séries tranquilles sur l’Appli.'
      },
      {
        id: 'd19-reorient',
        type: 'reorient',
        label: '🪪 PRÉPA SAC',
        xp: 60,
        text: 'Préparer pièce d’identité + convocation, vérifier l’itinéraire du centre et coucher tôt.'
      }
    ]
  },
  {
    id: 'd20',
    dayNum: '08',
    month: 'DÉC',
    weekday: 'Mardi 8 Décembre',
    badge: '🏆 JOUR J',
    title: '🚗 PASSAGE DU CODE DE LA ROUTE',
    hasCode: true,
    isMilestone: true,
    subtasks: [
      {
        id: 'd20-code',
        type: 'code',
        label: '🏆 EXAMEN OFFICIEL',
        xp: 200,
        text: 'Arriver 15 min en avance, bien observer chaque photo et écouter chaque question jusqu’au bout.'
      },
      {
        id: 'd20-reorient',
        type: 'reorient',
        label: '🎉 DÉBRIEF PARRAIN',
        xp: 100,
        text: 'Envoyer le résultat à mon parrain dès la sortie.'
      }
    ]
  },
  {
    id: 'd21',
    dayNum: '09',
    month: 'DÉC',
    weekday: 'Mercredi 9 Décembre',
    badge: 'Cap Février',
    title: 'Choisir mon Top 2 Pistes pour Février',
    hasCode: false,
    subtasks: [
      {
        id: 'd21-reorient',
        type: 'reorient',
        label: '🧭 CHOIX PLAN A / PLAN B',
        xp: 60,
        text: 'Trancher mes 2 priorités pour février (Service Civique, CES Europe, stage PMSMP ou école par projet).'
      }
    ]
  },
  {
    id: 'd22',
    dayNum: '10',
    month: 'DÉC',
    weekday: 'Jeudi 10 Décembre',
    badge: 'Cap Février',
    title: '3 Nouvelles Candidatures Ciblées',
    hasCode: false,
    subtasks: [
      {
        id: 'd22-reorient',
        type: 'reorient',
        label: '🚀 OFFENSIVE FÉVRIER',
        xp: 80,
        text: 'Envoyer 3 candidatures ciblées pour un démarrage début février 2027.'
      }
    ]
  },
  {
    id: 'd23',
    dayNum: '11',
    month: 'DÉC',
    weekday: 'Vendredi 11 Décembre',
    badge: 'Cap Février',
    title: 'Dossier Stage d’Immersion PMSMP',
    hasCode: false,
    subtasks: [
      {
        id: 'd23-reorient',
        type: 'reorient',
        label: '🛠️ ENTREPRISE / MISSION LOCALE',
        xp: 70,
        text: 'Proposer une immersion de 1 à 2 semaines (conventionnée par la Mission Locale) à une structure visée.'
      }
    ]
  },
  {
    id: 'd24',
    dayNum: '12',
    month: 'DÉC',
    weekday: 'Samedi 12 Décembre',
    badge: 'Cap Février',
    title: 'Test en Ligne ou Portes Ouvertes (42 / Tech / Créa)',
    hasCode: false,
    subtasks: [
      {
        id: 'd24-reorient',
        type: 'reorient',
        label: '💻 TEST PRATIQUE',
        xp: 70,
        text: 'Faire les jeux logiques en ligne de 42 ou visiter un atelier / une formation pratique.'
      }
    ]
  },
  {
    id: 'd25',
    dayNum: '13',
    month: 'DÉC',
    weekday: 'Dimanche 13 Décembre',
    badge: 'Cap Février',
    title: 'Point Parrain #4 : Préparation Entretiens',
    hasCode: false,
    subtasks: [
      {
        id: 'd25-reorient',
        type: 'reorient',
        label: '💬 SIMULATION PARRAIN',
        xp: 70,
        text: 'Préparer ma présentation en 2 minutes avec mon parrain pour les entretiens de la semaine.'
      }
    ]
  },
  {
    id: 'd26',
    dayNum: '14',
    month: 'DÉC',
    weekday: 'Lundi 14 Décembre',
    badge: 'Cap Février',
    title: 'Relances Téléphoniques (3 appels)',
    hasCode: false,
    subtasks: [
      {
        id: 'd26-reorient',
        type: 'reorient',
        label: '📞 3 APPELS',
        xp: 75,
        text: 'Appeler directement les responsables des structures où j’ai postulé.'
      }
    ]
  },
  {
    id: 'd27',
    dayNum: '15',
    month: 'DÉC',
    weekday: 'Mardi 15 Décembre',
    badge: 'Cap Février',
    title: 'Entretien / Visite Terrain #1',
    hasCode: false,
    subtasks: [
      {
        id: 'd27-reorient',
        type: 'reorient',
        label: '🤝 ENTRETIEN #1',
        xp: 90,
        text: 'Passer mon premier entretien ou rencontre sur place et noter mon ressenti.'
      }
    ]
  },
  {
    id: 'd28',
    dayNum: '16',
    month: 'DÉC',
    weekday: 'Mercredi 16 Décembre',
    badge: 'Cap Février',
    title: 'Entretien / Visite Terrain #2',
    hasCode: false,
    subtasks: [
      {
        id: 'd28-reorient',
        type: 'reorient',
        label: '🤝 ENTRETIEN #2',
        xp: 90,
        text: 'Sécuriser une 2e piste en parallèle pour garder le choix.'
      }
    ]
  },
  {
    id: 'd29',
    dayNum: '17',
    month: 'DÉC',
    weekday: 'Jeudi 17 Décembre',
    badge: 'Crosne',
    title: 'Dossier Complet Mairie de Crosne (4 Janvier)',
    hasCode: false,
    subtasks: [
      {
        id: 'd29-reorient',
        type: 'reorient',
        label: '🏛️ PAPIERS CROSNE',
        xp: 70,
        text: 'Vérifier contrat, RIB, pièce d’identité et horaires du 4 janvier avec la Mairie de Crosne.'
      }
    ]
  },
  {
    id: 'd30',
    dayNum: '18',
    month: 'DÉC',
    weekday: 'Vendredi 18 Décembre',
    badge: 'Cap Février',
    title: 'Confirmation Écrite de ma Piste de Février',
    hasCode: false,
    subtasks: [
      {
        id: 'd30-reorient',
        type: 'reorient',
        label: '✅ VALIDATION',
        xp: 100,
        text: 'Confirmer par mail ma place pour février 2027 avant la fermeture des fêtes.'
      }
    ]
  },
  {
    id: 'd31',
    dayNum: '20',
    month: 'DÉC',
    weekday: 'Dimanche 20 Décembre',
    badge: '🎄 Bilan',
    title: 'Bilan Mi-Décembre avec le Parrain',
    hasCode: false,
    isMilestone: true,
    subtasks: [
      {
        id: 'd31-reorient',
        type: 'reorient',
        label: '🎄 BILAN AVANT NOËL',
        xp: 150,
        text: 'Valider ensemble le bilan de décembre (Code + Mairie de Crosne + Projet Février).'
      }
    ]
  },
  {
    id: 'd32',
    dayNum: '04',
    month: 'JAN',
    weekday: '4 → 31 Janvier 2027',
    badge: '🏛️ Crosne',
    title: 'Job Mairie de Crosne (Tout le mois de Janvier)',
    hasCode: false,
    isMilestone: true,
    subtasks: [
      {
        id: 'd32-reorient',
        type: 'reorient',
        label: '🏛️ MAIRIE DE CROSNE',
        xp: 200,
        text: 'Assurer mon mois de travail à la Mairie de Crosne du 4 au 31 janvier.'
      }
    ]
  },
  {
    id: 'd33',
    dayNum: '18',
    month: 'JAN',
    weekday: 'Mi-Janvier 2027',
    badge: 'Signature',
    title: 'Signature Convention / Contrat de Février',
    hasCode: false,
    subtasks: [
      {
        id: 'd33-reorient',
        type: 'reorient',
        label: '✍️ SIGNATURE FÉVRIER',
        xp: 100,
        text: 'Signer officiellement ma convention (Service Civique, CES, PMSMP ou formation).'
      }
    ]
  },
  {
    id: 'd34',
    dayNum: '01',
    month: 'FÉV',
    weekday: '1er Février 2027',
    badge: '🚀 Départ',
    title: 'DÉMARRAGE DU NOUVEAU PROJET DE FÉVRIER',
    hasCode: false,
    isMilestone: true,
    subtasks: [
      {
        id: 'd34-reorient',
        type: 'reorient',
        label: '🚀 JOUR 1 FÉVRIER',
        xp: 300,
        text: 'Lancement officiel de ma nouvelle aventure de février 2027.'
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
    title: 'Service Civique',
    why: 'Missions indemnisées dans l’environnement, la culture, le sport, le social ou les médias.',
    benefit: 'Zéro pression scolaire, travail en équipe et utilité concrète.',
    links: [{ label: 'service-civique.gouv.fr ↗', url: 'https://www.service-civique.gouv.fr/' }]
  },
  {
    id: 'piste-ces',
    category: 'action',
    icon: '🌍',
    badge: '3 à 12 mois • 100% financé',
    title: 'Corps Européen de Solidarité (CES)',
    why: 'Volontariat en Europe entièrement pris en charge (logement, nourriture, transport, argent de poche).',
    benefit: 'Chantiers nature, ONG, tiers-lieux, langue étrangère et autonomie.',
    links: [{ label: 'Portail CES ↗', url: 'https://youth.europa.eu/solidarity_fr' }]
  },
  {
    id: 'piste-ml',
    category: 'action',
    icon: '🛠️',
    badge: 'Stages 1 à 4 semaines (PMSMP)',
    title: 'Missions Locales & Immersions PMSMP',
    why: 'Cadre officiel 16-25 ans pour obtenir des conventions de stage d’immersion.',
    benefit: 'Tester un métier réel (artisanat, son, vidéo, logistique, tech) pendant 1 à 4 semaines.',
    links: [{ label: 'Annuaire Missions Locales ↗', url: 'https://www.unml.info/les-missions-locales/annuaire/' }]
  },
  {
    id: 'piste-projet',
    category: 'learning',
    icon: '💻',
    badge: 'Zéro cours magistral',
    title: 'Écoles par Projet (42, Ada, Gobelins)',
    why: 'Apprentissage 100% pratique devant l’écran ou en atelier.',
    benefit: 'Pas d’amphis : on résout des projets concrets avec ses pairs.',
    links: [
      { label: 'École 42 ↗', url: 'https://42.fr/' },
      { label: 'Ada Tech School ↗', url: 'https://adatechschool.fr/' }
    ]
  },
  {
    id: 'piste-artisanat',
    category: 'learning',
    icon: '🪵',
    badge: 'Métiers techniques & manuels',
    title: 'Compagnons du Devoir & CFA spécialisés',
    why: 'Ébénisterie, mécanique de précision, régie son/lumière spectacle.',
    benefit: 'Travail de la matière et transmission directe par le geste.',
    links: [{ label: 'Compagnons du Devoir ↗', url: 'https://www.compagnons-du-devoir.com/' }]
  },
  {
    id: 'piste-alternance',
    category: 'learning',
    icon: '⚡',
    badge: 'Salarié + Rentrées décalées',
    title: 'Alternance (BTS / BUT)',
    why: '2 ou 3 jours en entreprise par semaine (audiovisuel, com, logistique, maintenance).',
    benefit: 'Statut salarié et rentrées décalées possibles en janvier/février.',
    links: [{ label: 'Portail Alternance ↗', url: 'https://www.alternance.emploi.gouv.fr/' }]
  }
];

const DEFAULT_CURIOSITIES = [
  { id: 'c1', icon: '🎧', title: 'Son / Musique / Régie spectacle', level: 'none' },
  { id: 'c2', icon: '🎬', title: 'Montage vidéo / Photo', level: 'none' },
  { id: 'c3', icon: '🔧', title: 'Mécanique / Bois / Fabriquer', level: 'none' },
  { id: 'c4', icon: '🎪', title: 'Événementiel / Festivals / Animation', level: 'none' },
  { id: 'c5', icon: '🌲', title: 'Plein air / Nature / Sport', level: 'none' },
  { id: 'c6', icon: '🍳', title: 'Cuisine / Pâtisserie', level: 'none' },
  { id: 'c7', icon: '💻', title: 'Code / Web / Tech', level: 'none' },
  { id: 'c8', icon: '✈️', title: 'Voyager / Vivre en Europe', level: 'none' },
  { id: 'c9', icon: '🤝', title: 'Terrain associatif / Coaching', level: 'none' }
];

// State
let state = {
  completedSubtasks: {},
  dayNotes: {},
  customDays: [],
  pisteInterest: {},
  curiosities: [],
  journalEntries: []
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
      console.warn('Erreur décodage lien sync', e);
    }
  } else {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        state = { ...state, ...JSON.parse(raw) };
      } catch (e) {
        console.warn('Erreur localStorage', e);
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

function getAllDays() {
  const days = JSON.parse(JSON.stringify(DEFAULT_DAYS));
  state.customDays.forEach((cd) => {
    days.unshift({
      id: cd.id,
      dayNum: '★',
      month: 'PERSO',
      weekday: cd.date,
      badge: 'Défi Perso',
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
  return days;
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

function updateStatsAndProgress() {
  const allDays = getAllDays();
  let totalSub = 0;
  let doneSub = 0;
  let doneDays = 0;
  let todoDays = 0;
  let totalCode = 0;
  let doneCode = 0;
  let earnedXp = 0;

  allDays.forEach((day) => {
    if (isDayFullyDone(day)) {
      doneDays++;
    } else {
      todoDays++;
    }
    day.subtasks.forEach((st) => {
      totalSub++;
      if (st.type === 'code') totalCode++;
      if (state.completedSubtasks[st.id]) {
        doneSub++;
        earnedXp += st.xp || 50;
        if (st.type === 'code') doneCode++;
      }
    });
  });

  earnedXp += Object.values(state.pisteInterest).filter((v) => v === 'hot' || v === 'curious').length * 30;
  const percent = totalSub > 0 ? Math.round((doneSub / totalSub) * 100) : 0;

  let rank = 'Niveau 1 • Explorateur';
  let nextRank = 'Prochain niveau à 20%';
  if (percent >= 20) { rank = 'Niveau 2 • En Mouvement ⚡'; nextRank = 'Prochain niveau à 45%'; }
  if (percent >= 45) { rank = 'Niveau 3 • Pilote Code & Terrain 🚗'; nextRank = 'Prochain niveau à 75%'; }
  if (percent >= 75) { rank = 'Niveau 4 • Prêt pour Février 🚀'; nextRank = 'Objectif final : 100%'; }
  if (percent === 100) { rank = 'Niveau MAX • Mission Accomplie 🏆'; nextRank = '100% complété !'; }

  document.getElementById('xp-heading').textContent = `${earnedXp} XP`;
  document.getElementById('xp-rank').textContent = rank;
  document.getElementById('stat-days-done').textContent = doneDays;
  document.getElementById('stat-code-count').textContent = `${doneCode}/${totalCode}`;
  document.getElementById('progress-percent').textContent = `${percent}%`;
  document.getElementById('main-progress').value = percent;
  document.getElementById('progress-text').textContent = `${doneSub} sur ${totalSub} défis accomplis`;
  document.getElementById('xp-next-rank').textContent = nextRank;

  document.getElementById('count-todo-days').textContent = todoDays;
  document.getElementById('count-done-days').textContent = doneDays;

  // Countdown Code (8 Dec 2026)
  const now = new Date();
  const codeDate = new Date('2026-12-08T09:00:00');
  const diffDays = Math.ceil((codeDate - now) / (1000 * 60 * 60 * 24));
  const codeChipEl = document.getElementById('countdown-code');
  if (state.completedSubtasks['d20-code']) {
    codeChipEl.textContent = '8 Déc • Validé ✓';
  } else if (diffDays > 0) {
    codeChipEl.textContent = `8 Décembre (J-${diffDays})`;
  } else if (diffDays === 0) {
    codeChipEl.textContent = '8 Décembre • JOUR J';
  } else {
    codeChipEl.textContent = '8 Décembre';
  }
}

// Build an Agenda Page DOM element for a single day
function createAgendaPageElement(day, { isFeatured = false, isDone = false } = {}) {
  const totalXp = getDayTotalXp(day);
  const earnedXp = getDayEarnedXp(day);
  const noteVal = state.dayNotes[day.id] || '';

  const article = document.createElement('article');
  article.className = `agenda-page ${isFeatured ? 'is-featured-today' : ''} ${isDone ? 'is-done-page' : ''} ${day.isMilestone ? 'is-milestone-page' : ''}`;
  article.id = `page-${day.id}`;

  const subtasksHtml = day.subtasks
    .map((st) => {
      const checked = !!state.completedSubtasks[st.id];
      const typeClass = st.type === 'code' ? 'subtask-code' : 'subtask-reorient';
      const linkHtml = st.link
        ? `<a href="${escapeHtml(st.link)}" target="_blank" rel="noopener noreferrer" class="task-link">${escapeHtml(st.linkText || 'Ouvrir ↗')}</a>`
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

  const topLabel = isFeatured
    ? `🚨 CHALLENGES DU JOUR • ${day.badge}`
    : isDone
      ? `✅ PAGE VALIDÉE • ${day.badge}`
      : day.badge;

  const validateBtnHtml = !isDone
    ? `<button type="button" class="btn btn-primary btn-validate-day" data-day-id="${day.id}">✓ Valider la page (+${totalXp} XP)</button>`
    : '';

  article.innerHTML = `
    <div class="page-top-strip">
      <div class="page-date-block">
        <div class="page-cal-num" aria-hidden="true">
          <span class="cal-day-num">${escapeHtml(day.dayNum)}</span>
          <span class="cal-month">${escapeHtml(day.month)}</span>
        </div>
        <div class="page-weekday-group">
          <span class="page-badge-label">${escapeHtml(topLabel)}</span>
          <span class="page-weekday">${escapeHtml(day.weekday)}</span>
        </div>
      </div>
      <span class="page-xp-badge">${isDone ? `✓ +${totalXp} XP` : `${earnedXp}/${totalXp} XP`}</span>
    </div>

    <div class="page-body">
      <h3 class="page-title">${escapeHtml(day.title)}</h3>
      <div class="subtasks-checklist">
        ${subtasksHtml}
      </div>
    </div>

    <div class="page-footer">
      <input
        type="text"
        class="task-note-input"
        data-note-id="${day.id}"
        value="${escapeHtml(noteVal)}"
        aria-label="Note pour ${escapeHtml(day.weekday)}"
        placeholder="✍️ Note ou score Code (ex: 34/40)..."
      >
      ${validateBtnHtml}
    </div>
  `;

  return article;
}

// Render Active Agenda (Today Page + Upcoming Uncompleted Pages) AND Done Archive Tab
function renderAgendaViews() {
  const todaySlot = document.getElementById('today-page-slot');
  const upcomingGrid = document.getElementById('upcoming-pages-grid');
  const doneGrid = document.getElementById('done-pages-grid');

  todaySlot.innerHTML = '';
  upcomingGrid.innerHTML = '';
  doneGrid.innerHTML = '';

  const allDays = getAllDays();
  const todoDays = allDays.filter((d) => !isDayFullyDone(d));
  const doneDays = allDays.filter((d) => isDayFullyDone(d));

  // 1. Featured Current Day Page right under XP bar
  if (todoDays.length > 0) {
    const currentDay = todoDays[0];
    todaySlot.appendChild(createAgendaPageElement(currentDay, { isFeatured: true, isDone: false }));

    // 2. Remaining upcoming days
    const restTodo = todoDays.slice(1);
    if (restTodo.length > 0) {
      restTodo.forEach((day) => {
        upcomingGrid.appendChild(createAgendaPageElement(day, { isFeatured: false, isDone: false }));
      });
    } else {
      upcomingGrid.innerHTML = `<div class="empty-state-box">C'est la dernière page de ton agenda !</div>`;
    }
  } else {
    todaySlot.innerHTML = `<div class="empty-state-box">🏆 Toutes les pages de l'agenda sont validées à 100% !</div>`;
  }

  // 3. Archived Done Pages Tab
  if (doneDays.length > 0) {
    doneDays.slice().reverse().forEach((day) => {
      doneGrid.appendChild(createAgendaPageElement(day, { isFeatured: false, isDone: true }));
    });
  } else {
    doneGrid.innerHTML = `<div class="empty-state-box">Aucune page validée pour l'instant. Dès que tu coches tous les défis d'une journée, sa page se range automatiquement ici !</div>`;
  }

  bindAgendaEvents();
}

function bindAgendaEvents() {
  document.querySelectorAll('input[type="checkbox"][data-subtask-id]').forEach((chk) => {
    chk.addEventListener('change', (e) => {
      const id = e.target.dataset.subtaskId;
      if (e.target.checked) {
        state.completedSubtasks[id] = true;
      } else {
        delete state.completedSubtasks[id];
      }
      saveState(true, 'Défi mis à jour');
      renderAgendaViews();
    });
  });

  document.querySelectorAll('.btn-validate-day').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const dayId = e.currentTarget.dataset.dayId;
      const found = getAllDays().find((d) => d.id === dayId);
      if (found) {
        found.subtasks.forEach((st) => {
          state.completedSubtasks[st.id] = true;
        });
        saveState(true, 'Page d’agenda validée et archivée !');
        renderAgendaViews();
      }
    });
  });

  document.querySelectorAll('input[data-note-id]').forEach((inp) => {
    inp.addEventListener('input', (e) => {
      state.dayNotes[e.target.dataset.noteId] = e.target.value;
      saveState(false);
    });
  });
}

// Render Pistes
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
        <p class="piste-why"><strong>Principe :</strong> ${escapeHtml(piste.why)}</p>
        <p class="piste-benefit"><strong>Atout :</strong> ${escapeHtml(piste.benefit)}</p>
        <div class="piste-links">${linksHtml}</div>
      </div>
      <div class="interest-selector" role="group" aria-label="Intérêt pour ${escapeHtml(piste.title)}">
        <button type="button" class="interest-btn ${currentInterest === 'hot' ? 'active' : ''}" data-piste="${piste.id}" data-val="hot">🔥 Chaud</button>
        <button type="button" class="interest-btn ${currentInterest === 'curious' ? 'active' : ''}" data-piste="${piste.id}" data-val="curious">🤔 À voir</button>
        <button type="button" class="interest-btn ${currentInterest === 'pass' ? 'active' : ''}" data-piste="${piste.id}" data-val="pass">❄️ Non</button>
      </div>
    `;

    if (piste.category === 'action') actionGrid.appendChild(card);
    else learningGrid.appendChild(card);
  });

  document.querySelectorAll('.interest-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pisteId = btn.dataset.piste;
      const val = btn.dataset.val;
      if (state.pisteInterest[pisteId] === val) delete state.pisteInterest[pisteId];
      else state.pisteInterest[pisteId] = val;
      saveState(true, 'Piste enregistrée');
      renderPistes();
    });
  });
}

// Render Curiosities
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
      <div class="curiosity-actions">
        <button type="button" class="curiosity-btn ${item.level === 'love' ? 'active' : ''}" data-cid="${item.id}" data-level="love">💚 Top</button>
        <button type="button" class="curiosity-btn ${item.level === 'test' ? 'active' : ''}" data-cid="${item.id}" data-level="test">⚡ Tester</button>
        <button type="button" class="curiosity-btn ${item.level === 'none' ? 'active' : ''}" data-cid="${item.id}" data-level="none">Neutre</button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.curiosity-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = state.curiosities.find((c) => c.id === btn.dataset.cid);
      if (target) {
        target.level = btn.dataset.level;
        saveState(true, 'Curiosité mise à jour');
        renderCuriosities();
      }
    });
  });
}

// Render Journal
function renderJournal() {
  const list = document.getElementById('journal-history-list');
  list.innerHTML = '';
  if (!state.journalEntries || state.journalEntries.length === 0) {
    list.innerHTML = `<p class="section-subtitle">Aucun point enregistré.</p>`;
    return;
  }
  state.journalEntries.slice().reverse().forEach((entry) => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <span class="history-date">📅 ${escapeHtml(entry.date)}</span>
      ${entry.win ? `<p><strong>🔥 Avancées :</strong> ${escapeHtml(entry.win)}</p>` : ''}
      ${entry.hype ? `<p><strong>🧭 Piste Février :</strong> ${escapeHtml(entry.hype)}</p>` : ''}
      ${entry.block ? `<p><strong>🧱 Questions :</strong> ${escapeHtml(entry.block)}</p>` : ''}
    `;
    list.appendChild(item);
  });
}

// Share Artifacts
function buildShareArtifacts() {
  const payload = btoa(encodeURIComponent(JSON.stringify(state)));
  const shareUrl = `${window.location.origin}${window.location.pathname}?sync=${payload}`;

  const allDays = getAllDays();
  const doneDays = allDays.filter((d) => isDayFullyDone(d));
  const codeDone = allDays.reduce((acc, d) => acc + d.subtasks.filter((s) => s.type === 'code' && state.completedSubtasks[s.id]).length, 0);

  const lines = [
    `📅 POINT AGENDA THÉOPHILE — CAP FÉVRIER 2027`,
    `Pages validées : ${doneDays.length}/${allDays.length} • Entraînements Code : ${codeDone}/20`,
    ``,
    `✅ Derniers jours validés :`,
    ...(doneDays.length > 0
      ? doneDays.slice(-5).map((d) => `• ${d.weekday} : ${d.title}${state.dayNotes[d.id] ? ` (${state.dayNotes[d.id]})` : ''}`)
      : ['(En cours)'])
  ];

  return { shareUrl, summaryText: lines.join('\n') };
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStatsAndProgress();
  renderAgendaViews();
  renderPistes();
  renderCuriosities();
  renderJournal();

  // Tabs
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

  // Add Curiosity
  document.getElementById('form-add-curiosity').addEventListener('submit', (e) => {
    e.preventDefault();
    const inp = document.getElementById('input-new-curiosity');
    const title = inp.value.trim();
    if (!title) return;
    state.curiosities.unshift({ id: 'c-' + Date.now(), icon: '🔥', title, level: 'love' });
    inp.value = '';
    saveState(true, 'Curiosité ajoutée');
    renderCuriosities();
  });

  // Journal
  document.getElementById('form-journal').addEventListener('submit', (e) => {
    e.preventDefault();
    const win = document.getElementById('journal-win').value.trim();
    const hype = document.getElementById('journal-hype').value.trim();
    const block = document.getElementById('journal-block').value.trim();
    if (!win && !hype && !block) return;

    const todayStr = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    state.journalEntries.push({ date: todayStr, win, hype, block });
    e.target.reset();
    saveState(true, 'Point enregistré');
    renderJournal();

    const fb = document.getElementById('journal-save-feedback');
    fb.textContent = '✓ Enregistré !';
    setTimeout(() => { fb.textContent = ''; }, 3500);
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
      e.currentTarget.textContent = '✓ Lien copié !';
      setTimeout(() => { e.currentTarget.textContent = '🔗 Copier le lien'; }, 2500);
    } catch {
      prompt('Copie ce lien :', url);
    }
  });

  document.getElementById('btn-copy-summary').addEventListener('click', async (e) => {
    const txt = document.getElementById('share-summary-text').value;
    try {
      await navigator.clipboard.writeText(txt);
      e.currentTarget.textContent = '✓ Message copié !';
      setTimeout(() => { e.currentTarget.textContent = '📋 Copier le message'; }, 2500);
    } catch {
      document.getElementById('share-summary-text').select();
    }
  });

  // Export / Import / Reset
  document.getElementById('btn-export-json').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agenda-theophile-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('input-import-json').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        state = { ...state, ...JSON.parse(ev.target.result) };
        saveState(true, 'Sauvegarde importée');
        renderAgendaViews();
        renderPistes();
        renderCuriosities();
        renderJournal();
        modalShare.close();
      } catch {
        alert('Fichier invalide.');
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-reset-all').addEventListener('click', () => {
    if (confirm('Réinitialiser toutes les cases cochées à zéro ?')) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  });

  // Add Custom Day Modal
  const modalTask = document.getElementById('modal-add-task');
  document.getElementById('btn-add-task-modal').addEventListener('click', () => modalTask.showModal());
  document.getElementById('btn-cancel-task').addEventListener('click', () => modalTask.close());

  document.getElementById('form-add-task').addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('task-date-input').value.trim();
    const title = document.getElementById('task-title-input').value.trim();
    const desc = document.getElementById('task-desc-input').value.trim();
    if (!title || !date) return;

    state.customDays.push({ id: 'custom-' + Date.now(), date, title, desc });
    e.target.reset();
    saveState(true, 'Page d’agenda ajoutée');
    renderAgendaViews();
    modalTask.close();
  });
});
