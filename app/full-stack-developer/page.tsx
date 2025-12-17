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
                  Building scalable end-to-end web applications
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

          {/* Professional Profile */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-4 text-slate-900">
              PROFESSIONAL PROFILE
            </h2>

            <p className="text-slate-700 mb-4 leading-tight">
              Experienced Full-Stack Developer specialized in building scalable end-to-end web applications. Expert in clean architectures and performance optimization for high-traffic platforms.
            </p>

            <p className="text-slate-700 mb-4 leading-tight">
              At DabaDoc, I develop and maintain complete web applications serving over 300,000 monthly users. My full-stack approach enables me to deliver integrated solutions: from reactive front-ends to robust APIs, through optimized databases.
            </p>

            <p className="text-slate-700 mb-3 font-medium">
              Specialization in business applications:
            </p>

            <ul className="text-slate-700 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span><strong>Dashboards and administration panels</strong>: Intuitive interfaces for data management and decision-making</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span><strong>Payment systems and integrations</strong>: Secure solutions for financial transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500 mr-2 mt-1">•</span>
                <span><strong>ERP-like applications</strong>: Integrated systems for enterprise management and process automation</span>
              </li>
            </ul>
          </section>

          {/* Areas of Expertise */}
<section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-6 text-slate-900">
              AREAS OF EXPERTISE
  </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Full-Stack Development
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>End-to-end development: design, development, deployment and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Clean and modular architecture for scalable applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Performance optimization: front-end, back-end and database</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Business Applications
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Administrative dashboards and business intelligence panels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Integrated and secure payment systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>ERP and enterprise management systems</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        APIs & Integrations
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>RESTful and GraphQL APIs for robust communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Authentication and authorization: JWT, OAuth, secure sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Third-party integrations: payment services, external APIs, webhooks</span>
                  </li>
      </ul>
    </div>

              <div className="bg-slate-50 p-4 rounded-sm">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
        Performance & Scalability
      </h3>
                <ul className="text-slate-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Performance optimization: caching, indexing, optimized queries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Scalable architecture: microservices, load balancing, CDN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-2 mt-1">•</span>
                    <span>Monitoring and observability: metrics, logging, alerting</span>
                  </li>
      </ul>
    </div>

  </div>
</section>

          {/* Professional Experience */}
        <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-6 text-slate-900">
              PROFESSIONAL EXPERIENCE
  </h2>

            {/* Technical Lead */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Full-Stack Developer & Technical Lead
                </h3>
                <span className="text-slate-600 font-medium">January 2024 – Present</span>
              </div>
              <div className="mb-2">
                <span className="text-lg text-slate-700 font-medium">DabaDoc</span>
                <span className="text-slate-600 ml-2">• Telemedicine platform</span>
    </div>

              <ul className="text-slate-700 space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Full-stack development of a complete platform: React/Angular front-end, Rails APIs, PostgreSQL database</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Design and implementation of integrated payment systems with transaction security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Development of administrative dashboards for appointment and patient data management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Architecture optimization to support 300K+ users with 40% performance improvement</span>
                </li>
    </ul>
  </div>


            {/* Full-Stack Developer */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  Senior Full-Stack Developer
                </h3>
                <span className="text-slate-600 font-medium">August 2022 – December 2023</span>
              </div>
              <div className="mb-2">
                <span className="text-lg text-slate-700 font-medium">DabaDoc</span>
                <span className="text-slate-600 ml-2">• Telemedicine platform</span>
    </div>

              <ul className="text-slate-700 space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Complete front-end overhaul: migration to React/Next.js for more performant interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Development of robust REST APIs with JWT authentication for mobile and web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Integration of external payment systems and secure management of sensitive data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Business workflow optimization: automation of booking processes and notifications</span>
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
                <span className="text-slate-600 font-medium">July 2020 – July 2022</span>
              </div>
              <div className="mb-2">
                <span className="text-lg text-slate-700 font-medium">Majorel</span>
                <span className="text-slate-600 ml-2">• Digital services for Solocal / Pages Jaunes</span>
    </div>

              <ul className="text-slate-700 space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Full-stack web application development for the French market: e-commerce and digital services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Design of reactive user interfaces with SEO and performance optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>External API integration: geolocation services, payments, and third-party data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3 mt-1 font-bold">•</span>
                  <span>Delivery of scalable solutions respecting deadlines and high quality standards</span>
                </li>
    </ul>
  </div>
</section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-6 text-slate-900">
              TECHNICAL SKILLS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Front-End</h4>
                <p className="text-slate-600 text-sm mb-1">React, Next.js, Angular, TypeScript, Tailwind CSS, Redux</p>
                <p className="text-slate-700 text-xs leading-tight">→ Reactive interfaces, SPAs, PWAs, UX and performance optimization</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Back-End</h4>
                <p className="text-slate-600 text-sm mb-1">Node.js (NestJS/Express), Ruby on Rails, Python (FastAPI)</p>
                <p className="text-slate-700 text-xs leading-tight">→ Scalable APIs, server architecture, back-end optimization</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Databases</h4>
                <p className="text-slate-600 text-sm mb-1">PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch</p>
                <p className="text-slate-700 text-xs leading-tight">→ Modeling, query optimization, caching, search</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">APIs & Authentication</h4>
                <p className="text-slate-600 text-sm mb-1">REST, GraphQL, JWT, OAuth, API Gateway, WebSockets</p>
                <p className="text-slate-700 text-xs leading-tight">→ Secure communication, integrations, real-time</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Testing & Quality</h4>
                <p className="text-slate-600 text-sm mb-1">Jest, RSpec, Cypress, Playwright, TDD/BDD</p>
                <p className="text-slate-700 text-xs leading-tight">→ Automated testing, continuous quality, CI/CD</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">DevOps & Cloud</h4>
                <p className="text-slate-600 text-sm mb-1">Docker, AWS, Vercel, GitHub Actions, CI/CD</p>
                <p className="text-slate-700 text-xs leading-tight">→ Automated deployment, scalability, monitoring</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Business Applications</h4>
                <p className="text-slate-600 text-sm mb-1">Dashboards, Admin Panels, ERP Systems, Payment Integration</p>
                <p className="text-slate-700 text-xs leading-tight">→ Business solutions, automation, B2B interfaces</p>
              </div>

              <div className="bg-slate-50 p-1 rounded-sm">
                <h4 className="font-bold text-slate-800 mb-1">Performance & Security</h4>
                <p className="text-slate-600 text-sm mb-1">OWASP, HTTPS, Data Encryption, Performance Monitoring</p>
                <p className="text-slate-700 text-xs leading-tight">→ Application security, optimization, compliance</p>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-green-800 pb-2 mb-6 text-slate-900">
              EDUCATION & CERTIFICATIONS
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="font-semibold text-slate-800">Master's in Computer Science — SUPEMIR (Casablanca) — 2022</span>
                </div>
                <p className="text-slate-600 text-sm leading-tight">
                  Degree recognized by the Moroccan State, specialization in Computer Engineering & Technological Innovation, Software Engineering / Data Science option.
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
                <h4 className="font-semibold text-slate-800 mb-2">Languages</h4>
                <div className="flex flex-wrap gap-4 text-slate-700">
                  <span><strong>French :</strong> Level C1 (Native)</span>
                  <span><strong>English :</strong> Level B2 (Professional)</span>
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
