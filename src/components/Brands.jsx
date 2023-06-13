import { api } from "../config/api";
import { useEffect, useState } from "react";
import "../styles/brands.css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const toggle = useSelector(state => state.userSlice.toggle);
  const toggleLang = useSelector(state => state.userSlice.toggleLang);
  const languageData = useSelector(state => state.userSlice.languageData);
  const language = languageData[0];
  // console.log(languageData[0].titles, "languageData");
  // console.log(toggle + "hello");

  useEffect(() => {
    fetch(api+'brands')
      .then((response) => response.json())
      .then((result) => setBrands(result));
  }, []);

  console.log(brands);

  return (
    <>
      <div className={toggle? 'darkBrands' : 'Brands'}>
        <div className="container">
          <h2 className="title">{language ? toggleLang  ? "Popular Brands" : language.titles.brands : "Popular Brands"}</h2>
          <div className="allBrands">
            <Swiper
                  className="brands_swiper"
                  // install Swiper modules
                  slidesPerView={3}
                  spaceBetween={30}
                  // centeredSlides={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                >

               
            {brands.map((el) => (
              <div className="brand">
                
                  <SwiperSlide>
                    <img
                      className="brand_image"
                      src={el.image}
                      alt="image"
                    />
                  </SwiperSlide>
              </div>
            ))} 
            </Swiper>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
