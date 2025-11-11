import React, { useEffect, useState, useMemo } from 'react';
import { Check, Minus, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import './CompareCmsVsStatic.scss';
import sal from 'sal.js';

const items = [
  {
    name: 'Edycja i aktualizacja treści',
    wp: {
      ok: true,
      text: 'Edycja w edytorze blokowym (Gutenberg). Nie jest to pełny „przeciągnij i upuść” jak w Elementorze, ale pozwala dość łatwo zmieniać treści po krótkim wdrożeniu.',
    },
    static: {
      ok: false,
      text: 'Aktualizacje zwykle przez wykonawcę lub z repozytorium. Najlepsze, gdy treści zmieniają się rzadko i chcesz 100% kontroli nad kodem.',
    },
  },
  {
    name: 'Szybkość działania',
    wp: {
      ok: true,
      text: 'Szybka przy rozsądnej liczbie wtyczek, dobrej konfiguracji cache i solidnym hostingu. Nadmiar pluginów i ciężkie motywy potrafią spowolnić stronę.',
    },
    static: {
      ok: true,
      text: 'Ekstremalnie szybka - statyczne strony i nowoczesne bundlowanie. Świetne wyniki w Core Web Vitals i wysokie oceny w Lighthouse.',
    },
  },
  {
    name: 'Pozycjonowanie (SEO)',
    wp: {
      ok: true,
      text: 'Dobre wsparcie wtyczkami (np. Yoast/Rank Math) i łatwe zarządzanie meta danymi. Wyniki zależą od jakości motywu, wydajności i treści.',
    },
    static: {
      ok: true,
      text: 'Czysty, lekki markup i pełna kontrola nad strukturą. Bardzo dobre podstawy techniczne + świetna prędkość = mocny start pod SEO.',
    },
  },
  {
    name: 'Bezpieczeństwo',
    wp: {
      ok: false,
      text: 'Wymaga stałych aktualizacji core, motywów i wtyczek, a także dodatkowych zabezpieczeń (WAF, kopie zapasowe). Mimo tego bywa podatny na ataki przez słabe pluginy/hasła.',
    },
    static: {
      ok: true,
      text: 'Bardzo wysoki poziom - brak panelu logowania i bazy ogranicza wektor ataku. Mniej elementów do aktualizacji i mniejsze ryzyko luk.',
    },
  },
  {
    name: 'Możliwości rozbudowy',
    wp: {
      ok: true,
      text: 'Ogromny ekosystem - sklep (WooCommerce), blog, płatności, newsletter, integracje. Szybkie wdrożenia kosztem dodatkowych zależności.',
    },
    static: {
      ok: false,
      text: 'Funkcje „szyte na miarę” (API, mikro-usługi). Lżejsze i szybsze, ale rozbudowa zwykle wymaga pracy deweloperskiej.',
    },
  },
  {
    name: 'Koszty utrzymania',
    wp: {
      ok: false,
      text: 'Niski koszt startu, natomiast w utrzymaniu dochodzą: aktualizacje, kopie, monitoring, ewentualne płatne pluginy i opieka techniczna.',
    },
    static: {
      ok: true,
      text: 'Po wdrożeniu zwykle bezobsługowe (mniej ruchomych części). W długim terminie często tańsze w utrzymaniu przy prostszych serwisach.',
    },
  },
  {
    name: 'Czas realizacji projektu',
    wp: {
      ok: true,
      text: 'Dzięki gotowym wtyczkom i motywom można uruchomić stronę w kilka dni. Idealny wybór, gdy liczy się szybki start i mniejszy budżet.',
    },
    static: {
      ok: false,
      text: 'Projekt od podstaw wymaga zaplanowania struktury, designu i wdrożenia. Czas realizacji jest dłuższy, ale efekt w pełni dopasowany do marki i potrzeb.',
    },
  },
  {
    name: 'Cena wykonania strony',
    wp: {
      ok: true,
      text: 'Niższy koszt początkowy – korzysta z gotowych elementów. Dobry wybór przy ograniczonym budżecie lub dla prostych stron firmowych.',
    },
    static: {
      ok: false,
      text: 'Wyższa cena startowa ze względu na indywidualny projekt i kodowanie od zera. W zamian otrzymujesz unikalny design, lepszą wydajność i trwałość rozwiązania.',
    },
  },
];

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold bg-background-primary text-background-light">
    {children}
  </span>
);

