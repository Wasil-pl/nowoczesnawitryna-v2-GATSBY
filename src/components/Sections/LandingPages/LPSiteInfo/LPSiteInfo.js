import React from 'react';
import * as styles from './LPSiteInfo.module.scss';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const LPSiteInfo = ({
  title_first,
  description_first,
  title_second,
  description_second,
  title_third,
  description_third,
  banner_description,
}) => {
  return (
    <section className={styles.site_info}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <h3>{title_first}</h3>
            <p>{description_first}</p>
            <CustomButton variant="dark" text="Skontaktuj się" link="/kontakt/" />
          </div>
          <div className={styles.second_column}>
            <div className={`mb-2 ${styles.first_card}`}>
              <div className={styles.card}>
                <h3>{title_second}</h3>
                <p>{description_second}</p>
              </div>
            </div>
            <div className={styles.second_card}>
              <div className={styles.card}>
                <h3>{title_third}</h3>
                <p>
                  {description_third}
                  <span>
                    <strong>
                      <a href="#omnie"> Zobacz moje umiejętności i doświadczenie.</a>
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
          className={styles.banner}
        >
          <h3>{banner_description}</h3>
        </div>
      </div>
    </section>
  );
};

export default LPSiteInfo;
