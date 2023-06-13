import { useState, useEffect } from "react";
import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  incCartAccessorCount,
  decCartAccessorCount,
  removeFromCart,
  removeAllFromCart,
} from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const toggle = useSelector((state) => state.userSlice.toggle);
  const cartAccessories = useSelector(
    (state) => state.userSlice.cartAccessories
  );
  const dispacth = useDispatch();
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate();
  const goToPayMethod = () => {
    navigate("/payMethod")
  }

  useEffect(() => {
    // Вычисляем общую сумму
    const sum = cartAccessories.reduce(
      (accumulator, obj) => accumulator + obj.count * obj.discountedPrice,
      0
    );
    setTotalSum(sum);
  }, [cartAccessories]);

  return (
    <div className={cartAccessories.length ? toggle? "dark_fill_Cart" : "fill_Cart": "Cart" }>
        <div className="container">
          <div className="cart_inner">
            {!cartAccessories.length ? (
              <>
                <ShoppingCartOutlined className="cart_img" />
                <h2 className="cart_text">No Such Products</h2>
              </>
            ) : (
              <div className="cart_content">
                <div className="cartAccessors">
                  {cartAccessories.length &&
                    cartAccessories.map((cartAccessor) => (
                      // <></>
                      <div className="cartAccessor">
                        <div className="cartAccessor_name">
                          {cartAccessor.name}
                        </div>
                        <img
                          src={cartAccessor.image}
                          alt="cartAccessor"
                          className="cartAccessor_img"
                        />
                        <div className="cartAccessor_btns">
                          <button
                            onClick={() =>
                              dispacth(decCartAccessorCount(cartAccessor.id))
                            }
                          >
                            -
                          </button>
                          {cartAccessor.count}
                          <button
                            onClick={() =>
                              dispacth(incCartAccessorCount(cartAccessor.id))
                            }
                          >
                            +
                          </button>
                          <div className="cart_accessor_price">
                            $
                            {cartAccessor.count
                              ? cartAccessor.discountedPrice *
                                cartAccessor.count
                              : cartAccessor.discountedPrice}
                          </div>
                        </div>
                        <DeleteOutlined
                          className="deleteCartAccessor"
                          onClick={() =>
                            dispacth(removeFromCart(cartAccessor.id))
                          }
                        />
                      </div>
                    ))}
                </div>
                <button
                  onClick={() => dispacth(removeAllFromCart())}
                  className="removeAllCartAccessories"
                >
                  <span>
                    <DeleteOutlined />
                  </span>
                  Remove All
                </button>

                <div                                
                 className="checkout">
                  <h2 className="subtotal_title">
                    Subtotal({cartAccessories.length} item):{" "}
                    <span className="subtotal_price">${totalSum}</span>
                  </h2>
                  <button 
                    onClick={() => navigate("/payMethod")}
                    className="subtotal_btn">Proceed to checkout</button>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Cart;
