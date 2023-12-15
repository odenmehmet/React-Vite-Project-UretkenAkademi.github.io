import LandingSection from '../components/LandingSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import { Container } from '../components/Container'
import { Helmet } from 'react-helmet'

function HomePage() {
  return (
    <Container>
      <Helmet>
        <title>Welcome to my React-Vite Blog</title>
      </Helmet>
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
    </Container>
  )
}
export default HomePage
