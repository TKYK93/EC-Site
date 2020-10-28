import React from 'react';
import './Product.css'
import {useStateValue} from './StateProvider';
import FavoriteIcon from '@material-ui/icons/Favorite';



const Product = ({id, title, image, price, rating}) => {

    const [{basket, favorite}, dispatch] = useStateValue();

    const addToFavorite = () => {
    
        dispatch({
        type: 'ADD_TO_FAVORITE',
        item: {
            key: id,
            id: id,
            title: title,
            price: price,
            rating: rating,
            image: image,
        },
    });
        console.log("favorite: ", {favorite});
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
        console.log("basket: ", {basket});
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
                        ))
                    }
                </div>
            </div>

            <FavoriteIcon onClick={addToFavorite} className="product_favorite"/>
            
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>

        </div>

    );

}

export default Product;