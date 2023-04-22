import React from 'react';

const BaseSeparator = () => {
  return (
    <div className="relative flex justify-center py-16">
      <span className="absolute left-0 top-1/2 h-[1px] w-full bg-[#34415C]"></span>
      <div className="z-10 flex items-center bg-white px-2">
        {/* <Image src={Star} width={64} height={64} alt="" /> */}x
      </div>
    </div>
  );
};

export default BaseSeparator;
