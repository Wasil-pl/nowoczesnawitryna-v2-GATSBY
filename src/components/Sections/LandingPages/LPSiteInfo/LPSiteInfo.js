import React from 'react';
import * as styles from './LPSiteInfo.module.scss';
import { Card, Container } from 'react-bootstrap';
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
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <h3>{title_first}</h3>
            <p>{description_first}</p>
            <CustomButton variant="dark" text="Skontaktuj się" link="/kontakt/" />
          </div>
          <div className={styles.second_column}>
            <Card className={`mb-2 ${styles.first_card}`}>
              <Card.Body>
                <Card.Title as={'h3'}>{title_second}</Card.Title>
                <Card.Text>{description_second}</Card.Text>
              </Card.Body>
            </Card>
            <Card className={styles.second_card}>
              <Card.Body>
                <Card.Title as={'h3'}>{title_third}</Card.Title>
                <Card.Text>
                  {description_third}
                  <span>
                    <strong>
                      <a href="#omnie"> Zobacz moje umiejętności i doświadczenie.</a>
                    </strong>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className={styles.banner}>
          <h3 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="1000">
            {banner_description}
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default LPSiteInfo;
