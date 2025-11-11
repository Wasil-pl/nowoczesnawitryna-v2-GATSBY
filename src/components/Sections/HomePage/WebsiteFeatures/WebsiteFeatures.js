// WebsiteFeatures.jsx
import React, { useEffect } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import sal from 'sal.js';

const WebsiteFeatures = () => {
  useEffect(() => {
    sal(); // ponowna inicjalizacja animacji
  }, []);

  return (
    <section className="py-[100px]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Strona internetowa dopasowana do "
          coloredText="Twoich potrzeb"
          subtitle="Kompleksowe funkcje i Nowoczesne rozwiązania"
          backgroundText="Funkcje"
          ariaLabel="Strona internetowa dopasowana do Twoich potrzeb"
        />

        <div className="mt-[150px] flex flex-wrap justify-between gap-y-12">
          {/* 1 */}
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className=" w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center"
          >
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/price.png" alt="Cennik" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Przystępne ceny</h3>
            <p>
              Oferuję <strong>strony internetowe</strong> w przejrzystych pakietach - bez ukrytych kosztów i bez
              kompromisów w jakości. Dzięki indywidualnej wycenie dopasowuję zakres prac do budżetu i celów Twojej
              firmy.
            </p>
          </div>

          {/* 2 */}
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center"
          >
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/seo.png" alt="SEO" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Optymalizacja SEO</h3>
            <p>
              Projektuję <strong>strony internetowe</strong> zgodne z dobrymi praktykami SEO: przejrzysta semantyka,
              lekkie grafiki, czysta nawigacja i szybkie ładowanie. To realna podstawa lepszych pozycji w
              wyszukiwarkach.
            </p>
          </div>

          {/* 3 */}
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center"
          >
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/rodo.png" alt="RODO" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Zgodność z RODO</h3>
            <p>
              Każda strona przechodzi przegląd pod kątem RODO: polityka prywatności, cookies, zgody i niezbędne
              mechanizmy. Dbam o to, by Twoja witryna bezpiecznie przetwarzała dane użytkowników.
            </p>
          </div>

          {/* 4 */}
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center"
          >
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/support.png" alt="Wsparcie" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Wsparcie i opieka techniczna</h3>
            <p>
              Po wdrożeniu zapewniam aktualizacje, kopie zapasowe i szybkie wsparcie. Pomagam rozwijać stronę wraz z
              potrzebami firmy, tak by była zawsze sprawna i aktualna.
            </p>
          </div>

          {/* 5 */}
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center"
          >
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/page-speed.png" alt="Szybkość" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Optymalizacja wydajności</h3>
            <p>
              Skupiam się na szybkości: Core Web Vitals, minimalizacja skryptów i dobre praktyki front-end. Szybka
              strona to lepsze UX, wyższe konwersje i wsparcie dla SEO.
            </p>
          </div>

          {/* 6 */}
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center"
          >
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/responsive.png" alt="Responsywność" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Responsywność mobilna</h3>
            <p>
              Każda <strong>strona internetowa</strong>, którą projektuję, jest w pełni responsywna. Oznacza to, że
              wygląda doskonale i działa płynnie na każdym urządzeniu – zarówno na komputerze, jak i na smartfonie czy
              tablecie.
            </p>
          </div>

          {/* 7 */}
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center"
          >
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/cms_function.png" alt="CMS" width={200} />
            </div>
            <h3 className="text-xl font-bold mb-5">CMS - WordPress</h3>
            <p>
              Specjalizuję się w tworzeniu stron internetowych opartych na systemie WordPress CMS, dostosowując ten
              potężny i elastyczny system open source do indywidualnych potrzeb Twojej firmy. Korzystam z edytorów
              wizualnych, takich jak Gutenberg, aby umożliwić łatwe zarządzanie treścią na stronie.
            </p>
          </div>

          {/* 8 */}
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center"
          >
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/woocommerce.png" alt="WooCommerce" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Sklepy online</h3>
            <p>
              Tworzę strony internetowe z wykorzystaniem WooCommerce, najpopularniejszego na świecie rozszerzenia do
              WordPressa, które pozwala na stworzenie profesjonalnego sklepu internetowego. Dzięki temu Twoja firma może
              sprzedawać produkty online w łatwy i skuteczny sposób. Niezależnie od tego, czy chcesz sprzedawać produkty
              fizyczne, cyfrowe czy usługi, WooCommerce zapewnia wszystkie niezbędne funkcje do prowadzenia sklepu
              online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteFeatures;
