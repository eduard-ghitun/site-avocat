import practice1 from '@/assets/images/practice/avocat-drept-civil-bucuresti.jpg'
import practice2 from '@/assets/images/practice/avocat-drept-comercial-bucuresti.jpg'
import practice3 from '@/assets/images/practice/avocat-dreptul-muncii-bucuresti.jpg'
import practice4 from '@/assets/images/practice/avocat-executari-silite-bucuresti.jpg'

export const practiceAreas = [
  {
    id: 'drept-civil',
    title: 'Drept civil',
    summary:
      'Contracte, pretenții, despăgubiri și litigii patrimoniale pentru persoane fizice și companii.',
    shortText:
      'Oferim consultanță și reprezentare în litigii civile, redactarea și analiza contractelor, precum și în dosare ce vizează protecția patrimoniului, răspunderea civilă și recuperarea prejudiciilor.',
    details: [
      'consultanță juridică și opinii legale',
      'redactare și analiză contracte',
      'litigii civile și pretenții',
      'răspundere civilă contractuală și delictuală',
      'despăgubiri și recuperarea prejudiciilor',
    ],
    image: practice1,
  },
  {
    id: 'drept-comercial',
    title: 'Drept comercial',
    summary:
      'Asistență pentru societăți, contracte comerciale și litigii între profesioniști.',
    shortText:
      'Sprijinim antreprenorii și companiile în relațiile comerciale curente, de la structurarea documentației contractuale până la gestionarea disputelor privind executarea obligațiilor sau recuperarea creanțelor.',
    details: [
      'consultanță juridică pentru societăți',
      'negociere, redactare și revizuire contracte comerciale',
      'recuperări creanțe și notificări',
      'litigii între profesioniști',
      'prevenirea riscurilor comerciale',
    ],
    image: practice2,
  },
  {
    id: 'drept-penal',
    title: 'Drept penal',
    summary:
      'Asistență și reprezentare în faza de urmărire penală și apărare în fața instanțelor.',
    shortText:
      'Asigurăm asistență juridică promptă în dosare penale, de la primele acte procedurale până la reprezentarea în instanță, cu accent pe strategie, discreție și protejarea drepturilor clientului.',
    details: [
      'asistență și reprezentare în cauze penale',
      'consultanță în faza de urmărire penală',
      'pregătirea apărării și strategie procedurală',
      'reprezentare în fața instanțelor',
      'formularea căilor de atac',
    ],
    image: practice4,
  },
  {
    id: 'dreptul-muncii',
    title: 'Dreptul muncii',
    summary:
      'Conflicte de muncă, concedieri, contracte individuale și protecția drepturilor salariale.',
    shortText:
      'Acordăm asistență atât angajaților, cât și angajatorilor în litigii și proceduri specifice raporturilor de muncă, cu soluții clare pentru documentație, conformare și reprezentare în instanță.',
    details: [
      'conflicte individuale și colective de muncă',
      'contestarea concedierilor și sancțiunilor',
      'contracte individuale de muncă și clauze speciale',
      'drepturi salariale și ore suplimentare',
      'consiliere pentru angajatori și salariați',
    ],
    image: practice3,
  },
  {
    id: 'drept-administrativ',
    title: 'Drept administrativ',
    summary:
      'Contencios administrativ, anularea actelor administrative și litigii cu autorități publice.',
    shortText:
      'Reprezentăm clienții în raporturile cu autoritățile publice, în acțiuni de anulare a actelor administrative și în litigii privind refuzuri nejustificate, obligații legale sau sancțiuni administrative.',
    details: [
      'contencios administrativ',
      'anularea actelor administrative',
      'litigii cu autorități și instituții publice',
      'plângeri prealabile și proceduri administrative',
      'suspendarea executării actelor administrative',
    ],
    image: practice1,
  },
  {
    id: 'dreptul-familiei',
    title: 'Dreptul familiei',
    summary:
      'Divorț, partaj, autoritate părintească și alte proceduri privind raporturile de familie.',
    shortText:
      'Oferim asistență juridică în cauze sensibile de dreptul familiei, cu atenție la echilibru, discreție și protejarea intereselor personale și patrimoniale ale clientului.',
    details: [
      'divorț și separare',
      'partaj bunuri comune',
      'stabilirea autorității părintești',
      'program de legături personale cu minorul',
      'pensie de întreținere și alte obligații familiale',
    ],
    image: practice3,
  },
]
