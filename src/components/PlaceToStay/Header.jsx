import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header
        className={'fixed top-0 w-full  z-30 bg-white-500 transition-all '}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link to="/" className="flex flex-row">
              <img
                src="../../assets/Vector-1.svg"
                alt="I4G"
                className="h-6 w-auto"
              />
              <img
                src="../../assets/Vector.svg"
                alt="I4G"
                className="h-6 w-auto"
              />
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <Link
              to="/"
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative'
              }
            >
              Home
            </Link>
            <Link
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative'
              }
            >
              Place To Stay
            </Link>
            <Link
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative'
              }
            >
              Nfts
            </Link>
            <Link
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative'
              }
            >
              Community
            </Link>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            {/* <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Sign In
              </a>
            </Link> */}
            <button
              className="font-medium tracking-wide py-2 px-5 sm:px-8  text-white-500 bg-[#A02279] outline-none  rounded-[10px] capitalize hover:bg-orange-500 hover:text-white-500 transition-all"
              onClick={() => setShowModal(true)}
            >
              Connect Wallet
            </button>

            {showModal ? (
              <>
                <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-400 bg-opacity-40 ">
                  <div
                    className="fixed inset-0 w-full h-full"
                    onClick={() => setShowModal(false)}
                  ></div>
                  <div className="flex items-center min-h-screen ">
                    <div className="relative w-full max-w-lg  mx-auto bg-white rounded-lg ">
                      <div className="mt-3 sm:flex bg-[#ffffff] opacity-100 rounded-2xl p-2 pl-4">
                        <div className="mt-2 text-center sm:ml-0 sm:text-left">
                          <div className="flex flex-row  justify-between items-center gap-x-72 p-2">
                            <h4
                              style={{ fontFamily: 'Red Rose' }}
                              className="font-bold text-2xl"
                            >
                              Connect Wallet
                            </h4>
                            <img
                              src="../../assets/Icon/x.svg"
                              alt="x"
                              className="cursor-pointer"
                              onClick={() => setShowModal(false)}
                            />
                          </div>
                          <div className="w-[100%] h-[1px] bg-black-600"></div>
                          <div>
                            <p
                              style={{ fontFamily: 'Red Rose' }}
                              className="font-normal text-xs"
                            >
                              Choose your preferred wallet:
                            </p>
                          </div>
                          <div
                            className="flex items-center gap-72 border-[#A3A3A3] pl-3 mt-4 rounded-xl"
                            style={{ border: '1px solid #CFD8DC' }}
                          >
                            <div className="flex items-center gap-4 p-1">
                              <img
                                src="../../assets/metamask_img.png"
                                alt="meta"
                              />
                              <p
                                style={{ fontFamily: 'Red Rose' }}
                                className="font-semibold text-xl"
                              >
                                Metamask
                              </p>
                            </div>
                            <img
                              src="../../assets/Icon/arrow_back.svg"
                              alt="arrow"
                            />
                          </div>
                          <div
                            className="flex items-center gap-64 border-[#A3A3A3] pl-3 mt-4 mb-2 rounded-xl"
                            style={{ border: '1px solid #CFD8DC' }}
                          >
                            <div className="flex items-center gap-4 p-1">
                              <img src="../../assets/wallet.png" alt="meta" />
                              <p
                                style={{ fontFamily: 'Red Rose' }}
                                className="font-semibold text-xl"
                              >
                                WalletConnect
                              </p>
                            </div>
                            <img
                              src="../../assets/Icon/arrow_back.svg"
                              alt="arrow"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 bg-white-500 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <Link
              to="/"
              className={
                '  py-4 flex flex-col items-center text-xs  transition-all '
              }
            >
              Home
            </Link>
            <Link
              className={
                ' py-2 flex flex-col items-center text-xs  transition-all '
              }
            >
              Place To Stay
            </Link>
            <Link
              className={
                ' py-2 flex flex-col items-center text-xs  transition-all '
              }
            >
              NFTs
            </Link>
            <Link
              className={
                ' py-2 flex flex-col items-center text-xs  transition-all '
              }
            >
              Community
            </Link>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
