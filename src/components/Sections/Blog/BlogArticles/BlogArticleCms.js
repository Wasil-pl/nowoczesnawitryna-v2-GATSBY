// BlogArticleCms.jsx
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const BlogArticleCms = () => {
  return (
    <div className="blog_articles py-[100px] max-w-[920px] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-[1.8rem] mt-[50px] mb-[30px]">
          CMS vs strona pisana od podstaw – co wybrać do tworzenia stron internetowych?
        </h2>
        <p className="mb-[30px]">
          Jeśli chcesz stworzyć własną stronę internetową, musisz podjąć ważną decyzję: czy użyć gotowego systemu
          zarządzania treścią CMS, jak np. WordPress, czy napisać stronę od podstaw, używając HTML, CSS oraz JavaScript.
          Oba rozwiązania mają swoje zalety i wady, które warto poznać, zanim zdecydujesz się na jedno z nich. W tym
          artykule przedstawię Ci główne różnice między CMS a ręcznym kodowaniem oraz podpowiem, co lepiej wybrać do
          tworzenia stron internetowych.
        </p>

        <h2 className="text-[1.8rem] mt-[50px] mb-[30px]">CMS – co to jest?</h2>
        <div className="blog_image flex flex-col items-center md:flex-row">
          <div className="text flex-[2]">
            <p className="mb-[30px]">
              CMS to skrót od Content Management System, czyli system zarządzania treścią. Jest to oprogramowanie, które
              umożliwia łatwe tworzenie i edycję stron internetowych bez konieczności pisania kodu. CMS oferuje gotowe
              szablony, moduły i wtyczki, które można dostosować do własnych potrzeb i preferencji. Przykładami
              popularnych CMS są WordPress, Joomla, Drupal, Wix, Squarespace, Shopify czy Magento. Jeśli interesuje Cię
              budowa strony internetowej na WordPressie, sprawdź moją ofertę{' '}
              <AniLink
                paintDrip
                duration={1.2} // czas całego przejścia
                hex="#191919" // kolor „zalania” (może być też color="blue")
                direction="left" // kierunek slideIn contentu po wejściu (opcjonalnie)
                to="/strony-wordpress/"
              >
                stron opartych na WordPressie
              </AniLink>{' '}
              – oferuję elastyczne i funkcjonalne rozwiązania dostosowane do potrzeb różnych branż.
            </p>
          </div>
          <div className="image flex-[1] ml-0 mb-[40px] md:ml-[40px] md:mb-0">
            <StaticImage
              src="../../../../images/cms.webp"
              width={600}
              height={400}
              alt="CMS - wordpress, strony internetowe oparte na wordpress"
            />
          </div>
        </div>

        <h3 className="text-[1.4rem] mb-[20px]">Zalety CMS:</h3>
        <ul className="mb-[30px] list-disc list-inside">
          <li>
            <strong>Łatwość obsługi:</strong> Nie musisz znać języków programowania ani HTML, CSS czy JavaScript, aby
            stworzyć atrakcyjną i funkcjonalną stronę internetową.
          </li>
          <li>
            <strong>Szybkość:</strong> Dzięki gotowym szablonom i wtyczkom, stworzenie strony internetowej w CMS zajmuje
            znacznie mniej czasu.
          </li>
          <li>
            <strong>Niski koszt:</strong> Większość CMS jest darmowa, a za dodatkowe funkcje płacisz tylko wtedy, gdy
            ich potrzebujesz.
          </li>
          <li>
            <strong>Łatwa aktualizacja:</strong> Możesz w prosty sposób aktualizować treści i wygląd strony bez
            ingerencji w kod.
          </li>
          <li>
            <strong>Wsparcie społeczności:</strong> Łatwo znaleźć pomoc online w postaci poradników, forów i kursów.
          </li>
        </ul>

        <h3 className="text-[1.4rem] mb-[20px]">Wady CMS:</h3>
        <ul className="mb-[30px] list-disc list-inside">
          <li>
            <strong>Ograniczona personalizacja:</strong> Ciężko stworzyć w pełni unikalne rozwiązanie.
          </li>
          <li>
            <strong>Wydajność:</strong> Strony mogą działać wolniej przy dużej liczbie wtyczek.
          </li>
          <li>
            <strong>Bezpieczeństwo:</strong> Wymagana regularna aktualizacja, by chronić przed atakami.
          </li>
        </ul>

        <h2 className="text-[1.8rem] mt-[50px] mb-[30px]">Kod pisany od podstaw – co to jest?</h2>
        <div className="blog_image flex flex-col items-center md:flex-row">
          <div className="text flex-[2]">
            <p className="mb-[30px]">
              Strona napisana od podstaw to taka, która nie korzysta z gotowych rozwiązań CMS, lecz jest kodowana
              indywidualnie za pomocą HTML, CSS i JavaScript, co daje pełną kontrolę nad wyglądem i funkcjonalnością...
            </p>
          </div>
          <div className="image flex-[1] ml-0 mb-[40px] md:ml-[40px] md:mb-0">
            <StaticImage
              src="../../../../images/kod.webp"
              width={600}
              height={400}
              alt="kodowanie - ręczne kodowanie strony internetowej"
            />
          </div>
        </div>

        <h3 className="text-[1.4rem] mb-[20px]">Zalety tego rozwiązania:</h3>
        <ul className="mb-[30px] list-disc list-inside">
          <li>
            <strong>Unikalność:</strong> Pełna kontrola nad wyglądem i funkcjonalnością.
          </li>
          <li>
            <strong>Wydajność:</strong> Strony są szybsze i bardziej wydajne.
          </li>
          <li>
            <strong>Bezpieczeństwo:</strong> Mniej podatne na ataki.
          </li>
          <li>
            <strong>Skalowalność:</strong> Łatwiejsza rozbudowa i modyfikacja.
          </li>
        </ul>

        <h3 className="text-[1.4rem] mb-[20px]">Wady tego rozwiązania:</h3>
        <ul className="mb-[30px] list-disc list-inside">
          <li>
            <strong>Koszt:</strong> Droższe i czasochłonne.
          </li>
          <li>
            <strong>Trudność:</strong> Wymaga specjalistycznej wiedzy programistycznej.
          </li>
          <li>
            <strong>Czas:</strong> Dłuższy proces planowania i wdrożenia.
          </li>
        </ul>

        <h2 className="text-[1.8rem] mt-[50px] mb-[30px]">CMS vs czysty kod – co wybrać?</h2>
        <p className="mb-[30px]">
          Ostateczna decyzja zależy od Twoich potrzeb, budżetu i zasobów. Jeśli liczy się szybkość i niski koszt –
          wybierz CMS. Jeśli zaś zależy Ci na maksymalnej wydajności i unikalności – kod od podstaw.
        </p>
      </div>
    </div>
  );
};

export default BlogArticleCms;
