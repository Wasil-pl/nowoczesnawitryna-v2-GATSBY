import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';

const StronyNiestandardowe = () => {
  const title = 'Strony niestandardowe';
  const subtitle = 'Zrealizuję każdy projekt!';

  return (
    <>
      <Headers title={title} subtitle={subtitle} />
    </>
  );
};

export default StronyNiestandardowe;
