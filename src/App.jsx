import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import Brands from "./components/Brands";
import Models from "./components/Models";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Accessories from "./components/Accessories";
import Accessor from "./components/Accessor";
import {fillCartAccessoriesOnRefresh, setLanguage} from "./store/userSlice";
import { api } from "./config/api";
import PayMethod from "./components/PayMethod";
import CreditCard from "./components/CreditCard";

const App = () => {
  const dispacth = useDispatch();
  let cartAccessories = useSelector(state => state.userSlice.cartAccessories);
  const accessor = useSelector(state => state.userSlice.accessor);
 
  // const [data, setData] = useState(null);
  // localStorage.clear()
  const languageData = useSelector(state => state.userSlice.languageData);

 useEffect(() => {
    fetch(api+"languages").then(response => response.json()).then(result => 
      dispacth(setLanguage(result))
      )
 }, [])

  useEffect(() => {
    const savedData1 = localStorage.getItem('data');
    if (savedData1) {
      cartAccessories = JSON.parse(savedData1)
      dispacth(fillCartAccessoriesOnRefresh(JSON.parse(savedData1)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cartAccessories));
  }, [cartAccessories]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
         
            
              <Route path="/" element={<Home />} />
              <Route path="/accessor" element={<Accessor />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payMethod" element={< PayMethod />}/>
              <Route path="/creditCard" element={<CreditCard />}/>
        </Routes>

        {/* {cartFlag && <></>} */}
      </div>
    </Router>
  );
};

export default App;
