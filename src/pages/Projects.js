import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList'


function Projects() {

    return (
<>
  <main className="section">
    <div className="container">
      <h2 className="title-1">Projects</h2>
      <ul className="projects">
        {projects.map((_, index) => <Project key={_.id} title={_.title} img={_.img} index={index}/>)}
      </ul>
    </div>
  </main>
</>

    )
}

export default Projects;