import React from 'react';
import * as styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h3>Game Shop</h3>
      <p>Address: ul. Przykładowa 123, 00-000 Miasto</p>
      <p>Email: kontakt@sklepzgrami.pl</p>
      <p>Phone: +48 123 456 789</p>
    </div>
  );
};

export default Contact;
