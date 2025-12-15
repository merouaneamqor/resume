"use client";

import React from 'react';

export default function PureSoftwareEngineerResume() {
  // Load Font Awesome from CDN
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // PDF Download Function
  const downloadPDF = () => {
    // Use browser's print functionality - it's more reliable and the resume has excellent print styles
    window.print();
  };

  return (
    <>
      <style jsx global>{`
  /* ------------------------------------
     BASE PRINT CONFIG – CLEAN + ELEGANT
  ------------------------------------- */
        @media print {
          @page {
            size: A4;
      margin: 10mm;
    }

    html, body {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      font-size: 13px !important;
      line-height: 1.1 !important;
    }

    /* Remove web shadows & constraints */
    .shadow-lg,
    .bg-gray-50 {
            box-shadow: none !important;
            background: white !important;
          }

    /* Container should use full width */
    .max-w-5xl,
    .w-full {
      max-width: 100% !important;
            width: 100% !important;
    }

    /* ------------------------------------
       TYPOGRAPHY (balanced, no crushing)
    ------------------------------------- */



    /* ------------------------------------
       SPACING – aesthetic + compact
    ------------------------------------- */
    section { margin-bottom: 14px !important; }

    .mb-8 { margin-bottom: 14px !important; }
    .mb-6 { margin-bottom: 10px !important; }
    .mb-4 { margin-bottom: 7px !important; }

    /* Light padding reduction (10–15%) */
    .p-8 { padding: 14px !important; }
    .p-4 { padding: 8px !important; }
    .p-3 { padding: 6px !important; }
    .mt-4 { margin-top: 6px !important; }

    /* Balanced spacing for lists */
    .space-y-2 > * + * { margin-top: 3px !important; }
    .space-y-4 > * + * { margin-top: 6px !important; }

    li { margin-bottom: 3px !important; }

    /* ------------------------------------
       GRID & CARDS – clean lines
    ------------------------------------- */
    .bg-slate-50 {
      padding: 8px !important;
      border: 1px solid #e5e7eb !important;
    }

    .gap-8 { gap: 14px !important; }
    .gap-6 { gap: 10px !important; }
    .gap-4 { gap: 8px !important; }

    /* ------------------------------------
       PAGE BREAK – perfect 2-page split
    ------------------------------------- */
    .page-break {
      page-break-after: always !important;
    }

    /* Page 2 top spacing for print */
    .page-break + .mt-6 {
      margin-top: 12px !important;
          }
        }
      `}</style>

    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full bg-white shadow-lg">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-6">
              {/* Professional Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/merouane_amqor.png"
                  alt="Merouane Amqor"
                  className="w-24 h-24 rounded-full border-4 border-blue-600 object-cover bg-blue-700"
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2 tracking-wide">
                  MEROUANE AMQOR
                </h1>
                <p className="text-xl text-blue-200 font-medium mb-1">
                  Software Engineer
                </p>
                <div className="text-blue-300 text-sm leading-relaxed">
                  Ingénieur logiciel passionné par les algorithmes, l'architecture système et l'excellence technique
                </div>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="flex items-center justify-end gap-2">
                <i className="fas fa-phone text-blue-300 text-sm"></i>
                <span className="text-blue-200 text-sm font-medium">+212 7 01 08 67 26</span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <i className="fas fa-envelope text-blue-300 text-sm"></i>
                <a href="mailto:marouane.amqor@gmail.com" className="text-blue-200 hover:text-blue-100 text-sm transition-colors">
                  marouane.amqor@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-end gap-2">
                <i className="fab fa-linkedin text-blue-300 text-sm"></i>
                <a href="https://linkedin.com/in/merouane-amqor" className="text-blue-200 hover:text-blue-100 text-sm transition-colors">
                  linkedin.com/in/merouane-amqor
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">

          {/* Profil Professionnel */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-blue-800 pb-2 mb-4 text-slate-900">
              PROFIL PROFESSIONNEL
            </h2>

            <p className="text-slate-700 mb-4 leading-tight">
              Ingénieur logiciel expérimenté avec une solide formation en informatique fondamentale et une expertise pratique en développement de systèmes complexes. Spécialiste en conception d'algorithmes, optimisation des performances et architecture logicielle.
            </p>

            <p className="text-slate-700 mb-4 leading-tight">
              En tant que <strong>Software Engineer</strong> chez DabaDoc, je conçois et développe des systèmes distribués haute performance servant plus de 300 000 utilisateurs mensuels. Mon approche combine rigueur algorithmique, excellence technique et optimisation des ressources computationnelles.
            </p>

            <p className="text-slate-700 mb-3 font-medium">
              Expertise technique approfondie en :
            </p>

            <ul className="text-slate-700 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span>Conception et implémentation d'algorithmes efficaces (complexité temporelle/espatiale optimisée)</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span>Architecture de systèmes distribués et microservices avec focus sur la scalabilité</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span>Optimisation des performances : profilage, débogage avancé et réduction de la complexité algorithmique</span>
              </li>
            </ul>
          </section>

          {/* Domaines d'Expertise */}
<section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-blue-800 pb-2 mb-6 text-slate-900">
              DOMAINES D'EXPERTISE
  </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Algorithmique & Structures de Données
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Maîtrise des algorithmes fondamentaux : tris, recherche, graphes, optimisation combinatoire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Structures de données avancées : arbres équilibrés, hash tables, heaps, tries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Analyse de complexité algorithmique et optimisation temps/espace</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Architecture & Design Patterns
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Patterns de conception : Singleton, Factory, Observer, Strategy, Command</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Architecture logicielle : clean architecture, hexagonal architecture, layered architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Principes SOLID et bonnes pratiques de conception orientée objet</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Performance & Optimisation
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Profilage et optimisation des performances applicatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Gestion mémoire avancée et réduction de la complexité algorithmique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Optimisation des requêtes base de données et mise en cache intelligente</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Systèmes Distribués
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Conception de systèmes distribués et microservices architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Gestion de la concurrence et programmation parallèle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Communication inter-processus et protocoles réseau</span>
                  </li>
      </ul>
    </div>

  </div>
</section>

          {/* Parcours Professionnel */}
        <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-blue-800 pb-2 mb-6 text-slate-900">
              PARCOURS PROFESSIONNEL
  </h2>

            {/* Software Engineer */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Software Engineer
                </h3>
                <span className="text-slate-600 font-medium">Janvier 2024 – Présent</span>
              </div>
              <div className="mb-2">
                <span className="text-lg text-slate-700 font-medium">DabaDoc</span>
                <span className="text-slate-600 ml-2">• Plateforme de télémédecine</span>
    </div>

              <ul className="text-slate-700 space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Conception et développement d'algorithmes optimisés pour le traitement de données médicales massives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Architecture de systèmes distribués avec optimisation de la scalabilité et de la performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Implémentation de structures de données avancées pour la gestion efficace des rendez-vous et données patients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisation des performances : réduction de la latence de 40% via algorithmes et mise en cache</span>
                </li>
    </ul>
  </div>


            {/* Full-Stack Developer */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Full-Stack Software Engineer
                </h3>
                <span className="text-slate-600 font-medium">Août 2022 – Décembre 2023</span>
              </div>
              <div className="mb-2">
                <span className="text-lg text-slate-700 font-medium">DabaDoc</span>
                <span className="text-slate-600 ml-2">• Plateforme de télémédecine</span>
    </div>

              <ul className="text-slate-700 space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Développement d'APIs REST optimisées avec algorithmes de recherche et de tri efficaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Conception d'architectures modulaires avec séparation claire des préoccupations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Implémentation de patterns de conception pour améliorer la maintenabilité et l'évolutivité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisation des requêtes base de données et mise en place de stratégies de cache avancées</span>
                </li>
    </ul>
  </div>

            {/* Page break for clean 2-page separation - fills page 1 completely */}
            <div className="page-break"></div>

            {/* Page 2 top spacing */}
            <div className="mt-6"></div>

            {/* Software Engineer */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Software Engineer & Developer
                </h3>
                <span className="text-slate-600 font-medium">Juillet 2020 – Juillet 2022</span>
              </div>
              <div className="mb-2">
                <span className="text-lg text-slate-700 font-medium">Majorel</span>
                <span className="text-slate-600 ml-2">• Services numériques pour Solocal / Pages Jaunes</span>
    </div>

              <ul className="text-slate-700 space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Conception et développement d'algorithmes pour l'optimisation des recherches et du référencement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Implémentation de structures de données efficaces pour la gestion de grandes quantités de données</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisation des performances front-end et back-end avec analyse algorithmique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Application des principes de l'ingénierie logicielle : modularité, réutilisabilité, testabilité</span>
                </li>
    </ul>
  </div>
</section>

          {/* Stack Technique */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-blue-800 pb-2 mb-6 text-slate-900">
              COMPÉTENCES TECHNIQUES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Langages de Programmation</h4>
                <p className="text-slate-600 text-sm mb-1">Python, Java, C++, JavaScript, Ruby, Go, TypeScript</p>
                <p className="text-slate-700 text-xs leading-tight">→ Maîtrise des paradigmes : orienté objet, fonctionnel, procédural, avec optimisation des performances</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Algorithmes & Structures de Données</h4>
                <p className="text-slate-600 text-sm mb-1">Complexité algorithmique, optimisation, graphes, arbres, hash tables</p>
                <p className="text-slate-700 text-xs leading-tight">→ Analyse et implémentation d'algorithmes efficaces pour la résolution de problèmes complexes</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Architecture & Design</h4>
                <p className="text-slate-600 text-sm mb-1">Clean Architecture, Microservices, Design Patterns, UML</p>
                <p className="text-slate-700 text-xs leading-tight">→ Conception de systèmes maintenables, évolutifs et performants</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Base de Données & Performance</h4>
                <p className="text-slate-600 text-sm mb-1">PostgreSQL, MongoDB, Redis, Elasticsearch, optimisation requêtes</p>
                <p className="text-slate-700 text-xs leading-tight">→ Modélisation, indexation, optimisation et mise en cache pour hautes performances</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Systèmes & DevOps</h4>
                <p className="text-slate-600 text-sm mb-1">Linux, Docker, Kubernetes, AWS/GCP, CI/CD, monitoring</p>
                <p className="text-slate-700 text-xs leading-tight">→ Infrastructure, déploiement automatisé, observabilité et scalabilité</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Qualité & Méthodologie</h4>
                <p className="text-slate-600 text-sm mb-1">TDD/BDD, Clean Code, Code Review, Agile, Git</p>
                <p className="text-slate-700 text-xs leading-tight">→ Pratiques d'excellence en ingénierie logicielle et collaboration d'équipe</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Analyse & Résolution de Problèmes</h4>
                <p className="text-slate-600 text-sm mb-1">Debugging avancé, profilage, optimisation, pensée algorithmique</p>
                <p className="text-slate-700 text-xs leading-tight">→ Approche systématique pour identifier et résoudre les problèmes complexes</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Intelligence Artificielle & Data</h4>
                <p className="text-slate-600 text-sm mb-1">Machine Learning basics, traitement de données, statistiques</p>
                <p className="text-slate-700 text-xs leading-tight">→ Application des algorithmes d'IA et analyse de données pour la prise de décision</p>
              </div>
            </div>
          </section>

          {/* Formation & Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-blue-800 pb-2 mb-6 text-slate-900">
              FORMATION & CERTIFICATIONS
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="font-semibold text-slate-800">Master en Informatique — SUPEMIR (Casablanca) — 2022</span>
                </div>
                <p className="text-slate-600 text-sm leading-tight">
                  Diplôme reconnu par l'État marocain, spécialisation en Génie Informatique & Innovation Technologique, option Génie Logiciel / Data Science.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <span className="font-semibold text-slate-800">Certified ScrumMaster®</span>
                  <span className="text-slate-600 ml-2">— Scrum Alliance</span>
                </div>
                <span className="text-slate-600 font-medium">2023</span>
              </div>

              <div className="border-t border-slate-200 pt-4 mt-4">
                <h4 className="font-semibold text-slate-800 mb-2">Langues</h4>
                <div className="flex flex-wrap gap-4 text-slate-700">
                  <span><strong>Français :</strong> Niveau C1 (Langue maternelle)</span>
                  <span><strong>Anglais :</strong> Niveau B2 (Professionnel)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-8 pt-4 border-t border-slate-200 text-center print:hidden">
            <div className="flex justify-center gap-4">
              <a href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                ← Version Technical Lead
              </a>
              <span className="text-slate-400">|</span>
              <a href="/rails" className="text-red-600 hover:text-red-800 font-medium transition-colors">
                Version Ruby on Rails →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
