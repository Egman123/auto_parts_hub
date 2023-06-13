import Cards from "react-credit-cards-2";
import { useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "../styles/creditCard.css";

const CreditCard = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    if( Number(value) > -1 && name === "number" && String(value).length <= 16) {
       setState((prev) => ({ ...prev, [name]: value }))
    }
   
    if(Number(value) > -1 && name === "expiry" && String(value).length <= 4)
    setState((prev) => ({ ...prev, [name]: value }))
    if(Number(value) > -1 && name === "cvc" && String(value).length <= 4)
    setState((prev) => ({ ...prev, [name]: value }))
    if(name === "name") {
      setState((prev) => ({ ...prev, [name]: value }))
    }
  
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="CreditCard">
      <div className="card">
        <Cards
          className="visa_card"
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form className="card_form">
          <input
            max={5}
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            maxLength={30}
            type="name"
            name="name"
            placeholder="Enter Your Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="2inputs">
            <input
              className="valid_thru_input"
              type="number"
              name="expiry"
              placeholder="valid thru"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              className="cvc_input"
              type="number"
              name="cvc"
              placeholder="CVC"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <button className="link_card_button">Continue</button>
        </form>
      </div>
      <div className="card_text">
        <p>
           ООО "AutoPartsHub", 142181, Московская область, г. Подольск, деревня
           Коледино, Территория Индустриальный парк Коледино, д. 6, стр. 1
           Гарантируем безопасность платежа и сохранность личных данных протоколом
           TLS и сертификатом COMODO CA Ltd © 2023
        </p>
      </div>
    </div>
  );
};

export default CreditCard;
