import React from 'react'
import codewars from './../../img/icons/codewars_logo_icon_145389.png'
import insta from './../../img/icons/instagram.svg'
import twitter from './../../img/icons/twitter.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
import github from './../../img/icons/gitHub.svg'
import './footer.scss'

function Footer() {

    const nowYear = new Date().getFullYear()

  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.codewars.com/users/denniwin" target='_blank' rel="noreferrer"><img style={{width:'32px', height:'32px'}}  src={codewars} alt="Link"/></a></li>
                    {/* <li className="social__item"><a href="#!"><img src={insta} alt="Link"/></a></li> */}
                    {/* <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li> */}
                    <li className="social__item"><a href="https://github.com/denniwin" target='_blank' rel="noreferrer"><img src={github} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.facebook.com/denis.alexandrovich.188" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-8 h-8"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 - {nowYear}</p>
                </div>
            </div>
        </div>
</footer>
  )
}

export default Footer;