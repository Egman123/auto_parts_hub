import React from 'react';
import "../styles/paymentModal.css";
import {CloseOutlined ,RightOutlined, QrcodeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const PayMethod = () => {
  const navigate = useNavigate();

  const goCreditCard = () => {
    navigate('/creditCard')
  }

 

  return (
    <div className='PayMethod'>
       <div className="payment_modal_window">
          <CloseOutlined onClick={() => navigate(-1)} className='close_payment_modal'/>
         <h2 className='paymentMethod_title'>Payment method</h2>
         <div className='methods'>
        
            <div
             onClick={goCreditCard} 
             className="method">
               <img src="assets/add_card_icon.png" alt="" /> Card
                <RightOutlined className='method_rightOutlined'/>
            </div>
            <div className="method">
              <QrcodeOutlined  className='method_qrCodeOutlined'/>  QR
           </div> 
            <div className="method">
              <img src='assets/sbp_icon.png'/>  SBP
           </div> 
           <button className='select_PayMethod_btn'>Select</button>
         </div>
       </div>
    </div>
  )
}

export default PayMethod