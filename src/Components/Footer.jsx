import React from 'react'
import { Link } from 'react-router-dom';

import telegram from '../Imgs/Telegram.svg';
import { useTranslation } from 'react-i18next';




const Footer = () => {

const {t} = useTranslation();

  return (
    <div className='text-bg-primary py-3 shadow '>
      <div className='container d-flex justify-content-between'>
      <Link className="text-warning text-decoration-none fs-1 " to="/">
       Market Play
        </Link>
       <ul className='list-unstyled'>
        <li className='fs-3 text-warning' >{t("FOOTER_GENERAL_INFORMATION")}</li>
        <li> {t("FOOTER_ABOUT_ME")} </li>
        <li> {t("FOOTER_CONTACT_ME")} </li>
        <li> {t("FOOTER_QUESTION_ANSWER")} </li>
       </ul>
       <ul className='list-unstyled'>
        <li className='fs-3 text-warning'>{t("FOOTER_CONNECT")}</li>
        <li className='fs-4'> <img src={telegram} alt="rasm"  /> Teligram</li>
        <li>Facebook</li>
        <li>Email   </li>
       </ul>
      </div>
    </div>
  )
}

export default Footer
