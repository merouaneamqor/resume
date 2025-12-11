"use client";

import React from 'react';

export default function App() {
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
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-6">
              {/* Professional Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/merouane_amqor.png"
                  alt="Merouane Amqor"
                  className="w-24 h-24 rounded-full border-4 border-slate-600 object-cover bg-slate-700"
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2 tracking-wide">
                  MEROUANE AMQOR
                </h1>
                <p className="text-xl text-slate-200 font-medium mb-1">
                  Technical Lead & Software Engineer
                </p>
                <div className="text-slate-300 text-sm leading-relaxed">
                  Spécialiste en architecture logicielle, DevOps et innovation numérique responsable
                </div>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="flex items-center justify-end gap-2">
                <i className="fas fa-phone text-slate-300 text-sm"></i>
                <span className="text-slate-200 text-sm font-medium">+212 7 01 08 67 26</span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <i className="fas fa-envelope text-slate-300 text-sm"></i>
                <a href="mailto:marouane.amqor@gmail.com" className="text-slate-200 hover:text-slate-100 text-sm transition-colors">
                  marouane.amqor@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-end gap-2">
                <i className="fab fa-linkedin text-slate-300 text-sm"></i>
                <a href="https://linkedin.com/in/merouane-amqor" className="text-slate-200 hover:text-slate-100 text-sm transition-colors">
                  linkedin.com/in/merouane-amqor
                </a>
              </div>
              <div className="flex items-center justify-end gap-2 mt-2 print:hidden">
                <button
                  onClick={downloadPDF}
                  className="bg-slate-600 hover:bg-slate-500 text-slate-200 px-3 py-1 rounded text-sm font-medium transition-colors flex items-center gap-2"
                  title="Ouvre la boîte de dialogue d'impression pour sauvegarder en PDF"
                >
                  <i className="fas fa-print text-xs"></i>
                  Imprimer/Sauvegarder PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">

          {/* Profil Professionnel */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-slate-800 pb-2 mb-4 text-slate-900">
              PROFIL PROFESSIONNEL
            </h2>

            <p className="text-slate-700 mb-4 leading-tight">
              Leader technique confirmé, orienté innovation et excellence opérationnelle, avec une expertise solide en architecture logicielle, scalabilité et ingénierie full-stack. Habitué à concevoir et piloter des écosystèmes digitaux à forte exigence métier, tout en garantissant performance, fiabilité et continuité de service.
            </p>

            <p className="text-slate-700 mb-4 leading-tight">
              En tant que <strong>Technical Lead & ScrumMaster</strong> chez DabaDoc, j'encadre des équipes d'ingénieurs et supervise des plateformes utilisées par plus de 30 000K d'utilisateurs mensuels. Mon rôle combine leadership technique, pilotage produit et amélioration continue, avec à la clé +15% de gain de performance plateforme.
            </p>

            <p className="text-slate-700 mb-3 font-medium">
              Fortement engagé dans les dynamiques Open Source et Open Data, j'accompagne les organisations vers un numérique plus transparent, accessible et durable :
            </p>

            <ul className="text-slate-700 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span>Exploitation stratégique de données ouvertes pour soutenir l'innovation, la transparence et l'interopérabilité</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span>Optimisation énergétique des infrastructures cloud via clean architecture, observabilité et réduction du footprint compute</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span>Promotion d'un numérique responsable alliant performance, efficience et impact durable à grande échelle</span>
              </li>
            </ul>
          </section>

          {/* Domaines d'Expertise */}
<section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-slate-800 pb-2 mb-6 text-slate-900">
              DOMAINES D'EXPERTISE
  </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Leadership & Gestion d'Équipes
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Direction d'une équipe de 8 ingénieurs avec pilotage stratégique des priorités techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Mentoring technique structuré et mise en place de programmes d'amélioration continue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Animation d'ateliers techniques et sessions de partage de connaissances pour optimiser la productivité</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Architecture & Full-Stack Engineering
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Conception d'architectures modulaires et cloud-native optimisées pour la scalabilité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Développement full-stack (Ruby on Rails, React, Angular) avec application de standards avancés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Optimisation des performances : maintien d'une disponibilité à 99,95%</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        DevOps & Cloud Engineering
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Maîtrise des technologies AWS, Docker, Kubernetes et pipelines CI/CD automatisés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Mise en place d'observabilité avancée : monitoring, logging et Application Performance Monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Optimisation énergétique et rationalisation des ressources cloud pour réduire les coûts</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Open Data & Green Tech
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Structuration et valorisation stratégique de jeux de données publiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Application de clean architecture et green patterns pour minimiser la dette technique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Mise en œuvre d'approches data responsables et optimisation de la consommation de ressources</span>
                  </li>
      </ul>
    </div>

  </div>
</section>

          {/* Parcours Professionnel */}
        <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-slate-800 pb-2 mb-6 text-slate-900">
              PARCOURS PROFESSIONNEL
  </h2>

            {/* Technical Lead */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Technical Lead & ScrumMaster
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
                  <span>Pilotage technique et stratégique d'une équipe de 8 ingénieurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Implémentation et optimisation du cadre Agile (Scrum) : rituels, vélocité, qualité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Responsabilité end-to-end du delivery produit et alignement avec les enjeux métier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisations backend, frontend et pipelines DevOps pour une plateforme haute charge</span>
                </li>
    </ul>
  </div>


            {/* Full-Stack Developer */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Full-Stack Developer
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
                  <span>Développement et maintenance de modules critiques (paiement, réservation, notifications)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Modernisation front-end (React, Angular) pour améliorer performance et maintenabilité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisation du parcours patient et des performances UI sur trafic massif</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Contribution aux bonnes pratiques : tests, code review, documentation</span>
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
                  Software Engineer
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
                  <span>Développement de solutions web orientées UX pour le marché français</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisations SEO, performance front-end et intégration d'APIs tierces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Collaboration avec équipes distribuées dans un cadre Agile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Livraison continue à haut volume dans le respect des délais et standards qualité</span>
                </li>
    </ul>
  </div>
</section>

          {/* Stack Technique */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-slate-800 pb-2 mb-6 text-slate-900">
              COMPÉTENCES TECHNIQUES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Back-End</h4>
                <p className="text-slate-600 text-sm mb-1">Ruby, Rails, Node.js, Java (Spring Boot), Python (FastAPI)</p>
                <p className="text-slate-700 text-xs leading-tight">→ Conception d'APIs performantes, architectures modulaires, microservices, optimisation backend</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Front-End</h4>
                <p className="text-slate-600 text-sm mb-1">React, Angular, TypeScript, Next.js, Tailwind, Design Systems corporates</p>
                <p className="text-slate-700 text-xs leading-tight">→ Interfaces scalables, composants réutilisables, intégration CI/CD front, optimisation UX</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">DevOps</h4>
                <p className="text-slate-600 text-sm mb-1">AWS, Docker, Kubernetes, CI/CD, GitHub Actions, Terraform, Helm, ArgoCD</p>
                <p className="text-slate-700 text-xs leading-tight">→ Infrastructure as Code, automatisation avancée, observabilité, déploiement zero-downtime</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Cloud & SRE</h4>
                <p className="text-slate-600 text-sm mb-1">AWS (EC2, RDS, S3, EKS), GCP, Azure Basics, CloudFront, Load Balancing, Autoscaling</p>
                <p className="text-slate-700 text-xs leading-tight">→ Fiabilité, monitoring 360°, cost-efficiency, architecture cloud-native</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Sécurité Applicative</h4>
                <p className="text-slate-600 text-sm mb-1">OWASP Top 10, IAM, Secrets Management, Audit CI/CD, Zero-Trust Basics</p>
                <p className="text-slate-700 text-xs leading-tight">→ Renforcement sécurité, gestion des accès, conformité RGPD, bonnes pratiques dev sec</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Bases de Données & Data</h4>
                <p className="text-slate-600 text-sm mb-1">PostgreSQL, MongoDB, Redis, Elasticsearch, BigQuery basics, Supabase</p>
                <p className="text-slate-700 text-xs leading-tight">→ Modélisation avancée, indexation, recherche performante, caching distribué</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Open Data</h4>
                <p className="text-slate-600 text-sm mb-1">APIs publiques, CSV, GeoJSON, ETL légers, automatisation ingestion</p>
                <p className="text-slate-700 text-xs leading-tight">→ Normalisation, exploitation, enrichissement et intégration stratégique de données ouvertes</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Green Tech</h4>
                <p className="text-slate-600 text-sm mb-1">Monitoring énergétique, optimisation compute, Right-sizing, GreenOps</p>
                <p className="text-slate-700 text-xs leading-tight">→ Réduction de l'empreinte carbone, diminution du coût cloud, sobriété numérique</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Testing & Quality</h4>
                <p className="text-slate-600 text-sm mb-1">Jest, RSpec, Cypress, Playwright, TDD/BDD, QA automatisée</p>
                <p className="text-slate-700 text-xs leading-tight">→ Qualité continue, tests end-to-end, pipelines qualité intégrés</p>
              </div>
            </div>
          </section>

          {/* Formation & Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-slate-800 pb-2 mb-6 text-slate-900">
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


        </div>
      </div>
    </div>
    </>
  );
}