import {
  getAllBlogPosts,
  getAllFaqs,
  getAllPracticeAreas,
  getAllServices,
  getAllTestimonials,
} from '../services/content.service.js'

export const getServices = (_req, res) => {
  res.status(200).json({
    success: true,
    data: getAllServices(),
  })
}

export const getPracticeAreas = (_req, res) => {
  res.status(200).json({
    success: true,
    data: getAllPracticeAreas(),
  })
}

export const getTestimonials = (_req, res) => {
  res.status(200).json({
    success: true,
    data: getAllTestimonials(),
  })
}

export const getFaqs = (_req, res) => {
  res.status(200).json({
    success: true,
    data: getAllFaqs(),
  })
}

export const getBlogPosts = (_req, res) => {
  res.status(200).json({
    success: true,
    data: getAllBlogPosts(),
  })
}
