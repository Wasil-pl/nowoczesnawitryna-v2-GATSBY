import React from 'react';
import * as styles from './Prices.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import CallToAction from '../CallToAction/CallToAction';
import ShapeDividersTop from '../../../Ui/ShapeDividers/ShapeDividersTop';
import ShapeDividersBottom from '../../../Ui/ShapeDividers/ShapeDividersBottom';
import { BsCheck, BsDash } from '../../../Icons/Icons';

const Prices = ({ html, wordpress, sklep, aplikacja, lms, logo }) => {
  return (
    <section id="price" className={styles.prices}>
      <ShapeDividersTop variant="f7f7f7" />

      <div className="container mx-auto px-4">
        <SectionTitle
          coloredText="Cennik"
          subtitle="Zobacz i wybierz najlepszą ofertę dla siebie"
          variant="white"
          backgroundText="cennik"
        />

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
                      <BsDash fill="#ff0000" /> <p>Wiele podstron ( tylko strona główna)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Proste animacje</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Zdjęcia i grafiki</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" />
                      <p>Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" />
                      <p>Formularz kontaktowy</p>
                    </li>
                    <li>
                      <BsDash fill="#ff0000" />
                      <p>System CMS</p>
                    </li>
                    <li>
                      <BsDash fill="#ff0000" />
                      <p>Panel administracyjny</p>
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
                      <BsCheck fill="#00ff00" /> <p>Wiele podstron</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Proste animacje</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Zdjęcia i grafiki</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Formularz kontaktowy</p>
                    </li>
                    <li>
                      <BsDash fill="#ff0000" /> <p>System CMS</p>
                    </li>
                    <li>
                      <BsDash fill="#ff0000" /> <p>Panel administracyjny</p>
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
                      <BsCheck fill="#00ff00" /> <p>Wiele podstron</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Proste animacje</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Zdjęcia i grafiki</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" />
                      <p>Formularz kontaktowy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>System CMS</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Panel administracyjny</p>
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
                      <BsCheck fill="#00ff00" /> <p>Wiele podstron</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Proste animacje</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Zdjęcia i grafiki</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Instalacja i konfiguracja WooCommerce</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" />{' '}
                      <p>Dodanie produktów (w cenie do 30 produktów, kolejne płatne dodatkowo)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Szkolenie z obsługi sklepu (video - chat)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Regulamin sklepu internetowego</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Formularz kontaktowy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>System CMS</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Panel administracyjny</p>
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
                      <BsCheck fill="#00ff00" /> <p>Wiele podstron</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Proste animacje</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Zdjęcia i grafiki</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Formularz kontaktowy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>System CMS</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Panel administracyjny</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Integracja z systemami płatności i ich subskrypcjami</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>System zarządzania kursami</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>System zarządzania użytkownikami</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>System logowania i rejestracji użytkowiniów</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>System oceniania i certyfikacji</p>
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
                      <BsCheck fill="#00ff00" /> <p>3 propozycje logo</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Pliki w formatach PNG, SVG, PDF</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Wsparcie techniczne</p>
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
                      <BsCheck fill="#00ff00" /> <p>5 propozycji logo</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Pliki w formatach PNG, SVG, PDF</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Wersje kolorowe i monochromatyczne</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Dokumentacja użytkowania (brandbook)</p>
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
                      <BsDash fill="#ff0000" /> <p>Wiele podstron ( tylko strona główna)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Proste animacje</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Zdjęcia i grafiki</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Formularz kontaktowy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>System CMS</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Panel administracyjny</p>
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
                      <BsCheck fill="#00ff00" /> <p>Wiele podstron</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Responsywność (dostosowanie do urządzeń mobilnych)</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Proste animacje</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Zdjęcia i grafiki</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Wsparcie i aktualizacja na okres 3 miesięcy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Formularz kontaktowy</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>System CMS</p>
                    </li>
                    <li>
                      <BsCheck fill="#00ff00" /> <p>Panel administracyjny</p>
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
      </div>

      <ShapeDividersBottom />
    </section>
  );
};

export default Prices;
