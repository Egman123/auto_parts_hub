import "../styles/home.css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Brands from "./Brands";
import Models from "./Models";
import Accessories from "./Accessories";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Home = () => {
  const toggle = useSelector((state) => state.userSlice.toggle);
  const toggleLang = useSelector((state) => state.userSlice.toggleLang);

  return (
    <div className={toggle ? "darkHome" : "Home"}>
      <div className="container">
        <div className="home_content">
          {toggleLang ? (
            <>
              <h1>
                Welcome to <span>Auto Part Hub!</span>
              </h1>
              <p>Find the best deals on auto parts for your vehicle.</p>
              <p>Shop our wide selection of high-quality parts:</p>
            </>
          ) : (
            <>
              <h1>
                Добро Пожаловать <span>Auto Part Hub!</span>
              </h1>
              <p>
                Найдите лучшие предложения по автозапчастям для вашего
                автомобиля.
              </p>
              <p>Покупайте наш широкий выбор высококачественных запчастей:</p>
            </>
          )}

          {/* <p>
            Whether you need to upgrade your car's performance or replace a
            worn-out part, we have you covered.
          </p>
          <p>Shop now and enjoy great prices and discounts on top brands!</p> */}
        </div>

        {/* <Swiper
            className="Swiper"
            // install Swiper modules
            spaceBetween={10}
            centeredSlides={true}
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
            <SwiperSlide>
              <img
                className="slide_photo"
                src="assets/benjamin-brunner-9ZTpCjmwL2M-unsplash.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slide_photo"
                src="assets/tory-bishop-QzH-UGjKN8g-unsplash.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slide_photo"
                src="assets/jose-pinto-yeMpSqF8Z-8-unsplash.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slide_photo"
                src="assets/tim-mossholder-V37iTrYZz2E-unsplash.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper> */}
        <div className="home_right_side"></div>
      </div>

      <Brands />
      <Models />
      <Accessories />
      <Footer />
    </div>
  );
};

export default Home;