const VerdictIcon = ({ ok, className = '' }) =>
  ok ? (
    <Check className={`w-4 h-4 text-primary ${className}`} />
  ) : (
    <Minus className={`w-4 h-4 text-text-dark opacity-60 ${className}`} />
  );

const AccordionCard = ({ item, index, isOpen, onToggle }) => {
  const panelId = `cmp-panel-${index}`;
  const buttonId = `cmp-button-${index}`;

  return (
    <div key={index} data-sal="fade" data-sal-delay="100">
      <button
        id={buttonId}
        className="bg-background-light rounded-[20px] flex justify-between items-center text-left w-full px-[10px] py-[5px]"
        onClick={() => onToggle(isOpen ? null : index)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-[1rem] md:text_small font-bold uppercase font-body">{item.name}</h3>
        </div>

        {isOpen ? (
          <ChevronUp className="w-5 h-5 shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-5 h-5 shrink-0" aria-hidden="true" />
        )}
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`accordion-content px-[16px] ${isOpen ? 'open' : ''}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* WP */}
          <div className="p-4  ">
            <div className="flex items-center gap-2 mb-2">
              <Pill>WordPress</Pill>
              <VerdictIcon ok={item.wp.ok} />
            </div>
            <p className="text-text-light m-0">{item.wp.text}</p>
          </div>

          {/* Static / Gatsby */}
          <div className="p-4 ">
            <div className="flex items-center gap-2 mb-2">
              <Pill>HTML / Gatsby</Pill>
              <VerdictIcon ok={item.static.ok} />
            </div>
            <p className="text-text-light m-0">{item.static.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompareCmsVsStatic = ({
  id = 'porownanie',
  blogHref = '/blog/cms-vs-strona-pisana-od-podstaw/',
  contactHref = '/kontakt/',
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    sal(); // ponowna inicjalizacja animacji po zamontowaniu
  }, []);

  // Dwie kolumny na desktopie (lg↑), jedna kolumna na tablet/mobile (lg↓)
  // Rozdzielamy elementy parzyste/nieparzyste, żeby wysokości kolumn były zbliżone.
  const columns = useMemo(() => [items.filter((_, i) => i % 2 === 0), items.filter((_, i) => i % 2 === 1)], []);

  return (
    <section id={id} className="compare-cms-static relative pb-[100px]">
      <div className="container mx-auto px-4">
        {/* AKORDEON: grid 1 ↔ 2 kolumny */}
        <div className="accordion_wrapper mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          {/* Kolumna 1 */}
          <div className="flex flex-col gap-[20px]">
            {columns[0].map((item) => {
              const index = items.indexOf(item); // globalny index dla jednego stanu openIndex
              const isOpen = openIndex === index;
              return <AccordionCard key={index} item={item} index={index} isOpen={isOpen} onToggle={setOpenIndex} />;
            })}
          </div>
          {/* Kolumna 2 */}
          <div className="flex flex-col gap-[20px]">
            {columns[1].map((item) => {
              const index = items.indexOf(item);
              const isOpen = openIndex === index;
              return <AccordionCard key={index} item={item} index={index} isOpen={isOpen} onToggle={setOpenIndex} />;
            })}
          </div>
        </div>

        {/* Podsumowanie */}
        <div
          className="relative info-choose mt-[100px] text-center max-w-[850px] mx-auto"
          data-sal="fade"
          data-sal-delay="300"
        >
          <h3 className="text-[1.5rem] font-bold text-primary mb-3">Które rozwiązanie wybrać?</h3>
          <p className="text-text-light">
            Jeśli chcesz mieć prosty panel i samodzielnie edytować treści – wybierz <strong>WordPress</strong>. Jeśli
            zależy Ci na maksymalnej szybkości, bezpieczeństwie i stronie, która „po prostu działa” bez panelu – wybierz{' '}
            <strong>HTML / Gatsby</strong>. W obu przypadkach zapewniam pełne wsparcie w{' '}
            <strong>tworzeniu stron internetowych</strong> od projektu po wdrożenie.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-[30px] flex flex-col md:flex-row items-center justify-center gap-4">
          <a href={blogHref} className="custom_button inline-flex items-center gap-2">
            Przeczytaj więcej na blogu
            <ExternalLink className="w-4 h-4" />
          </a>
          <a href={contactHref} className="custom_button inline-flex items-center gap-2" data-hex="#191919">
            Napisz do mnie
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompareCmsVsStatic;
