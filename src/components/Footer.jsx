import React from 'react'

function Footer() {
  return (
  <footer >
    <div className="footer-content">
        <h3>PREUZMI APLIKACIJU</h3>
        <p>Izaberi opciju odakle zelis da preuzmes nasu aplikaciju, i ukoliko
        ti se svidi pogledaj jos aplikacija nasih developera klikom na prodavnicu ispod.</p>
        <p>Ako zelis da podelis utiske sa nama, kontaktiraj nas!</p>
        
        <div>
          <a href="https://appgallery.huawei.com"  >
          <img src={require('./appgallery.png')} alt='' />
          </a>
          
          <a href="https://play.google.com">
          <img src={require('./google-play-store-logo.png')} alt='' />
          </a>

          <a href="https://www.apple.com/app-store">
          <img src={require('./apple-app-store-icon.png')} alt='' />
          </a>     
        </div>

        <div>
          <p>Designed with: React</p>
          <p>Copyright © 2023 All Rights Reserved.</p>
    </div>
    </div>     
   
  </footer>
  )
}
export default Footer