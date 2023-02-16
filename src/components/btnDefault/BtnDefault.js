import imgdef from './free-icon-connection-5843438.png'

const BtnDefault = ({linkurl}) => {
  return (

    <a href={linkurl} target="_blank" className="btn-outline" rel="noreferrer">
      <img style={{width:'28px'}} src={imgdef} alt="git"/>
      Link project
    </a>
  )
}

export default BtnDefault