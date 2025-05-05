import React from 'react';

const SelectionDisplay = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="selection_display_item px-[15px] py-[5px] m-[8px] flex  rounded-[5px]">
          <p className="block text-[1rem] font-bold mr-2">{key}:</p>
          <p> {value}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectionDisplay;
