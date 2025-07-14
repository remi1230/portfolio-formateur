// src/components/Compagny/data.js

// Importez vos logos/images. Assurez-vous que les chemins sont corrects.
const logoCpam   = '/assets/images/cpam-logo.png';
const logoEnedis = '/assets/images/enedis-logo.png';
const logoUIMM   = '/assets/images/uimm-logo.png';

const boldStyle = "<span style = 'font-weight: 900; color: var(--cpn-bold);' >";

export const experiencesData = [
  {
    id: 1,
    company: "CPAM des Côtes-d'Armor",
    role: "Développeur full stack",
    dates: "Avril 2022 - Mai 2023",
    logo: logoCpam,
    description: `<div style="display: flex; flex-direction: column; gap: 1vh;">
    <p>
    j'ai orchestré la ${boldStyle} modernisation complète d'applications essentielles</span>,
    en les faisant évoluer d'une infrastructure vieillissante vers une ${boldStyle} technologie Symfony robuste et performante</span>.
    </p>
    <p>
    Mon rôle a couvert la ${boldStyle} refonte et l'amélioration de systèmes clés</span>, la migration de bases de données volumineuses,
    et la mise en place de nouvelles fonctionnalités sur mesure.
    </p>
    <p>
    Cette approche innovante a permis d' ${boldStyle} améliorer la performance et la stabilité des applications</span>,
    grâce à une collaboration constante avec les équipes,
    j’ai veillé à ce que les solutions apportées offrent une réelle valeur ajoutée, en optimisant les processus internes et la qualité de service rendue aux usagers.
    </p>
    </div>`
  },
  {
    id: 2,
    company: "L'UIMM de Rennes",
    role: 'Développeur full stack',
    dates: 'Janv. 2021 - Août 2021',
    logo: logoUIMM,
    description: `<div style="display: flex; flex-direction: column; gap: 1vh;">
    <p>
    j'ai développé et optimisé des applications web visant à ${boldStyle} automatiser les processus métiers complexes.</span>
    </p>
    <p>
    Mes solutions ont permis une gestion simplifiée des flux de travail et des accès utilisateurs,
    incluant l'automatisation de communications et la ${boldStyle} génération dynamique de rapports essentiels PDF et Excel.</span>
    </p>
    <p>
    J'ai également fiabilisé les flux d'importation de données entre différents systèmes et contribué à la ${boldStyle} modernisation des outils internes</span>.
    Mon travail a fluidifié les opérations et amélioré la réactivité des services.
    </p>
    </div>`
  },
  {
    id: 3,
    company: 'Enedis de Tours',
    role: 'Analyste et développeur full stack',
    dates: 'Sept. 2019 - Spet. 2020',
    logo: logoEnedis,
    description: `<div style="display: flex; flex-direction: column; gap: 1vh;">
    <p>
    J'ai géré la ${boldStyle}conception et le développement d'un portail web majeur</span> visant à centraliser et optimiser la gestion de leurs opérations.
     </p>
    <p>
    J'ai pris en charge toutes les étapes, de la ${boldStyle}compréhension des besoins utilisateurs à la sécurisation avancée des accès et la conformité RGPD</span>.
    </p>
    <p>
    J'ai mis en place des ${boldStyle}architectures robustes Symfony, conçu des bases de données efficaces et développé des sites en méthode Agile</span>.
    J'ai également modernisé un site SharePoint pour renforcer la collaboration interne,
    assurant des outils performants et sécurisés.
    </p>
    </div>`,
  },
  {
    id: 4,
    company: 'Enedis de La Rochelle',
    role: 'Développeur full stack',
    dates: 'Mars. 2018 - Sept. 2018',
    logo: logoEnedis,
    description: `<div style="display: flex; flex-direction: column; gap: 1vh;">
    <p>
    j'ai activement contribué au ${boldStyle}développement et à la maintenance d'applications web</span> essentielles,
    en me concentrant sur la ${boldStyle}sécurisation des systèmes et la fiabilisation des bases de données</span>.
    </p>
    <p>
    J'ai mis en œuvre des solutions basées sur Symfony en adoptant une méthode Agile, 
    et j'ai ${boldStyle}formé les utilisateurs</span> à ces nouveaux outils.
    </p>
    <p>
    Une part importante de ma mission a été la ${boldStyle}mise en conformité RGPD des sites</span>, 
    assurant la protection des données et la transparence via des documentations et des interfaces claires.
    </p>
    <p>
    Mon travail a garanti ${boldStyle}la robustesse et la légalité</span> de leurs plateformes.
    </p>
    </div>`
  },
  {
    id: 5,
    company: 'Enedis de Saintes',
    role: "Développeur d'applications",
    dates: 'Sept. 2016 - Mars 2018',
    logo: logoEnedis,
    description: `<div style="display: flex; flex-direction: column; gap: 1vh;">
    <p>
    J'ai joué un rôle clé dans l'intégration de nouveaux services grâce au ${boldStyle}développement d'un portail web dédié et d'outils bureautiques avancés</span>.
    </p>
    <p>
    J'ai conçu des bases de données sur mesure et développé des sites en méthode Agile, tout en assurant ${boldStyle}la formation des équipes</span>.
    </p>
    <p>
    J'ai également créé des ${boldStyle}macros Excel performantes</span> pour la gestion des données et mis en place de ${boldStyle}robots d'automatisation</span>
    pour la génération de documents et la simplification de tâches répétitives.
    </p>
    <p>
    Ces solutions ont optimisé considérablement les opérations internes et la gestion d'informations clés.
    </p>
    </div>`
  },
  // ... Ajoutez ici vos autres expériences
];