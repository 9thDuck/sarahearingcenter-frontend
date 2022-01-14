import React, { useEffect } from "react";
import {
 FaChevronLeft,
 FaChevronRight,
 FaAngleDoubleDown,
} from "react-icons/fa";
import carouselImages from "./carouselImages";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import {
 setCarouselImagesAction,
 setCarouselImageIndexAction,
} from "../../../redux/actions";
import { mapStateToProps } from "../../../redux/store";

const Carousel = ({ carouselLoading, error, carouselImageIndex, dispatch }) => {
 //  const carouselImageArrayFetcher = async () => {
 //   try {
 //    const output = await axios.get(`${baseUrl}carouselImages`);

 //    if (output.status !== 200 && output.carouselImages.length < 0) {
 //     dispatch(
 //      setErrorAction({
 //       error: true,
 //       msg: "Something went wrong while getting images for carousel",
 //       statusCode: output.status,
 //      })
 //     );
 //     return dispatch(setCarouselLoadingAction(false));
 //    }

 //    const { carouselImages } = output.data;

 //    dispatch(setCarouselImagesAction(carouselImages));
 //    dispatch(setCarouselLoadingAction(false));
 //   } catch (error) {
 //    console.error(error);
 //   }
 //  };
 //  useEffect(() => {}, []);

 const carouselImageIndexChanger = () => {
  return dispatch(
   setCarouselImageIndexAction(
    carouselImageIndex === carouselImages.length - 1
     ? 0
     : carouselImageIndex + 1
   )
  );
 };

 useEffect(() => {
  dispatch(setCarouselImagesAction(...carouselImages));
 }, []);

 useEffect(() => {
  const carouselInterval = setInterval(() => carouselImageIndexChanger(), 5000);
  return () => clearInterval(carouselInterval);
 }, [carouselImageIndex]);

 if (carouselLoading && carouselImages.length < 1) {
  return (
   <div className="loadingWelcome">
    <h2>Welcome to Sara Hearing</h2>
    <div className="loading"></div>
   </div>
  );
 }

 return (
  <section className="carouselContainer">
   {carouselImages.map((img, idx) => {
    return (
     <div
      key={uuid()}
      className={`singleCarouselImage${
       idx === carouselImageIndex
        ? " activeCarouselImage"
        : idx < carouselImageIndex
        ? " previousCarouselImage"
        : " upcomingCarouselImage"
      }`}
      style={{
       background: `url(${img}) no-repeat center`,
       backgroundSize: "cover",
      }}
     >
      <div className="welcome">
       <h3>Welcome to Libya's leading Hearing aid clinic</h3>
       <h2>Sara Hearing Center</h2>
      </div>
     </div>
    );
   })}

   <div className={`carouselBtnsContainer${error.error ? " hidden" : ""}`}>
    <button
     className="prevCarouselBtn"
     onClick={() => carouselImageIndexChanger()}
    >
     <FaChevronLeft />
    </button>
    <button
     className="nextCarouselBtn"
     onClick={() => carouselImageIndexChanger()}
    >
     <FaChevronRight />
    </button>
   </div>
   <div className="dots">
    {carouselImages.map((dot, idx) => {
     return (
      <div
       key={uuid()}
       className="dot"
       onClick={() => dispatch(setCarouselImageIndexAction(idx))}
       style={{ background: `${idx === carouselImageIndex ? "#d81e5b" : ""}` }}
      ></div>
     );
    })}
   </div>
   <div className="scrollDownSectionBtnContainer">
    <a className="scrollDownSectionBtn" href="#products">
     <FaAngleDoubleDown />
    </a>
   </div>
  </section>
 );
};

export default connect(mapStateToProps)(Carousel);
