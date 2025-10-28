import React from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <section className="portfolio py-[150px]">
      <div className="container mx-auto px-4">
        <div className="wrapper flex flex-row flex-wrap gap-[50px]">
          <div className="portfolio_item  title_box text-center ">
            <SectionTitle
              title="Moje ostatnie"
              coloredText=" projekty"
              subtitle="Zobacz moje ostatnie realizacje stron internetowych i sklepów online."
            />
          </div>

          <div className="portfolio_item  relative">
            <StaticImage
              src="../../../../images/rajza.png"
              alt="www.rajza.com.pl - biuro podrózy"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className="overlay">
              <div>
                <h3 className="text-[1.6rem] font-extrabold mb-4 text-primary">Rajza</h3>
                <p className="mb-4 text-text-light">Biuro podróży</p>
                <button className="no_button button uppercase text-text-light hover:text-primary">
                  <a href="https://rajza.com.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz stronę <br />
                    rajza.pl
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="portfolio_item relative">
            <StaticImage
              src="../../../../images/j_system.png"
              alt="j-system.pl - sklep internetowy"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className="overlay">
              <div>
                <h3 className="text-[1.6rem] font-extrabold mb-4 text-primary">j-system</h3>
                <p className="mb-4 text-text-light">Sklep internetowy</p>
                <button className="no_button button uppercase text-text-light hover:text-primary">
                  <a href="https://j-system.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz stronę <br />
                    j_system.pl
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="portfolio_item relative">
            <StaticImage
              src="../../../../images/przewodnik.png"
              alt="przewodnik-skalnemiasto.pl/ - strona internetowa"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className="overlay">
              <div>
                <h3 className="text-[1.6rem] font-extrabold mb-4 text-primary">Przewodnik</h3>
                <p className="mb-4 text-text-light">Wizytówka</p>
                <button className="no_button button uppercase text-text-light hover:text-primary">
                  <a href="https://przewodnik-skalnemiasto.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz stronę <br />
                    przewodnik-skalnemiasto.pl
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="portfolio_item relative">
            <StaticImage
              src="../../../../images/logomove.png"
              alt="logomove.pl/ - strona internetowa"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className="overlay">
              <div>
                <h3 className="text-[1.6rem] font-extrabold mb-4 text-primary">LogoMove</h3>
                <p className="mb-4 text-text-light">Strona firmowa</p>
                <button className="no_button button uppercase text-text-light hover:text-primary">
                  <a href="https://logomove.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz stronę
                    <br />
                    logomove.pl
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="portfolio_item relative">
            <StaticImage
              src="../../../../images/proluxe.png"
              alt="proluxeclean.pl/ - strona internetowa"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className="overlay">
              <div>
                <h3 className="text-[1.6rem] font-extrabold mb-4 text-primary">Proluxe Clean</h3>
                <p className="mb-4 text-text-light">Strona firmowa</p>
                <button className="no_button button uppercase text-text-light hover:text-primary">
                  <a href="https://www.proluxeclean.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz stronę
                    <br />
                    proluxeclean.pl
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
