import Navbar from '../src/components/Navbar.jsx'
import HeroSection from '../src/components/HeroSection.jsx'
import SolutionSection from '../src/components/Solutions.jsx'
import Footer from '../src/components/Footer.jsx'
import FAQ from '../src/components/Faq.jsx'
import CallToAction from '../src/components/Cta.jsx'
import Slidersection from '../src/components/slider/Slidersection.jsx'

const MainPage = () => {
  return (
        <>
          <Navbar />
          <HeroSection />
          <Slidersection/>
          <SolutionSection />
          <CallToAction />
          <FAQ />
          <Footer />
        </>
  )
}

export default MainPage
