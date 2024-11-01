import React from 'react';
import * as styles from './SiteInfoServices.module.scss';
import { Card, Container } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';

const SiteInfoServices = ({
  title_first_column,
  title_first_card,
  title_second_card,
  descryption_first_column,
  card_descryption,
  second_card_descryption,
  variant = '',
}) => {
  return (
    <section className={`${styles.site_info} ${styles[variant]}`}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <h3>{title_first_column}</h3>
            <p>{descryption_first_column}</p>
            <CustomButton variant="dark" text="skontaktuj się" link="#kontakt" />
          </div>
          <div className={styles.second_column}>
            <Card className={`mb-2 ${styles.first_card}`}>
              <Card.Body>
                <Card.Title>{title_first_card}</Card.Title>
                <Card.Text>{card_descryption}</Card.Text>
              </Card.Body>
            </Card>
            <Card className={styles.second_card}>
              <Card.Body>
                <Card.Title>{title_second_card}</Card.Title>
                <Card.Text>{second_card_descryption}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SiteInfoServices;
