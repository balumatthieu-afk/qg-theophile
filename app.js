// Opération Février 2027 — Le QG de Théophile & son Parrain
const STORAGE_KEY = 'theophile_qg_2026_v1';

const DEFAULT_PHASES = [
  {
    id: 'phase-1',
    badge: 'Semaine 1 • 19 → 25 Novembre',
    title: 'Déclic, Curiosité & Ouverture des Radars',
    desc: 'On casse l’inertie : 1 action de 30 min par jour + 2 séries de code pour préparer le 8 décembre.',
    openByDefault: true,
    tasks: [
      {
        id: 't1',
        date: 'Jeudi 19 Nov',
        tag: 'terrain',
        tagLabel: '🧭 Déclic',
        title: 'Lancer le QG & faire mon Inventaire de Curiosité',
        desc: 'Aller dans l’onglet "Inventaire de Curiosité" et cocher au moins 4 activités qui me plaisent quand personne ne me note + 2 séries de Code.',
        link: '',
        linkText: ''
      },
      {
        id: 't2',
        date: 'Vendredi 20 Nov',
        tag: 'terrain',
        tagLabel: '🤝 Service Civique',
        title: 'Créer mon compte sur service-civique.gouv.fr',
        desc: 'Filtrer les missions dès Février 2027 (Essonne / Paris / Île-de-France) dans Sport, Culture, Environnement ou Médias. Mettre 3 missions en favoris.',
        link: 'https://www.service-civique.gouv.fr/',
        linkText: 'Ouvrir Service Civique ↗'
      },
      {
        id: 't3',
        date: 'Samedi 21 Nov',
        tag: 'terrain',
        tagLabel: '🌍 Europe (CES)',
        title: 'Explorer le Corps Européen de Solidarité (3 à 12 mois)',
        desc: 'Regarder comment partir sur un projet concret en Europe (logement, repas, transport et argent de poche 100% pris en charge).',
        link: 'https://youth.europa.eu/solidarity_fr',
        linkText: 'Portail Corps Européen ↗'
      },
      {
        id: 't4',
        date: 'Dimanche 22 Nov',
        tag: 'terrain',
        tagLabel: '💬 Point Parrain',
        title: '1er Débrief avec mon Parrain (20 min)',
        desc: 'Partager mon lien de suivi avec mon parrain et discuter des premières pistes qui m’attirent le plus (sans pression).',
        link: '',
        linkText: ''
      },
      {
        id: 't5',
        date: 'Lundi 23 Nov',
        tag: 'terrain',
        tagLabel: '🏢 Mission Locale',
        title: 'Appeler la Mission Locale pour fixer un RDV',
        desc: 'Leur demander comment obtenir des conventions de stage d’immersion (PMSMP de 1 à 4 semaines) pour tester un métier sur le terrain.',
        link: 'https://www.unml.info/les-missions-locales/annuaire/',
        linkText: 'Trouver ma Mission Locale ↗'
      },
      {
        id: 't6',
        date: 'Mardi 24 Nov',
        tag: 'terrain',
        tagLabel: '⚡ Bénévolat',
        title: 'Repérer une action de bénévolat ponctuelle pour bouger',
        desc: 'Sur JeVeuxAider.gouv.fr, trouver une mission locale (événementiel, distribution, sport, asso) pour sortir de ma chambre et rencontrer du monde.',
        link: 'https://www.jeveuxaider.gouv.fr/',
        linkText: 'Explorer JeVeuxAider ↗'
      },
      {
        id: 't7',
        date: 'Mercredi 25 Nov',
        tag: 'code',
        tagLabel: '🚗 Code + Écoles',
        title: 'Regarder les écoles 100% projets (zéro amphi) + Code blanc',
        desc: 'Jeter un œil à 42 (piscine), Ada Tech School, Gobelins ou Compagnons du Devoir + faire un test blanc de Code en conditions réelles.',
        link: 'https://42.fr/',
        linkText: 'Voir le modèle 42 ↗'
      }
    ]
  },
  {
    id: 'phase-2',
    badge: 'Semaine 2 • 26 Nov → 2 Décembre',
    title: 'Prise de Contact & Terrain Concret',
    desc: 'On passe de l’écran au réel : coups de fil, préparation d’un CV agile et sélection des meilleures missions.',
    openByDefault: true,
    tasks: [
      {
        id: 't8',
        date: 'Jeudi 26 Nov',
        tag: 'terrain',
        tagLabel: '📄 CV Agile',
        title: 'Mettre à jour mon CV "Énergie & Terrain" (1 page)',
        desc: 'Mettre en avant mon dynamisme, mon futur contrat à la Mairie de Crosne en janvier, et mon envie d’apprendre par l’action.',
        link: '',
        linkText: ''
      },
      {
        id: 't9',
        date: 'Vendredi 27 Nov',
        tag: 'terrain',
        tagLabel: '🚀 Candidatures',
        title: 'Envoyer mes 2 premières candidatures Service Civique / Bénévolat',
        desc: 'Pas besoin d’une lettre de 3 pages : 6 lignes sincères qui expliquent pourquoi j’ai envie de bouger sur le terrain dès février.',
        link: 'https://www.service-civique.gouv.fr/',
        linkText: 'Postuler sur Service Civique ↗'
      },
      {
        id: 't10',
        date: 'Samedi 28 Nov',
        tag: 'code',
        tagLabel: '🚗 Objectif 35/40',
        title: 'Marathon doux du Code : 3 séries + carnet d’erreurs',
        desc: 'Noter les 5 pièges récurrents (priorités, vitesse, panneaux) pour viser sereinement 35+/40 le 8 décembre.',
        link: '',
        linkText: ''
      },
      {
        id: 't11',
        date: 'Dimanche 29 Nov',
        tag: 'terrain',
        tagLabel: '💬 Point Parrain',
        title: 'Point d’étape #2 avec mon Parrain',
        desc: 'Remplir le Carnet de bord et faire le point ensemble sur les 2 pistes favorites pour février.',
        link: '',
        linkText: ''
      },
      {
        id: 't12',
        date: 'Lundi 30 Nov',
        tag: 'terrain',
        tagLabel: '🛠️ Immersion PMSMP',
        title: 'Rendez-vous Mission Locale ou contact artisan / entreprise',
        desc: 'Identifier 1 ou 2 structures (son/vidéo, événementiel, artisanat, logistique, tech) où faire une semaine d’immersion.',
        link: '',
        linkText: ''
      },
      {
        id: 't13',
        date: 'Mardi 1 Déc',
        tag: 'terrain',
        tagLabel: '🌍 Europe / Rentrée',
        title: 'Vérifier les rentrées décalées (Janvier/Février) ou départs CES',
        desc: 'Regarder les BTS/BUT ou écoles techniques qui ouvrent un groupe en février + contacter une structure accompagnatrice CES (ex: Concordia, Jeunesse & Reconstruction).',
        link: 'https://www.concordia.fr/',
        linkText: 'Voir Concordia (Volontariat) ↗'
      },
      {
        id: 't14',
        date: 'Mercredi 2 Déc',
        tag: 'terrain',
        tagLabel: '📞 Relance',
        title: 'Appeler ou passer voir une asso / structure locale',
        desc: 'Rien ne remplace un vrai coup de fil de 3 minutes pour montrer qu’on est motivé et disponible.',
        link: '',
        linkText: ''
      }
    ]
  },
  {
    id: 'phase-3',
    badge: 'Semaine 3 • 3 → 9 Décembre',
    title: 'Sprint Final Code de la Route (Jour J : 8 Décembre 🚗)',
    desc: 'Priorité numéro 1 : décrocher le Code le mardi 8 décembre pour débloquer la conduite et l’autonomie !',
    openByDefault: false,
    tasks: [
      {
        id: 't15',
        date: 'Jeudi 3 → Dim 6 Déc',
        tag: 'code',
        tagLabel: '🚗 Sprint Code',
        title: 'Mode Champion : 3 séries d’examen blanc par jour',
        desc: 'Réviser les thèmes piégeux (feux, alcool/fatigue, éco-conduite, distances de sécurité) jusqu’à stabiliser 36/40.',
        link: '',
        linkText: ''
      },
      {
        id: 't16',
        date: 'Lundi 7 Déc',
        tag: 'code',
        tagLabel: '🧘 Veille du Code',
        title: 'Préparer ma convocation + pièce d’identité + coucher tôt',
        desc: 'Vérifier l’adresse et l’heure du centre d’examen, faire 1 seule série tranquille pour la confiance et bien dormir.',
        link: '',
        linkText: ''
      },
      {
        id: 't17',
        date: 'Mardi 8 Décembre',
        tag: 'code',
        tagLabel: '🏆 JOUR J : CODE',
        title: '🚗 PASSAGE DU CODE DE LA ROUTE !',
        desc: 'Respirer, bien lire chaque question jusqu’au bout et valider cette super étape d’autonomie !',
        isMilestone: true,
        link: '',
        linkText: ''
      },
      {
        id: 't18',
        date: 'Mercredi 9 Déc',
        tag: 'terrain',
        tagLabel: '🎉 Célébration & Suite',
        title: 'Fêter le Code + annoncer le résultat au Parrain',
        desc: 'Prendre une vraie respiration et se projeter à 100% sur le choix de la mission de février.',
        link: '',
        linkText: ''
      }
    ]
  },
  {
    id: 'phase-4',
    badge: 'Semaine 4 • 10 → 20 Décembre',
    title: 'Verrouiller le Plan de Février avant Noël',
    desc: 'Le code est derrière toi : on transforme les pistes en plan concret pour février afin de passer les fêtes l’esprit libre.',
    openByDefault: false,
    tasks: [
      {
        id: 't19',
        date: '10 → 12 Déc',
        tag: 'terrain',
        tagLabel: '🚀 Offensif',
        title: 'Envoyer 3 à 5 candidatures ciblées pour Février',
        desc: 'Service Civique, projet Corps Européen de Solidarité, stage d’immersion PMSMP ou rentrée décalée.',
        link: '',
        linkText: ''
      },
      {
        id: 't20',
        date: '14 → 16 Déc',
        tag: 'terrain',
        tagLabel: '🤝 Entretiens',
        title: 'Passer mes entretiens / rencontres terrain',
        desc: 'Préparer mes questions avec mon parrain : horaires, ambiance d’équipe, missions concrètes au quotidien.',
        link: '',
        linkText: ''
      },
      {
        id: 't21',
        date: '17 → 18 Déc',
        tag: 'terrain',
        tagLabel: '🏛️ Prépa Crosne',
        title: 'Vérifier tous les papiers pour la Mairie de Crosne (4 Janvier)',
        desc: 'Contrat, RIB, pièce d’identité, horaires du premier jour et tenue adaptée.',
        link: '',
        linkText: ''
      },
      {
        id: 't22',
        date: '20 Décembre',
        tag: 'terrain',
        tagLabel: '🎄 Bilan Mi-Décembre',
        title: 'Grand Bilan Parrain / Filleul avant les fêtes',
        desc: 'Valider le plan A (et le plan B) pour février 2027 avant de profiter des vacances de Noël.',
        isMilestone: true,
        link: '',
        linkText: ''
      }
    ]
  },
  {
    id: 'phase-5',
    badge: 'Janvier & Février 2027',
    title: 'Job Mairie de Crosne & Décollage Février',
    desc: 'Un mois de janvier actif et rémunéré à Crosne, suivi du lancement de ta nouvelle aventure en février !',
    openByDefault: false,
    tasks: [
      {
        id: 't23',
        date: '4 → 31 Janvier',
        tag: 'terrain',
        tagLabel: '🏛️ Job Terrain',
        title: 'Mission Mairie de Crosne (Tout le mois de janvier)',
        desc: 'Reprise d’un vrai rythme matinal, travail en équipe, première paie et expérience concrète sur le CV.',
        isMilestone: true,
        link: '',
        linkText: ''
      },
      {
        id: 't24',
        date: 'Mi-Janvier',
        tag: 'terrain',
        tagLabel: '✅ Confirmation',
        title: 'Finaliser la convention / inscription pour le 1er Février',
        desc: 'Signer le contrat de Service Civique, CES, stage PMSMP ou formation par projet pour février.',
        link: '',
        linkText: ''
      },
      {
        id: 't25',
        date: '1er Février 2027',
        tag: 'terrain',
        tagLabel: '🌍 DÉCOLLAGE',
        title: '🚀 Lancement de ma nouvelle aventure de Février !',
        desc: 'Objectif atteint : tu es en mouvement, hors du cadre scolaire passif, dans un projet choisi !',
        isMilestone: true,
        link: '',
        linkText: ''
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
  completedTasks: {}, // { taskId: true }
  taskNotes: {},      // { taskId: "note" }
  customTasks: [],    // [{ id, phaseId, date, title, desc }]
  pisteInterest: {},  // { pisteId: 'hot' | 'curious' | 'pass' }
  curiosities: [],    // [{ id, icon, title, level: 'none'|'test'|'love' }]
  journalEntries: [], // [{ date, win, hype, block }]
  currentFilter: 'all',
  viewMode: 'theo'    // 'theo' | 'parrain'
};

function loadState() {
  // First check if URL contains a shared snapshot (?sync=...)
  const params = new URLSearchParams(window.location.search);
  const syncParam = params.get('sync');
  if (syncParam) {
    try {
      const decoded = JSON.parse(decodeURIComponent(atob(syncParam)));
      state = { ...state, ...decoded };
      saveState(false);
      // Clean URL without reloading
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

function getAllPhasesWithCustomTasks() {
  const phases = JSON.parse(JSON.stringify(DEFAULT_PHASES));
  state.customTasks.forEach((ct) => {
    const target = phases.find((p) => p.id === ct.phaseId) || phases[0];
    target.tasks.push({
      id: ct.id,
      date: ct.date,
      tag: 'terrain',
      tagLabel: '⭐ Défi Perso',
      title: ct.title,
      desc: ct.desc || 'Mission personnalisée ajoutée au tableau de bord.',
      link: '',
      linkText: ''
    });
  });
  return phases;
}

// Compute stats, countdowns and today's recommended mission
function updateStatsAndProgress() {
  const phases = getAllPhasesWithCustomTasks();
  let totalTasks = 0;
  let doneTasks = 0;
  let nextTodoTask = null;

  phases.forEach((p) => {
    p.tasks.forEach((t) => {
      totalTasks++;
      if (state.completedTasks[t.id]) {
        doneTasks++;
      } else if (!nextTodoTask) {
        nextTodoTask = t;
      }
    });
  });

  const percent = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
  const xp = doneTasks * 50 + Object.values(state.pisteInterest).filter((v) => v === 'hot' || v === 'curious').length * 30;

  let rank = 'Explorateur';
  if (percent >= 25) rank = 'En Mouvement ⚡';
  if (percent >= 50) rank = 'Bâtisseur de Terrain 🛠️';
  if (percent >= 80) rank = 'Prêt pour Février 🚀';

  document.getElementById('progress-text').textContent = `${doneTasks} sur ${totalTasks} missions accomplies`;
  document.getElementById('progress-percent').textContent = `${percent}%`;
  document.getElementById('main-progress').value = percent;
  document.getElementById('xp-badge').textContent = `${xp} XP • ${rank}`;
  document.getElementById('stat-streak').textContent = doneTasks;

  const activePistes = Object.values(state.pisteInterest).filter((v) => v === 'hot' || v === 'curious').length;
  document.getElementById('stat-pistes').textContent = activePistes;

  // Countdown to Code (8 Dec 2026)
  const now = new Date();
  const codeDate = new Date('2026-12-08T09:00:00');
  const diffDays = Math.ceil((codeDate - now) / (1000 * 60 * 60 * 24));
  const codeStatEl = document.getElementById('stat-days-code');
  const codeChipEl = document.getElementById('countdown-code');

  if (state.completedTasks['t17']) {
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
  const todayDesc = document.getElementById('today-mission-desc');
  const btnCompleteToday = document.getElementById('btn-complete-today');

  if (nextTodoTask) {
    todayBadge.textContent = `Prochaine mission • ${nextTodoTask.date}`;
    todayHeading.textContent = nextTodoTask.title;
    todayDesc.textContent = nextTodoTask.desc;
    btnCompleteToday.disabled = false;
    btnCompleteToday.textContent = '✓ Marquer comme fait (+50 XP)';
    btnCompleteToday.dataset.taskId = nextTodoTask.id;
  } else {
    todayBadge.textContent = 'Opération Complète 🏆';
    todayHeading.textContent = 'Toutes les missions sont accomplies !';
    todayDesc.textContent = 'Bravo Théophile ! Tu peux ajouter de nouveaux défis ou partager ton bilan avec ton parrain.';
    btnCompleteToday.disabled = true;
    btnCompleteToday.textContent = '100% Terminé 🎉';
    delete btnCompleteToday.dataset.taskId;
  }
}

// Render Agenda Phases & Tasks
function renderAgenda() {
  const container = document.getElementById('phases-container');
  container.innerHTML = '';
  const phases = getAllPhasesWithCustomTasks();

  phases.forEach((phase) => {
    const filteredTasks = phase.tasks.filter((t) => {
      const isDone = !!state.completedTasks[t.id];
      if (state.currentFilter === 'todo') return !isDone;
      if (state.currentFilter === 'done') return isDone;
      if (state.currentFilter === 'code') return t.tag === 'code';
      if (state.currentFilter === 'terrain') return t.tag === 'terrain';
      return true;
    });

    if (filteredTasks.length === 0) return;

    const doneInPhase = phase.tasks.filter((t) => state.completedTasks[t.id]).length;

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
      <span class="phase-counter">${doneInPhase} / ${phase.tasks.length} faites</span>
    `;

    const list = document.createElement('div');
    list.className = 'tasks-list';

    filteredTasks.forEach((task) => {
      const isDone = !!state.completedTasks[task.id];
      const noteVal = state.taskNotes[task.id] || '';

      const card = document.createElement('article');
      card.className = `task-card ${isDone ? 'is-done' : ''} ${task.isMilestone ? 'is-milestone' : ''}`;
      card.id = `card-${task.id}`;

      const linkHtml = task.link
        ? `<a href="${escapeHtml(task.link)}" target="_blank" rel="noopener noreferrer" class="task-link">${escapeHtml(task.linkText || 'Voir la ressource ↗')}</a>`
        : '';

      card.innerHTML = `
        <div>
          <div class="task-top">
            <span class="task-date-pill">${escapeHtml(task.date)}</span>
            <span class="task-tag">${escapeHtml(task.tagLabel)}</span>
          </div>
          <label class="task-check-label" for="chk-${task.id}">
            <input type="checkbox" id="chk-${task.id}" data-task-id="${task.id}" ${isDone ? 'checked' : ''}>
            <span class="task-title-text">${escapeHtml(task.title)}</span>
          </label>
          <p class="task-desc">${escapeHtml(task.desc)}</p>
          ${linkHtml}
        </div>
        <div class="task-note-box">
          <input
            type="text"
            class="task-note-input"
            data-note-id="${task.id}"
            value="${escapeHtml(noteVal)}"
            aria-label="Note ou commentaire pour ${escapeHtml(task.title)}"
            placeholder="✍️ Note Théophile / Parrain (ex: fait, contact trouvé, score code...)"
          >
        </div>
      `;

      list.appendChild(card);
    });

    details.appendChild(summary);
    details.appendChild(list);
    container.appendChild(details);
  });

  // Bind checkbox events
  container.querySelectorAll('input[type="checkbox"][data-task-id]').forEach((chk) => {
    chk.addEventListener('change', (e) => {
      const id = e.target.dataset.taskId;
      if (e.target.checked) {
        state.completedTasks[id] = true;
      } else {
        delete state.completedTasks[id];
      }
      saveState(true, 'Mission mise à jour');
      renderAgenda();
    });
  });

  // Bind note inputs
  container.querySelectorAll('input[data-note-id]').forEach((inp) => {
    inp.addEventListener('input', (e) => {
      const id = e.target.dataset.noteId;
      state.taskNotes[id] = e.target.value;
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

  const phases = getAllPhasesWithCustomTasks();
  let total = 0;
  let done = 0;
  const recentDone = [];

  phases.forEach((p) => {
    p.tasks.forEach((t) => {
      total++;
      if (state.completedTasks[t.id]) {
        done++;
        recentDone.push(`✅ ${t.title}${state.taskNotes[t.id] ? ` (${state.taskNotes[t.id]})` : ''}`);
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
    `Progression : ${done}/${total} missions (${Math.round((done / total) * 100)}%)`,
    ``,
    `📌 Missions validées :`,
    ...(recentDone.length > 0 ? recentDone.slice(-6) : ['(Aucune mission cochée pour le moment)']),
    ``,
    `🧭 Pistes qui me chauffent pour Février :`,
    ...(hotPistes.length > 0 ? hotPistes : ['(À explorer dans le Labo des Pistes)']),
    ``,
    `⚡ Mes curiosités hors-école :`,
    ...(topCuriosities.length > 0 ? topCuriosities : ['(À sélectionner dans l’inventaire)'])
  ];

  if (latestJournal) {
    lines.push(
      ``,
      `💬 Dernier point du carnet (${latestJournal.date}) :`,
      `- Fierté : ${latestJournal.win || '-'}`,
      `- Piste : ${latestJournal.hype || '-'}`,
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

  // View Switcher (Théophile vs Parrain)
  const btnTheo = document.getElementById('btn-mode-theo');
  const btnParrain = document.getElementById('btn-mode-parrain');

  btnTheo.addEventListener('click', () => {
    btnTheo.classList.add('active');
    btnTheo.setAttribute('aria-pressed', 'true');
    btnParrain.classList.remove('active');
    btnParrain.setAttribute('aria-pressed', 'false');
    document.querySelector('[data-tab="tab-agenda"]').click();
  });

  btnParrain.addEventListener('click', () => {
    btnParrain.classList.add('active');
    btnParrain.setAttribute('aria-pressed', 'true');
    btnTheo.classList.remove('active');
    btnTheo.setAttribute('aria-pressed', 'false');
    document.querySelector('[data-tab="tab-journal"]').click();
  });

  // Complete Today Mission Button
  document.getElementById('btn-complete-today').addEventListener('click', (e) => {
    const taskId = e.currentTarget.dataset.taskId;
    if (taskId) {
      state.completedTasks[taskId] = true;
      saveState(true, 'Bravo ! Mission du jour accomplie !');
      renderAgenda();
    }
  });

  // Jump to Today Mission in Agenda
  document.getElementById('btn-jump-today').addEventListener('click', () => {
    document.querySelector('[data-tab="tab-agenda"]').click();
    const taskId = document.getElementById('btn-complete-today').dataset.taskId;
    if (taskId) {
      const card = document.getElementById(`card-${taskId}`);
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
    fb.textContent = '✓ Enregistré ! Tu peux maintenant cliquer sur "Partager mon point" en haut.';
    setTimeout(() => {
      fb.textContent = '';
    }, 4500);
  });

  // Share Modal (using native <dialog>.showModal())
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

  // Add Custom Task Modal
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

    state.customTasks.push({
      id: 'custom-' + Date.now(),
      phaseId,
      date,
      title,
      desc
    });

    document.getElementById('form-add-task').reset();
    saveState(true, 'Nouvelle mission ajoutée');
    renderAgenda();
    modalTask.close();
  });
});
