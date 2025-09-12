import Navbar from '../src/components/Navbar.jsx'
import HeroSection from '../src/components/HeroSection.jsx'
import SolutionSection from '../src/components/Solutions.jsx'
import Footer from '../src/components/Footer.jsx'
import FAQ from '../src/components/Faq.jsx'

const MainPage = () => {
  return (
        <>
          <Navbar />
          <HeroSection />
          <SolutionSection />
          <FAQ />
          <Footer />
        </>
  )
}

export default MainPage
