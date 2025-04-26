import { socialImgs } from "../constants";
import Foto from "../../public/images/logos/Foto";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              href={socialImg.url}
              target="_blank"
              key={socialImg.url}
              className="icon"
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Saba Pailodze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
