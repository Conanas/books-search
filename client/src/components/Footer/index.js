import React from 'react';
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex flex-sm-row-reverse">
          <div className="col-sm-6 d-flex justify-content-sm-end align-items-center">
            <a className="links-div-anchor" href="https://drive.google.com/file/d/1z3gjUkCu5Dn3i_F7ltW7irqJMeowSegt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt social-icon"></i> Resume
            </a>
            <a className="links-div-anchor" href="https://www.linkedin.com/in/thomas-haigh-5960b81aa/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin font-awesome social-icon"></i>
            </a>
            <a className="links-div-anchor" href="https://github.com/Conanas" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github font-awesome social-icon"></i>
            </a>
          </div>
          <div className="col-sm-6 d-flex flex-column">
            <label>Phone: 0406 253 030</label>
            <label>Email: tmhaigh@gmail.com</label>
            <label>Location: Melbourne, Victoria, Australia</label>
          </div>
        </div>
      </div>
    </footer>
  )
}
