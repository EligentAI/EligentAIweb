export type Locale = "en" | "es" | "fr";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export const translations: Record<Locale, Record<string, any>> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      caseStudies: "Case Studies",
      technology: "Technology",
      about: "About",
      contact: "Contact",
      bookDemo: "Book a Demo",
    },
    hero: {
      badge: "AI Engineering Studio",
      headline1: "AI Systems for",
      headline2: "Business Data,",
      headline3: "Knowledge & Operations",
      sub: "We build intelligent AI systems that help companies analyze data, automate workflows and unlock insights.",
      cta1: "View Projects",
      cta2: "Contact Us",
      stat1Label: "Production Systems",
      stat2Label: "Technologies",
      stat3Label: "End-to-End Delivery",
    },
    services: {
      sectionLabel: "What We Build",
      title: "AI Systems We Build",
      sub: "Focused engineering on intelligent systems that connect AI reasoning with real business data.",
      items: [
        {
          title: "AI Analytics Dashboards",
          description:
            "Interactive analytics systems where users query business data using natural language. The AI automatically generates SQL, visualizes results, and surfaces insights.",
        },
        {
          title: "AI Knowledge Assistants",
          description:
            "RAG-powered systems that let teams search and retrieve information from company documents, wikis, and internal knowledge bases through natural conversation.",
        },
        {
          title: "AI Customer Support Automation",
          description:
            "Intelligent support systems that understand customer inquiries, retrieve relevant knowledge, and generate accurate responses — reducing manual support load.",
        },
        {
          title: "AI Business Process Automation",
          description:
            "End-to-end workflow automation that connects AI reasoning with your business data, triggering actions, generating reports, and surfacing anomalies automatically.",
        },
        {
          title: "Custom AI Agents",
          description:
            "Purpose-built AI agents with tool-use capabilities — able to query databases, call APIs, analyze documents, and execute multi-step reasoning tasks autonomously.",
        },
      ],
    },
    projects: {
      sectionLabel: "Our Work",
      title: "Our AI Systems",
      sub: "End-to-end AI systems built and deployed for real business needs.",
      status: "Production",
      stackLabel: "Tech Stack",
      items: [
        {
          subtitle: "Business Intelligence AI",
          description:
            "AI-powered business analytics system that allows users to ask questions about business data in natural language. The system automatically generates SQL queries, retrieves data, creates charts, and provides AI-driven insights.",
          features: [
            "Natural language → SQL queries",
            "Automated business insights",
            "Interactive charts & dashboards",
            "Business analytics reporting",
          ],
        },
        {
          subtitle: "Internal Knowledge Assistant",
          description:
            "AI internal company assistant designed to help teams retrieve knowledge, analyze data and generate reports. The system uses RAG architecture and SQL agents to access company knowledge and structured data.",
          features: [
            "Knowledge retrieval from documents",
            "Business analytics queries",
            "Role-based access system",
            "AI-generated reports",
          ],
        },
      ],
    },
    caseStudies: {
      sectionLabel: "Deep Dives",
      title: "How Our AI Systems Work",
      sub: "From problem to architecture — a look inside what we build and how.",
      archNote: "Architecture overview · Detailed diagram in project documentation",
      labels: {
        problem: "Problem",
        solution: "Solution",
        architecture: "Architecture",
        stack: "Tech Stack",
        outcome: "Outcome",
      },
      items: [
        {
          sections: [
            "Business analysts spent hours writing SQL queries and building charts manually. Non-technical stakeholders couldn't access data insights without developer support, creating bottlenecks in decision-making.",
            "A natural language interface connected to a PostgreSQL analytics database. Users type questions in plain English — the AI generates SQL, runs the query, and returns charts and written insights automatically.",
            "LangChain SQL agent with OpenAI GPT-4 for query generation. Streamlit frontend for the chat interface. Plotly for dynamic chart rendering. Neon Database for scalable serverless PostgreSQL.",
            "Python · LangChain · OpenAI API (GPT-4) · PostgreSQL · Neon Database · Plotly · Streamlit",
            "Non-technical teams now query live business data in seconds — no SQL, no analyst dependency. What took 30+ minutes of manual reporting is fully automated, freeing the data team to focus on strategy instead of repetitive requests.",
          ],
        },
        {
          sections: [
            "Company knowledge was scattered across documents, wikis, and databases. Employees lost significant time searching for information and generating reports manually from disparate sources.",
            "A unified AI assistant combining RAG for unstructured documents and a SQL agent for structured data. Team members ask questions and receive accurate, sourced answers and auto-generated reports.",
            "RAG pipeline with vector embeddings for document retrieval. LangChain agents orchestrate between document search and database queries. Role-based permissions control data access per user.",
            "Python · LangChain · OpenAI API · PostgreSQL · Neon Database · RAG Architecture · Streamlit",
            "Instead of switching between tools and documents, teams now interact with a single AI system that understands both knowledge and data - turning scattered information into an accessible, reliable decision layer.",
          ],
        },
      ],
    },
    technology: {
      sectionLabel: "Our Stack",
      title: "Technologies We Use",
      sub: "A focused stack of proven technologies for building production AI systems.",
      items: [
        { name: "Python", category: "Language", description: "Core language for all AI system development" },
        { name: "LangChain", category: "Framework", description: "AI agent orchestration and chain management" },
        { name: "OpenAI API", category: "AI", description: "GPT-4 models for reasoning and generation" },
        { name: "PostgreSQL", category: "Database", description: "Structured data storage and SQL analytics" },
        { name: "Neon Database", category: "Database", description: "Serverless PostgreSQL with branching & scaling" },
        { name: "RAG Systems", category: "Architecture", description: "Retrieval-augmented generation for knowledge bases" },
        { name: "AI Agents", category: "Architecture", description: "Autonomous multi-step AI reasoning systems" },
        { name: "Streamlit", category: "Frontend", description: "Rapid AI application frontend deployment" },
        { name: "Plotly", category: "Visualization", description: "Interactive data visualizations and charts" },
      ],
    },
    process: {
      sectionLabel: "Our Process",
      title: "How We Build AI Systems",
      sub: "A structured, collaborative process from discovery to production deployment.",
      steps: [
        {
          title: "Problem Discovery",
          description:
            "We start by understanding your business processes, data sources, and where AI can have the most meaningful impact. No generic pitches — just a focused analysis of your actual needs.",
        },
        {
          title: "System Architecture Design",
          description:
            "We design the AI architecture before writing a single line of code. This includes agent design, data flow, RAG pipeline structure, database schema, and integration points.",
        },
        {
          title: "AI Development",
          description:
            "Building the AI core — LangChain agents, RAG pipelines, SQL tools, and LLM integrations. Every component is built for reliability, with proper error handling and prompt engineering.",
        },
        {
          title: "Integration with Business Data",
          description:
            "Connecting the AI system to your actual data sources — databases, documents, APIs. We set up vector stores, SQL connectors, and access controls so the AI works with real information.",
        },
        {
          title: "Deployment",
          description:
            "Deploying the system to production with monitoring, documentation, and handoff. We ensure the system is stable, performant, and maintainable before considering the project complete.",
        },
      ],
    },
    about: {
      sectionLabel: "Who We Are",
      title: "About Eligent AI",
      body1: "Eligent AI is a specialized AI engineering studio focused on building intelligent systems for modern businesses.",
      body2Prefix: "We specialize in",
      body2Items: ["AI agents", "RAG systems", "data analytics automation", "AI-powered knowledge assistants"],
      body2Connector: "and",
      body3: "Our mission is to help companies transform their data and knowledge into intelligent systems — practical tools that work reliably in production.",
      values: [
        {
          title: "Focused Execution",
          description: "We work on a small number of AI projects at a time to deliver focused, high-quality engineering — not rushed deliverables.",
        },
        {
          title: "Engineering First",
          description: "Every AI system we build starts with rigorous architecture design. We believe robust foundations produce reliable AI systems.",
        },
        {
          title: "AI That Works",
          description: "Our goal is systems that actually run in production. We build for reliability, not just demos — every project is designed to last.",
        },
      ],
    },
    contact: {
      sectionLabel: "Get in Touch",
      title1: "Start Building with",
      title2: "Eligent AI",
      sub: "Have a project in mind or want to understand what AI could do for your business? Reach out and we'll get back to you quickly.",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell us about your project or question...",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitBtn: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successSub: "Thanks for reaching out. We'll review your message and get back to you shortly.",
      sendAnother: "Send another message",
    },
    footer: {
      tagline: "AI engineering studio building intelligent systems for modern businesses.",
      navTitle: "Navigation",
      connectTitle: "Connect",
      copyright: "All rights reserved.",
      backTop: "Back to top",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      caseStudies: "Casos de Uso",
      technology: "Tecnología",
      about: "Nosotros",
      contact: "Contacto",
      bookDemo: "Reservar Demo",
    },
    hero: {
      badge: "Estudio de Ingeniería IA",
      headline1: "Sistemas de IA para",
      headline2: "Datos Empresariales,",
      headline3: "Conocimiento y Operaciones",
      sub: "Construimos sistemas de inteligencia artificial que ayudan a las empresas a analizar datos, automatizar flujos de trabajo y descubrir insights.",
      cta1: "Ver Proyectos",
      cta2: "Contáctanos",
      stat1Label: "Sistemas IA Creados",
      stat2Label: "Tecnologías",
      stat3Label: "Enfoque",
      scrollLabel: "Explorar",
    },
    services: {
      sectionLabel: "Lo Que Construimos",
      title: "Sistemas de IA que Construimos",
      sub: "Ingeniería enfocada en sistemas inteligentes que conectan el razonamiento de IA con datos empresariales reales.",
      learnMore: "Saber más",
      items: [
        {
          title: "Dashboards de Análisis IA",
          description:
            "Sistemas de análisis interactivos donde los usuarios consultan datos empresariales en lenguaje natural. La IA genera SQL automáticamente, visualiza resultados y extrae insights.",
        },
        {
          title: "Asistentes de Conocimiento IA",
          description:
            "Sistemas RAG que permiten a los equipos buscar y recuperar información de documentos empresariales, wikis y bases de conocimiento internas mediante conversación natural.",
        },
        {
          title: "Automatización de Soporte al Cliente",
          description:
            "Sistemas de soporte inteligente que comprenden las consultas de los clientes, recuperan conocimiento relevante y generan respuestas precisas, reduciendo la carga de soporte manual.",
        },
        {
          title: "Automatización de Procesos Empresariales",
          description:
            "Automatización de flujos de trabajo de extremo a extremo que conecta el razonamiento de IA con los datos de su empresa, activando acciones y generando informes automáticamente.",
        },
        {
          title: "Agentes de IA Personalizados",
          description:
            "Agentes de IA creados específicamente con capacidades de uso de herramientas — capaces de consultar bases de datos, llamar APIs, analizar documentos y ejecutar tareas de razonamiento múltiple.",
        },
      ],
    },
    projects: {
      sectionLabel: "Nuestro Trabajo",
      title: "Nuestros Sistemas de IA",
      sub: "Sistemas de IA de extremo a extremo construidos y desplegados para necesidades empresariales reales.",
      status: "Producción",
      stackLabel: "Tecnologías",
      items: [
        {
          subtitle: "IA de Inteligencia Empresarial",
          description:
            "Sistema de análisis empresarial impulsado por IA que permite a los usuarios hacer preguntas sobre datos empresariales en lenguaje natural. El sistema genera consultas SQL automáticamente, recupera datos, crea gráficos y proporciona insights.",
          features: [
            "Lenguaje natural → consultas SQL",
            "Insights empresariales automatizados",
            "Gráficos e dashboards interactivos",
            "Informes de análisis empresarial",
          ],
        },
        {
          subtitle: "Asistente de Conocimiento Interno",
          description:
            "Asistente de IA interno diseñado para ayudar a los equipos a recuperar conocimiento, analizar datos y generar informes. El sistema usa arquitectura RAG y agentes SQL para acceder al conocimiento empresarial.",
          features: [
            "Recuperación de conocimiento de documentos",
            "Consultas de análisis empresarial",
            "Sistema de acceso basado en roles",
            "Informes generados por IA",
          ],
        },
      ],
    },
    caseStudies: {
      sectionLabel: "Análisis Profundo",
      title: "Cómo Funcionan Nuestros Sistemas",
      sub: "Del problema a la arquitectura — una mirada a lo que construimos y cómo.",
      archNote: "Visión general de la arquitectura · Diagrama detallado en la documentación del proyecto",
      labels: {
        problem: "Problema",
        solution: "Solución",
        architecture: "Arquitectura",
        stack: "Tecnologías",
        outcome: "Resultado",
      },
      items: [
        {
          sections: [
            "Los analistas de negocio pasaban horas escribiendo consultas SQL y construyendo gráficos manualmente. Los stakeholders no técnicos no podían acceder a insights de datos sin soporte de desarrollo.",
            "Una interfaz en lenguaje natural conectada a una base de datos PostgreSQL de análisis. Los usuarios escriben preguntas en español — la IA genera SQL, ejecuta la consulta y devuelve gráficos e insights escritos automáticamente.",
            "Agente SQL de LangChain con OpenAI GPT-4 para generación de consultas. Frontend Streamlit para la interfaz de chat. Plotly para renderizado de gráficos dinámicos. Neon Database para PostgreSQL serverless escalable.",
            "Python · LangChain · OpenAI API (GPT-4) · PostgreSQL · Neon Database · Plotly · Streamlit",
            "Los miembros no técnicos del equipo ahora pueden autogestionar consultas de datos sin soporte de ingeniería. Los informes que antes requerían trabajo manual se generan en segundos.",
          ],
        },
        {
          sections: [
            "El conocimiento empresarial estaba disperso en documentos, wikis y bases de datos. Los empleados perdían tiempo significativo buscando información y generando informes manualmente.",
            "Un asistente de IA unificado que combina RAG para documentos no estructurados y un agente SQL para datos estructurados. Los miembros del equipo hacen preguntas y reciben respuestas precisas e informes autogenerados.",
            "Pipeline RAG con embeddings vectoriales para recuperación de documentos. Los agentes de LangChain orquestan entre búsqueda de documentos y consultas de bases de datos. Permisos basados en roles controlan el acceso a datos por usuario.",
            "Python · LangChain · OpenAI API · PostgreSQL · Neon Database · RAG Architecture · Streamlit",
            "Los equipos recuperan información y generan informes a través de la conversación en lugar de la búsqueda manual. Los silos de conocimiento se rompen a través de una única interfaz de IA unificada con controles de acceso apropiados.",
          ],
        },
      ],
    },
    technology: {
      sectionLabel: "Nuestro Stack",
      title: "Tecnologías que Usamos",
      sub: "Un stack enfocado de tecnologías probadas para construir sistemas de IA en producción.",
      items: [
        { name: "Python", category: "Lenguaje", description: "Lenguaje principal para el desarrollo de sistemas IA" },
        { name: "LangChain", category: "Framework", description: "Orquestación de agentes IA y gestión de cadenas" },
        { name: "OpenAI API", category: "IA", description: "Modelos GPT-4 para razonamiento y generación" },
        { name: "PostgreSQL", category: "Base de Datos", description: "Almacenamiento de datos estructurados y análisis SQL" },
        { name: "Neon Database", category: "Base de Datos", description: "PostgreSQL serverless con ramificación y escalado" },
        { name: "Sistemas RAG", category: "Arquitectura", description: "Generación aumentada por recuperación para bases de conocimiento" },
        { name: "Agentes IA", category: "Arquitectura", description: "Sistemas de razonamiento IA autónomo de múltiples pasos" },
        { name: "Streamlit", category: "Frontend", description: "Despliegue rápido de aplicaciones IA" },
        { name: "Plotly", category: "Visualización", description: "Visualizaciones de datos e gráficos interactivos" },
      ],
    },
    process: {
      sectionLabel: "Nuestro Proceso",
      title: "Cómo Construimos Sistemas de IA",
      sub: "Un proceso estructurado y colaborativo desde el descubrimiento hasta el despliegue en producción.",
      steps: [
        {
          title: "Descubrimiento del Problema",
          description:
            "Comenzamos entendiendo sus procesos empresariales, fuentes de datos y dónde la IA puede tener el impacto más significativo. Sin propuestas genéricas — solo un análisis enfocado de sus necesidades reales.",
        },
        {
          title: "Diseño de Arquitectura del Sistema",
          description:
            "Diseñamos la arquitectura de IA antes de escribir una sola línea de código. Esto incluye diseño de agentes, flujo de datos, estructura del pipeline RAG, esquema de base de datos y puntos de integración.",
        },
        {
          title: "Desarrollo de IA",
          description:
            "Construcción del núcleo de IA — agentes LangChain, pipelines RAG, herramientas SQL e integraciones LLM. Cada componente se construye para la fiabilidad, con manejo de errores adecuado e ingeniería de prompts.",
        },
        {
          title: "Integración con Datos Empresariales",
          description:
            "Conectamos el sistema de IA con sus fuentes de datos reales — bases de datos, documentos, APIs. Configuramos almacenes de vectores, conectores SQL y controles de acceso para que la IA trabaje con información real.",
        },
        {
          title: "Despliegue",
          description:
            "Desplegamos el sistema en producción con monitoreo, documentación y transferencia. Nos aseguramos de que el sistema sea estable, eficiente y mantenible antes de considerar el proyecto completo.",
        },
      ],
    },
    about: {
      sectionLabel: "Quiénes Somos",
      title: "Sobre Eligent AI",
      body1: "Eligent AI es un pequeño estudio de ingeniería de IA enfocado en construir sistemas inteligentes para empresas modernas.",
      body2Prefix: "Nos especializamos en",
      body2Items: ["agentes de IA", "sistemas RAG", "automatización de análisis de datos", "asistentes de conocimiento impulsados por IA"],
      body2Connector: "y",
      body3: "Nuestra misión es ayudar a las empresas a transformar sus datos y conocimiento en sistemas inteligentes — herramientas prácticas que funcionan de manera confiable en producción.",
      values: [
        {
          title: "Ejecución Enfocada",
          description: "Trabajamos en un pequeño número de proyectos de IA a la vez para entregar ingeniería de alta calidad — no entregas apresuradas.",
        },
        {
          title: "Ingeniería Primero",
          description: "Cada sistema de IA que construimos comienza con un diseño de arquitectura riguroso. Creemos que las bases sólidas producen sistemas de IA confiables.",
        },
        {
          title: "IA que Funciona",
          description: "Nuestro objetivo son sistemas que realmente funcionen en producción. Construimos para la fiabilidad, no solo para demos — cada proyecto está diseñado para durar.",
        },
      ],
    },
    contact: {
      sectionLabel: "Contáctanos",
      title1: "Empieza a Construir con",
      title2: "Eligent AI",
      sub: "¿Tienes un proyecto en mente o quieres entender qué puede hacer la IA por tu empresa? Escríbenos y te responderemos rápidamente.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntanos sobre tu proyecto o pregunta...",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      messageLabel: "Mensaje",
      submitBtn: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje Enviado!",
      successSub: "Gracias por contactarnos. Revisaremos tu mensaje y te responderemos pronto.",
      sendAnother: "Enviar otro mensaje",
    },
    footer: {
      tagline: "Estudio de ingeniería de IA que construye sistemas inteligentes para empresas modernas.",
      navTitle: "Navegación",
      connectTitle: "Conectar",
      copyright: "Todos los derechos reservados.",
      backTop: "Volver arriba",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      projects: "Projets",
      caseStudies: "Études de Cas",
      technology: "Technologie",
      about: "À Propos",
      contact: "Contact",
      bookDemo: "Réserver une Démo",
    },
    hero: {
      badge: "Studio d'Ingénierie IA",
      headline1: "Systèmes IA pour",
      headline2: "les Données Métier,",
      headline3: "la Connaissance & les Opérations",
      sub: "Nous construisons des systèmes d'IA intelligents qui aident les entreprises à analyser les données, automatiser les flux de travail et découvrir des insights.",
      cta1: "Voir les Projets",
      cta2: "Nous Contacter",
      stat1Label: "Systèmes IA Créés",
      stat2Label: "Technologies",
      stat3Label: "Focus",
      scrollLabel: "Explorer",
    },
    services: {
      sectionLabel: "Ce que Nous Construisons",
      title: "Systèmes IA que Nous Construisons",
      sub: "Ingénierie ciblée sur des systèmes intelligents qui connectent le raisonnement IA aux données métier réelles.",
      learnMore: "En savoir plus",
      items: [
        {
          title: "Tableaux de Bord IA Analytics",
          description:
            "Systèmes d'analyse interactifs où les utilisateurs interrogent les données métier en langage naturel. L'IA génère automatiquement du SQL, visualise les résultats et fait ressortir des insights.",
        },
        {
          title: "Assistants de Connaissance IA",
          description:
            "Systèmes alimentés par RAG permettant aux équipes de rechercher et récupérer des informations dans des documents d'entreprise, wikis et bases de connaissances internes via une conversation naturelle.",
        },
        {
          title: "Automatisation du Support Client IA",
          description:
            "Systèmes de support intelligents qui comprennent les demandes des clients, récupèrent les connaissances pertinentes et génèrent des réponses précises — réduisant la charge de support manuel.",
        },
        {
          title: "Automatisation des Processus Métier IA",
          description:
            "Automatisation des flux de travail de bout en bout qui connecte le raisonnement IA à vos données métier, déclenchant des actions, générant des rapports et signalant des anomalies automatiquement.",
        },
        {
          title: "Agents IA Personnalisés",
          description:
            "Agents IA conçus sur mesure avec des capacités d'utilisation d'outils — capables d'interroger des bases de données, d'appeler des APIs, d'analyser des documents et d'exécuter des tâches de raisonnement multi-étapes.",
        },
      ],
    },
    projects: {
      sectionLabel: "Notre Travail",
      title: "Nos Systèmes IA",
      sub: "Systèmes IA de bout en bout construits et déployés pour de vrais besoins métier.",
      status: "Production",
      stackLabel: "Technologies",
      items: [
        {
          subtitle: "IA de Business Intelligence",
          description:
            "Système d'analyse métier alimenté par l'IA permettant aux utilisateurs de poser des questions sur les données métier en langage naturel. Le système génère automatiquement des requêtes SQL, récupère les données, crée des graphiques et fournit des insights.",
          features: [
            "Langage naturel → requêtes SQL",
            "Insights métier automatisés",
            "Graphiques et tableaux de bord interactifs",
            "Rapports d'analyse métier",
          ],
        },
        {
          subtitle: "Assistant de Connaissance Interne",
          description:
            "Assistant IA interne conçu pour aider les équipes à récupérer des connaissances, analyser des données et générer des rapports. Le système utilise l'architecture RAG et des agents SQL pour accéder aux connaissances d'entreprise.",
          features: [
            "Récupération de connaissances de documents",
            "Requêtes d'analyse métier",
            "Système d'accès basé sur les rôles",
            "Rapports générés par IA",
          ],
        },
      ],
    },
    caseStudies: {
      sectionLabel: "Analyses Approfondies",
      title: "Comment Fonctionnent Nos Systèmes",
      sub: "Du problème à l'architecture — un regard à l'intérieur de ce que nous construisons et comment.",
      archNote: "Vue d'ensemble de l'architecture · Diagramme détaillé dans la documentation du projet",
      labels: {
        problem: "Problème",
        solution: "Solution",
        architecture: "Architecture",
        stack: "Technologies",
        outcome: "Résultat",
      },
      items: [
        {
          sections: [
            "Les analystes métier passaient des heures à écrire des requêtes SQL et à construire des graphiques manuellement. Les parties prenantes non techniques ne pouvaient pas accéder aux insights de données sans support développeur.",
            "Une interface en langage naturel connectée à une base de données PostgreSQL d'analyse. Les utilisateurs tapent des questions en français — l'IA génère du SQL, exécute la requête et retourne des graphiques et des insights automatiquement.",
            "Agent SQL LangChain avec OpenAI GPT-4 pour la génération de requêtes. Frontend Streamlit pour l'interface de chat. Plotly pour le rendu de graphiques dynamiques. Neon Database pour PostgreSQL serverless évolutif.",
            "Python · LangChain · OpenAI API (GPT-4) · PostgreSQL · Neon Database · Plotly · Streamlit",
            "Les membres non techniques de l'équipe peuvent désormais effectuer eux-mêmes des requêtes de données sans support d'ingénierie. Les rapports qui nécessitaient auparavant un travail manuel sont générés en quelques secondes.",
          ],
        },
        {
          sections: [
            "Les connaissances de l'entreprise étaient dispersées dans des documents, wikis et bases de données. Les employés perdaient beaucoup de temps à rechercher des informations et à générer des rapports manuellement.",
            "Un assistant IA unifié combinant RAG pour les documents non structurés et un agent SQL pour les données structurées. Les membres de l'équipe posent des questions et reçoivent des réponses précises et des rapports autogénérés.",
            "Pipeline RAG avec des embeddings vectoriels pour la récupération de documents. Les agents LangChain orchestrent entre la recherche de documents et les requêtes de base de données. Les permissions basées sur les rôles contrôlent l'accès aux données par utilisateur.",
            "Python · LangChain · OpenAI API · PostgreSQL · Neon Database · RAG Architecture · Streamlit",
            "Les équipes récupèrent des informations et génèrent des rapports par conversation plutôt que par recherche manuelle. Les silos de connaissances sont supprimés grâce à une interface IA unifiée avec des contrôles d'accès appropriés.",
          ],
        },
      ],
    },
    technology: {
      sectionLabel: "Notre Stack",
      title: "Technologies que Nous Utilisons",
      sub: "Un stack ciblé de technologies éprouvées pour construire des systèmes IA en production.",
      items: [
        { name: "Python", category: "Langage", description: "Langage principal pour le développement de systèmes IA" },
        { name: "LangChain", category: "Framework", description: "Orchestration d'agents IA et gestion de chaînes" },
        { name: "OpenAI API", category: "IA", description: "Modèles GPT-4 pour le raisonnement et la génération" },
        { name: "PostgreSQL", category: "Base de Données", description: "Stockage de données structurées et analyses SQL" },
        { name: "Neon Database", category: "Base de Données", description: "PostgreSQL serverless avec ramification & mise à l'échelle" },
        { name: "Systèmes RAG", category: "Architecture", description: "Génération augmentée par récupération pour bases de connaissances" },
        { name: "Agents IA", category: "Architecture", description: "Systèmes de raisonnement IA autonome multi-étapes" },
        { name: "Streamlit", category: "Frontend", description: "Déploiement rapide d'applications IA" },
        { name: "Plotly", category: "Visualisation", description: "Visualisations de données et graphiques interactifs" },
      ],
    },
    process: {
      sectionLabel: "Notre Processus",
      title: "Comment Nous Construisons des Systèmes IA",
      sub: "Un processus structuré et collaboratif de la découverte au déploiement en production.",
      steps: [
        {
          title: "Découverte du Problème",
          description:
            "Nous commençons par comprendre vos processus métier, vos sources de données et où l'IA peut avoir le plus grand impact. Pas de discours génériques — juste une analyse ciblée de vos besoins réels.",
        },
        {
          title: "Conception de l'Architecture Système",
          description:
            "Nous concevons l'architecture IA avant d'écrire une seule ligne de code. Cela inclut la conception d'agents, le flux de données, la structure du pipeline RAG, le schéma de base de données et les points d'intégration.",
        },
        {
          title: "Développement IA",
          description:
            "Construction du cœur IA — agents LangChain, pipelines RAG, outils SQL et intégrations LLM. Chaque composant est construit pour la fiabilité, avec une gestion des erreurs appropriée et une ingénierie des prompts.",
        },
        {
          title: "Intégration avec les Données Métier",
          description:
            "Connexion du système IA à vos sources de données réelles — bases de données, documents, APIs. Nous configurons des magasins de vecteurs, des connecteurs SQL et des contrôles d'accès pour que l'IA fonctionne avec de vraies informations.",
        },
        {
          title: "Déploiement",
          description:
            "Déploiement du système en production avec surveillance, documentation et transfert. Nous veillons à ce que le système soit stable, performant et maintenable avant de considérer le projet terminé.",
        },
      ],
    },
    about: {
      sectionLabel: "Qui Nous Sommes",
      title: "À Propos de Eligent AI",
      body1: "Eligent AI est un petit studio d'ingénierie IA axé sur la construction de systèmes intelligents pour les entreprises modernes.",
      body2Prefix: "Nous nous spécialisons dans",
      body2Items: ["les agents IA", "les systèmes RAG", "l'automatisation de l'analyse de données", "les assistants de connaissance alimentés par IA"],
      body2Connector: "et",
      body3: "Notre mission est d'aider les entreprises à transformer leurs données et leurs connaissances en systèmes intelligents — des outils pratiques qui fonctionnent de manière fiable en production.",
      values: [
        {
          title: "Exécution Ciblée",
          description: "Nous travaillons sur un petit nombre de projets IA à la fois pour livrer une ingénierie de haute qualité — pas des livrables précipités.",
        },
        {
          title: "L'Ingénierie d'Abord",
          description: "Chaque système IA que nous construisons commence par une conception d'architecture rigoureuse. Nous croyons que des fondations solides produisent des systèmes IA fiables.",
        },
        {
          title: "Une IA qui Fonctionne",
          description: "Notre objectif est des systèmes qui fonctionnent réellement en production. Nous construisons pour la fiabilité, pas seulement pour les démos — chaque projet est conçu pour durer.",
        },
      ],
    },
    contact: {
      sectionLabel: "Contactez-Nous",
      title1: "Commencez à Construire avec",
      title2: "Eligent AI",
      sub: "Vous avez un projet en tête ou voulez comprendre ce que l'IA peut faire pour votre entreprise ? Contactez-nous et nous vous répondrons rapidement.",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@email.com",
      messagePlaceholder: "Parlez-nous de votre projet ou de votre question...",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      submitBtn: "Envoyer le Message",
      sending: "Envoi en cours...",
      successTitle: "Message Envoyé !",
      successSub: "Merci de nous avoir contactés. Nous examinerons votre message et vous répondrons bientôt.",
      sendAnother: "Envoyer un autre message",
    },
    footer: {
      tagline: "Studio d'ingénierie IA construisant des systèmes intelligents pour les entreprises modernes.",
      navTitle: "Navigation",
      connectTitle: "Connexion",
      copyright: "Tous droits réservés.",
      backTop: "Retour en haut",
    },
  },
};
