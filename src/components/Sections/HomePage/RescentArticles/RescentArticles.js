import React, { useEffect } from 'react';
import * as styles from './RescentArticles.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { blog_cards_data } from '../../../../consts/blog_cards_data';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import ArticleCard from '../../Shared/ArticleCard/ArticleCard';
import sal from 'sal.js'; // ← dodane do importów

const RescentArticles = () => {
  const blog_rescent_articles = blog_cards_data.slice(0, 3);

  useEffect(() => {
    sal(); // ← ponowna inicjalizacja animacji po zamontowaniu
  }, []);

  return (
    <section className={styles.rescent_articles}>
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Najnowsze wpisy na "
          coloredText="blogu"
          subtitle="Zacznij się uczyć czegoś nowego o tworzeniu stron internetowych już dziś!"
          backgroundText="Blog"
          ariaLabel="Najnowsze wpisy na blogu"
        />
        <div className={styles.wrapper}>
          {blog_rescent_articles.map((card, index) => (
            <ArticleCard
              key={index}
              image={card.image}
              card_title={card.title}
              card_text={card.descryption}
              href={card.link}
            />
          ))}
        </div>
        <div className={styles.button_box}>
          <CustomButton text="Zobacz wszystkie" link="/blog/" variant="white" />
        </div>
      </div>
    </section>
  );
};

export default RescentArticles;
