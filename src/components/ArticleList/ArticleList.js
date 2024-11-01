import React from 'react';
import * as styles from './ArticleList.module.scss';
import { Container } from 'react-bootstrap';
import ArticleCard from '../ArticleCard/ArticleCard';
import { blog_cards_data } from '../../consts/blog_cards_data';

const ArticleList = () => {
  return (
    <section className={styles.article_list}>
      <Container>
        <div className={styles.wrapper}>
          {blog_cards_data.map((card, index) => (
            <ArticleCard
              key={index}
              image={card.image}
              card_title={card.title}
              card_text={card.descryption}
              href={card.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ArticleList;
