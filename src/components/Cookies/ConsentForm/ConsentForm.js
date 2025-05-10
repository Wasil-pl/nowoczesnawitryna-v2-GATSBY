// src/components/ConsentForm.jsx
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import FloatingBanner from '../FloatingBanner/FloatingBanner';
import Cookies from 'universal-cookie';
import PreferencesModal from '../PreferencesModal/PreferencesModal';
import { CookiesIcon } from '../../Icons/Icons';

const COOKIE_NAME = 'gtm_consent';
const COOKIE_DOMAIN = '.nowoczesnawitryna.pl';

const ConsentForm = () => {
  const [decisionMade, setDecisionMade] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const cookies = useMemo(() => new Cookies(), []);

  const gtag = (...args) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  };

  const defaultPrefs = useMemo(
    () => ({
      functional: false,
      analytics: false,
      performance: false,
      advertising: false,
    }),
    []
  );

  const mapToConsent = (prefs) => ({
    security_storage: 'granted',
    functionality_storage: prefs.functional ? 'granted' : 'denied',
    analytics_storage: prefs.analytics ? 'granted' : 'denied',
    performance_storage: prefs.performance ? 'granted' : 'denied',
    ad_storage: prefs.advertising ? 'granted' : 'denied',
    personalization_storage: prefs.advertising ? 'granted' : 'denied',
  });

  useEffect(() => {
    const saved = cookies.get(COOKIE_NAME);
    if (saved) {
      gtag('consent', 'default', saved);
      setDecisionMade(true);
    } else {
      const consent = mapToConsent(defaultPrefs);
      gtag('consent', 'default', consent);
      setDecisionMade(false);
    }
  }, [cookies, defaultPrefs]);

  const applyPrefs = useCallback(
    (prefs) => {
      const consent = mapToConsent(prefs);
      cookies.set(COOKIE_NAME, consent, {
        domain: COOKIE_DOMAIN,
        path: '/',
        expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      });
      gtag('consent', 'update', consent);
      setShowModal(false);
      setDecisionMade(true);
    },
    [cookies]
  );

  // Jeżeli nie było decyzji, pokaz banner
  if (!decisionMade && !showModal) {
    return (
      <FloatingBanner
        header="Cenimy prywatność użytkowników"
        message="Używamy plików cookie, aby poprawić jakość przeglądania..."
        acceptText="Akceptuj wszystkie"
        denyText="Odrzuć wszystkie"
        customizeText="Dostosuj preferencje"
        onAccept={() => applyPrefs({ functional: true, analytics: true, performance: true, advertising: true })}
        onDeny={() => applyPrefs(defaultPrefs)}
        onCustomize={() => setShowModal(true)}
      />
    );
  }

  // Jeżeli modal jest otwarty, pokaz modal
  if (showModal) {
    const saved = cookies.get(COOKIE_NAME) || mapToConsent(defaultPrefs);
    const initialPrefs = {
      functional: saved.functionality_storage === 'granted',
      analytics: saved.analytics_storage === 'granted',
      performance: saved.performance_storage === 'granted',
      advertising: saved.ad_storage === 'granted',
    };
    return <PreferencesModal initialPrefs={initialPrefs} onSave={applyPrefs} onCancel={() => setShowModal(false)} />;
  }

  // Gdy decyzja już podjęta i modal zamknięty → ikona ciasteczka
  return (
    <button
      onClick={() => setDecisionMade(false)}
      className="fixed bottom-4 left-4 p-2 bg-white rounded-full shadow-lg z-50"
      aria-label="Ustawienia ciasteczek"
    >
      <CookiesIcon className="w-6 h-6 text-gray-700" />
    </button>
  );
};

export default ConsentForm;
