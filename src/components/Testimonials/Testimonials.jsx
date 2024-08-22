import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setactiveIndex] = useState(0);
  console.log(activeIndex);
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  const handleSlideChanage = () => {
    if (swiperRef.current) {
      setactiveIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  const testimonialdata = [
    {
      id: 1,
      name: "Savannah Nguyen",
      profession: "YouTube Influencer",
      comment:
        "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.",
      rating: 5,
    },
    {
      id: 2,
      name: "Siddarth",
      profession: "ui/ux ",
      comment:
        "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Savannah Nguyen",
      profession: "web devloper",
      comment:
        "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.",
      rating: 4,
    },
    {
      id: 4,
      name: "kiran",
      profession: "web devloper",
      comment:
        "As a satisfied customer of [SaaS Provider], I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.",
      rating: 2.5,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="stars flex gap-3 justify-center">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={i} className="text-gray-500" />
          ))}
      </div>
    );
  };

  return (
    <section className="bg-white my-10 py-5 px-10 ">
      <div className=" shadow-[0px_0px_8px_#c6c6c6] rounded-md w-[80%] mx-auto">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          onSlideChange={handleSlideChanage}
          modules={[Pagination, Navigation]}
        >
          {testimonialdata.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center py-6 gap-5 px-[150px]">
                <div className="pagination flex gap-5 justify-center">
                  {testimonialdata.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => handlePaginationClick(index)}
                      className={` ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-[#002481] to-[#8000FF]"
                          : "bg-gray-300"
                      } cursor-pointer w-[70px] h-[5px] rounded-[50px] `}
                    ></div>
                  ))}
                </div>
                <div className="stars">{renderStars(item.rating)}</div>
                <div className="relative comment ">
                  <RiDoubleQuotesL className="absolute top-[-20px] left-[-60px] text-5xl  text-gray-400" />
                  <span className="text-[#607D8B] text-lg ">{item.comment}</span>
                  <RiDoubleQuotesR className="absolute bottom-0 right-[0px] text-5xl  text-gray-400" />
                </div>
                <div className="flex gap-20 items-center">
                  <div onClick={handlePrevClick} className="left-arrow prev">
                    <FaCaretLeft className="text-2xl  cursor-pointer text-[#645287]" />
                  </div>
                  <div className="author flex flex-col items-center justify-center">
                    <p className="text-[#263238] font-semibold">{item.name}</p>
                    <p className="text-[#757E82]">{item.profession}</p>
                  </div>
                  <div onClick={handleNextClick} className="right-arrow next">
                    <FaCaretRight className="text-2xl  cursor-pointer text-[#645287]" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
