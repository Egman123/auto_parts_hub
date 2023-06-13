import { api } from "../config/api";
import { useState, useEffect } from "react";
import "../styles/models.css";
import { useSelector } from "react-redux";

const Models = () => {
  const [models, setModels] = useState([]);
  const toggle = useSelector(state => state.userSlice.toggle);
  const toggleLang = useSelector(state => state.userSlice.toggleLang);
  const languageData = useSelector(state => state.userSlice.languageData);
  const language = languageData[0];

  useEffect(() => {
    fetch(api+'models')
      .then((response) => response.json())
      .then((result) => setModels(result));
  }, []);

  return (
    <div className={toggle ?'darkModels'  :'Models' }>
      <div className="container">
      <h2 className="title">{language ? toggleLang  ? "Popular Models" : language.titles.models : "Popular Models"}</h2>

        <div className="all_models">
          {models.map((model) => (
            <div className="model">
              <img className="model_image" src={model.image} alt="model" />
              <div className="model_name">{model.model}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
