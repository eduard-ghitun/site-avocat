const services = [
  {
    id: 'consultanta-juridica',
    title: 'Consultanță juridică',
    summary: 'Analiză juridică și recomandări aplicate pentru persoane fizice și companii.',
    shortText:
      'Punem accent pe claritate, evaluare realistă a riscurilor și pași concreți, astfel încât fiecare decizie juridică să fie luată informat și eficient.',
    details: [
      'analiză juridică inițială și strategie personalizată',
      'opinii legale clare și aplicate',
      'identificarea riscurilor și a opțiunilor disponibile',
      'plan de acțiune adaptat speței',
    ],
  },
  {
    id: 'contracte-si-documente',
    title: 'Contracte și documente',
    summary: 'Redactare și revizuire de contracte și documente juridice relevante.',
    shortText:
      'Ne concentrăm pe protejarea intereselor clientului prin clauze bine structurate, formulări clare și prevenirea vulnerabilităților care pot genera litigii ulterior.',
    details: [
      'redactare și revizuire contracte',
      'verificarea clauzelor sensibile și a obligațiilor asumate',
      'adaptarea documentelor la tranzacție sau relația juridică',
      'reducerea riscurilor contractuale și operaționale',
    ],
  },
  {
    id: 'reprezentare-in-instanta',
    title: 'Reprezentare în instanță',
    summary: 'Reprezentare procedurală în fața instanțelor și autorităților competente.',
    shortText:
      'Construim apărarea sau pretențiile într-o manieră riguroasă, cu atenție la probatoriu, termene și poziționarea strategică a clientului pe tot parcursul dosarului.',
    details: [
      'redactare cereri, întâmpinări și căi de atac',
      'pregătirea strategiei procesuale',
      'reprezentare la termenele de judecată',
      'urmărirea etapelor procedurale și a probatoriului',
    ],
  },
  {
    id: 'asistenta-negocieri',
    title: 'Asistență în negocieri',
    summary: 'Negocieri orientate spre soluții eficiente și protejarea intereselor clientului.',
    shortText:
      'Intervenim în negocieri cu o abordare fermă și echilibrată, orientată spre soluții sustenabile, reducerea costurilor unui litigiu și obținerea unor termeni favorabili.',
    details: [
      'pregătirea poziției de negociere și a argumentelor',
      'asistență în discuții și întâlniri cu partea adversă',
      'structurarea ofertelor și contrapropunerilor',
      'formalizarea acordului rezultat din negociere',
    ],
  },
]

