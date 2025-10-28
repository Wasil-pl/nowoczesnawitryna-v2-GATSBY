import React from 'react';
import { BsArrowRight } from '../../../Icons/Icons';
import './CallToAction.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const CallToAction = ({ kontakt_2, kontakt_3, variant = '' }) => {
  return (
    <div
      className={`action flex justify-between bg-background-primary relative z-20  ${
        variant === 'bottom' ? 'bottom' : ''
      }`}
    >
      {!kontakt_2 && !kontakt_3 && (
        <div className="left_side flex-[50%] pr-[20px]">
          <h3 className="text-[1.2rem] font-bold uppercase mb-4 text-text-dark">Nowość! Szybka wycena strony</h3>
          <h4 className="text-[1.7rem] font-bold mb-4 text-text-dark">
            Wypełnij formularz, a przygotuję ofertę dostosowaną do Twoich potrzeb!
          </h4>
        </div>
      )}

      {kontakt_2 && !kontakt_3 && (
        <div className="left_side flex-[50%] pr-[20px]">
          <h3 className="text-[1.2rem] font-bold uppercase mb-4 text-text-dark">Interesuje Cię współpraca?</h3>
          <h4 className="text-[1.7rem] font-bold mb-4 text-text-dark">
            Odpowiem na Twoje pytania i pomogę wybrać najlepsze rozwiązanie. Skontaktuj się ze mną!
          </h4>
        </div>
      )}

      {kontakt_3 && (
        <div className="left_side flex-[50%] pr-[20px]">
          <h3 className="text-[1.2rem] font-bold uppercase mb-4 text-text-dark">Masz pytania?</h3>
          <h4 className="text-[1.7rem] font-bold mb-4 text-text-dark">
            Nie Chcesz wypełniać formularza? Skontaktuj się ze mną, a odpowiem na Twoje pytania i przygotuję ofertę
          </h4>
        </div>
      )}

      <div className="right_side flex-[50%] pl-[20px] relative z-[2] transition-transform duration-300 hover:scale-110 flex justify-end">
        <AniLink
          paintDrip
          duration={1.2} // czas całego przejścia
          hex="#191919" // kolor „zalania” (może być też color="blue")
          direction="left" // kierunek slideIn contentu po wejściu (opcjonalnie)
          to={!kontakt_2 && !kontakt_3 ? '/formularz-szybkiej-wyceny/' : '/kontakt/'}
          className="no-underline flex flex-col items-end"
        >
          <BsArrowRight className="text-text-light w-[100px] h-auto mr-4 ml-auto" />
          <br />
          {!kontakt_2 && !kontakt_3 && (
            <span className="text text-[1.2rem] font-bold uppercase text-text-dark">
              Wypełnij formularz wyceny już teraz!
            </span>
          )}
          {kontakt_2 && !kontakt_3 && (
            <span className="text text-[1.2rem] font-bold uppercase text-text-dark">
              Napisz do mnie, a odpowiem na Twoje pytania i przygotuję ofertę
            </span>
          )}
          {kontakt_3 && (
            <span className="text text-[1.2rem] font-bold uppercase text-text-dark">
              Napisz, a odpowiem tak szybko jak to możliwe...
            </span>
          )}
        </AniLink>
      </div>
    </div>
  );
};

export default CallToAction;
