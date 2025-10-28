import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { navigate } from 'gatsby';
import './CustomButton.scss';

const CustomButton = ({ text, link, variant = '', ...rest }) => {
  if (!link) return null;

  // Link tylko z kotwicą na tej samej stronie: nie używaj AniLink
  if (link.startsWith('#')) {
    return (
      <a href={link} className={`custom_button ${variant}`} {...rest}>
        {text}
      </a>
    );
  }

  // Zewnętrzne URL-e: klasyczny <a>
  const isExternal = /^https?:\/\//i.test(link);
  if (isExternal) {
    return (
      <a href={link} className={`custom_button ${variant}`} {...rest}>
        {text}
      </a>
    );
  }

  const hasHash = link.includes('#');

  if (!hasHash) {
    return (
      <AniLink
        paintDrip
        duration={1.2}
        hex="#191919"
        direction="left"
        to={link}
        className={`custom_button ${variant}`}
        {...rest}
      >
        {text}
      </AniLink>
    );
  }

  // Link z hash: animacja do ścieżki bez hash, po niej navigate z #hash
  const [path, hash] = link.split('#');
  const target = `${path}#${hash}`;

  return (
    <AniLink
      paintDrip
      duration={1.2}
      hex="#191919"
      direction="left"
      to={path} // bez #hash
      className={`custom_button ${variant}`}
      onComplete={() => navigate(target)} // po animacji przewiń do kotwicy
      {...rest}
    >
      {text}
    </AniLink>
  );
};

export default CustomButton;
