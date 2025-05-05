import React from 'react';
import './Footer.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { FacebookIcon, LinkedInIcon } from '../Icons/Icons';

const Footer = () => {
  return (
    <footer className="footer relative bg-background-dark text-text-light pt-12">
      <div className="container mx-auto px-4">
        <div className="wrapper flex flex-wrap lg:flex-nowrap justify-center items-center gap-5 mb-8">
          <div className="first_column flex flex-col items-center w-full lg:w-1/3 mb-5 lg:mb-0">
            <StaticImage src="../../images/logo_footer.png" alt="Logo" width={200} quality={100} />
          </div>
          <div className="second_column flex flex-col items-center w-full sm:w-[48%] lg:w-1/3 mb-5 lg:mb-0">
            <h3 className="text-xl text-primary mb-2">Kontakt</h3>
            <a href="tel:+48733542926" className="hover:text-primary">
              +48 733 542 926
            </a>
            <a href="mailto:nowoczesnawitryna@gmail.com" className="hover:text-primary">
              nowoczesnawitryna@gmail.com
            </a>
            <p>Jastrzębie-Zdrój</p>
            <p>ul. Bogoczowiec 4c</p>
            <div className="flex gap-5 mt-5">
              <a href="https://www.facebook.com/..." aria-label="facebook" className="hover:text-primary">
                <FacebookIcon width={30} height={30} />
                <span className="sr-only">facebook</span>
              </a>
              <a href="https://www.linkedin.com/..." aria-label="linkedin" className="hover:text-primary">
                <LinkedInIcon width={30} height={30} />
                <span className="sr-only">linkedin</span>
              </a>
            </div>
          </div>
          <div className="third_column flex flex-col items-center w-full sm:w-[48%] lg:w-1/3">
            <h3 className="text-xl text-primary mb-2">Menu</h3>
            <nav className="flex flex-col items-center space-y-1">
              <a href="/" className="hover:text-primary">
                Strona główna
              </a>
              <a href="/formularz-szybkiej-wyceny/" className="hover:text-primary">
                Formularz wyceny
              </a>
              <a href="/strony-niestandardowe/" className="hover:text-primary">
                Strony HTML/CSS/JS
              </a>
              <a href="/strony-wordpress/" className="hover:text-primary">
                Strony WordPress
              </a>
              <a href="/sklepy-internetowe/" className="hover:text-primary">
                Sklepy internetowe
              </a>
              <a href="/strony-lms/" className="hover:text-primary">
                Strony LMS
              </a>
              <a href="/aplikacje-webowe/" className="hover:text-primary">
                Aplikacje webowe
              </a>
              <a href="/projektowanie-logo/" className="hover:text-primary">
                Projektowanie logo
              </a>
              <a href="/kontakt/" className="hover:text-primary">
                Kontakt
              </a>
              <a href="/blog/" className="hover:text-primary">
                Blog
              </a>
              <a href="/polityka-prywatnosci/" className="hover:text-primary">
                Polityka prywatności
              </a>
            </nav>
          </div>
        </div>
        <div className="copy_right text-center text-sm py-2">
          <p className="m-0">Copyright © 2024 Nowoczesna witryna | Powered by Dariusz Wasilewski</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
