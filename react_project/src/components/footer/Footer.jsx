import React from 'react'
import "../footer/footer.css"
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";


const Footer = () => {
  return (

    <footer>
        <div className="fbox">
            <div><TiSocialInstagram color='white' size= '70%'/></div>
            <div><TiSocialTwitter color='white' size= '70%'/></div>
            <div><BsWhatsapp color='white' size= '70%'/></div>
            <div><TiSocialFacebook color='white' size= '70%'/></div> 
        </div>
    </footer>
  )
}

export default Footer
