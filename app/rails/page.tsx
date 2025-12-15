"use client";

import React from 'react';

export default function RailsResume() {
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
        <div className="bg-gradient-to-r from-red-800 to-red-700 text-white p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-6">
              {/* Professional Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/merouane_amqor.png"
                  alt="Merouane Amqor"
                  className="w-24 h-24 rounded-full border-4 border-red-600 object-cover bg-red-700"
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2 tracking-wide">
                  MEROUANE AMQOR
                </h1>
                <p className="text-xl text-red-200 font-medium mb-1">
                  Ruby on Rails Developer
                </p>
                <div className="text-red-300 text-sm leading-relaxed">
                  Spécialiste Ruby on Rails avec expertise en développement full-stack, optimisation performance et clean architecture
                </div>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="flex items-center justify-end gap-2">
                <i className="fas fa-phone text-red-300 text-sm"></i>
                <span className="text-red-200 text-sm font-medium">+212 7 01 08 67 26</span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <i className="fas fa-envelope text-red-300 text-sm"></i>
                <a href="mailto:marouane.amqor@gmail.com" className="text-red-200 hover:text-red-100 text-sm transition-colors">
                  marouane.amqor@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-end gap-2">
                <i className="fab fa-linkedin text-red-300 text-sm"></i>
                <a href="https://linkedin.com/in/merouane-amqor" className="text-red-200 hover:text-red-100 text-sm transition-colors">
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
            <h2 className="text-2xl font-bold border-b-2 border-red-800 pb-2 mb-4 text-slate-900">
              PROFIL PROFESSIONNEL
            </h2>

            <p className="text-slate-700 mb-4 leading-tight">
              Développeur Ruby on Rails expérimenté, spécialisé dans la conception et l'optimisation d'applications web scalables. Expert en clean architecture, TDD et optimisation des performances Ruby/Rails pour des plateformes haute charge.
            </p>

            <p className="text-slate-700 mb-4 leading-tight">
              En tant que <strong>Technical Lead</strong> chez DabaDoc, je développe et maintiens des applications Rails complexes servant plus de 300 000K utilisateurs mensuels. Mon expertise couvre l'ensemble du stack Ruby on Rails : de l'architecture des APIs REST/GraphQL aux optimisations N+1, en passant par l'implémentation de patterns avancés (Service Objects, Concerns, Decorators).
            </p>

            <p className="text-slate-700 mb-3 font-medium">
              Maîtrise approfondie de l'écosystème Rails :
            </p>

            <ul className="text-slate-700 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span>Architecture MVC optimisée avec séparation claire des responsabilités (Fat Models, Skinny Controllers)</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span>Optimisation des performances : eager loading, caching (Redis), database indexing et query optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span>Développement piloté par les tests (RSpec, Factory Bot) et pratiques de clean code (Rubocop, SimpleCov)</span>
              </li>
            </ul>
          </section>

          {/* Domaines d'Expertise */}
<section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-red-800 pb-2 mb-6 text-slate-900">
              DOMAINES D'EXPERTISE
  </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Ruby on Rails Development
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Architecture Rails avancée : API-only, microservices, modular monolith avec engines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Optimisation des performances : N+1 queries, eager loading, caching multi-niveaux (page, action, fragment)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>APIs RESTful et GraphQL avec documentation automatique (Rswag, GraphQL-Ruby)</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Testing & Quality Assurance
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>TDD/BDD avec RSpec, Capybara, Factory Bot et Shoulda Matchers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Tests d'intégration, feature tests et tests de performance (Bullet, Rack Mini Profiler)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Code coverage (SimpleCov) et analyse de qualité (Rubocop, Reek)</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Base de Données & Performance
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>PostgreSQL avancé : indexes composites, partial indexes, materialized views</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Optimisation ActiveRecord : includes, preload, joins, et requêtes SQL natives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Caching distribué avec Redis et Memcached pour applications haute performance</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        DevOps & Déploiement
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>CI/CD avec GitHub Actions, déploiement automatisé sur Heroku, AWS, DigitalOcean</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Containerisation avec Docker et orchestration légère pour environnements de développement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Monitoring et logging : New Relic, Rollbar, Papertrail pour applications Rails</span>
                  </li>
      </ul>
    </div>

  </div>
</section>

          {/* Parcours Professionnel */}
        <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-red-800 pb-2 mb-6 text-slate-900">
              PARCOURS PROFESSIONNEL
  </h2>

            {/* Technical Lead */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Technical Lead & Ruby on Rails Developer
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
                  <span>Refactorisation complète du backend Rails : migration vers Rails 7, optimisation des performances (+40%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Développement d'APIs REST robustes pour modules paiement, réservation et notifications temps réel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Implémentation de patterns avancés : Service Objects, Form Objects, Query Objects pour code maintenable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisation base de données : résolution problèmes N+1, ajout indexes stratégiques, mise en cache</span>
                </li>
    </ul>
  </div>


            {/* Full-Stack Developer */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Ruby on Rails Developer
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
                  <span>Développement full-stack Rails : controllers, models, views avec optimisation des requêtes SQL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Intégration front-end React/Angular avec APIs Rails, implémentation WebSockets pour temps réel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Migration legacy code vers Rails patterns modernes : concerns, decorators, background jobs (Sidekiq)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Tests automatisés complets : modèles RSpec, tests d'intégration, feature tests avec Capybara</span>
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
                  Ruby Developer & Web Engineer
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
                  <span>Développement d'applications Ruby on Rails pour le marché français : formulaires, APIs, interfaces utilisateur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Optimisation SEO et performance front-end avec intégration d'APIs tierces (Google Maps, services externes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Travail en équipe distribuée avec méthodologies Agile, code reviews et déploiement continu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Livraison de fonctionnalités complexes dans les délais avec respect des standards de qualité Rails</span>
                </li>
    </ul>
  </div>
</section>

          {/* Stack Technique */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-red-800 pb-2 mb-6 text-slate-900">
              COMPÉTENCES TECHNIQUES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Ruby & Rails Core</h4>
                <p className="text-slate-600 text-sm mb-1">Ruby 2.7+, Rails 6/7, Rails API, Hotwire, Action Cable</p>
                <p className="text-slate-700 text-xs leading-tight">→ Architecture MVC, REST APIs, WebSockets, background jobs, mailers, caching avancé</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Testing & Quality</h4>
                <p className="text-slate-600 text-sm mb-1">RSpec, Capybara, Factory Bot, Shoulda Matchers, SimpleCov</p>
                <p className="text-slate-700 text-xs leading-tight">→ TDD/BDD, tests unitaires, d'intégration, feature tests, code coverage</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Base de Données</h4>
                <p className="text-slate-600 text-sm mb-1">PostgreSQL, Redis, Elasticsearch, ActiveRecord, Arel</p>
                <p className="text-slate-700 text-xs leading-tight">→ Optimisation requêtes, indexes, migrations, caching, recherche full-text</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">APIs & Integration</h4>
                <p className="text-slate-600 text-sm mb-1">REST APIs, GraphQL, JSON API, OAuth, JWT, Webhooks</p>
                <p className="text-slate-700 text-xs leading-tight">→ Conception APIs, documentation automatique, authentification, intégrations tierces</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Front-End Integration</h4>
                <p className="text-slate-600 text-sm mb-1">React, Angular, Hotwire, Stimulus, Webpacker, Import maps</p>
                <p className="text-slate-700 text-xs leading-tight">→ SPAs, PWAs, SSR, WebSockets temps réel, progressive enhancement</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">DevOps & Déploiement</h4>
                <p className="text-slate-600 text-sm mb-1">Docker, Heroku, AWS (EB, ECS), GitHub Actions, Capistrano</p>
                <p className="text-slate-700 text-xs leading-tight">→ CI/CD, containerisation, déploiement automatisé, monitoring, scaling</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Performance & Monitoring</h4>
                <p className="text-slate-600 text-sm mb-1">New Relic, Bullet, Rack Mini Profiler, Rollbar, Lograge</p>
                <p className="text-slate-700 text-xs leading-tight">→ Profiling, optimisation mémoire, monitoring applicatif, alerting</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Code Quality</h4>
                <p className="text-slate-600 text-sm mb-1">Rubocop, Reek, Rails Best Practices, Brakeman, Bundler Audit</p>
                <p className="text-slate-700 text-xs leading-tight">→ Analyse statique, sécurité, conformité standards, dette technique</p>
              </div>
            </div>
          </section>

          {/* Formation & Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-red-800 pb-2 mb-6 text-slate-900">
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
              <a href="/" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">
                ← Version Technical Lead
              </a>
              <span className="text-slate-400">|</span>
              <a href="/pure-software-engineer" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Version Software Engineer →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
