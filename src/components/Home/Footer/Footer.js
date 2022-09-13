import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-body">
        <div className="footer-links">
          <div className="footer-link">
            <h5>For Artist</h5>
            <p>Advertise</p>
            <p>Artist Registration</p>
            <p>Sell your Art</p>
            <p>Become a Verified Artist</p>
            <p>Tips for Artist</p>
          </div>
          <div className="footer-link">
            <h5>Top Categories</h5>
            <p>Painting</p>
            <p>Photography</p>
            <p>Sculpture</p>
            <p>Drawings</p>
            <p>Collage</p>
          </div>
          <div className="footer-link">
            <h5>Company</h5>
            <p>About</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Blog</p>
          </div>
          <div className="footer-link">
            <h5>The Steps Art</h5>
            <p>
              Rupayan Shelford, 20th Floor, 23/6 Mirpur Rd, Dhaka 1207,
              Bangladesh
            </p>
            <p>+880 2-9110136</p>
            <p>info@datasoft-bd.com</p>
          </div>
        </div>
        <div className="footer-policies">
          <div className="footer-policies-links">
            <p>Privacy Policy</p>
            <p>Copyright Policy</p>
            <p>Terms &amp; condition</p>
          </div>
          <div className="footer-policies-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="footer-img">
        <img alt="" src="" />
      </div>
    </div>
  );
};

export default Footer;
