import React from 'react';

const Collections = ({
    listImage = [
    {
      image: "../assets/Frame151.png",
    },
    {
      image: "../assets/Frame152.png",
    },
    {
      image: "../assets/Frame153.png",
    },
    {
      image: "../assets/Frame154.png",
    },
    {
      image: "../assets/Frame155.png",
    },
    {
      image: "../assets/Frame156.png",
    },
    {
      image: "../assets/Frame157.png",
    },
    {
      image: "../assets/Frame158.png",
    },
  ],}) => {
    
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <div className='mb-8'>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed ">
              Inspiration for your next adventure
            </h1>
          </div>
                  <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-6 sm:px-0 lg:px-6 gap-4">
                  {listImage.map((listImages, index) => (
            <div className="flex">
              <div className=" border-2 border-gray-500 rounded-2xl py-[16px] px-[16px]">
                <div className="pb-[16px]">
                  <img src={listImages.image} width="260px" height="265px" alt="" />
                              </div>
                              <div className='flex justify-between text-[#434343]'>
                                  <p style={{fontFamily:'Red Rose'}} className="font-normal text-xs">Desert King</p>
                                  <p style={{fontFamily:'Red Rose'}} className="font-bold text-xs">1MBT per night</p>
                              </div>
                              <div className='flex justify-between text-[#434343]'>
                                  <p style={{fontFamily:'Red Rose'}} className="font-normal text-xs">2345km away</p>
                                  <p style={{fontFamily:'Red Rose'}} className="font-normal text-xs">available for 2weeks stay</p>
                              </div>
                              <div className='flex gap-2 items-start flex-row p-0 text-[#434343]'>
                                  <img src='../assets/Icon/Star.svg' alt="star"/>
                                  <img src='../assets/Icon/Star.svg' alt="star"/>
                                  <img src='../assets/Icon/Star.svg' alt="star"/>
                                  <img src='../assets/Icon/Star.svg' alt="star"/>
                                  <img src='../assets/Icon/Star.svg' alt="star"/>
                              </div>
              </div>
            </div>
                      ))}
           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Collections;

