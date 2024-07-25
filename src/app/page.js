import Image from "next/image";
import banner from '../../public/Assets/Images/Home_Banner.jpg'

import Bangalore from '../../public/Assets/Images/bangalore.jpg'
import Airport from '../../public/Assets/Images/airport.jpg'
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container flex flex-col w-full">

        <div id="content" className="w-full">
          <div id="bodyContainer" className="w-[960px] h-[1347px] m-auto flex flex-col">

            <div id="topBanner" className="w-[960px] h-[512px] relative pt-5">

              <Image alt="Image" className="w-[928px] h-[480px] rounded-xl absolute" src={banner} />

              <div id="bannerBox" className="w-full h-[512px] absolute">
                <div id="welcome" className="w-full h-[512px] flex flex-col justify-center items-center">
                  <h1 className="text-white text-5xl flex justify-center items-center text-center h-40 ">
                    Promote your brand on digital billboards in major cities
                  </h1>
                  <div id="searchContainer" >
                    <div className="flex justify-between items-center w-[480px] h-16 bg-white rounded-xl px-4">

                      <div id="searchIcon">

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_2312_54)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.9422 17.0578L14.0305 13.1469C16.3858 10.3192 16.1004 6.13911 13.3826 3.65779C10.6649 1.17647 6.47612 1.27167 3.87389 3.87389C1.27167 6.47612 1.17647 10.6649 3.65779 13.3826C6.13911 16.1004 10.3192 16.3858 13.1469 14.0305L17.0578 17.9422C17.302 18.1864 17.698 18.1864 17.9422 17.9422C18.1864 17.698 18.1864 17.302 17.9422 17.0578V17.0578ZM3.125 8.75C3.125 5.6434 5.6434 3.125 8.75 3.125C11.8566 3.125 14.375 5.6434 14.375 8.75C14.375 11.8566 11.8566 14.375 8.75 14.375C5.64483 14.3716 3.12844 11.8552 3.125 8.75V8.75Z" fill="#61788A" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2312_54">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                      </div>

                      <input type="search" className=" w-80 h-10 px-1" placeholder="Search for city or address" />

                      <div id="searchSubmit" className="text-white">
                        <button className=" w-24 h-12 rounded-xl bg-blue-600">
                          Search
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div id="cityContainers" className="flex flex-col">
              <h1 className="text-black text-2xl">
                <b>

                  Or pick from popular cities
                </b>
              </h1>

              <div id="cities" className=" pt-4">
                <div id="cityContainer" className=" h-[338px] w-full grid grid-cols-5">

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Bangalore
                        </b>
                      </h3>
                    </div>
                  </div>


                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Pune
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Chennai
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Kochi
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Vijayavada
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Mumbai
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Kolkata
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Hydrabad
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Delhi
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Bangalore} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Gurugram
                        </b>
                      </h3>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div id="categoryContainers" className="flex flex-col">
              <h1 className="text-black text-2xl">
                <b>

                  Browse by category
                </b>
              </h1>

              <div id="categories" className=" pt-4">
                <div id="categoryContainer" className=" h-[338px] w-full grid grid-cols-5">

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Airport
                        </b>
                      </h3>
                    </div>
                  </div>


                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Malls
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Restaurants
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Coffee Shops
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Gyms
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Gas Stations
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Banks
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Hotels
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Universities
                        </b>
                      </h3>
                    </div>
                  </div>

                  <div id="eachCity" className=" h-36 w-44 flex flex-col">
                    <Image alt="Image" src={Airport} className=" h-24 w-full flex rounded-xl" />
                    <div className="w-full h-9 flex items-center">
                      <h3 className=" text-base">
                        <b>
                          Hospitals
                        </b>
                      </h3>
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
}
