import React from 'react';
import { Code2, Paintbrush, Rocket, Settings, UserRound, Cpu, ShoppingBag, GraduationCap } from 'lucide-react';

export const WordPressProcessSteps = [
  {
    id: '1',
    title: 'Analiza potrzeb i konsultacja',
    desc: 'Najpierw omawiamy Twoje cele, grupę docelową i funkcjonalności, które potrzebujesz.',
    icon: <UserRound className="h-5 w-5" />,
  },
  {
    id: '2',
    title: 'Projekt UX/UI',
    subtitle: 'Makieta → UI',
    desc: 'Przygotowuję unikalny design dopasowany do Twojej marki i użytkowników.',
    icon: <Paintbrush className="h-5 w-5" />,
    points: ['Czytelny układ', 'Typografia/kolory brandu', 'Komponenty RWD'],
  },
  {
    id: '3',
    title: 'Implementacja w WordPress',
    desc: 'Implementacja motywu, konfiguracja CMS, optymalizacja mobilna.',
    icon: <Code2 className="h-5 w-5" />,
    points: ['Wydajność i cache', 'Dostępność', 'Bezpieczeństwo'],
  },
  {
    id: '4',
    title: 'Testy i szkolenie',
    desc: 'QA na urządzeniach, testy dostępności, szkolenie z panelu WP do samodzielnej edycji treści.',
    icon: <Settings className="h-5 w-5" />,
  },
  {
    id: '5',
    title: 'Wdrożenie i wsparcie',
    desc: 'Zapewniam aktualizacje i wsparcie techniczne przez min. 3 miesiące (zgodnie z cennikiem).',
    icon: <Rocket className="h-5 w-5" />,
    cta: { label: 'Zamów wycenę', href: '/kontakt/' },
  },
];

export const WebAppProcessSteps = [
  {
    id: '1',
    title: 'Analiza i plan funkcjonalny',
    desc: 'Rozpoczynamy od rozmowy o Twoich potrzebach i pomysłach. Ustalamy główne cele aplikacji, grupy użytkowników i funkcje, które będą potrzebne. Na tej podstawie tworzę plan działania oraz wstępną strukturę ekranów.',
    icon: <Cpu className="h-5 w-5" />,
    points: ['Określenie celu aplikacji', 'Identyfikacja użytkowników', 'Plan funkcjonalny projektu'],
  },
  {
    id: '2',
    title: 'Projekt UX/UI',
    subtitle: 'Od pomysłu do wyglądu',
    desc: 'Tworzę makiety i wizualny projekt aplikacji – tak, aby była intuicyjna i przyjemna w obsłudze. Wszystko dopasowane do Twojej branży i potrzeb użytkowników.',
    icon: <Paintbrush className="h-5 w-5" />,
    points: ['Makiety i design system', 'Responsywny układ (RWD)', 'Czytelne nawigacje i formularze'],
  },
  {
    id: '3',
    title: 'Programowanie i integracje',
    desc: 'Buduję front-end aplikacji w React/Next.js oraz backend w Nest.js. Łączę całość z bazą danych (MySQL lub MongoDB), płatnościami lub innymi systemami, jeśli to potrzebne.',
    icon: <Code2 className="h-5 w-5" />,
    points: ['Nowoczesne technologie', 'Bezpieczne logowanie', 'Integracje z zewnętrznymi usługami'],
  },
  {
    id: '4',
    title: 'Testy i optymalizacja',
    desc: 'Przeprowadzam dokładne testy działania aplikacji - sprawdzam szybkość, poprawność i bezpieczeństwo. Dopiero po pełnej weryfikacji aplikacja trafia na produkcję.',
    icon: <Settings className="h-5 w-5" />,
    points: ['Testy na różnych urządzeniach', 'Optymalizacja wydajności', 'Monitoring błędów i bezpieczeństwa'],
  },
  {
    id: '5',
    title: 'Wdrożenie i dalszy rozwój',
    desc: 'Publikuję aplikację na wybranym serwerze lub chmurze. Zapewniam wsparcie po wdrożeniu i pomagam rozwijać projekt w miarę pojawiających się nowych potrzeb.',
    icon: <Rocket className="h-5 w-5" />,
    cta: { label: 'Porozmawiaj o swoim projekcie', href: '/kontakt/' },
  },
];

