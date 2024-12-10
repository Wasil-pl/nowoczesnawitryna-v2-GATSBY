import React from 'react';
import * as styles from './Faq.module.scss';
import './Faq.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
  return (
    <section className={`${styles.faq} faq`}>
      <div className={styles.wrapper}>
        <SectionTitle
          coloredText="FAQ"
          subtitle="Najczęściej zadawane pytania dotyczące projektowania stron internetowych"
        />

        <div className={styles.accordion_wrapper}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header as="h3">Ile kosztuje stworzenie strony internetowej?</Accordion.Header>
              <Accordion.Body>
                Cena stworzenia strony internetowej zależy od jej złożoności i funkcji, które chcesz wdrożyć. Prosta
                strona One-Page zaczyna się od 700 zł, podczas gdy bardziej rozbudowane witryny lub sklepy internetowe
                mogą kosztować od 1600 zł. Oferuję również indywidualne wyceny na podstawie konkretnych wymagań
                projektu.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header as="h3">Jak długo trwa stworzenie strony internetowej?</Accordion.Header>
              <Accordion.Body>
                Czas realizacji zależy od złożoności projektu. Prosta strona internetowa One-Page może być gotowa w
                ciągu kilku dni, natomiast bardziej rozbudowane projekty, takie jak strony Multi-Page lub sklepy
                internetowe, mogą zająć od 2 do 4 tygodni. W przypadku skomplikowanych stron internetowych czas ten może
                się wydłużyć, zależnie od Twoich potrzeb i dostarczenia treści.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header as="h3">
                Co jest potrzebne do rozpoczęcia pracy nad stroną internetową?
              </Accordion.Header>
              <Accordion.Body>
                Do rozpoczęcia pracy potrzebuję podstawowych informacji o Twojej firmie, wizji na swoją stronę
                internetową oraz wszelkich materiałów, które chciałbyś zamieścić (teksty, zdjęcia, logo itp.). Jeśli nie
                masz gotowych materiałów, mogę pomóc w ich przygotowaniu.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header as="h3">
                {' '}
                Czy mogę samodzielnie zarządzać stroną internetową po jej uruchomieniu?
              </Accordion.Header>
              <Accordion.Body>
                Tak! Mam w ofercie strony internetowe w oparciu o intuicyjne systemy zarządzania treścią (CMS), takie
                jak WordPress. Otrzymasz dostęp do panelu administracyjnego, który pozwoli Ci samodzielnie aktualizować
                treści, dodawać zdjęcia i zarządzać swoją stroną internetową bez konieczności znajomości kodowania.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header as="h3">
                {' '}
                Czy oferujesz wsparcie techniczne po uruchomieniu strony internetowej?
              </Accordion.Header>
              <Accordion.Body>
                Tak, po wdrożeniu strony internetowej oferuję 3-miesięczne wsparcie techniczne, które obejmuje drobne
                aktualizacje i pomoc w obsłudze strony. Po tym okresie możesz skorzystać z dodatkowych usług wsparcia
                technicznego, jeśli będziesz ich potrzebować.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header as="h3">
                Czy mogę zlecić projektowanie logo wraz z tworzeniem strony internetowej?
              </Accordion.Header>
              <Accordion.Body>
                Tak! Oferuję również profesjonalne projektowanie logo. Tworzę unikalne i nowoczesne logo, które idealnie
                wpasuje się w wizerunek Twojej firmy. Możesz połączyć projekt logo ze stworzeniem strony internetowej w
                jednym pakiecie.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header as="h3">Czy strony internetowe, które tworzysz, są responsywne?</Accordion.Header>
              <Accordion.Body>
                Tak, wszystkie moje strony internetowe, które tworzę, są w pełni responsywne. Oznacza to, że strona
                będzie wyglądała doskonale i działała płynnie zarówno na komputerach stacjonarnych, tabletach, jak i
                smartfonach.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header as="h3">
                Jakie technologie wykorzystujesz do tworzenia stron internetowych?
              </Accordion.Header>
              <Accordion.Body>
                Tworzę strony z użyciem najnowszych technologii, takich jak HTML5, CSS3, JavaScript oraz popularnych
                systemów CMS, takich jak WordPress. Dzięki temu Twoja strona będzie nowoczesna, wydajna i
                zoptymalizowana pod kątem SEO.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
