import React from 'react';
import * as styles from './RescentArticles.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { blog_cards_data } from '../../../../consts/blog_cards_data';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import ArticleCard from '../../Shared/ArticleCard/ArticleCard';

const RescentArticles = () => {
  const blog_rescent_articles = blog_cards_data.slice(0, 3);

  return (
    <section className={styles.rescent_articles}>
      <Container>
        <SectionTitle
          title="Najnowsze wpisy na "
          coloredText="blogu"
          subtitle="Zacznij się uczyć czegoś nowego o tworzeniu stron internetowych już dziś!"
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
        <CustomButton text="Zobacz wszystkie" link="/blog/" variant="white" />
      </Container>
    </section>
  );
};

export default RescentArticles;
