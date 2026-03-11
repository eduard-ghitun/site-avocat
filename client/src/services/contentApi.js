import { blogPosts as blogPostsFallback } from '@/data/blogPosts.js'
import { faqs as faqsFallback } from '@/data/faqs.js'
import { practiceAreas as practiceAreasFallback } from '@/data/practiceAreas.js'
import { services as servicesFallback } from '@/data/services.js'
import { testimonials as testimonialsFallback } from '@/data/testimonials.js'
import { getJson } from './apiClient.js'

const withFallback = async (requestFn, fallbackData) => {
  try {
    return await requestFn()
  } catch (error) {
    console.warn('API unavailable, using fallback data.', error)
    return fallbackData
  }
}

const extractArrayData = (payload) => {
  if (!payload || !Array.isArray(payload.data)) {
    throw new Error('Invalid API payload')
  }

  return payload.data
}

export const fetchServices = async () =>
  withFallback(async () => {
    const payload = await getJson('/api/services')
    const data = extractArrayData(payload)

    return data.map((item) => ({
      id: item.id,
      title: item.title,
      text: item.text || item.summary || '',
    }))
  }, servicesFallback)

export const fetchPracticeAreas = async () =>
  withFallback(async () => {
    const payload = await getJson('/api/practice-areas')
    const data = extractArrayData(payload)

    return data.map((item) => ({
      id: item.id,
      title: item.title,
      summary: item.summary || item.text || '',
    }))
  }, practiceAreasFallback)

export const fetchTestimonials = async () =>
  withFallback(async () => {
    const payload = await getJson('/api/testimonials')
    const data = extractArrayData(payload)

    return data.map((item) => ({
      id: item.id,
      quote: item.quote || '',
      author: item.author || item.name || 'Client',
      role: item.role || '',
    }))
  }, testimonialsFallback)

export const fetchFaqs = async () =>
  withFallback(async () => {
    const payload = await getJson('/api/faqs')
    const data = extractArrayData(payload)

    return data.map((item) => ({
      id: item.id,
      title: item.title || item.question || '',
      text: item.text || item.answer || '',
    }))
  }, faqsFallback)

export const fetchBlogPosts = async () =>
  withFallback(async () => {
    const payload = await getJson('/api/blog-posts')
    const data = extractArrayData(payload)

    return data.map((item) => ({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt || item.summary || '',
      category: item.category || 'Juridic',
    }))
  }, blogPostsFallback)

export const fetchHomeContent = async () => {
  const [services, practiceAreas, testimonials] = await Promise.all([
    fetchServices(),
    fetchPracticeAreas(),
    fetchTestimonials(),
  ])

  return {
    services,
    practiceAreas,
    testimonials,
  }
}
