import { useEffect } from 'react'

const seoConfig = {
  home: {
    title: 'Cabinet de Avocat Nechita Iulian | Avocat Bucuresti',
    description:
      'Cabinet de avocat in Bucuresti. Nechita Iulian ofera consultanta juridica, asistenta si reprezentare in instanta pentru persoane fizice si companii.',
  },
  practice: {
    title: 'Arii de practica juridica | Avocat Bucuresti',
    description:
      'Servicii juridice in drept civil, comercial, dreptul muncii si executari silite, oferite de avocat in Bucuresti.',
  },
  contact: {
    title: 'Contact | Cabinet de Avocat Nechita Iulian - Bucuresti',
    description:
      'Programeaza o consultatie juridica in Bucuresti. Telefon 0753861494, email avocat.iulian.nechita@gmail.com.',
  },
  blog: {
    title: 'Blog juridic | Avocat Bucuresti',
    description:
      'Articole juridice utile pentru clienti din Bucuresti: consultanta juridica, litigii si informatii practice explicate clar.',
  },
}

const setMetaTag = (selector, value) => {
  const tag = document.querySelector(selector)
  if (tag && value) {
    tag.setAttribute('content', value)
  }
}

const resolveSeoKey = () => {
  const path = window.location.pathname.toLowerCase()
  const hash = window.location.hash.toLowerCase()

  if (path.includes('/contact') || hash === '#contact') {
    return 'contact'
  }

  if (path.includes('/arii-de-practica') || hash === '#practice-areas') {
    return 'practice'
  }

  if (path.includes('/blog') || hash === '#blog') {
    return 'blog'
  }

  return 'home'
}

function useSeoMeta() {
  useEffect(() => {
    const applySeo = () => {
      const key = resolveSeoKey()
      const seo = seoConfig[key] || seoConfig.home

      document.title = seo.title
      setMetaTag('meta[name="description"]', seo.description)
      setMetaTag('meta[property="og:title"]', seo.title)
      setMetaTag('meta[property="og:description"]', seo.description)
      setMetaTag('meta[name="twitter:title"]', seo.title)
      setMetaTag('meta[name="twitter:description"]', seo.description)
    }

    applySeo()
    window.addEventListener('hashchange', applySeo)
    window.addEventListener('popstate', applySeo)

    return () => {
      window.removeEventListener('hashchange', applySeo)
      window.removeEventListener('popstate', applySeo)
    }
  }, [])
}

export default useSeoMeta
