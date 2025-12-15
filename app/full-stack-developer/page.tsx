"use client";

import React from 'react';

export default function FullStackDeveloperResume() {
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
        <div className="bg-gradient-to-r from-green-800 to-green-700 text-white p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-6">
              {/* Professional Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/merouane_amqor.png"
                  alt="Merouane Amqor"
                  className="w-24 h-24 rounded-full border-4 border-green-600 object-cover bg-green-700"
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2 tracking-wide">
                  MEROUANE AMQOR
                </h1>
                <p className="text-xl text-green-200 font-medium mb-1">
                  Full-Stack Developer
                </p>
                <div className="text-green-300 text-sm leading-relaxed">
                  Je construis des applications web scalables de bout en bout
                </div>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="flex items-center justify-end gap-2">
                <i className="fas fa-phone text-green-300 text-sm"></i>
                <span className="text-green-200 text-sm font-medium">+212 7 01 08 67 26</span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <i className="fas fa-envelope text-green-300 text-sm"></i>
                <a href="mailto:marouane.amqor@gmail.com" className="text-green-200 hover:text-green-100 text-sm transition-colors">
                  marouane.amqor@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-end gap-2">
                <i className="fab fa-linkedin text-green-300 text-sm"></i>
                <a href="https://linkedin.com/in/merouane-amqor" className="text-green-200 hover:text-green-100 text-sm transition-colors">
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
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-4 text-slate-900">
              PROFIL PROFESSIONNEL
            </h2>

            <p className="text-slate-700 mb-4 leading-tight">
              Développeur Full-Stack expérimenté spécialisé dans la création d'applications web scalables de bout en bout. Expert en architectures propres et optimisation des performances pour des plateformes haute charge.
            </p>

            <p className="text-slate-700 mb-4 leading-tight">
              Chez DabaDoc, je développe et maintiens des applications web complètes servant plus de 300 000 utilisateurs mensuels. Mon approche full-stack me permet de livrer des solutions intégrées : du front-end réactif aux APIs robustes, en passant par des bases de données optimisées.
            </p>

            <p className="text-slate-700 mb-3 font-medium">
              Spécialisation en applications d'affaires :
            </p>

            <ul className="text-slate-700 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span><strong>Dashboards et panneaux d'administration</strong> : Interfaces intuitives pour la gestion des données et la prise de décision</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span><strong>Systèmes de paiement et intégrations</strong> : Solutions sécurisées pour les transactions financières</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span><strong>Applications ERP-like</strong> : Systèmes intégrés pour la gestion d'entreprise et l'automatisation des processus</span>
              </li>
            </ul>
          </section>

          {/* Domaines d'Expertise */}
<section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-6 text-slate-900">
              DOMAINES D'EXPERTISE
  </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Full-Stack Development
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Développement end-to-end : conception, développement, déploiement et maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Architecture propre et modulaire pour applications scalables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Optimisation des performances : front-end, back-end et base de données</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Applications d'Affaires
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Dashboards administratifs et tableaux de bord métier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Systèmes de paiement intégrés et sécurisés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>ERP et systèmes de gestion d'entreprise</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        APIs & Intégrations
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>APIs RESTful et GraphQL pour communications robustes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Authentification et autorisation : JWT, OAuth, sessions sécurisées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Intégrations tierces : services de paiement, APIs externes, webhooks</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Performance & Scalabilité
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Optimisation des performances : mise en cache, indexation, requêtes optimisées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Architecture scalable : microservices, load balancing, CDN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Monitoring et observabilité : métriques, logging, alerting</span>
                  </li>
      </ul>
    </div>

  </div>
</section>

          {/* Parcours Professionnel */}
        <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-6 text-slate-900">
              PARCOURS PROFESSIONNEL
  </h2>

            {/* Technical Lead */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Full-Stack Developer & Technical Lead
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
                  <span>Développement full-stack d'une plateforme complète : front-end React/Angular, APIs Rails, base PostgreSQL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Conception et implémentation de systèmes de paiement intégrés avec sécurisation des transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Développement de dashboards administratifs pour la gestion des rendez-vous et données patients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisation de l'architecture pour supporter 300K+ utilisateurs avec amélioration de 40% des performances</span>
                </li>
    </ul>
  </div>


            {/* Full-Stack Developer */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Senior Full-Stack Developer
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
                  <span>Refonte complète du front-end : migration vers React/Next.js pour interfaces plus performantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Développement d'APIs REST robustes avec authentification JWT pour applications mobiles et web</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Intégration de systèmes de paiement externes et gestion sécurisée des données sensibles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisation des workflows métier : automatisation des processus de réservation et notifications</span>
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
                  Full-Stack Web Developer
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
                  <span>Développement d'applications web full-stack pour le marché français : e-commerce et services digitaux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Conception d'interfaces utilisateur réactives avec optimisation SEO et performances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Intégration d'APIs externes : services de géolocalisation, paiements, et données tierces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Livraison de solutions scalables avec respect des délais et standards de qualité élevés</span>
                </li>
    </ul>
  </div>
</section>

          {/* Stack Technique */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-6 text-slate-900">
              COMPÉTENCES TECHNIQUES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Front-End</h4>
                <p className="text-slate-600 text-sm mb-1">React, Next.js, Angular, TypeScript, Tailwind CSS, Redux</p>
                <p className="text-slate-700 text-xs leading-tight">→ Interfaces réactives, SPAs, PWAs, optimisation UX et performances</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Back-End</h4>
                <p className="text-slate-600 text-sm mb-1">Node.js (NestJS/Express), Ruby on Rails, Python (FastAPI)</p>
                <p className="text-slate-700 text-xs leading-tight">→ APIs scalables, architecture serveur, optimisation back-end</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Base de Données</h4>
                <p className="text-slate-600 text-sm mb-1">PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch</p>
                <p className="text-slate-700 text-xs leading-tight">→ Modélisation, optimisation requêtes, mise en cache, recherche</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">APIs & Authentification</h4>
                <p className="text-slate-600 text-sm mb-1">REST, GraphQL, JWT, OAuth, API Gateway, WebSockets</p>
                <p className="text-slate-700 text-xs leading-tight">→ Communication sécurisée, intégrations, temps réel</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Testing & Quality</h4>
                <p className="text-slate-600 text-sm mb-1">Jest, RSpec, Cypress, Playwright, TDD/BDD</p>
                <p className="text-slate-700 text-xs leading-tight">→ Tests automatisés, qualité continue, CI/CD</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">DevOps & Cloud</h4>
                <p className="text-slate-600 text-sm mb-1">Docker, AWS, Vercel, GitHub Actions, CI/CD</p>
                <p className="text-slate-700 text-xs leading-tight">→ Déploiement automatisé, scalabilité, monitoring</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Business Applications</h4>
                <p className="text-slate-600 text-sm mb-1">Dashboards, Admin Panels, ERP Systems, Payment Integration</p>
                <p className="text-slate-700 text-xs leading-tight">→ Solutions métier, automatisation, interfaces B2B</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Performance & Security</h4>
                <p className="text-slate-600 text-sm mb-1">OWASP, HTTPS, Data Encryption, Performance Monitoring</p>
                <p className="text-slate-700 text-xs leading-tight">→ Sécurité applicative, optimisation, conformité</p>
              </div>
            </div>
          </section>

          {/* Formation & Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-6 text-slate-900">
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
            <div className="flex justify-center gap-3 text-sm">
              <a href="/" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">
                Technical Lead
              </a>
              <span className="text-slate-400">•</span>
              <a href="/pure-software-engineer" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Software Engineer
              </a>
              <span className="text-slate-400">•</span>
              <a href="/rails" className="text-red-600 hover:text-red-800 font-medium transition-colors">
                Ruby on Rails
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
