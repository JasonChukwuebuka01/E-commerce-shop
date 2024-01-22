import React, { useState } from 'react'
import { Link} from 'react-router-dom';

const desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"


const ProductDisplay = ({ item }) => {

    const { name, id, price, seller, ratingsCount, quantity, img } = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");



    function handleSubmit(e) {
        e.preventDefault();


        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        };

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);


        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity

        } else {
            existingCart.push(product);
        };

        // update local Storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // Reset Form Fields
        setQuantity(1);
        setColor("Select color");
        setCoupon("");
        setSize("Select Size");

    };

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className="rating">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span> {ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>


            {/* cart components*/}
            <div>
                <form onSubmit={handleSubmit}>
                    {/* Size*/}
                    <div className="select-product size">
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <option >Select Size</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>

                    {/* color*/}
                    <div className="select-product size">
                        <select
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <option >Select Color</option>
                            <option value="Pink">Pink</option>
                            <option value="Ash">Ash</option>
                            <option value="Red">Red</option>
                            <option value="White">White</option>
                            <option value="Blue">Blue</option>
                            <option value="Black">Black</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>

                    {/* Cart plus minus*/}
                    <div className="cart-plus-minus">
                        <div
                            className='dec qtybutton'
                            onClick={() => {
                                if (prequantity > 1) {
                                    setQuantity(prequantity - 1)
                                }
                            }}
                        >-
                        </div>
                        <input
                            type="text"
                            name='qtybutton'
                            id='qtybutton'
                            value={prequantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className='cart-plus-minus-box'
                        />
                        <div
                            className='inc qtybutton'
                            onClick={() => setQuantity(prequantity + 1)}
                        >+
                        </div>
                    </div>

                    {/* coupon field*/}
                    <div className="discount-code mb-2">
                        <input
                            type="text"
                            placeholder='Enter Discount Code'
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                    </div>

                    {/*button section*/}
                    <button type='submit' className='lab-btn'>
                        <span>Add to Cart</span>
                    </button>
                    <Link to='/cart-page' className='lab-btn bg-primary'>
                        <span>Check Out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay