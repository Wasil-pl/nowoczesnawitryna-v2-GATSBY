import React, { useEffect } from 'react';
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
    <section className="min-h-[700px] pt-[300px] pb-[100px] bg-background-light">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Najnowsze wpisy na "
          coloredText="blogu"
          subtitle="Zacznij się uczyć czegoś nowego o tworzeniu stron internetowych już dziś!"
          backgroundText="Blog"
          ariaLabel="Najnowsze wpisy na blogu"
        />

        <div className="flex flex-wrap flex-col gap-[20px] mb-[50px] lg:flex-row lg:justify-evenly items-stretch ">
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

        <div className="flex justify-center">
          <CustomButton text="Zobacz wszystkie" link="/blog/" variant="white" />
        </div>
      </div>
    </section>
  );
};

export default RescentArticles;
