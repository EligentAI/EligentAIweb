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
      badge: "AI Engineering Studio · EligentAI",
      headline1: "We Build AI Systems That",
      headline2: "Answer, Automate & Analyze",
      headline3: "for Your Business — 24/7",
      sub: "Eligent AI (EligentAI) delivers production AI services: WhatsApp AI receptionist, custom AI agents, business automation, AI customer support, and analytics copilots. Fixed price. You own the code. Live demos at eligentai.com.",
      cta1: "See Live Demos",
      cta2: "Book a Free Strategy Call",
      scrollLabel: "Explore",
      features: [
        "Live in Weeks, Not Months",
        "Fixed-Price — No Surprises",
        "100% Code Ownership",
      ],
    },
    services: {
      sectionLabel: "What We Build",
      title: "AI Services & Systems We Build",
      sub: "AI agent development, automation, AI receptionist, and intelligent systems that connect AI reasoning with real business data — engineered by Eligent AI.",
      learnMore: "Learn more",
      items: [
        {
          title: "WhatsApp AI Receptionist",
          description:
            "A 24/7 AI receptionist on WhatsApp that answers every inquiry instantly, books appointments into your calendar, qualifies leads, and hands off to your team when needed. Built for clinics, salons, real estate, and local businesses.",
        },
        {
          title: "AI Customer Support Automation",
          description:
            "Intelligent support systems that understand customer inquiries, retrieve relevant knowledge, and generate accurate responses — resolving routine tickets automatically and escalating to humans only when needed.",
        },
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
          title: "AI Business Process Automation",
          description:
            "End-to-end workflow automation and AI process automation that connects AI reasoning with your business data, triggering actions, generating reports, and surfacing anomalies automatically.",
        },
        {
          title: "Custom AI Agents",
          description:
            "Purpose-built AI agents with tool-use capabilities — able to query databases, call APIs, analyze documents, and execute multi-step reasoning tasks autonomously for your business.",
        },
      ],
    },
    whatsapp: {
      sectionLabel: "Flagship Solution",
      statusBadge: "Launching soon · Early-access slots open",
      title1: "Your 24/7 AI Receptionist",
      title2: "on WhatsApp",
      sub: "Your customers already message you on WhatsApp — but nobody can reply around the clock. Your AI receptionist answers in seconds, books appointments, qualifies leads, and hands over to your team only when it matters.",
      bullets: [
        {
          title: "Replies in seconds, 24/7",
          desc: "Every inquiry answered instantly — nights, weekends, and holidays included.",
        },
        {
          title: "Books appointments automatically",
          desc: "Checks availability and confirms bookings directly into your calendar.",
        },
        {
          title: "Speaks your customer's language",
          desc: "English, Hindi, Spanish, French — the AI adapts to each customer automatically.",
        },
        {
          title: "Qualifies leads before you talk",
          desc: "Collects name, need, and budget so your team only handles serious inquiries.",
        },
        {
          title: "Human handoff when it matters",
          desc: "Complex or sensitive conversations are routed to your staff instantly.",
        },
      ],
      industriesLabel: "Built for",
      industries: ["Clinics & Hospitals", "Salons & Spas", "Real Estate", "Hotels & Travel", "Local Services", "E-commerce"],
      cta1: "Request a WhatsApp Demo",
      cta2: "Book a Free Call",
      chat: {
        businessName: "City Care Clinic",
        status: "online",
        msg1: "Hi! Do you have any appointment slots tomorrow morning?",
        msg2: "Good morning! 😊 Yes — Dr. Mehra has openings tomorrow at 9:30 AM and 11:00 AM. Which works better for you?",
        msg3: "11 AM please. Do you also accept insurance?",
        msg4: "Done — you're booked for tomorrow at 11:00 AM ✅ And yes, we accept all major insurance providers. Your confirmation is on its way!",
        footer: "AI Receptionist · replies in ~2 seconds",
      },
    },
    projects: {
      sectionLabel: "Our Work",
      title: "AI Agents & Production Systems",
      sub: "End-to-end AI services built by Eligent AI — AI front desk, support agents, analytics, and automation. Try the live demos yourself.",
      status: "Production",
      flagship: "Flagship Build",
      stackLabel: "Tech Stack",
      demo: {
        badge: "Live",
        title: "Try it right here",
        subtitle: "Real system · HimCity Hospital demo",
        hint: "This is the actual production AI — ask about timings, fees or doctors, or type 'book appointment'.",
        placeholder: "Ask the front desk anything…",
        chips: ["What are the OPD timings?", "Which insurance is accepted?", "Book an appointment"],
        error: "Connection hiccup — please try again in a moment.",
        noReply: "A staff member will reply in the live widget — try another question here!",
      },
      items: [
        {
          subtitle: "AI Receptionist for Clinics & Hospitals",
          description:
            "A multi-tenant AI front desk that answers patients 24/7 from the clinic's own knowledge base — no made-up answers — and books appointments against real doctor schedules right inside the chat. Staff get instant Telegram alerts and confirm with one tap; patients receive automatic email confirmations. One line of code installs it on any website — three live clinics run on it today.",
          features: [
            "24/7 patient chat, grounded in clinic docs",
            "In-chat booking with real time slots",
            "Instant staff alerts on Telegram",
            "One-tap confirm staff dashboard",
          ],
        },
        {
          subtitle: "AI Customer Support Platform",
          description:
            "Multi-tenant AI customer support platform that resolves queries end-to-end. A LangGraph-powered agent answers from your knowledge base, scores its own confidence in real time, and escalates to a human only when needed — with analytics and CSAT tracking built in.",
          features: [
            "LangGraph multi-step AI agent",
            "Real-time confidence scoring",
            "Smart human escalation",
            "Analytics & CSAT tracking",
          ],
        },
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
            "Support teams drown in repetitive questions. Customers wait hours for answers, agents burn out, and scaling support traditionally means hiring more people.",
            "A multi-tenant AI support platform. A LangGraph agent understands each query, answers from the company knowledge base, and self-scores its confidence — auto-resolving routine tickets and escalating edge cases to humans.",
            "LangGraph state machine orchestrating intent routing, RAG retrieval, response generation, and confidence scoring. FastAPI backend with JWT auth and role-based multi-tenant workspaces. Next.js dashboard with live analytics and CSAT tracking.",
            "Python · LangGraph · OpenAI API · FastAPI · Next.js · PostgreSQL · RAG",
            "Designed so routine queries get resolved in seconds, 24/7, while humans handle only the conversations that truly need them — support scales without new headcount, with deflection and CSAT metrics visible in real time.",
          ],
        },
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
      body1:
        "Eligent AI (also known as EligentAI, eligentai.com) is an AI engineering studio focused on AI services for modern businesses — from AI receptionist systems to full automation stacks.",
      body2Prefix: "We specialize in",
      body2Items: [
        "AI agents",
        "AI automation",
        "AI receptionist & WhatsApp AI",
        "RAG systems & knowledge assistants",
      ],
      body2Connector: "and",
      body3:
        "Our mission is to help companies turn data and knowledge into production AI systems — practical AI agents and automation that answer customers, book appointments, and run workflows reliably.",
      founderName: "Shadab Khan",
      founderRole: "Founder & AI Engineer",
      founderBio:
        "Every AI service project is architected, built, and shipped by the founder directly — one point of contact, full accountability, no handoffs.",
      founderCta: "Connect on LinkedIn",
      values: [
        {
          title: "Focused Execution",
          description:
            "We work on a small number of AI projects at a time to deliver focused, high-quality engineering — not rushed deliverables.",
        },
        {
          title: "Engineering First",
          description:
            "Every AI agent and automation system starts with rigorous architecture. Robust foundations produce reliable AI services in production.",
        },
        {
          title: "AI That Works",
          description:
            "Our goal is systems that actually run in production. We build AI receptionist, support, and agent systems for reliability — not just demos.",
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
      tagline:
        "Eligent AI (EligentAI) — AI services, AI agents, automation, and WhatsApp AI receptionist systems for modern businesses. eligentai.com",
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
      headline1: "Creamos Sistemas de IA que",
      headline2: "Responden, Automatizan y Analizan",
      headline3: "para tu Negocio — 24/7",
      sub: "Desde recepcionistas IA en WhatsApp hasta automatización de soporte al cliente y copilotos de análisis — diseñamos, construimos y desplegamos sistemas de IA en producción. Precio fijo. El código es tuyo.",
      cta1: "Ver Demos en Vivo",
      cta2: "Reserva una Llamada Gratis",
      scrollLabel: "Explorar",
      features: [
        "En Producción en Semanas",
        "Precio Fijo — Sin Sorpresas",
        "100% Propiedad del Código",
      ],
    },
    services: {
      sectionLabel: "Lo Que Construimos",
      title: "Sistemas de IA que Construimos",
      sub: "Ingeniería enfocada en sistemas inteligentes que conectan el razonamiento de IA con datos empresariales reales.",
      learnMore: "Saber más",
      items: [
        {
          title: "Recepcionista IA en WhatsApp",
          description:
            "Un recepcionista IA en WhatsApp 24/7 que responde cada consulta al instante, agenda citas en tu calendario, califica leads y transfiere a tu equipo cuando es necesario. Ideal para clínicas, salones, inmobiliarias y negocios locales.",
        },
        {
          title: "Automatización de Soporte al Cliente",
          description:
            "Sistemas de soporte inteligente que comprenden las consultas de los clientes, recuperan conocimiento relevante y generan respuestas precisas — resolviendo tickets rutinarios automáticamente y escalando a humanos solo cuando es necesario.",
        },
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
    whatsapp: {
      sectionLabel: "Solución Estrella",
      statusBadge: "Lanzamiento próximo · Acceso anticipado disponible",
      title1: "Tu Recepcionista IA 24/7",
      title2: "en WhatsApp",
      sub: "Tus clientes ya te escriben por WhatsApp — pero nadie puede responder a toda hora. Tu recepcionista IA responde en segundos, agenda citas, califica leads y transfiere a tu equipo solo cuando importa.",
      bullets: [
        {
          title: "Responde en segundos, 24/7",
          desc: "Cada consulta respondida al instante — noches, fines de semana y festivos incluidos.",
        },
        {
          title: "Agenda citas automáticamente",
          desc: "Verifica disponibilidad y confirma reservas directamente en tu calendario.",
        },
        {
          title: "Habla el idioma de tu cliente",
          desc: "Español, inglés, hindi, francés — la IA se adapta a cada cliente automáticamente.",
        },
        {
          title: "Califica leads antes de hablar",
          desc: "Recopila nombre, necesidad y presupuesto para que tu equipo solo atienda consultas serias.",
        },
        {
          title: "Transferencia humana cuando importa",
          desc: "Las conversaciones complejas o sensibles se dirigen a tu personal al instante.",
        },
      ],
      industriesLabel: "Diseñado para",
      industries: ["Clínicas y Hospitales", "Salones y Spas", "Inmobiliarias", "Hoteles y Viajes", "Servicios Locales", "E-commerce"],
      cta1: "Solicita una Demo en WhatsApp",
      cta2: "Reserva una Llamada Gratis",
      chat: {
        businessName: "Clínica City Care",
        status: "en línea",
        msg1: "¡Hola! ¿Tienen citas disponibles mañana por la mañana?",
        msg2: "¡Buenos días! 😊 Sí — el Dr. Mehra tiene espacios mañana a las 9:30 y a las 11:00. ¿Cuál te conviene más?",
        msg3: "A las 11 por favor. ¿También aceptan seguro médico?",
        msg4: "¡Listo! Tu cita quedó agendada para mañana a las 11:00 ✅ Y sí, aceptamos las principales aseguradoras. ¡Tu confirmación está en camino!",
        footer: "Recepcionista IA · responde en ~2 segundos",
      },
    },
    projects: {
      sectionLabel: "Nuestro Trabajo",
      title: "Nuestros Sistemas de IA",
      sub: "Sistemas de IA de extremo a extremo construidos y desplegados para necesidades empresariales reales — prueba las demos en vivo.",
      status: "Producción",
      flagship: "Proyecto Insignia",
      stackLabel: "Tecnologías",
      demo: {
        badge: "En vivo",
        title: "Pruébalo aquí mismo",
        subtitle: "Sistema real · Demo HimCity Hospital",
        hint: "Esta es la IA de producción real — pregunta por horarios, tarifas o médicos, o escribe 'book appointment'.",
        placeholder: "Pregunta lo que quieras…",
        chips: ["What are the OPD timings?", "Which insurance is accepted?", "Book an appointment"],
        error: "Problema de conexión — inténtalo de nuevo en un momento.",
        noReply: "Un miembro del personal responderá en el widget en vivo — ¡prueba otra pregunta aquí!",
      },
      items: [
        {
          subtitle: "Recepcionista IA para Clínicas y Hospitales",
          description:
            "Una recepción con IA multi-tenant que responde a los pacientes 24/7 desde la base de conocimiento de la clínica — sin respuestas inventadas — y reserva citas con los horarios reales de los médicos dentro del chat. El personal recibe alertas instantáneas por Telegram y confirma con un clic; los pacientes reciben confirmaciones automáticas por correo. Una línea de código lo instala en cualquier web — hoy funciona en tres clínicas en vivo.",
          features: [
            "Chat de pacientes 24/7, basado en documentos",
            "Reservas en el chat con horarios reales",
            "Alertas instantáneas por Telegram",
            "Panel del personal: confirmar en un clic",
          ],
        },
        {
          subtitle: "Plataforma de Soporte al Cliente con IA",
          description:
            "Plataforma multi-tenant de soporte al cliente con IA que resuelve consultas de extremo a extremo. Un agente impulsado por LangGraph responde desde tu base de conocimiento, evalúa su propia confianza en tiempo real y escala a un humano solo cuando es necesario — con análisis y seguimiento de CSAT integrados.",
          features: [
            "Agente IA multi-paso con LangGraph",
            "Puntuación de confianza en tiempo real",
            "Escalación inteligente a humanos",
            "Análisis y seguimiento CSAT",
          ],
        },
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
            "Los equipos de soporte se ahogan en preguntas repetitivas. Los clientes esperan horas por respuestas, los agentes se agotan y escalar el soporte tradicionalmente significa contratar más personal.",
            "Una plataforma de soporte IA multi-tenant. Un agente LangGraph entiende cada consulta, responde desde la base de conocimiento de la empresa y evalúa su propia confianza — resolviendo tickets rutinarios automáticamente y escalando casos límite a humanos.",
            "Máquina de estados LangGraph que orquesta enrutamiento de intención, recuperación RAG, generación de respuestas y puntuación de confianza. Backend FastAPI con autenticación JWT y espacios multi-tenant basados en roles. Dashboard Next.js con análisis en vivo y seguimiento CSAT.",
            "Python · LangGraph · OpenAI API · FastAPI · Next.js · PostgreSQL · RAG",
            "Diseñado para que las consultas rutinarias se resuelvan en segundos, 24/7, mientras los humanos atienden solo las conversaciones que realmente los necesitan — el soporte escala sin contratar más personal, con métricas de deflección y CSAT visibles en tiempo real.",
          ],
        },
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
      founderName: "Shadab Khan",
      founderRole: "Fundador e Ingeniero de IA",
      founderBio: "Cada proyecto es diseñado, construido y entregado directamente por el fundador — un solo punto de contacto, responsabilidad total, sin intermediarios.",
      founderCta: "Conectar en LinkedIn",
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
      tagline: "Estudio de ingeniería de IA que construye recepcionistas IA en WhatsApp, automatización de soporte al cliente y sistemas de IA a medida para empresas modernas.",
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
      headline1: "Nous Créons des Systèmes IA qui",
      headline2: "Répondent, Automatisent & Analysent",
      headline3: "pour Votre Entreprise — 24/7",
      sub: "Des réceptionnistes IA sur WhatsApp à l'automatisation du support client et aux copilotes d'analyse — nous concevons, construisons et déployons des systèmes IA en production. Prix fixe. Le code vous appartient.",
      cta1: "Voir les Démos en Direct",
      cta2: "Réserver un Appel Gratuit",
      scrollLabel: "Explorer",
      features: [
        "En Production en Semaines",
        "Prix Fixe — Sans Surprises",
        "100% Propriété du Code",
      ],
    },
    services: {
      sectionLabel: "Ce que Nous Construisons",
      title: "Systèmes IA que Nous Construisons",
      sub: "Ingénierie ciblée sur des systèmes intelligents qui connectent le raisonnement IA aux données métier réelles.",
      learnMore: "En savoir plus",
      items: [
        {
          title: "Réceptionniste IA sur WhatsApp",
          description:
            "Un réceptionniste IA sur WhatsApp 24/7 qui répond instantanément à chaque demande, réserve des rendez-vous dans votre calendrier, qualifie les prospects et transfère à votre équipe si nécessaire. Idéal pour cliniques, salons, immobilier et commerces locaux.",
        },
        {
          title: "Automatisation du Support Client IA",
          description:
            "Systèmes de support intelligents qui comprennent les demandes des clients, récupèrent les connaissances pertinentes et génèrent des réponses précises — résolvant automatiquement les tickets courants et escaladant vers un humain uniquement si nécessaire.",
        },
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
    whatsapp: {
      sectionLabel: "Solution Phare",
      statusBadge: "Lancement imminent · Accès anticipé ouvert",
      title1: "Votre Réceptionniste IA 24/7",
      title2: "sur WhatsApp",
      sub: "Vos clients vous écrivent déjà sur WhatsApp — mais personne ne peut répondre à toute heure. Votre réceptionniste IA répond en quelques secondes, réserve des rendez-vous, qualifie les prospects et transfère à votre équipe seulement quand c'est important.",
      bullets: [
        {
          title: "Répond en secondes, 24/7",
          desc: "Chaque demande traitée instantanément — nuits, week-ends et jours fériés inclus.",
        },
        {
          title: "Réserve les rendez-vous automatiquement",
          desc: "Vérifie les disponibilités et confirme les réservations directement dans votre calendrier.",
        },
        {
          title: "Parle la langue de votre client",
          desc: "Français, anglais, espagnol, hindi — l'IA s'adapte automatiquement à chaque client.",
        },
        {
          title: "Qualifie les prospects avant l'échange",
          desc: "Recueille nom, besoin et budget pour que votre équipe ne traite que les demandes sérieuses.",
        },
        {
          title: "Transfert humain quand c'est important",
          desc: "Les conversations complexes ou sensibles sont dirigées vers votre personnel instantanément.",
        },
      ],
      industriesLabel: "Conçu pour",
      industries: ["Cliniques & Hôpitaux", "Salons & Spas", "Immobilier", "Hôtels & Voyages", "Services Locaux", "E-commerce"],
      cta1: "Demander une Démo WhatsApp",
      cta2: "Réserver un Appel Gratuit",
      chat: {
        businessName: "Clinique City Care",
        status: "en ligne",
        msg1: "Bonjour ! Avez-vous des créneaux disponibles demain matin ?",
        msg2: "Bonjour ! 😊 Oui — le Dr Mehra a des disponibilités demain à 9h30 et 11h00. Lequel vous convient le mieux ?",
        msg3: "11h s'il vous plaît. Acceptez-vous aussi les assurances ?",
        msg4: "C'est fait — vous êtes réservé pour demain à 11h00 ✅ Et oui, nous acceptons les principales assurances. Votre confirmation arrive !",
        footer: "Réceptionniste IA · répond en ~2 secondes",
      },
    },
    projects: {
      sectionLabel: "Notre Travail",
      title: "Nos Systèmes IA",
      sub: "Systèmes IA de bout en bout construits et déployés pour de vrais besoins métier — essayez les démos en direct.",
      status: "Production",
      flagship: "Projet Phare",
      stackLabel: "Technologies",
      items: [
        {
          subtitle: "Plateforme IA de Support Client",
          description:
            "Plateforme multi-tenant de support client IA qui résout les demandes de bout en bout. Un agent propulsé par LangGraph répond depuis votre base de connaissances, évalue sa propre confiance en temps réel et escalade vers un humain uniquement si nécessaire — avec analyses et suivi CSAT intégrés.",
          features: [
            "Agent IA multi-étapes LangGraph",
            "Score de confiance en temps réel",
            "Escalade humaine intelligente",
            "Analyses & suivi CSAT",
          ],
        },
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
            "Les équipes de support croulent sous les questions répétitives. Les clients attendent des heures, les agents s'épuisent, et faire évoluer le support signifie traditionnellement embaucher davantage.",
            "Une plateforme de support IA multi-tenant. Un agent LangGraph comprend chaque demande, répond depuis la base de connaissances de l'entreprise et évalue sa propre confiance — résolvant automatiquement les tickets courants et escaladant les cas limites vers des humains.",
            "Machine à états LangGraph orchestrant le routage d'intention, la récupération RAG, la génération de réponses et le score de confiance. Backend FastAPI avec authentification JWT et espaces multi-tenant basés sur les rôles. Dashboard Next.js avec analyses en direct et suivi CSAT.",
            "Python · LangGraph · OpenAI API · FastAPI · Next.js · PostgreSQL · RAG",
            "Conçu pour que les demandes courantes soient résolues en quelques secondes, 24/7, tandis que les humains ne traitent que les conversations qui les nécessitent vraiment — le support évolue sans embauche supplémentaire, avec métriques de déflexion et CSAT visibles en temps réel.",
          ],
        },
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
      founderName: "Shadab Khan",
      founderRole: "Fondateur & Ingénieur IA",
      founderBio: "Chaque projet est conçu, construit et livré directement par le fondateur — un seul interlocuteur, une responsabilité totale, sans intermédiaires.",
      founderCta: "Se connecter sur LinkedIn",
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
      tagline: "Studio d'ingénierie IA construisant des réceptionnistes IA sur WhatsApp, l'automatisation du support client et des systèmes IA sur mesure pour les entreprises modernes.",
      navTitle: "Navigation",
      connectTitle: "Connexion",
      copyright: "Tous droits réservés.",
      backTop: "Retour en haut",
    },
  },
};
