import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wb-footer section-padding">
        <div className="footer-lists">
          <div className="footer-name">
            <h3> Address </h3>
            <a href="shop1">
              <p>Shop 1, 31ASt 73*74St, Mdy</p>
            </a>
            <a href="shop2">
              <p>Shop 2, 80St 27*28St Capital Mall, Mdy</p>
            </a>
            <a href="shop3">
              <p>Shop 3, Hleden Center, Yangon</p>
            </a>
            <a href="shop4">
              <p>Shop 4, Junction City 3rd Floor, Yangon</p>
            </a>
          </div>
          <div className="footer-name">
            <h3>Available Payment</h3>
            <a href="#">
              <p>KBZ Pay</p>
            </a>
            <a href="#">
              <p>Wave Pay</p>
            </a>
            <a href="#">
              <p>CB Pay</p>
            </a>
          </div>
          <div className="footer-name">
            <h3>Operation Hour</h3>
            <a href="time">
              <p>9:00 AM to 7:00 PM</p>
            </a>
            <a href="time">
              <p>Last order 6:45 PM</p>
            </a>
          </div>
          <div className="footer-name">
            <h3>City</h3>
            <a href="city">
              <p>
              <i class="bi bi-geo-alt"></i> Mandalay 
              </p>
            </a>
            <a href="city">
              <p>
              <i class="bi bi-geo-alt"></i> Yangon 
              </p>
            </a>
            <a href="city">
              <p> Other cities coming soon</p>
            </a>
          </div>
        </div>

        <hr></hr>

        <div className="foot-below d-flex justify-content-between">
          <div className="foot-copyright d-inline">
            <p>@ {new Date().getFullYear()} vietline coffee. All right reserved.</p>
          </div>
          <div className="foot-below-lists d-flex">
            <a href="terms">
              <div>
                <p>Terms & Conditions |$|</p>
              </div>
            </a>
            <a href="privacy">
              <div>
                <p>Privacy |$|</p>
              </div>
            </a>
            <a href="security">
              <div>
                <p>Security|$|</p>
              </div>
            </a>
            <a href="cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
