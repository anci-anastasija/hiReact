import React from 'react'
import { useState } from 'react';
  
function Contact() {
  const [showPopup, setShowPopup]= useState(false);

const togglePopup = () =>{
    setShowPopup(!showPopup)
}
  return (
    <div className='contact'>
      
        <main>
          <div className='main'>
          <h1>Kontaktiraj nas!</h1>
          <div className='center-align'>
        <button  className='btn' onClick={togglePopup}>Gde se nalazimo?</button>
        </div>
            
            {showPopup && (
                <div className='popup'>
                    <div className='popup-iner'>                    
                    <h2>Kontakt: </h2>
                    <p>info@educate.com
                    </p>
                    <p>Cara Lazara 19, Beograd
                    </p>
                    <p>Radno vreme: 08:00 - 17:00
                    </p>
                    <button onClick
                    ={togglePopup}> Zatvori</button>
                    </div>
                </div>
            )}
        
          </div>
       
        </main>
    </div>
  )
}
export default Contact
