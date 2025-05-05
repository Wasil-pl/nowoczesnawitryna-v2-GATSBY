import React from 'react';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import './ServiceHighlights.scss';

const ServiceHighlights = ({
  title_first_column,
  title_first_card,
  title_second_card,
  descryption_first_column,
  card_descryption,
  second_card_descryption,
  variant = '',
  isHtml,
}) => {
  return (
    <section className={`site_info ${variant}`}>
      <div className="container mx-auto px-4">
        <div className="wrapper flex flex-col lg:flex-row relative z-[1] mt-[-80px] mb-0 rounded-[20px] shadow-custom">
          <div className="first_column flex-1 flex flex-col justify-evenly items-start gap-[20px] p-8 bg-background-primary rounded-t-[20px] lg:rounded-[20px_0_0_20px]">
            <h3 className="text-[1.8rem] font-bold"> {title_first_column} </h3>
            {isHtml ? (
              <p dangerouslySetInnerHTML={{ __html: descryption_first_column }} />
            ) : (
              <p>{descryption_first_column}</p>
            )}
            {!variant && <CustomButton variant="dark" text="Napisz do mnie..." link="/kontakt/" />}
            {variant && !isHtml && <CustomButton variant="dark" text="Napisz do mnie..." link="/kontakt/#kontakt" />}
            {isHtml && variant && (
              <CustomButton variant="dark" text="Przejdź do formularza..." link="/formularz-szybkiej-wyceny/#form" />
            )}
          </div>

          <div className="second_column flex-1 flex flex-col p-6 bg-background-lighter rounded-b-[20px] lg:rounded-[0_20px_20px_0]">
            <div className="first_card text-left mb-2">
              <div className="card bg-background-light rounded-[20px] p-4">
                <h3 className="text-[1.3rem] font-bold">{title_first_card}</h3>
                <p>{card_descryption}</p>
              </div>
            </div>

            <div className="second_card text-right">
              <div className="card bg-background-light rounded-[20px] p-4">
                <h3 className="text-[1.3rem] font-bold">{title_second_card}</h3>
                <p>{second_card_descryption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
