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
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/price.png" alt="Cennik" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Przystępne ceny</h3>
            <p>
              Oferuję strony internetowe w przystępnych cenach, bez kompromisów w jakości. Dzięki indywidualnemu
              podejściu zapewniam najwyższy standard usług dostosowany do budżetu Twojej firmy.
            </p>
          </div>

          {/* 2 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/seo.png" alt="SEO" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Optymalizacja SEO</h3>
            <p>
              Tworzę strony internetowe zgodne z najnowszymi standardami SEO, które pomagają uzyskać lepsze pozycje w
              wyszukiwarkach. Moje strony są zoptymalizowane od podstaw, aby wspierać widoczność Twojej firmy w
              internecie.
            </p>
          </div>

          {/* 3 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/rodo.png" alt="RODO" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Zapewnienie Zgodności z RODO na Mojej Stronie Internetowej</h3>
            <p>
              Dostosowanie się do wymogów RODO może być wyzwaniem, ale rozumiem, jak istotna jest ochrona danych. Każda
              tworzona przeze mnie strona internetowa przechodzi szczegółowy przegląd zgodności z RODO. Zapewniam
              wprowadzenie wszystkich wymaganych zabezpieczeń, aby Twoja witryna spełniała standardy RODO i gwarantowała
              bezpieczne przetwarzanie danych użytkowników.
            </p>
          </div>

          {/* 4 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/support.png" alt="Wsparcie" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Wsparcie i opieka techniczna</h3>
            <p>
              Po dostarczeniu strony zapewniam pełne wsparcie techniczne i pomoc w bieżących aktualizacjach. Możesz
              liczyć na moje zaangażowanie zarówno na etapie wdrożenia, jak i po uruchomieniu strony.
            </p>
          </div>

          {/* 5 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/page-speed.png" alt="Szybkość" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Optymalizacja wydajności</h3>
            <p>
              Dbam o to, by moje strony osiągały jak najwyższe wyniki w narzędziach takich jak PageSpeed Insights.
              Dzięki temu Twoja witryna będzie szybka, co pozytywnie wpływa na doświadczenia użytkowników oraz wyniki
              SEO.
            </p>
          </div>

          {/* 6 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/responsive.png" alt="Responsywność" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">Responsywność mobilna</h3>
            <p>
              Każda strona, którą projektuję, jest w pełni responsywna. Oznacza to, że wygląda doskonale i działa
              płynnie na każdym urządzeniu – zarówno na komputerze, jak i na smartfonie czy tablecie.
            </p>
          </div>

          {/* 7 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
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
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
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
