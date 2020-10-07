import React from 'react';
import './Product.css'
import {useStateValue} from './StateProvider';



const Product = ({id, title, image, price, rating}) => {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            key: id,
            id: id,
            title: title,
            price: price,
            rating: rating,
            image: image,
        },
    });
        console.log({basket});
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((star, i)=>(
                            <p key={i}>★</p>
                        )

                        )
                    }
                </div>
            </div>
            
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>

        </div>

    );

}

export default Product;