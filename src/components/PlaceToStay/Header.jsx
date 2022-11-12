import React, { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll';
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          'fixed top-0 w-full  z-30 bg-white-500 transition-all ' +
          (scrollActive ? ' shadow-md pt-0' : ' pt-4')
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
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
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('about');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'about'
                  ? ' text-orange-500 animation-active '
                  : ' text-black-500 hover:text-orange-500 a')
              }
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('feature');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'feature'
                  ? ' text-orange-500 animation-active '
                  : ' text-black-500 hover:text-orange-500 ')
              }
            >
              Place To Stay
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('pricing');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'pricing'
                  ? ' text-orange-500 animation-active '
                  : ' text-black-500 hover:text-orange-500 ')
              }
            >
              Nfts
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('testimoni');
              }}
              className={
                'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'testimoni'
                  ? ' text-orange-500 animation-active '
                  : ' text-black-500 hover:text-orange-500 ')
              }
            >
              Community
            </LinkScroll>
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
                        {/* <div className="mt-2 text-center sm:ml-4 sm:text-left">
                          <h4
                            style={{ fontFamily: 'Red Rose' }}
                            className="font-bold text-2xl"
                          >
                            Connect Wallet
                          </h4>
                          <div className='w-[100%] h-[1px] bg-black-600'></div>
                          <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <div className="items-center gap-2 mt-3 sm:flex">
                            <button
                              className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                              onClick={() => setShowModal(false)}
                            >
                              Delete
                            </button>
                            <button
                              className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto  rounded-full">
                          <img src="../../assets/Icon/x.svg" alt="x" />
                        </div> */}
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

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('about');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'about'
                  ? '  border-orange-500 text-orange-500'
                  : ' border-transparent')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('feature');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'feature'
                  ? '  border-orange-500 text-orange-500'
                  : ' border-transparent ')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Feature
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('pricing');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'pricing'
                  ? '  border-orange-500 text-orange-500'
                  : ' border-transparent ')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('testimoni');
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'testimoni'
                  ? '  border-orange-500 text-orange-500'
                  : ' border-transparent ')
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Testimonial
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
