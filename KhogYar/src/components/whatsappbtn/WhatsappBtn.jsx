import React from 'react'
import './whatsapp.css'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsappBtn() {
  return (

    <div className='whatsapp'>
        <div className='whatsappBtn' 
             onClick={() => window.open(
                "https://wa.me/923303540034?text=Hello Khogyar!%0AI'm interested in Khogyar's natural products. Could you please help me with more information?",
                "_blank"
                )}
        >
              <FaWhatsapp />
        </div>
    </div>
  )
}

export default WhatsappBtn
