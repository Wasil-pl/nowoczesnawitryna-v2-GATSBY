// MyStack.jsx
import React, { useEffect } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import sal from 'sal.js';
import './MyStack.scss';

export const MyStack = () => {
  useEffect(() => {
    sal();
  }, []);

  const myStack = [
    'HTML5',
    'Sass',
    'JavaScript',
    'TypeScript',
    'React',
    'Gatsby',
    'Bootstrap',
    'Node.js',
    'NestJS',
    'MySQL',
    'MongoDB',
    'Wordpress',
    'Woocommerce',
    'Photoshop',
  ];

  const subtitle =
    'Do mojej pracy wykorzystuję najnowsze technologie i tworzę nowoczesne strony internetowe na zamówienie we wszystkich głównych systemach CMS i frameworkach.';

  return (
    <section className="my-stack">
      <div className="container mx-auto px-4">
        <div className="my-stack__wrapper  relative -mt-[150px]  px-[10px] py-[20px] md:p-[100px]  ">
          <div className="mb-[50px] md:mb-[0] px-[20px] md:px-0">
            <SectionTitle
              title="Technologie, których używam"
              coloredText=" w pracy"
              subtitle={subtitle}
              variant="sections_title_white"
              ariaLabel="Technologie, których używam w pracy"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center relative z-10">
            {myStack.map((item, idx) => (
              <div
                key={idx}
                className="group p-[15px] px-[20px] md:p-[20px] md:px-[30px] rounded-[20px] m-[10px]
                           bg-background-light transition duration-300 ease-in-out cursor-pointer
                           hover:scale-[1.07]"
              >
                <h3
                  className="m-0 text-[1.2rem] md:text-[1.5rem] font-bold text-text-dark
                               transition duration-300 transform "
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
