// src/components/Compagny/data.js

const logoCpam   = '/assets/images/cpam-logo.png';
const logoEnedis = '/assets/images/enedis-logo.png';
const logoUIMM   = '/assets/images/uimm-logo.png';

export const experiencesData = [
  {
    id: 1,
    company: "CPAM des Côtes-d'Armor",
    role: "Développeur full stack",
    dates: "Avril 2022 - Mai 2023",
    logo: logoCpam,
    description: `
J'ai orchestré la **modernisation complète d'applications essentielles**, en les faisant évoluer d'une infrastructure vieillissante vers une **technologie Symfony robuste et performante**.

Mon rôle a couvert la **refonte et l'amélioration de systèmes clés**, la migration de bases de données volumineuses, et la mise en place de nouvelles fonctionnalités sur mesure.

Cette approche innovante a permis d'**améliorer la performance et la stabilité des applications**.
En collaborant avec les équipes, j’ai veillé à ce que les solutions apportées optimisent les processus internes et la qualité de service rendue aux usagers.
    `.trim()
  },
  {
    id: 2,
    company: "L'UIMM de Rennes",
    role: "Développeur full stack",
    dates: "Janv. 2021 - Août 2021",
    logo: logoUIMM,
    description: `
J'ai développé et optimisé des applications web visant à **automatiser les processus métiers complexes**.

Mes solutions ont permis une gestion simplifiée des flux de travail et des accès utilisateurs, incluant l'automatisation de communications et la **génération dynamique de rapports essentiels PDF et Excel**.

J'ai également fiabilisé les flux d'importation de données entre différents systèmes et contribué à la **modernisation des outils internes**. Mon travail a fluidifié les opérations et amélioré la réactivité des services.
    `.trim()
  },
  {
    id: 3,
    company: "Enedis de Tours",
    role: "Analyste et développeur full stack",
    dates: "Sept. 2019 - Sept. 2020",
    logo: logoEnedis,
    description: `
J'ai géré la **conception et le développement d'un portail web majeur** visant à centraliser et optimiser la gestion des opérations.

J'ai pris en charge toutes les étapes, de la **compréhension des besoins utilisateurs à la sécurisation avancée des accès et la conformité RGPD**.

J'ai mis en place des **architectures robustes Symfony**, conçu des bases de données efficaces et développé des sites en méthode Agile. J'ai également modernisé un site SharePoint pour renforcer la collaboration interne, assurant des outils performants et sécurisés.
    `.trim()
  },
  {
    id: 4,
    company: "Enedis de La Rochelle",
    role: "Développeur full stack",
    dates: "Mars 2018 - Sept. 2018",
    logo: logoEnedis,
    description: `
J'ai activement contribué au **développement et à la maintenance d'applications web** essentielles, en me concentrant sur la **sécurisation des systèmes et la fiabilisation des bases de données**.

J'ai mis en œuvre des solutions basées sur Symfony en adoptant une méthode Agile, et j'ai **formé les utilisateurs** à ces nouveaux outils.

Une part importante de ma mission a été la **mise en conformité RGPD des sites**, assurant la protection des données et la transparence via des documentations et des interfaces claires.

Mon travail a garanti **la robustesse et la légalité** de leurs plateformes.
    `.trim()
  },
  {
    id: 5,
    company: "Enedis de Saintes",
    role: "Développeur d'applications",
    dates: "Sept. 2016 - Mars 2018",
    logo: logoEnedis,
    description: `
J'ai joué un rôle clé dans l'intégration de nouveaux services grâce au **développement d'un portail web dédié et d'outils bureautiques avancés**.

J'ai conçu des bases de données sur mesure et développé des sites en méthode Agile, tout en assurant **la formation des équipes**.

J'ai également créé des **macros Excel performantes** pour la gestion des données et mis en place de **robots d'automatisation** pour la génération de documents et la simplification de tâches répétitives.

Ces solutions ont optimisé considérablement les opérations internes et la gestion d'informations clés.
    `.trim()
  }
];