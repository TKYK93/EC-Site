import React, { forwardRef } from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

const CheckoutProduct = forwardRef(({ id, title, image, price, rating, hideRemoveButton, showFavoriteRemove, showAddButton }, ref) => {
    
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    };

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
    };

    const removeFromFavotite = () => {
        dispatch({
            type: "REMOVE_FROM_FAVORITE",
            id: id
        });
    };

    return(
        
        <div ref={ref} className="checkoutProduct">
            <img src={image} alt=""/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>

                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                    {
                        Array(rating).fill().map((star, i)=>(
                            <p key={i}>★</p>
                        ))
                    }
                </div>

                {!hideRemoveButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}

                {showAddButton && (
                    <button onClick={addToBasket}>Add to Basket</button>
                )}
                
                {showFavoriteRemove && (
                    <button onClick={removeFromFavotite}>Remove from Favorite</button>
                )}
                
            </div>
       
        </div>
    )
})

export default CheckoutProduct;