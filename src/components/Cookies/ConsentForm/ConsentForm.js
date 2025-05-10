import React, { useEffect, useState, useMemo, useCallback } from 'react';
import FloatingBanner from '../FloatingBanner/FloatingBanner';
import Cookies from 'universal-cookie';

const ConsentForm = () => {
  const [decisionMade, setDecisionMade] = useState(true); // start with true to avoid flashing
  const cookies = useMemo(() => new Cookies(), []);

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  const sendConsent = useCallback((consent) => {
    gtag('consent', 'default', consent);
  }, []);

  useEffect(() => {
    if (cookies.get('gtm_consent') !== undefined) {
      setDecisionMade(true);
    } else {
      setDecisionMade(false);
    }
  }, [cookies, setDecisionMade, sendConsent]);

  const handleDecision = (outcome) => {
    const consent = {
      ad_storage: outcome,
      analytics_storage: outcome,
      ad_user_data: outcome,
      ad_personalization: outcome,
    };

    cookies.set('gtm_consent', consent, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: '/',
      domain: '.nowoczesnawitryna.pl',
    });

    sendConsent(consent);
    setDecisionMade(true);
  };

  return decisionMade ? null : (
    <FloatingBanner
      header="Cenimy prywatność użytkowników"
      message="Używamy plików cookie, aby poprawić jakość przeglądania, wyświetlać reklamy lub treści dostosowane do indywidualnych potrzeb użytkowników oraz analizować ruch na stronie. Kliknięcie przycisku „Akceptuj wszystkie” oznacza zgodę na wykorzystywanie przez nas plików cookie."
      acceptText="Akceptuj wszystkie"
      denyText="Odrzuć wszystkie"
      onAccept={() => handleDecision('granted')}
      onDeny={() => handleDecision('denied')}
    />
  );
};

export default ConsentForm;