const practiceAreas = [
  {
    id: 'drept-civil',
    title: 'Drept civil',
    summary: 'Contracte, pretenții, despăgubiri și litigii patrimoniale.',
    shortText:
      'Oferim consultanță și reprezentare în litigii civile, redactarea și analiza contractelor, precum și în dosare ce vizează protecția patrimoniului, răspunderea civilă și recuperarea prejudiciilor.',
    details: [
      'consultanță juridică și opinii legale',
      'redactare și analiză contracte',
      'litigii civile și pretenții',
      'răspundere civilă contractuală și delictuală',
      'despăgubiri și recuperarea prejudiciilor',
    ],
  },
  {
    id: 'drept-comercial',
    title: 'Drept comercial',
    summary: 'Contracte comerciale, raporturi între profesioniști și recuperare creanțe.',
    shortText:
      'Sprijinim antreprenorii și companiile în relațiile comerciale curente, de la structurarea documentației contractuale până la gestionarea disputelor privind executarea obligațiilor sau recuperarea creanțelor.',
    details: [
      'consultanță juridică pentru societăți',
      'negociere, redactare și revizuire contracte comerciale',
      'recuperări creanțe și notificări',
      'litigii între profesioniști',
      'prevenirea riscurilor comerciale',
    ],
  },
  {
    id: 'drept-penal',
    title: 'Drept penal',
    summary: 'Asistență și reprezentare în urmărirea penală și în instanță.',
    shortText:
      'Asigurăm asistență juridică promptă în dosare penale, de la primele acte procedurale până la reprezentarea în instanță, cu accent pe strategie, discreție și protejarea drepturilor clientului.',
    details: [
      'asistență și reprezentare în cauze penale',
      'consultanță în faza de urmărire penală',
      'pregătirea apărării și strategie procedurală',
      'reprezentare în fața instanțelor',
      'formularea căilor de atac',
    ],
  },
  {
    id: 'dreptul-muncii',
    title: 'Dreptul muncii',
    summary: 'Concedieri, conflicte de muncă și protecția drepturilor salariale.',
    shortText:
      'Acordăm asistență atât angajaților, cât și angajatorilor în litigii și proceduri specifice raporturilor de muncă, cu soluții clare pentru documentație, conformare și reprezentare în instanță.',
    details: [
      'conflicte individuale și colective de muncă',
      'contestarea concedierilor și sancțiunilor',
      'contracte individuale de muncă și clauze speciale',
      'drepturi salariale și ore suplimentare',
      'consiliere pentru angajatori și salariați',
    ],
  },
  {
    id: 'drept-administrativ',
    title: 'Drept administrativ',
    summary: 'Anularea actelor administrative și litigii cu autorități publice.',
    shortText:
      'Reprezentăm clienții în raporturile cu autoritățile publice, în acțiuni de anulare a actelor administrative și în litigii privind refuzuri nejustificate, obligații legale sau sancțiuni administrative.',
    details: [
      'contencios administrativ',
      'anularea actelor administrative',
      'litigii cu autorități și instituții publice',
      'plângeri prealabile și proceduri administrative',
      'suspendarea executării actelor administrative',
    ],
  },
  {
    id: 'dreptul-familiei',
    title: 'Dreptul familiei',
    summary: 'Divorț, partaj, autoritate părintească și raporturi juridice de familie.',
    shortText:
      'Oferim asistență juridică în cauze sensibile de dreptul familiei, cu atenție la echilibru, discreție și protejarea intereselor personale și patrimoniale ale clientului.',
    details: [
      'divorț și separare',
      'partaj bunuri comune',
      'stabilirea autorității părintești',
      'program de legături personale cu minorul',
      'pensie de întreținere și alte obligații familiale',
    ],
  },
]

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'M. Radu',
    role: 'Administrator companie',
    quote:
      'Am apreciat abordarea strategică și comunicarea clară pe durata întregului litigiu.',
  },
  {
    id: 'testimonial-2',
    name: 'A. Georgescu',
    role: 'Client persoană fizică',
    quote:
      'Consultanță promptă și o reprezentare profesionistă care a dus la o soluție favorabilă.',
  },
  {
    id: 'testimonial-3',
    name: 'D. Popa',
    role: 'Director financiar',
    quote:
      'Echipă riguroasă, orientată pe rezultate și foarte bine pregătită în negocieri contractuale.',
  },
]

const faqs = [
  {
    id: 'faq-1',
    question: 'Cum decurge prima consultație?',
    answer:
      'În prima întâlnire analizăm situația juridică, documentele disponibile și opțiunile legale.',
  },
  {
    id: 'faq-2',
    question: 'Cum se stabilește onorariul?',
    answer:
      'Onorariul este stabilit transparent, în funcție de complexitatea și durata estimată a dosarului.',
  },
  {
    id: 'faq-3',
    question: 'Oferiți consultanță online?',
    answer:
      'Da, consultanța poate fi oferită și online, în special pentru analiză inițială și opinii juridice.',
  },
]

const blogPosts = [
  {
    id: 'post-1',
    slug: 'cum-eviti-riscurile-in-contracte-comerciale',
    title: 'Cum eviți riscurile în contracte comerciale',
    excerpt:
      'Clauze esențiale pe care le poți negocia pentru a reduce riscurile juridice și financiare.',
    publishedAt: '2026-02-20',
    category: 'Drept comercial',
  },
  {
    id: 'post-2',
    slug: 'noutati-in-dreptul-muncii-2026',
    title: 'Noutăți în dreptul muncii în 2026',
    excerpt:
      'Schimbări legislative importante pentru angajatori și angajați, explicate pe scurt.',
    publishedAt: '2026-01-15',
    category: 'Dreptul muncii',
  },
  {
    id: 'post-3',
    slug: 'contestatia-la-executare-ghid-practic',
    title: 'Contestația la executare: ghid practic',
    excerpt:
      'Când poate fi formulată, ce documente sunt necesare și ce termene trebuie respectate.',
    publishedAt: '2025-12-10',
    category: 'Drept civil',
  },
]

export const getAllServices = () => [...services]
export const getAllPracticeAreas = () => [...practiceAreas]
export const getAllTestimonials = () => [...testimonials]
export const getAllFaqs = () => [...faqs]
export const getAllBlogPosts = () => [...blogPosts]
