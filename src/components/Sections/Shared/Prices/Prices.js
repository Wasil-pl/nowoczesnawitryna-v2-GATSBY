import React from 'react';
import './Prices.scss';
import * as styles from './Prices.module.scss';
import { Container } from 'react-bootstrap';
import { Check, Dash } from 'react-bootstrap-icons';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import CallToAction from '../CallToAction/CallToAction';

const Prices = ({ html, wordpress, sklep, aplikacja, lms, logo }) => {
  return (
    <section id="price" className={styles.prices}>
      <Container>
        <SectionTitle coloredText="Cennik" subtitle="Zobacz i wybierz najlepszą ofertę dla siebie" variant="white" />

        <div className={styles.wrapper}>
          {html && (
            <div className={styles.row}>
              <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.descryption}>
                <h3>Strona One-Page</h3>
                <p>
                  One-Page to prosta, ale skuteczna witryna, która prezentuje całą Twoją ofertę na jednej stronie.
                  Użytkownicy mogą w łatwy sposób przewijać stronę, aby zapoznać się z usługami i produktami, bez
                  konieczności wchodzenia na dodatkowe podstrony.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Rozwiązanie idealne dla firm i osób, które chcą przedstawić swoją treść w sposób klarowny i prosty.
                  Idealne dla małych biznesów, które nie potrzebują rozbudowanej struktury podstron.
                </p>
              </div>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Strona One-Page</h3>
                  <p>cena od</p>
                  <h4>
                    <span>1600</span> zł
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

                  <CustomButton
                    text="Szybka Wycena Twojej Strony"
                    link="/formularz-szybkiej-wyceny/#form"
                    variant="price"
                  />
                </div>
              </div>
            </div>
          )}

          {html && (
            <div className={styles.row}>
              <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.descryption}>
                <h3>Strona Multi-Page</h3>
                <p>
                  Multi-Page to rozbudowana witryna z wieloma podstronami, która umożliwia szczegółową prezentację
                  Twojej oferty. Każda podstrona może być dedykowana innemu aspektowi Twojego biznesu, co pozwala
                  użytkownikom lepiej zrozumieć pełen zakres Twoich usług i produktów.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Idealne rozwiązanie dla firm, które potrzebują bardziej złożonej struktury witryny, aby w pełni
                  zaprezentować swoją ofertę i dopasować ją do potrzeb użytkowników.
                </p>
              </div>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Strona Multi-Page</h3>
                  <p>cena od</p>
                  <h4>
                    <span>2000</span> zł
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

                  <CustomButton
                    text="Szybka Wycena Twojej Strony"
                    link="/formularz-szybkiej-wyceny/#form"
                    variant="price"
                  />
                </div>
              </div>
            </div>
          )}

          {aplikacja && (
            <div className={styles.row}>
              <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.descryption}>
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
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Aplikacja www</h3>
                  <p>cena od</p>
                  <h4>
                    <span>3500</span> zł
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

                  <CustomButton
                    text="Szybka Wycena Twojej Strony"
                    link="/formularz-szybkiej-wyceny/#form"
                    variant="price"
                  />
                </div>
              </div>
            </div>
          )}

          {sklep && (
            <div className={styles.row}>
              <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.descryption}>
                <h3>Sklep internetowy</h3>
                <p>
                  Tworzę sklepy internetowe wykorzystując platformę WordPress oraz rozszerzenie WooCommerce, które
                  umożliwiają łatwe zarządzanie treścią oraz rozbudowane funkcje e-commerce. WooCommerce to
                  wszechstronne narzędzie, które zapewnia pełną kontrolę nad sprzedażą online, a także elastyczność w
                  zarządzaniu asortymentem i zamówieniami.
                </p>
                <p>
                  Każdy sklep internetowy, który tworzę, jest w pełni zgodny z obowiązującymi przepisami prawa polskiego
                  i unijnego. W ramach realizacji zapewniam m.in. przygotowanie regulaminu sklepu, polityki prywatności
                  oraz innych niezbędnych dokumentów, które są wymagane do prowadzenia legalnej sprzedaży online. Dzięki
                  temu Twój sklep internetowy będzie nie tylko funkcjonalny, ale także bezpieczny i profesjonalny.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Sklep internetowy oparty na WooCommerce to idealne rozwiązanie dla firm oraz osób, które chcą
                  rozpocząć lub rozwijać działalność w zakresie sprzedaży online. Zapewnia szerokie możliwości
                  sprzedażowe oraz prostą obsługę, co sprawia, że zarządzanie sklepem staje się intuicyjne i efektywne.
                </p>
              </div>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Sklep www</h3>
                  <p>cena od</p>
                  <h4>
                    <span>2000</span> zł
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
                      <Check /> Instalacja i konfiguracja WooCommerce
                    </li>
                    <li>
                      <Check /> Dodanie produktów (w cenie do 30 produktów, kolejne płatne dodatkowo)
                    </li>
                    <li>
                      <Check /> Szkolenie z obsługi sklepu (video - chat)
                    </li>
                    <li>
                      <Check /> Regulamin sklepu internetowego
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

                  <CustomButton
                    text="Szybka Wycena Twojej Strony"
                    link="/formularz-szybkiej-wyceny/#form"
                    variant="price"
                  />
                </div>
              </div>
            </div>
          )}

          {lms && (
            <div className={styles.row}>
              <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.descryption}>
                <h3>Strony LMS</h3>
                <p>
                  Moje strony LMS (Learning Management System) to zaawansowane platformy edukacyjne, które wspierają
                  zarządzanie kursami online, uczniami oraz materiałami szkoleniowymi. Idealne dla firm szkoleniowych,
                  instytucji edukacyjnych, szkół oraz indywidualnych trenerów.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Platformy LMS są dedykowane dla organizacji, które chcą udostępniać kursy online, zarządzać rozwojem
                  pracowników, wspierać edukację klientów lub prowadzić certyfikowane szkolenia online. To rozwiązanie
                  dla każdej firmy, której zależy na efektywnym i nowoczesnym systemie nauczania.
                </p>
              </div>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Strony LMS</h3>
                  <p>cena od</p>
                  <h4>
                    <span>3500</span> zł
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
                    <li>
                      <Check /> Integracja z systemami płatności i ich subskrypcjami
                    </li>
                    <li>
                      <Check /> System zarządzania kursami
                    </li>
                    <li>
                      <Check /> System zarządzania użytkownikami
                    </li>
                    <li>
                      <Check /> System logowania i rejestracji użytkowiniów
                    </li>
                    <li>
                      <Check /> System oceniania i certyfikacji
                    </li>
                  </ul>

                  <CustomButton
                    text="Szybka Wycena Twojej Strony"
                    link="/formularz-szybkiej-wyceny/#form"
                    variant="price"
                  />
                </div>
              </div>
            </div>
          )}

          {logo && (
            <div className={styles.row}>
              <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.descryption}>
                <h3>Projektowanie Logo</h3>
                <p>
                  Oferuję profesjonalne projektowanie logo dostosowane do indywidualnych potrzeb Twojej marki. Każdy
                  projekt jest unikalny, tworzony z myślą o budowaniu rozpoznawalności i przekazie wartości firmy.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Moja usługa projektowania logo jest idealna dla firm, które chcą wyróżnić się na rynku i posiadać
                  rozpoznawalny znak firmowy. Niezależnie od rozmiaru Twojej firmy, tworzę logo, które reprezentuje
                  Twoją markę profesjonalnie i estetycznie.
                </p>
              </div>

              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Logo Podstawowe</h3>
                  <p>cena od</p>
                  <h4>
                    <span>500</span> zł
                  </h4>
                  <hr />
                </div>
                <div className={styles.list}>
                  <ul>
                    <li>
                      <Check /> 3 propozycje logo
                    </li>
                    <li>
                      <Check /> Pliki w formatach PNG, SVG, PDF
                    </li>
                    <li>
                      <Check /> Wsparcie techniczne
                    </li>
                  </ul>
                  <CustomButton
                    text="Szybka Wycena Twojej Strony"
                    link="/formularz-szybkiej-wyceny/#form"
                    variant="price"
                  />
                </div>

                <div className={`${styles.last_price} ${styles.price}`}>
                  <h3>Logo Rozszerzone</h3>
                  <p>cena od</p>
                  <h4>
                    <span>800</span> zł
                  </h4>
                  <hr />
                </div>
                <div className={styles.list}>
                  <ul>
                    <li>
                      <Check /> 5 propozycji logo
                    </li>
                    <li>
                      <Check /> Pliki w formatach PNG, SVG, PDF
                    </li>
                    <li>
                      <Check /> Wersje kolorowe i monochromatyczne
                    </li>
                    <li>
                      <Check /> Dokumentacja użytkowania (brandbook)
                    </li>
                  </ul>
                  <CustomButton
                    text="Szybka Wycena Twojej Strony"
                    link="/formularz-szybkiej-wyceny/#form"
                    variant="price"
                  />
                </div>
              </div>
            </div>
          )}

          {wordpress && (
            <div className={styles.row}>
              <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.descryption}>
                <h3>Strona One-Page</h3>
                <p>
                  One-Page to prosta, ale skuteczna witryna, która prezentuje całą Twoją ofertę na jednej stronie.
                  Użytkownicy mogą w łatwy sposób przewijać stronę, aby zapoznać się z usługami i produktami, bez
                  konieczności wchodzenia na dodatkowe podstrony.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Rozwiązanie idealne dla firm i osób, które chcą przedstawić swoją treść w sposób klarowny i prosty.
                  Idealne dla małych biznesów, które nie potrzebują rozbudowanej struktury podstron.
                </p>
              </div>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Strona One-Page</h3>
                  <p>cena od</p>
                  <h4>
                    <span>850</span> zł
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

                  <CustomButton
                    text="Szybka Wycena Twojej Strony"
                    link="/formularz-szybkiej-wyceny/#form"
                    variant="price"
                  />
                </div>
              </div>
            </div>
          )}

          {wordpress && (
            <div className={styles.row}>
              <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.descryption}>
                <h3>Strona Multi-Page</h3>
                <p>
                  Multi-Page to rozbudowana witryna z wieloma podstronami, która umożliwia szczegółową prezentację
                  Twojej oferty. Każda podstrona może być dedykowana innemu aspektowi Twojego biznesu, co pozwala
                  użytkownikom lepiej zrozumieć pełen zakres Twoich usług i produktów.
                </p>
                <p>Dla kogo jest dedykowana?</p>
                <p>
                  Idealne rozwiązanie dla firm, które potrzebują bardziej złożonej struktury witryny, aby w pełni
                  zaprezentować swoją ofertę i dopasować ją do potrzeb użytkowników.
                </p>
              </div>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.price_box}>
                <div className={styles.price}>
                  <h3>Strona Multi-Page</h3>
                  <p>cena od</p>
                  <h4>
                    <span>1100</span> zł
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

                  <CustomButton
                    text="Szybka Wycena Twojej Strony"
                    link="/formularz-szybkiej-wyceny/#form"
                    variant="price"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <CallToAction kontakt_2 variant={'bottom'} />
      </Container>
    </section>
  );
};

export default Prices;
