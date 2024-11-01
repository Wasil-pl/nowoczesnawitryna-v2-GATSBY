import React from 'react';
import * as styles from './RescentArticles.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import ArticleCard from '../ArticleCard/ArticleCard';
import { blog_cards_data } from '../../consts/blog_cards_data';
import CustomButton from '../CustomButton/CustomButton';

const RescentArticles = () => {
  const blog_rescent_articles = blog_cards_data.slice(0, 3);

  return (
    <div className={styles.RescentArticles}>
      <Container>
        <SectionTitle title="Ostatnie artykuły" />
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
    </div>
  );
};

export default RescentArticles;
