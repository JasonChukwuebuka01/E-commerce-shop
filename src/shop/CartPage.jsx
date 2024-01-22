import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from './CheckOutPage';

const CartPage = () => {

    const [cartItems, setCartItems] = useState([]);



    useEffect(() => {
        //Fetch cart item from Local Storage
        const storageCartItem = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storageCartItem);

        console.log(storageCartItem)
    }, []);





    //Calculate prices
    function calculateTotalPrices(item) {
        return item.price * item.quantity;
    };





    //Handle quantity Increase
    function handleIcrease(item) {
        item.quantity += 1;
        setCartItems([...cartItems]);

        //Update local storafe with new Cart items
        localStorage.setItem("cart", JSON.stringify(cartItems));
    };




    //Handle quantity decrease
    function handleDecrease(item) {

        if (item.quantity > 1) {
            item.quantity -= 1;

            setCartItems([...cartItems]);

            //Update local storafe with new Cart items
            localStorage.setItem("cart", JSON.stringify(cartItems));
        };
    };



    //Handle item remove

    function handleRemoveItem(item) {

        const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);

        setCartItems(updatedCart);

        updateLocalStorage(updatedCart);

    };



    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };





    //Card subtotal
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrices(item);
    }, 0);


    //order total
    const orderTotal = cartSubtotal;

    return (

        <div>
            <PageHeader
                title={"Shop cart"}
                curPage={"Cart Page"}
            />

            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className='section-wrapper'>
                        {/*Cart top*/}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Products</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td className='product-item  cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>${item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input
                                                            type="text"
                                                            className='cart-plus-minus-box'
                                                            name="qtybutton"
                                                            value={item.quantity}
                                                        />
                                                        <div className="inc qtybutton" onClick={() => handleIcrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>${calculateTotalPrices(item)}</td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}>
                                                        <img src={delImgUrl} alt="" />
                                                    </a>
                                                </td>
                                            </tr>

                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/*............. cart top ends.......*/}

                        {/* cart bottom*/}
                        <div className="cart-bottom">
                            {/*check-out box*/}
                            <div className="cart-checkout-box">
                                <form className='coupon'>
                                    <input
                                        type="text"
                                        name="coupon"
                                        id='coupon'
                                        placeholder='Coupon code....'
                                        className='cart-page-input-text'
                                    />
                                    <input type="submit" value={"Apply Coupon"} />
                                </form>
                                <form className='cart-checkout'>
                                    <input
                                        type="submit"
                                        value="Update Cart"
                                    />
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>
                            </div>
                            {/*..........check-out box end...........*/}

                            {/*shopping box*/}
                            <div className='shipping-box'>
                                <div className="row ">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="uk">United Kingdom (Uk)</option>
                                                    <option value="uk">United States (USA)</option>
                                                    <option value="nig"> Nigeria</option>
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="pak">Pakistan</option>
                                                    <option value="ind">India</option>
                                                    <option value="np">Nepal</option>
                                                </select>
                                            </div>

                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="uk">New York</option>
                                                    <option value="uk">London</option>
                                                    <option value="nig">Lagos</option>
                                                    <option value="bd">Dhaka</option>
                                                    <option value="pak">Korachi</option>
                                                    <option value="ind">New Delhi</option>
                                                    <option value="np">Nepal</option>l
                                                </select>
                                            </div>

                                            <input
                                                type="text"
                                                name="postalCode"
                                                id='postalCode'
                                                className='cart-page-input-text'
                                                placeholder='PostalCode/Zip'
                                            />
                                            <button type='submit'>Update Address</button>

                                        </div>

                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Total</h3>
                                            <ul className="lab-ul">
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>${cartSubtotal}</p>
                                                </li>

                                                <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>

                                                <li>
                                                    <span className='pull-left'>Order total</span>
                                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/*.............shopping box...........*/}
                        </div>
                        {/*......... cart bottom ends........*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage



/*

<span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>*/