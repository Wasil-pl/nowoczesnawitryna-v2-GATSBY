import React from 'react';
import * as styles from './Prices.module.scss';
import './Prices.css';
import { Container } from 'react-bootstrap';
import { Check, Dash } from 'react-bootstrap-icons';
import SectionTitle from '../SectionTitle/SectionTitle';
import CustomButton from '../CustomButton/CustomButton';

const Prices = ({ html, wordpress, sklep, aplikacja }) => {
  return (
    <section className={styles.prices}>
      <Container>
        <SectionTitle coloredText="Cennik" subtitle="Zobacz i wybierz najlepszą ofertę dla siebie" variant="white" />

        <div className={styles.wrapper}>
          {html && (
            <div className={styles.row}>
              <div className={styles.descryption}>
                <h3>Strona One-Page</h3>
                <p>
                  OnePage to witryna, na której odwiedzający dowiedzą się wszystkiego o Twojej ofercie bez wchodzenia na
                  dodatkowe podstrony. Wystarczy wygodnie przewijać, aby poznać Twoje usługi lub produkty.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Polecam to rozwiązanie wszystkim firmom i osobom, które pragną prezentować swoją treść w formie
                  klarownej strony głównej, bez konieczności korzystania z rozbudowanej struktury podstron. Nawigacja
                  może obejmować menu, jednak wszystkie informacje, teksty i multimedia zostaną umieszczone na jednej,
                  łatwo dostępnej stronie.
                </p>
              </div>
              <div className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Strona One-Page</h3>
                  <p>cena od</p>
                  <h4>
                    <span>1000</span> zł
                  </h4>
                  <hr />
                </div>
                <div className={styles.list}>
                  <ul>
                    <li>
                      <Dash /> Wiele podstron ( tylko strona główna)
                    </li>
                    <li>
                      <Check /> Responsywność (dostosowanie do urządzeń mobilnych)
                    </li>
                    <li>
                      <Check /> Proste animacje
                    </li>
                    <li>
                      <Check /> Zdjęcia i grafiki
                    </li>
                    <li>
                      <Check /> Wsparcie i aktualizacja na okres 3 miesięcy
                    </li>
                    <li>
                      <Check /> Formularz kontaktowy
                    </li>
                    <li>
                      <Dash /> System CMS
                    </li>
                    <li>
                      <Dash /> Panel administracyjny
                    </li>
                  </ul>

                  <CustomButton text="Zamów teraz" link="#kontakt" variant="price" />
                </div>
              </div>
            </div>
          )}

          {html && (
            <div className={styles.row}>
              <div className={styles.descryption}>
                <h3>Strona Multi-Page</h3>
                <p>
                  Moja witryna Multi-Page oferuje kompleksową prezentację Twojej oferty poprzez rozbudowaną strukturę
                  podstron. Każda sekcja stanowi odrębne miejsce do zgłębiania informacji, co ułatwia pełne zrozumienie
                  usług i produktów oferowanych przez Ciebie.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Rozwiązanie Multi-Page jest idealne dla Ciebie, jeśli chcesz, aby Twoja strona internetowa była
                  bardziej rozbudowana. Ta forma strony pozwala na elastyczność w organizacji treści, dostosowanie do
                  zróżnicowanych potrzeb użytkowników i pełniejsze przedstawienie Twojej oferty.
                </p>
              </div>
              <div className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Strona Multi-Page</h3>
                  <p>cena od</p>
                  <h4>
                    <span>1400</span> zł
                  </h4>
                  <hr />
                </div>
                <div className={styles.list}>
                  <ul>
                    <li>
                      <Check /> Wiele podstron
                    </li>
                    <li>
                      <Check /> Responsywność (dostosowanie do urządzeń mobilnych)
                    </li>
                    <li>
                      <Check /> Proste animacje
                    </li>
                    <li>
                      <Check /> Zdjęcia i grafiki
                    </li>
                    <li>
                      <Check /> Wsparcie i aktualizacja na okres 3 miesięcy
                    </li>
                    <li>
                      <Check /> Formularz kontaktowy
                    </li>
                    <li>
                      <Dash /> System CMS
                    </li>
                    <li>
                      <Dash /> Panel administracyjny
                    </li>
                  </ul>

                  <CustomButton text="Zamów teraz" link="#kontakt" variant="price" />
                </div>
              </div>
            </div>
          )}

          {aplikacja && (
            <div className={styles.row}>
              <div className={styles.descryption}>
                <h3>Aplikacja Webowe</h3>
                <p>
                  Moje aplikacje webowe łączą nowoczesne technologie, interakcję użytkownika i bogate doświadczenie,
                  zarówno dla Ciebie, jak i Twoich klientów. Oferują one nie tylko informacje, ale również zaawansowane
                  funkcje, takie jak animacje, elementy interaktywne oraz integracje z różnymi systemami.
                </p>
                <p>
                  Strony Zaawansowane są dedykowane dla tych, którzy chcą się wyróżnić oryginalnością i atrakcyjnością
                  swojej witryny internetowej. Są one idealnym rozwiązaniem, jeśli pragniesz dostarczyć swoim
                  użytkownikom niezapomnianych wrażeń online. Dzięki wykorzystaniu licznych skryptów JS i innych
                  technologii, te strony świetnie nadają się do projektów wymagających zaawansowanej funkcjonalności.
                </p>
              </div>
              <div className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Aplikacja www</h3>
                  <p>cena od</p>
                  <h4>
                    <span>2200</span> zł
                  </h4>
                  <hr />
                </div>
                <div className={styles.list}>
                  <ul>
                    <li>
                      <Check /> Wiele podstron
                    </li>
                    <li>
                      <Check /> Responsywność (dostosowanie do urządzeń mobilnych)
                    </li>
                    <li>
                      <Check /> Proste animacje
                    </li>
                    <li>
                      <Check /> Zdjęcia i grafiki
                    </li>
                    <li>
                      <Check /> Wsparcie i aktualizacja na okres 3 miesięcy
                    </li>
                    <li>
                      <Check /> Formularz kontaktowy
                    </li>
                    <li>
                      <Check /> System CMS
                    </li>
                    <li>
                      <Check /> Panel administracyjny
                    </li>
                  </ul>

                  <CustomButton text="Zamów teraz" link="#kontakt" variant="price" />
                </div>
              </div>
            </div>
          )}

          {sklep && (
            <div className={styles.row}>
              <div className={styles.descryption}>
                <h3>Sklep internetowy</h3>
                <p>
                  Tworzę sklepy internetowe wykorzystując platformę WordPress oraz rozszerzenie WooCommerce, co pozwala
                  na łatwe zarządzanie treścią oraz rozbudowane funkcje e-commerce.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Sklep internetowy oparty na WooCommerce to doskonałe rozwiązanie dla firm i osób, które chcą rozpocząć
                  lub rozwijać swoją działalność e-commerce. Zapewnia on szerokie możliwości sprzedaży online oraz łatwe
                  zarządzanie asortymentem i zamówieniami.
                </p>
              </div>
              <div className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Sklep www</h3>
                  <p>cena od</p>
                  <h4>
                    <span>1300</span> zł
                  </h4>
                  <hr />
                </div>
                <div className={styles.list}>
                  <ul>
                    <li>
                      <Check /> Wiele podstron
                    </li>
                    <li>
                      <Check /> Responsywność (dostosowanie do urządzeń mobilnych)
                    </li>
                    <li>
                      <Check /> Proste animacje
                    </li>
                    <li>
                      <Check /> Zdjęcia i grafiki
                    </li>
                    <li>
                      <Check /> Wsparcie i aktualizacja na okres 3 miesięcy
                    </li>
                    <li>
                      <Check /> Formularz kontaktowy
                    </li>
                    <li>
                      <Check /> System CMS
                    </li>
                    <li>
                      <Check /> Panel administracyjny
                    </li>
                  </ul>

                  <CustomButton text="Zamów teraz" link="#kontakt" variant="price" />
                </div>
              </div>
            </div>
          )}

          {wordpress && (
            <div className={styles.row}>
              <div className={styles.descryption}>
                <h3>Strona One-Page</h3>
                <p>
                  OnePage to witryna, na której odwiedzający dowiedzą się wszystkiego o Twojej ofercie bez wchodzenia na
                  dodatkowe podstrony. Wystarczy wygodnie przewijać, aby poznać Twoje usługi lub produkty.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Polecam to rozwiązanie wszystkim firmom i osobom, które pragną prezentować swoją treść w formie
                  klarownej strony głównej, bez konieczności korzystania z rozbudowanej struktury podstron. Nawigacja
                  może obejmować menu, jednak wszystkie informacje, teksty i multimedia zostaną umieszczone na jednej,
                  łatwo dostępnej stronie.
                </p>
              </div>
              <div className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Strona One-Page</h3>
                  <p>cena od</p>
                  <h4>
                    <span>500</span> zł
                  </h4>
                  <hr />
                </div>
                <div className={styles.list}>
                  <ul>
                    <li>
                      <Dash /> Wiele podstron ( tylko strona główna)
                    </li>
                    <li>
                      <Check /> Responsywność (dostosowanie do urządzeń mobilnych)
                    </li>
                    <li>
                      <Check /> Proste animacje
                    </li>
                    <li>
                      <Check /> Zdjęcia i grafiki
                    </li>
                    <li>
                      <Check /> Wsparcie i aktualizacja na okres 3 miesięcy
                    </li>
                    <li>
                      <Check /> Formularz kontaktowy
                    </li>
                    <li>
                      <Check /> System CMS
                    </li>
                    <li>
                      <Check /> Panel administracyjny
                    </li>
                  </ul>

                  <CustomButton text="Zamów teraz" link="#kontakt" variant="price" />
                </div>
              </div>
            </div>
          )}

          {wordpress && (
            <div className={styles.row}>
              <div className={styles.descryption}>
                <h3>Strona Multi-Page</h3>
                <p>
                  Moja witryna Multi-Page oferuje kompleksową prezentację Twojej oferty poprzez rozbudowaną strukturę
                  podstron. Każda sekcja stanowi odrębne miejsce do zgłębiania informacji, co ułatwia pełne zrozumienie
                  usług i produktów oferowanych przez Ciebie.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Rozwiązanie Multi-Page jest idealne dla Ciebie, jeśli chcesz, aby Twoja strona internetowa była
                  bardziej rozbudowana. Ta forma strony pozwala na elastyczność w organizacji treści, dostosowanie do
                  zróżnicowanych potrzeb użytkowników i pełniejsze przedstawienie Twojej oferty.
                </p>
              </div>
              <div className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Strona Multi-Page</h3>
                  <p>cena od</p>
                  <h4>
                    <span>700</span> zł
                  </h4>
                  <hr />
                </div>
                <div className={styles.list}>
                  <ul>
                    <li>
                      <Check /> Wiele podstron
                    </li>
                    <li>
                      <Check /> Responsywność (dostosowanie do urządzeń mobilnych)
                    </li>
                    <li>
                      <Check /> Proste animacje
                    </li>
                    <li>
                      <Check /> Zdjęcia i grafiki
                    </li>
                    <li>
                      <Check /> Wsparcie i aktualizacja na okres 3 miesięcy
                    </li>
                    <li>
                      <Check /> Formularz kontaktowy
                    </li>
                    <li>
                      <Check /> System CMS
                    </li>
                    <li>
                      <Check /> Panel administracyjny
                    </li>
                  </ul>

                  <CustomButton text="Zamów teraz" link="#kontakt" variant="price" />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Prices;
