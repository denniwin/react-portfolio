import './style.scss'
import githubicon from './gitHub-black.svg'

const BtnGitHub = ({link}) => {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      <img src={githubicon} alt="git"/>
      GitHub repo
    </a>
  )
}

export default BtnGitHub