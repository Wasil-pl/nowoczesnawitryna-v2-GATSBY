import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';

const Oferta = () => {
  return (
    <section>
      <h1>Oferta</h1>
      <StaticImage
        src="../images/logo_koło.jpg"
        alt="Hero"
        placeholder="blurred"
        layout="fixed"
        width={300}
        height={200}
      />
    </section>
  );
};

export default Oferta;
