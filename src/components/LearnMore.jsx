import React from 'react';

const LearnMore = () => {
  return (
    <div className="bg-gradient-to-r from-[#A02279] to-[#A02279] pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-2 sm:grid-cols-12">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div className="col-start-1 col-end-2 flex items-center mb-[35px]">
            <h1
              style={{ fontFamily: 'Red Rose' }}
              className="font-bold 
                     text-[#ffffff] text-5xl"
            >
              Metabnb NFTs
            </h1>
          </div>
          <div className="flex w-full mt-2  -mx-2 mb-[71.55px]">
            <div className="mx-2items-center justify-center flex p-2">
              <p
                style={{ fontFamily: 'Red Rose', lineHeight: '35px' }}
                className="text-[#ffffff] font-normal text-lg"
              >
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
            </div>
          </div>
          <button
            style={{ fontFamily: 'Red Rose' }}
            className="py-3 lg:py-4 px-12 lg:px-16 font-normal text-[16px] rounded-lg bg-[#ffffff] text-[#A02279] transition-all outline-none "
          >
            Learn More
          </button>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <img
            src="../assets/learnmore_img.png"
            className="max-w-none w-[600px] h-[500px]"
            alt="learnmore"
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
