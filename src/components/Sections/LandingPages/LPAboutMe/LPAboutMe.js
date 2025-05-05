import React from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const LPAboutMe = ({ description }) => {
  return (
    <section id="omnie" className="pt-[250px] pb-[300px] bg-background-lighter ">
      <div className="container mx-auto px-4">
        <SectionTitle ariaLabel="Kilka słów o mnie" title="Kilka słów" coloredText=" o mnie" backgroundText="o mnie" />

        <div className="flex flex-col lg:flex-row justify-between">
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 text-center"
          >
            <StaticImage
              src="../../../../images/aboutMe.png"
              alt="Dariusz Wasilewski full-stack web developer"
              placeholder="blurred"
              width={700}
            />
          </div>
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="1000"
            className="w-full lg:w-1/2 flex flex-col lg:pl-[40px]"
          >
            <h3 className="text-[2.5rem] font-bold  mb-[20px] text-primary">Cześć</h3>
            <p className="text-text-dark mb-[20px]">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPAboutMe;
