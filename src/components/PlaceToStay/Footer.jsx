import React from 'react';
import Facebook from '../../assets/Icon/facebook.svg';
import Twitter from '../../assets/Icon/twitter.svg';
import Instagram from '../../assets/Icon/instagram.svg';
const Footer = () => {
  return (
    <div className="bg-[#1D1D1E] pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12">
        <div className="row-span-2  sm:col-span-2 col-start-1 pb-16 col-end-4  sm:col-end-5 flex flex-col items-start ">
          <div className="col-start-1 col-end-2 flex items-center mb-16">
            <img
              src="../../assets/Vector-1-white.svg"
              alt="I4G"
              className="h-6 w-auto"
            />
            <img
              src="../../assets/Vector-white.svg"
              alt="I4G"
              className="h-6 w-auto"
            />
          </div>
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}

          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2items-center justify-center flex p-2 shadow-md">
              <img src={Facebook} alt="I4G" className="h-6 w-6" />
              {/* <Facebook className="h-6 w-6" /> */}
            </div>
            <div className="mx-2 items-center justify-center flex p-2 shadow-md">
              <img src={Instagram} alt="I4G" className="h-6 w-6" />
              {/* <Twitter className="h-6 w-6" /> */}
            </div>
            <div className="mx-2  items-center justify-center flex p-2 shadow-md">
              <img src={Twitter} alt="I4G" className="h-6 w-6" />
              {/* <Instagram className="h-6 w-6" /> */}
            </div>
          </div>
          <p className="text-[#F7F7F7]">©{new Date().getFullYear()} Metabnb</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-[#F7F7F7] mb-4 font-medium text-lg">Community</p>
          <ul className="text-black-500 ">
            <li className="my-2 text-[#F7F7F7]  hover:text-orange-500 cursor-pointer transition-all">
              NFT{' '}
            </li>
            <li className="my-2 text-[#F7F7F7] hover:text-orange-500 cursor-pointer transition-all">
              Tokens{' '}
            </li>
            <li className="my-2 text-[#F7F7F7] hover:text-orange-500 cursor-pointer transition-all">
              Landlords{' '}
            </li>
            <li className="my-2 text-[#F7F7F7] hover:text-orange-500 cursor-pointer transition-all">
              Discord{' '}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-[#F7F7F7] mb-4 font-medium text-lg">Places</p>
          <ul className="text-[#F7F7F7]">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Castle{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Farms{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Beach{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Learn More{' '}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-[#F7F7F7] mb-4 font-medium text-lg">About Us</p>
          <ul className="text-[#F7F7F7]">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Road map{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Creators{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Career{' '}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Contact us{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

