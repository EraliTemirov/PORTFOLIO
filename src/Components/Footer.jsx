import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import telegram from '../Imgs/Telegram.svg';
import facebook from '../Imgs/Facebook.svg';
import email from '../Imgs/Gmail.png';




const Footer = () => {

const {t} = useTranslation();

  return (
    <div className='text-bg-primary py-3 shadow '>
      <div className='container d-flex justify-content-between'>
      <Link className="text-warning text-decoration-none fs-1 " to="/">
       Market Play
        </Link>
       <ul className='list-unstyled'>
        <li className='fs-3 text-white' >{t("FOOTER_GENERAL_INFORMATION")}</li>
        <li className='fs-5'> {t("FOOTER_ABOUT_ME")} </li>
        <li className='fs-5'> {t("FOOTER_CONTACT_ME")} </li>
        <li className='fs-5'> {t("FOOTER_QUESTION_ANSWER")} </li>
       </ul>
       <ul className='list-unstyled'>
        <li className='fs-3 text-white'>{t("FOOTER_CONNECT")}</li>
        <li className='fs-5'> <a href="https://t.me/Erali_temirov" target='_blanck'><img src={telegram} alt="rasm"  /></a> Teligram</li>
        <li className='fs-5 mt-1'> <a href="https://www.facebook.com/profile.php?id=100078121026352"><img src={facebook} alt="rasm" /> </a>Facebook</li>
        <li className='fs-5 mt-1'> <a href="mailto: eralitemirov129@gmail.com" target='_blanck'> <img src={email} alt="rasm" className='email' />  </a> Email </li>
        
       </ul>
      </div>
      <hr />
    </div>
  )
}

export default Footer
