import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const ArticleCard = ({ image, card_title, card_text, href }) => {
  return (
    <div className="article-card md:min-w-[400px] max-w-[400px] border border-[#ccc] flex flex-col mx-auto">
      {image === 'webhosting' && (
        <StaticImage
          src="../../../../images/webhosting.webp"
          width={400}
          alt="webhosting hosting stron internetowych"
          layout="constrained"
        />
      )}
      {image === 'cms' && (
        <StaticImage
          src="../../../../images/cms.webp"
          width={400}
          alt="cms - strony internetowe na wordpress"
          layout="constrained"
        />
      )}
      {image === 'website' && (
        <StaticImage
          src="../../../../images/website.jpg"
          width={400}
          alt="website - strona internetowa"
          layout="constrained"
        />
      )}
      {image === 'responsive' && (
        <StaticImage
          src="../../../../images/responsive.jpg"
          width={400}
          alt="responsive - rwd, responsywne strony internetowe"
          layout="constrained"
        />
      )}
      {image === 'webdesign' && (
        <StaticImage
          src="../../../../images/proces.jpg"
          width={400}
          alt="webdesign - projektowanie strony internetowej"
          layout="constrained"
        />
      )}
      {image === 'webapp' && (
        <StaticImage
          src="../../../../images/webapp.jpg"
          width={400}
          alt="webapp - aplikacje webowe"
          layout="constrained"
        />
      )}
      {image === 'modernwebsite' && (
        <StaticImage
          src="../../../../images/features.jpg"
          width={400}
          alt="modernwebsite - nowoczesna strona internetowa"
          layout="constrained"
        />
      )}

      <div className="card_body p-[16px] flex flex-col bg-background-light">
        <h3 className="text-[1.5rem] mb-2">{card_title}</h3>
        <p className="text-[1rem] mb-5">{card_text}</p>
        <Link to={href} className="mt-auto no-underline uppercase text-text-secondary hover:text-primary">
          Czytaj Więcej
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
