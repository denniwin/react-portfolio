import Typed from "typed.js";
import { useEffect, useRef } from "react";
import './header.scss'


const Header = () => {

  const el = useRef(null);

  useEffect(() => {

    const typed = new Typed(el.current, {
      strings: [
        "Full stack developer",
        "Front-end developer",
        "React Developer",
      ],
      startDelay: 300,
      showCursor: false,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

  })


  return (
    <header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, my name is <em>Den</em></strong><br/>
            a frontend developer
        </h1>
        <div className="header__text">
            <p ref={el}>Always Strive And Prosper.</p>
        </div>
        <a href="#!" className="btn">Download CV</a>
    </div>
</header>
  )
}

export default Header;