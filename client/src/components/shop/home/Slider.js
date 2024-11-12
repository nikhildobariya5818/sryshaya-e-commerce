import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { Toaster } from "react-hot-toast";
import { sliderImages } from "../../admin/dashboardAdmin/Action";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    sliderImages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // Set up auto-slide
    const intervalId = setInterval(() => {
      setSlide(prevSlide => (prevSlide + 1) % data.sliderImages.length);
  }, 3000); // Change slide every 5 seconds

    // Check viewport width on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    
    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, data.sliderImages.length]);

  return (
    <Fragment>
      <div className="relative mt-32 bg-gray-100 border-2">
        {data.sliderImages.length > 0 && (
          <img
            className={`w-full ${isMobile ? 'h-mobile' : 'h-desktop'}`}
            src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
            alt="sliderImage"
          />
        )}
      </div>
      <OrderSuccessMessage />
      <Toaster position="bottom-right" reverseOrder={false} />
    </Fragment>
  );
};

export default Slider;
