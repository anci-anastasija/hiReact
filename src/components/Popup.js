import React from 'react'
import { useState } from 'react';

function Popup() {
const [showPopup, setShowPopup]= useState(false);

const togglePopup = () =>{
    setShowPopup(!showPopup)
}
    return (
        <>
        <div className='center-align'>
        <button onClick={togglePopup}>Gde se nalazimo?</button>
        </div>
            
            {showPopup && (
                <div className='popup'>
                    <div className='popup-iner'>                    
                    <h2>Kontakt: </h2>
                    <p style={{color:'white'}}>info@educate.com
                    </p>
                    <p style={{color:'white'}}>Cara Lazara 19, Beograd
                    </p>
                    <p style={{color:'white'}}>Radno vreme: 08:00 - 17:00
                    </p>
                    <button onClick
                    ={togglePopup}> Zatvori</button>
                    </div>
                </div>
            )}
        </>
      )
}

export default Popup
