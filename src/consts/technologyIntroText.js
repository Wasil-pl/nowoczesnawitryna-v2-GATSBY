import React from 'react';
import { Globe2, Code2, ShoppingBag, PenTool, Cpu, GraduationCap } from 'lucide-react';

export const content = {
  wordpress: {
    icon: <Globe2 className="h-10 w-10 text-primary mb-4" />,
    title: 'Czym jest WordPress i dla kogo jest najlepszy?',
    desc: `WordPress to najpopularniejszy na świecie system CMS, dzięki któremu możesz mieć stronę, którą samodzielnie edytujesz bez znajomości kodu. 
Nadaje się idealnie dla firm, które chcą często aktualizować treści — np. dodawać nowe wpisy, zdjęcia, oferty czy produkty.

To elastyczne rozwiązanie – można na nim stworzyć zarówno prostą stronę firmową, jak i rozbudowany serwis z blogiem lub sklepem internetowym. 
Dodatkowo WordPress jest przyjazny dla SEO, a jego ogromny ekosystem wtyczek pozwala rozszerzać funkcje w miarę rozwoju firmy.`,
  },

  html: {
    icon: <Code2 className="h-10 w-10 text-primary mb-4" />,
    title: 'Czym są strony HTML i kiedy warto je wybrać?',
    desc: `Strona HTML to witryna napisana bez systemu zarządzania treścią (CMS). Jest wyjątkowo szybka, lekka i odporna na błędy, bo nie wymaga bazy danych ani logowania. 
To najlepszy wybór dla małych projektów, landing page’y lub firm, które chcą mieć piękną i prostą stronę-wizytówkę bez potrzeby edycji treści.

Takie strony są bardzo dobrze zoptymalizowane, błyskawicznie się ładują i często osiągają maksymalne wyniki Core Web Vitals – co pozytywnie wpływa na pozycjonowanie w Google.`,
  },

  shop: {
    icon: <ShoppingBag className="h-10 w-10 text-primary mb-4" />,
    title: 'Czym jest sklep internetowy i jak działa WooCommerce?',
    desc: `Sklep internetowy to platforma e-commerce umożliwiająca sprzedaż produktów lub usług online. 
Najczęściej tworzę sklepy oparte o WooCommerce – rozszerzenie WordPressa, które daje pełną kontrolę nad zamówieniami, płatnościami, stanami magazynowymi i integracjami.

To rozwiązanie idealne dla małych i średnich biznesów, które chcą samodzielnie zarządzać ofertą i rozwijać sprzedaż w sieci. 
Sklepy WooCommerce są elastyczne, bezpieczne i dostosowane do wymagań SEO oraz urządzeń mobilnych.`,
  },

  logo: {
    icon: <PenTool className="h-10 w-10 text-primary mb-4" />,
    title: 'Dlaczego profesjonalne logo ma znaczenie?',
    desc: `Logo to coś więcej niż ładna grafika — to pierwszy kontakt klienta z Twoją marką. Dobrze zaprojektowane logo buduje zaufanie, wyróżnia firmę i sprawia, że jest zapamiętywana. 
Podczas projektowania logotypu analizuję branżę, konkurencję i grupę docelową, by stworzyć symbol, który oddaje charakter marki.

Wykonuję projekty logo od podstaw, dostosowując je do strony internetowej, materiałów firmowych i kolorystyki marki. 
Efekt końcowy to znak graficzny, który jest spójny, czytelny i gotowy do użycia wszędzie — od wizytówki po stronę główną.`,
  },

  webapp: {
    icon: <Cpu className="h-10 w-10 text-primary mb-4" />,
    title: 'Czym są zaawansowane aplikacje webowe?',
    desc: `Aplikacje webowe to rozbudowane systemy działające w przeglądarce, które wykraczają poza klasyczne strony internetowe. 
Mogą obsługiwać logowanie użytkowników, panele administracyjne, systemy rezerwacji, platformy edukacyjne (LMS), CRM-y czy konfiguratory produktów.

Tworzę takie rozwiązania w technologiach React, Next.js i Nest.js, z wykorzystaniem baz danych (MySQL, MongoDB) i nowoczesnych API. 
To idealna opcja dla firm, które potrzebują indywidualnych funkcji lub chcą zautomatyzować część procesów online.`,
  },

  lms: {
    icon: <GraduationCap className="h-10 w-10 text-primary mb-4" />,
    title: 'Czym jest platforma LMS i komu się przyda?',
    desc: `LMS (Learning Management System) to platforma e-learningowa służąca do prowadzenia kursów online, lekcji wideo, testów i wydawania certyfikatów. 
Pozwala zarządzać użytkownikami, monitorować postępy nauki i automatyzować proces edukacyjny.

To idealne rozwiązanie dla trenerów, szkół, firm szkoleniowych i ekspertów, którzy chcą sprzedawać lub udostępniać swoją wiedzę online. 
Tworzę systemy LMS oparte o WordPress lub dedykowane rozwiązania React/Nest, z integracjami płatności, automatycznym dostępem i przyjaznym panelem dla kursantów.`,
  },
};
