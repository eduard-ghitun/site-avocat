import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'

function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
