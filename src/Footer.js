import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (<>
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        Artikart <span></span>
      </h2>
      <p className="made">Disclaimer: All the Rights Reserved</p>
      <div className="social-links">
        <a href="https://facebook.com">
          <FacebookIcon className="social-link" />
        </a>
        <a href="">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
    <div className="table">
    <table>
      <tr>
        <td><b>About</b></td>
        <td><b>Sell</b></td>
        <td><b>Help</b></td>
      </tr>
      <tr>
        <td>Contact Us</td>
        <td>Invest in us</td>
        <td>Help Center</td>
      </tr>
      <tr>
        <td>Career</td>
        <td>Sell with us</td>
        <td>Privacy Setting</td>
      </tr>
    </table>
    </div>
    <div className="abc">
        <span className="text">© 2023 Artikart India, Inc.</span>
    </div>
    </>
  );
}

export default Footer;