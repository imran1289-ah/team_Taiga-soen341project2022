import React from 'react'
import './Footer.css'
import Button from 'react-bootstrap/Button';

export default function Footer() {
  return (
      
    <div className="footer">
        {/*Container div which contains the footer  */}
        <div className="container">
            {/* 1 row with 3 collumns */}
            <div className = "row">
            {/* About us */}
            <div className="col">
                    <h4>About us</h4>
                    <ul className="list-unstyled">
                        <li>Careers</li>
                        <li>Mission</li>
                        <li>Founders</li>
                    </ul>
                </div>
                <div className='col'>
                
                {/* Contact us */}
                <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8</li>
                            <li>Tel : 514 848-2424</li>
                        </ul>
                </div>
                
                {/* Social Media */}
                <div className="col">
                    <h4>Social Media</h4>
                        <div className="socialmedias">
                            <ul className="list-unstyled">
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png"></img></li>
                                <li><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png"></img></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"></img></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"></img></li>
                            </ul>
                </div>
            </div>

            {/* Second row for copyright  */}
            <div className="row">
                <p>
                    &copy;{new Date().getFullYear()} Taiga INC.
                </p>
            </div>
        </div>
    </div>
    </div>
    )
}
