// ArticleList.jsx
import React from 'react';
import ArticleCard from '../../Shared/ArticleCard/ArticleCard';
import { blog_cards_data } from '../../../../consts/blog_cards_data';

const ArticleList = () => (
  <section className="article_list py-[100px]">
    <div className="container mx-auto px-4">
      <div
        className="
          wrapper
          flex flex-col items-center gap-5 flex-wrap
          lg:flex-row lg:justify-evenly lg:items-start
        "
      >
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
    </div>
  </section>
);

export default ArticleList;
