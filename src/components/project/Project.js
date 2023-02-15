import { NavLink } from 'react-router-dom';
import './project.scss'

const Project = ({img, title, index}) => {
    
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
          <img src={img} alt="Project img" className="project__img"/>
          <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  )
}

export default Project;