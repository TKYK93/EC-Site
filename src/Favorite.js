import React from 'react';
import './Favorite.css';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct';


const Favorite = () => {
    
    const[{ favorite }] = useStateValue();

    return (
        
        <div className="favorite">
            {favorite?.length === 0 ? (
                <div>
                    <h2>No favorite items addded.</h2>
                    <p>Click the heart button to add your favorite items</p>
                </div>
         ) : (
                <div>
                    <h2 className="favorite_title">Your Favorite</h2> 
                
                        <FlipMove>
                        {favorite?.map((item)=>(
                            <div className="favorite_item">
                                <CheckoutProduct
                                key={Math.random()* 100000}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                hideRemoveButton
                                showFavoriteRemove={true}
                                showAddButton={true}
                                />
                            </div>
                        ))
                        }
                        </FlipMove> 
                
                </div>
         )}
         
        </div>
    )
}

export default Favorite
