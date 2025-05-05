import React from 'react';

import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const LPWebsiteFunctions = ({
  sectionTitle,
  sectionTitleColored,
  sectionSubtitle,
  itemTitle1,
  itemDescription1,
  itemTitle2,
  itemDescription2,
  itemTitle3,
  itemDescription3,
  itemTitle4,
  itemDescription4,
  itemTitle5,
  itemDescription5,
  itemTitle6,
  itemDescription6,
  itemTitle7,
  itemDescription7,
  itemTitle8,
  itemDescription8,
}) => {
  return (
    <section className="py-[100px]">
      <div className="container mx-auto px-4">
        <SectionTitle
          ariaLabel={sectionTitle + sectionTitleColored}
          title={sectionTitle}
          coloredText={sectionTitleColored}
          subtitle={sectionSubtitle}
          backgroundText="Funkcje"
        />

        <div className="mt-[150px] flex flex-wrap justify-between gap-y-12">
          {/* 1 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/price.png" alt="Cennik" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">{itemTitle1}</h3>
            <p>{itemDescription1}</p>
          </div>

          {/* 2 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/seo.png" alt="SEO" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">{itemTitle2}</h3>
            <p>{itemDescription2}</p>
          </div>

          {/* 3 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/rodo.png" alt="RODO" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">{itemTitle3}</h3>
            <p>{itemDescription3}</p>
          </div>

          {/* 4 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/support.png" alt="Wsparcie" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">{itemTitle4}</h3>
            <p>{itemDescription4}</p>
          </div>

          {/* 5 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/page-speed.png" alt="Szybkość" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">{itemTitle5}</h3>
            <p>{itemDescription5}</p>
          </div>

          {/* 6 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/responsive.png" alt="Responsywność" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">{itemTitle6}</h3>
            <p>{itemDescription6}</p>
          </div>

          {/* 7 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/cms_function.png" alt="CMS" width={200} />
            </div>
            <h3 className="text-xl font-bold mb-5">{itemTitle7}</h3>
            <p>{itemDescription7}</p>
          </div>

          {/* 8 */}
          <div className="w-full lg:w-1/2 xl:w-1/3 px-5 mb-8 transform transition duration-300 hover:scale-110 text-center">
            <div className="min-h-[200px] flex justify-center items-center">
              <StaticImage src="../../../../images/woocommerce.png" alt="WooCommerce" height={180} />
            </div>
            <h3 className="text-xl font-bold mb-5">{itemTitle8}</h3>
            <p>{itemDescription8}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPWebsiteFunctions;
