import React from 'react';
import './Prices.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import CallToAction from '../CallToAction/CallToAction';
import ShapeDividersTop from '../../../Ui/ShapeDividers/ShapeDividersTop';
import ShapeDividersBottom from '../../../Ui/ShapeDividers/ShapeDividersBottom';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Prices = ({ html, wordpress, sklep, aplikacja, lms, logo }) => {
  return (
    <section id="price" className="prices bg-background-dark text-text-light py-[200px] mb-[250px] relative">
      <ShapeDividersTop variant="f7f7f7" />

      <div className="container mx-auto px-4">
        <SectionTitle
          coloredText="Cennik"
          subtitle="Zobacz i wybierz najlepszą ofertę dla siebie"
          variant="sections_title_white"
          backgroundText="cennik"
        />

        <div className="wrapper flex flex-col gap-[80px]">
          {html && (
            <div className="price_box flex flex-col lg:flex-row justify-between mb-[80px]">
              <div
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="1000"
                className=" text_box flex-[2] pr-0 lg:pr-[40px] px-[20px]"
              >
                <h3 className="text-[1.8rem] mb-[20px] text-primary">Strona One-Page</h3>
                <p className="mb-[20px]">
                  One-Page to prosta, ale skuteczna witryna, która prezentuje całą Twoją ofertę na jednej stronie.
                  Użytkownicy mogą w łatwy sposób przewijać stronę, aby zapoznać się z usługami i produktami, bez
                  konieczności wchodzenia na dodatkowe podstrony.
                </p>
                <p className="mb-[20px]">Dla kogo jest dedykowana?</p>
                <p className="mb-[20px]">
                  Rozwiązanie idealne dla firm i osób, które chcą przedstawić swoją treść w sposób klarowny i prosty.
                  Idealne dla małych biznesów, które nie potrzebują rozbudowanej struktury podstron.
                </p>
              </div>

              <div
                data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="flex-[1] px-[40px] py-[20px] bg-background-light text-text-dark"
              >
                <div className="text-center mb-[40px]">
                  <h3 className="text-[1.8rem] font-bold mb-[10px]">Strona One-Page</h3>
                  <p className="text-[1.4rem] mb-[10px]">cena od</p>
                  <h4 className="text-[1.5rem] font-bold">
                    <span className="text-[2.2rem] text-primary font-bold">1600</span> zł
                  </h4>
                  <hr />
                </div>
                <div className="flex flex-col mb-[20px]">
                  <ul className="list-none p-0">
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-danger">✗</span>
                      <p className="flex-[1]">Wiele podstron ( tylko strona główna)</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Proste animacje</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Zdjęcia i grafiki</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Formularz kontaktowy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-danger">✗</span>
                      <p className="flex-[1]">System CMS</p>
                    </li>
                    <li className="mb-[40px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-danger">✗</span>
                      <p className="flex-[1]">Panel administracyjny</p>
                    </li>
                  </ul>

                  <AniLink
                    paintDrip
                    duration={1.2}
                    hex="#191919"
                    direction="left"
                    to="/formularz-szybkiej-wyceny/#form"
                    className="text-center mt-auto bg-primary text-text-dark py-2 px-4 uppercase font-bold hover:text-primary "
                  >
                    Szybka Wycena Twojej Strony
                  </AniLink>
                </div>
              </div>
            </div>
          )}

          {html && (
            <div className="price_box flex flex-col lg:flex-row justify-between mb-[80px]">
              <div
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="1000"
                className=" text_box flex-[2] pr-0 lg:pr-[40px] px-[20px]"
              >
                <h3 className="text-[1.8rem] mb-[20px] text-primary">Strona Multi-Page</h3>
                <p className="mb-[20px]">
                  Multi-Page to rozbudowana witryna z wieloma podstronami, która umożliwia szczegółową prezentację
                  Twojej oferty. Każda podstrona może być dedykowana innemu aspektowi Twojego biznesu, co pozwala
                  użytkownikom lepiej zrozumieć pełen zakres Twoich usług i produktów.
                </p>
                <p className="mb-[20px]">Dla kogo jest dedykowana?</p>
                <p className="mb-[20px]">
                  Idealne rozwiązanie dla firm, które potrzebują bardziej złożonej struktury witryny, aby w pełni
                  zaprezentować swoją ofertę i dopasować ją do potrzeb użytkowników.
                </p>
              </div>

              <div
                data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="flex-[1] px-[40px] py-[20px] bg-background-light text-text-dark"
              >
                <div className="text-center mb-[40px]">
                  <h3 className="text-[1.8rem] font-bold mb-[10px]">Strona Multi-Page</h3>
                  <p className="text-[1.4rem] mb-[10px]">cena od</p>
                  <h4 className="text-[1.5rem] font-bold">
                    <span className="text-[2.2rem] text-primary font-bold">2000</span> zł
                  </h4>
                  <hr />
                </div>
                <div className="flex flex-col mb-[20px]">
                  <ul className="list-none p-0">
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Wiele podstron</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Proste animacje</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Zdjęcia i grafiki</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Formularz kontaktowy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-danger">✗</span>
                      <p className="flex-[1]">System CMS</p>
                    </li>
                    <li className="mb-[40px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-danger">✗</span>
                      <p className="flex-[1]">Panel administracyjny</p>
                    </li>
                  </ul>

                  <AniLink
                    paintDrip
                    duration={1.2}
                    hex="#191919"
                    direction="left"
                    to="/formularz-szybkiej-wyceny/#form"
                    className="text-center mt-auto bg-primary text-text-dark py-2 px-4 uppercase font-bold hover:text-primary "
                  >
                    Szybka Wycena Twojej Strony
                  </AniLink>
                </div>
              </div>
            </div>
          )}

          {aplikacja && (
            <div className="price_box flex flex-col lg:flex-row justify-between mb-[80px]">
              <div
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="1000"
                className=" text_box flex-[2] pr-0 lg:pr-[40px] px-[20px]"
              >
                <h3 className="text-[1.8rem] mb-[20px] text-primary">Aplikacja Webowa</h3>
                <p className="mb-[20px]">
                  Moje aplikacje webowe łączą nowoczesne technologie, interakcję użytkownika i bogate doświadczenie,
                  zarówno dla Ciebie, jak i Twoich klientów. Oferują one nie tylko informacje, ale również zaawansowane
                  funkcje, takie jak animacje, elementy interaktywne oraz integracje z różnymi systemami.
                </p>
                <p className="mb-[20px]">
                  Strony Zaawansowane są dedykowane dla tych, którzy chcą się wyróżnić oryginalnością i atrakcyjnością
                  swojej witryny internetowej. Są one idealnym rozwiązaniem, jeśli pragniesz dostarczyć swoim
                  użytkownikom niezapomnianych wrażeń online. Dzięki wykorzystaniu licznych skryptów JS i innych
                  technologii, te strony świetnie nadają się do projektów wymagających zaawansowanej funkcjonalności.
                </p>
              </div>

              <div
                data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="flex-[1] px-[40px] py-[20px] bg-background-light text-text-dark"
              >
                <div className="text-center mb-[40px]">
                  <h3 className="text-[1.8rem] font-bold mb-[10px]">Aplikacja www</h3>
                  <p className="text-[1.4rem] mb-[10px]">cena od</p>
                  <h4 className="text-[1.5rem] font-bold">
                    <span className="text-[2.2rem] text-primary font-bold">3500</span> zł
                  </h4>
                  <hr />
                </div>
                <div className="flex flex-col mb-[20px]">
                  <ul className="list-none p-0">
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Wiele podstron</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Proste animacje</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Zdjęcia i grafiki</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Formularz kontaktowy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">System CMS</p>
                    </li>
                    <li className="mb-[40px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Panel administracyjny</p>
                    </li>
                  </ul>

                  <AniLink
                    paintDrip
                    duration={1.2}
                    hex="#191919"
                    direction="left"
                    to="/formularz-szybkiej-wyceny/#form"
                    className="text-center mt-auto bg-primary text-text-dark py-2 px-4 uppercase font-bold hover:text-primary "
                  >
                    Szybka Wycena Twojej Strony
                  </AniLink>
                </div>
              </div>
            </div>
          )}

          {sklep && (
            <div className="price_box flex flex-col lg:flex-row justify-between mb-[80px]">
              <div
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="1000"
                className=" text_box flex-[2] pr-0 lg:pr-[40px] px-[20px]"
              >
                <h3 className="text-[1.8rem] mb-[20px] text-primary">Sklep internetowy</h3>
                <p className="mb-[20px]">
                  Każdy sklep internetowy, który tworzę, jest w pełni zgodny z obowiązującymi przepisami prawa polskiego
                  i unijnego. W ramach realizacji zapewniam m.in. przygotowanie regulaminu sklepu, polityki prywatności
                  oraz innych niezbędnych dokumentów, które są wymagane do prowadzenia legalnej sprzedaży online. Dzięki
                  temu Twój sklep internetowy będzie nie tylko funkcjonalny, ale także bezpieczny i profesjonalny.{' '}
                </p>
                <p className="mb-[20px]">
                  Każdy sklep internetowy, który tworzę, jest w pełni zgodny z obowiązującymi przepisami prawa. W ramach
                  realizacji zapewniam m.in. przygotowanie regulaminu, polityki prywatności i innych dokumentów
                  wymaganych do prowadzenia sprzedaży online.
                </p>
                <p className="mb-[20px]">Dla kogo jest dedykowana?</p>
                <p className="mb-[20px]">
                  Sklep internetowy oparty na WooCommerce to idealne rozwiązanie dla firm oraz osób, które chcą
                  rozpocząć lub rozwijać działalność w zakresie sprzedaży online. Zapewnia szerokie możliwości
                  sprzedażowe oraz prostą obsługę, co sprawia, że zarządzanie sklepem staje się intuicyjne i efektywne.
                </p>
              </div>

              <div
                data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="flex-[1] px-[40px] py-[20px] bg-background-light text-text-dark"
              >
                <div className="text-center mb-[40px]">
                  <h3 className="text-[1.8rem] font-bold mb-[10px]">Sklep www</h3>
                  <p className="text-[1.4rem] mb-[10px]">cena od</p>
                  <h4 className="text-[1.5rem] font-bold">
                    <span className="text-[2.2rem] text-primary font-bold">2000</span> zł
                  </h4>
                  <hr />
                </div>
                <div className="flex flex-col mb-[20px]">
                  <ul className="list-none p-0">
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Wiele podstron</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Responsywność</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Proste animacje</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Zdjęcia i grafiki</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Instalacja i konfiguracja WooCommerce</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Dodanie produktów (w cenie do 30 szt.)</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Szkolenie (wideo + chat)</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Regulamin sklepu</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Wsparcie przez 3 miesiące</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Formularz kontaktowy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">System CMS</p>
                    </li>
                    <li className="mb-[40px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Panel administracyjny</p>
                    </li>
                  </ul>

                  <AniLink
                    paintDrip
                    duration={1.2}
                    hex="#191919"
                    direction="left"
                    to="/formularz-szybkiej-wyceny/#form"
                    className="text-center mt-auto bg-primary text-text-dark py-2 px-4 uppercase font-bold hover:text-primary "
                  >
                    Szybka Wycena Twojej Strony
                  </AniLink>
                </div>
              </div>
            </div>
          )}

          {lms && (
            <div className="price_box flex flex-col lg:flex-row justify-between mb-[80px]">
              <div
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="1000"
                className=" text_box flex-[2] pr-0 lg:pr-[40px] px-[20px]"
              >
                <h3 className="text-[1.8rem] mb-[20px] text-primary">Strony LMS</h3>
                <p className="mb-[20px]">
                  Moje strony LMS (Learning Management System) to zaawansowane platformy edukacyjne, które wspierają
                  zarządzanie kursami online, uczniami oraz materiałami szkoleniowymi. Idealne dla firm szkoleniowych,
                  instytucji edukacyjnych, szkół oraz indywidualnych trenerów.
                </p>
                <p className="mb-[20px]">Dla kogo?</p>
                <p className="mb-[20px]">
                  Platformy LMS są dedykowane dla organizacji, które chcą udostępniać kursy online, zarządzać rozwojem
                  pracowników, wspierać edukację klientów lub prowadzić certyfikowane szkolenia online. To rozwiązanie
                  dla każdej firmy, której zależy na efektywnym i nowoczesnym systemie nauczania.
                </p>
              </div>

              <div
                data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="flex-[1] px-[40px] py-[20px] bg-background-light text-text-dark"
              >
                <div className="text-center mb-[40px]">
                  <h3 className="text-[1.8rem] font-bold mb-[10px]">Strony LMS</h3>
                  <p className="text-[1.4rem] mb-[10px]">cena od</p>
                  <h4 className="text-[1.5rem] font-bold">
                    <span className="text-[2.2rem] text-primary font-bold">3500</span> zł
                  </h4>
                  <hr />
                </div>
                <div className="flex flex-col mb-[20px]">
                  <ul className="list-none p-0">
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Wiele podstron</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Responsywność</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Proste animacje</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Zdjęcia i grafiki</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Wsparcie przez 3 miesiące</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Formularz kontaktowy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">System CMS</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Panel administracyjny</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Integracja z systemami płatności</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">System kursów i lekcji</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Zarządzanie użytkownikami</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Rejestracja i logowanie</p>
                    </li>
                    <li className="mb-[40px] flex items-center">
                      <span className="text-[1.5rem] flex-[0_0_10%] text-text-success">✓</span>
                      <p className="flex-[1]">Oceny, certyfikaty</p>
                    </li>
                  </ul>

                  <AniLink
                    paintDrip
                    duration={1.2}
                    hex="#191919"
                    direction="left"
                    to="/formularz-szybkiej-wyceny/#form"
                    className="text-center mt-auto bg-primary text-text-dark py-2 px-4 uppercase font-bold hover:text-primary "
                  >
                    Szybka Wycena Twojej Strony
                  </AniLink>
                </div>
              </div>
            </div>
          )}

          {logo && (
            <div className="price_box flex flex-col lg:flex-row justify-between mb-[80px]">
              <div
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="1000"
                className=" text_box flex-[2] pr-0 lg:pr-[40px] px-[20px]"
              >
                <h3 className="text-[1.8rem] mb-[20px] text-primary">Projektowanie Logo</h3>
                <p className="mb-[20px]">
                  Oferuję profesjonalne projektowanie logo dostosowane do indywidualnych potrzeb Twojej marki. Każdy
                  projekt jest unikalny, tworzony z myślą o budowaniu rozpoznawalności i przekazie wartości firmy.
                </p>
                <p className="mb-[20px]">Dla kogo?</p>
                <p className="mb-[20px]">
                  Dla firm, które chcą wyróżnić się na rynku i posiadać rozpoznawalny znak firmowy. Bez względu na
                  rozmiar biznesu — tworzę logo, które reprezentuje markę profesjonalnie i estetycznie.
                </p>
              </div>

              <div
                data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="flex-[1] px-[40px] py-[20px] bg-background-light text-text-dark"
              >
                {/* Podstawowe logo */}
                <div className="text-center mb-[40px]">
                  <h3 className="text-[1.8rem] font-bold mb-[10px]">Logo Podstawowe</h3>
                  <p className="text-[1.4rem] mb-[10px]">cena od</p>
                  <h4 className="text-[1.5rem] font-bold">
                    <span className="text-[2.2rem] text-primary font-bold">500</span> zł
                  </h4>
                  <hr />
                </div>
                <div className="flex flex-col mb-[20px]">
                  <ul className="list-none p-0">
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">3 propozycje logo</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Pliki PNG, SVG, PDF</p>
                    </li>
                    <li className="mb-[40px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Wsparcie techniczne</p>
                    </li>
                  </ul>
                </div>

                {/* Rozszerzone logo */}
                <div className="text-center mt-[80px] mb-[40px]">
                  <h3 className="text-[1.8rem] font-bold mb-[10px]">Logo Rozszerzone</h3>
                  <p className="text-[1.4rem] mb-[10px]">cena od</p>
                  <h4 className="text-[1.5rem] font-bold">
                    <span className="text-[2.2rem] text-primary font-bold">800</span> zł
                  </h4>
                  <hr />
                </div>
                <div className="flex flex-col mb-[20px]">
                  <ul className="list-none p-0">
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">5 propozycji logo</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Pliki PNG, SVG, PDF</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Wersje kolorowe i monochromatyczne</p>
                    </li>
                    <li className="mb-[40px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Brandbook (dokumentacja)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {wordpress && (
            <div className="price_box flex flex-col lg:flex-row justify-between mb-[80px]">
              <div
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="1000"
                className=" text_box flex-[2] pr-0 lg:pr-[40px] px-[20px]"
              >
                <h3 className="text-[1.8rem] mb-[20px] text-primary">Strona One-Page (WordPress)</h3>
                <p className="mb-[20px]">
                  One-Page to prosta, ale skuteczna witryna, która prezentuje całą Twoją ofertę na jednej stronie.
                  Użytkownicy mogą w łatwy sposób przewijać stronę, aby zapoznać się z usługami i produktami.
                </p>
                <p className="mb-[20px]">Dla kogo?</p>
                <p className="mb-[20px]">
                  Idealne dla firm i osób, które chcą przedstawić swoją treść w sposób klarowny i prosty – bez
                  rozbudowanej struktury podstron.
                </p>
              </div>

              <div
                data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="flex-[1] px-[40px] py-[20px] bg-background-light text-text-dark"
              >
                <div className="text-center mb-[40px]">
                  <h3 className="text-[1.8rem] font-bold mb-[10px]">Strona One-Page</h3>
                  <p className="text-[1.4rem] mb-[10px]">cena od</p>
                  <h4 className="text-[1.5rem] font-bold">
                    <span className="text-[2.2rem] text-primary font-bold">850</span> zł
                  </h4>
                  <hr />
                </div>
                <div className="flex flex-col mb-[20px]">
                  <ul className="list-none p-0">
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-danger mr-[10px]">–</span>
                      <p className="mb-[20px]">Tylko jedna strona główna</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Responsywność</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Proste animacje</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Zdjęcia i grafiki</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">3 miesiące wsparcia</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Formularz kontaktowy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">CMS (WordPress)</p>
                    </li>
                    <li className="mb-[40px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Panel administracyjny</p>
                    </li>
                  </ul>

                  <AniLink
                    paintDrip
                    duration={1.2}
                    hex="#191919"
                    direction="left"
                    to="/formularz-szybkiej-wyceny/#form"
                    className="text-center mt-auto bg-primary text-text-dark py-2 px-4 uppercase font-bold hover:text-primary "
                  >
                    Szybka Wycena Twojej Strony
                  </AniLink>
                </div>
              </div>
            </div>
          )}

          {wordpress && (
            <div className="price_box flex flex-col lg:flex-row justify-between mb-[80px]">
              <div
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="1000"
                className=" text_box flex-[2] pr-0 lg:pr-[40px] px-[20px]"
              >
                <h3 className="text-[1.8rem] mb-[20px] text-primary">Strona Multi-Page (WordPress)</h3>
                <p className="mb-[20px]">
                  Rozbudowana witryna z wieloma podstronami. Każda podstrona może być dedykowana innej usłudze, co
                  zwiększa przejrzystość i SEO.
                </p>
                <p className="mb-[20px]">Dla kogo?</p>
                <p className="mb-[20px]">
                  Dla firm, które chcą pełnej prezentacji swojej oferty i lepszego dopasowania do oczekiwań
                  użytkowników.
                </p>
              </div>

              <div
                data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="flex-[1] px-[40px] py-[20px] bg-background-light text-text-dark"
              >
                <div className="text-center mb-[40px]">
                  <h3 className="text-[1.8rem] font-bold mb-[10px]">Strona Multi-Page</h3>
                  <p className="text-[1.4rem] mb-[10px]">cena od</p>
                  <h4 className="text-[1.5rem] font-bold">
                    <span className="text-[2.2rem] text-primary font-bold">1100</span> zł
                  </h4>
                  <hr />
                </div>
                <div className="flex flex-col mb-[20px]">
                  <ul className="list-none p-0">
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Wiele podstron</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Responsywność</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Proste animacje</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Zdjęcia i grafiki</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">3 miesiące wsparcia</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Formularz kontaktowy</p>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">CMS (WordPress)</p>
                    </li>
                    <li className="mb-[40px] flex items-center">
                      <span className="text-[1.5rem] text-text-success mr-[10px]">✓</span>
                      <p className="mb-[20px]">Panel administracyjny</p>
                    </li>
                  </ul>

                  <AniLink
                    paintDrip
                    duration={1.2}
                    hex="#191919"
                    direction="left"
                    to="/formularz-szybkiej-wyceny/#form"
                    className="text-center mt-auto bg-primary text-text-dark py-2 px-4 uppercase font-bold hover:text-primary "
                  >
                    Szybka Wycena Twojej Strony
                  </AniLink>
                </div>
              </div>
            </div>
          )}
        </div>

        <CallToAction kontakt_2 variant={'bottom'} />
      </div>

      <ShapeDividersBottom />
    </section>
  );
};

export default Prices;
