import React from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import './Portfolio.scss';

const LastProject = () => {
  return (
    <section className="portfolio py-[150px]">
      <div className="container mx-auto px-4">
        <div className="wrapper flex flex-row flex-wrap gap-[50px]">
          <div className="portfolio_item title_box text-center">
            <SectionTitle
              title="Mój ostatni"
              coloredText=" projekt"
              subtitle="Zobacz moją ostatnią realizację sklpu internetowego."
            />
          </div>

          <div className="portfolio_item relative">
            <StaticImage
              src="../../../../images/suzie.png"
              alt="www.suzie.pl - sklep internetowy"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className="overlay">
              <div>
                <h3 className="text-[1.6rem] font-extrabold mb-4 text-primary">Suzie</h3>
                <p className="mb-4 text-text-light">Sklep internetowy</p>
                <button className="no_button button uppercase text-text-light hover:text-primary">
                  <a href="https://www.suzie.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz
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

export default LastProject;
