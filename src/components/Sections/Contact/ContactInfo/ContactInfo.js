// ContactInfo.jsx
import React from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { HomeIcon } from '../../../Icons/Icons';

const ContactInfo = () => {
  return (
    <div className="my-[200px] mb-[100px] md:my-[100px]">
      <div className="container mx-auto px-4">
        <div
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-duration="1000"
          className=" flex lg:flex-row flex-col"
        >
          <div className="info flex-[2] flex flex-col items-center justify-center px-5">
            <SectionTitle title="Adres" subtitle="Zobacz na mapie, gdzie się znajduję" />
            <div className="mb-[50px] lg:mb-0 flex flex-col items-center justify-center">
              <HomeIcon width={45} height={45} />
              <p>Nowoczesna Witryna</p>
              <p>ul. Bogoczowiec 4c/9</p>
              <p>44-335 Jastrzębie-Zdrój</p>
            </div>
          </div>

          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="map flex-[3] p-2 rounded-[15px] min-h-[400px]"
          >
            <GoogleMaps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
