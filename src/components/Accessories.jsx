import "../styles/accessories.css";
import { useEffect, useState } from "react";
import { api } from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import {
  incCartNumber,
  fillCartAccessories,
  setAccessories,
  setAccessor,
} from "../store/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Accessories = () => {
  let arr = [1, 2, 3, 4, 5];
  // const [accessories, setAccessories] = useState([]);
  const accessories = useSelector((state) => state.userSlice.accessories);
  const toggle = useSelector((state) => state.userSlice.toggle);
  const accessor = useSelector((state) => state.userSlice.accessor);
  const dispacth = useDispatch();
  const cartNumber = useSelector((state) => state.userSlice.cartNumber);
  const cartAccessories = useSelector(
    (state) => state.userSlice.cartAccessories
  );
  const toggleLang = useSelector(state => state.userSlice.toggleLang);
  const languageData = useSelector(state => state.userSlice.languageData);
  const language = languageData[0];

  const navigate = useNavigate("");

  useEffect(() => {
  
  fetch(api + (toggleLang?  "accessories":"accessoriesRu" ))
      .then((response) => response.json())
      .then((result) => dispacth(setAccessories(result)));
  }, [toggleLang]);

  
  const fillCartWithAccessories = (item,id) => {
    //  navigate('./accessor')
    const itemExistsInCart = cartAccessories.some((cartItem) => cartItem.id === item.id);
    accessories.map((accessor) => {
    
      if (
        accessor.id === id &&
        !itemExistsInCart &&
        cartAccessories.length < accessories.length
      ) {
        dispacth(fillCartAccessories(accessor));
        console.log(cartAccessories, ":cartAccessories");
      }
      return accessor;
    });
    dispacth(incCartNumber());
    console.log(cartAccessories);
  };

  const goAccessor = (accessor,id) => {
    dispacth(setAccessor(accessor));
    navigate(`/accessor`, {state: {accessor}});
  };
  console.log(cartAccessories);
  console.log(accessor, "accessor");
  return (
    <div className={toggle ? "dark_accessories" : "Accessories"}>
      <div className="container">
      <h2 className="title">{language ? toggleLang  ? "Popular Accessories" : language.titles.accessories : "Popular Accessories"}</h2>

        <div className="accessories_innner">
          
          {accessories.map((accessor, index) => (
            <div className="accessor">
              <img
                className="accessor_image"
                src={accessor.image}
                onClick={() => goAccessor(accessor, accessor.id)}
              />
              <div className="accessor_content">
                <div className="accessor_name">{accessor.name}</div>
                <div className="accessor_price">${accessor.price}</div>
                <div className="discounted_price">
                  ${accessor.discountedPrice}
                </div>
                {arr.map((el) => (
                  <StarOutlined />
                ))}
              </div>
              <ShoppingCartOutlined
                className="accessories_cart"
                onClick={() => fillCartWithAccessories(accessor, accessor.id)}
              />
              {/* <div className="accessor_name">{accessor.id}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
