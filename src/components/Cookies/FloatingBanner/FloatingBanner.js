import React from 'react';
import './FloatingBanner.scss';

const FloatingBanner = ({ message, header, acceptText, denyText, onAccept, onDeny, customizeText, onCustomize }) => {
  return (
    <div className={`fixed bottom-0 inset-x-0 pb-2 sm:pb-5`} style={{ zIndex: '2000' }}>
      <div className="max-w-screen-xl  mx-auto px-2 sm:px-6 lg:px-8">
        <div className={`p-2 rounded-lg bg-background-light shadow-lg sm:p-3`}>
          <div className="flex items-center justify-between flex-wrap">
            <div className="sm:flex-1 flex items-center">
              <div className="flex-col flex">
                <div className={`ml-3 font-bold text-xl text-text-dark`}> {header}</div>
                <div className="ml-3 font-medium text-text-dark">
                  <span className="md:hidden">{message}</span>
                  <span className="hidden md:inline">{message}</span>
                </div>
              </div>
            </div>
            <div className="cookies_banner_buttons flex gap-2 sm:mt-0 mt-4 sm:w-max w-full sm:mx-0 mx-auto sm:ml-0 ml-2">
              {acceptText !== undefined && (
                <div className="cookies_banner_button flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                  <div className="rounded-md shadow-sm">
                    {onAccept !== undefined && (
                      <button
                        className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-text-light bg-background-dark hover:text-primary focus:outline-none focus:shadow-outline transition ease-in-out duration-150`}
                        onClick={onAccept}
                      >
                        {acceptText}
                      </button>
                    )}
                  </div>
                </div>
              )}
              {denyText !== undefined && (
                <div className="cookies_banner_button flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    className={`flex items-center justify-center px-4 py-2 text-sm leading-5 font-medium rounded-md text-text-dark-200 bg-background-light border-dark border-2 hover:text-primary focus:outline-none focus:shadow-outline transition ease-in-out duration-150`}
                    onClick={onDeny}
                  >
                    {denyText}
                  </button>
                </div>
              )}
              {customizeText !== undefined && (
                <div className="cookies_banner_button flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    onClick={onCustomize}
                    className={`flex items-center justify-center px-4 py-2 text-sm leading-5 font-medium rounded-md text-text-dark-200 bg-background-light border-dark border-2 hover:text-primary focus:outline-none focus:shadow-outline transition ease-in-out duration-150`}
                  >
                    {customizeText}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBanner;
