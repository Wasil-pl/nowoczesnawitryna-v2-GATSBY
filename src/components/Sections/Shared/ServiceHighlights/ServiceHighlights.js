import React from 'react';
import * as styles from './ServiceHighlights.module.scss';
import { Card, Container } from 'react-bootstrap';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const ServiceHighlights = ({
  title_first_column,
  title_first_card,
  title_second_card,
  descryption_first_column,
  card_descryption,
  second_card_descryption,
  variant = '',
  isHtml,
}) => {
  return (
    <section className={`${styles.site_info} ${styles[variant]}`}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <h3>{title_first_column}</h3>
            {isHtml ? (
              <p dangerouslySetInnerHTML={{ __html: descryption_first_column }} />
            ) : (
              <p>{descryption_first_column}</p>
            )}
            {!variant && <CustomButton variant="dark" text="Napisz do mnie..." link="/kontakt/" />}
            {variant && !isHtml && <CustomButton variant="dark" text="Napisz do mnie..." link="/kontakt/#kontakt" />}
            {isHtml && variant && (
              <CustomButton variant="dark" text="Przejdź do formularza..." link="/formularz-szybkiej-wyceny/#form" />
            )}
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

export default ServiceHighlights;
