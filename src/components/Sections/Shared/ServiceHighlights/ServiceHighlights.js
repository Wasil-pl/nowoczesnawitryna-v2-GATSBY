import React from 'react';
import * as styles from './ServiceHighlights.module.scss';
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
      <div className="container mx-auto px-4">
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
            <div className={`mb-2 ${styles.first_card}`}>
              <div className={styles.card}>
                <h3>{title_first_card}</h3>
                <p>{card_descryption}</p>
              </div>
            </div>
            <div className={styles.second_card}>
              <div className={styles.card}>
                <h3>{title_second_card}</h3>
                <p>{second_card_descryption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
