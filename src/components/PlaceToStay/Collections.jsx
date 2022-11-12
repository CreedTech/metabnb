import React from 'react';

const Collections = ({
  listImage = [
    {
      image: '../assets/Frame155.png',
    },
    {
      image: '../assets/Frame156.png',
    },
    {
      image: '../assets/Frame157.png',
    },
    {
      image: '../assets/Frame158.png',
    },
    {
      image: '../assets/Frame151.png',
    },
    {
      image: '../assets/Frame152.png',
    },
    {
      image: '../assets/Frame153.png',
    },
    {
      image: '../assets/Frame154.png',
    },
    {
      image: '../assets/Frame 161.png',
    },
    {
      image: '../assets/Frame 162.png',
    },
    {
      image: '../assets/Frame 159.png',
    },
    {
      image: '../assets/Frame 163.png',
    },
    {
      image: '../assets/Frame 164.png',
    },
    {
      image: '../assets/Frame 165.png',
    },
    {
      image: '../assets/Frame 166.png',
    },
    {
      image: '../assets/Frame 167.png',
    },
  ],
}) => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id=""
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <div className="my-20 flex flex-row flex-wrap justify-between">
            <div className="flex flex-row flex-wrap gap-12 items-start">
              <p>Resturant</p>
              <p>Cottage</p>
              <p>Castle</p>
              <p>fantast city</p>
              <p>beach</p>
              <p>Carbins</p>
              <p>Off-grid</p>
              <p>Farm</p>
            </div>
            <div
              className="flex flex-row justify-between gap-10 p-2"
              style={{ border: '1px solid #B4B4B4', borderRadius: '8px' }}
            >
              <div>
                <p>Location</p>
              </div>
              <div>
                <img
                  className="w-6 h-6"
                  src="../../assets/Icon/vuesax/linear/setting-5.svg"
                  alt="settings"
                />
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-6 sm:px-0 lg:px-6 gap-4">
            {listImage.map((listImages, index) => (
              <div className="flex">
                <div className=" border-2 border-gray-500 rounded-2xl py-[16px] px-[16px]">
                  <div className="pb-[16px]">
                    <img
                      src={listImages.image}
                      width="260px"
                      height="265px"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between text-[#434343]">
                    <p
                      style={{ fontFamily: 'Red Rose' }}
                      className="font-normal text-xs"
                    >
                      Desert King
                    </p>
                    <p
                      style={{ fontFamily: 'Red Rose' }}
                      className="font-bold text-xs"
                    >
                      1MBT per night
                    </p>
                  </div>
                  <div className="flex justify-between text-[#434343]">
                    <p
                      style={{ fontFamily: 'Red Rose' }}
                      className="font-normal text-xs"
                    >
                      2345km away
                    </p>
                    <p
                      style={{ fontFamily: 'Red Rose' }}
                      className="font-normal text-xs"
                    >
                      available for 2weeks stay
                    </p>
                  </div>
                  <div className="flex gap-2 items-start flex-row p-0 text-[#434343]">
                    <img src="../assets/Icon/Star.svg" alt="star" />
                    <img src="../assets/Icon/Star.svg" alt="star" />
                    <img src="../assets/Icon/Star.svg" alt="star" />
                    <img src="../assets/Icon/Star.svg" alt="star" />
                    <img src="../assets/Icon/Star.svg" alt="star" />
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
