import React from 'react'
import '../css/Shopping.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBell, faTrash} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa';
import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpg"
const Shopping = () => {
    const route = useNavigate();
return (
    <>
    <div className='Head-section'>
        <h1>Shopping Cart</h1>
        <div className='cartShop'>
        <div className='products'>
            <div className='prod'>
                <img src={card1} alt='cart'/>
                <div className='product-info'>
                    <h2 className='product-name'>Name : New Shops</h2>
                    <h4 className='product-price'>Price : 75$</h4>
                    <h4 className='product-offer'>Offer : 50%</h4>
                    <p className='product-remove'>
                    <FaTrash className='L'  />
                    <button className='button remove'>Remove</button>
                    </p>
                </div>
            </div>
            <div className='prod'>
                <img src={card2} alt='cart'/>
                <div className='product-info'>
                    <h2 className='product-name'>Nmae : New Shops</h2>
                    <h4 className='product-price'>Price : 50$</h4>
                    <h4 className='product-offer'>Offer : 50%</h4>
                    <p className='product-remove'>
                    <FaTrash className='L'  />
                    <button className='button remove'>Remove</button>
                    </p>
                </div>
            </div>
            <div className='prod'>
                <img src={card3} alt='cart'/>
                <div className='product-info'>
                    <h2 className='product-name'>Nmae : New Shops</h2>
                    <h4 className='product-price'>Price : 50$</h4>
                    <h4 className='product-offer'>Offer : 50%</h4>
                    <p className='product-remove'>
                    <FaTrash className='L'  />
                    <button className='button remove'>Remove</button>
                    </p>
                </div>
            </div>
        </div>
        <div className='cart-total'>
            <p>
                <span>Total Price</span>
                <span>3,000$</span>
            </p>
            <p>
                <span>Number Of Item</span>
                <span>3</span>
            </p>
            <p>
                <span>You Have</span>
                <span>1,000</span>
            </p>
            <a href='#1' onClick={()=>{route('/Checkout')}}>proceed to checkout</a>
        </div>
        </div>
    </div>
    </>
)
}

export default Shopping
