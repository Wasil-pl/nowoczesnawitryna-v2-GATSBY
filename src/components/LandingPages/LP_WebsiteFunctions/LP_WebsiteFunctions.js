import React from 'react';
import * as styles from './LP_WebsiteFunctions.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const LP_WebsiteFunctions = ({
  sectionTitle,
  sectionTitleColored,
  sectionSubtitle,
  itemTitle1,
  itemDescription1,
  itemTitle2,
  itemDescription2,
  itemTitle3,
  itemDescription3,
  itemTitle4,
  itemDescription4,
  itemTitle5,
  itemDescription5,
  itemTitle6,
  itemDescription6,
  itemTitle7,
  itemDescription7,
  itemTitle8,
  itemDescription8,
}) => {
  return (
    <section className={styles.website_functions}>
      <Container>
        <SectionTitle title={sectionTitle} coloredText={sectionTitleColored} subtitle={sectionSubtitle} />

        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.image}>
              <StaticImage src="../../../images/price.png" alt="Cennik" height={180} />
            </div>
            <div className={styles.text}>
              <h3>{itemTitle1}</h3>
              <p>{itemDescription1}</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <StaticImage src="../../../images/seo.png" alt="SEO" height={180} />
            </div>
            <div className={styles.text}>
              <h3>{itemTitle2}</h3>
              <p>{itemDescription2}</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <StaticImage src="../../../images/rodo.png" alt="RODO" height={180} />
            </div>
            <div className={styles.text}>
              <h3>{itemTitle3}</h3>
              <p>{itemDescription3}</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <StaticImage src="../../../images/support.png" alt="Wsparcie" height={180} />
            </div>
            <div className={styles.text}>
              <h3>{itemTitle4}</h3>
              <p>{itemDescription4}</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <StaticImage src="../../../images/page-speed.png" alt="Szybkość" height={180} />
            </div>
            <div className={styles.text}>
              <h3>{itemTitle5}</h3>
              <p>{itemDescription5}</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <StaticImage src="../../../images/responsive.png" alt="Responsywność" height={180} />
            </div>
            <div className={styles.text}>
              <h3>{itemTitle6}</h3>
              <p>{itemDescription6}</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <StaticImage src="../../../images/cms_function.png" alt="CMS" width={200} />
            </div>
            <div className={styles.text}>
              <h3>{itemTitle7}</h3>
              <p>{itemDescription7}</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <StaticImage src="../../../images/woocommerce.png" alt="WooCommerce" height={180} />
            </div>
            <div className={styles.text}>
              <h3>{itemTitle8}</h3>
              <p>{itemDescription8}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LP_WebsiteFunctions;
