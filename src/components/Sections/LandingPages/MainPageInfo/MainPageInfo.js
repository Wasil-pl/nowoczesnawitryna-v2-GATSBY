import React from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';

const MainPageInfo = () => {
  return (
    <section className="my-[200px] mb-[100px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div>
            <SectionTitle title="Moja Oferta – Tworzenie Profesjonalnych Stron Internetowych" />
            <div className="flex flex-col items-center justify-center gap-[20px] mt-8">
              <ul>
                <li>
                  <a href="/strony-internetowe/katowice">
                    <h3 className="text-[1.5rem] font-bold hover:text-primary transition-colors duration-200">
                      Strony internetowe Katowice
                    </h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/krakow">
                    <h3 className="text-[1.5rem] font-bold hover:text-primary transition-colors duration-200">
                      Strony internetowe Kraków
                    </h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/warszawa">
                    <h3 className="text-[1.5rem] font-bold hover:text-primary transition-colors duration-200">
                      Strony internetowe Warszawa
                    </h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/wroclaw">
                    <h3 className="text-[1.5rem] font-bold hover:text-primary transition-colors duration-200">
                      Strony internetowe Wrocław
                    </h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/poznan">
                    <h3 className="text-[1.5rem] font-bold hover:text-primary transition-colors duration-200">
                      Strony internetowe Poznań
                    </h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/gdansk">
                    <h3 className="text-[1.5rem] font-bold hover:text-primary transition-colors duration-200">
                      Strony internetowe Gdańsk
                    </h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageInfo;
