import { useEffect, useState } from 'react'
import AboutSection from '@/sections/AboutSection.jsx'
import ContactSection from '@/sections/ContactSection.jsx'
import HeroSection from '@/sections/HeroSection.jsx'
import PracticeAreasSection from '@/sections/PracticeAreasSection.jsx'
import TestimonialsSection from '@/sections/TestimonialsSection.jsx'
import WhyChooseUsSection from '@/sections/WhyChooseUsSection.jsx'
import useScrollReveal from '@/hooks/useScrollReveal.js'
import useSeoMeta from '@/hooks/useSeoMeta.js'
import { fetchHomeContent } from '@/services/contentApi.js'

const initialHomeContent = {
  services: [],
  practiceAreas: [],
  testimonials: [],
}

function Home() {
  const [content, setContent] = useState(initialHomeContent)
  const [isLoading, setIsLoading] = useState(true)
  useScrollReveal()
  useSeoMeta()

  useEffect(() => {
    let isMounted = true

    const loadContent = async () => {
      setIsLoading(true)

      try {
        const apiContent = await fetchHomeContent()
        if (isMounted) {
          setContent(apiContent)
        }
      } catch (error) {
        console.error('Unable to load home content.', error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadContent()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection items={content.practiceAreas} isLoading={isLoading} />
      <WhyChooseUsSection items={content.services} isLoading={isLoading} />
      <TestimonialsSection items={content.testimonials} isLoading={isLoading} />
      <ContactSection />
    </>
  )
}

export default Home
