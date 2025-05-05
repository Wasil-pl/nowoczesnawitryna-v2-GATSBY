import React from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import './ServicesInfo.scss';

const ServicesInfo = ({ html, wordpress }) => {
  return (
    <section className="services_info bg-background-lighter py-[100px] mt-[50px]">
      <div className="container mx-auto px-4">
        <div className="wrapper flex flex-row flex-wrap justify-evenly gap-[40px] pb-[50px]">
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="card down pt-[70px] max-w-[330px]"
          >
            <SectionTitle title="Mój serwis" subtitle="Jak to wygląda?" />
          </div>

          {html && (
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className="card up pb-[70px] max-w-[330px]"
            >
              <StaticImage
                src="../../../../images/kod.webp"
                alt="zdjęcie przedstawiające ręczne pisanie kodu strony internetowej"
                width={330}
                height={440}
              />
              <div className="card_text p-[20px]">
                <h3 className="text-[1.3rem] my-[20px]">Czysty i Estetyczny kod</h3>
                <p className="text-[0.9rem]">
                  <em>Tworzę strony internetowe</em> oparte na czystym, czytelnym kodzie. To nie tylko ułatwia przyszłe
                  modyfikacje, ale także pozytywnie wpływa na pozycjonowanie w wynikach wyszukiwania, co zwiększa
                  widoczność Twojej witryny.
                </p>
              </div>
            </div>
          )}

          {wordpress && (
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className="card up pb-[70px] max-w-[330px]"
            >
              <StaticImage
                src="../../../../images/wordpress.webp"
                alt="wordpress - strony internetowe oparte na wordpress"
                width={330}
                height={440}
              />
              <div className="card_text p-[20px]">
                <h3 className="text-[1.3rem] my-[20px]">CMS – Łatwe Zarządzanie Treścią</h3>
                <p className="text-[0.9rem]">
                  Oferuję <em>tworzenie stron internetowych</em> opartych na systemach zarządzania treścią (CMS), takich
                  jak <em>WordPress</em>. Dzięki temu zyskujesz pełną kontrolę nad swoją stroną, co pozwala na
                  samodzielne dodawanie treści i aktualizowanie zawartości bez potrzeby znajomości programowania.
                </p>
              </div>
            </div>
          )}

          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="card down pt-[70px] max-w-[330px]"
          >
            <StaticImage
              src="../../../../images/web_design.webp"
              alt="web design - projektowanie stron internetowych"
              width={330}
              height={440}
            />
            <div className="card_text p-[20px]">
              <h3 className="text-[1.3rem] my-[20px]">Nowoczesny Design</h3>
              <p className="text-[0.9rem]">
                Każda strona internetowa jest projektowana z myślą o indywidualnych potrzebach Twojej marki. Tworzę
                nowoczesne, estetyczne i funkcjonalne witryny, które idealnie oddają charakter Twojego biznesu i
                przyciągają uwagę klientów.
              </p>
            </div>
          </div>

          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="card up pb-[70px] max-w-[330px]"
          >
            <StaticImage
              src="../../../../images/wspolpraca.webp"
              alt="współpraca - wsparcie i współpraca przy tworzeniu strony internetowej"
              width={330}
              height={440}
            />
            <div className="card_text p-[20px]">
              <h3 className="text-[1.3rem] my-[20px]">Wsparcie i Współpraca</h3>
              <p className="text-[0.9rem]">
                Podczas całego procesu <em>tworzenia strony internetowej</em>, będziesz na bieżąco informowany o
                postępach. Współpracujemy nad projektem, aby strona w pełni spełniała Twoje oczekiwania i była gotowa na
                czas.
              </p>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="card down pt-[70px] max-w-[330px]"
          >
            <StaticImage
              src="../../../../images/galeria.webp"
              alt="grafiki i zdjęcia - profesjonalne zdjęcia i grafiki na stronę internetową"
              width={330}
              height={440}
            />
            <div className="card_text p-[20px]">
              <h3 className="text-[1.3rem] my-[20px]">Grafiki i Zdjęcia</h3>
              <p className="text-[0.9rem]">
                Posiadam dostęp do profesjonalnej bazy grafik i zdjęć, które mogą zostać wykorzystane na Twojej stronie.
                Dzięki temu Twoja strona internetowa będzie nie tylko funkcjonalna, ale także wizualnie atrakcyjna i
                estetyczna.
              </p>
            </div>
          </div>

          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="card up pb-[70px] max-w-[330px]"
          >
            <StaticImage
              src="../../../../images/rwd.webp"
              alt="responsywność - responsywne strony internetowe"
              width={330}
              height={440}
            />
            <div className="card_text p-[20px]">
              <h3 className="text-[1.3rem] my-[20px]">Responsywność (RWD)</h3>
              <p className="text-[0.9rem]">
                <em>Każda tworzona przeze mnie strona internetowa</em> jest w pełni responsywna. To oznacza, że będzie
                doskonale wyglądać i działać na wszystkich urządzeniach, od smartfonów po laptopy, zapewniając idealne
                doświadczenie użytkownikom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
