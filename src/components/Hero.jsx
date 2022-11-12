import React from 'react';
import ButtonPrimary from './misc/ButtonPrimary';
import { motion } from 'framer-motion';

const Hero = ({
  listUser = [
    {
      name: 'MBToken',
      icon: '../assets/Icon/mb-token.svg',
    },
    {
      name: 'METAMASK',
      icon: '../assets/Icon/metamask.svg',
    },
    {
      name: 'OpenSea',
      icon: '../assets/Icon/opensea.svg',
    },
  ],
}) => {
  return (
    <div className={'max-w-screen mt-24 mx-auto'} id="about">
      <div className="xl:ml-44">
        <motion.div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-4 mx-16 px-8 xl:px-16 py-6 sm:py-16 sm:mx-8">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1
              className="text-3xl lg:text-4xl xl:text-6xl font-medium text-black-400 leading-normal"
              style={{ fontFamily: 'Red Rose' }}
            >
              Rent a <strong className="text-[#A02279]">Place</strong> away from{' '}
              <strong className="text-[#A02279]">Home</strong> in the{' '}
              <strong className="text-[#A02279]">Metaverse</strong>
              {/* Want anything to be easy with <strong>LaslesVPN</strong>. */}
            </h1>
            <p
              className="text-[#434343] font-normal mt-4 mb-6 xl:text-[31px]"
              style={{ fontFamily: 'Red Rose' }}
            >
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="form-control">
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Search for location"
                  className="input  rounded-tl rounded-bl  border-[#A3A3A3] py-3 lg:py-4 px-12 lg:px-16"
                  style={{ border: '1px solid #A3A3A3' }}
                />
                <ButtonPrimary>Search</ButtonPrimary>
              </label>
            </div>
          </div>
          <div className="flex w-96 mx-32">
            <motion.div className="h-full w-full mt-16 px-2">
              {/* <Image
                  src="/assets/Illustration1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                /> */}
              <img
                src="../assets/image3.png"
                className="w-[612] py-2"
                alt="Ill"
              />
              <img src="../assets/image6.png" className="w-[612]" alt="Ill" />
            </motion.div>
            <motion.div className="h-full w-full ">
              {/* <Image
                  src="/assets/Illustration1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                /> */}

              <img
                src="../assets/image4.png"
                className="w-[612] py-2"
                alt="Ill"
              />
              <img src="../assets/image5.png" className="w-[612]" alt="Ill" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="relative w-full flex">
        <div className="w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 bg-[#A02279] z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
            >
              <div className="flex mx-auto w-40 sm:w-auto ">
                <div className="flex items-center justify-center w-12 h-12 rounded-full">
                  <img src={listUsers.icon} className="h-7 w-7" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg text-[#FFFFFF] pt-3">
                    {listUsers.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
