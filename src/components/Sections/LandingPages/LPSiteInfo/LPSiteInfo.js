import React from 'react';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const LPSiteInfo = ({
  title_first,
  description_first,
  title_second,
  description_second,
  title_third,
  description_third,
  banner_description,
}) => {
  return (
    <section className="site_info">
      <div className="container mx-auto px-4">
        <div className="wrapper flex flex-col lg:flex-row relative z-[1] mt-[-80px] mb-0 rounded-[20px] shadow-custom">
          <div className="first_column flex-1 flex flex-col justify-evenly items-start gap-[20px] p-8 bg-background-primary rounded-t-[20px] lg:rounded-[20px_0_0_20px]">
            <h3 className="text-[1.8rem] font-bold"> {title_first} </h3>
            <p>{description_first}</p>
            <CustomButton variant="dark" text="Skontaktuj się" link="/kontakt/" />
          </div>

          <div className="second_column flex-1 flex flex-col p-6 bg-background-lighter rounded-b-[20px] lg:rounded-[0_20px_20px_0]">
            <div className="first_card text-left mb-2">
              <div className="card bg-background-light rounded-[20px] p-4">
                <h3 className="text-[1.3rem] font-bold">{title_second}</h3>
                <p>{description_second}</p>
              </div>
            </div>

            <div className="second_card text-right">
              <div className="card bg-background-light rounded-[20px] p-4">
                <h3 className="text-[1.3rem] font-bold">{title_third}</h3>
                <p>
                  {description_third}
                  <span>
                    <strong>
                      <a href="#omnie"> Zobacz moje umiejętności i doświadczenie.</a>
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="banner mt-[100px] bg-background-primary p-8 rounded-[20px] shadow-box"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <p className="text-[1.5rem] font-bold text-center">{banner_description}</p>
        </div>
      </div>
    </section>
  );
};

export default LPSiteInfo;
