// ===== Internationalization (PT-BR / EN) =====
const LANG = {
  pt: {
    // Navbar
    'nav.about': 'Sobre',
    'nav.skills': 'Skills',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Hero
    'hero.label': 'Disponivel para trabalho remoto',
    'hero.desc': 'Engenheiro de Software com mais de 15 anos de experiencia em C# e .NET. Especialista em backend, APIs REST, sistemas distribuidos e modernizacao de sistemas legados.',
    'hero.btn.projects': 'Ver Projetos \u2193',

    // About
    'about.title': 'Sobre mim',
    'about.subtitle': 'Quem sou eu e o que me motiva',
    'about.p1': 'Trabalho com <strong>C# e .NET ha mais de 15 anos</strong> &mdash; e sinceramente, ainda gosto do que faco. Nos ultimos 7 anos atuei como senior na <strong>Questrade</strong>, onde desenvolvi aplicacoes bancarias, APIs RESTful, sistemas de processamento de dados com SQL Server e contribui para a automacao de deploys com Jenkins, Docker e Git.',
    'about.p2': 'Antes disso, construi <strong>ERPs com arquitetura DDD</strong> e plataformas de gestao de pessoas com Angular e ASP.NET. Entrar em um sistema legado, entender o que funciona, o que precisa evoluir e tracar um caminho viavel de modernizacao e algo que me motiva.',
    'about.p3': 'Sou forte em <strong>.NET/C#, SQL Server, arquiteturas distribuidas, microsservicos e praticas de DevOps</strong>. Gosto de trabalhar colaborativamente, com troca de conhecimento e foco em evolucao continua.',
    'about.info.title': 'Informacoes',
    'about.info.name.label': 'Nome',
    'about.info.name.value': 'Rafael Veneroso Morici',
    'about.info.location.label': 'Localizacao',
    'about.info.location.value': 'Belo Horizonte, MG',
    'about.info.exp.label': 'Experiencia',
    'about.info.exp.value': '+15 anos com .NET',
    'about.info.role.label': 'Ultimo cargo',
    'about.info.role.value': 'Senior @ Questrade',
    'about.info.edu.label': 'Formacao',
    'about.info.edu.value': 'SI - Inforium (2009)',
    'about.info.lang.label': 'Idiomas',
    'about.info.lang.value': 'PT nativo, EN B2',
    'about.info.cert.label': 'Certificacao',
    'about.info.cert.value': 'MS Exam 480 (HTML5/JS/CSS3)',
    'about.info.avail.label': 'Disponibilidade',
    'about.info.avail.value': '100% Remoto',

    // Skills
    'skills.title': 'Competencias Tecnicas',
    'skills.subtitle': 'Tecnologias e ferramentas que domino',
    'skills.cat1': 'Linguagens & Frameworks',
    'skills.cat2': 'Bancos de Dados',
    'skills.cat3': 'Arquitetura & Padroes',
    'skills.cat4': 'DevOps & Cloud',
    'skills.cat5': 'Testes & Qualidade',
    'skills.cat6': 'Observabilidade & Metodologias',

    // Experience
    'exp.title': 'Experiencia Profissional',
    'exp.subtitle': 'Minha trajetoria de mais de 15 anos',
    'exp.q.title': 'Engenheiro de Software Senior',
    'exp.q.li1': 'Desenvolvimento de aplicacoes web corporativas e servicos backend com C#, ASP.NET Core e CMS Sitefinity para operacoes bancarias',
    'exp.q.li2': 'APIs RESTful para integracao de sistemas internos e automacao de fluxos de trabalho',
    'exp.q.li3': 'Gerenciamento e otimizacao de sistemas de afiliados com processamento e relatorios confiaveis',
    'exp.q.li4': 'Queries e stored procedures no SQL Server para extracao, transformacao e relatorios de dados',
    'exp.q.li5': 'Code reviews, mentoria de desenvolvedores juniores e padroes de codificacao',
    'exp.q.li6': 'Melhorias em pipelines CI/CD e automacao de deploy com Jenkins e Git',
    'exp.m.title': 'Engenheiro de Software',
    'exp.m.li1': 'Plataforma de gestao de pessoas com C#, ASP.NET, Angular 2 e SQL Server',
    'exp.m.li2': 'Backend APIs REST com acompanhamento de performance e analytics de RH',
    'exp.m.li3': 'Testes unitarios e de integracao para garantir confiabilidade',
    'exp.m.li4': 'Equipe agil/Scrum com planejamento de sprints e daily meetings',
    'exp.e.title': 'Engenheiro de Software Pleno',
    'exp.e.li1': 'Sistema ERP corporativo completo com C#, WPF (desktop) e ASP.NET Web Forms + WCF',
    'exp.e.li2': 'Domain-Driven Design (DDD) para modelar dominios de negocio complexos',
    'exp.e.li3': 'Pipelines de validacao e processamento de dados entre modulos',
    'exp.e.li4': 'Scripts SQL customizados para transformacao e ingestao de dados de multiplas fontes',

    // Projects
    'projects.title': 'Projetos do Portfolio',
    'projects.subtitle': '9 projetos .NET 10 demonstrando diferentes tecnologias',
    'projects.tests.total': '296 testes no total',
    'projects.tests': 'testes',

    // Contact
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos conversar?',
    'contact.phone': 'Telefone',

    // Project detail page
    'detail.home': 'Home',
    'detail.projects': 'Projetos',
    'detail.description': 'Descricao',
    'detail.features': 'Funcionalidades',
    'detail.endpoints': 'Endpoints da API',
    'detail.th.method': 'Metodo',
    'detail.th.route': 'Rota',
    'detail.th.desc': 'Descricao',
    'detail.technologies': 'Tecnologias',
    'detail.patterns': 'Padroes & Arquitetura',
    'detail.tests': 'Testes',
    'detail.tests.label': 'testes automatizados',
    'detail.github': 'Ver no GitHub',
    'detail.demo': 'Live Demo'
  },

  en: {
    // Navbar
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.label': 'Available for remote work',
    'hero.desc': 'Software Engineer with 15+ years of experience in C# and .NET. Specialist in backend, REST APIs, distributed systems and legacy system modernization.',
    'hero.btn.projects': 'View Projects \u2193',

    // About
    'about.title': 'About me',
    'about.subtitle': 'Who I am and what drives me',
    'about.p1': 'I\'ve been working with <strong>C# and .NET for over 15 years</strong> &mdash; and honestly, I still love what I do. For the past 7 years I worked as a senior at <strong>Questrade</strong>, where I built banking applications, RESTful APIs, data processing systems with SQL Server and contributed to deploy automation with Jenkins, Docker and Git.',
    'about.p2': 'Before that, I built <strong>ERPs with DDD architecture</strong> and people management platforms with Angular and ASP.NET. Getting into a legacy system, understanding what works, what needs to evolve and charting a viable modernization path is something that drives me.',
    'about.p3': 'My strengths are <strong>.NET/C#, SQL Server, distributed architectures, microservices and DevOps practices</strong>. I enjoy working collaboratively, sharing knowledge and focusing on continuous improvement.',
    'about.info.title': 'Information',
    'about.info.name.label': 'Name',
    'about.info.name.value': 'Rafael Veneroso Morici',
    'about.info.location.label': 'Location',
    'about.info.location.value': 'Belo Horizonte, MG',
    'about.info.exp.label': 'Experience',
    'about.info.exp.value': '15+ years with .NET',
    'about.info.role.label': 'Last role',
    'about.info.role.value': 'Senior @ Questrade',
    'about.info.edu.label': 'Education',
    'about.info.edu.value': 'IS - Inforium (2009)',
    'about.info.lang.label': 'Languages',
    'about.info.lang.value': 'PT native, EN B2',
    'about.info.cert.label': 'Certification',
    'about.info.cert.value': 'MS Exam 480 (HTML5/JS/CSS3)',
    'about.info.avail.label': 'Availability',
    'about.info.avail.value': '100% Remote',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I master',
    'skills.cat1': 'Languages & Frameworks',
    'skills.cat2': 'Databases',
    'skills.cat3': 'Architecture & Patterns',
    'skills.cat4': 'DevOps & Cloud',
    'skills.cat5': 'Testing & Quality',
    'skills.cat6': 'Observability & Methodologies',

    // Experience
    'exp.title': 'Professional Experience',
    'exp.subtitle': 'My 15+ year journey',
    'exp.q.title': 'Senior Software Engineer',
    'exp.q.li1': 'Corporate web applications and backend services with C#, ASP.NET Core and Sitefinity CMS for banking operations',
    'exp.q.li2': 'RESTful APIs for internal systems integration and workflow automation',
    'exp.q.li3': 'Affiliate systems management and optimization with reliable processing and reporting',
    'exp.q.li4': 'SQL Server queries and stored procedures for data extraction, transformation and reporting',
    'exp.q.li5': 'Code reviews, junior developer mentoring and coding standards',
    'exp.q.li6': 'CI/CD pipeline improvements and deploy automation with Jenkins and Git',
    'exp.m.title': 'Software Engineer',
    'exp.m.li1': 'People management platform with C#, ASP.NET, Angular 2 and SQL Server',
    'exp.m.li2': 'Backend REST APIs with performance tracking and HR analytics',
    'exp.m.li3': 'Unit and integration tests to ensure reliability',
    'exp.m.li4': 'Agile/Scrum team with sprint planning and daily meetings',
    'exp.e.title': 'Mid-Level Software Engineer',
    'exp.e.li1': 'Full corporate ERP system with C#, WPF (desktop) and ASP.NET Web Forms + WCF',
    'exp.e.li2': 'Domain-Driven Design (DDD) for modeling complex business domains',
    'exp.e.li3': 'Data validation and processing pipelines between modules',
    'exp.e.li4': 'Custom SQL scripts for data transformation and ingestion from multiple sources',

    // Projects
    'projects.title': 'Portfolio Projects',
    'projects.subtitle': '9 .NET 10 projects showcasing different technologies',
    'projects.tests.total': '296 tests in total',
    'projects.tests': 'tests',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s talk?',
    'contact.phone': 'Phone',

    // Project detail page
    'detail.home': 'Home',
    'detail.projects': 'Projects',
    'detail.description': 'Description',
    'detail.features': 'Features',
    'detail.endpoints': 'API Endpoints',
    'detail.th.method': 'Method',
    'detail.th.route': 'Route',
    'detail.th.desc': 'Description',
    'detail.technologies': 'Technologies',
    'detail.patterns': 'Patterns & Architecture',
    'detail.tests': 'Tests',
    'detail.tests.label': 'automated tests',
    'detail.github': 'View on GitHub',
    'detail.demo': 'Live Demo'
  }
};

// ===== Engine =====
let currentLang = localStorage.getItem('lang') || 'pt';

function t(key) {
  return LANG[currentLang]?.[key] || LANG.pt[key] || key;
}

function projectField(project, field) {
  const enKey = field + '_en';
  return (currentLang === 'en' && project[enKey] !== undefined) ? project[enKey] : project[field];
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );
  applyTranslations();
  document.dispatchEvent(new CustomEvent('langchange'));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  applyTranslations();
});
