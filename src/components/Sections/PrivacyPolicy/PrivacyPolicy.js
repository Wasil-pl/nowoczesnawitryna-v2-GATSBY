import React from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <Container>
      <div class="section">
        <h2>1. Informacje ogólne</h2>
        <p>
          Polityka dotyczy serwisu www, funkcjonującego pod adresem URL: <strong>nowoczesnawitryna.pl</strong>.
        </p>
        <p>
          Operatorem serwisu oraz administratorem danych osobowych jest:{' '}
          <strong>Dariusz Wasilewski, Bogoczowiec 4c/9</strong>.
        </p>
        <p>
          Adres kontaktowy e-mail operatora:{' '}
          <a href="mailto:nowoczesnawitryna@gmail.com">nowoczesnawitryna@gmail.com</a>
        </p>
        <p>Operator jest administratorem danych osobowych użytkowników podanych dobrowolnie w serwisie.</p>
        <p>Serwis wykorzystuje dane osobowe w następujących celach:</p>
        <ul>
          <li>Obsługa zapytań przez formularz</li>
          <li>Prezentacja oferty lub informacji</li>
        </ul>
        <p>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu poprzez:</p>
        <ul>
          <li>Dane wprowadzone w formularzach, które trafiają do systemów operatora.</li>
          <li>Zapisywanie plików cookie (tzw. „ciasteczka”) na urządzeniach użytkowników.</li>
        </ul>
      </div>

      <div class="section">
        <h2>2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
        <ul>
          <li>Miejsca logowania i wprowadzania danych osobowych chronione są certyfikatem SSL.</li>
          <li>Regularne wykonywanie kopii bezpieczeństwa.</li>
          <li>Regularne aktualizacje oprogramowania wykorzystywanego przez Operatora.</li>
        </ul>
      </div>

      <div class="section">
        <h2>3. Hosting</h2>
        <p>
          Serwis jest hostowany przez <strong>cyberFolks.pl</strong>, który prowadzi logi serwerowe w celu zapewnienia
          niezawodności technicznej. Logi mogą obejmować:
        </p>
        <ul>
          <li>Adresy żądanych zasobów (strony, pliki)</li>
          <li>Czas nadejścia i wysłania zapytania</li>
          <li>Informacje o błędach HTTP</li>
          <li>Referer link (strona poprzednia)</li>
          <li>Informacje o przeglądarce i adresie IP</li>
        </ul>
      </div>

      <div class="section">
        <h2>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h2>
        <p>
          Administrator może przekazać dane innym odbiorcom w przypadkach wymaganych do wykonania umowy lub spełnienia
          obowiązków prawnych. Możesz żądać od Administratora:
        </p>
        <ul>
          <li>Dostępu do swoich danych</li>
          <li>Sprostowania, usunięcia, ograniczenia przetwarzania</li>
          <li>Przenoszenia danych</li>
        </ul>
        <p>
          Przysługuje Ci prawo do sprzeciwu wobec przetwarzania w określonych celach oraz złożenia skargi do Prezesa
          UODO.
        </p>
      </div>

      <div class="section">
        <h2>5. Informacje w formularzach</h2>
        <p>
          Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, które mogą być wykorzystane
          w celu obsługi zgłoszeń serwisowych, kontaktu handlowego lub rejestracji usług.
        </p>
      </div>

      <div class="section">
        <h2>6. Logi Administratora</h2>
        <p>Informacje o zachowaniu użytkowników mogą być logowane w celu administrowania serwisem.</p>
      </div>

      <div class="section">
        <h2>7. Istotne techniki marketingowe</h2>
        <p>
          Operator korzysta z analizy statystycznej ruchu na stronie za pomocą Google Analytics. Użytkownik może
          zarządzać preferencjami dotyczącymi cookies przez{' '}
          <a href="https://www.google.com/ads/preferences/" target="_blank" rel="noreferrer">
            Google Ads Preferences
          </a>
          .
        </p>
      </div>

      <div class="section">
        <h2>8. Informacja o plikach cookies</h2>
        <p>Serwis korzysta z plików cookies w celu:</p>
        <ul>
          <li>Utrzymania sesji użytkownika (po zalogowaniu)</li>
          <li>Realizacji technik marketingowych</li>
        </ul>
        <p>Użytkownicy mogą zmieniać ustawienia dotyczące cookies w swojej przeglądarce internetowej.</p>
      </div>

      <div class="section">
        <h2>9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h2>
        <p>Instrukcje dla poszczególnych przeglądarek:</p>
        <ul>
          <li>Edge</li>
          <li>Internet Explorer</li>
          <li>Chrome</li>
          <li>Safari</li>
          <li>Firefox</li>
          <li>Opera</li>
        </ul>
        <p>Urządzenia mobilne:</p>
        <ul>
          <li>Android</li>
          <li>Safari (iOS)</li>
          <li>Windows Phone</li>
        </ul>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
