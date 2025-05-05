import React from 'react';
import { Tab } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const LPMyServicesThumbs = ({
  title_HTML,
  description_HTML,
  title_web_apps,
  description_web_apps,
  title_wordpress,
  description_wordpress,
  title_ecommerce,
  description_ecommerce,
  title_lms,
  description_lms,
  title_logo,
  description_logo,
}) => {
  return (
    <div className="flex ">
      <Tab.Group defaultIndex={0} as="div" className="flex w-full">
        <Tab.List className="flex flex-col flex-[1_1_0%] min-w-0 h-fit mt-[50px] mr-[50px] z-10">
          {[
            'Strony internetowe HTML',
            'Aplikacje webowe',
            'Strony Internetowe oparte na WordPress',
            'Sklepy internetowe',
            'Strony internetowe LMS – Nowoczesne Platformy Edukacyjne',
            'Projektowanie Logo',
          ].map((label, i) => (
            <Tab
              key={i}
              className={`w-full text-center px-[20px] py-[15px]  rounded-[15px] mb-[20px] relative cursor-pointer transition-all duration-300 ease-in-out tab_button`}
            >
              <h3 className="text-[1.1rem] text-text-dark font-bold uppercase m-0">{label}</h3>
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="flex-[3_1_0%] min-w-0 z-10">
          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">{title_HTML}</h3>
                {description_HTML.map((desc, index) => (
                  <p className="text-[1rem] text-text-light mb-[20px] last:mb-[50px]" key={index}>
                    {desc}
                  </p>
                ))}
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/strony-niestandardowe/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../images/html.png"
                  alt="strony kodowane od zera, strony internetowe html/css/JS"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">{title_web_apps}</h3>
                {description_web_apps.map((desc, index) => (
                  <p className="text-[1rem] text-text-light mb-[20px] last:mb-[50px]" key={index}>
                    {desc}
                  </p>
                ))}
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/aplikacje-webowe/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../images/web-app.png"
                  alt="aplikacje-webowe - strony internetowe na bazie aplikacji"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">{title_wordpress}</h3>
                {description_wordpress.map((desc, index) => (
                  <p className="text-[1rem] text-text-light mb-[20px] last:mb-[50px]" key={index}>
                    {desc}
                  </p>
                ))}
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/strony-wordpress/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../images/cms.png"
                  alt="strony wordpress - strony internetowe oparte na wordpress"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">{title_ecommerce}</h3>
                {description_ecommerce.map((desc, index) => (
                  <p className="text-[1rem] text-text-light mb-[20px] last:mb-[50px]" key={index}>
                    {desc}
                  </p>
                ))}
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/sklepy-internetowe/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../images/ecommerce.png"
                  alt="sklepy internetowe - sklepy online"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">{title_lms}</h3>
                {description_lms.map((desc, index) => (
                  <p className="text-[1rem] text-text-light mb-[20px] last:mb-[50px]" key={index}>
                    {desc}
                  </p>
                ))}
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/strony-lms/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage
                  src="../../../../images/lms.png"
                  alt="strony LMS - strony internetowe do prowadzenia kursów online"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="mt-[50px] flex flex-col-reverse 2xl:flex-row pl-[20px]">
              <div className="flex-[60%] tab_content">
                <h3 className="text-[2rem] font-bold text-text-primary mb-[50px] tab_content_h3">{title_logo}</h3>
                {description_logo.map((desc, index) => (
                  <p className="text-[1rem] text-text-light mb-[20px] last:mb-[50px]" key={index}>
                    {desc}
                  </p>
                ))}
                <div className="flex justify-center">
                  <CustomButton text="Zobacz więcej" link="/projektowanie-logo/" />
                </div>
              </div>
              <div className="flex-[40%] pl-0 mb-[20px] 2xl:pl-[50px] 2xl:mb-0 text-center">
                <StaticImage src="../../../../images/logo-min-white.png" alt="projektowanie logo" width={300} />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default LPMyServicesThumbs;