// STRONY NA CZYSTYM HTML (statyczne, ultraszybkie)
export const HtmlProcessSteps = [
  {
    id: '1',
    title: 'Analiza celu i treści',
    desc: 'Ustalamy strukturę One-Page / multi-page, sekcje i call-to-action. Dla projektów statycznych proponuję Gatsby (SSG) - świetny pod SEO, ekstremalnie szybki i wygodny w dalszym rozwoju.',
    icon: <UserRound className="h-5 w-5" />,
  },
  {
    id: '2',
    title: 'Projekt UX/UI',
    subtitle: 'Makieta → UI',
    desc: 'Lekki, przejrzysty design z naciskiem na konwersję i czytelność.',
    icon: <Paintbrush className="h-5 w-5" />,
    points: ['Typografia', 'Siatka layoutu', 'Hero + CTA'],
  },
  {
    id: '3',
    title: 'Implementacja w HTML/CSS/JS (lub Gatsby)',
    desc: 'Czysty kod bez bazy danych - maksymalna wydajność i stabilność. W wariancie Gatsby: routing, optymalizacja obrazów i meta dla SEO.',
    icon: <Code2 className="h-5 w-5" />,
    points: ['Core Web Vitals 90+', 'Gatsby Image', 'Meta/SEO'],
  },
  {
    id: '4',
    title: 'Testy i optymalizacja',
    desc: 'Testy na urządzeniach, minifikacja, obrazki w nowych formatach.',
    icon: <Settings className="h-5 w-5" />,
  },
  {
    id: '5',
    title: 'Wdrożenie i wsparcie',
    desc: 'Publikacja na szybkim hostingu, opcjonalne aktualizacje treści.',
    icon: <Rocket className="h-5 w-5" />,
    cta: { label: 'Zamów stronę', href: '/kontakt/' },
  },
];

// SKLEPY INTERNETOWE (WooCommerce)
export const ShopProcessSteps = [
  {
    id: '1',
    title: 'Analiza oferty i logistyki',
    desc: 'Asortyment, warianty, stany, polityki zwrotów, metody wysyłki i płatności.',
    icon: <ShoppingBag className="h-5 w-5" />,
    points: ['Kategorie i filtry', 'Cenniki dostaw', 'Regulaminy/RODO'],
  },
  {
    id: '2',
    title: 'Projekt UX/UI sklepu',
    subtitle: 'Karta produktu → koszyk → checkout',
    desc: 'Projekt ścieżki zakupowej z naciskiem na konwersję i mobile-first.',
    icon: <Paintbrush className="h-5 w-5" />,
    points: ['Upsell/Cross-sell', 'Prosty checkout'],
  },
  {
    id: '3',
    title: 'Implementacja WooCommerce',
    desc: 'Konfiguracja płatności (np. Autopay/PayPal), dostaw, faktur, maili transakcyjnych.',
    icon: <Code2 className="h-5 w-5" />,
    points: ['Optymalizacja wydajności', 'SEO dla e-commerce', 'Bezpieczeństwo'],
  },
  {
    id: '4',
    title: 'Testy i szkolenie',
    desc: 'Testy koszyka/płatności, scenariusze wyjątków, szkolenie z panelu sklepu.',
    icon: <Settings className="h-5 w-5" />,
  },
  {
    id: '5',
    title: 'Start sprzedaży i wsparcie',
    desc: 'Wdrożenie, monitoring, automatyzacje e-mail, wsparcie techniczne.',
    icon: <Rocket className="h-5 w-5" />,
    cta: { label: 'Uruchom sklep', href: '/kontakt/' },
  },
];

// STRONY LMS (kursy online)
export const LmsProcessSteps = [
  {
    id: '1',
    title: 'Analiza programu i ról',
    desc: 'Mapa kursów, modułów, lekcji; role: admin, prowadzący, kursant.',
    icon: <GraduationCap className="h-5 w-5" />,
    points: ['Płatne/darmowe', 'Harmonogram', 'Certyfikaty'],
  },
  {
    id: '2',
    title: 'Projekt doświadczenia nauki',
    subtitle: 'UX kursanta i prowadzącego',
    desc: 'Czytelny player, nawigacja modułów, quizy, zadania, komentarze.',
    icon: <Paintbrush className="h-5 w-5" />,
    points: ['Gamifikacja', 'Progres i statystyki', 'Powiadomienia'],
  },
  {
    id: '3',
    title: 'Implementacja LMS',
    desc: 'Konfiguracja platformy (np. WP + wtyczka LMS) + płatności i ochrona treści.',
    icon: <Code2 className="h-5 w-5" />,
    points: ['Paywall', 'Role/uprawnienia', 'SEO dla kursów'],
  },
  {
    id: '4',
    title: 'Testy i szkolenie',
    desc: 'Testy przebiegu kursu, quizów i certyfikatów; szkolenie z panelu.',
    icon: <Settings className="h-5 w-5" />,
  },
  {
    id: '5',
    title: 'Wdrożenie i wsparcie',
    desc: 'Publikacja, integracje marketingowe, wsparcie techniczne.',
    icon: <Rocket className="h-5 w-5" />,
    cta: { label: 'Uruchom platformę', href: '/kontakt/' },
  },
];
