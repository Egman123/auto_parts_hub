import { useSelector } from "react-redux";
import "../styles/footer.css";
import {
  FacebookOutlined,
  TwitterOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  
  const toggle = useSelector(state => state.userSlice.toggle);
  const toggleLang = useSelector(state => state.userSlice.toggleLang);
  const languageData = useSelector(state => state.userSlice.languageData);
  const language = languageData[0];

  return (
    <div className={toggle? 'darkFooter' : 'Footer'}>
      <div className="container">
        <div className="footer_inner">
          <div className="footer_info">
            <h2 className="footer_title">{language ? toggleLang  ? "Information" : language.footer.Information : "Information"}</h2>
            <div className="footer_links">
                 
               
              <a href="#">{language ? toggleLang  ? "Popular Models" : language.footer.Models : "Popular Models"}</a>
              <a href="#">{language ? toggleLang  ? "Batteries" : language.footer.Batter : "Batteries"}</a>
              <a href="#">{language ? toggleLang  ? "Disks" : language.footer.Disks : "Disks"}</a>
              <a href="#">{language ? toggleLang  ? "Tires" : language.footer.Tires : "Tires"}</a>
              <a href="#">{language ? toggleLang  ? "Oils" : language.footer.Oils : "Oils"}</a>
              <a href="#">{language ? toggleLang  ? "Feedback" : language.footer.Feedback : "Feedback"}</a>
            </div>
          </div>
          <div className="footer_info">
            <h2 className="footer_title"> {language ? toggleLang  ? "Customer Service" : language.footer.CustomerService : "Customer Service"}</h2>
            <div className="footer_links">
              <a href="#">{language ? toggleLang  ? "Sign In" : language.footer.SignIn : "SignIn"}</a>
              <a href="#">{language ? toggleLang  ? "Sign Up" : language.footer.SignUp : "SignUp"}</a>
              <a href="#">{language ? toggleLang  ? "My Accounts" : language.footer.MyAccounts : "MyAccounts"}</a>
              <a href="#">{language ? toggleLang  ? "How It Works" : language.footer.SignIn : "HowItWorks"}</a>
              <a href="#">{language ? toggleLang  ? "Contacts" : language.footer.Contacts : "Contacts"}</a>
            </div>
          </div>
          <div className="footer_info">
            <h2 className="footer_title">{language ? toggleLang  ? "SUPPLIER SERVICE" : language.footer.SupplierService : "SUPPLIER SERVICE"}</h2>
            <div className="footer_links">
              <a href="#">{language ? toggleLang  ? "Sign In" : language.footer.SignIn : "SignIn"}</a>
              <a href="#">{language ? toggleLang  ? "Sign Up" : language.footer.SignUp : "SignUp"}</a>
              <a href="#">{language ? toggleLang  ? "Seller Dashboard" : language.footer.SellerDashboard : "Seller Dashboard"}</a>
              <a href="#">{language ? toggleLang  ? "How It Works" : language.footer.HowItWorks : "HowItWorks"}</a>
            </div>
          </div>

          <div className="footer_social">
            <FacebookOutlined className="social_link"/>
            <TwitterOutlined className="social_link"/>
            <PhoneOutlined className="social_link"/>
            <WhatsAppOutlined className="social_link"/>
         
          </div>  
          
        </div>
        <div className="copyRight">Copyright © 2023 7zap.com. All rights reserved.</div>  
      </div>
    </div>
  );
};

export default Footer;
