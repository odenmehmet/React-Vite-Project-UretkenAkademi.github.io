import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import ContactSection from '../components/ContactSection'
import { Container } from '../components/Container'
import { projects } from '../data/posts'
import NotFound from './NotFound'
import { Helmet } from 'react-helmet'

function ProjectPage() {
  const params = useParams()
  const slug = params.slug || ''
  const project = projects.find((p) => {
    return p.slug === slug
  })

  if (project == undefined) {
    return <NotFound />
  } else {
    return (
      <div>
        <Helmet>
          <title>{project.title}</title>
        </Helmet>
        <Container variant="blog">
          <BackButton to="/" />
          <img
            src={`/public/${project.image}`}
            alt={project.title}
            className=" object-cover w-full h-96 rounded-2xl"
          />
          <section>
            <h1 className="py-16 text-4xl font-bold text-slate-800 text-center">
            <a
              className="flex gap-4 justify-center items-center"
              href={project.link}
            >
              <li>{project.title}</li>
            </a>
            </h1>
          </section>
          <section></section>
          <section>{project.description}</section>
        </Container>
        <div className="my-24">
          <ContactSection />
        </div>
      </div>
    )
  }
}

export default ProjectPage
