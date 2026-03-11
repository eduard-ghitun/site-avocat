const services = [
  {
    id: 'consultanta-juridica',
    title: 'Consultanță juridică',
    summary:
      'Analiză juridică și recomandări aplicate pentru persoane fizice și companii.',
  },
  {
    id: 'drept-societar',
    title: 'Drept societar',
    summary:
      'Asistență pentru înființare, reorganizare, guvernanță corporativă și hotărâri AGA.',
  },
  {
    id: 'litigii-si-arbitraj',
    title: 'Litigii și arbitraj',
    summary:
      'Reprezentare în instanță și în proceduri arbitrale pentru dosare complexe.',
  },
  {
    id: 'dreptul-muncii',
    title: 'Dreptul muncii',
    summary:
      'Asistență în relații de muncă, conflicte individuale/colective și compliance HR.',
  },
]

const practiceAreas = [
  {
    id: 'drept-civil',
    title: 'Drept civil',
    summary: 'Contracte, răspundere civilă, despăgubiri și protecția patrimoniului.',
  },
  {
    id: 'drept-comercial',
    title: 'Drept comercial',
    summary: 'Relații comerciale, executare contractuală și recuperare creanțe.',
  },
  {
    id: 'contencios-administrativ',
    title: 'Contencios administrativ',
    summary: 'Acțiuni împotriva autorităților publice și contestarea actelor administrative.',
  },
  {
    id: 'insolventa-si-restructurare',
    title: 'Insolvență și restructurare',
    summary: 'Strategii pentru prevenție, reorganizare și reprezentare în proceduri de insolvență.',
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
