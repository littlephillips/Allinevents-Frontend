import React from 'react'
import "../css/Footer.css"

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4  className='isir'>All Events</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>40 W 34th St.. Nairobi Kenya</li>
              <li>allinevents.support@gmail.com</li>
              <li>+25471234565</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Services</h4>
            <ol className="list-unstyled">
              <li>Catering </li>
              <li>Decoration</li>
              <li>Venue</li>
              <li>Photography</li>
            </ol>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Help and Support</h4>
            <ol className="list-unstyled">
              <li>Help Centre</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ol>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ALL EVENTS | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
    

export default Footer;