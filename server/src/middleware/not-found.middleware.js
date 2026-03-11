export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Ruta inexistentă: ${req.method} ${req.originalUrl}`,
  })
}
