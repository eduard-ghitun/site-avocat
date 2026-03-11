import { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section')
    const staggerGroups = document.querySelectorAll('.reveal-stagger')
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (hasReducedMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      staggerGroups.forEach((group) => group.classList.add('is-visible'))
      return undefined
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            sectionObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -12% 0px',
      }
    )

    sections.forEach((section) => sectionObserver.observe(section))

    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            staggerObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    staggerGroups.forEach((group) => staggerObserver.observe(group))

    return () => {
      sectionObserver.disconnect()
      staggerObserver.disconnect()
    }
  }, [])
}

export default useScrollReveal
