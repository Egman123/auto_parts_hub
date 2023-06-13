import "../styles/accessor.css";
import { useDispatch, useSelector } from "react-redux";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  incCartNumber,
  fillCartAccessories,
  setAccessor,
} from "../store/userSlice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Accessor = () => {
  const toggle = useSelector((state) => state.userSlice.toggle);
  const toggleLang = useSelector((state) => state.userSlice.toggleLang);
  const accessories = useSelector((state) => state.userSlice.accessories);
  const cartAccessories = useSelector(
    (state) => state.userSlice.cartAccessories
  );
  // const accessories = useSelector((state) => state.userSlice.accessories);

  useEffect(() => {
    accessories.map((acc) => {
        console.log(acc, "acc")
        // if (acc.id === langAccessor.id) {
        //   console.log("hello");
        //   console.log(accessor, "accessor");
        //   console.log(acc, "acc");  
        //    toggleLang ? setAccessor(acc) : setAccessor(langAccessor);
        // }
      
    });
  }, [toggleLang]);

  const stars = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const location = useLocation();
  let langAccessor  =  location.state.accessor;
  const [accessor, setAccessor] = useState(langAccessor)
  // console.log(accessor, "location");

  const fillCartWithAccessories = (item, id) => {
    const itemExistsInCart = cartAccessories.some(
      (cartItem) => cartItem.id === item.id
    );
    if (accessor.id === id && !itemExistsInCart) {
      dispatch(fillCartAccessories(accessor));
    }

    dispatch(incCartNumber());
  };

  return (
    <div className={toggle ? "dark_Accessor" : "Accessor"}>
      {
        <div className="accessor_inner">
          <div className="accessor_left_side">
            <img
              className="accessor_page_img"
              src={accessor.image}
              alt="accessor"
            />
          </div>
          <div className="accessor_right_side">
            <div className="accessor_page_name">{accessor.longName}</div>
            {stars.map((star) => (
              <StarOutlined />
            ))}
            <div className="accessor_page_price">${accessor.price}</div>
            <div className="accessor_page_discounted">
              ${accessor.discountedPrice}
            </div>
            <div className="accessor_page_description">
              {accessor.description}
            </div>
            <div
              onClick={() => fillCartWithAccessories(accessor, accessor.id)}
              className="accessor_page_addToCart"
            >
              add To Cart{" "}
              <span>
                <ShoppingCartOutlined className="accessor_page_shopCart" />
              </span>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Accessor;
